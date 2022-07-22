import React, {useEffect, useState} from 'react'
import { Container, ListaContatos } from './styles'
import Contato from '../../Components/Contato/index'
import Header from '../../Components/Header/index'
// import {validarEmail, validarSenha} from '../../utils/validadores'
// import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const [contatos, setContatos] = useState<any[]>([])

  interface contatos {
    imagem: string,
    nome: string,
    telefone: string
  };

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

  return ( 
    <Container>
      <Header/>
      <ListaContatos>
        {contatos != [] && contatos.map((item: contatos) => {
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