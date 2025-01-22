import {useQuery} from "@tanstack/react-query";
import {QUERY_KEYS} from "api/queryKeys";
import {getMe} from "api/requests/user";

export const useGetMe = () =>
    useQuery({
        queryKey: [QUERY_KEYS.ME],
        queryFn: () => getMe(),
    });