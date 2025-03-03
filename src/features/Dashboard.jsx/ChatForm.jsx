import styles from './ChatForm.module.css'
import Input from '../UI/Input'
import Button from '../UI/Button'
const ChatForm = () => {
    return (
        <form className={styles.form}>
            <div className={styles.inputBox}>
                <label htmlFor="address" className="caption">آدرس کیف پول</label>
                <Input id="address" placeholder="آدرس کیف پول مقصد را وارد کنید"/>
            </div>
            <div className={styles.inputBox}>
                <label htmlFor="message" className="caption">متن پیام</label>
                <textarea id="message" placeholder="متن پیام را وارد کنید"/>
            </div>
            <Button isSmall>ارسال</Button>
        </form>
    )
}

export default ChatForm
