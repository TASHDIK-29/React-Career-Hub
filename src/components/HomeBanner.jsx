import user from "./../assets/images/user2.png";
import Nav from "./Nav";
const HomeBanner = () => {
    return (
        <div className="hero min-h-[400px] bg-base-200 w-[1000px] mx-auto relative">
            
            <div className="hero-content flex-col lg:flex-row-reverse p-0 absolute bottom-0">
                <img src={user} className="max-w-sm rounded-lg" />
                <div>
                    <h1 className="text-5xl font-bold">One Step Closer To Your Dream Job</h1>
                    <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;