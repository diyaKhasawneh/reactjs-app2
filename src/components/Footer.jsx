import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    height: 10%;
    background-color: #111;
    color: lightgray;
`;

const Wrapper = styled.div`
padding: 20px;
display: flex;
justify-content: space-between;

@media only screen and (max-width:480px){//small devices 
padding: 10px;
}
`;

const List = styled.ul`
padding: 0;
margin: 0;
list-style: none;
display: flex;
`;

const ListItem = styled.li`
margin-right: 20px;

@media only screen and (max-width:480px){//small devices 
  margin-right: 10px;
  font-size: 14px;
}
`;


const Copyright = styled.span`
@media only screen and (max-width:480px){//small devices 
  font-size: 14px;
}
`;


export default function Footer() {
  return (
    <Container>
        <Wrapper>

            <List>
                <ListItem>Company</ListItem>
                <ListItem>Resources</ListItem>
                <ListItem>Product</ListItem>
                <ListItem> Get Help</ListItem>
            </List>

            <Copyright>Diya kh &#9400;	 </Copyright>

        </Wrapper>

    </Container>
  )
}
