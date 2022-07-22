import React, {useEffect, useState} from 'react'
import { Container, ListaContatos } from './styles'
import Contato from '../../Components/Contato/index'
import Header from '../../Components/Header/index'
// import {validarEmail, validarSenha} from '../../utils/validadores'
// import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const [contatos, setContatos] = useState<any[]>([])

  useEffect(() => {
      const getContatos = async () => {
      console.log("dentro do getContatos", contatos)
      try {
        //String || Null
        //Carregando os contatos ao montar o componente Home
        const obterContatos = await JSON.parse(localStorage.getItem("user") || "[]")
        setContatos(obterContatos)
        console.log('obterContatos', obterContatos)
      } catch {
        console.log('Erro ao carregar os contatos')
      }
    }
      getContatos()
  }, [])       

  interface contatos {
    imagem: string,
    nome: string,
    telefone: string
  };

  return ( 
    <Container>
      <Header setContatos={setContatos} contatos={contatos}/>
      <ListaContatos>
        {contatos.map((item: contatos) => {
          return (
          <Contato
            image={item.imagem}
            name={item.nome}
            phone={item.telefone}
        />
        )
        })}
      </ListaContatos>
    </Container>
   );
}
 
export default Home;