import React, { useEffect, useState } from 'react'
import { FiltroProps } from './interface'
import { Container, IconeFechar, IconeAdicionarContato } from './styles'
import Input from '../Input/index'
import Botao from '../Botao/index'

const Filtro = ({ setNewUser, newUser, setContatos }: FiltroProps) => {
  const [filtro, setFiltro] = useState<string>()
  //O data State garante o o array completo de contatos
  const [data, setData] = useState<any[]>()

  //Função para obter os Contatos
  useEffect(() => {
    const getContatos = async () => {
      try {
        //String || Null
        const obterContatos = await JSON.parse(
          localStorage.getItem('user') || '[]'
        )
        setData(obterContatos)
      } catch {
        console.log('Erro ao carregar os contatos')
      }
    }
    getContatos()
  }, [filtro])

  //Função para filtrar contatos
  useEffect(() => {
    const pesquisa =
      filtro !== undefined
        ? data?.filter((contato: { nome: string }) =>
            contato.nome.toLowerCase().includes(filtro.toLowerCase())
          )
        : data
    if (pesquisa == undefined || pesquisa.length === 0) {
      return
    } else setContatos(pesquisa)
  }, [filtro])

  //Valor do Filtro
  const filterByName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target
    setFiltro(value)
  }

  return (
    <Container>
      <Input
        name="contato"
        placeholder="Pesquise pelo nome de um contato..."
        type="text"
        onChange={filterByName}
      />
      {newUser ? (
        <Botao
          type="submit"
          icon={<IconeFechar/>}
          disabled={false}
          onClick={() => setNewUser(!newUser)}
        />
      ) : (
        <Botao
          type="submit"
          icon={<IconeAdicionarContato/>}
          disabled={false}
          onClick={() => setNewUser(!newUser)}
        />
      )}
    </Container>
  )
}

export default Filtro
