import Category from "../components/Category";
import HomeBanner from "../components/HomeBanner";
import HomeHeader from "../components/HomeHeader";
import Jobs from "../components/Jobs";

const Home = () => {
    return (
        <div className="space-y-20 mb-10">
            <HomeHeader></HomeHeader>
            <Category></Category>
            <Jobs></Jobs>
        </div>
    );
};

export default Home;