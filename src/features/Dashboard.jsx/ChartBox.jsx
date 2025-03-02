import Chart from "./Chart";
import styles from "./ChartBox.module.css";
import TransactionVolume from "./transactionVolume";

const ChartBox = () => {
	return (
		<div className={styles.box}>
			<h4>نمودار قیمت</h4>
			<div className={styles.chartContainer}>
				<Chart />
			</div>
      <TransactionVolume/>
		</div>
	);
};

export default ChartBox;
