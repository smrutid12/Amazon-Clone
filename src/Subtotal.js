import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
function Subtotal() {
    const [{basket}] = useStateValue();
    return (
        <div className="subtotal">
            {/* price */}
            <CurrencyFormat
            renderText={(value)=>(
                <>
                <p>
                    Subtotal ({basket.length} item): <strong>{`${value}`}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" />This order contains gift
                </small>
                </>
            )}
            
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
            <button>Proceed to Buy</button>
        </div>
    );
}

export default Subtotal;
