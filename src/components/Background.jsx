import React from 'react'
import styled from 'styled-components'

function Background() {
  return (
    <Back>

    </Back>
  )
}

const Back  = styled.div`
width: 19rem;
height: 100vh;
background-image: linear-gradient(137deg,#240932 8%,#461650 17%,#53233b 33%,#2f2c5b 43%,#240932 77%);
@media (max-width: 600px){
  width: 100%;
  height: 31vh;
}
`

export default Background