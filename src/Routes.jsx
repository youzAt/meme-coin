import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginLayout from "./pages/LoginLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import ProtectedLayout from "./pages/ProtectedLayout";
import Profile from "./pages/Profile";
import Wallet from "./pages/Wallet";

const publicRoutes = [];

const authOnlyRoutes = [
	{
		element: <ProtectedLayout />,
		children: [
			{
				path: "/",
				element: <MainLayout />,
				children: [
					{
						index: true,
						element: <Home />,
					},
					{
						path: "/profile",
						element: <Profile />,
					},
					{
						path: "/wallet",
						element: <Wallet />,
					},
				],
			},
		],
	},
];

const notAuthOnlyRoutes = [
	{
		element: <LoginLayout />,
		children: [
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/signup",
				element: <Signup />,
			},
		],
	},
];

const router = createBrowserRouter([
	...publicRoutes,
	...authOnlyRoutes,
	...notAuthOnlyRoutes,
]);
const Routes = () => {
	return <RouterProvider router={router} />;
};

export default Routes;
