import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
    height: 80px;
    background: #000;
    color:#fff;
    display:flex;
    justify-content: space-between;
    align-items: center;
`;
    
const StyledLink = styled.a`
    padding: 0rem 2rem;
    `

const Navbar = () => {
    return (
        <Nav>
            <div>
                <Link href='/' passHref>
                    <StyledLink>RISE Bet</StyledLink>
                </Link>
            </div>
            <div>
            <Link href='/' passHref>
                    <StyledLink>Home</StyledLink>
                </Link>
                <Link href='/about' passHref>
                    <StyledLink>About</StyledLink>
                </Link> 
                <Link href='/contact' passHref>
                    <StyledLink>Contact</StyledLink>
                </Link>
                <Link href='/responsible' passHref>
                    <StyledLink>Responsible Gaming</StyledLink>
                </Link>
                <Link href='/terms' passHref>
                    <StyledLink>Terms and conditions</StyledLink>
                </Link>
            </div>

<div>
            <button href="/signup" passHref className="bg-blue-500 hover:bg-third hover:bg-opacity-70 text-white font-bold py-2 px-4 rounded">
            <a href="/signup"> Sign Up </a>
</button>

<button className="bg-blue hover:bg-texty hover:bg-opacity-70 text-white font-bold py-2 px-4 rounded">
<a href="/login"> Log in </a>
</button>

</div>

        </Nav>
    )
}

export default Navbar
