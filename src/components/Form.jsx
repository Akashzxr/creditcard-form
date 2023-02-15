import React from 'react'
import styled from 'styled-components'


function Form(props) {
  const {setname,setcardnumber,setmonth,setyear,setcvc} = props;

  return (
    <FormContainer>
        <InputContainer>
          <Label>CARDHOLDER NAME</Label>
          <Input placeholder='e.g.Jane Appleseed'  onChange={e => setname(e.target.value)}/>
        </InputContainer>

        <InputContainer>
          <Label>CARD NUMBER</Label>
          <Input placeholder='e.g.1234 5678 9123 0000' onChange={e => setcardnumber(e.target.value)}/>
        </InputContainer>

        <DateCvcContainer>
            <InputContainer>
              <Label>EXP.DATE (MM/YY)</Label>
              <MonthYearContainer>
                <Input placeholder='MM' width='2rem' onChange={e => setmonth(e.target.value)}/>
                <Input placeholder='YY' width='2rem' onChange={e => setyear(e.target.value)}/>
              </MonthYearContainer>
            </InputContainer>

            <InputContainer>
              <Label>CVC</Label>
              <Input placeholder='e.g.123'  onChange={e => setcvc(e.target.value)}/>
            </InputContainer>
        </DateCvcContainer>
        
        <InputContainer>
          <Button>Confirm</Button>
        </InputContainer>
        
    </FormContainer>
  )
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 1rem;
  justify-content: center;
  margin-right: 15%;
  @media (max-width: 600px){
    padding: 10%;
    padding-left: 5%;
    margin: 0;
    margin-bottom: 11%;
  }
`
const Label = styled.label`
  font-size: 12px;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`
const Input = styled.input`
  height: 2.2rem;
  border-radius: 5px;
  border: solid #d7d5d5 2px;
  width: ${props => props.width};
  padding: 2px 8px;

  &:focus{
    outline-color: #9fd99f;
  }

  @media (max-width: 600px){
    
    padding-left: 6px;
    height: 2.7rem;
  }
`
const MonthYearContainer = styled.div`
  display: flex;
  gap: 5px;
`
const DateCvcContainer = styled.div`
  display: flex;
  gap: 15px;
  display: flex;
  align-items: center;
`
const Button = styled.button`
  background-color: #220930;
  color: white;
  @media (max-width: 600px){
    
    padding: 5%;
  }
`
export default Form