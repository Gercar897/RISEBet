import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
    height: 80px;
    background: #000;
    color:#fff;
`
    

const Navbar = () => {
    return (
        <Nav>
            <div>
                <Link href="/">
                    <a>NXT</a>
                </Link>
            </div>
            <div>
            <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link> 
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
            </div>
        </Nav>
    )
}

export default Navbar
