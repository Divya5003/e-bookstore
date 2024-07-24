import React, { useState } from "react";
import bookServices from "../services/bookServices";
const AddBook = () => {
  const [formData, setFormData] = useState({
    name: "",
    bookurl: "",
    description: "",
    price: "",
    genre: "",
    author: "",
    stock: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await bookServices.saveBook(formData);
    console.log(response);
    console.log(formData);
  };

  return (
    <div className="bg-black bg-opacity-60 h-screen flex items-center justify-center">
      <div className="bg-white p-12 rounded-lg shadow-xl w-1/3">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="font-semibold text-lg"> ADD BOOK </h2>
          <div className="relative">
            <label
              htmlFor="name"
              className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="rounded-md px-6 pt-6 pb-1 w-full text-lg focus:outline-none text-pink-700 bg-zinc-200 peer"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="bookurl"
              className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
            >
              Book URL
            </label>
            <input
              type="text"
              id="bookurl"
              name="bookurl"
              value={formData.bookurl}
              onChange={handleChange}
              className="rounded-md px-6 pt-6 pb-1 w-full text-lg focus:outline-none text-pink-700 bg-zinc-200 peer"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="description"
              className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="rounded-md px-6 pt-6 pb-1 w-full text-lg focus:outline-none text-pink-700 bg-zinc-200 peer"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="price"
              className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="rounded-md px-6 pt-6 pb-1 w-full text-lg focus:outline-none text-pink-700 bg-zinc-200 peer"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="genre"
              className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
            >
              Genre
            </label>
            <input
              type="text"
              id="genre"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              className="rounded-md px-6 pt-6 pb-1 w-full text-lg focus:outline-none text-pink-700 bg-zinc-200 peer"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="author"
              className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="rounded-md px-6 pt-6 pb-1 w-full text-lg focus:outline-none text-pink-700 bg-zinc-200 peer"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="stock"
              className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
            >
              Stock
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="rounded-md px-6 pt-6 pb-1 w-full text-lg focus:outline-none text-pink-700 bg-zinc-200 peer"
            />
          </div>
          <div className="relative">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
