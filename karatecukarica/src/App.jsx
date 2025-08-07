import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./pages/Root";
import Homepage from "./pages/Homepage/Homepage";
import SchedulesAndLocations from "./pages/SchedulesAndLocations/SchedulesAndLocations";
import SummerCamp from "./pages/SummerCamp/SummerCamp";
import {SCHEDULES_AND_LOCATIONS_URL, TERMS_URL, NEWS_URL} from "./constants.jsx";
import Terms from "./pages/Terms/Terms.jsx";
import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx";
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: `${SCHEDULES_AND_LOCATIONS_URL}`,
        element: <SchedulesAndLocations />,
      },
      { path: `${NEWS_URL}`, element: <SummerCamp /> },
      { path: `${TERMS_URL}`, element: <Terms /> },
    ],
  },
  { path: `*`, element: <PageNotFound /> },
]);

function App() {
   return (
     <HelmetProvider>
       <RouterProvider router={router} />
     </HelmetProvider>
   );
}

export default App;
