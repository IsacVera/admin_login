import React from 'react';
import {User} from './User';

import Card from '../UI/Card';
import './UsersDisplay.scss'

interface UsersDisplayProps {
    userList: User[];
    deleteUser(index: number): void;
}

const UsersDisplay = ({userList, deleteUser}: UsersDisplayProps) => {

    //make functionality to delete code
    return (
    <Card cardType='card'> 
        <ul className='usersList'>
            {userList.map((user, index) => (
                <li
                    className='user'
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
