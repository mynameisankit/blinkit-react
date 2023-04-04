import ACTION_ENUM from '../ACTION_ENUM';

function changeCategory(newCategory) {
    return {
        type: ACTION_ENUM.CATEGORY_CHANGED,
        payload: newCategory
    };
}

export default changeCategory;