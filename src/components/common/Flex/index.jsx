import PropTypes from "prop-types";
import joinClasses from "../../../utils/joinClasses";
import styles from "./flex.module.css";

function Flex({
    component: BaseComponent = "div",
    direction = "row",
    grow,
    gap,
    alignItems,
    justifyContent,
    basis,
    className,
    children,
    wrap,
    ...rest
}) {
    return (
        <BaseComponent
            className={joinClasses([
                styles.flex,
                styles[`flex-${direction}`],
                styles[`flex-grow-${grow}`],
                styles[`flex-gap-${gap}`],
                styles[`flex-align-items-${alignItems}`],
                styles[`flex-justify-content-${justifyContent}`],
                styles[`flex-basis-${basis}`],
                styles[`flex-wrap-${wrap}`],
                className,
            ])}
            {...rest}
        >
            {children}
        </BaseComponent>
    );
}

Flex.propTypes = {
    component: PropTypes.elementType,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    direction: PropTypes.oneOf([
        "row",
        "row-reverse",
        "column",
        "column-reverse",
    ]),
    grow: PropTypes.number,
    gap: PropTypes.number,
    alignItems: PropTypes.oneOf(["start", "center", "end", "stretch"]),
    justifyContent: PropTypes.oneOf([
        "start",
        "center",
        "end",
        "space-around",
        "space-between",
    ]),
    wrap: PropTypes.oneOf([
        'nowrap',
        'wrap',
        'wrap-reverse'
    ]),
    basis: PropTypes.number,
    rest: PropTypes.any,
};

export default Flex;
