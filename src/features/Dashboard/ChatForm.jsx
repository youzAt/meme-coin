import styles from "./ChatForm.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useSendMessage } from "./useSendMessage";
import { useState } from "react";
const ChatForm = () => {
	const [address, setAddress] = useState("");
	const [message, setMessage] = useState("");

	const { mutate: sendMessage } = useSendMessage();

	const submitHandler = (e) => {
		e.preventDefault();
		if (!address || !message) {
			alert("ادرس کیف پول مقصد یا متن پیام نمیتواند خالی باشد");
			return;
		}
		sendMessage(
			{
				to_add: address,
				text: message,
			},
			{
				onError: (er) => {
					//  yasinnnnnnnnnnnnnnnnnnn
				},
				onSuccess: () => {
					alert("پیام شما یا موفقیت ارسال شد.");
				},
			}
		);
	};

	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<div className={styles.inputBox}>
				<label htmlFor="address" className="caption">
					آدرس کیف پول
				</label>
				<Input
					value={address}
					onChange={(e) => setAddress(e.target.value)}
					id="address"
					placeholder="آدرس کیف پول مقصد را وارد کنید"
				/>
			</div>
			<div className={styles.inputBox}>
				<label htmlFor="message" className="caption">
					متن پیام
				</label>
				<textarea
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					id="message"
					placeholder="متن پیام را وارد کنید"
				/>
			</div>
			<Button isSmall>ارسال</Button>
		</form>
	);
};

export default ChatForm;
