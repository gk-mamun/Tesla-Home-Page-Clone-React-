import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <Container>
            <FooterNav>
                <span>Tesla &copy; { new Date().getFullYear() }</span>
                <a href="#">Privacy & Legal</a>
                <a href="#">Contact</a>
                <a href="#">Careers</a>
                <a href="#">News</a>
                <a href="#">Engage</a>
                <a href="#">Location</a>
            </FooterNav>
        </Container>
    )
}

export default Footer


const Container = styled.footer`
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const FooterNav = styled.div`

    a, span {
        color: #5c5d61;
        font-size: 14px;
        margin: 0 7px;
    }
`