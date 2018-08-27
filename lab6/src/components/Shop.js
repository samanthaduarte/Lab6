// Presentational

import '../stylesheets/shop.css'
import React, { Component } from 'react'

class Shop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shopItems: [
                "Banana",
                "Fresa",
                "Mango",
                "Espnaca"
            ]
        }
    }

    render() {
        const shopItems = this.state.shopItems.map((item, id) => {
            return (
                <li key={id}>
                    {item}
                    <button onClick={() => this.props.addItem(item)}>Comprar</button>
                </li>
            )
        })
        return (
            <div className = {"shop"}>
                <h2>Tienda</h2>
                <ul>
                    {shopItems}
                </ul>
            </div>
        )
    }
}

export default Shop

