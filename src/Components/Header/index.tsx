import React, {useState} from 'react'
import { Container, Form } from './styles'
import NovoContato from '../NovoContato/index'
import Filtro from '../Filtro/index'
import { HeaderProps } from './interface'

const Header = ({setContatos, contatos}: HeaderProps) => {
  const [newUser, setNewUser] = useState(false)

  return (
      <Container>
        <Form>
          <Filtro
            setNewUser={setNewUser}
            newUser={newUser}
            setContatos={setContatos} 
            contatos={contatos}
          />
          {newUser && <NovoContato 
            setContatos={setContatos} 
            contatos={contatos}
            setNewUser={setNewUser}
          />}
        </Form>
      </Container>
  )
}

export default Header

