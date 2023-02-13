import React from 'react'
import styled from 'styled-components';

function CreditCardBack() {
  return (
    <Container>
       <Blackstrip/>
       <DetailsContainer>
          <CvcNumber>000</CvcNumber>
       </DetailsContainer>

       <LinesContainer>
          <LineRow>
            <Line width="4.5rem"/>
            <Line width="1.8rem"/>
            <Line width="2rem"/>
            <Line width="1rem"/>
          </LineRow>
          <LineRow>
            <Line width="1rem"/>
            <Line width="3rem"/>
            <Line width="2rem"/>
            <Line width="0.7rem"/>
          </LineRow>
          <LineRow>
            <Line width="1rem"/>
            <Line width="1.5rem"/>
            <Line width="1.5rem"/>
            <Line width="4.5rem"/>
          </LineRow>
       </LinesContainer>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: 24rem;
  left: 14rem;
  width: 22rem;
  height: 13rem;
  border-radius: 7px;
  background-image: linear-gradient(130deg,#fdfefe 27%,#d3d4d9);
  display: flex;
  flex-direction: column;
  color: white;
  gap: 20px;
  box-shadow: 90px 64px 130px -60px #585858;
}
`;

const Blackstrip = styled.div`
  width: 100%;
  height: 2.5rem;
  background-color: #2f2f2f;
  margin-top: 1.4rem;
`
const DetailsContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;

`
const CvcNumber = styled.div`
  width: 80%;
  height: 2rem;
  background-color: #adb6bf;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: flex-end;
  padding-right: 16px;
  border-radius: 4px;
}
`

const LinesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 5px;
  margin-top: 13px;
`
const LineRow = styled.div`
  display: flex;
  gap: 5px;
`

const Line = styled.div`
  height: 3px;
  width: ${props => props.width};
  border-radius: 14px;
  background-color: #b2b6bf;
`

export default CreditCardBack