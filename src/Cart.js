import React from "react";
import CartItem from "./Cart-Item";
class cart extends React.Component {
    render() {
        return (
            <div className="Cart">
                <CartItem />
                <CartItem />
                <CartItem /></div>

        );
    }
}

export default cart;