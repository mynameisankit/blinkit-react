import ACTION_ENUM from '../../ACTION_ENUM';

function addItemToCart(state = {}, action) {
    const { type } = action;

    if (type !== ACTION_ENUM.ADD_ITEM)
        return state;

    const cart = { ...state };

    const { payload: productId } = action;

    if (cart[productId])
        cart[productId]++;
    else
        cart[productId] = 1;

    return cart;
}

export default addItemToCart;