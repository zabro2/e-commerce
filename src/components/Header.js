import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { SearchFromList } from '../redux/Actions'

class Header extends React.Component {
    state = {
        value: ''
    }

    onHandleChange = (evt) => {
        this.setState({
            value: evt.target.value
        }, () => this.onSearch())

    }

    onSearch = () => {
        let term = this.state.value
        this.props.SearchFromList(term)
    }

    render() {
        return (
            <div className='ui fixed top sticky large menu'>
                <Link to='/home' className='item'>
                    <i className="fas fa-home"></i>
                </Link>
                <Link to='/Cart' className='item cartBtn'>
                    <i className="fas fa-shopping-cart"></i>
                    <div>{this.props.CartList.length}</div>
                </Link>
                <form className='search item'>
                    <div className='ui input icon inputHeader' >
                        <input value={this.state.value} placeholder='Search for a product or catagory...' onChange={this.onHandleChange} />
                        <i className='search icon'></i>
                    </div>
                </form>
                <div className='right item'>{this.props.userName}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { ItemList: state.ItemList, ItemListShow: state.ItemListShow, CartList: state.CartList, userName: state.userName }

}

export default connect(mapStateToProps, { SearchFromList })(Header)