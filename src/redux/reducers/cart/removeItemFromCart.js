import ACTION_ENUM from '../../ACTION_ENUM';

function removeItemFromCart(state, action) {
    const { type } = action;

    if(type !== ACTION_ENUM.REMOVE_ITEM)
        return state;

    const cart = { ...state };

    const { payload: productId } = action;

    if(cart[productId] === 1)
        delete cart[productId];
    else
        cart[productId]--;

    return cart;
}

export default removeItemFromCart;