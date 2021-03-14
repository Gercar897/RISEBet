import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.div`
    background: #000;
    color: #fff;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Footer = () => {
    return (
        <FooterSection>
            <p>Gambling can be addictive, please play responsibly. @2021 RISE</p>
        </FooterSection>
    )
}

export default Footer
