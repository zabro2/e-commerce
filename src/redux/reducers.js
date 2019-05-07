const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CART':
            return {
                ...state,
                CartList: [...state.CartList, (state.ItemList.find(obj => obj.id === action.payload))]
            }
        case 'DELETE_CART':
            let id = action.payload
            return {
                ...state,
                CartList: state.CartList.filter(item => item.id !== id)
            }
        case 'SEARCH_LIST':
            let term = action.payload
            if (term.length <= 1) {
                return {
                    ...state,
                    ItemListShow: state.ItemList
                }
            } else {
                return {
                    ...state,
                    ItemListShow: state.ItemListShow.filter(item => item.title.includes(term) || item.category.includes(term))
                }
            }
        default: return state
    }
}

export default reducer