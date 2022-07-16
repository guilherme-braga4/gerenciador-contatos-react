import React from 'react'
import { ContatoProps } from './interface'
import { Container } from './styles'

const Contato = ({
  image,
  name,
  phone
}: ContatoProps): JSX.Element => {
  return (
    <Container>
      <img src={image}/>
      <p>{name}</p>
      <p>{phone}</p>
    </Container>
  )
}

export default Contato