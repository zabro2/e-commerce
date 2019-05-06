import React from 'react'
import { connect } from 'react-redux'

import { DeleteFromCart } from '../redux/Actions'

const CartItem = (props) => {

    const handleClick = () => {
        let id = props.id
        props.DeleteFromCart(id)
    }
    return (
        <div className='item'>
            <img className='ui image imageItem' alt={props.title} src={props.img}/>
            <div className='content'>
                <div className='header'>{props.title}</div>
                <div className=''>Rating: {props.rating}/5</div>
                <div className=''>{props.price}</div>
                <div className='meta'>Description</div>
                <div className='description'>{props.description}</div>
                <div id={props.id} className='ui basic red button' onClick={handleClick}>Remove</div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { ItemList: state.ItemList, CartList: state.CartList }
}

export default connect(mapStateToProps, { DeleteFromCart })(CartItem)