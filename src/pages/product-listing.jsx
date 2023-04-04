import { Component } from "react";
import { connect } from "react-redux";
import fetchCategories from '../redux/actions/thunks/fetchCategories';
import fetchAllProducts from '../redux/actions/thunks/fetchAllProducts';
import Sidebar from "../components/ProductListing/Sidebar";
import ProductGrid from "../components/ProductListing/ProductGrid";
// Common Components
import Flex from "../components/common/Flex";
// Utils
import joinClasses from "../utils/joinClasses";

class ProductListing extends Component {
    componentDidMount() {
        const {
            fetchCategories,
            fetchAllProducts
        } = this.props;
        
        fetchCategories();
        fetchAllProducts();
    }

    render() {
        return (
            <Flex
                className={joinClasses([
                    "margin-x-auto",
                    "margin-top-2",
                    "border-1",
                    "border-solid",
                    "border-grey",
                    "width-per-80",
                ])}
            >
                <Sidebar />
                <ProductGrid />
            </Flex>
        );
    }
}

const mapDispatchToProps = {
    fetchCategories,
    fetchAllProducts
};

export default connect(null, mapDispatchToProps)(ProductListing);
