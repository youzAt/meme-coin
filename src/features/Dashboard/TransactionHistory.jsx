import styles from "./TransactionHistory.module.css";
import { useEffect, useState } from "react";

function TransactionHistory({ amount }) {
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
    }, [amount]);

    console.log(transactions);
    const [filter, setFilter] = useState("time");
    const [timefilter, setTimeFilter] = useState("all");
    const [amountfilter, setAmountFilter] = useState("all");

    const confirmFilter = () => {
        const currentDate = new Date();
        if (timefilter != "all") {
            currentDate.setUTCDate(
                currentDate.getUTCDate() -
                    Number(
                        `${
                            timefilter == "day"
                                ? 1
                                : timefilter == "week"
                                ? 7
                                : 30
                        }`
                    )
            );
        }
        const formattedDate = `${currentDate.getUTCFullYear()}-${(
            currentDate.getUTCMonth() + 1
        )
            .toString()
            .padStart(2, "0")}-${currentDate
            .getUTCDate()
            .toString()
            .padStart(2, "0")}`;

        timefilter != "all" ||
            (amountfilter != "all" &&
                fetch("http://127.0.0.1:8000/transactionfilter/", {
                    body: JSON.stringify(
                        filter === "time"
                            ? {
                                  start_date: `${
                                      timefilter != "all" && formattedDate
                                  }`,
                              }
                            : {
                                  max_amount: `${
                                      amountfilter != "all" && amountfilter
                                  }`,
                              }
                    ),
                    headers: {
                        "content-type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem(
                            "memecoin-access"
                        )}`,
                    },
                    method: "POST",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        setTransactions(data.reverse());
                    }));
    };

    return (
        <div className={styles.transactionHistory}>
            <div className={styles.filter}>
                <select
                    onChange={(e) => {
                        setFilter(e.target.value);
                    }}
                    value={filter}
                >
                    <option value="time">زمان</option>
                    <option value="amount">مبلغ</option>
                </select>

                <select
                    defaultValue="all"
                    value={filter === "time" ? timefilter : amountfilter}
                    onChange={(e) => {
                        filter === "time"
                            ? setTimeFilter(e.target.value)
                            : setAmountFilter(e.target.value);
                    }}
                >
                    {filter === "time" ? (
                        <>
                            <option value="all">همه</option>
                            <option value="day">1روزه</option>
                            <option value="week">1هفته</option>
                            <option value="month">1ماه</option>
                        </>
                    ) : (
                        <>
                            <option value="all">همه</option>
                            <option value="100">کمتر از 100</option>
                            <option value="1000">کمتر از 1000</option>
                            <option value="1000000">کمتر از 1000000</option>
                        </>
                    )}
                </select>
                <div onClick={confirmFilter} className={styles.confirmFilter}>
                    اعمال فیلتر
                </div>
            </div>
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
                                {val.time.slice(0, 10)}
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
