import Button from "../UI/Button";
import styles from "./ChatBox.module.css";
import addIcon from "../../assets/icons/add-circle.svg";
import ChatItem from "./ChatItem";
import ChatForm from "./ChatForm";
import { useState } from "react";
import { useMessages } from "./useMessages";

const messages = [
	{
		id: 1,
		userId: 192354,
		username: "کاربر 192354",
		avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
		text: "بنظر من بهتره که این ارز رو هرچه سریع خریداری کنید.",
		timestamp: "15 دقیقه پیش",
		date: "03/02/1",
	},
	{
		id: 2,
		userId: 192355,
		username: "کاربر 192355",
		avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
		text: "من هم موافقم، قیمت ممکن است به زودی افزایش یابد.",
		timestamp: "12 دقیقه پیش",
		date: "03/02/1",
	},
	{
		id: 3,
		userId: 192356,
		username: "کاربر 192356",
		avatarUrl: "https://randomuser.me/api/portraits/men/67.jpg",
		text: "آیا تحلیل تکنیکال دیگری هم دارید؟",
		timestamp: "10 دقیقه پیش",
		date: "03/02/1",
	},
	{
		id: 4,
		userId: 192357,
		username: "کاربر 192357",
		avatarUrl: "https://randomuser.me/api/portraits/women/22.jpg",
		text: "من فکر می‌کنم باید صبر کنیم تا قیمت کمی پایین‌تر بیاید.",
		timestamp: "8 دقیقه پیش",
		date: "03/02/1",
	},
	{
		id: 5,
		userId: 192358,
		username: "کاربر 192358",
		avatarUrl: "https://randomuser.me/api/portraits/men/41.jpg",
		text: "بنظر من بهتره که این ارز رو هرچه سریع خریداری کنید.",
		timestamp: "5 دقیقه پیش",
		date: "03/02/1",
	},
	{
		id: 6,
		userId: 192359,
		username: "کاربر 192359",
		avatarUrl: "https://randomuser.me/api/portraits/women/33.jpg",
		text: "روند بازار بسیار مثبت به نظر می‌رسد.",
		timestamp: "3 دقیقه پیش",
		date: "03/02/1",
	},
	{
		id: 7,
		userId: 192360,
		username: "کاربر 192360",
		avatarUrl: "https://randomuser.me/api/portraits/men/55.jpg",
		text: "آیا کسی اطلاعات بیشتری از تحلیل بنیادی این ارز دارد؟",
		timestamp: "1 دقیقه پیش",
		date: "03/02/1",
	},
];

const ChatBox = () => {
	const [isSendingMessage, setIsSendingMessage] = useState(false);
	const { data, isLoading } = useMessages(); // yasiiiiinnnnnn

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

			{data.length === 0 ? (
				<p>پیامی جهت نمایش وحود ندارد</p>
			) : (
				<div className={styles.chats}>
					{data.map((item) => (
						<ChatItem key={item.id} chatDetail={item} />
					))}
				</div>
			)}
		</div>
	);
};

export default ChatBox;
