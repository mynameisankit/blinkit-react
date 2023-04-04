import ACTION_ENUM from '../ACTION_ENUM';

function addItemToCart(productId) {
    return {
        type: ACTION_ENUM.ADD_ITEM,
        payload: productId
    };
}

export default addItemToCart;