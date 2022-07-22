import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #dcf8c6;
  width: 100%;
  border-radius: 30px;
  padding: 0px 0px;

  img {
    border-radius: 30px;
    width: 100px;
    height: 100px;
  }

  p {
    color: #000;
    font-size: 18px;
  }
`

export const SubContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0px 20px;
  justify-content: space-between;
  align-items: center;
  
  div {
    padding: 10px 0px;
  }
`

// background: linear-gradient(20deg, #dcf8c6, #ece5dd);