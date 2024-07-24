import React from "react";
import BookModal from "./BookModal";
function BookCard(props) {
  return (
    <div>
      <div className="flex flex-col items-center bg-white rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 h-48 w-80 mx-4 mb-4">
        <img
          className="object-cover w-24 rounded-md h-40  md:rounded-none md:rounded-s-lg px-1 py-1"
          src={props.url}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-l font-bold tracking-tight text-gray-900">
            {props.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700">By {props.author}</p>
          <p className="mb-3 font-normal text-gray-700">
            <strong>Price : </strong> {props.price}
          </p>

          <BookModal id={props.id} />
        </div>
      </div>
    </div>
  );
}

export default BookCard;
