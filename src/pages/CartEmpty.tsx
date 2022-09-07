import React from 'react';
import { Link } from 'react-router-dom';
import cartEmptyImg from '../assets/img/empty-cart.png';

const CartEmpty: React.FC = () => {
    return (
        <div className="container container--cart">
            <div className="cart cart--empty">
                <h2>
                    Сart is empty <i>😕</i>
                </h2>
                <p>
                    Most likely, you have not ordered products yet.
                    <br />
                    To order products, go to the main page.
                </p>
                <img src={cartEmptyImg} alt="Empty cart" />
                <Link to="/" className="button button--black">
                    Come back
                </Link>
            </div>
        </div>
    );
};

export default CartEmpty;
