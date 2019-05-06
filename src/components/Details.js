import React from 'react'
import { connect } from 'react-redux'

import { AddToCart } from '../redux/Actions'

const Details = (props) => {

    let itemNumber = parseFloat((props.match.params.ItemId))
    let item = (props.ItemList.find(obj => obj.id === itemNumber))
    
    const handleClick = () => {
        props.AddToCart(itemNumber)
    }

    return (
        <div className='ui items'>
            <div className='item'>
                <img className='ui image imageItem' alt={item.title} src={item.img} />
                <div className='content'>
                    <div className='header' >{item.title}</div>
                    <div className='' >Rating: {item.rating}/5</div>
                    <div className='' >{item.price}</div>
                    <div className='meta'>Description</div>
                    <div className='description' >{item.description}</div>
                    <div id={props.id} className='ui basic green button' onClick={handleClick}>Add to Cart</div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { ItemList: state.ItemList, CartList: state.CartList }
}

export default connect(mapStateToProps, { AddToCart })(Details)