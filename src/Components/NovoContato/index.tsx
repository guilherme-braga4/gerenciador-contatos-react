import React, {useState} from 'react'
import Input from '../Input/index'
import Botao from '../Botao/index'
import { Container, Form } from './styles'
import { FaUserAlt } from 'react-icons/fa';
import { BsFillImageFill, BsFillTelephoneFill } from 'react-icons/bs';


const NovoContato = () => {
  const [form, setForm] = useState({})
  const [loading, setLoading] = useState()

  const handleSubmit = async (e: any) => {
    alert('Usuário Criado com Sucesso')
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

