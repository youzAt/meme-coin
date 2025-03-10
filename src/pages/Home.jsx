import BalanceBox from "../features/Dashboard/BalanceBox";
import ChartBox from "../features/Dashboard/ChartBox";
import ChatBox from "../features/Dashboard/ChatBox";
import styles from "./Home.module.css";
const Home = () => {
    return (
        <main className={styles.homePage}>
            <BalanceBox />
            <ChartBox />
            <ChatBox />
        </main>
    );
};

export default Home;
