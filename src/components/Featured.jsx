import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Book from "./ui/Book";
import { books } from "../data";

const Featured = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="mint">Books</span>
          </h2>
          <div className="books">
            {books
              .filter((book) => book.rating === 5)
              .slice(0, 4)
              .map((featuredBook) => (
                <Book book={featuredBook} key={featuredBook.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;