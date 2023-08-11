import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Book from "./ui/Book";
import { books } from "../data";

const Featured = () => {

    function getFiveStarBooks() {
    }
    return (
        <section id="features">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Featured <span className="mint">Books</span>
                    </h2>
                    <div className="books">
                        <Book />
                        <Book />
                        <Book />
                        <Book />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Featured;