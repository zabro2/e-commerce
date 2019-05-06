import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import { connect } from 'react-redux'

import ItemList from './ItemList'
import Header from './Header'
import Details from './Details'
import Cart from './Cart'

class App extends React.Component {


    render() {
        return (
            <div>

                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path='/' exact component={ItemList} />
                        <Route path="/Items/:ItemId" component={Details} />
                        <Route path='/Cart' component={Cart} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }

}

const mapStateToProps = state => {
    console.log(state)
    return { ItemList: state.ItemList}
}


export default connect(mapStateToProps)(App)