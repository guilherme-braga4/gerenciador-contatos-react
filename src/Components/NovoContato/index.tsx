import React, {useEffect, useState} from 'react'
import Input from '../Input/index'
import Botao from '../Botao/index'
import { Container, Form } from './styles'
import { FaUserAlt } from 'react-icons/fa';
import { BsFillImageFill, BsFillTelephoneFill } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';
import { NovoContatoProps } from './interface'


const NovoContato = ({setContatos, contatos}: NovoContatoProps) => {
  const [form, setForm] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(false) 

  const handleSubmit = async (event: any) => {
    event?.preventDefault()
    console.log('handleSubmit')
    //Atualizando o state Contatos
    //----> Solução: O push funciona, porém, não altera o estado, pois retornaria um number. Por isso, deve-se concatenar os objetos no array
    const novoContato = [...contatos, {...form, id: uuidv4()}]
    setContatos(novoContato)
    //O state é montado depois do localStorage.setItem: existe atraso de 1 objeto
    //---> Solução: criar na memória o novoContato, para ter disponível a atribuição no momento do localStorage.setItem
    console.log('contatos 1', contatos)
     localStorage.setItem('user', JSON.stringify(novoContato))
    // alert('Usuário Criado com Sucesso')
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {name, value} = event.target
    setForm({...form, [name]: value})
  }

  return (
        <Container>
            <Form>
              <BsFillImageFill size={30}/>
              <Input
                name="imagem"
                placeholder="Adicione a URL da imagem"
                type="text"
                onChange={handleChange}
              />
            </Form>
          {/* <UploadImagem
            name="email"
            placeholder="Pesquisar por um contato"
            type="email"
            onChange={handleChange}
          /> */}
            <Form>
              <FaUserAlt size={30}/>
              <Input
                name="nome"
                placeholder="Digite o nome"
                type="text"
                onChange={handleChange}
              />
            </Form>
            <Form>
              <BsFillTelephoneFill size={30}/>
              <Input
                name="telefone"
                placeholder="Digite o telefone"
                type="phone"
                onChange={handleChange}
              />
            </Form>
            <Botao
              type="submit"
              text="Salvar Contato"
              disabled={false}
              onClick={handleSubmit}
            />
      </Container>
  )
}

export default NovoContato

