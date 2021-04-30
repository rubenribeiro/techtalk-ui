//const USER_API = 'http://localhost:4000/api/users';
const USER_API  = 'https://techtalk-api.herokuapp.com/api/users';

const register = (credentials) => {
    return fetch (`${USER_API}/register`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());
}

const login = (credentials) => {
    return fetch (`${USER_API}/login`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());
}

const logout = () => {
    return fetch(`${USER_API}/logout`, {
        method: "POST",
        credentials: "include"
    }).then(() => {});
}

const profile = () => {
    return fetch (`${USER_API}/profile`, {
        method: "POST",
        credentials: "include",
    }).then(response => response.json());
}

const findAllUsers = () => {
    return fetch (`${USER_API}`, {
        method: "POST",
        credentials: "include",
    }).then(response => response.json());
}

const findUserById = (userId) => {
    return fetch (`${USER_API}/profile/${userId}`, {
        method: "POST",
        credentials: "include",
    }).then(response => response.json());
}

export const updateUserById = (userId, user) =>
    fetch(`${USER_API}/profile/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then( response => response.json());

export const deleteUser = (userId) =>
    fetch(`${USER_API}/profile/${userId}`, {
        method:  'DELETE'
    })
        .then( response => response.json());

const addUser = (user) => {
    return fetch (`${USER_API}/register`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());
}


const api = {
    register,
    login,
    logout,
    profile,
    findAllUsers,
    findUserById,
    updateUserById,
    deleteUser,
    addUser
}

export default api;