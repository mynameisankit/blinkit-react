import { connect } from "react-redux";
import selectSortOrder from '../../../redux/selectors/selectSortOrder';
import changeSortOrder from '../../../redux/actions/changeSortOrder';
import PropTypes from "prop-types";
import Flex from "../../common/Flex";
import joinClasses from "../../../utils/joinClasses";
// Enums
import sortOrderEnum from "../../../data/sortOrderEnum";

function Header({
    currentOrder,
    changeSortOrder
}) {
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
                    onChange={event => changeSortOrder(event.target.value)}
                    className={joinClasses([
                        "border-1",
                        "border-grey",
                        "text-base",
                        "color-primary",
                    ])}
                >
                    {Object.values(sortOrderEnum).map((order) => (
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
    currentOrder: PropTypes.string.isRequired,
    changeSortOrder: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    currentOrder: selectSortOrder(state)
});

const mapDispatchToProps = {
    changeSortOrder
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
