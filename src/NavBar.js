import React from "react";
const navbar = (props) => {
    // console.log(props)
    return (
        <div className="navBar">
            <div style={style.navbar}>
                <img
                    src="https://cdn-icons.flaticon.com/png/512/2838/premium/2838895.png?token=exp=1655059095~hmac=85e0decfda38e883d52d48e5d2e1ceca"
                    alt="cart-icon"
                    style={style.cartIcon} />
                <span style={style.count}>{props.count}</span>
            </div>
        </div>
    );

}



const style = {
    cartIcon: {
        height: 32,
        marginRight: 5
    },
    navbar: {
        background: "lightblue",
        height: 50,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: -7
    },
    count: {
        background: "yellow",
        padding: 5,
        borderRadius: '50%',
        top: -9
    }
}

export default navbar;