import styles from './styles.module.scss'
import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string,
}


function Input({label, ...props}: Props) {

    return (
        <div className={styles.row}>
            {label && <label>{label}</label>}
            <input {...props}/>
        </div>
    )
}

export default Input