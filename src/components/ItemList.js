import React from 'react'
import { connect } from 'react-redux'

import Items from './Items'
import Footer from './Footer'
import Header from './Header'


class ItemList extends React.Component {
    render() {
        return (
            <div className='containerList'>
                <Header search={true} />
                <div className='ui cards ListContent'>
                    {this.props.ItemListShow.map((item, idx) => (
                        <Items key={idx} img={item.img} price={item.price} title={item.title} alt={item.title} id={item.id} />
                    ))}
                </div>
                <Footer className='listFooter ui menu fluid' />
            </div>)
    }
}


const mapStateToProps = state => {
    return { ItemList: state.ItemList, ItemListShow: state.ItemListShow }

}

export default connect(mapStateToProps)(ItemList)