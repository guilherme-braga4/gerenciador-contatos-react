import React, { useEffect, useState } from 'react'
import Input from '../Input/index'
import Botao from '../Botao/index'
import { Container, Form, IconeSalvar } from './styles'
import { FaUserAlt, FaSave } from 'react-icons/fa'
import { BsFillImageFill, BsFillTelephoneFill } from 'react-icons/bs'
import { v4 as uuidv4 } from 'uuid'
import { NovoContatoProps } from './interface'

const NovoContato = ({ setContatos, contatos, setNewUser}: NovoContatoProps) => {
  const [form, setForm] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [disabled, setDisabled] = useState<boolean>(true)

  const createContato = async (event: any) => {
    event?.preventDefault()
    console.log('handleSubmit')
    //Atualizando o state Contatos
    //----> Solução: O push funciona, porém, não altera o estado, pois retornaria um number. Por isso, deve-se concatenar os objetos no array
    const novoContato = [...contatos, { ...form, id: uuidv4() }]
    setContatos(novoContato)
    setNewUser(false)
    //O state é montado depois do localStorage.setItem: existe atraso de 1 objeto
    //---> Solução: criar na memória o novoContato, para ter disponível a atribuição no momento do localStorage.setItem
    localStorage.setItem('user', JSON.stringify(novoContato))
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  //Validando os inputs
  useEffect(() => {
    if (form?.nome?.length > 2 && form?.telefone?.length > 6 && form?.imagem != undefined) {
      setDisabled(false)
    } else setDisabled(true)
  }, [form])

  return (
    <Container>
      <Form>
        <BsFillImageFill size={30} />
        <Input
          name="imagem"
          placeholder="Adicione a URL da imagem"
          type="text"
          onChange={handleChange}
        />
      </Form>
      <Form>
        <FaUserAlt size={30} />
        <Input
          name="nome"
          placeholder="Digite o nome"
          type="text"
          onChange={handleChange}
        />
      </Form>
      <Form>
        <BsFillTelephoneFill size={30} />
        <Input
          name="telefone"
          placeholder="(XX) 123456789"
          type="phone"
          onChange={handleChange}
        />
      </Form>
      <Botao
        type="submit"
        icon={<IconeSalvar/>}
        disabled={disabled}
        onClick={createContato}
      />
    </Container>
  )
}

export default NovoContato
