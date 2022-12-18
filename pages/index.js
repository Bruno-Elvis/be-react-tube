import { useState, useEffect } from "react";

import config from "../config.json";
import { videoService } from "../src/components/services/videoService";

import { Menu } from "../src/components/Menu";

import { CSSReset } from "../src/components/CSSReset";

import { StyledHeader } from '../src/components/StyledHeader';
import { StyledTimeline } from '../src/components/StyledTimeline';
import { StyledBanner } from '../src/components/StyledBanner';
import { StyledFavorites } from '../src/components/StyledFavorites';
import { StyledFavoriteCard } from '../src/components/StyledFavoriteCard';


function HomePage() {
    const service = videoService();
    const [valorDoFiltro, setValorDoFiltro] = useState("");
    const [playlists, setPlaylists] = useState({});

    useEffect(() => {
        console.log("useEffect");
        service
            .getAllVideos()
            .then((dados) => {
                console.log(dados.data);
                // Imutabilidade
                const novasPlaylists = {};

                dados.data?.forEach((video) => {
                    if (!novasPlaylists[video.playlist]) novasPlaylists[video.playlist] = [];
                    novasPlaylists[video.playlist] = [
                        video,
                        ...novasPlaylists[video.playlist],
                    ];

                });

                setPlaylists(novasPlaylists);

            });

    }, []);
    
    return (
        <>
            <CSSReset />

            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1

            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={ setValorDoFiltro } showSearchBar = { 'flex' } showUserPicture = { 'none' }/>

                <Header />

                <Timeline valorDoFiltro={valorDoFiltro} playlists={ playlists /*config.playlists*/ }> 
                    Conteúdo
                </Timeline>

            </div>

        </>

    );

};

export default HomePage;

function Header() {
    return (<>
        <StyledHeader>
            <StyledBanner />

            <section className="user-info">
                <img src={ `https://github.com/${config.github}.png` } />

                <div>
                    <h2>
                        {config.name}
                    </h2>

                    <p>
                        {config.job}
                    </p>

                </div>

            </section>

        </StyledHeader>

        {/* <Footer /> */}
    </>

    );

};

function Timeline({ valorDoFiltro, ...props }) {
    const playlistNames = Object.keys(props.playlists);

    const videoSelecionado = { title: '', url: '' };

    return (
        <StyledTimeline videoSelecionado={videoSelecionado} >
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];

                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>

                        <div>
                            {videos
                                .filter((video) => {
                                    const titleNormalized = video.title.toLowerCase();
                                    const searchValueNormalized = valorDoFiltro.toLowerCase();

                                    return titleNormalized.includes(searchValueNormalized);
                                })
                                .map((video) => {
                                    return (
                                        <a key={video.url} href={'/video'} onClick={(e) => {
                                                const categoriaPlaylist = e.target.parentElement.parentElement.parentElement.querySelector('h2').textContent;
                                                const titleVideo = e.target.parentElement.querySelector('span').textContent;
                                                const urlVideo = props.playlists[categoriaPlaylist].filter((video) => video.title === titleVideo).map((video) => video.url)[0];

                                                videoSelecionado.title = titleVideo;
                                                videoSelecionado.url = urlVideo;

                                                localStorage.setItem('video', JSON.stringify(videoSelecionado));

                                                console.log(titleVideo, urlVideo);
                                                
                                            }}>

                                            <img src={video.thumb} />

                                            <span>
                                                {video.title}
                                            </span>

                                        </a>

                                    );}
                                )

                            };

                        </div>

                    </section>

                );

            })};

        </StyledTimeline>
    );

};

function Footer () {
    return (
        <StyledFavorites>
            <h2>BE ReactTube Favoritos</h2>

            <StyledFavoriteCard>
                <img src={`https://github.com/${config.github}.png`}/>

                <h3>@teste</h3>

            </StyledFavoriteCard>

            <StyledFavoriteCard>
                <img src={`https://github.com/${config.github}.png`}/>

                <h3>@teste2</h3>

            </StyledFavoriteCard>

        </StyledFavorites>

    );
};