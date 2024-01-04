
import {IUser} from "../../types/IUser.ts";
import axios from 'axios'

class UserService {
    async GetUsers() {
        return axios.get<IUser[]>('https://localhost:7135/Auth/GetAll')
    }
}

export default new UserService()