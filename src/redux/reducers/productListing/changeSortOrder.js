import ACTION_ENUM from '../../ACTION_ENUM';
import sortOrderEnum from '../../../data/sortOrderEnum';

function changeSortOrder(previousState = sortOrderEnum.LOWEST_PRICE, action) {
    const { type } = action;

    if(type !== ACTION_ENUM.SORT_ORDER_CHANGED)
        return previousState;

    const { payload: sortOrder } = action;
    
    return sortOrder;
}

export default changeSortOrder;