import styles from "./SideMenu.module.css";
import logo from "../../assets/images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import windowIcon from "../../assets/icons/window.svg";
import windowLightIcon from "../../assets/icons/windowLight.svg";
import walletIcon from "../../assets/icons/wallet.svg";
import walletLightIcon from "../../assets/icons/walletLight.svg";
// import chatIcon from "../../assets/icons/chat.svg";
// import chatLightIcon from "../../assets/icons/chatLight.svg";
import logoutIcon from "../../assets/icons/out.svg";
import userIcon from "../../assets/icons/user2.svg";
import userLightIcon from "../../assets/icons/user2Light.svg";
const navlinks = [
	{
		to: "/",
		label: "صفحه اصلی",
		icon: windowIcon,
		iconLight: windowLightIcon,
		subLinks: [
			"نمودار قیمت",
			"حجم و تعداد تراکنش ها",
			"مشاهده و ارسال پیام",
			"نمایش و افزایش اعتبار",
		],
	},

	{
		to: "/wallet",
		label: "کیف پول",
		icon: walletIcon,
		iconLight: walletLightIcon,

		subLinks: ["افزایش اعتبار", "انتقال اعتبار", " تراکنش ها"],
	},
	// {
	// 	to: "/",
	// 	label: "پیام ها",
	// 	icon: chatIcon,
	// 	iconLight: chatLightIcon,
	// 	subLinks: ["ارسال پیام", "صندوق دریافتی"],
	// },
	{
		label: "پروفایل",
		icon: userIcon,
		iconLight: userLightIcon,
		to: "/profile",
		subLinks: ["ویرایش پروفایل"],
	},
];
const SideMenu = () => {
	const navigate = useNavigate();
	const logoutHandler = () => {
		localStorage.removeItem("memecoin-access");
		localStorage.removeItem("memecoin-refresh");
		navigate("/login");
	};

	return (
		<div className={styles.sideMenu}>
			<div className={styles.logo}>
				<img src={logo} alt="logo" />
			</div>
			<nav className={styles.navBar}>
				{navlinks.map((item) => (
					<li key={item.label}>
						<NavLink
							to={item.to ? item.to : "#"}
							className={styles.navItem}
						>
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
									<li
										className={"body " + styles.sub}
										key={index}
									>
										{sub}
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</nav>
			<div className={styles.empty}></div>
			<button className={styles.outBtn}>
				<img src={logoutIcon} alt="icon" />
				<span onClick={logoutHandler} className={"body"}>
					خروج از حساب کاربری
				</span>
			</button>
		</div>
	);
};

export default SideMenu;
