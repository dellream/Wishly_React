import ApiService from 'api/apiService';

const ENV = (process.env.NODE_ENV as 'production' | 'development') || 'production';

const apiUrls: Record<'production' | 'development', string | undefined> = {
    production: process.env.REACT_APP_PRODUCTION_URL,
    development: process.env.REACT_APP_DEVELOPMENT_URL,
};

const baseURL = apiUrls[ENV];

if (!baseURL) {
    throw new Error(`API URL for environment ${ENV} is not defined.`);
}

const wishlistApi = new ApiService(baseURL);

export default wishlistApi;
