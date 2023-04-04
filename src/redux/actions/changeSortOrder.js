import ACTION_ENUM from '../ACTION_ENUM';

function changeSortOrder(newSortOrder) {
    return {
        type: ACTION_ENUM.SORT_ORDER_CHANGED,
        payload: newSortOrder
    };
}

export default changeSortOrder;