import PropTypes from "prop-types";
import joinClasses from "../../../utils/joinClasses";
import styles from "./grid.module.css";

function Grid({
    component: BaseComponent = "div",
    cols = 3,
    className,
    children,
    ...rest
}) {
    return (
        <BaseComponent
            className={joinClasses([
                styles.grid,
                styles[`grid-col-${cols}`],
                className,
            ])}
            {...rest}
        >
            {children}
        </BaseComponent>
    );
}

Grid.propTypes = {
    component: PropTypes.elementType,
    cols: PropTypes.number,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    children: PropTypes.node,
    rest: PropTypes.any
};

export default Grid;
