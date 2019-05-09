import React from 'react'
import { connect } from 'react-redux'

import { DeleteFromCart } from '../redux/Actions'

const CartItem = (props) => {

    const handleClick = () => {
        props.DeleteFromCart(props.id)
    }
    return (
        <div className='ui segment detailsContent'>
            <div className='imageHolder'>
                <img className='ui image imageItem' alt={props.title} src={props.img} />
            </div>
            <div className='content'>
                <div className='ui huge header'>{props.title}</div>
                <div className='detailsRating'>Rating: {props.rating}/5</div>
                <div className='detailsPrice'>${props.price}</div>
                <div className='meta'>Description</div>
                <div className='description'>{props.description}</div>
                <div id={props.id} className='ui red button detailsBtn' onClick={handleClick}>Remove</div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { ItemList: state.ItemList, CartList: state.CartList }
}

export default connect(mapStateToProps, { DeleteFromCart })(CartItem)