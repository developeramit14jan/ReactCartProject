import { hasUnreliableEmptyValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import CartItem from "./Cart-Item";
const cart=(props)=> {
        // const arr =[1, 2, 3, 4, 4 , "Amit"];
        const { products } = props;
        return (
            <div className="Cart">
                {/* // this is props */}
                {/* <CartItem qty={1} title={"watch"} price={100} /> */}
                {products.map((products) => {
                    // return list of cart item
                    return <CartItem
                        key={products.id}
                        products={products}
                        onIncrease={props.onIncrease}
                        onDecrease={props.onDecrease}
                        onDelete={props.onDelete}
                    />
                })}
                {/* {arr.map((item)=>{
                    return item+5
                })} */}
            </div>

        );
}

export default cart;