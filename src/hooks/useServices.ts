import {useQuery} from "@tanstack/react-query";
import StudiaService from "../store/services/studia.service.ts";


export const useServices = () => {
    return useQuery(
        ['Studies'],
        () => StudiaService.GetStudies(),
        {
            select: ({data}) => data
        }
    )
}