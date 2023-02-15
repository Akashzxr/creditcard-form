import React from 'react'
import styled from 'styled-components'

export default function CreditCardFront(props) {
  const {name,cardnumber,month,year} = props;
  return (
    <Container>
        <Circlecontainer>
          <Bigcircle/>
          <Smallcircle/>
        </Circlecontainer>

        <CardDetailscontainer>
            <Cardnumber>{cardnumber}</Cardnumber>
            <NameAndDateContainer>
                <div>{name}</div>
                <div>{month}/{year}</div> 
            </NameAndDateContainer>
        </CardDetailscontainer>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  padding : 1rem;
  top: 7rem;
  left: 11rem;
  width: 16rem;
  height: 10rem;
  border-radius: 7px;
  background-image: linear-gradient(137deg, #6248ff 0%,#c94ec7 20%,#598fe7 ,#650992);
  box-shadow: 90px 64px 130px -60px #585858;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;

  @media (max-width: 600px){
    top: 10rem;
    left: 1rem;
    width: 15rem;
    z-index: 1;
    height: 8rem;
  }
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
   font-size: 21px;
   font-weight: bold;
   text-align: center;
   word-spacing: 1px;
   letter-spacing: 1px;
   @media (max-width: 600px){
    font-size: 19px;
    word-spacing: 1px;
  }
`
const NameAndDateContainer = styled.div`
  font-size: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`