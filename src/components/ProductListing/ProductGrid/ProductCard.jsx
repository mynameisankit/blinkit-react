import { connect } from "react-redux";
import { Component } from "react";
import addItemToCart from "../../../redux/actions/addItemToCart";
import removeItemFromCart from "../../../redux/actions/removeItemFromCart";
import PropTypes from "prop-types";
import Flex from "../../common/Flex";
import joinClasses from "../../../utils/joinClasses";
import ProductActions from "./ProductActions";
import Chip from "../../common/Chip";

class ProductCard extends Component {
    addItem = () => {
        const { productDetails, addItemToCart } = this.props;
        const { productId } = productDetails;

        addItemToCart(productId);
    };

    removeItem = () => {
        const { productDetails, removeItemFromCart } = this.props;
        const { productId } = productDetails;

        removeItemFromCart(productId);
    };

    render() {
        const { productDetails, productCount } = this.props;

        const {
            image,
            name,
            offer,
            offeredPrice,
            quantities,
            sourcedAt,
            actualPrice,
        } = productDetails;

        return (
            <Flex
                component="article"
                direction="column"
                alignItems="center"
                gap={1}
                className={joinClasses([
                    "padding-1",
                    "border-1-bottom",
                    "border-1-right",
                    "border-solid",
                    "border-grey",
                ])}
            >
                <p
                    className={joinClasses([
                        "padding-0_5",
                        "flex-align-self-start",
                        "border-radius-1",
                        "text-sm",
                        "bg-blue",
                        "color-white",
                    ])}
                >
                    {parseInt(offer)}% Off
                </p>

                <img
                    className={joinClasses(["width-56", "height-56"])}
                    src={image}
                    alt={name}
                />

                <p
                    className={joinClasses([
                        "bg-primary-translucent",
                        "text-sm",
                        "color-primary",
                        "padding-0_5",
                        "flex-align-self-end",
                        "border-radius-1",
                    ])}
                >
                    Sourced at {sourcedAt}
                </p>

                <h3 className="flex-align-self-start">{name}</h3>

                <Flex gap={1} wrap="wrap" className="flex-align-self-start">
                    {quantities?.map((quantity, idx) => (
                        <Chip key={idx}>{quantity}</Chip>
                    ))}
                </Flex>

                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    className={joinClasses(["margin-top-1", "width-full"])}
                >
                    <Flex direction="column">
                        <p className="strikethrough">
                            Rs {parseInt(actualPrice)}
                        </p>
                        <p>Rs {parseInt(offeredPrice)}</p>
                    </Flex>

                    <ProductActions
                        count={productCount}
                        addItem={this.addItem}
                        removeItem={this.removeItem}
                    />
                </Flex>
            </Flex>
        );
    }
}

ProductCard.propTypes = {
    productDetails: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        actualPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
        offer: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
        offeredPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
        productId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
        quantities: PropTypes.array.isRequired,
        sourcedAt: PropTypes.string.isRequired,
    }).isRequired,
    productCount: PropTypes.number.isRequired,
    addItemToCart: PropTypes.func.isRequired,
    removeItemFromCart: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    addItemToCart,
    removeItemFromCart
};

export default connect(null, mapDispatchToProps)(ProductCard);
