import SproutsImage from '../assets/categories/sprouts.avif';
import SeasonalImage from '../assets/categories/seasonal.avif';
import OrganicImage from '../assets/categories/organic.avif';
import ExoticsImage from '../assets/categories/exotics.avif';
import FruitImage from '../assets/categories/fruits.avif';
import VegetableImage from '../assets/categories/vegetable.avif';

const categories = {
    ALL: {
        "categoryId": "all",
        "image": FruitImage,
        "label": "All"
    },
    VEGETABLES: {
        "categoryId": "vegetables",
        "image": VegetableImage,
        "label": "Fresh Vegetables"
    },
    FRUITS: {
        "categoryId": "fruits",
        "image": FruitImage,
        "label": "Fresh Fruits"
    },
    EXOTICS: {
        "categoryId": "exotics",
        "image": ExoticsImage,
        "label": "Exotics"
    },
    SEASONAL: {
        "categoryId": "seasonal",
        "image": SeasonalImage,
        "label": "Seasonal"
    },
    ORGANIC: {
        "categoryId": "organic",
        "image": OrganicImage,
        "label": "Organic and Hydroponic"
    },
    SPROUTS: {
        "categoryId": "sprouts",
        "image": SproutsImage,
        "label": "Freshly Cut and Sprouts"
    }
};

export default categories;