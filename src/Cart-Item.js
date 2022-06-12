import React from "react";
// class based compoment
// class name should always be capitle letter
class CartItem extends React.Component {
    //to add state add constructor
    constructor() {
        super();// this will call the constructor compoment
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: 'https://m.media-amazon.com/images/I/71KCwNV6MuL._SX679_.jpg'

        }
        // for multiple event handler we bind like this
        // this.increaseQty = this.increaseQty.bind(this);

    }

    // function to increase quantity
    increaseQty() {
        // console.log(this)

        // setstate function
        // one form of managing state

        // this.setState({
        //     qty:this.state.qty + 1
        // });

        // form two
        this.setState((prevstate) => {
            return {
                qty: prevstate.qty + 1
            }
        })

    }

    // decrease qty
    decreaseQty() {
        if(this.state.qty === 0){
            return ;
        }
        this.setState((prevstate) => {
            return {
                qty: prevstate.qty - 1
            }
        })
    }

    render() {
        // this is destructuring
        const { price, title, qty ,img} = this.props;
        return (<div className="cart-item">
            {/* now we have two block which are left and right */}
            <div className="left-block">
                <img  alt="phoneImage" style={styles.image} src={img}/>
            </div>
            <div className="right-block">
                <div style={{ fontSize: 20 }}>{title}</div>
                <div style={{ fontSize: 20 }}>{price}</div>
                <div style={{ fontSize: 20 }}>Qty : {qty}</div>
                <div className="cart-item-action">
                    {/* button inside */}
                    {/* get image from flat icon */}
                    <img alt="increase"
                        onClick={this.increaseQty.bind(this)}
                        className="action-icon"
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png" />
                    <img alt="decrease" onClick={this.decreaseQty.bind(this)} className="action-icon" src="https://cdn-icons-png.flaticon.com/512/1828/1828899.png" />
                    <img alt="delete" className="action-icon" src="https://cdn-icons.flaticon.com/png/512/3405/premium/3405244.png?token=exp=1654346400~hmac=657dcbc84b080237ecf85e52c0bff619" />

                </div>
            </div>

        </div>
        );

    }
}
// style useing object
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;
