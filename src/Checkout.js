import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css';
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { getBasketTotal } from './reducer';
import { Link } from 'react-router-dom';
function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">

                {basket?.length === 0 ? (
                    <div className="emptyCart">
                        <img
                            src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
                            alt=""
                        />
                        <div className="emptyCart__info">
                            <h2>Your Amazon Basket is empty</h2>
                            <Link to="/login">
                            <button className="signIn">Sign in to your account</button>
                            <button className="signUp">Sign up now</button>
                            </Link>
                        </div>

                    </div>
                ) : (
                    <div className="checkout__shoppingCart">
                        <h2 className="checkout__title">Shopping Cart</h2>
                        {/* list of all the checkout products*/}
                        {basket?.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                            />
                        ))}
                        <div className="subtotal__left">
                            {/* price */}
                            <CurrencyFormat
                                renderText={(value) => (
                                        <p>
                                            Subtotal ({basket.length} item): <strong>{`${value}`}</strong>
                                        </p>
                                )}

                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                        </div>
                    </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    {/* h1>Subtotal</h1>< */}
                    <img
                        className="checkout__ad"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
                        alt=""
                    />
                    <Subtotal />
                </div>
            )}
        </div>
    );
}

export default Checkout;
