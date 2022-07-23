import styled from 'styled-components'
import { FaSave } from 'react-icons/fa'

export const IconeSalvar = styled(FaSave)`
  color: #273443;
  height: 40px;
  width: 40px;
  margin: 0;

  &:hover {
    color: #dcf8c6;
    transition: 0.5s;
    height: 60px;
  }
`

export const Container = styled.div`
  display: flex;
  padding: 2rem 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #1ebea5;
  border-radius: 5px;
  min-width: 100%;
  gap: 0px 30px;
`

export const Form = styled.div`
  display: flex;
  align-items: center;
  gap: 0px 12px;
  width: 100%;
`
