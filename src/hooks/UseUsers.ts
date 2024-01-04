import {useQuery} from "@tanstack/react-query";
import UserService from "../store/services/user.service.ts";

export const useUsers = () => {
    return useQuery(
        ['Users'],
        ()=> UserService.GetUsers(),
        {
            select: ({data}) => data,
        }
    )
}