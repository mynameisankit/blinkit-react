import PropTypes from "prop-types";
import joinClasses from "../../../utils/joinClasses";
import styles from './chip.module.css';

function Chip({ className, children }) {
    return (
        <div className={joinClasses([
            styles.chip,
            className
        ])}>
            {children}
        </div>
    );
}

Chip.propTypes = {
    children: PropTypes.node,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ])
};

export default Chip;