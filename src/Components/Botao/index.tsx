import React from 'react'
import { BotaoCustomizado } from './styles'
import { ButtonProps } from './interface'

const Botao = ({
  type, 
  text, 
  disabled, 
  onClick}: ButtonProps): JSX.Element => {
  return ( 
      <BotaoCustomizado
        type={type}
        text={text}
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </BotaoCustomizado>
   );
}
 
export default Botao;