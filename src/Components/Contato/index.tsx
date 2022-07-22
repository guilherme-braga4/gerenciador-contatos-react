import { ContatoProps } from './interface'
import { Container } from './styles'
import { AiFillDelete } from 'react-icons/ai';

const Contato = ({
  image,
  name,
  phone
}: ContatoProps): JSX.Element => {
  return (
    <Container>
      <img src={image}/>
      <p>{name}</p>
      <p>{phone}</p>
      <AiFillDelete size={20} color={'#075e54'}/>
    </Container>
  )
}

export default Contato