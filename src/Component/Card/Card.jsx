// import React from 'react';
import { useState } from 'react';
import Features from './Features';

const Card = ({ card, handleVisitedCard }) => {
    const [visited, setVisited] = useState(false);

    // console.log(card);

     const handleVisited = () => {
        // basic system
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        // second system
        // setVisited(visited ? false : true);

        // third system
        setVisited(!visited);
    }

    return (
        <div className='h-full flex flex-col'>
            <div className="card w-full h-full bg-base-100 shadow-sm ">
                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <img className='w-8 h-8 my-5' src={card.icon} alt="" />
                    <span className="badge badge-xs badge-warning">{card.tag}</span>
                    </div>
                    <div className="flex justify-between">
                        <h2 className="text-3xl font-bold">{ card.name}</h2>
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
                    <div className="mt-6">
                        <button className="btn btn-primary btn-block" onClick={() => {
                            handleVisited();
                            handleVisitedCard(card);
                        }}>{visited ? 'Cart Added' : 'Buy Now'}</button>
                    </div>
                </div>
        </div>
        </div>
    );
};

export default Card;