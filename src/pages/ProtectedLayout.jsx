import { Outlet } from "react-router-dom";

const ProtectedLayout = () => {
	// const { isLogin, isLoading } = useAuth();
	// console.log(isLogin)
	return <Outlet />;
};

export default ProtectedLayout;
