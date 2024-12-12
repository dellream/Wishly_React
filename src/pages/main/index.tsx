import React, {Suspense} from "react";

const Main = React.lazy(
    () =>
        import (
            /* webpackChunkName: 'async-main-page' */
            './main'
            )
)

export default () => (
    // ожидаем загрузку компоненты, запасной нет
    <Suspense fallback={ null }>
        <Main />
    </Suspense>
);
