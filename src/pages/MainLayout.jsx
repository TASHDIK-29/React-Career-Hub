import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
// import Nav from "../components/Nav";

const MainLayout = () => {
    return (
        <div className="w-full relative">
            {/* <Nav></Nav> */}

            <section className="min-h-[calc(100vh-220px)]">
                <Outlet></Outlet>
            </section>

                 <Footer></Footer>
        </div>
    );
};

export default MainLayout;