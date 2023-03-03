import { Component } from "react";
import PropTypes from "prop-types";
// Custom Components
import Header from "./Header";
import ProductCard from "./ProductCard";
import Grid from "../../common/Grid";
// Enums
import { SORTING_ORDER } from "../../../data/enums";
// Utils
import joinClasses from "../../../utils/joinClasses";

class ProductListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: SORTING_ORDER.LOWEST_PRICE,
        };
    }

    changeOrder = (order) => {
        this.setState({ order });
    };

    sortByHighestPrice(price1, price2, increasing = true) {
        if (increasing) return price1 - price2;
        else return price2 - price1;
    }

    render() {
        const { order } = this.state;
        const { products } = this.props;

        return (
            <main className="flex-grow-1">
                <Header order={order} changeOrder={this.changeOrder} />

                <Grid
                    cols={3}
                    className={joinClasses([
                        "border-1-top",
                        "border-1-left",
                        "border-solid",
                        "border-grey",
                    ])}
                >
                    {products
                        .sort((a, b) =>
                            this.sortByHighestPrice(
                                a.offeredPrice,
                                b.offeredPrice,
                                order === SORTING_ORDER.LOWEST_PRICE
                            )
                        )
                        .map((product) => (
                            <ProductCard
                                key={`${product.productId}`}
                                {...product}
                            />
                        ))}
                </Grid>
            </main>
        );
    }
}

ProductListing.propTypes = {
    products: PropTypes.array.isRequired,
};

export default ProductListing;
