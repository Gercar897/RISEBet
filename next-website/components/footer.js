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
            <p>Pie de pagina</p>
        </FooterSection>
    )
}

export default Footer
