import styled, {css} from "styled-components";

const Button = styled.button<{
    primary?: boolean;
    variant?: 'text' | 'default',
    color?: 'primary' | 'secondary',
    size?: 'm' | 'l',
    active?: boolean
}>`
  background: white;
  font-family: Roboto, sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  color: #4a4a4a;
  margin: 0;
  padding: 7px;
  font-weight: 400;
  border-radius: 2px;
  max-height: ${(p) =>
          p.size === 'l' ? '50px' : '40px'};
  line-height: 1.5;
  font-size: ${(p) =>
    p.size === 'l' ? '1.5rem' : '1rem'};

  transition: all .2s;
  box-shadow: #383838 0 0 2px;

  ${(p) => p.variant === 'text' && css`
    background: none;
    box-shadow: none;
  `}
  ${(p) =>
    p.color === 'secondary' && css`
    background-color: dodgerblue;
            color: white;
          `}
  ${(p) =>
    p.active && css`
            text-decoration: underline;
          `}
  &:hover {
  color: ${p => p.color === 'secondary' ? 'white' : 'dodgerblue'};
  }
`


export default Button