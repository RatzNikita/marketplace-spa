import styles from "./styles.module.css"
import Button from "../../../../shared/ui/Button";
import {NavLink, useLocation} from "react-router-dom";
import React from "react";


interface Props {
    to: string,
    children?: React.ReactNode
}

function NavButton({children,to}: Readonly<Props>) {

    const {pathname} = useLocation()

    return (
        <NavLink to={to} className={styles.navlink}>
            <Button variant={'text'} color={'secondary'} size={'l'} active={pathname === to}>
                {children}
            </Button>
        </NavLink>
    )
}

export default NavButton

