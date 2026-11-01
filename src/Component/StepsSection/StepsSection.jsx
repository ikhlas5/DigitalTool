// import React from 'react';

import { use } from "react";
import StepCard from "./StepCard";

const StepsSection = ({ stepsPromise }) => {
    const steps = use(stepsPromise);
    return (
        <>
            <div className="text-center py-10">
                <h1 className=" text-2xl font-bold text-gray-200 my-2">Get Started in 3 Steps </h1>
                <p className="text-gray-300">Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">

            {
                steps.map((step, index) => <StepCard key={ index} step={step} ></StepCard>)
            }
            </div>
        </>
    );
};

export default StepsSection;