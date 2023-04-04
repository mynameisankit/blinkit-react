import { combineReducers } from 'redux';
import changeCategory from './changeCategory';
import changeSortOrder from './changeSortOrder';

const productListingReducer = combineReducers({
    category: changeCategory,
    order: changeSortOrder
});

export default productListingReducer;