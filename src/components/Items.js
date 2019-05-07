import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { AddToCart } from '../redux/Actions'

const Items = (props) => {

    const handleClick = () => {
        let id = props.id
        props.AddToCart(id)
    }

    return (
        <div className='card'>
            <div className='content'>
                <img className='ui centered image' src={props.img} alt={props.alt} />
                <div className='title header'>{props.title}</div>
            </div>
            <div className='priceHolder'>
                <div>${props.price}</div>
            </div>
            <div className='buttonHolder'>
                <Link className='ui blue button left attached fluid' to={`/Items/${props.id}`}>
                    <div id={props.id}>Details</div>
                </Link>
                <div id={props.id} className='ui green button right attached fluid' onClick={handleClick}>Add to Cart</div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { ItemList: state.ItemList }
}

export default connect(mapStateToProps, { AddToCart })(Items)