import ACTION_ENUM from "../ACTION_ENUM";

function categoriesReducer(previousState = [], action) {
    const { type } = action;
    
    if(type !== ACTION_ENUM.CATEGORIES_FETCHED)
        return previousState;

    const { payload } = action;

    return payload;
}

export default categoriesReducer;