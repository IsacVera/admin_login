import React, {useState} from 'react';
import LoginPage from './components/LoginPage/LoginPage';

import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const loginHandler = (email:string, password:string) => {
        console.log(email);
        console.log(password);
        setIsLoggedIn(true);
    }

    return (
        <div className="menu">
            {isLoggedIn ? null:
            <LoginPage onLogin={loginHandler}/>
            }

        </div>
);
}

export default App;
