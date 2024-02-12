import styles from './styles.module.scss'
import React from "react";
import {RegisterOptions, UseFormRegisterReturn} from "react-hook-form";

interface Props extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label?: string,
    rows?: number,
    register?: UseFormRegisterReturn;
}


function Input({label, rows,register, ...props}: Props) {

    return (
        <div className={styles.row}>
            {label && <label>{label}</label>}
            {rows
                ? <textarea rows={rows} {...props} {...register}/>
                : <input {...props} {...register}/>
            }
        </div>
    )
}

export default Input