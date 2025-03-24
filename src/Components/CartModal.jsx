// CartModal.jsx
import React from "react";
import { FaTrash } from "react-icons/fa";

const CartModal = ({ isOpen, onClose, cartItems, removeFromCart }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 sm:p-6 rounded-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="border-b  py-2">
                <div className="flex justify-between items-center">
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                  <div className="flex-grow ml-4">
                    <span className="font-medium text-sm sm:text-md">
                      {item.name}
                    </span>
                    <span className="block text-gray-600 text-sm sm:text-md">
                      ${item.price}
                    </span>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className=" hover:text-red-500 text-sm sm:text-md hover:cursor-pointer"
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={onClose}
          className="mt-4 hover:cursor-pointer bg-gray-800 text-white px-4 py-2 rounded-lg text-sm sm:text-md hover:bg-gray-700 font-bold"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
