import React from "react";
import { ColorModeContext } from "../src/components/Menu/components/ColorMode";


export default function Video() {
    const contexto = React.useContext(ColorModeContext);

    return (
        <div>
            Video!

            {contexto.mode}

            <button onClick={() => contexto.toggleMode()}>

                Trocar modo

            </button>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/cf_sHldG9c4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>
        
    );

};