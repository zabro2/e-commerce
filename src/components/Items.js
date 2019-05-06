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
                <div>{props.price}</div>
                <div>{props.title}</div>
            </div>
            <Link className='ui basic blue button' to={`/Items/${props.id}`}>
                <div id={props.id}>Details</div>
            </Link>
            <div id={props.id} className='ui basic green button' onClick={handleClick}>Add to Cart</div>
        </div>
    )
}

const mapStateToProps = state => {
    return { ItemList: state.ItemList }
}

export default connect(mapStateToProps, { AddToCart })(Items)