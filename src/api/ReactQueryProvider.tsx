import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import queryClient from './client';

interface Props {
    children: React.ReactNode;
}

const ReactQueryProvider: React.FC<Props> = ({ children }) => (
    <QueryClientProvider client={ queryClient }>
        <ReactQueryDevtools initialIsOpen={ false } buttonPosition="bottom-left" />
        { children }
    </QueryClientProvider>
);

export default ReactQueryProvider;
