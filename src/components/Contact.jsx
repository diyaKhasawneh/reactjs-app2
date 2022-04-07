import React from 'react'
import styled from "styled-components";
import Map from '../img/map.png'
import Phone from '../img/phone2.png'
import Send from '../img/send.png'


const Container = styled.div`
height: 90%;
background: url("https://images.squarespace-cdn.com/content/v1/595db0b044024313332d1ef8/1609279187314-82LEGZY4MJ6F8NQ7RDF2/Grey+Diagonal+Plaid+Wallpaper2.jpg?format=2500w");

`;

const Wrapper = styled.div`
height: 100%;
padding: 20px;
display: flex;
align-items: center;
justify-content: center;

@media only screen and (max-width:480px){//small devices 

flex-direction: column;
}
`;


const FormContainer = styled.div`
width: 50%;

@media only screen and (max-width:480px){//small devices 
width: 100%;
}

`;
const Title = styled.h1`

margin-left: 12%;
margin-bottom: 30px;

@media only screen and (max-width:480px){//small devices 
margin: 10px;
}


`;


const AddressContainer = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;

@media only screen and (max-width:480px){//small devices 
width: 100%;
margin-top: 20px;

}


`;

const Form = styled.form`
height: 250px;
display: flex;
align-items: center;
justify-content: center;

@media only screen and (max-width:480px){//small devices 
flex-direction: column;
}

`;

const LeftForm = styled.div`

height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-right: 20px;

@media only screen and (max-width:480px){//small devices 
  height: 50%;
  margin-right: 0;
}

`;


const RightForm = styled.div`

height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;

@media only screen and (max-width:480px){//small devices 
height: 50%; 
}

`;

const Input = styled.input`
width: 200px;
padding: 20px;

@media only screen and (max-width:480px){//small devices 
  padding: 5px;
}
`;

const TextArea = styled.textarea`
width: 200px ;
height: 60%;
padding: 20px;

@media only screen and (max-width:480px){//small devices 
  padding: 5px;
  margin-top: 20px;
  margin-bottom: 10px;
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
padding: 5px;
font-size: 14px;
}
`;


const AddressItem = styled.div`

    display: flex;
    align-items: center;
    margin-bottom: 40px;

    @media only screen and (max-width:480px){//small devices 
      margin-bottom: 10px;
}

`;


const Icon = styled.img`
width: 20px;
margin-right: 20px;

@media only screen and (max-width:480px){//small devices 
  width: 15px;
}

`;

const Text = styled.span`
font-size: 20px;
margin-right: 15px;

@media only screen and (max-width:480px){//small devices 
    font-size: 14px;
}
`;





export default function Contact() {
  return (
    <Container>
        <Wrapper>
        <FormContainer>
            <Title>Qestions? <br/> Keep In Touch </Title>
            <Form>
            <LeftForm>
                <Input placeholder='Your name'/>
                <Input placeholder='Your Email'/>
                <Input placeholder='Subject'/>
            </LeftForm>
            <RightForm>
                <TextArea placeholder='Your Message'/>
                <Button>Send</Button>
            </RightForm>
            </Form>
            </FormContainer>
        <AddressContainer>

            <AddressItem>
              <Icon src={Map}/>  
              <Text>H a y N a z z a l- A m m a n  </Text>
            </AddressItem>
            <AddressItem>
              <Icon src={Phone}/>  
              <Text>+  ( 9 6 2  )  7 8 6 4  1  5 4 0 8  </Text>
            </AddressItem>
            <AddressItem>
              <Icon src={Send}/>  
              <Text>diyakhasawneh@yahoo.com</Text>
            </AddressItem>

        </AddressContainer>
        </Wrapper>
    </Container>
  )
}
