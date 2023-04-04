import { combineReducers } from 'redux';
import cartReducer from './cart';
import productListingReducer from './productListing';
import productsReducer from './productsReducer';
import categoriesReducer from './categoriesReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    productListing: productListingReducer,
    products: productsReducer,
    categories: categoriesReducer
});

export default rootReducer;