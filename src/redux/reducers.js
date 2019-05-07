const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CART':
            return {
                ...state,
                CartList: [...state.CartList, (state.ItemList.find(obj =>  obj.id === action.payload))]
            }
        case 'DELETE_CART':
            let id = action.payload
            console.log('reducing delete cart')
            return {
                ...state,
                CartList: state.CartList.filter(item => item.id !== id)
            }
        case 'SEARCH_ITEMS':
            return {}
        default: return state
    }
}

export default reducer