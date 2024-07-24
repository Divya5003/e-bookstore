import React, { useEffect, useState } from "react";
import bookServices from "../services/bookServices";
import { Icon } from "@iconify/react/dist/iconify.js";
import { getToken } from "../utils/global";
import combinedServices from "../services/combinedServices";

const CardItem = ({ id, count }) => {
  const [book, setBook] = useState([]);
  const [quantity, setQuantity] = useState(count);
  const user = getToken();
  useEffect(() => {
    const getItem = async (id) => {
      try {
        const response = await bookServices.getBookById(id);
        setBook(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getItem(id);
  }, [id, count]);

  const increaseCount = async () => {
    try {
      const response = await combinedServices.increaseQuantity(user, id);
      console.log(response.data);
      setQuantity(quantity + 1);
    } catch (error) {
      console.error(error);
    }
  };

  const decreaseCount = async () => {
    try {
      const response = await combinedServices.decreaseQuantity(user, id);
      console.log(response.data);
      setQuantity(quantity - 1);
    } catch (error) {
      console.error(error);
    }
  };

  const buyItem = async () => {
    try {
      const response = await combinedServices.purchaseItem(id, quantity);
      if (response.data.amount === 0 && response.data.purchased === 0) {
        alert("Stock not available!")
      }
      else {
        alert("₹" + response.data.amount + " debited, " + response.data.purchased + " items purchased.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="m-6 p-4 shadow-md bg-white rounded-lg">
      <div className="grid grid-cols-5">
        <div className="col-span-1">
          <img
            className="object-cover w-40 rounded-md h-56 md:rounded-sm md:rounded-s-lg px-4 py-4"
            src={book.bookurl}
            alt=""
          />
        </div>
        <div className="col-span-4">
          <p className="my-1 text-blueGray-500 font-semibold text-lg leading-relaxed">
            {book.name}
          </p>
          <p className="my-1 text-blueGray-500 text-lg leading-relaxed">
            {book.author}
          </p>
          <div className="my-1 p-1 border-2 bg-white rounded-sm w-fit flex">
            <div
              className="p-1 flex items-center cursor-pointer"
              onClick={increaseCount}
            >
              <Icon icon="material-symbols:add" />
            </div>
            <div className="p-1">{quantity}</div>
            <div
              className="p-1 flex items-center cursor-pointer"
              onClick={decreaseCount}
            >
              <Icon icon="ic:baseline-minus" />
            </div>
          </div>
          <div>
            <p className="my-1 text-blueGray-500 text-lg leading-relaxed">
              <span className="font-semibold">Price per item:</span>{" "}
              {book.price}
            </p>
          </div>
          <button
            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={buyItem}
          >
            Buy item
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
