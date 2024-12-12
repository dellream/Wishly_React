import React, {Suspense} from "react";

const Login = React.lazy(
    () =>
        import (
            /* webpackChunkName: 'async-main-page' */
            './login'
            )
)

export default () => (
    // ожидаем загрузку компоненты, запасной нет
    <Suspense fallback={ null }>
        <Login />
    </Suspense>
);
