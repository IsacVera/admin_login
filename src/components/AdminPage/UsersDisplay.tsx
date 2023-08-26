import React from 'react';
import {User} from './User';

interface UsersDisplayProps {
    userList: User[];
}

const UsersDisplay = ({userList}: UsersDisplayProps) => {

    //make functionality to delete code
    return (
    <ul>
        {userList.map((user, index) => (
            <li key={index}>{user.name} ({user.age} years old)</li>
        ))}
    </ul>)
};

export default UsersDisplay;
