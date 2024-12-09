import { DefaultError } from 'api/apiService';

export const getErrorMessage = (error: DefaultError) => {
    const { response: { data, status } } = error;

    if (data.errors) {
        return data.errors.map(({ message }) => message).join(' ');
    }

    return data.message ? data.message : `Неизвестная ошибка. Код ошибки -  ${ status }`;
};
