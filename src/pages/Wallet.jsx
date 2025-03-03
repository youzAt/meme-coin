import styles from "./wallet.module.css";
import buyIcon from "../assets/icons/wallet-add 2.svg";
import sellIcon from "../assets/icons/wallet-minus 01.svg";
const Wallet = () => {
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
            <div className={styles.walletMainPart}>
                <div className="searchbar"></div>
                <div className="yourWallet"></div>
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
