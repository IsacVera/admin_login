import React, {useState, useEffect} from 'react';
import {User, defaultUserList} from './User';
import UsersDisplay from './UsersDisplay';

import Card from '../UI/Card';
import './AdminPage.scss';

interface AdminPageProps {
    onLogout(): void;
}

const AdminPage = ({onLogout}: AdminPageProps) => {
    const [userList, setUserList] = useState<User[]>(defaultUserList); 
    const [inputUser, setInputUser] = useState<string>('');
    const [inputAge, setInputAge] = useState<string>('');
    const [formIsValid, setFormIsValid] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const adminEmail = localStorage.getItem('email');

    useEffect(() => {
        const timer = setTimeout(() => {
            if (Number(inputAge) >= 18) {
                setFormIsValid(true);
            } else {
                setFormIsValid(false);
            }
        }, 500);
        
        /* return runs first before function above, but only after
            useEffect has ran once. 
         * It is for debouncing (clearing the previous timer so there
            is only one going at a time)*/
        return () => {
            clearTimeout(timer);
        };

    },[inputAge])

    
    const inputUserHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setInputUser(event.target.value); 
    }

    const inputAgeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setInputAge(event.target.value);
    }

    const addUserHandler = () => {
        setError(false);
        if (formIsValid){
            setUserList((prev) => {
                return [...prev, {name: inputUser, age: inputAge}]
            });
        } else {
            setError(true);
        }
    }

    const deleteUserHandler = (index: number) => {
        let userDeletedList = [...userList];
        userDeletedList.splice(index, 1);
        setUserList(userDeletedList); 
    }

    const errorHandler = () => {
        setError(false);
    }

    return (
    <React.Fragment>
       
        <Card cardType='card'>
            <div className='header'>
                <h2 className='title'>User Creator</h2>
                <button className='button' onClick={onLogout}>{adminEmail}</button>
            </div>
            <h3 className='subTitle'>Username</h3>
            <input className='input' type={'text'} value={inputUser} onChange={inputUserHandler}/>
            <h3 className='subTitle'>Age (Years)</h3>
            <div className='bottomLine'>
                <input className='input' type={'number'} value={inputAge} onChange={inputAgeHandler}/>
                <button className='button' onClick={addUserHandler}>Add User</button>
            </div>

            {error ?
            <div onClick={errorHandler}>
                <div className='backdrop'/>
                <Card cardType='card-invalid'>
                    <header>
                        <h2 className='errorTitle'>Invalid Age</h2>
                    </header>
                    <p>Please enter a valid age {`( > 17)`}</p>
                </Card>
            </div>
            : null}
        </Card> 
        
        <UsersDisplay userList={userList} deleteUser={deleteUserHandler}/>

    </React.Fragment>)
}

export default AdminPage;
