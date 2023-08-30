import React, {useState, useEffect} from 'react';
import LoginPage from './components/LoginPage/LoginPage';
import AdminPage from './components/AdminPage/AdminPage';

import './App.css';

function App() {
    const [isLoggedInState, setIsLoggedInState] = useState<boolean>(false);

    useEffect(() => {
        const loginCheck = localStorage.getItem('isLoggedIn');
        if (loginCheck === '1'){
            setIsLoggedInState(true);
        }
    }, []);

    const loginHandler = (inputEmail:string) => {
        localStorage.setItem('isLoggedIn', '1');
        localStorage.setItem('email', inputEmail);

        setIsLoggedInState(true);
    }

    const logoutHandler = () => {
        localStorage.clear();
        setIsLoggedInState(false);
    }

    return (
        <div className="menu">
            {isLoggedInState ? <AdminPage onLogout={logoutHandler}/>:
            <LoginPage onLogin={loginHandler}/>
            }

        </div>
    );
}

export default App;
