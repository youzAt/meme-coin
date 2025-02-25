import { Link } from "react-router-dom";
import Button from "../features/UI/Button";
import Input from "../features/UI/Input";
import styles from "./Login.module.css";
import userIcon from "../assets/icons/user.svg";
import lockIcon from "../assets/icons/lock.svg";
import eyeShowIcon from "../assets/icons/eye-show.svg";
import eyeHideIcon from "../assets/icons/eye-hide.svg";
import { useState } from "react";

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<div className={styles.formContainer}>
			<h2>به حساب کاربری خود وارد شوید</h2>
			<form>
				<div className={styles.inputBox}>
					<img src={userIcon} alt="user Icon" />
					<Input placeholder="نام کاربری" />
				</div>
				<div className={styles.inputBox}>
					<img src={lockIcon} alt="lock icon" />
					<Input
						type={showPassword ? "text" : "password"}
						placeholder="رمز عبور"
					/>
					<img
						className={styles.passIcon}
						onClick={() => setShowPassword((cur) => !cur)}
						src={showPassword ? eyeHideIcon : eyeShowIcon}
						alt="password eye icon"
					/>
				</div>
				<a href="#">فراموشی رمز عبور</a>
				<Button>ورود</Button>
			</form>
			<p className="caption">
				حساب کاربری ندارید؟ <Link to="/signup">ایجاد حساب</Link>
			</p>
		</div>
	);
};

export default Login;
