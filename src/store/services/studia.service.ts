import axios from "axios";
import {IStudia} from "../../types/IStudia.ts";

class StudiaService {
    async GetStudies() {
        return axios.get<IStudia[]>('https://localhost:7135/api/studia/GetAll')
    }
}

export default new StudiaService()