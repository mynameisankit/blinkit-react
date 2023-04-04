import PropTypes from "prop-types";
import Button from "../../common/Button";
import joinClasses from "../../../utils/joinClasses";

function ButtonWithProductQuantity({ 
    addItem,
    removeItem, 
    count 
}) {
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
                onClick={() => removeItem()}
            >
                -
            </span>
            
            <span className={buttonContentClassName}>{count}</span>

            <span
                className={buttonContentClassName}
                onClick={() => addItem()}
            >
                +
            </span>
        </Button>
    );
}

ButtonWithProductQuantity.propTypes = {
    count: PropTypes.number.isRequired,
    addItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired
};

function ProductActions({
    count,
    addItem, 
    removeItem 
}) {
    if (count) {
        return (
            <ButtonWithProductQuantity
                addItem={addItem}
                removeItem={removeItem}
                count={count}
            />
        );
    }

    return (
        <Button type="outlined" onClick={() => addItem()}>
            Add
        </Button>
    );
}

ProductActions.propTypes = {
    count: PropTypes.number.isRequired,
    addItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired
};

export default ProductActions;
