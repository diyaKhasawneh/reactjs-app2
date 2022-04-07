import React from 'react'
import styled from "styled-components";
import Search from "../img/search-removebg-preview.png"


const Container = styled.div`
width: 100px;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: -7px -7px 13px 3px #00000042;
-webkit-box-shadow: -7px -7px 13px 3px #00000040;
-moz-box-shadow: -7px -7px 13px 3px #0000003d;

@media only screen and (max-width:480px){//small devices 
width: 50px;
}
`;

const Image = styled.img`
width: 20px;
`;
const Text = styled.span`
margin-top: 10px;
text-align: center;

@media only screen and (max-width:480px){//small devices 
font-size: 14px;
}
`;

export default function MiniCard() {
  return (
    <Container>
        <Image src={Search}/>
        <Text>Lorem ipsum, dolor sit amet</Text>

    </Container>
  )
}
