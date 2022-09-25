import React from 'react';
import styled from 'styled-components';
import d from './d.png'
export default function Header() {
    return (
        <HeaderWrapper>
            <Logo src={d} alt="logo"></Logo>
        </HeaderWrapper>
)
}

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background-color: orange;
`
const Logo = styled.img`
    max-width: 200px;
`