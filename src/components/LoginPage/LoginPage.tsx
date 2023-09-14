import React, {useState, ChangeEvent} from 'react';

import Card from '../UI/Card';
import styles from './LoginPage.module.scss';

interface loginPageProps {
    onLogin(email:string):void;
}

const LoginPage = ({onLogin}: loginPageProps) => {
    const [attemptedLogin, setAttemptedLogin] = useState<boolean>(false);
    const [enteredEmail, setEnteredEmail] = useState<string>('');
    const [enteredPassword, setEnteredPassword] = useState<string>('');

    const loginHandler = (): void => {

        if (isValid()) {
            setAttemptedLogin(false);
            onLogin(enteredEmail);
        } else {
            if (attemptedLogin === false) {
                setAttemptedLogin(true);
            }
        }
    } 

    const emailHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        setEnteredEmail(event.target.value);
    }

    const passwordHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        setEnteredPassword(event.target.value);
    }

    const isValid = () => {
        return (enteredEmail.includes('@') && enteredPassword.trim().length > 5);
    }


    return (
    <Card cardType='card'>
        <h2 className={styles.title}>Admin Login</h2>
        <h3>Email</h3>
        <input className={styles.input} type={'text'} value={enteredEmail} onChange={emailHandler}/>
        <h3>Password</h3>
        <div className={styles.bottomLine}>
            <input className={styles.input} type={'text'} value={enteredPassword} onChange={passwordHandler}/>
            <button className={styles.button} onClick={loginHandler}>Login</button>
        </div>

        {(!isValid() && attemptedLogin) ?
        <div className={styles.invalid}>
            <h4>Invalid Input</h4>
            <p>Please enter a valid email address containing the '@' symbol,
             and ensure your password is at least 6 characters long.</p>
        </div>: null}
    </Card>)
}

export default LoginPage;
