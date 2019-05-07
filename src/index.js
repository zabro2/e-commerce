import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
import reducers from './redux/reducers'

fetch('https://my-json-server.typicode.com/tdmichaelis/json-api/products')
.then(result => result.json())
.then(items => {

    ReactDOM.render(
        <Provider store={createStore(reducers, {ItemList: items, ItemListShow: items, CartList:[]})}>
            <App />
        </Provider>
        ,
        document.querySelector('#root')
    )
})