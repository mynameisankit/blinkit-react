const ACTION_ENUM = Object.freeze({
    SORT_ORDER_CHANGED: 'productListing/sortOrderChanged',
    CATEGORY_CHANGED: 'productListing/categoryChanged',
    PRODUCTS_FETCHED: 'productListing/productsFetched',
    CATEGORIES_FETCHED: 'productListing/categoriesFetched',
    ADD_ITEM: 'cart/addItem',
    REMOVE_ITEM: 'cart/removeItems'
});

export default ACTION_ENUM;