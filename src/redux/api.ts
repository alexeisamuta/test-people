import axios from 'axios'
import {allUsersType} from "./persons-reducer";

const instance = axios.create({
    baseURL: 'https://randomuser.me/api/',
});

export const usersAPI = {
    getUsers(quantity: number = 10) {
        return instance.get<allUsersType>(`?results=${quantity}`).then(res => res.data)
    },
}