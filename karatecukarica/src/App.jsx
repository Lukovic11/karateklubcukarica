import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Homepage from "./pages/Homepage";
import SchedulesAndLocations from "./pages/SchedulesAndLocations";
import SummerCamp from "./pages/SummerCamp";

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
