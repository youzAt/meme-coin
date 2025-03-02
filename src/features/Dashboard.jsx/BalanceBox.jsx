import Button from "../UI/Button";
import styles from "./BalanceBox.module.css";
import addIcon from "../../assets/icons/add.svg";
import checkIcon from "../../assets/icons/check.svg";
const BalanceBox = () => {
	return (
		<div className={styles.box}>
			<h4>موجودی کل شما</h4>
			<div className={styles.action}>
				<div className={styles.btns}>
					<Button isSmall>
						<img src={addIcon} alt="add icon" />
						<span>افزایش اعتبار</span>
					</Button>
					<Button isSmall type="secondary">
						<img src={checkIcon} alt="check icon" />
						<span>برداشت</span>
					</Button>
				</div>
				<h1 className={styles.balance}>
					100،650،000
					<span className="body">تومان</span>
				</h1>
			</div>
		</div>
	);
};

export default BalanceBox;
