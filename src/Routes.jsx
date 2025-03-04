import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginLayout from "./pages/LoginLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import ProtectedLayout from "./pages/ProtectedLayout";
import Profile from "./pages/Profile";

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
