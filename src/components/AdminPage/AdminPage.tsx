import React, {useState, useRef, useEffect} from 'react';
import {User, defaultUserList} from './User';
import UsersDisplay from './UsersDisplay';

interface AdminPageProps {
    onLogout(): void;
}

const AdminPage = ({onLogout}: AdminPageProps) => {
    const [userList, setUserList] = useState<User[]>(defaultUserList); 
    const [inputUser, setInputUser] = useState<string>('');
    const [inputAge, setInputAge] = useState<string>('');
    const [formIsValid, setFormIsValid] = useState<boolean>(false);
    const adminEmail = localStorage.getItem('email');

    useEffect(() => {
        const timer = setTimeout(() => {
            if (Number(inputAge) >= 18) {
                setFormIsValid(true);
            } else {
                setFormIsValid(false);
            }
        }, 500);
        
        /*return runs first before function above,
         * but only after useEffect has ran once. 
         * It is for debouncing (clearing the previous timer
         * so there is only one going at a time)*/
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
        if (formIsValid){
            setUserList((prev) => {
                return [...prev, {name: inputUser, age: inputAge}]
            });
        }

        //TODO: add pop up message that user isnt old enough
    }

    const deleteUserHandler = (index: number) => {
        let userDeletedList = [...userList];
        userDeletedList.splice(index, 1);
        setUserList(userDeletedList); 
    }
    
    return (
    <React.Fragment>
        <div>
            <div>
                <h2>User Creator</h2>
                <button onClick={onLogout}>{adminEmail}</button>
            </div>
            <h3>Username</h3>
            <input type={'text'} value={inputUser} onChange={inputUserHandler}/>
            <h3>Age (Years)</h3>
            <input type={'number'} value={inputAge} onChange={inputAgeHandler}/>

            <button onClick={addUserHandler}>Add User</button>
        </div> 
        
        <UsersDisplay userList={userList} deleteUser={deleteUserHandler}/>

    </React.Fragment>)
}

export default AdminPage;
