import styled from "styled-components";
import {ReactNode, useState} from "react";


const MenuContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin:0;
  padding: 0;
  z-index: 4;
`

const MenuDropdown = styled.ul<{ isVisible: boolean }>`
  position: absolute;
  top: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
  left: 0;
  background-color: white;
  display: ${p => p.isVisible ? 'flex' : 'none'};
  flex-direction: column;
  z-index: 3;
  box-shadow: #8a8a8a 0 4px 5px;
`

interface Props {
    children?: ReactNode,
    component: ReactNode,
}

function Menu({children, component}: Readonly<Props>) {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <MenuContainer onMouseEnter={handleOpen} onMouseLeave={handleClose}>
            {component}
            <MenuDropdown isVisible={open} onClick={handleClose}>
                {children}
            </MenuDropdown>
        </MenuContainer>
    )
}

export default Menu
