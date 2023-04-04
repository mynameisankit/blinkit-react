import ACTION_ENUM from '../../ACTION_ENUM';
import categoriesEnum from '../../../data/categoriesEnum';

function changeCategory(previousState = categoriesEnum.ALL.categoryId, action) {
    const { type } = action;

    if(type !== ACTION_ENUM.CATEGORY_CHANGED)
        return previousState;

    const { payload: categoryId } = action;

    return categoryId;
}

export default changeCategory;