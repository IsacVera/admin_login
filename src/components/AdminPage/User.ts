interface User {
    name: string,
    age: string
}

const newUser = (inputName: string, inputAge: string): User => {
    return {
        name: inputName,
        age: inputAge
    }
}

const defaultUserList: User[] = [
    {
        name: 'issac',
        age: '32'
    },
    {
        name: 'Martin',
        age: '23'
    },
    {
        name: 'Aiden',
        age: '19'
    }
];


export type {User};
export {newUser, defaultUserList};
