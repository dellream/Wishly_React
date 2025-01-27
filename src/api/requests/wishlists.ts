import wishlist from 'api/services/wishList';
import {TokenInfo, UserCredentialsIn} from "api/types/auth";
import {ApiResponse} from "api/apiService";
import {WishList, WishListCreateIn, WishListUpdateIn, WishListWithThings} from "api/types/wishlists";
import {Thing, ThingCreateIn, ThingUpdateIn} from "api/types/things";

export const createWishList = async (creation_data: WishListCreateIn) =>
    wishlist.post<WishList>('/v1/wishlists', { ...creation_data });

export const getWishLists = async (params: URLSearchParams, signal?: AbortSignal) =>
    wishlist.get<WishList[]>(`/v1/wishlists?${ params.toString() }`, { signal });

export const getWishList = async (wishListId: number, signal?: AbortSignal) =>
    wishlist.get<WishListWithThings>(`/v1/wishlists/${ wishListId }`, { signal });

export const updateWishList = async (data: WishListUpdateIn, wishListId: number) =>
    wishlist.patch<WishListUpdateIn, WishList>(`/v1/wishlists/${ wishListId }`, { ...data });

export const deleteWishList = async (wishListId: number) =>
    wishlist.delete<boolean>(`/v1/wishlists/${ wishListId }`, {});

export const createThingInWishList = async (creation_data: ThingCreateIn, wishListId: number) =>
    wishlist.post<Thing>(`/v1/wishlists/${ wishListId }/things`, { ...creation_data })

export const updateThingInWishList = async (data: ThingUpdateIn, wishListId: number, thingId: number) =>
    wishlist.patch<ThingUpdateIn, Thing>(`/v1/wishlists/${ wishListId }/things/${ thingId }`, { ...data })

export const deleteThingInWishList = async (wishListId: number, thingId: number) =>
    wishlist.delete<boolean>(`/v1/wishlists/${ wishListId }/things/${ thingId }`, {})