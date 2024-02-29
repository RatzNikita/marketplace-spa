import {useNavigate} from "react-router-dom";
import AuthForm, {Form} from "../../../../entities/auth/auth-form";
import styles from "../login-form/styles.module.scss";
import {useAppDispatch} from "../../../../app/store";
import {registration} from "../../model/thunk";

function RegistrationForm() {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const onSubmit = (data: Form) => {
        dispatch(registration(data))
    }

    const onLinkClick = () => {
        navigate('/login')
    }

    return (
        <div className={styles.container}>
            <h3>Registration</h3>
            <AuthForm onSubmit={onSubmit}/>
            <p>Already registered? <span className={styles.link} onClick={onLinkClick}>To login</span></p>
        </div>
    )
}

export default RegistrationForm