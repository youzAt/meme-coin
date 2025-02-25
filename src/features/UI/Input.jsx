/* eslint-disable react/prop-types */
import styles from "./Input.module.css";
const Input = ({className , ...props }) => {
	return <input className={styles.input + " body " + className} {...props} />;
};

export default Input;
