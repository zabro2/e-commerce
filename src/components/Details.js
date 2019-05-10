import React from 'react'
import { connect } from 'react-redux'

import { AddToCart } from '../redux/Actions'
import Header from './Header'
import Footer from './Footer'

const Details = (props) => {

    let itemNumber = parseFloat((props.match.params.ItemId))
    let item = (props.ItemList.find(obj => obj.id === itemNumber))

    const handleClick = () => {
        props.AddToCart(itemNumber)
    }

    return (
        <div>
            <Header />
            <div className='ui segment detailsSpot'>
                <div className='detailsContent'>
                    <div className='imageHolder'>
                        <img className='image imageItem' alt={item.title} src={item.img} />
                    </div>
                    <div className='content'>
                        <div className='ui huge header' >{item.title}</div>
                        <div className='detailsRating' >Rating: {item.rating}/5</div>
                        <div className='detailsPrice' >${item.price}</div>
                        <div className='meta'>Description</div>
                        <div className='description' >{item.description}</div>
                        <div id={props.id} className='ui green button detailsBtn' onClick={handleClick}>Add to Cart</div>
                    </div>
                </div>
            </div>
            <Footer className='footer ui menu fluid'/>
        </div>
    )
}

const mapStateToProps = state => {
    return { ItemList: state.ItemList, CartList: state.CartList }
}

export default connect(mapStateToProps, { AddToCart })(Details)