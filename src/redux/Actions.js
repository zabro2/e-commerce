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