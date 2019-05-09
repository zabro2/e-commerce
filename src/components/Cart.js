import React from 'react'
import { connect } from 'react-redux'

import CartItem from './CartItem'
import Footer from './Footer'

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
            price: 'Your total: $' + totalPrice
        })
    }

    render() {
        return (
            <div>
                <div className='cartList'>
                    {this.props.CartList.map((item, idx) => (
                        <CartItem key={idx} img={item.img} price={item.price} title={item.title} description={item.description} rating={item.rating} alt={item.title} id={item.id} uuid={idx} />
                    ))}
                    <div className='bottomCart ui segment'>
                        <div className='ui primary green button' onClick={this.handleOnClick}>Comfirm</div>
                        <div className='totalPriceHolder'>{this.state.price}</div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { ItemList: state.ItemList, CartList: state.CartList }
}

export default connect(mapStateToProps)(Cart)