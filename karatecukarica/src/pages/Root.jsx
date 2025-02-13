import {Outlet, useLocation} from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Root = () => {
  const location = useLocation();

  const hideFooterRoutes = ["/404"];
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
