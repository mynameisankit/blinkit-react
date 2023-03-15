import PropTypes from "prop-types";
// Common Components
import Flex from "../Flex";
// Utility
import joinClasses from "../../../utils/joinClasses";
// CSS
import styles from "./button.module.css";

function Button({ 
    type, 
    href, 
    icon, 
    alt,
    color, 
    children, 
    className,
    ...rest 
}) {
    const button = (
        <Flex
            component="button"
            alignItems="center"
            justifyContent="center"
            gap={1}
            className={joinClasses([
                styles.btn,
                styles[`btn-${type}`],
                styles[`btn-${color}`],
                className
            ])}
            {...rest}
        >
            {icon && <img className={styles.btn__icon} src={icon} alt={alt} />}
            <div className={styles.btn__text}>{children}</div>
        </Flex>
    );

    if (href) {
        return <a href={href}>{button}</a>;
    } else {
        return button;
    }
}

Button.propTypes = {
    type: PropTypes.oneOf(["contained", "outlined"]),
    color: PropTypes.oneOf(["primary", "secondary"]),
    href: PropTypes.string,
    icon: PropTypes.string,
    alt: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    rest: PropTypes.any
};

export default Button;
