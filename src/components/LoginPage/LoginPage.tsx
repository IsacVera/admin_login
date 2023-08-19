import React, {useState, ChangeEvent} from 'react';

const LoginPage = () => {
    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');

    //todo: Login Handler and styles
    const loginHandler = () => {
       console.log(userEmail);
       console.log(userPassword);
    } 

    const emailHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        setUserEmail(event.target.value);
    }

    const passwordHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        setUserPassword(event.target.value);
    }


    return (
    <div>
        <h2>Admin Login</h2>
        <h3>Email</h3>
        <input type={'text'} value={userEmail} onChange={emailHandler}/>
        <h3>Password</h3>
        <input type={'text'} value={userPassword} onChange={passwordHandler}/>

        <button onClick={loginHandler}>Login</button>
    </div>)
}

export default LoginPage;
