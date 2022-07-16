import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #dcf8c6;
  width: 100%;
  border-radius: 20px;
  padding: 5px 0px;

  img {
    border-radius: 30px;
    width: 50px;
    height: 50px;
  }

  p {
    color: #000;
  }
`

// background: linear-gradient(20deg, #dcf8c6, #ece5dd);