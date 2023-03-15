import { Component, Fragment } from "react";
import Button from "../common/Button";
import Flex from "../common/Flex";
import { CartContext } from "../CartContext";
// Cart Icon
import CartIcon from "../../assets/shopping-cart.png";

class NavbarButtons extends Component {
    static contextType = CartContext;

    getTotalCost = () => {
        const { data: cart } = this.context;

        return Object.values(cart).reduce((acc, item) => {
            return acc + parseInt(item.offeredPrice) * item.count;
        }, 0);
    };

    getNumberOfItems = () => {
        const { data: cart } = this.context;

        return Object.values(cart).reduce((acc, item) => {
            return acc + item.count;
        }, 0);
    };

    render() {
        const totalCost = this.getTotalCost();
        const numberOfItems = this.getNumberOfItems();
        const multiple = numberOfItems > 1;

        return (
            <Flex
                grow={1}
                gap={1}
                direction="row-reverse"
                alignItems="center"
                className="padding-x-1"
            >
                <Button
                    href="/cart"
                    type="contained"
                    color="primary"
                    icon={CartIcon}
                    alt=""
                >
                    {totalCost ? (
                        <Fragment>
                            <p>
                                {numberOfItems} item{multiple ? "s" : ""}
                            </p>
                            <p>Rs {totalCost}</p>
                        </Fragment>
                    ) : (
                        "My Cart"
                    )}
                </Button>

                <Button href="/login">Login</Button>
            </Flex>
        );
    }
}

export default NavbarButtons;
