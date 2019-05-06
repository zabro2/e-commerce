const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CART':
            return {
                ...state,
                CartList: [...state.CartList, (state.ItemList.find(obj =>  obj.id === action.payload))]
            }
        case 'DELETE_CART':
            let id = action.payload
            let newState = state.CartList.filter(item => item.id !== id)
            return {

            }
        case 'SEARCH_ITEMS':
            return {}
        default: return state
    }
}

export default reducer