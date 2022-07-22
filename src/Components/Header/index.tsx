import React, {useState} from 'react'
import { Container, Form } from './styles'
import NovoContato from '../NovoContato/index'
import Filtro from '../Filtro/index'

const Header = () => {
  const [newUser, setNewUser] = useState(false)

  return (
      <Container>
        <Form>
          <Filtro
            setNewUser={setNewUser}
            newUser={newUser}
          />
          {newUser && <NovoContato/>}
        </Form>
      </Container>
  )
}

export default Header

