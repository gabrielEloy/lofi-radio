import React from 'react'
import { Background } from './Components/Background'


interface Props {

}

const App = (props: Props) => {
  return (
    <Background 
      imageUrl={'https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} >

    </Background>
  )
}

export default App
