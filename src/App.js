import React, { useState } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);
  function addToCart() {
    setCart((prevCart) => {});
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" Component={Home} />
          <Route
            path="/books"
            Component={() => <Books renderBooks={books} />}
          />
          <Route
            path="/books/:id"
            Component={() => <BookInfo bookInfo={books} />}
          />
          <Route
            path="/cart"
            Component={() => <Cart cartBook={books} addToCart={addToCart} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
