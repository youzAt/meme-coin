/* eslint-disable react/prop-types */
import styles from "./Button.module.css";
const Button = ({ children, type = "primary", isSmall = false, ...props }) => {
	return (
		<button
			className={`${styles.btn} ${isSmall && "body"} ${styles[type]}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
