import React, {FC} from 'react';
import {Hero} from "./sections/Hero";
import {HowItWorks} from "./sections/HowItWorks";

const Landing: FC = () => {
    return (
        <>
            <Hero />
            <HowItWorks />
        </>
    )
};
export default Landing;
