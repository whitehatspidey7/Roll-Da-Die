import React from 'react'
import dices from '../../images/dices1.png';
import styled from "styled-components";
import './HomePage.css';

const Container = styled.div`
width:1182px;
height:552px;
display:flex;
justify-content:center;
align-items:center;`;


const Button = styled.button`
color:white;
background-color:black;
width:220px;
height:40px;
border-radius:5px;
border:none;
font-size:16px;
&:hover{
  background-color:grey;
  transition:10ms;
}
cursor: pointer;`;

const Home_page = (props) => {
  return (
        <>
    <Container className='container'>

      <div className='dice-img'>
      <img src={dices}/>
      </div>

      <div className='text'>
        <h1>Roll'Da'Die</h1>
        <Button onClick={props.toggle}>Play Now</Button>
      </div>

    </Container>
    </>

  )
}

export default Home_page;
