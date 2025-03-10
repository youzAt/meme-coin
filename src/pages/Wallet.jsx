import styles from "./wallet.module.css";
import buyIcon from "../assets/icons/wallet-add 2.svg";
import sellIcon from "../assets/icons/wallet-minus 01.svg";
import comboShape from "../assets/icons/Combo shape.svg";
import arrowDown from "../assets/icons/arrow-down.svg";
import addIcon from "../assets/icons/add.svg";
import IncreaseBalance from "../features/Dashboard/IncreaseBalance";
import { useBalance } from "../features/Dashboard/useBalance";
import Modal from "../features/UI/Modal";
import Button from "../features/UI/Button";

import TransactionHistory from "../features/Dashboard/TransactionHistory";

import { useEffect, useState } from "react";
const Wallet = () => {
    const { data, isLoading } = useBalance();

    const [walletAddress, setWalletAddress] = useState("");
    const [destwalletAddress, setDestWalletAddress] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/getwalletaddress/", {
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
                setWalletAddress(data.address);
            });
    }, []);

    console.log(walletAddress);

    const items = [
        { type: 0, number: 700 },
        { type: 1, number: 75 },
        { type: 0, number: 74 },
        { type: 0, number: 73 },
        { type: 1, number: 80 },
        { type: 0, number: 700 },
        { type: 1, number: 75 },
        { type: 0, number: 74 },
        { type: 0, number: 73 },
        { type: 1, number: 80 },
        { type: 0, number: 700 },
        { type: 1, number: 75 },
    ];

    return (
        <main className={styles.walletContainer}>
            <div className={styles.wallet}>
                <div className={styles.walletAddress}>
                    <p>آدرس کیف پول:</p>
                    <div>
                        <p>{walletAddress}</p>
                        <img
                            onClick={() => {
                                navigator.clipboard.writeText(walletAddress);
                            }}
                            src={comboShape}
                            alt=""
                        />
                    </div>
                </div>
                <div className={styles.amount}>
                    <div>
                        <h5>موجودی(میم کوین)</h5>
                        <p>
                            <img src={arrowDown} alt="" />
                            {!isLoading && data.memecoin_balance}
                        </p>
                        <div>
                            <div className={styles.loss}>
                                <p>فروش(امروز)</p>
                                <p>10</p>
                            </div>
                            <div className={styles.profit}>
                                <p>خرید(امروز)</p>
                                <p>20</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h5>موجودی(تومان)</h5>
                        <p>
                            <img src={arrowDown} alt="" />
                            {!isLoading && data.balance} تومان
                        </p>
                        <div>
                            <div className={styles.loss}>
                                <p>فروش(امروز)</p>
                                <p>1000000 تومان</p>
                            </div>
                            <div className={styles.profit}>
                                <p>خرید(امروز)</p>
                                <p>2000000 تومان</p>
                            </div>
                        </div>
                    </div>
                </div>
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
                <div className={styles.transportAmount}>
                    <h5>آدرس کیف پول(مقصد)</h5>
                    <input
                        type="text"
                        value={destwalletAddress}
                        onChange={(e) => setDestWalletAddress(e.target.value)}
                    />
                    <button>انتقال اعتبار</button>
                    <p>
                        بعد از اینکه آدرس کیف پول مقصد را مشخص کردید، انتقال
                        اعتبار فعال می‌شود.
                    </p>
                </div>

                <TransactionHistory />
            </div>
            <div className={styles.walletMainPart}>
                <h4 className={styles.headingColor}>وضعیت خرید و فروش</h4>
                <div className={styles.buySellHeader}>
                    <p>تعداد</p>
                    <p>نوع</p>
                </div>

                {items.map((val, index) => {
                    return (
                        <div className={styles.buySellHeader} key={index}>
                            <p
                                className={
                                    val.type === 0 ? styles.buy : styles.sell
                                }
                            >
                                <img
                                    src={val.type === 0 ? buyIcon : sellIcon}
                                />
                                {val.number}
                            </p>
                            <p>{val.type === 0 ? "خرید" : "فروش"}</p>
                        </div>
                    );
                })}
            </div>
        </main>
    );
};

export default Wallet;
