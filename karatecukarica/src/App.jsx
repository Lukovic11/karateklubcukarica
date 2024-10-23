import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Homepage from "./components/pages/Homepage";
import SchedulesAndLocations from "./components/pages/SchedulesAndLocations";
import SummerCamp from "./components/pages/SummerCamp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      { path: "/terminiilokacije", element: <SchedulesAndLocations /> },
      { path: "/letnjikamp", element: <SummerCamp /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
