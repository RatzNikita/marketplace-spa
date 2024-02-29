import AuthForm, {Form} from "entities/auth/auth-form";
import styles from './styles.module.scss'
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../../app/store";
import {login} from "../../model/thunk";

function LoginForm() {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const onSubmit = (data: Form) => {
        dispatch(login(data))
    }

    const onLinkClick = () => {
        navigate('/registration')
    }

    return (
        <div className={styles.container}>
            <h3>Login</h3>
            <AuthForm onSubmit={onSubmit}/>
            <p>Not registered yet? <span className={styles.link} onClick={onLinkClick}>To registration</span></p>
        </div>
    )
}

export default LoginForm