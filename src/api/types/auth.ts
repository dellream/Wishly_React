export interface UserCredentialsIn {
    email: string;
    password: string;
}

export interface TokenInfo {
    access_token: string;
    refresh_token: string | null;
    token_type: string;
}