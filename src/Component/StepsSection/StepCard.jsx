// import React from 'react';
// import icon from '../../assets/step1.png'
const StepCard = ({ step }) => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <span className="badge badge-success ">{ step.id}</span>
                <figure className="px-10 pt-10">
                    <img
                        src={step.icon}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{step.name}</h2>
                    <p>{step.description}</p>
                </div>
            </div>
        </div>
    );
};

export default StepCard;