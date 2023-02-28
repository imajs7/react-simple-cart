export const appReducer = (state, action) => {
    console.log(action.type);
    switch( action.type ) {
        
        case 'ADD_PRODUCTS': return {...state, products: action.payload};

        case 'ADD_TO_CART': return {...state, cart: [...state.cart, action.payload]}

        case 'REMOVE_FROM_CART': return {...state, cart: state.cart.filter( item => item.id !== action.payload.id)}

        case 'CHANGE_QTY': return {...state, cart: state.cart.filter( item => item.id === action.payload.id ? item.quantity = action.payload.qty : item.quantity )}

        default: return state;
    }
}