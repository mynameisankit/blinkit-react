import ACTION_ENUM from "../ACTION_ENUM";

function productsReducer(previousState = {}, action) {
    const { type } = action;
    
    if(type !== ACTION_ENUM.PRODUCTS_FETCHED)
        return previousState;

    const { payload } = action;

    return payload;
}

export default productsReducer;