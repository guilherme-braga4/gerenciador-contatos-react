import React, {useState} from 'react'
import { FiltroProps } from './interface'
import { Container } from './styles'
import { IoMdCloseCircle, IoMdPersonAdd } from 'react-icons/io';
import Input from '../Input/index'
import Botao from '../Botao/index'

const Filtro = ({setNewUser, newUser}: FiltroProps) => {
  const [form, setForm] = useState({})
  const [loading, setLoading] = useState()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {name, value} = event.target
    setForm({...form, [name]: value})
  }

  return (
    <Container>
          <Input
            name="contato"
            placeholder="Pesquisar por um contato"
            type="text"
            onChange={handleChange}
          />
          {newUser ? 
            <Botao
              type="submit"
              icon={<IoMdCloseCircle size={50} color={'#075e54'}/> }
              disabled={false}
              onClick={() => setNewUser(!newUser)}
            /> : 
            <Botao
              type="submit"
              icon={<IoMdPersonAdd size={50} color={'#075e54'}/>}
              disabled={false}
              onClick={() => setNewUser(!newUser)}
            />
          }
    </Container>
  )
}

export default Filtro