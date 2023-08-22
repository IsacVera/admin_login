import React, {useState, useEffect} from 'react';

const AdminPage = () => {
    const [inputUser, setInputUser] = useState<string>('');
    const [inputAge, setInputAge] = useState<string>('');
    const [formIsValid, setFormIsValid] = useState<boolean>(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('here i am');
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
        setInputAge(event.target.value);
    }

    const addUserHandler = () => {
        console.log(inputUser + ' ' + inputAge);
    }
    
    return (
    <React.Fragment>
        <div>
            <h2>User Creator</h2>
            <h3>Username</h3>
            <input type={'text'} value={inputUser} onChange={inputUserHandler}/>
            <h3>Age (Years)</h3>
            <input type={'text'} value={inputAge} onChange={inputAgeHandler}/>

            <button onClick={addUserHandler}>Add User</button>
        </div> 
        

    </React.Fragment>)
}

export default AdminPage;
