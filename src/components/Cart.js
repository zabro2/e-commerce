import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import CartItem from './CartItem'
import Header from './Header'


class Cart extends React.Component {
    state = {
        price: null
    }

    handleOnClick = () => {
        let items = this.props.CartList
        let totalPrice = 0
        for (let i = 0; i < items.length; i++) {
            totalPrice += parseFloat(items[i].price)
        }
        this.setState({
            price: 'Your total: $' + totalPrice.toFixed(2)
        })
    }

    render() {
        return (
            <div>
                <Header />
                {this.props.CartList.length > 0 ? (
                    <div className='cartList'>
                        {this.props.CartList.map((item, idx) => (
                            <CartItem key={idx} img={item.img} price={item.price} title={item.title} description={item.description} rating={item.rating} alt={item.title} id={item.id} uuid={idx} />
                        ))}
                        <div className='bottomCart ui segment'>
                            <div className='ui primary green button' onClick={this.handleOnClick}>Comfirm</div>
                            <div className='totalPriceHolder'>{this.state.price}</div>
                        </div>
                    </div>
                ) : (
                        <div className='cartList ternaryText'>
                            <div className= 'ui header'>Your cart is empty</div>
                            <Link to='/home'>
                                <div className='ui green button'>Add Items</div>
                            </Link>
                        </div>
                    )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { ItemList: state.ItemList, CartList: state.CartList }
}

export default connect(mapStateToProps)(Cart)