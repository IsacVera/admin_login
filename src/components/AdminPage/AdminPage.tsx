import React, {useState, useEffect} from 'react';
import {User, newUser, defaultUserList} from './User';


const AdminPage = () => {
    const [userList, setUserList] = useState<User[]>(defaultUserList); 
    const [inputUser, setInputUser] = useState<string>('');
    const [inputAge, setInputAge] = useState<string>('');
    const [formIsValid, setFormIsValid] = useState<boolean>(false);

    useEffect(() => {
        const timer = setTimeout(() => {
        }, 500);
        
        /*return runs first before function above,
         * but only after useEffect has ran once. 
         * It is for debouncing (clearing the previous timer
         * so there is only one going at a time)*/
        return () => {
            clearTimeout(timer);
        };

    },[inputUser, inputAge])

    
    const inputUserHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setInputUser(event.target.value); 
    }

    const inputAgeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const inputValue: string = event.target.value;
        const birthday: Date = new Date(inputValue);
        const currentDay: Date = new Date();

        const timeDifference: number = currentDay.getTime() - birthday.getTime();
        const miliSecInYear: number = 1000 * 60 * 60 * 24 * 365.25; //accounts for leap Years

        const yearsDifference: number = timeDifference/miliSecInYear;
        setInputAge(yearsDifference.toFixed());
    }

    const addUserHandler = () => {
        console.log(inputUser + ' ' );
    }
    
    return (
    <React.Fragment>
        <div>
            <h2>User Creator</h2>
            <h3>Username</h3>
            <input type={'text'} value={inputUser} onChange={inputUserHandler}/>
            <h3>Age (Years)</h3>
            <input type={'date'} value={inputAge} onChange={inputAgeHandler}/>

            <button onClick={addUserHandler}>Add User</button>
        </div> 
        

    </React.Fragment>)
}

export default AdminPage;
