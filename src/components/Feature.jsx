import React from 'react'
import styled from "styled-components";
import phone from "../img/phone.png"
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
display: flex;

@media only screen and (max-width:400px){//small devices 
flex-direction: column;
padding:30px 20px
}
`;
const Left = styled.div`
width: 50%;

@media only screen and (max-width:400px){//small devices 
display: none;
}
`;
const Image = styled.img`
width: 80%;
`;

const Right = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;


@media only screen and (max-width:400px){//small devices 
width: 100%;
}
`;
const Title = styled.span`
font-size: 70px;

@media only screen and (max-width:400px){//small devices 
font-size: 50px;
}
`;
const SubTitle = styled.span`
font-size: 24px;
font-style: italic;
color: #333;
margin-top: 30px;
`;
const Desc = styled.p`
font-size: 20px;
color: #777;
margin-top: 30px;
`;
const Button = styled.button`
width: 150px;
border: none;
padding: 15px 20px;
background-color: darkblue;
color: white;
border-radius: 20px;
font-size: 20px;
margin-top: 20px;
cursor: pointer;
`;


export default function Feature() {
  return (
    <Container>
        <Left><Image src={phone}/></Left>
        <Right>

            <Title>
                <b>good</b> design <br/>
                <b>good</b> business
            </Title>
            <SubTitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. </SubTitle>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita accusamus nulla ad blanditiis repellat iusto voluptatibus
                 aspernatur quidem nihil natus.</Desc>
                <Desc>Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. Rerum explicabo labore culpa, unde nihil sunt?</Desc>
               
            <Button>Show more</Button>

        </Right>
        <AnimatedShapes/>
    </Container>
  )
}
