import styles from "./TransactionHistory.module.css";
import { useEffect, useState } from "react";

function TransactionHistory() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/transactionlist/", {
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${localStorage.getItem(
                    "memecoin-access"
                )}`,
            },
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                setTransactions(data);
            });
    }, []);

    console.log(transactions);

    return (
        <div className={styles.transactionHistory}>
            <div className={` ${styles.transaction} ${styles.header}`}>
                <span>مبلغ</span>
                <span>تاریخ</span>
                <span>وضعیت</span>
                <span>نوع</span>
            </div>
            <div className={styles.transactions}>
                {transactions.map((val, index) => {
                    return (
                        <div key={index} className={styles.transaction}>
                            <span className={styles.transactionAmount}>
                                {val.amount}
                            </span>
                            <span className={styles.transactionDate}>
                                2025/01/01
                            </span>
                            <span
                                className={`${styles.transactionStatus} ${
                                    val.status === "C"
                                        ? styles.done
                                        : val.status === "UC"
                                        ? styles.pending
                                        : styles.failed
                                } `}
                            >
                                {val.status === "C"
                                    ? "موفق"
                                    : val.status === "UC"
                                    ? "نامشخص"
                                    : "ناموفق"}
                            </span>
                            <span className={styles.transactionType}>
                                {val.type === "B"
                                    ? "خرید"
                                    : val.type === "S"
                                    ? "فروش"
                                    : val.type === "D"
                                    ? "واریز"
                                    : val.type === "W"
                                    ? "برداشت"
                                    : "انتقال"}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default TransactionHistory;
