import react from "react";

import config from "../config.json";

import { Menu } from "../src/components/Menu";

import { CSSReset } from "../src/components/CSSReset";

import { StyledHeader } from '../src/components/StyledHeader';
import { StyledTimeline } from '../src/components/StyledTimeline';
import { StyledBanner } from '../src/components/StyledBanner';
import { StyledFavorites } from '../src/components/StyledFavorites';
import { StyledFavoriteCard } from '../src/components/StyledFavoriteCard';

function HomePage() {
    const estilosDaHomePage = {
        // backgroundColor: "red" 
    };

    const [valorDoFiltro, setValorDoFiltro] = react.useState("");

    return (
        <>
            <CSSReset />

            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1

            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />

                <Header />

                <Timeline valorDoFiltro={valorDoFiltro} playlists={config.playlists}>
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
                <img src={`https://github.com/${config.github}.png`} />

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

    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];

                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>

                        <div>
                            {videos.filter((video) => {
                                    const titleNormalized = video.title.toLowerCase();
                                    const searchValueNormalized = valorDoFiltro.toLowerCase();

                                    return titleNormalized.includes(searchValueNormalized);
                                })
                                .map((video) => {
                                return (
                                    <a key={video.url} href={video.url}>
                                        <img src={video.thumb} />

                                        <span>
                                            {video.title}
                                        </span>

                                    </a>

                                );

                            })};

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