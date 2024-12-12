import React, {Suspense} from "react";

// Асинхронная загрузка компоненты
const NotFound = React.lazy(
    () =>
        import(
            /* webpackChunkName: 'async-notfound-page' */
            './notFound'
            )
)

export default () => (
    // ожидаем загрузку компоненты, запасной нет
    <Suspense fallback={ null }>
        <NotFound/>
    </Suspense>
);
