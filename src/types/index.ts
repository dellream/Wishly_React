export interface User {
    id?: number;
    email: string;
    is_email_activated: boolean;
    activation_link: string | null;
}

export interface Page {
    size: number;
    total_elements: number;
    total_pages: number;
    current_page: number;
}