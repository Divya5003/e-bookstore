import React, { useEffect, useState } from "react";
import bookServices from "../services/bookServices";
import combinedServices from "../services/combinedServices";
import { getToken } from "../utils/global";

export default function BookModal({ id }) {
  const [showModal, setShowModal] = React.useState(false);
  const [book, setBook] = useState({});
  const user = getToken();

  const addToCart = async () => {
    try {
      const response = await combinedServices.addToCart(user, id);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    setShowModal(false);
  };
  const buyProduct = async () => {
    try {
      const response = await combinedServices.purchaseItem(id, 1);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await bookServices.getBookById(id);
        setBook(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <button
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-32"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Details
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold"> {book.name} </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="flex">
                  <img
                    className="object-cover w-32 rounded-md h-56 md:rounded-sm md:rounded-s-lg px-4 py-4"
                    src={book.bookurl}
                    alt=""
                  />
                  <div>
                    <div className="relative p-2 flex-auto">
                      <p className="my-1 text-blueGray-500 text-lg leading-relaxed">
                        {book.description}
                      </p>
                    </div>

                    <div className="relative p-2 flex-auto">
                      <p className="my-1 text-blueGray-500 text-lg leading-relaxed">
                        Author : {book.author}
                      </p>
                    </div>
                    <div className="relative p-2 flex-auto">
                      <p className="my-1 text-blueGray-500 text-lg leading-relaxed">
                        Genre : {book.genre}
                      </p>
                    </div>
                  </div>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={addToCart}
                  >
                    Add to cart
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={buyProduct}
                  >
                    Buy
                  </button>
                  <button
                    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
