import React from 'react';
import {User} from './User';

import Card from '../UI/Card';

interface UsersDisplayProps {
    userList: User[];
    deleteUser(index: number): void;
}

const UsersDisplay = ({userList, deleteUser}: UsersDisplayProps) => {

    //make functionality to delete code
    return (
    <Card> 
        <ul>
            {userList.map((user, index) => (
                <li 
                    key={index} 
                    onClick={() => {deleteUser(index)}}
                >
                    {user.name} ({user.age} years old)
                </li>
            ))}
        </ul>
    </Card>)
};

export default UsersDisplay;
