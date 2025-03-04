import { useState } from "react";
import Input from "../features/UI/Input";
import styles from "./Profile.module.css";
import Button from "../features/UI/Button";
import { useUserProfile } from "../features/profile/useUserProfile";
import { useUpdateProfile } from "../features/profile/useUpdateProfile";
import { useChangePassword } from "../features/profile/useChangePassword";
const Profile = () => {
	const { data } = useUserProfile();
	const { mutate: updateProfile } = useUpdateProfile();
	const [first_name, setFirst_name] = useState("");
	const [last_name, setLast_name] = useState("");
	const [username, setUsername] = useState("");

	const [old_password, setOld_password] = useState("");
	const [new_password, setNew_password] = useState("");
	const [confirm_password, setConfirm_password] = useState("");
	const { mutate: changePassword } = useChangePassword();

	const updateProfileHandler = (e) => {
		e.preventDefault();
		updateProfile(
			{
				username: username || data.username,
				last_name: last_name || data.last_name,
				first_name: first_name || data.first_name,
			},
			{
				onError: (er) => console.log(er),
				onSuccess: () => {
					alert("پروفایل کاربری شما با موفقیت ویرایش شد");
				},
			}
		);
	};

	const changePasswordHandler = (e) => {
		e.preventDefault();
		if (!old_password || !new_password || !confirm_password) {
			alert("هیچ یک مقادیر رمز عبور نمیتواند خالی باشد");
			return;
		}
		if (new_password !== confirm_password) {
			alert("رمز علور جدید و تکرار آن باید با هم برابر باشند");
			return;
		}
		changePassword(
			{
				old_password,
				new_password,
				confirm_password,
			},
			{
				onSettled: () => {
					setNew_password("");
					setOld_password("");
					setConfirm_password("");
				},
			}
		);
	};
	return (
		<main className={styles.profile}>
			<div className={styles.formContainer}>
				<h2>ویرایش پروفایل</h2>
				<form className={styles.form} onSubmit={updateProfileHandler}>
					<div className={styles.inputBox}>
						<label htmlFor="username">نام کاربری</label>
						<Input
							defaultValue={data?.username}
							onChange={(e) => setUsername(e.target.value)}
							id="username"
						/>
					</div>
					<div className={styles.inputBox}>
						<label htmlFor="first-name">نام</label>
						<Input
							defaultValue={data?.first_name}
							onChange={(e) => setFirst_name(e.target.value)}
							id="first-name"
						/>
					</div>
					<div className={styles.inputBox}>
						<label htmlFor="last-name">نام خانوادگی</label>
						<Input
							defaultValue={data?.last_name}
							onChange={(e) => setLast_name(e.target.value)}
							id="last-name"
						/>
					</div>
					<Button isSmall>ویرایش</Button>
				</form>
			</div>
			<div className={styles.formContainer}>
				<h2>تغییر رمز عبور</h2>
				<form className={styles.form} onSubmit={changePasswordHandler}>
					<div className={styles.inputBox}>
						<label htmlFor="old-password">رمز عبور فعلی</label>
						<Input
							value={old_password}
							onChange={(e) => setOld_password(e.target.value)}
							type="password"
						/>
					</div>
					<div className={styles.inputBox}>
						<label htmlFor="new-password">رمز عبور جدید</label>
						<Input
							value={new_password}
							onChange={(e) => setNew_password(e.target.value)}
							type="password"
						/>
					</div>
					<div className={styles.inputBox}>
						<label htmlFor="old-password">
							تکرار رمز عبور جدید
						</label>
						<Input
							value={confirm_password}
							onChange={(e) =>
								setConfirm_password(e.target.value)
							}
							type="password"
						/>
					</div>
					<Button isSmall>تغییر رمز عبور</Button>
				</form>
			</div>
		</main>
	);
};

export default Profile;
