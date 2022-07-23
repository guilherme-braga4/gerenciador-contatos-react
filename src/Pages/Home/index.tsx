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
    telefone: string,
    id: string
  };

  return ( 
    <Container>
      <Header setContatos={setContatos} contatos={contatos}/>
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
   );
}
 
export default Home;