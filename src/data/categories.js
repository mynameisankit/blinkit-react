import AllImage from '../assets/categories/fruits.avif';
import SproutsImage from '../assets/categories/sprouts.avif';
import SeasonalImage from '../assets/categories/seasonal.avif';
import OrganicImage from '../assets/categories/organic.avif';
import ExoticsImage from '../assets/categories/exotics.avif';
import FruitImage from '../assets/categories/fruits.avif';
import VegetableImage from '../assets/categories/vegetable.avif';

const categories = [
    {
        "categoryId": "all",
        "image": AllImage,
        "label": "All"
    },
    {
        "categoryId": "vegetables",
        "image": VegetableImage,
        "label": "Fresh Vegetables"
    },
    {
        "categoryId": "fruits",
        "image": FruitImage,
        "label": "Fresh Fruits"
    },
    {
        "categoryId": "exotics",
        "image": ExoticsImage,
        "label": "Exotics"
    },
    {
        "categoryId": "seasonal",
        "image": SeasonalImage,
        "label": "Seasonal"
    },
    {
        "categoryId": "organic",
        "image": OrganicImage,
        "label": "Organic and Hydroponic"
    },
    {
        "categoryId": "sprouts",
        "image": SproutsImage,
        "label": "Freshly Cut and Sprouts"
    }
];

export default categories;