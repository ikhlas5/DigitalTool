// import React from 'react';

import { use, useState } from "react";
import AllProducts from "./AllProducts/AllProducts";
import Cart from "./Cart/Cart";

const PremiumDigit = ({ digitalCardPromise, visitedCards, handleVisitedCard, setVisitedCards }) => {
    const premiumCards = use(digitalCardPromise);
     
    // console.log(premiumCards);
    const [selectedType, setSelectedType] = useState("available");

    const handleRemoveItem = (item) => {
        console.log(item);
        const newVisitedCards = visitedCards.filter((card) => card.id !== item.id);
        setVisitedCards(newVisitedCards);
    }

    return (
        <>
            <div className="text-center py-10">
                <h1 className="text-3xl font-extrabold py-5">Premium Digital Tools</h1>
                <p>Choose from our curated collection of premium digital products designedto<br></br> boost your productivity and creativity.</p>

                <button onClick={() => setSelectedType("available")} className={`btn m-5 px-5 ${selectedType === "available" ? "bg-linear-to-r from-blue-500 to-purple-600" : ""}`}>Products</button>
                <button onClick={() => setSelectedType("selected")} className={`btn m-5 px-5 ${selectedType === "selected" ? "bg-linear-to-r from-blue-500 to-purple-600" : ""}`}>Carts<span>({ visitedCards.length })</span></button>
            </div>
            {
                selectedType === "available" ? (<AllProducts premiumCards={premiumCards} handleVisitedCard={handleVisitedCard}></AllProducts>):(<Cart visitedCards={visitedCards} handleRemoveItem={handleRemoveItem} ></Cart>)
           }
            

        </>
    );
};

export default PremiumDigit;