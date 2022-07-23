import React, { useEffect, useState } from 'react'
import { Container, ListaContatos } from './styles'
import Contato from '../../Components/Contato/index'
import Header from '../../Components/Header/index'

const Home = () => {
  const [contatos, setContatos] = useState<any[]>([])

  //Função para obter os Contatos
  useEffect(() => {
    const getContatos = async () => {
      try {
        //String || Null
        const obterContatos = await JSON.parse(
          localStorage.getItem('user') || '[]'
        )
        setContatos(obterContatos)
      } catch {
        console.log('Erro ao carregar os contatos')
      }
    }
    getContatos()
  }, [])

  interface contatos {
    imagem: string
    nome: string
    telefone: string
    id: string
  }
  

  return (
    <Container>
      <Header setContatos={setContatos} contatos={contatos} />
      <ListaContatos>
        {/* filtro.length > 0 */}
        {contatos.map((item: contatos, index: number) => {
          return (
            <Contato
              image={item.imagem}
              name={item.nome}
              phone={item.telefone}
              id={item.id}
              index={index}
              setContatos={setContatos}
              contatos={contatos}
            />
          )
        })}
      </ListaContatos>
    </Container>
  )
}

export default Home
