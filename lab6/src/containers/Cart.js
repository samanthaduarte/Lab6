// Container
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as CartActions from '../actions/CartActions'
import Shop from '../components/Shop'

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const CartItems = this.props.cart.map((item, id) => {
            return (
                <li key={id}>
                    {item}
                </li>
            )
        })
        return (
            <div>
                <Shop addItem={this.props.actions.addToCart} />
                <h2>Compras</h2>
                <ol>
                    {CartItems}
                </ol>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        cart: state.cart
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(CartActions, dispatch)
    }
}


const wrapperFunction = connect(mapStateToProps, mapDispatchToProps)

const wrappedComponent = wrapperFunction(Cart)

export default wrappedComponent