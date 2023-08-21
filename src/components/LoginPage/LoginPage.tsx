import React, {useState, ChangeEvent} from 'react';

const LoginPage = () => {
    const [enteredEmail, setEnteredEmail] = useState<string>('');
    const [enteredPassword, setEnteredPassword] = useState<string>('');

    const loginHandler = () => {
        if (isValid()) {
           return true; 
        } 
        return false;
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
    <div>
        <h2>Admin Login</h2>
        <h3>Email</h3>
        <input type={'text'} value={enteredEmail} onChange={emailHandler}/>
        <h3>Password</h3>
        <input type={'text'} value={enteredPassword} onChange={passwordHandler}/>

        <button onClick={loginHandler}>Login</button>

        {loginHandler() ? <div>
            <div>Invalid Input</div>
            <div>"Please enter a valid email address containing the '@' symbol,
             and ensure your password is at least 6 characters long."</div>
        </div>: null}
    </div>)
}

export default LoginPage;
