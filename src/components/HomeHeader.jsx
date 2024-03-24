import HomeBanner from "./HomeBanner";
import Nav from "./Nav";

const HomeHeader = () => {
    return (
        <div className="bg-base-200">
            <Nav></Nav>
            <HomeBanner></HomeBanner>
        </div>
    );
};

export default HomeHeader;