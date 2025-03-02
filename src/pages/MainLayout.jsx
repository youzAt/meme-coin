import { Outlet } from "react-router-dom";
import SideMenu from "../features/layout/SideMenu";
import styles from "./MainLayout.module.css";
const MainLayout = () => {
	return (
		<div className={styles.layout + " container"}>
			<div className={styles.menuContainer}>
				<SideMenu />
			</div>
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default MainLayout;
