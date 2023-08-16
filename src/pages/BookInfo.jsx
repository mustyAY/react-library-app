import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import Book from "../components/ui/Book";

const BookInfo = ({ bookInfo, addToCart }) => {
  const { id } = useParams();
  const clickedBook = bookInfo.find((book) => book.id === +id);
  const [added, setAdded] = useState(false);

  function addBookToCart(clickedBook) {
    setAdded(true);
    addToCart(clickedBook);
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  src={clickedBook.url}
                  alt=""
                  className="book__selected--img"
                />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{clickedBook.title}</h2>
                <Rating rating={clickedBook.rating} />
                <div className="book__selected--price">
                  <Price
                    originalPrice={clickedBook.originalPrice}
                    salePrice={clickedBook.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae similique, magnam, inventore sunt ullam voluptate dolor
                    excepturi quos harum repellat consectetur eum eligendi
                    facilis omnis aspernatur provident et voluptatibus odio!
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae similique, magnam, inventore sunt ullam voluptate dolor
                    excepturi quos harum repellat consectetur eum eligendi
                    facilis omnis aspernatur provident et voluptatibus odio!
                  </p>
                </div>
                {added ? (
                  <button className="btn">Checkout</button>
                ) : (
                  <button
                    className="btn" 
                    onClick={() => addBookToCart(clickedBook)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__slected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {bookInfo
                .filter(
                  (recommended) =>
                    recommended.rating === 5 && recommended.id !== +id
                )
                .slice(0, 4)
                .map((recommended) => (
                  <Book book={recommended} key={recommended.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
