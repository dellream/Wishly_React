export interface ThingCreateIn {
    title: string;
    description: string | null;
    priority: number;
    price: number | null;
    is_done: boolean;
    image_link: string | null;
    shop_link: string | null;
}

export interface ThingUpdateIn {
    title: string | null;
    description: string | null;
    priority: number | null;
    price: number | null;
    is_done: boolean | null;
    image_link: string | null;
    shop_link: string | null;
}

export interface Thing {
    id: number;
    title: string;
    description: string | null;
    priority: number;
    price: number | null;
    is_done: boolean;
    image_link: string | null;
    shop_link: string | null;
    wishlist_id: number;
}
