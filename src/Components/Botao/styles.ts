import styled from "styled-components";
import { ButtonProps } from './interface'

export const BotaoCustomizado = styled.button<ButtonProps>`
  color: #FFF;
  font-size: 20px;
  border: 30px;
  background-color: #075e54;
  border-radius: 8px;
  width: 100%;
  max-width: 300px;
  height: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;

  ${props => props.disabled === false &&`
      &:hover{
        background-color: #25d366;
        color: #FFF
      }
    `
  }

  ${props => props.disabled &&`
     opacity: 0.7
     `
  }
  
`
