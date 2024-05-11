import { createBrowserRouter } from "react-router-dom";

import Root from "../../Root/Root";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login";
import Registration from "../../Components/Registration/Registration";
import AvailableFood from "../../Components/AvailableFood/AvailableFood";
import AddFood from "../../Components/AddFood/AddFood";
import ManageMyFood from "../../Components/ManageMyFood/ManageMyFood";
import MyFoodRequest from "../../Components/MyFoodRequest/MyFoodRequest";
import Error from "../../Components/Error/Error";
import FeatureDetails from "../../Components/FeatureFoodCard/FeatureDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/availableFood",
        element: <AvailableFood></AvailableFood>,
      },
      {
        path: "/addFood",
        element: <AddFood></AddFood>,
      },
      {
        path: "/manageMyFood",
        element: <ManageMyFood></ManageMyFood>,
      },
      {
        path: "/myFoodRequest",
        element: <MyFoodRequest></MyFoodRequest>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/featureDetails/:id",
        loader: () => fetch("http://localhost:5000/featureFood"),
        element: <FeatureDetails></FeatureDetails>,
      },
    ],
  },
]);

export default router;
