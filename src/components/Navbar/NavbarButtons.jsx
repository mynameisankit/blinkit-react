import { Fragment } from "react";
import { connect } from "react-redux";
import selectCartMetaData from "../../redux/selectors/selectCartMetaData";
import propTypes from 'prop-types';
import Button from "../common/Button";
import Flex from "../common/Flex";
// Cart Icon
import CartIcon from "../../assets/shopping-cart.png";

function NavbarButtons({ 
    totalCost, 
    numberOfItems 
}) {
    // console.log(totalCost, numberOfItems);

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

NavbarButtons.propTypes = {
    totalCost: propTypes.number.isRequired,
    numberOfItems: propTypes.number.isRequired
};

const mapStateToProps = state => ({
    ...selectCartMetaData(state)
});

export default connect(mapStateToProps, null)(NavbarButtons);
