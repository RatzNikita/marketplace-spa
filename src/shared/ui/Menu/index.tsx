import styled from "styled-components";
import {ReactNode, useState} from "react";


const MenuContainer = styled.div`
  position: relative;
  cursor: pointer;
  box-shadow: #8a8a8a 0 0 10px;
  border-radius: 3px;
  
  z-index: 4;
`

const MenuDropdown = styled.div<{ visible?: boolean }>`
  position: absolute;
  top: 100%;
  width: 100%;
  left: 0;
  background-color: white;
  display: ${p => p.visible ? 'flex' : 'none'};
  flex-direction: column;
  z-index: 3;
  box-shadow: #8a8a8a 0 0 5px;
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
            <MenuDropdown visible={open} onClick={handleClose}>
                {children}
            </MenuDropdown>
        </MenuContainer>
    )
}

export default Menu
