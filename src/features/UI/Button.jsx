/* eslint-disable react/prop-types */
import styles from "./Button.module.css";
const Button = ({
    children,
    type = "primary",
    disable = false,
    isSmall = false,
    ...props
}) => {
    return (
        <button
            className={`${disable && styles.disable} ${styles.btn} ${
                isSmall && "body"
            } ${styles[type]} `}
            disabled={disable}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
