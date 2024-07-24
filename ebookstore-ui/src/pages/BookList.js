import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import BookCard from "../Components/BookCard";
import bookServices from "../services/bookServices";
import { Icon } from "@iconify/react/dist/iconify.js";

const Categories = () => {
  const [books, setBooks] = useState([]);
  const [sortBy, setSortBy] = useState("price");
  const [filterByAuthor, setFilterByAuthor] = useState("");
  const [filterByGenre, setFilterByGenre] = useState("");

  const fetchData = async () => {
    try {
      const response = await bookServices.getBooks();
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Sorting function
  const sortBooks = (sortBy) => {
    const sortedBooks = [...books].sort((a, b) => {
      return a.price - b.price;
    });
    setBooks(sortedBooks);
  };

  // Filtering function
  const filterBooks = () => {
    let filteredBooks = [...books];

    if (filterByAuthor.trim() !== "") {
      filteredBooks = filteredBooks.filter((book) =>
        book.author.toLowerCase().includes(filterByAuthor.toLowerCase())
      );
    }

    if (filterByGenre.trim() !== "") {
      filteredBooks = filteredBooks.filter((book) =>
        book.genre.toLowerCase().includes(filterByGenre.toLowerCase())
      );
    }

    setBooks(filteredBooks);
  };

  // Reset filter function
  const resetFilters = () => {
    setFilterByAuthor("");
    setFilterByGenre("");
    // Refetch all books from API
    fetchData();
  };

  return (
    <div>
      <NavBar />
      <div className="mx-9 my-6 flex items-center justify-between">
        <div>
          <button
            id="sortBy"
            value={sortBy}
            className="bg-gray-900 text-white active:bg-gray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex items-center"
            type="button"
            onClick={(e) => {
              setSortBy(e.target.value);
              sortBooks(e.target.value);
            }}
          >
            Sort by price
            <Icon
              className="ml-2"
              icon="mdi:sort-ascending"
              width="1.2em"
              height="1.2em"
            />
          </button>
        </div>
        <div>
          <label
            htmlFor="filterByAuthor"
            className="font-semibold text-gray-800"
          >
            Filter by Author:
          </label>
          <input
            type="text"
            id="filterByAuthor"
            value={filterByAuthor}
            className="border-2 rounded-md border-gray-500 ml-2 p-1"
            onChange={(e) => {
              setFilterByAuthor(e.target.value);
              filterBooks();
            }}
          />
        </div>
        <div>
          <label
            htmlFor="filterByGenre"
            className="font-semibold text-gray-800"
          >
            Filter by Genre:
          </label>
          <input
            type="text"
            id="filterByGenre"
            value={filterByGenre}
            className="border-2 rounded-md border-gray-500 ml-2 p-1"
            onChange={(e) => {
              setFilterByGenre(e.target.value);
              filterBooks();
            }}
          />
        </div>
        <button
          id="sortBy"
          value={sortBy}
          className="bg-gray-900 text-white active:bg-gray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={resetFilters}
        >
          Reset Filters
        </button>
      </div>
      <div className="mx-9 my-6 flex flex-wrap gap-4">
        {books.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            name={book.name}
            price={book.price}
            author={book.author}
            genre={book.genre}
            url={book.bookurl}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
