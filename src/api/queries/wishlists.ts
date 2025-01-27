import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';

import {WishList, WishListCreateIn, WishListUpdateIn} from 'api/types/wishlists';
import {
    createThingInWishList,
    createWishList, deleteThingInWishList,
    deleteWishList,
    getWishList,
    getWishLists, updateThingInWishList,
    updateWishList
} from "api/requests/wishlists";
import {QUERY_KEYS} from "api/queryKeys";
import {ThingCreateIn, ThingUpdateIn} from "api/types/things";

export const useGetWishLists = (params: URLSearchParams, options?: { enabled: boolean; refetchInterval?: number }) =>
    useQuery({
        queryKey: [QUERY_KEYS.WISHLISTS, params.toString()],
        queryFn: ({signal}) => getWishLists(params, signal),
        refetchInterval: options?.refetchInterval,
        enabled: options?.enabled ?? true,  // по умолчанию enabled = true, если не указано
    });

export const useGetWishList = (wishListId?: number, interval?: number) =>
    useQuery({
        queryKey: [QUERY_KEYS.WISHLIST, wishListId],
        queryFn: ({signal}) => getWishList(wishListId!, signal),
        enabled: Boolean(wishListId),
        refetchInterval: interval ? interval : undefined
    });

export const useCreateWishList = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: WishListCreateIn) => createWishList(data),
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: [QUERY_KEYS.WISHLISTS]});
        }
    });
};

export const useUpdateWishList = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({data, wishListId}: { data: WishListUpdateIn; wishListId: number }) =>
            updateWishList(data, wishListId),
        onSuccess: async (_data, {wishListId}) => {
            await queryClient.invalidateQueries({queryKey: [QUERY_KEYS.WISHLISTS]});
            await queryClient.invalidateQueries({queryKey: [QUERY_KEYS.WISHLIST, wishListId]});
        }
    });
};

export const useDeleteWishList = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (wishListId: number) => deleteWishList(wishListId),
        onSuccess: async (_data, wishListId) => {
            await queryClient.invalidateQueries({queryKey: [QUERY_KEYS.WISHLISTS]});
            await queryClient.invalidateQueries({queryKey: [QUERY_KEYS.WISHLIST, wishListId]});
        }
    });
};

export const useCreateThingInWishList = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({creation_data, wishListId}: { creation_data: ThingCreateIn; wishListId: number }) =>
            createThingInWishList(creation_data, wishListId),
        onSuccess: async (_data, {wishListId}) => {
            await queryClient.invalidateQueries({queryKey: [QUERY_KEYS.WISHLIST, wishListId]});
            await queryClient.invalidateQueries({queryKey: [QUERY_KEYS.WISHLIST_DETAIL, wishListId]});
        }
    });
};

export const useUpdateThingInWishList = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({data, wishListId, thingId}: { data: ThingUpdateIn; wishListId: number; thingId: number }) =>
            updateThingInWishList(data, wishListId, thingId),
        onSuccess: async (_data, {wishListId}) => {
            await queryClient.invalidateQueries({queryKey: [QUERY_KEYS.WISHLIST, wishListId]});
            await queryClient.invalidateQueries({queryKey: [QUERY_KEYS.WISHLIST_DETAIL, wishListId]});
        }
    });
};

export const useDeleteThingInWishList = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({wishListId, thingId}: { wishListId: number; thingId: number }) =>
            deleteThingInWishList(wishListId, thingId),
        onSuccess: async (_data, {wishListId}) => {
            await queryClient.invalidateQueries({queryKey: [QUERY_KEYS.WISHLIST, wishListId]});
            await queryClient.invalidateQueries({queryKey: [QUERY_KEYS.WISHLIST_DETAIL, wishListId]});
        }
    });
};
