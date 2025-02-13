import {Outlet, useLocation} from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Root = () => {
  const location = useLocation();

  // Check if the route is not defined (404)
  const hideFooterRoutes = ["/404"]; // Add other paths if needed
  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname);

  return (
    <div className="container">
      <Header/>
      <main>
        <Outlet/>
      </main>
      {shouldShowFooter && <Footer/>}
    </div>
  );
};

export default Root;
