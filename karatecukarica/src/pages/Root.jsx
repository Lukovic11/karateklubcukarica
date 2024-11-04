import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Herobanner from "../components/Herobanner/Herobanner";

const Root = () => {
  return (
    <div className="container">
      {/* <Header /> */}
      <main>
        <Herobanner />
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
