import productsMap from "../../../data/products";
import ACTION_ENUM from '../../ACTION_ENUM';

function fetchAllProducts() {
    return async function fetchAllProductsThunk(dispatch) {
        dispatch({
            type: ACTION_ENUM.PRODUCTS_FETCHED,
            payload: productsMap
        });
    }
}

export default fetchAllProducts;