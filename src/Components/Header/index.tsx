import React, {useState} from 'react'
import { Container, Form } from './styles'
import NovoContato from '../NovoContato/index'
import Filtro from '../Filtro/index'
import { NovoContatoProps } from '../NovoContato/interface'

const Header = ({setContatos, contatos}: NovoContatoProps) => {
  const [newUser, setNewUser] = useState(false)

  return (
      <Container>
        <Form>
          <Filtro
            setNewUser={setNewUser}
            newUser={newUser}
          />
          {newUser && <NovoContato setContatos={setContatos} contatos={contatos}/>}
        </Form>
      </Container>
  )
}

export default Header

