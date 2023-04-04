import productsMap from "../../../data/products";
import ACTION_ENUM from '../../ACTION_ENUM';
import categoriesEnum from '../../../data/categoriesEnum';

function getProductsOfCategory(products, categoryId) {
    return Object
        .entries(products)
        .filter(product => {
            return (categoryId === categoriesEnum.ALL.categoryId) ||
                product[1].categoryId.includes(categoryId);
        })
        .reduce((map, [productId, productDetails]) => {
            map[productId] = { productId, ...productDetails };
            return map;
        }, {});
}

function fetchProductsByCategory(category) {
    return async function fetchProductsByCategoryThunk(dispatch) {
        const filteredProducts = getProductsOfCategory(productsMap, category);

        dispatch({
            type: ACTION_ENUM.PRODUCTS_FETCHED,
            payload: filteredProducts
        });
    }
}

export default fetchProductsByCategory;