import React from 'react'
import { connect } from 'react-redux'

import Items from './Items'

class ItemList extends React.Component {
    render() {
        return (
            <div className='containerList'>
                <div className='ui cards'>
                    {this.props.ItemListShow.map((item, idx) => (
                        <Items key={idx} img={item.img} price={item.price} title={item.title} alt={item.title} id={item.id} />
                    ))}
                </div>
            </div>)
    }
}


const mapStateToProps = state => {
    return { ItemList: state.ItemList, ItemListShow: state.ItemListShow }

}

export default connect(mapStateToProps)(ItemList)