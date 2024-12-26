import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';

import store from 'store';
import { DefaultError } from 'api/apiService';

import { getErrorMessage } from '../utils/getErrorMessage';

const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onError: _error => {
            const error = _error as unknown as DefaultError;

            const message = getErrorMessage(error);
            console.log(message);
            // store.dispatch(addErrorAlert(getErrorMessage(error)));
        }
    }),
    mutationCache: new MutationCache({
        onError: _error => {
            const error = _error as unknown as DefaultError;

            const message = getErrorMessage(error);
            console.log(message);
            // store.dispatch(addErrorAlert(getErrorMessage(error)));
        }
    }),
    defaultOptions: {
        queries: {
            staleTime: 10 * 60 * 1000,
            retry: false,
            refetchOnMount: true,
            refetchOnWindowFocus: false
        }
    }
});

export default queryClient;
