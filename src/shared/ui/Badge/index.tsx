import styled from "styled-components";
import {ReactNode} from "react";


const Container = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
`

const Circle = styled.span`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: dodgerblue;
  color: white;
  font-size: 0.7rem;
`

interface Props {
    children: ReactNode,
    value: number,
}

function Badge({children, value}: Readonly<Props>) {

    return (
        <Container>
            {children}
            {value > 0 &&
                <Circle>
                    {value}
                </Circle>
            }
        </Container>
    )
}

export default Badge