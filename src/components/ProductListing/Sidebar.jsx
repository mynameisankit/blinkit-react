import PropTypes from "prop-types";
import Flex from "../common/Flex";
// Utils
import joinClasses from "../../utils/joinClasses";
// Data
import CategoriesData from "../../data/categories";

function Sidebar({ category, changeCategory }) {
    return (
        <Flex component="aside" direction="column">
            {CategoriesData.map(({ categoryId, image, label }) => (
                <Flex
                    key={categoryId}
                    component="button"
                    alignItems="center"
                    gap={2}
                    onClick={() => changeCategory(categoryId)}
                    className={joinClasses([
                        "padding-y-0_5",
                        "padding-x-1",
                        "border-1-bottom",
                        "border-solid",
                        categoryId === category
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
    category: PropTypes.string.isRequired,
    changeCategory: PropTypes.func.isRequired,
};

export default Sidebar;
