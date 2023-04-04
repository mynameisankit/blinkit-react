import ACTION_ENUM from '../../ACTION_ENUM';
import addItemToCart from './addItemToCart';
import removeItemFromCart from './removeItemFromCart';

function cartReducer(cartState = {}, action) {
    switch(action.type) {
        case ACTION_ENUM.ADD_ITEM: 
            return addItemToCart(cartState, action);

        case ACTION_ENUM.REMOVE_ITEM: 
            return removeItemFromCart(cartState, action);

        default:
            return cartState;
    }
}

export default cartReducer;