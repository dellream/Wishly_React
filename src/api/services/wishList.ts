import ApiService from 'api/apiService';

const ENV = (process.env.API_ENV as 'prod' | 'local') || 'prod';

const apiUrls: Record<'prod' | 'local', string | undefined> = {
    prod: process.env.PROD_API_URL,
    local: process.env.LOCAL_API_URL,
};

const baseURL = apiUrls[ENV];

if (!baseURL) {
    throw new Error(`API URL for environment ${ENV} is not defined.`);
}

const wishlistApi = new ApiService(baseURL);

export default wishlistApi;
