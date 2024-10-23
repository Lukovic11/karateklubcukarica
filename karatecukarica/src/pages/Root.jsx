import { Outlet } from "react-router-dom";

const Root = () => {
    return ( 
        <div className="container">
            <main>
                <Outlet />
            </main>
        </div>
     );
}
 
export default Root;