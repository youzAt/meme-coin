/* eslint-disable react/prop-types */
import styles from "./ChatItem.module.css";
const ChatItem = ({chatDetail}) => {
	const { username, avatarUrl, text, timestamp } = chatDetail;
	return (
		<div className={styles.item}>
			<div className={styles.details}>
				<div className={styles.profile}>
					<div className={styles.avatar}>
						<img src={avatarUrl} alt="user avatar" />
					</div>
					<span className={"caption "}>
                        {username}
                    </span>
				</div>
                <div className={styles.date}>
                    <span className={"caption "}>
                        {timestamp}
                    </span>
                    {/* <span className={"caption "}>
                        {date}
                    </span> */}
                </div>
                
			</div>
            <p className={"caption " + styles.message}>
                {text}
            </p>
		</div>
	);
};

export default ChatItem;
