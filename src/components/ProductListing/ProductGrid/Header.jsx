import PropTypes from "prop-types";
import Flex from "../../common/Flex";
import joinClasses from "../../../utils/joinClasses";
// Enums
import { SORTING_ORDER } from "../../../data/enums";

function Header({ order: currentOrder, changeOrder }) {
    return (
        <Flex
            component="header"
            justifyContent="space-between"
            alignItems="center"
            className={joinClasses([
                "border-1-left",
                "border-grey",
                "border-solid",
                "padding-y-1",
                "padding-x-1_5",
                "width-full",
            ])}
        >
            <h3 className="bold">Buy Fresh Vegetables Online</h3>

            <Flex alignItems="center" gap={1}>
                <label>Sort By</label>

                <select
                    value={currentOrder}
                    onChange={event => changeOrder(event.target.value)}
                    className={joinClasses([
                        "border-1",
                        "border-grey",
                        "text-base",
                        "color-primary",
                    ])}
                >
                    {Object.values(SORTING_ORDER).map((order) => (
                        <option 
                            key={order} 
                            value={order}
                        >
                            {order}
                        </option>
                    ))}
                </select>
            </Flex>
        </Flex>
    );
}

Header.propTypes = {
    order: PropTypes.string.isRequired,
    changeOrder: PropTypes.func.isRequired
};

export default Header;
