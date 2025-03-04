import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginLayout from "./pages/LoginLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
<<<<<<< HEAD
import ProtectedLayout from "./pages/ProtectedLayout";
import Profile from "./pages/Profile";
=======
import Wallet from "./pages/Wallet";
>>>>>>> 174a1c218b151979bda79b7a3cde6f8a33915fba

const publicRoutes = [];

const authOnlyRoutes = [
<<<<<<< HEAD
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
=======
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/wallet",
                element: <Wallet />,
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
>>>>>>> 174a1c218b151979bda79b7a3cde6f8a33915fba
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
