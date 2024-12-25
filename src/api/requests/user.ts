import wishlist from "api/services/wishList";
import {UserPublicInfo} from "api/types/user";

export const getMe = async () =>
    wishlist.get<UserPublicInfo>('/v1/me');