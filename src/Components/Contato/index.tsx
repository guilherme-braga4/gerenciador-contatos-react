import { ContatoProps } from './interface'
import { Container } from './styles'
import { AiFillDelete } from 'react-icons/ai';
import Botao from '../Botao/index'

const Contato = ({
  image,
  name,
  phone,
  id,
  contatos,
  index,
  setContatos
}: ContatoProps): JSX.Element => {
  
  const deleteContato = () => {
    console.log('index', index)
    const contatoDeletado = contatos.filter((item) => item.id !== id)
    setContatos(contatoDeletado)
    localStorage.setItem('user', JSON.stringify(contatoDeletado))
  }

  return (
    <Container>
      <img src={image}/>
      <p>{name}</p>
      <p>{phone}</p>
      <Botao
          type="submit"
          icon={<AiFillDelete size={20} color={'#075e54'}/>}
          disabled={false}
          onClick={deleteContato}
      />
    </Container>
  )
}

export default Contato