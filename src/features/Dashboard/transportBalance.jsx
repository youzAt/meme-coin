/* eslint-disable react/prop-types */
import Button from "../UI/Button";
import Input from "../UI/Input";
import styles from "./IncreaseBalance.module.css";
import increaseIcon from "../../assets/icons/add-rectangle.svg";
import decreaseDisIcon from "../../assets/icons/clear-rectangle.svg";
import decreaseIcon from "../../assets/icons/clear-rectangle-active.svg";
import { useState } from "react";

const prices = [100000, 200000, 500000, 10000000];

const TransportBalance = ({ onCloseModal }) => {
    const [balanceToTransport, setBalanceToTransport] = useState(0);

    const increaseHandler = (e) => {
        e.preventDefault();
        setBalanceToTransport((cur) => cur + 50000);
    };
    const decreaseHandler = (e) => {
        e.preventDefault();
        if (balanceToTransport < 50000) return;
        setBalanceToTransport((cur) => cur - 50000);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if (balanceToTransport < 50000) {
            alert("حداقل مقدار واریزی 50،000 تومان است.");
            return;
        }
        TransportBalance(balanceToTransport, {
            onSuccess: () => {
                onCloseModal();
            },
        });
    };
    return (
        <div className={styles.box}>
            <div className={styles.heading}>
                <h4>افزایش اعتبار</h4>
                <span onClick={onCloseModal}>&larr;</span>
            </div>
            <p className={"caption " + styles.description}>
                1- حداقل مبلغ افزایش اعتبار 50،000 تومان می‌باشد.
                <br />
                2- با هربار کلیک روی <img
                    src={increaseIcon}
                    alt="add icon"
                />{" "}
                مبلغ 50،000 تومان به اعتبار شما اضافه می شود.
            </p>
            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.inputBox}>
                    <Input
                        min={0}
                        type="number"
                        placeholder="50,000 تومان"
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
                                    balanceToTransport >= 50000
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
