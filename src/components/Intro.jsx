import React from 'react'
import styled from "styled-components";
import woman from "../img/youngwoman.png"
import AnimatedShapes from './AnimatedShapes';
const Container = styled.div`
height: calc(100vh - 50px);
display: flex;
padding: 20px;

@media only screen and (max-width:400px){//small devices 
flex-direction: column;
}
`;
const Left = styled.div`
width: 60%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media only screen and (max-width:400px){//small devices 
width: 100%;
height: 100%;
}
`;
const Title = styled.h1`
font-size: 60px;
width: 60%;
font-size: 50px;

@media only screen and (max-width:400px){//small devices 
width: 100%;
}
`;
const Desc = styled.p`
font-size: 20px;
width: 60%;
margin-top: 20px;
`;
const Info = styled.div`
margin-top: 50px;
width: 60%;
display: flex;
justify-content: space-between;
align-items: center;

@media only screen and (max-width:480px){//small devices 
width: 100%;
flex-direction: column;
}


`;
const Button = styled.button`
padding: 15px;
background-color: darkblue;
color: white;
border-radius: 10px;
font-weight: bold;
border: none;
letter-spacing: 2px;
cursor: pointer;

@media only screen and (max-width:480px){//small devices 

margin-bottom: 20px;
}
`;

const Contact = styled.div`
display: flex;
flex-direction: column;

`;
const Phone = styled.span`
color:#f0667d;
font-weight: bold;

`;
const ContactText = styled.span`
color: gray;
margin-top: 5px;

`;

const Right = styled.div`
width: 40%;

@media only screen and (max-width:480px){//small devices 
display: none;
}
`;
const Image = styled.img`
width: 100%;
`;




export default function Intro() {
  return (
    <Container>
    <Left>
        <Title>Best website animation by Diya</Title>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fugit
             praesentium, iure dignissimos recusandae facilis!</Desc>
             <Info>
                <Button>Start with us</Button>
                <Contact>
                    <Phone> call me (962)786 415 408 </Phone>
                    <ContactText> For any question or feedback  </ContactText>
                </Contact>
             </Info>
        </Left>
    <Right><Image src={woman}/></Right>
    <AnimatedShapes/>

    </Container>
  )
}
