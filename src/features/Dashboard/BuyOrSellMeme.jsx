/* eslint-disable react/prop-types */
import Button from "../UI/Button";
import Input from "../UI/Input";
import styles from "./IncreaseBalance.module.css";
import increaseIcon from "../../assets/icons/add-rectangle.svg";
import decreaseDisIcon from "../../assets/icons/clear-rectangle.svg";
import decreaseIcon from "../../assets/icons/clear-rectangle-active.svg";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

const prices = [1, 5, 10, 50];

const BuyOrSellMeme = ({ onCloseModal }) => {
    const queryClient = useQueryClient();
    const [memeToBuyOrSell, setMemeToBuyOrSell] = useState(0);
    const [isBuying, setIsBuying] = useState(true);

    const increaseHandler = (e) => {
        e.preventDefault();
        setMemeToBuyOrSell((cur) => cur + 1);
    };
    const decreaseHandler = (e) => {
        e.preventDefault();
        if (memeToBuyOrSell < 1) return;
        setMemeToBuyOrSell((cur) => cur - 1);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if (memeToBuyOrSell < 1) {
            alert(`حداقل مقدار خرید 1 میم کوین است.`);
            return;
        }
        fetch("http://127.0.0.1:8000/transactions/", {
            body: JSON.stringify({
                type: isBuying ? "B" : "S",
                amount: memeToBuyOrSell,
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
                console.log(data);
                queryClient.invalidateQueries(["userBalance"]);
                alert(`${isBuying ? "خرید" : "فروش"} انجام شد`);
                onCloseModal();
            })
            .catch((e) => {
                alert(e);
            });
    };
    return (
        <div className={styles.box}>
            <div className={styles.heading}>
                <h4>خرید و فروش میم کوین</h4>
                <span onClick={onCloseModal}>&larr;</span>
            </div>
            <p className={"caption " + styles.description}>
                1- حداقل مبلغ {isBuying ? "خرید" : "فروش"} می‌باشد.
                <br />
                2- با هربار کلیک روی <img src={increaseIcon} alt="add icon" /> 1
                میم کوین برای شما{" "}
                {isBuying ? "خریداری می شود" : "به فروش می رسد"}
            </p>
            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.buyOrSell}>
                    <div
                        onClick={() => {
                            setIsBuying(true);
                        }}
                        className={`${isBuying && styles.active}`}
                    >
                        خرید
                    </div>
                    <div
                        onClick={() => {
                            setIsBuying(false);
                        }}
                        className={`${!isBuying && styles.active}`}
                    >
                        فروش
                    </div>
                </div>
                <div className={styles.inputBox}>
                    <Input
                        min={0}
                        type="number"
                        placeholder="1 میم کوین"
                        value={memeToBuyOrSell}
                        onChange={(e) => setMemeToBuyOrSell(e.target.value)}
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
                                    memeToBuyOrSell >= 1
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
                                setMemeToBuyOrSell(item);
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

export default BuyOrSellMeme;
