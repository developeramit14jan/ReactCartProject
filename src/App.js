import React from "react";
// import css file
import './index.css'
import Cart from "./Cart";
import Navbar from "./NavBar";
class App extends React.Component {
  constructor() {
    super();// this will call the constructor compoment
    this.state = {
      products: [
        {
          price: 999,
          title: 'Phone',
          qty: 1,
          id: 1,
          img: 'https://m.media-amazon.com/images/I/71KCwNV6MuL._SX679_.jpg'
        },
        {
          price: 99,
          title: 'watch',
          qty: 1,
          id: 2,
          img: 'https://m.media-amazon.com/images/I/71KCwNV6MuL._SX679_.jpg'
        },
        {
          price: 999,
          title: 'Mobile',
          qty: 1,
          id: 3,
          img: 'https://m.media-amazon.com/images/I/71KCwNV6MuL._SX679_.jpg'
        }
      ]
    }
  }

  // increase qty
  handleIncreaseQty = ((product) => {
    console.log("hey please increase qty", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty++;
    this.setState({
      // products of state : products that we get below line hey please increase
      products: products
    });
  });
  // control decrease qty
  handleDecreaseQty = ((product) => {
    console.log(product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }
    products[index].qty--;
    this.setState({
      products: products
    })

  });
  //delete product
  handleDeleteProduct = ((id) => {
    console.log("hey delete the product", id);
    const { products } = this.state;
    const item = products.filter((item) => {
      return item.id != id
    });
    console.log(item);
    this.setState({
      products: item
    })
  });
  // cart count
  cartCount = () => {
    const { products } = this.state;
    let total = 0;
    products.forEach((item) => {
      total += item.qty;
    });
    return total;
  }

  // get total price
  totalPrice =()=>{
    const {products} = this.state;
    var totalRs=0;
    products.forEach((product)=>{
      totalRs +=product.qty * product.price;
    })
    return totalRs;
  }
  render() {
    const { products } = this.state
    return (
      <div className="App" >
        {/* here we have to pass function */}
        <Navbar
          count={this.cartCount()} />
        <Cart
          products={products}
          onIncrease={this.handleIncreaseQty}
          onDecrease={this.handleDecreaseQty}
          onDelete={this.handleDeleteProduct} />

          {/* now giv total */}
          <div style={{fontSize : 25 , padding:5}}>TOTAL : {this.totalPrice()}</div>
      </div>
    )
  }
}

export default App;
