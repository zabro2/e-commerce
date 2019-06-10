import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import ItemList from './ItemList'
import Details from './Details'
import Cart from './Cart'
import SignIn from './SignIn'

class App extends React.Component {

    render() {
        return (
            <div className='mainContainer'>
                <HashRouter>
                    <div className='centerContainer'>
                        {/* <Header /> */}
                        <Route path='/' exact component={SignIn} />
                        <Route path='/home' exact component={ItemList} />
                        <Route path="/Items/:ItemId" component={Details} />
                        <Route path='/Cart' component={Cart} />
                    </div>
                </HashRouter>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return { ItemList: state.ItemList }
}


export default connect(mapStateToProps)(App)