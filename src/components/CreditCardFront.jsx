import React from 'react'
import styled from 'styled-components'

export default function CreditCardFront() {
  return (
    <Container>
        <Circlecontainer>
          <Bigcircle/>
          <Smallcircle/>
        </Circlecontainer>

        <CardDetailscontainer>
            <Cardnumber>0000 0000 0000 0000</Cardnumber>
            <NameAndDateContainer>
                <div>Akash</div>
                <div>0/0</div> 
            </NameAndDateContainer>
        </CardDetailscontainer>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  padding : 1rem;
  top: 10rem;
  left: 11rem;
  width: 19rem;
  height: 10rem;
  border-radius: 7px;
  background-image: linear-gradient(137deg, #6248ff 0%,#c94ec7 20%,#598fe7 ,#650992);
  box-shadow: 90px 64px 130px -60px #585858;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
}
`;

const Circlecontainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-start;
  align-items: center;
`

const Bigcircle = styled.div`
  width: 1.9rem;
  height: 1.9rem;
  border-radius: 50%;
  background-color: white;
`

const Smallcircle = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: white;
  border: solid white 1px;
`
const CardDetailscontainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const Cardnumber = styled.div`
   font-size: 22px;
   font-weight: bold;
   text-align: center;
   letter-spacing: 3px;
`
const NameAndDateContainer = styled.div`
  font-size: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`