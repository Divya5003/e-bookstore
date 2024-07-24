import "./App.css";
import { useEffect } from "react";
import bookServices from "./services/bookServices";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/BookList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import AddBook from "./pages/AddBook";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" Component={Home} />
          <Route path="/booklist" Component={Categories} />
          <Route path="/" Component={Login} />
          <Route path="/Register" Component={Register} />
          <Route path="/cart" Component={Cart} />
          <Route path="/admin" Component={AddBook} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
