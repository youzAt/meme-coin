/* eslint-disable react/prop-types */
import styles from "./ChatItem.module.css";
import avatar from '../../assets/images/avatar.png'

function timeAgoInPersian(dateString) {
    const now = new Date();
    const past = new Date(dateString);
    const diffInSeconds = Math.floor((now - past) / 1000);
    
    if (diffInSeconds < 60) {
        return `${diffInSeconds} ثانیه پیش`;
    }
    
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
        return `${diffInMinutes} دقیقه پیش`;
    }
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
        return `${diffInHours} ساعت پیش`;
    }
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) {
        return `${diffInDays} روز پیش`;
    }
    
    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) {
        return `${diffInMonths} ماه پیش`;
    }
    
    const diffInYears = Math.floor(diffInMonths / 12);
    return `${diffInYears} سال پیش`;
}



const ChatItem = ({chatDetail}) => {
	const { username, text, created_at } = chatDetail;
	return (
		<div className={styles.item}>
			<div className={styles.details}>
				<div className={styles.profile}>
					<div className={styles.avatar}>
						<img src={avatar} alt="user avatar" />
					</div>
					<span className={"caption "}>
                        {username}
                    </span>
				</div>
                <div className={styles.date}>
                    <span className={"caption "}>
                        {timeAgoInPersian(created_at)}
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
