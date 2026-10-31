// import React from 'react';

import Card from "../../Card/Card";

const AllProducts = ({premiumCards, selectedType, handleVisitedCard}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch auto-rows-fr">

                {
                premiumCards.map((card) => <Card key={card.id} card={card} selectedType={selectedType} handleVisitedCard={handleVisitedCard}></Card>)
               
                }
            </div>
    );
};

export default AllProducts;