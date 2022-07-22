import React, {useEffect, useState} from 'react'
import Input from '../Input/index'
import Botao from '../Botao/index'
import { Container, Form } from './styles'
import { FaUserAlt } from 'react-icons/fa';
import { BsFillImageFill, BsFillTelephoneFill } from 'react-icons/bs';


const NovoContato = () => {
  const [form, setForm] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [contatos, setContatos] = useState<any[]>([])

  // Recebendo os contatos através do localStorage
  useEffect(() => {
    const getContatos = async () => {
    try {
      //String || Null
      const obterContatos = await JSON.parse(localStorage.getItem("user") || "[]")
      setContatos(obterContatos)
    } catch {
      console.log('Erro ao carregar os contatos')
    }
  }
    getContatos()
  }, [])    

  const handleSubmit = async (event: any) => {
    event?.preventDefault()
    contatos.push(form)
    localStorage.setItem('user', JSON.stringify(contatos))
    alert('Usuário Criado com Sucesso')
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {name, value} = event.target
    setForm({...form, [name]: value})
    // console.log('Form', form)
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

