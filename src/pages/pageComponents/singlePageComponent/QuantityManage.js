import React, { useState, useEffect } from "react";

const QuantityManage = ({ initialStock, country }) => {
  const [quantity, setQuantity] = useState(1);
  const [stock, setStock] = useState(initialStock);

  useEffect(() => {
    if (quantity < initialStock) {
      setStock(initialStock - quantity);
    }
  }, [quantity, initialStock]);

  const setDecrement = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity > 1) {
        return prevQuantity - 1;
      }
      return 1;
    });
  };

  const setIncrement = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity < stock) {
        return prevQuantity + 1;
      }
      return prevQuantity;
    });
  };

  // Logging for debugging
  console.log("Quantity:", quantity);
  console.log("Stock:", stock);

  return (
    <>
                <div className='py-2 lg:py4'>
              <hr />
            </div>

            <div className="country-and-stock flex items-center justify-between ">

              <div className="country-label text-sm flex item justify-end">
                <p>Made in <span className='text-gray-500'>{country}</span></p>
              </div>
              <div className="total-stock text-sm py-2">
                Avaibale: <i> {stock}</i>
                <span className='text-xs text-gray-500'>{stock > 0 ? " Items In Stock" : "Out of Stock"}</span>
              </div>
            </div>

            <div className='py-2 lg:py4'>
              <hr />
            </div>
    <div className="quantity flex gap-2 items-center py-2 lg:py-4">
      <span>Quantity</span>

      <button
        className="p-2 w-10 h-10 active:bg-gray-200 shadow-md active:text-xl hover:text-teal-700 bg-white"
        onClick={setDecrement}
      >
        <i className="fa-solid fa-minus"></i>
      </button>

      <span className="flex justify-center bg-transparent min-w-10 outline-none border-0">{quantity}</span>

      <button
        className="p-2 w-10 h-10 active:bg-gray-200 shadow-md active:text-xl hover:text-teal-700 bg-white"
        onClick={setIncrement}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
    </>
  );
};

export default QuantityManage;
