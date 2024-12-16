import React from 'react';
import {useAppSelector} from "store";
import Landing from "../landing";

const Main: React.FC = () => {
    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

    return isAuthenticated
        ?
        <>
            <div>
                <h1>Main page</h1>
            </div>
        </>
        :
        <Landing/>
};
export default Main;
