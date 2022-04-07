import React from 'react'
import styled from "styled-components";
import PriceCard from './PriceCard';
import AnimatedShapes from './AnimatedShapes';



const Container = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;

@media only screen and (max-width:480px){//small devices 

flex-direction: column;
}

`;

export default function Price() {
  return (
    <Container>
        <PriceCard price="10" type="Basic"/>
        <PriceCard price="20" type="premium"/>
        <PriceCard price="30" type="Advanced"/>
        <AnimatedShapes/>
    </Container>
  )
}
