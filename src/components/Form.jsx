import React from 'react'
import styled from 'styled-components'

function Form(props) {
  const {setname,setcardnumber,setmonth,setyear,setcvc} = props;

  return (
    <FormContainer>
        <InputContainer>
          <Label>CARDHOLDER NAME</Label>
          <Input placeholder='e.g.Jane Appleseed' width='21rem' onChange={e => setname(e.target.value)}/>
        </InputContainer>

        <InputContainer>
          <Label>CARD NUMBER</Label>
          <Input placeholder='e.g.1234 5678 9123 0000' width='21rem' onChange={e => setcardnumber(e.target.value)}/>
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
              <Input placeholder='e.g.123' width='6rem' onChange={e => setcvc(e.target.value)}/>
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
`
const MonthYearContainer = styled.div`
  display: flex;
  gap: 5px;
`
const DateCvcContainer = styled.div`
  display: flex;
  gap: 15px;
`
const Button = styled.button`
  background-color: #220930;
  color: white;
  
`
export default Form