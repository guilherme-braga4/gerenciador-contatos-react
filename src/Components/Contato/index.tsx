import { ContatoProps } from './interface'
import { Container, SubContainer, IconeApagar } from './styles'
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
    const contatoDeletado = contatos.filter(item => item.id !== id)
    setContatos(contatoDeletado)
    localStorage.setItem('user', JSON.stringify(contatoDeletado))
  }

  return (
    <Container>
      <img src={image} />
      <SubContainer>
        <div>
          <p>{name}</p>
          <p>{phone}</p>
        </div>
        <Botao
          type="submit"
          icon={<IconeApagar/>}
          disabled={false}
          onClick={deleteContato}
        />
      </SubContainer>
    </Container>
  )
}

export default Contato
