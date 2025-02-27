import { useState } from "react";
import Input from "../features/UI/Input";
import styles from "./Signup.module.css";
import eyeShowIcon from "../assets/icons/eye-show.svg";
import eyeHideIcon from "../assets/icons/eye-hide.svg";
import Button from "../features/UI/Button";
import { useSignup } from "../features/userAuth/useSignup";
import { BeatLoader } from "react-spinners";

const Signup = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
	const [signupInfo, setSignupInfo] = useState({});
	const [privacyCheck, setPrivacyCheck] = useState(false);
	const { mutate: signup, isPending } = useSignup();
	const userSignupHandler = (e) => {
		e.preventDefault();
		if (!privacyCheck) {
			alert("قوانین و مقررات را نپذیرفته اید");
			return;
		}
		if (Object.values(signupInfo).length !== 5) {
			alert("باید تمامی فیلد ها را پر کنید");
			return;
		}
		if (signupInfo.password !== signupInfo.confirm_password) {
			alert("رمز عبور و تکرار آن باید برابر باشند");
		}
		signup(signupInfo);
	};
	return (
		<div className={styles.formContainer}>
			<h2>ایجاد حساب کاربری</h2>
			<form onSubmit={userSignupHandler}>
				<Input
					name="first-name"
					placeholder="نام خود را وارد کنید ..."
					onChange={(e) =>
						setSignupInfo((cur) => {
							return { ...cur, first_name: e.target.value };
						})
					}
					value={signupInfo.first_name || ""}
				/>
				<Input
					name="last-name"
					placeholder="نام خانوادگی خود را وارد کنید ..."
					onChange={(e) =>
						setSignupInfo((cur) => {
							return { ...cur, last_name: e.target.value };
						})
					}
					value={signupInfo.last_name || ""}
				/>
				<Input
					name="username"
					placeholder="نام کاربری خود را وارد کنید ..."
					onChange={(e) =>
						setSignupInfo((cur) => {
							return { ...cur, username: e.target.value };
						})
					}
					value={signupInfo.username || ""}
				/>
				<p className={"caption " + styles.userMessage}>
					* از نام کاربری برای ورود به برنامه استفاده می‌شود.
				</p>

				<div className={styles.inputBox}>
					<Input
						type={showPassword ? "text" : "password"}
						placeholder="رمز عبور خود را وارد کنید ..."
						onChange={(e) =>
							setSignupInfo((cur) => {
								return { ...cur, password: e.target.value };
							})
						}
						value={signupInfo.password || ""}
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
						onChange={(e) =>
							setSignupInfo((cur) => {
								return {
									...cur,
									confirm_password: e.target.value,
								};
							})
						}
						value={signupInfo.confirm_password || ""}
					/>
					<img
						className={styles.passIcon}
						onClick={() => setShowPasswordRepeat((cur) => !cur)}
						src={showPasswordRepeat ? eyeHideIcon : eyeShowIcon}
						alt="password eye icon"
					/>
				</div>
				<div className={styles.privacy}>
					<input
						type="checkbox"
						id="privacy"
						checked={privacyCheck}
						onChange={(e) => setPrivacyCheck(e.target.value)}
					/>
					<label className="caption" htmlFor="privacy">
						قوانین و مقررات را می‌پذیرم.
					</label>
				</div>
				<Button disabled={isPending}>
					{isPending ? <BeatLoader color="#fff" /> : "ایجاد حساب"}
				</Button>
			</form>
		</div>
	);
};

export default Signup;
