import React, {Suspense} from "react";

const Registration = React.lazy(
    () =>
        import (
            /* webpackChunkName: 'async-registration-page' */
            './registration'
            )
)

export default () => (
    // ожидаем загрузку компоненты, запасной нет
    <Suspense fallback={null}>
        <Registration/>
    </Suspense>
);
