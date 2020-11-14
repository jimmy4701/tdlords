import React from 'react'
import styled from 'styled-components'

const Navbar = (props) => {
    return(
        <CustomNavbar>
            <a href="/rules">Règles</a>
        </CustomNavbar>
    )
}

const CustomNavbar = styled.div`
    background-color: black;
    display: flex;
    padding: 1em;
    font-size: 1.2em;

    > a {
        color: white;
        text-decoration: none;

        &:hover {
            font-size: bold;
        }
    }
`

export default Navbar