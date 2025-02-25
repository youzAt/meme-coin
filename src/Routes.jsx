import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginLayout from "./pages/LoginLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const publicRoutes = [];

const authOnlyRoutes = [];

const notAuthOnlyRoutes = [{
    path: '/',
    element: <LoginLayout/>,
    children: [
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: '/signup',
            element: <Signup/>
        }
    ]
}];

const router = createBrowserRouter([
	...publicRoutes,
	...authOnlyRoutes,
	...notAuthOnlyRoutes,
]);
const Routes = () => {
	return <RouterProvider router={router} />;
};

export default Routes;
