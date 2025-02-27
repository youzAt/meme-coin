import { Link } from "react-router-dom";
import Button from "../features/UI/Button";
import Input from "../features/UI/Input";
import styles from "./Login.module.css";
import userIcon from "../assets/icons/user.svg";
import lockIcon from "../assets/icons/lock.svg";
import eyeShowIcon from "../assets/icons/eye-show.svg";
import eyeHideIcon from "../assets/icons/eye-hide.svg";
import { useState } from "react";
import { useLogin } from "../features/userAuth/useLogin";
import { BeatLoader } from "react-spinners";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const { mutate: login, isPending } = useLogin();
	const loginSubmitHandler = (e) => {
		e.preventDefault();
		if (!username || !password) {
			alert("نام کاربری یا رمز عبور وارد نمیتواند خالی باشد");
			return;
		}

		const userLoginInfo = {
			username,
			password,
		};
		login(userLoginInfo);
	};
	return (
		<div className={styles.formContainer}>
			<h2>به حساب کاربری خود وارد شوید</h2>
			<form onSubmit={loginSubmitHandler}>
				<div className={styles.inputBox}>
					<img src={userIcon} alt="user Icon" />
					<Input
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						placeholder="نام کاربری"
					/>
				</div>
				<div className={styles.inputBox}>
					<img src={lockIcon} alt="lock icon" />
					<Input
						type={showPassword ? "text" : "password"}
						placeholder="رمز عبور"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<img
						className={styles.passIcon}
						onClick={() => setShowPassword((cur) => !cur)}
						src={showPassword ? eyeHideIcon : eyeShowIcon}
						alt="password eye icon"
					/>
				</div>
				<a href="#">فراموشی رمز عبور</a>
				<Button disabled={isPending}>
					{isPending ? <BeatLoader color="#fff" /> : "ورود"}
				</Button>
			</form>
			<p className="caption">
				حساب کاربری ندارید؟ <Link to="/signup">ایجاد حساب</Link>
			</p>
		</div>
	);
};

export default Login;
