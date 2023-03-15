import Model from './Model.js';
import VegetablesData from '../data/products/vegetables.js';
import FruitsData from '../data/products/fruits.js';
import SeasonalData from '../data/products/seasonal.js';
import OrganicData from '../data/products/organic.js';
import ExoticsData from '../data/products/exotics.js';
import SproutsData from '../data/products/sprouts.js';

class ProductsModel extends Model {
    constructor() {
        super();

        this.init();
    }

    init() {
        this.store = {
            "all": [...VegetablesData, ...FruitsData, ...SeasonalData, ...OrganicData, ...ExoticsData, ...SproutsData],
            "vegetables": VegetablesData,
            "fruits": FruitsData,
            "seasonal": SeasonalData,
            "organic": OrganicData,
            "exotics": ExoticsData,
            "sprouts": SproutsData
        };
    }

    get(categoryId) {
        return this.store[categoryId];
    }

    getItem(categoryId, targetProductId) {
        const products = this.get(categoryId);

        return products?.find(({ productId }) => productId === targetProductId);
    }
}

export default ProductsModel;