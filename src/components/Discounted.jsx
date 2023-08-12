import React from "react";
import { books } from "../data";
import Book from "./ui/Book";

const Discounted = () => {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Discounted <span className="mint">Books</span>
          </h2>
          <div className="books">
            {
                books.map(discountedBook => <Book book={discountedBook} key={discountedBook.id}/>)
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounted;
