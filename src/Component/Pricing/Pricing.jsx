// import React from 'react';

import { use, } from "react";
import Features from "../Card/Features";

const Pricing = ({ digitalCardPromise }) => {
    const premiumCards = use(digitalCardPromise);
    // const [selectedType, setSelectedType] = useState("available");
    return (
        <div>
            <div className="text-center py-10">
                <h1 className=" text-2xl font-bold text-gray-200 my-2">Simple, Transparent Pricing </h1>
                <p className="text-gray-300">Choose the plan that fits your needs. Upgrade or downgrade anytime..</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {
                    premiumCards.map((card) => (
                        <div className="h-full flex flex-col">
                            <div className={`card w-full h-full ${card.tag === "Popular" ? "bg-linear-to-r from-blue-500 to-purple-600" : "bg-base-100"} shadow-sm relative `}>
                                <div className="card-body">
                                    <span className={`badge badge-xs  absolute -top-2 left-50 ${card.tag === "Popular" ? "badge-warning text-white" : ""}`}>{card.tag=== "Popular" ? "Popular" : ""}</span>
                                    <div className="flex justify-between">
                                        <h2 className="text-3xl font-bold">{card.name}</h2>
                                        <span className="text-xl">${card.price}<span className="text-xs text-gray-500">/{card.period}</span></span>
                                    </div>
                                    <div>
                                        <p className='text-sm text-[#627382]'>{card.description}</p>
                                    </div>
                                    <ul className="mt-6 flex-1 flex flex-col  gap-2 text-xs">
                                        {
                                            card.features.map((feature, index) => <Features key={index} feature={feature}></Features>)
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Pricing;