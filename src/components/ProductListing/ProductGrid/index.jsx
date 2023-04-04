import { Component } from "react";
import { connect } from "react-redux";
import selectProducts from "../../../redux/selectors/selectProducts";
import selectSortOrder from "../../../redux/selectors/selectSortOrder";
import selectCart from "../../../redux/selectors/selectCart";
import PropTypes from "prop-types";
// Custom Components
import Header from "./Header";
import ProductCard from "./ProductCard";
import Grid from "../../common/Grid";
// Enums
import sortOrderEnum from "../../../data/sortOrderEnum";
// Utils
import joinClasses from "../../../utils/joinClasses";

class ProductListing extends Component {
    sortByHighestPrice(price1, price2) {
        return price2 - price1;
    }

    sortByLowestPrice(price1, price2) {
        return price1 - price2;
    }

    getProductCount(productId) {
        const { cart } = this.props;
        return cart[productId] ?? 0;
    }

    render() {
        const { products, sortOrder } = this.props;
        const sortFn =
            sortOrder === sortOrderEnum.LOWEST_PRICE
                ? this.sortByLowestPrice
                : this.sortByHighestPrice;

        return (
            <main className="flex-grow-1">
                <Header />

                <Grid
                    cols={3}
                    className={joinClasses([
                        "border-1-top",
                        "border-1-left",
                        "border-solid",
                        "border-grey",
                    ])}
                >
                    {Object.values(products)
                        .sort((a, b) => sortFn(a.offeredPrice, b.offeredPrice))
                        .map(product => (
                            <ProductCard
                                key={`${product.productId}`}
                                productDetails={product}
                                productCount={this.getProductCount(product.productId)}
                            />
                        ))}
                </Grid>
            </main>
        );
    }
}

ProductListing.propTypes = {
    products: PropTypes.object.isRequired,
    sortOrder: PropTypes.string.isRequired,
    cart: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    const products = selectProducts(state);
    const sortOrder = selectSortOrder(state);
    const cart = selectCart(state);

    return {
        products,
        sortOrder,
        cart
    };
};

export default connect(mapStateToProps, null)(ProductListing);