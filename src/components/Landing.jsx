import React from "react";
import UndrawBooks from '../assets/Undraw_Books.svg'
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>The online library platform that is most easy to use?</h1>
                        <h2>Look no further than <span className="mint">Library</span></h2>
                        <Link to="/books">
                            <button className="btn">Browse books</button>
                        </Link>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={UndrawBooks} alt="" />
                    </figure>
                </div>
            </header>
        </section>
    )
}

export default Landing;