import React from "react";
import CartItem from "./Cart-Item";
class cart extends React.Component {
    constructor() {
        super();// this will call the constructor compoment
        this.state = {
            products: [
                {
                    price: 999,
                    title: 'Phone',
                    qty: 1,
                    id:1,
                    img: 'https://m.media-amazon.com/images/I/71KCwNV6MuL._SX679_.jpg'
                },
                {
                    price: 99,
                    title: 'watch',
                    qty: 1,
                    id:2,
                    img: 'https://m.media-amazon.com/images/I/71KCwNV6MuL._SX679_.jpg'
                },
                {
                    price: 999,
                    title: 'Mobile',
                    qty: 1,
                    id:3,
                    img: 'https://m.media-amazon.com/images/I/71KCwNV6MuL._SX679_.jpg'
                }
            ]
        }
    }
    render() {
        // const arr =[1, 2, 3, 4, 4 , "Amit"];
        const {products} = this.state;
        return (
            <div className="Cart">
                {/* // this is props */}
                {/* <CartItem qty={1} title={"watch"} price={100} /> */}
                {products.map((products)=>{
                    // return list of cart item
                    return <CartItem key={products.id}
                     qty={products.qty}
                      title={products.title} 
                      img={products.img} />
                })}
                {/* {arr.map((item)=>{
                    return item+5
                })} */}
            </div>

        );
    }
}

export default cart;