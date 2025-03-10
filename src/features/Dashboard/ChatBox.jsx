import Button from "../UI/Button";
import styles from "./ChatBox.module.css";
import addIcon from "../../assets/icons/add-circle.svg";
import ChatItem from "./ChatItem";
import ChatForm from "./ChatForm";
import { useState } from "react";
import { useMessages } from "./useMessages";



const ChatBox = () => {
	const [isSendingMessage, setIsSendingMessage] = useState(false);
	const {  data, isLoading } = useMessages(); // yasiiiiinnnnnn
    // const data = messages
	return (
		<div className={styles.box}>
			<div className={styles.heading}>
				<h4>پیام</h4>
				<Button
					type="secondary"
					isSmall
					onClick={() => setIsSendingMessage((cur) => !cur)}
				>
					{isSendingMessage ? (
						<span className={"body "}>لغو</span>
					) : (
						<>
							<img src={addIcon} alt="add icon" />
							<span className={"body "}>پیام جدید</span>
						</>
					)}
				</Button>
			</div>
			{isSendingMessage && <ChatForm />}
			{!isLoading && data?.length === 0 ? (
				<p>پیامی جهت نمایش وحود ندارد</p>
			) : (
				<div className={styles.chats}>
					{data?.map((item, index) => (
						<ChatItem key={index} chatDetail={item} />
					))}
				</div>
			)}
		</div>
	);
};

export default ChatBox;
