import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.div`
    backgrounds: #000;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const footer = () => {
    return (
        <FooterSection>
            <p>Pie de pagina</p>
        </FooterSection>
    )
}

export default footer
