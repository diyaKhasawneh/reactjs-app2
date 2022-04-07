import React from 'react'
import styled from "styled-components";

const Container = styled.div`
        margin-right: 50px;
    padding: 20px;
    box-shadow: -7px -7px 13px 3px #00000042;
-webkit-box-shadow: -7px -7px 13px 3px #00000040;
-moz-box-shadow: -7px -7px 13px 3px #0000003d;
background-color: white;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;

@media only screen and (max-width:480px){//small devices 
    margin-right: 0;
    margin-bottom: 10px;
    padding: 10px;
}
`;


const PriceContainer = styled.div`
display: flex;
align-items: center;
`;


const Price = styled.span`
    font-weight: bold;
    font-size: 50px;

    @media only screen and (max-width:480px){//small devices 
            font-size: 30px;
}
`;

const Type = styled.button`

padding: 10px;
margin: 10px 0;
border: 1.5px solid crimson;
color: crimson;
background-color: white;
border-radius: 20px;

@media only screen and (max-width:480px){//small devices 
display: none;
}

`;


const List = styled.ul`
    list-style: none;
`;

const ListItem = styled.li`
margin: 30px 0;

@media only screen and (max-width:480px){//small devices 
margin: 10px;
font-size: 12px;
}
`;


const Button = styled.button`
border: none;
background-color: darkblue;
color: white;
font-size: 16px;
padding: 15px;
border-radius: 10px;
cursor: pointer;
font-weight: bold;

@media only screen and (max-width:480px){//small devices 
font-size: 12px;
padding: 5px;
}
`;





export default function PriceCard({price, type}) {
  return (
    <Container>
            <PriceContainer>
                $<Price>{price}</Price>/month
                </PriceContainer>
                <Type>{type} Plan</Type>
                <List>
                    <ListItem>Lorem ipsum dolor sit amet.</ListItem>
                    <ListItem>Lorem ipsum dolor sit.</ListItem>
                    <ListItem>Lorem ipsum dolor sit amet consectetur.</ListItem>
                    <ListItem>Lorem, ipsum.</ListItem>{""}
                </List>
                <Button> Join Now </Button>
            
    </Container>
  )
}
