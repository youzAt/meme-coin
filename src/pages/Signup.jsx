import { useState } from "react";
import Input from "../features/UI/Input";
import styles from "./Signup.module.css";
import eyeShowIcon from "../assets/icons/eye-show.svg";
import eyeHideIcon from "../assets/icons/eye-hide.svg";
import Button from "../features/UI/Button";

const Signup = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
	return (
		<div className={styles.formContainer}>
			<h2>ایجاد حساب کاربری</h2>
			<form>
				<Input
					name="first-name"
					placeholder="نام خود را وارد کنید ..."
				/>
				<Input
					name="last-name"
					placeholder="نام خانوادگی خود را وارد کنید ..."
				/>
				<Input
					name="username"
					placeholder="نام کاربری خود را وارد کنید ..."
				/>
				<p className={"caption " + styles.userMessage}>
					* از نام کاربری برای ورود به برنامه استفاده می‌شود.
				</p>

				<div className={styles.inputBox}>
					<Input
						type={showPassword ? "text" : "password"}
						placeholder="رمز عبور خود را وارد کنید ..."
					/>
					<img
						className={styles.passIcon}
						onClick={() => setShowPassword((cur) => !cur)}
						src={showPassword ? eyeHideIcon : eyeShowIcon}
						alt="password eye icon"
					/>
				</div>
				<div className={styles.inputBox}>
					<Input
						type={showPasswordRepeat ? "text" : "password"}
						placeholder="رمز عبور خود را مجدد وارد کنید ..."
					/>
					<img
						className={styles.passIcon}
						onClick={() => setShowPasswordRepeat((cur) => !cur)}
						src={showPasswordRepeat ? eyeHideIcon : eyeShowIcon}
						alt="password eye icon"
					/>
				</div>
				<div className={styles.privacy}>
					<input type="checkbox" id="privacy" />
					<label className="caption" htmlFor="privacy">
						قوانین و مقررات را می‌پذیرم.
					</label>
				</div>
				<Button>ایجاد حساب</Button>
			</form>
		</div>
	);
};

export default Signup;
