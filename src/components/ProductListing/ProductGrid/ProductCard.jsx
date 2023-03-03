import { Component } from "react";
import PropTypes from "prop-types";
import Flex from "../../common/Flex";
import joinClasses from "../../../utils/joinClasses";
import { CartContext } from "../../CartContext";
import ProductActions from "./ProductActions";
import Chip from "../../common/Chip";

class ProductCard extends Component {
    static contextType = CartContext;

    getCount = () => {
        const { productId } = this.props;
        const count = this.context?.data?.[productId]?.count;

        return count ?? 0;
    };

    handleAddition = (shouldIncrement = false) => {
        const item = this.props;
        const { productId } = item;
        const {
            handlers: { addItem, removeItem },
        } = this.context;

        const count = this.getCount();
        if (shouldIncrement) {
            addItem(item);
        } else if (count) {
            removeItem(productId);
        }
    };

    render() {
        const {
            name,
            image,
            actualPrice,
            offer,
            offeredPrice,
            quantities,
            sourcedAt,
        } = this.props;

        const count = this.getCount();

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

                <Flex 
                    gap={1}
                    wrap='wrap'
                    className='flex-align-self-start'
                >
                    {quantities?.map((quantity, idx) => (
                        <Chip key={idx}>
                            {quantity}
                        </Chip>
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
                        count={count}
                        handleClick={this.handleAddition}
                    />
                </Flex>
            </Flex>
        );
    }
}

ProductCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    actualPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    offer: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    offeredPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    productId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    quantities: PropTypes.array.isRequired,
    sourcedAt: PropTypes.string.isRequired,
};

export default ProductCard;
