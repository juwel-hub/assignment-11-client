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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SingleFoodDetails from "../../Components/AvailableFood/SingleFoodDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <Error></Error>,
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
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/manageMyFood",
        element: (
          <PrivateRoute>
            <ManageMyFood></ManageMyFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/myFoodRequest",
        element: (
          <PrivateRoute>
            <MyFoodRequest></MyFoodRequest>
          </PrivateRoute>
        ),
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
        loader: () =>
          fetch(
            "https://assignment-11-server-kappa-khaki.vercel.app/featureFood"
          ),
        element: (
          <PrivateRoute>
            <FeatureDetails></FeatureDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/singleFoodDetails/:id",
        loader: () =>
          fetch("https://assignment-11-server-kappa-khaki.vercel.app/addFoods"),
        element: (
          <PrivateRoute>
            <SingleFoodDetails></SingleFoodDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
