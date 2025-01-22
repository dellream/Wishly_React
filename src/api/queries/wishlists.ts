import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { WishList, WishListCreateIn, WishListUpdateIn } from 'api/types/wishlists';
import {createWishList, deleteWishList, getWishList, getWishLists, updateWishList} from "api/requests/wishlists";
import {QUERY_KEYS} from "api/queryKeys";

export const useGetWishLists = (params: URLSearchParams, options?: { enabled: boolean; refetchInterval?: number }) =>
    useQuery({
        queryKey: [QUERY_KEYS.WISHLISTS, params.toString()],
        queryFn: ({ signal }) => getWishLists(params, signal),
        refetchInterval: options?.refetchInterval,
        enabled: options?.enabled ?? true,  // по умолчанию enabled = true, если не указано
    });

export const useGetWishList = (wishListId?: number, interval?: number) =>
    useQuery({
        queryKey: [QUERY_KEYS.WISHLIST, wishListId],
        queryFn: ({ signal }) => getWishList(wishListId!, signal),
        enabled: Boolean(wishListId),
        refetchInterval: interval ? interval : undefined
    });

export const useCreateWishList = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: WishListCreateIn) => createWishList(data),
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.WISHLISTS] });
        }
    });
};

export const useUpdateWishList = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ data, wishListId }: { data: WishListUpdateIn; wishListId: number }) =>
            updateWishList(data, wishListId),
        onSuccess: async (_data, { wishListId }) => {
            await queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.WISHLISTS] });
            await queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.WISHLIST, wishListId] });
        }
    });
};

export const useDeleteWishList = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (wishListId: number) => deleteWishList(wishListId),
        onSuccess: async (_data, wishListId) => {
            await queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.WISHLISTS] });
            await queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.WISHLIST, wishListId] });
        }
    });
};
