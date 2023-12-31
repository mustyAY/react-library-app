import React, { useEffect, useState } from "react";
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

  function addToCart(clickedBook) {
    setCart([...cart, { ...clickedBook, quantity: 1 }]);
  }

  function changeQuantity(clickedBook, quantity) {
    setCart(
      cart.map((item) =>
        item.id === clickedBook.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item
      )
    );
  }

  function cartItems() {
    let cartItem = 0;
    cart.forEach((item) => {
      cartItem += item.quantity;
    });
    return cartItem;
  }

  function removeBook(clickedBook) {
    setCart(cart.filter((item) => item.id !== clickedBook.id));
  }

  return (
    <Router>
      <div className="App">
        <Nav cartItems={cartItems} />
        <Routes>
          <Route path="/" Component={Home} />
          <Route
            path="/books"
            Component={() => <Books renderBooks={books} />}
          />
          <Route
            path="/books/:id"
            Component={() => (
              <BookInfo bookInfo={books} addToCart={addToCart} cart={cart} />
            )}
          />
          <Route
            path="/cart"
            Component={() => (
              <Cart
                cartBook={books}
                cart={cart}
                changeQuantity={changeQuantity}
                removeBook={removeBook}
              />
            )}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
