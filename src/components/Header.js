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
            <div className='ui menu'>
                <Link to='/' className='item'>
                    <i className="fas fa-home"></i>
                </Link>
                <Link to='/Cart' className='item'>
                    <i className="fas fa-shopping-cart"></i>
                </Link>
                <form className='search item'>
                    <div className='ui input' >
                        <input value={this.state.value} placeholder='Search for a product...' onChange={this.onHandleChange} />
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { ItemList: state.ItemList, ItemListShow: state.ItemListShow }

}

export default connect(mapStateToProps, { SearchFromList })(Header)