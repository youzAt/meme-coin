import { Outlet } from "react-router-dom";
import styles from "./LoginLayout.module.css";
import loginPhoto from "../assets/images/login.jpg";
import logo from "../assets/images/logo.png";
const LoginLayout = () => {
	return (
		<main className={`container ${styles.layout}`}>
			<div className={styles.formContainer}>
				<img src={logo} alt="logo" />
				<div className={styles.central}>
					<Outlet />
					</div>
			</div>
			<div className={styles.image}>
				<p>هر میم فرصتی برای ثروت! ثبت نام کن و معامله کن!</p>
				<img src={loginPhoto} alt="login photo" />
			</div>
		</main>
	);
};

export default LoginLayout;
