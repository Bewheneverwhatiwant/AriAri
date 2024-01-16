import { createBrowserRouter } from "react-router-dom";
import ForOutlet from "./pages/ForOutlet";
import MainPage from "./pages/MainPage/MainPage";
import Login from "./pages/SubPage/ForHeader/Login";
import Logout from "./pages/SubPage/ForHeader/Logout";
import Signup from "./pages/SubPage/ForHeader/Signup";
import Ariari_intro from "./pages/SubPage/ForHeader/Ariari_intro";
import Ariari_howtouse from "./pages/SubPage/ForHeader/Ariari_howtouse";
import Allnorth from "./pages/SubPage/AllGoods/Allnorth";
import Allsouth from "./pages/SubPage/AllGoods/Allsouth";
import Mypage from "./pages/SubPage/ForHeader/Mypage";
import Personal from "./pages/SubPage/ForHeader/Personal";
import CheckOurOrder from "./pages/SubPage/ForCompany/CheckOurOrder";
import EnrollCompany from "./pages/SubPage/ForCompany/EnrollCompany";
import BuySouth from "./pages/SubPage/ForNorth/BuySouth";
import CheckOrder from "./pages/SubPage/ForNorth/CheckOrder";
import EnrollNorth from "./pages/SubPage/ForNorth/EnrollNorth";
import MyEnroll from "./pages/SubPage/ForNorth/MyEnroll";
import BuyNorth from "./pages/SubPage/ForSouth/BuyNorth";
import ChargePoint from "./pages/SubPage/ForSouth/ChargePoint";
import CheckMyOrder from "./pages/SubPage/ForSouth/CheckMyOrder";
import North_DetailPage from "./pages/SubPage/AllGoods/North_DetailPage";
import South_DetailPage from "./pages/SubPage/AllGoods/South_DetailPage";

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
                path: "/logout",
                element: <Logout />
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
            {
                path: "/checkourorder",
                element: <CheckOurOrder />
            },
            {
                path: "/enrollcompany",
                element: <EnrollCompany />
            },
            {
                path: "/buysouth",
                element: <BuySouth />
            },
            {
                path: "/checkorder",
                element: <CheckOrder />
            },
            {
                path: "/enrollnorth",
                element: <EnrollNorth />
            },
            {
                path: "/myenroll",
                element: <MyEnroll />
            },
            {
                path: "/buynorth",
                element: <BuyNorth />
            },
            {
                path: "/chargepoint",
                element: <ChargePoint />
            },
            {
                path: "/checkmyorder",
                element: <CheckMyOrder />
            },
            {
                path: "/northdetailpage",
                element: <North_DetailPage />
            },
            {
                path: "/Southdetailpage",
                element: <South_DetailPage />
            },
        ]
    }
]);