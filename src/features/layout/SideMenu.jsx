import styles from "./SideMenu.module.css";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import windowIcon from "../../assets/icons/window.svg";
import windowLightIcon from "../../assets/icons/windowLight.svg";
import walletIcon from "../../assets/icons/wallet.svg";
import walletLightIcon from "../../assets/icons/walletLight.svg";
import chatIcon from "../../assets/icons/chat.svg";
import chatLightIcon from "../../assets/icons/chatLight.svg";
import logoutIcon from '../../assets/icons/out.svg'
const navlinks = [
	{
		label: "صفحه اصلی",
		icon: windowIcon,
		iconLight: windowLightIcon,
	},
	{
		label: "کیف پول",
		icon: walletIcon,
		iconLight: walletLightIcon,

		subLinks: ["افزایش اعتبار", "انتقال اعتبار", " تراکنش ها"],
	},
	{
		label: "پیام ها",
		icon: chatIcon,
		iconLight: chatLightIcon,
		subLinks: ["ارسال پیام", "صندوق دریافتی"],
	},
];
const SideMenu = () => {
	return (
		<div className={styles.sideMenu}>
			<div className={styles.logo}>
				<img src={logo} alt="logo" />
			</div>
			<nav className={styles.navBar}>
				{navlinks.map((item, index) => (
					<li key={item.label}>
						<NavLink className={(index === 0 ? styles.active: "") + " " + styles.navItem}>
							<img
								className={styles.navIcon}
								src={item.icon}
								alt="icon"
							/>
							<img
								className={styles.navIconLight}
								src={item.iconLight}
								alt="icon"
							/>
							<span className={"body"}>{item.label}</span>
						</NavLink>
						{item.subLinks && (
							<ul className={styles.subLinks}>
								{item.subLinks.map((sub, index) => (
									<li className={"body " + styles.sub} key={index}>
										{sub}
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</nav>
            <div className={styles.empty}></div>
            <button className={styles.outBtn} >
                <img src={logoutIcon} alt="icon" />
                <span className={"body"}>خروج از حساب کاربری</span>
            </button>
		</div>
	);
};

export default SideMenu;
