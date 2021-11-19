import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'


function Section({ id, title, description, backgroundImg, leftBtnText, rightBtnText }) {
    return (
        <Wrap bgImg={backgroundImg} id={id}>
            <Fade bottom>
                <ItemText>
                    <h1>{ title }</h1>
                    <p>{ description }</p>
                </ItemText>
            </Fade>

            <Fade bottom>
                <Buttons>
                    <ButtonGroup>
                        <LeftButton>
                            { leftBtnText }
                        </LeftButton>
                        { rightBtnText && 
                            <RightButton>
                                { rightBtnText }
                            </RightButton>
                        }
                        
                    </ButtonGroup>

                    <DownArrow src="/images/down-arrow.svg" />
                </Buttons>
            </Fade>
        </Wrap>
    )
}

export default Section


const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('/images/model-s.jpg');
    background-image: ${props => `url("/images/${props.bgImg}")`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    scroll-snap-align: center;

`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const Buttons = styled.div``

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`
    
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;

`

const RightButton = styled(LeftButton)`
    background-color: #fff;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`