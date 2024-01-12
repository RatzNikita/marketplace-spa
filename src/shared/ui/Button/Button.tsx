import styled from "styled-components";

const Button = styled.button<{ primary?: boolean; }>`
  background: linear-gradient(225deg, rgb(159, 159, 159) 0%, rgb(243, 243, 243) 100%);
  font-family: Roboto, sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  border: none;
  color: #4a4a4a;
  margin: 0;
  padding: 5px;
  font-weight: 400;
  border-radius: 12px;
  max-width: 80px;
  max-height: 40px;
  line-height: 1.5;
  font-size: 16px;
  transition: all .2s;
  box-shadow: #383838 0 0 3px;

  &:hover {
    color: #368dff;
    transform: scale(1.05);
  }
`


export default Button