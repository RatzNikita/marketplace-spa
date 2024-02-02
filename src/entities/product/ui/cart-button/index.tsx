import {ReactComponent as CartAdd} from "shared/images/shopping_cart_add.svg";
import {ReactComponent as Remove} from "shared/images/remove.svg";
import {ReactComponent as Add} from "shared/images/add.svg";


import styled from "styled-components";
import Button from "../../../../shared/ui/Button";


const Container = styled.div`
  margin: 0;
  display: flex;
  box-sizing: border-box;
  border-radius: 12px;
  box-shadow: var(--lightgrey) 0 0 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: dodgerblue;
  font-size: 1.2rem;
  height: 2.2rem;
  transition: all .2s;

  &:hover {
    box-shadow: dodgerblue 0 0 5px;
  }

  :nth-child(odd) {
    height: 100%;
    padding: 5px 0;
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
      border: dodgerblue 2px solid;
      border-radius: 12px 0 0 12px;
    }
  }

  :nth-child(2) {
    text-align: center;
    min-width: 1.8rem;
  }

  :nth-child(3) {
    &:hover {
      border: dodgerblue 2px solid;
      border-radius: 0 12px 12px 0;
    }
  }
`

interface Props {
    inCart?: number,
    onChange: (value: 'add' | 'remove') => void
}


function CartButton({inCart, onChange}: Props) {

    const handleClick = (value: 'add' | 'remove') => {
        onChange(value)
    }

    return (
        <>
            {inCart ? <>
                    <Container>
                        <Add onClick={() => handleClick('add')}/>
                        <span>{inCart}</span>
                        <Remove onClick={() => handleClick('remove')}/>
                    </Container>
                </>
                : <Button>
                    <CartAdd onClick={() => handleClick('add')}/>
                </Button>
            }
        </>

    )

}

export default CartButton