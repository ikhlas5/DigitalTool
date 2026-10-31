// import React from 'react';

const Cart = ({ visitedCards, handleRemoveItem }) => {
    // console.log(visitedCards);
    const total = visitedCards.reduce((acc, item) => acc + item.price, 0);
    return (
         <div className="w-full max-w-5xl mx-auto p-6  rounded-xl">

      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-200 mb-6">
        Your Cart
      </h2>

      {/* Cart Items */}
      <div className="space-y-4">
        {visitedCards.length > 0 ? (
                    visitedCards.map((item, index) => (
              console.log(item.icon),
            <div
              key={index}
              className="flex items-center justify-between gap-4 p-5 bg-gray-50 rounded-2xl"
            >
              {/* Product Info */}
              <div className="flex items-center gap-4">
                <div className="size-14 flex items-center justify-center bg-white rounded-full border border-gray-200 text-2xl">
                    <img className='w-8 h-8 my-5' src={item.icon} alt="" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 mt-1">
                    ${item.price}
                  </p>
                </div>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => handleRemoveItem(item)}
                className="text-pink-500 hover:text-pink-700 font-medium transition"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-10">
            Your cart is empty.
          </p>
        )}
      </div>

      {/* Total */}
      <div className="flex items-center justify-between border-t border-gray-200 mt-6 pt-4">
        <span className="text-gray-100">Total:</span>
        <span className="text-2xl font-bold text-white">
          ${total}
        </span>
      </div>

      {/* Checkout Button */}
      <button
        
        disabled={visitedCards.length === 0}
        className="w-full mt-6 py-4 rounded-full text-white font-semibold
        bg-gradient-to-r from-indigo-600 to-purple-600
        hover:from-indigo-700 hover:to-purple-700
        transition disabled:opacity-50"
      >
        Proceed To Checkout
      </button>

    </div>
    );
};

export default Cart;