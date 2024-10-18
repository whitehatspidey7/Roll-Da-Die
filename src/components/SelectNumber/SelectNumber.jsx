import React from 'react'
import styled from 'styled-components';

const ScoreContainer = styled.div``;
const Button = styled.button`
background-color:black;
width: 80px;
height: 80px;
color:white;
border-radius:5px;
cursor: pointer;
hover{
  background-color: white;
  color: black;
  border: 3px solid white;
};

`;
const SelectNumber = () => {
  return (
    <ScoreContainer>
      <Button>1</Button>
    </ScoreContainer>
  )
}

export default SelectNumber;
