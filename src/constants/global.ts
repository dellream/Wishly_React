export enum MEDIA {
    DESKTOP = 'desktop',
    TABLET = 'tablet',
    MOBILE = 'mobile'
}

export enum BREAKPOINTS {
    TABLET = 768,
    DESKTOP = 1200
}

export enum PATH {
    MAIN = '/',
    REGISTRATION = '/registration',
    PROFILE = '/profile',
    NOT_FOUND = '*',
    LOGIN = '/login',
    FRIENDS = '/friends',
    CREATE_WISHLIST = '/create-wishlist',
    WISHLIST_DETAIL = '/wishlist/:id',
    WISHLIST_EDIT = '/wishlist/:id/edit',
    WISHLIST_DELETE = '/wishlist/:id/delete',
    WISHLIST_ADD_FRIEND = '/wishlist/:id/add-friend',
    WISHLIST_REMOVE_FRIEND = '/wishlist/:id/remove-friend',
    WISHLIST_ADD_ITEM = '/wishlist/:id/add-item',
    WISHLIST_REMOVE_ITEM = '/wishlist/:id/remove-item',
    WISHLIST_UPDATE_ITEM = '/wishlist/:id/update-item',
    WISHLIST_DELETE_ITEM = '/wishlist/:id/delete-item'
}

export const getPath = {
    wishlistDetail: (id: number) => PATH.WISHLIST_DETAIL.replace(':id', id.toString()),
};
