export interface WishListCreateIn {
    title: string;
    description: string | null;
    is_public: boolean | null;
    event_date: Date | null;
}

export interface WishListUpdateIn {
    title: string | null;
    description: string | null;
    is_public: boolean | null;
    event_date: Date | null;
}

export interface WishList {
    id: number;
    title: string;
    description: string | null;
    user_id: number;
    is_public: boolean;
    event_date: Date | null;
}