import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import Footer from './Footer'

function Home() {
    return (
        <Container>
            <Section 
                id="model-s"
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg = "model-s.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing inventory"
            />
            <Section 
                id="model-y"
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg = "model-y.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing inventory"
            />
            <Section 
                id="model-3"
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg = "model-3.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing inventory"
            />
            <Section 
                id="model-x"
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg = "model-x.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing inventory"
            />
            <Section 
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImg = "solar-panel.jpg"
                leftBtnText = "Order now"
                rightBtnText = "Learn More"
            />
            <Section 
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roof Plus Panels"
                backgroundImg = "solar-roof.jpg"
                leftBtnText = "Order now"
                rightBtnText = "Learn More"
            />
            <Section 
                title="Accessories"
                description=""
                backgroundImg = "accessories.jpg"
                leftBtnText = "Shop Now"
            />
            <Footer />
        </Container>
        
    )
}

export default Home


const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
`