import React from 'react';
import styled from 'styled-components';

export default function Footer() {
    let url="https://github.com/Skywingy";
    return (
        <FooterWrapper className='footer'>
            <a href={url} target="_blank" rel="noreferrer">Copyright © 2022 SkyWingy</a>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`
position: absolute;
bottom: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
padding: 0.5rem;
background-color: #FFE5B4;
color: black;
`