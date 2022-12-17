import React, { useState, useEffect } from "react";

import { StyledVideo } from '../src/components/StyledVideo';
import { Menu } from "../src/components/Menu";
import { ColorModeContext } from "../src/components/Menu/components/ColorMode";


export default function Video() {
    const contexto = React.useContext(ColorModeContext);

    const [values, setValues] = useState({});

    useEffect(() => {
        if (!!localStorage) setValues(JSON.parse(localStorage.getItem('video')));

    }, []);

    return (
        <StyledVideo>
            <Menu showSearchBar = { 'none' } showUserPicture = { 'flex' }/>

            <iframe width="560" height="315" src={values.url?.replace('watch?v=', 'embed/')} title={values.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" all></iframe>

        </StyledVideo>

    );

};