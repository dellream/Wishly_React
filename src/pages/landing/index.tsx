import React, { Suspense } from 'react';

// Асинхронная загрузка компоненты
const Landing = React.lazy(
    () =>
        import(
            /* webpackChunkName: 'async-landing-page' */
            './landing'
            )
);

export default () => (
    // ожидаем загрузку компоненты, запасной нет
    <Suspense fallback={ null }>
        <Landing />
    </Suspense>
);
