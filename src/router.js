import { createBrowserRouter } from "react-router-dom";
import ForOutlet from "./pages/ForOutlet";
import MainPage from "./pages/MainPage/MainPage";
import Login from "./pages/SubPage/Login";
import Signup from "./pages/SubPage/Signup";
import Ariari_intro from "./pages/SubPage/Ariari_intro";
import Ariari_howtouse from "./pages/SubPage/Ariari_howtouse";
import Allnorth from "./pages/SubPage/Allnorth";
import Allsouth from "./pages/SubPage/Allsouth";
import Mypage from "./pages/SubPage/Mypage";
import Personal from "./pages/SubPage/Personal";

export default createBrowserRouter([
    {
        path: "/",
        element: <ForOutlet />,
        children: [
            {
                path: "",
                element: <MainPage />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Signup />
            },
            {
                path: "/intro",
                element: <Ariari_intro />
            },
            {
                path: "/howtouse",
                element: <Ariari_howtouse />
            },
            {
                path: "/allnorth",
                element: <Allnorth />
            },
            {
                path: "/allsouth",
                element: <Allsouth />
            },
            {
                path: "/mypage",
                element: <Mypage />
            },
            {
                path: "/personal",
                element: <Personal />
            },
        ]
    }
]);