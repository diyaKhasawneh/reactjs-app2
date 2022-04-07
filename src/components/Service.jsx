import React, { useState } from 'react'
import styled from "styled-components";
import sec3image from "../img/yelgirl-removebg-preview.png"
import MiniCard from './MiniCard';
import Play from "../img/playwight.png"
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
    display: flex;
    height: 100%; 

    @media only screen and (max-width:480px){//small devices 
flex-direction: column;
}
`;
const Left = styled.div`
    width: 50%;
    position: relative;

    @media only screen and (max-width:480px){//small devices 
display: none;
}
`;
const Image = styled.img`
    display: ${props=> props.open && "none"};
   height: 100%;  //خليها 100 لما تحط صورة اطول 
   
`;

const Video = styled.video`
    display: ${props=> !props.open && "none"};
    height: 300px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;

    @media only screen and (max-width:480px){//small devices 
       width: 100%;
}
`;


const Right = styled.div`
    width: 50%;

    @media only screen and (max-width:480px){//small devices 
width: 100%;
}
`;


const Wrapper = styled.div`
        padding: 50px;
        display: flex;
        flex-direction: column;
        /* background-color: red; */

     @media only screen and (max-width:480px){//small devices 
            padding: 20px;
            
}
`;

const Title = styled.h1``;

const Desc = styled.p`
font-size: 20px;
margin-top: 20px;
color: #555;

`;

const CardContainer = styled.div`
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
       
`;

const Button = styled.button`
    width: 190px;
    border: none;
    border-radius: 10px;
    background-color: darkblue;
    color: white;
    font-size: 17px;
    padding: 15px;
    margin-top: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;

`;

const Icon = styled.img`
    width: 30px;
    margin-right: 10px;
`;

const Modal = styled.div`
width: 100vw;
height: 100vh;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0,0,0,0.5) ;
`;

const CloseButton = styled.button`
    position: absolute;
    background-color: white;
    padding: 5px;
    border: none;
    border-radius: 5px;
    right: 5px;
    top: 30%;
`;

export default function Service() {
    const [open,setOpen] = useState(false);
    const smallSecreen = window.screen.width <= 480 ? true : false;

  return (
    <Container>
       <Left>
           <Image open ={open} src={sec3image}/>
           <Video open ={open} autoPlay loop controls src='https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447762'/>
       </Left>  
       <Right>
           <Wrapper>
           <Title>
               Simple process to start
           </Title>
           <Desc>services organization has the experience and 
               expertise to help your business meet your goals and 
               objectives faster, with less risk. Zunesis is a consulting organization who assists 
               customers in achieving their business objectives with 
               the use of technology.</Desc>
               <CardContainer>
                   <MiniCard/>
                   <MiniCard/>
                   <MiniCard/>
               </CardContainer>
               <Button onClick={()=>setOpen(true)}>
                   <Icon src={Play}/> Discover more!
                   </Button>
           </Wrapper>

           </Right> 
           {smallSecreen && open && (
               <Modal>
                    <Video open ={open} autoPlay loop controls src='https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447762'/>
                    <CloseButton onClick={()=>setOpen(false)}>Close</CloseButton>
               </Modal>
           )}
           <AnimatedShapes/>
    </Container>
  )
}
