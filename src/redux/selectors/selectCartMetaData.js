import { createSelector } from "reselect";
import selectCart from './selectCart';
import selectProducts from './selectProducts';

const getTotalCost = (cart, products) => (
    Object
        .entries(cart)
        .reduce((acc, item) => {
            const [productId, count] = item;
            const { offeredPrice } = products[productId];

            return acc + (parseInt(offeredPrice) * count);
        }, 0)
);

const getNumberOfItems = (cart) => (
    Object
        .values(cart)
        .reduce((acc, count) => acc + count, 0)
);

const selectCartMetaData = createSelector([
    selectCart,
    selectProducts
],
    (cart, products) => ({
        totalCost: getTotalCost(cart, products),
        numberOfItems: getNumberOfItems(cart)
    })
);

export default selectCartMetaData;