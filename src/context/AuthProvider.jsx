/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
	createContext,
	useContext,
	useEffect,
	useLayoutEffect,
	useState,
} from "react";
import { api } from "../services/apiAxios";

const authContext = createContext(null);

export const useAuth = () => {
	const context = useContext(authContext);
	if (!context) {
		throw new Error("Auth context must be used inside AuthProvider");
	}
	return context;
};

const AuthProvider = ({ children }) => {
	const [accessToken, setAccessToken] = useState(() =>
		localStorage.getItem("memecoin-access")
	);
	const [refreshToken] = useState(() =>
		localStorage.getItem("memecoin-refresh")
	);
	const [isLoading, setIsLoading] = useState(false);
	const [isLogin, setIsLogin] = useState(
		Boolean(localStorage.getItem("memecoin-access"))
	);

	useEffect(() => {
		const loginCheck = async () => {
			setIsLoading(true);
			if (!accessToken) {
				setIsLogin(false);
				setIsLoading(false);
				return;
			}
			try {
				const data = await api.get("/users/checklogin/");
				console.log(data);
				setIsLogin(true);
			} catch {
				localStorage.removeItem("memecoin-access");
				localStorage.removeItem("memecoin-refresh");
				setIsLogin(false);
			} finally {
				setIsLoading(false);
			}
		};
		loginCheck();
	}, [refreshToken, accessToken]);

	useLayoutEffect(() => {
		const authInterceptor = api.interceptors.request.use((config) => {
			config.headers.Authorization = accessToken
				? `Bearer ${accessToken}`
				: config.headers.Authorization;
			return config;
		});
		return () => {
			api.interceptors.request.eject(authInterceptor);
		};
	}, [accessToken]);

	// useLayoutEffect(() => {
	// 	const refreshInterceptor = api.interceptors.response.use(
	// 		(response) => response,
	// 		async (error) => {
	// 			const originalRequest = error.config;
	// 			if (
	// 				error.response.status === 401 &&
	// 				error.response.data.code === "token_not_valid"
	// 			) {
	// 				try {
	// 					const response = await api.post(
	// 						"/users/token/refresh/",
	// 						{
	// 							refresh: refreshToken,
	// 						}
	// 					);
	// 					setAccessToken(response.data.access);
	// 					localStorage.setItem(
	// 						"memecoin-access",
	// 						response.data.access
	// 					);
	// 					setIsLogin(true);

	// 					originalRequest.headers.Authorization = `Bearer ${response.data.access}`;
	// 					originalRequest._retry = true;
	// 					return api(originalRequest);
	// 				} catch {
	// 					localStorage.removeItem("memecoin-access");
	// 					localStorage.removeItem("memecoin-refresh");
	// 					setAccessToken(null);
	// 					setRefreshToken(null);
	// 					setIsLogin(false);
	// 				}
	// 			}
	// 			return Promise.reject(error);
	// 		}
	// 	);
	// 	return () => {
	// 		api.interceptors.response.eject(refreshInterceptor);
	// 	};
	// }, [refreshToken]);
	return (
		<authContext.Provider
			value={{ isLogin, setIsLogin, setAccessToken, isLoading }}
		>
			{children}
		</authContext.Provider>
	);
};

export default AuthProvider;
