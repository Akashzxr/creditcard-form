import Background from './components/Background'
import CreditCardFront from './components/CreditCardFront'
import CreditCardBack from './components/CreditCardBack'
import Form from './components/Form'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

function App() {

  const [name,setname] = useState("Jane Appleseed");
  const [cardnumber,setcardnumber] = useState("0000 0000 0000 0000");
  const [month,setmonth] = useState("0");
  const [year,setyear] = useState("0");
  const [cvc,setcvc] = useState("000");

  useEffect(()=>{
    console.log(name);
  },[name])

  return (
    <AppContainer>
       <Background/>
       <CreditCardFront name={name}
                        cardnumber={cardnumber}
                        month={month}
                        year={year}/>
       <CreditCardBack cvc={cvc}/>
       <Form setname={setname}
             setcardnumber={setcardnumber}
             setmonth={setmonth}
             setyear={setyear}
             setcvc={setcvc}/>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px){
    flex-direction: column;
    height: 100vh;
    
  }
`

export default App
