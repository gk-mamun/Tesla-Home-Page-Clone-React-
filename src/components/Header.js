import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
    const [mobileMenuStatus, setMobileMenuStatus] = useState(false)
    const cars = useSelector(selectCars)

    const closeSidebarMenu = () => {
        setMobileMenuStatus(false)
    }

    return (
        <Container>
            <a href="#">
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                {cars && cars.map((car, index) => (
            
                    <a key={index} href={"#" + car.toLowerCase().replace(" ", "-")}>{car}</a>
                ))}
                
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={() => setMobileMenuStatus(true)}/>
            </RightMenu>

            <BurgerNav show={ mobileMenuStatus }>
                <CloseBtnWrapper>
                    <CustomCloseBtn onClick={closeSidebarMenu} />
                </CloseBtnWrapper>
                {cars && cars.map((car, index) => (
                    <li><a key={index} href={"#" + car.toLowerCase().replace(" ", "-")} onClick={closeSidebarMenu}>{car}</a></li>
                ))}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadaster</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header


const Container = styled.div`
    min-height: 60px;
    top: 0;
    left: 0;
    width: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media screen and (max-width: 768px) {
        display: none
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    width: 300px;
    z-index: 100;
    list-style: none;
    padding: 20px;
    text-align: left;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in-out;

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);

        a {
            font-weight: 600;
        }
    }
`
const CloseBtnWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const CustomCloseBtn = styled(CloseIcon)`
    cursor: pointer;
`