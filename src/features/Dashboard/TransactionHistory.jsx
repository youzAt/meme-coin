import styles from "./TransactionHistory.module.css";
function TransactionHistory() {
    return (
        <div className={styles.transactionHistory}>
            <div className={` ${styles.transaction} ${styles.header}`}>
                <span>مبلغ</span>
                <span>تاریخ</span>
                <span>وضعیت</span>
                <span>نوع</span>
            </div>
            <div className={styles.transaction}>
                <span className={styles.transactionAmount}>1500000</span>
                <span className={styles.transactionDate}>2025/01/01</span>
                <span className={`${styles.transactionStatus} ${styles.done} `}>
                    موفق
                </span>
                <span className={styles.transactionType}>خرید</span>
            </div>
        </div>
    );
}

export default TransactionHistory;
