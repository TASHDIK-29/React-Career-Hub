import design1 from "../assets/images/bg1.png";
import design2 from "../assets/images/bg2.png";
import Nav from './Nav';

const AppliedBanner = () => {
    return (
        <div className='h-64 border bg-base-200 relative text-center'>
            <Nav></Nav>

            <img className='w-48 absolute top-0 right-0' src={design2} alt="" />
            <img className='w-48 absolute bottom-0 left-0' src={design1} alt="" />

            <h1 className='text-2xl font-bold h-1/2 flex flex-col justify-center items-center'>Applied Jobs</h1>

        </div>
    );
};

export default AppliedBanner;