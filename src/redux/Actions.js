export const AddToCart = (id) => {
    console.log(`added item ${id} to cart`)
    return {
        type: 'ADD_CART',
        payload: id
    }
}

export const DeleteFromCart = (id) => {
    console.log(`deleted item ${id} from cart`)
    return {
        type: 'DELETE_CART',
        payload: id
    }
}

export const SearchFromList = (term) => {
    console.log(`searching ${term} in list`)
    return {
        type: 'SEARCH_LIST',
        payload: term.toLowerCase()
    }
}

export const SignInUser = (user) => {
    console.log(`${user} is signed in`)
    return {
        type: 'SIGN_IN_USER',
        payload: user
    }
}