import React from 'react'
import { connect } from 'react-redux'

import CartItem from './CartItem'

class Cart extends React.Component {
    render() {
        console.log(this.props.CartList)

        return (
            <div className='ui items'>
                {this.props.CartList.map((item, idx) => (
                        <CartItem key={idx} img={item.img} price={item.price} title={item.title} description={item.description} rating={item.rating} alt={item.title} id={item.id} uuid={idx} />
                    ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { ItemList: state.ItemList, CartList: state.CartList }
}

export default connect(mapStateToProps)(Cart)