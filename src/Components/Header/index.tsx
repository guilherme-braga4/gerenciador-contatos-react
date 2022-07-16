import React, {useState} from 'react'
import Input from '../Input/index'
import Botao from '../Botao/index'
import { Form } from './styles'

const Header = () => {
  const [form, setForm] = useState({})
  const [loading, setLoading] = useState()

  const handleSubmit = async (e: any) => {
    alert('Usuário Adicionado com Sucesso')
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {name, value} = event.target
    console.log('Evento do Input', event)
    setForm({...form, [name]: value})
    console.log("form", form)
  }

  return (
      <Form>
          <Input
            name="email"
            placeholder="Pesquisa por um contato"
            type="email"
            onChange={handleChange}
          />
          <Botao
            type="submit"
            text="Adicionar Contato"
            disabled={false}
            onClick={handleSubmit}
          />
      </Form>
  )
}

export default Header

