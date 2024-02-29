import React from "react";
import {useForm} from "react-hook-form";
import Button from "../../../shared/ui/Button";
import styles from './styles.module.scss'
import {ReactComponent as Close} from "shared/images/close.svg";
import {useNavigate} from "react-router-dom";

interface Props {
    onSubmit: (data: Form) => void,
}

export interface Form {
    username: string,
    password: string,
}

function AuthForm({onSubmit, ...props}: Readonly<Props>) {

    const navigate = useNavigate()

    const onClose = () => {
        navigate('/')
    }

    const {handleSubmit, register} = useForm<Form>()

    return (
        <form className={styles.form} {...props} onSubmit={handleSubmit(onSubmit)}>
            <Button className={styles.closeButton} onClick={onClose}><Close/></Button>
            <p>Username</p>
            <input {...register('username')}/>
            <p>Password</p>
            <input {...register('password')}/>
            <Button>Submit</Button>
        </form>
    )
}

export default AuthForm