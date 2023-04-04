import categoryMap from "../../../data/categoriesEnum";
import ACTION_ENUM from '../../ACTION_ENUM';

function fetchCategories() {
    return async function fetchCategoriesThunk(dispatch) {
        const categories = Object.values(categoryMap);

        dispatch({
            type: ACTION_ENUM.CATEGORIES_FETCHED,
            payload: categories
        });
    }
}

export default fetchCategories;