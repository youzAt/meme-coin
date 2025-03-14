/* eslint-disable react/prop-types */
import Button from "../UI/Button";
import Input from "../UI/Input";
import styles from "./IncreaseBalance.module.css";
import increaseIcon from "../../assets/icons/add-rectangle.svg";
import decreaseDisIcon from "../../assets/icons/clear-rectangle.svg";
import decreaseIcon from "../../assets/icons/clear-rectangle-active.svg";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

const prices = [10, 20, 50, 100];

const TransportBalance = ({ onCloseModal, destwalletAddress }) => {
    const queryClient = useQueryClient();
    const [balanceToTransport, setBalanceToTransport] = useState(0);

    const increaseHandler = (e) => {
        e.preventDefault();
        setBalanceToTransport((cur) => cur + 1);
    };
    const decreaseHandler = (e) => {
        e.preventDefault();
        if (balanceToTransport < 1) return;
        setBalanceToTransport((cur) => cur - 1);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if (balanceToTransport < 1) {
            alert("حداقل مقدار انتقال 1 میم کوین است.");
            return;
        }

        fetch("http://127.0.0.1:8000/transactions/", {
            body: JSON.stringify({
                type: "T",
                amount: balanceToTransport,
                to_add: destwalletAddress,
            }),
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
                queryClient.invalidateQueries(["userBalance"]);
                console.log(data);
                onCloseModal();
            })
            .catch((e) => {
                alert(e);
            });
    };
    return (
        <div className={styles.box}>
            <div className={styles.heading}>
                <h4>انتقال اعتبار</h4>
                <span onClick={onCloseModal}>&larr;</span>
            </div>
            <p className={"caption " + styles.description}>
                1- حداقل مبلغ انتقال اعتبار 1 میم کوین می‌باشد.
                <br />
                2- با هربار کلیک روی <img src={increaseIcon} alt="add icon" /> 1
                میم کوین را میتوانید انتقال دهید
            </p>
            <div className={styles.walletAddress}>
                آدرس:
                <p>{destwalletAddress}</p>
            </div>
            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.inputBox}>
                    <Input
                        min={0}
                        type="number"
                        placeholder="1"
                        value={balanceToTransport}
                        onChange={(e) => setBalanceToTransport(e.target.value)}
                    />
                    <div className={styles.btn}>
                        <Button
                            isSmall
                            type="secondary"
                            className={styles.increaseBtn}
                            onClick={increaseHandler}
                        >
                            <img src={increaseIcon} alt="add icon" />
                        </Button>
                        <Button
                            isSmall
                            type="secondary"
                            className={styles.decreaseBtn}
                            onClick={decreaseHandler}
                        >
                            <img
                                src={
                                    balanceToTransport >= 1
                                        ? decreaseIcon
                                        : decreaseDisIcon
                                }
                                alt="decrese icon"
                            />
                        </Button>
                    </div>
                </div>
                <div className={styles.pricesBtn}>
                    {prices.map((item) => (
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setBalanceToTransport(item);
                            }}
                            key={item}
                        >
                            {item.toLocaleString()}
                        </button>
                    ))}
                </div>
                <Button isSmall>تایید</Button>
            </form>
        </div>
    );
};

export default TransportBalance;
