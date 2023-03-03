import PropTypes from "prop-types";
import Button from "../../common/Button";
import joinClasses from "../../../utils/joinClasses";

function ButtonWithProductQuantity({ handleClick, count }) {
    const buttonContentClassName = joinClasses([
        "flex-grow-1",
        "flex-basis-0",
        "min-width-0",
        "padding-0_75",
        "border-solid",
        "border-white"
    ]);

    return (
        <Button
            color='primary'
            type="contained"
            className="padding-0_5"
        >
            <span
                className={buttonContentClassName}
                onClick={() => handleClick(false)}
            >
                -
            </span>
            
            <span className={buttonContentClassName}>{count}</span>

            <span
                className={buttonContentClassName}
                onClick={() => handleClick(true)}
            >
                +
            </span>
        </Button>
    );
}

ButtonWithProductQuantity.propTypes = {
    count: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired
};

function ProductActions({ count, handleClick }) {
    if (count) {
        return (
            <ButtonWithProductQuantity
                handleClick={handleClick}
                count={count}
            />
        );
    }

    return (
        <Button type="outlined" onClick={() => handleClick(true)}>
            Add
        </Button>
    );
}

ProductActions.propTypes = {
    count: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default ProductActions;
