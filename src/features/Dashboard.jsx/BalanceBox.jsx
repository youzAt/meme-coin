import Button from "../UI/Button";
import styles from "./BalanceBox.module.css";
import addIcon from "../../assets/icons/add.svg";
import checkIcon from "../../assets/icons/check.svg";
import Modal from "../UI/Modal";
import IncreaseBalance from "./IncreaseBalance";
import { useBalance } from "./useBalance";
const BalanceBox = () => {
	const { data, isLoading } = useBalance();
	return (
		<div className={styles.box}>
			<h4>موجودی کل شما</h4>
			<div className={styles.action}>
				<div className={styles.btns}>
					<Modal>
						<Modal.Open opens="increaseBalance">
							<Button isSmall>
								<img src={addIcon} alt="add icon" />
								<span>افزایش اعتبار</span>
							</Button>
						</Modal.Open>
						<Modal.Window name="increaseBalance">
							<IncreaseBalance />
						</Modal.Window>
					</Modal>
					<Button isSmall type="secondary">
						<img src={checkIcon} alt="check icon" />
						<span>برداشت</span>
					</Button>
				</div>
				<h1 className={styles.balance}>
					{isLoading
						? "درحال دریافت اطلاعات"
						: data?.balance.toLocaleString()}
					{!isLoading && <span className="body">تومان</span>}
				</h1>
			</div>
		</div>
	);
};

export default BalanceBox;
