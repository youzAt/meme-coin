import styles from "./TransactionVolume.module.css";
const transactionVolumeData = {
	buy: {
		percentage: 58.7,
		totalTransaction: 8650,
		transactions: [
			{ price: 0.048, amount: 1200, percentage: 13.48 },
			{ price: 0.047, amount: 1500, percentage: 16.85 },
			{ price: 0.046, amount: 1100, percentage: 12.36 },
			{ price: 0.045, amount: 1300, percentage: 14.61 },
			{ price: 0.044, amount: 900, percentage: 10.11 },
			{ price: 0.043, amount: 1400, percentage: 15.73 },
			{ price: 0.042, amount: 1250, percentage: 14.61 },
		],
	},
	sell: {
		percentage: 41.3,
		totalTransaction: 6090,

		transactions: [
			{ price: 0.048, amount: 1000, percentage: 15.38 },
			{ price: 0.047, amount: 950, percentage: 14.62 },
			{ price: 0.046, amount: 800, percentage: 12.31 },
			{ price: 0.045, amount: 1100, percentage: 16.92 },
			{ price: 0.044, amount: 870, percentage: 13.38 },
			{ price: 0.043, amount: 720, percentage: 11.08 },
			{ price: 0.042, amount: 650, percentage: 10.31 },
		],
	},
};

const TransactionVolume = () => {
	return (
		<div>
			<div className={styles.headingContainer}>
				<div className={styles.heading}>
					<span className={"caption "}>تعداد تراکنش ها(امروز)</span>
					<div className={styles.status}>
						<p className={"caption "}>
							خرید:
							<span className={styles.buy}>
								{transactionVolumeData.buy.totalTransaction}{" "}
								&uarr;
							</span>
						</p>
						<p className={"caption "}>
							فروش:
							<span className={styles.sell}>
								{transactionVolumeData.sell.totalTransaction}
								&darr;
							</span>
						</p>
					</div>
				</div>
				<div className={styles.heading}>
					<span className={"caption "}>حجم تراکنش ها(امروز)</span>
					<div className={styles.status}>
						<p className={"caption "}>
							خرید:
							<span className={styles.buy}>
								{transactionVolumeData.buy.percentage}% &uarr;
							</span>
						</p>
						<p className={"caption "}>
							فروش:
							<span className={styles.sell}>
								{transactionVolumeData.sell.percentage}% &darr;
							</span>
						</p>
					</div>
				</div>
			</div>
			<div className={styles.tableContainer}>
				<table>
					<thead>
						<tr>
							<th className={"caption "}>قیمت</th>
							<th className={"caption "}>مقدار</th>
						</tr>
					</thead>
					<tbody>
						{transactionVolumeData.buy.transactions.map(
							(item, index) => (
								<tr className={styles.row} key={index}>
									<td className={"caption "}>{item.price}</td>
									<td className={"caption "}>
										{item.amount}
									</td>
								</tr>
							)
						)}
					</tbody>
				</table>
				<table>
					<thead>
						<tr>
							<th className={"caption "}>قیمت</th>
							<th className={"caption "}>مقدار</th>
						</tr>
					</thead>
					<tbody>
						{transactionVolumeData.sell.transactions.map(
							(item, index) => (
								<tr key={index}>
									<td className={"caption "}>{item.price}</td>
									<td className={"caption "}>
										{item.amount}
									</td>
								</tr>
							)
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TransactionVolume;
