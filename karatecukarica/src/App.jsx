import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./pages/Root";
import Homepage from "./pages/Homepage/Homepage";
import SchedulesAndLocations from "./pages/SchedulesAndLocations/SchedulesAndLocations";
import SummerCamp from "./pages/SummerCamp/SummerCamp";
import {GALLERY_URL, SCHEDULES_AND_LOCATIONS_URL, SUMMER_CAMP_URL, TERMS_URL} from "./constants.jsx";
import Terms from "./pages/Terms/Terms.jsx";
import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        index: true,
        element: <Homepage/>,
      },
      {
        path: `${SCHEDULES_AND_LOCATIONS_URL}`,
        element: <SchedulesAndLocations/>,
      },
      {path: `${GALLERY_URL}`, element: <Gallery/>},
      {path: `${SUMMER_CAMP_URL}`, element: <SummerCamp/>},
      {path: `${TERMS_URL}`, element: <Terms/>},

    ],
  },
  {path: `*`, element: <PageNotFound/>},
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
