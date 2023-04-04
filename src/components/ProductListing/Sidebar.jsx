import { connect } from "react-redux";
import changeCategory from "../../redux/actions/changeCategory";
import selectCurrentCategory from "../../redux/selectors/selectCurrentCategory";
import selectCategories from "../../redux/selectors/selectCategories";
import fetchProductsByCategory from "../../redux/actions/thunks/fetchProductsByCategory";
import PropTypes from "prop-types";
import Flex from "../common/Flex";
// Utils
import joinClasses from "../../utils/joinClasses";

function Sidebar({ 
    categories, 
    currentCategory,
    changeCategory, 
    fetchProductsByCategory
}) {
    return (
        <Flex component="aside" direction="column">
            {categories.map(({ categoryId, image, label }) => (
                <Flex
                    key={categoryId}
                    component="button"
                    alignItems="center"
                    gap={2}
                    onClick={() => {
                        changeCategory(categoryId);
                        fetchProductsByCategory(categoryId);
                    }}
                    className={joinClasses([
                        "padding-y-0_5",
                        "padding-x-1",
                        "border-1-bottom",
                        "border-solid",
                        categoryId === currentCategory
                            ? [
                                  "bg-primary-translucent",
                                  "border-2-left",
                                  "border-left-primary",
                              ]
                            : ["bg-transparent", "border-grey"],
                    ])}
                >
                    <img
                        className={joinClasses(["height-20", "width-20"])}
                        src={image}
                        alt={label}
                    />
                    <p className="text-base">{label}</p>
                </Flex>
            ))}
        </Flex>
    );
}

Sidebar.propTypes = {
    currentCategory: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
    changeCategory: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    changeCategory,
    fetchProductsByCategory
};

const mapStateToProps = (state) => ({
    currentCategory: selectCurrentCategory(state),
    categories: selectCategories(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
