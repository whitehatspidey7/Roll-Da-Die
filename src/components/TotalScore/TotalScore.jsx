import React from 'react'
import styled from 'styled-components';

const TotalScore = () => {
  const ScoreContainer = styled.div`
  width:135px;
  height:151px;
  font-weight:bold;
  font-size:larger`;
  return (
    <ScoreContainer>
      <h1>0</h1>
      <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore;
