import { useState } from "react";

import { StyledRegisterVideo } from "./styles";

import { videoService } from '../services/videoService';

function useForm(propsDoForm) {
    const [values, setValues] = useState(propsDoForm.initialValues);

    const [formVisivel, setFormVisivel] = useState(false);

    const service = videoService();

    return {
        values,
        formVisivel,
        setFormVisivel,
        handleChange: (evento) => {
            const value = evento.target.value;
            const name = evento.target.name;

            setValues({ ...values, [name]: value });

        },

        handleSubmit: (evento) => {
            evento.preventDefault();

            console.log(values);

            if (validateYouTubeURL(values.url)) {
                setFormVisivel(false);

                const thumb = getThumbnail(values.url);

                videoService.createVideo

                service.createVideo(values.titulo, values.url, thumb, 'jogos');

                setValues({});

            } else {
                alert('O link informado não é valido!');

            };

        }

    };

};

function getThumbnail (url) {
    const idVideo = url.slice(url.indexOf('v=') + 2);

    return `https://img.youtube.com/vi/${ idVideo }/hqdefault.jpg`;
};

function validateYouTubeURL (url) {
    const regExValidarLink = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;

    return regExValidarLink.test(url);
};

export function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: { titulo: '', url: '' }

    });
    
    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => formCadastro.setFormVisivel(true)}>
                +
            </button>

            {formCadastro.formVisivel
                && (<form onSubmit={formCadastro.handleSubmit}>

                    <div>
                        <button type="button" className="close-modal" onClick={() => formCadastro.setFormVisivel(false)}>
                            X
                        </button>

                        <input
                            placeholder="Titulo do vídeo"
                            name="titulo"
                            value={formCadastro.values.titulo}
                            onChange={formCadastro.handleChange}
                        />

                        <input
                            placeholder="URL"
                            name="url"
                            value={formCadastro.values.url}
                            onChange={formCadastro.handleChange}
                        />

                        <button type="submit">
                            Cadastrar
                        </button>

                    </div>

                </form>)

            };

        </StyledRegisterVideo>

    );

};