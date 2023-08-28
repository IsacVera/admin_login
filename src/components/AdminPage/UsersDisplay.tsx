import React from 'react';
import {User} from './User';

interface UsersDisplayProps {
    userList: User[];
    deleteUser(nameToDelete: string, ageToDelete: string): void;
}

const UsersDisplay = ({userList, deleteUser}: UsersDisplayProps) => {

    //make functionality to delete code
    return (
    <ul>
        {userList.map((user, index) => (
            <li 
                key={index} 
                onClick={() => {deleteUser(user.name, user.age)}}
            >
                {user.name} ({user.age} years old)
            </li>
        ))}
    </ul>)
};

export default UsersDisplay;
