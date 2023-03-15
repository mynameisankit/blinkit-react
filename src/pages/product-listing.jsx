import { Component } from 'react';
import Sidebar from '../components/ProductListing/Sidebar';
import ProductGrid from '../components/ProductListing/ProductGrid';
// Common Components
import Flex from '../components/common/Flex';
// Utils
import joinClasses from '../utils/joinClasses';
import ProductsModel from '../models/Products';

const Products = new ProductsModel();

class ProductListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'all'
        };
    }

    changeCategory = (categoryId) => {
        this.setState({ 
            category: categoryId
        });
    }

    render() {
        const { category } = this.state;
        const products = Products.get(category);

        return (
            <Flex
                className={joinClasses([
                    'margin-x-auto',
                    'margin-top-2',
                    'border-1',
                    'border-solid',
                    'border-grey',
                    'width-per-80',
                ])}
            >
                <Sidebar 
                    category={category}
                    changeCategory={this.changeCategory} 
                />
                <ProductGrid products={products} />
            </Flex>
        );
    }
}

export default ProductListing;
