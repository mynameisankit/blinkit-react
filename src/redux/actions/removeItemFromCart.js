import ACTION_ENUM from '../ACTION_ENUM';

function removeItemFromCart(productId) {
    return {
        type: ACTION_ENUM.REMOVE_ITEM,
        payload: productId
    };
}

export default removeItemFromCart;