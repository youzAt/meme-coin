import BalanceBox from "../features/Dashboard.jsx/BalanceBox";
import ChartBox from "../features/Dashboard.jsx/ChartBox";
import ChatBox from "../features/Dashboard.jsx/ChatBox";
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
