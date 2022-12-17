import styled from "styled-components";

import config from "../../../config.json";

import { DarkModeSwitch } from "./components/DarkModeSwitch";
import { Search } from './components/Search';

const StyledMenu = styled.header`
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
  border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;

  .logo {
    width: 100%;
    max-width: 80px;

    @media (min-width: 600px) {
      max-width: 127px;
    }

    .text {
      fill: ${({ theme }) => theme.textColorBase || "#222222"};
    }

  }

  #userPicture {
    height: 40px;
    width: 40px;
    margin-top: -5px;
    display: ${({ showUserPicture }) => showUserPicture};

  }

  #userPicture::after {
    content: ${() => JSON.stringify(config.name)};

    position: absolute;
    left: calc(50% + 65px);
    top: 15px;
  }

`;

const StyledLogo = styled.div`
  display: 'flex';
  align-items: center;

  svg {
    width: 50px;
    height: 50px;

  }

  a::after {
    content: 'ReactTube';
    color: red;
    position: relative;
    bottom: 18px;
  }

  color: ${({ theme }) => theme.textColorBase || "#222222"};

`;

export function Menu({ valorDoFiltro, setValorDoFiltro, showSearchBar, showUserPicture }) {
  return (
    <StyledMenu showUserPicture={showUserPicture}>
      <div>
        <Logo />

      </div>

      <Search valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} showSearchBar={showSearchBar} />

      <div id='userPicture'>
        <img src={`https://github.com/${config.github}.png`} />
      </div>

      <DarkModeSwitch />

    </StyledMenu>

  );

};

function Logo() {
  return (
    <StyledLogo>
      <a href="/">
        <svg height="2500" viewBox="0 .03 2498 2502.47" width="2496" xmlns="http://www.w3.org/2000/svg">
          <path d="m1293.24 1938.65-409.54-7.49c-132.6-2.61-265.53 2.6-395.53-24.44-197.76-40.4-211.77-238.49-226.43-404.65-20.2-233.6-12.38-471.44 25.74-703.09 21.52-129.98 106.21-207.54 237.18-215.98 442.12-30.63 887.18-27 1328.32-12.71 46.59 1.31 93.5 8.47 139.44 16.62 226.77 39.75 232.3 264.23 247 453.2 14.66 190.92 8.47 382.82-19.55 572.44-22.48 157-65.49 288.66-247 301.37-227.42 16.62-449.62 30-677.68 25.74.01-1.01-1.3-1.01-1.95-1.01zm-240.77-397.48c171.38-98.4 339.49-195.16 509.89-292.9-171.7-98.4-339.49-195.16-509.89-292.9z" fill="#f00" />
        </svg>
        
      </a>
    </StyledLogo>

  );

};