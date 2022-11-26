import styled from "styled-components";

export const StyledFavoriteCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 8px;

    width: 100px;
    height: 124px;

    flex: none;
    order: 0;
    flex-grow: 0;

    h3 {
        width: 45px;
        height: 16px;

        font-family: 'Helvetica';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;

        color: #000;

        flex: none;
        order: 1;
        flex-grow: 0;
    }

    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        
    }

`;