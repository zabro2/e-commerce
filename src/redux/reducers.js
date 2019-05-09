const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CART':
            return {
                ...state,
                CartList: [...state.CartList, (state.ItemList.find(obj => obj.id === action.payload))]
            }
        case 'DELETE_CART':
            let id = action.payload
            let idx = state.CartList.findIndex(item => item.id === id)
            return {
                ...state,
                CartList: [
                    ...state.CartList.slice(0, idx),
                    ...state.CartList.slice(idx +1)
                ]
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
                    ItemListShow: state.ItemListShow.filter(item => item.title.toLowerCase().includes(term) || item.category.toLowerCase().includes(term))
                }
            }
        case 'SIGN_IN_USER':
        return {
           ...state,
           userName: action.payload
        }
        default: return state
    }
}

export default reducer