import wishlist from 'api/services/wishList';
import {TokenInfo, UserCredentialsIn} from "api/types/auth";
import {ApiResponse} from "api/apiService";
import {WishList, WishListCreateIn, WishListUpdateIn} from "api/types/wishlists";

export const createWishList = async (data: WishListCreateIn) =>
    wishlist.post<WishList>('/v1/wishlists', { ...data });

export const getWishLists = async (params: URLSearchParams, signal?: AbortSignal) =>
    wishlist.get<WishList[]>(`/v1/wishlists?${ params.toString() }`, { signal });

export const getWishList = async (wishListId: number, signal?: AbortSignal) =>
    wishlist.get<WishList>(`/v1/wishlists/${ wishListId }`, { signal });

export const updateWishList = async (data: WishListUpdateIn, wishListId: number) =>
    wishlist.patch<WishListUpdateIn, WishList>(`/v1/wishlists/${ wishListId }`, { ...data });

export const deleteWishList = async (wishListId: number) =>
    wishlist.delete<boolean>(`/v1/wishlists/${ wishListId }`, {});
