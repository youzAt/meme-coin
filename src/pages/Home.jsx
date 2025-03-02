import BalanceBox from '../features/Dashboard.jsx/BalanceBox'
import ChartBox from '../features/Dashboard.jsx/ChartBox'
import ChatBox from '../features/Dashboard.jsx/ChatBox'
import styles from './Home.module.css'
const Home = () => {
    return (
        <div className={styles.home}>
            <BalanceBox/>
            <div className={styles.main}>
                <ChartBox/>
                <ChatBox/>
            </div>
        </div>
    )
}

export default Home
