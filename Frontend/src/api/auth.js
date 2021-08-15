import { API } from '../config';
import { axiosClient } from './axiosClient';

const auth = {
    signup(user) {
        const url = `${API}/signup`;
        return axiosClient.post(url, user);
    },
    signin(user) {
        const url = `${API}/signin`;
        return axiosClient.post(url, user);
    }
};


export const authenticate = (data, next) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(data))
        next();
    }
}

export const signOut = (next) => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('user');
        next();
        return fetch(`${API}/signout`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
}
export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false;
    }
    if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'))
    } else {
        return false;
    }


}

export default auth;

