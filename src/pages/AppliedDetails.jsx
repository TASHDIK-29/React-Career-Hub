import { useLoaderData } from "react-router-dom";
import AppliedBanner from "../components/AppliedBanner";
import { useEffect, useState } from "react";
import { getAppliedJobs } from "../utils/storage";
import AppliedJob from "../components/AppliedJob";

const AppliedDetails = () => {
    const jobs = useLoaderData();
    console.log(jobs);

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);


    useEffect(() => {
        const storedJobsId = getAppliedJobs();
        console.log(storedJobsId);

        if (storedJobsId) {
            const jobsApplied = jobs.filter(job => storedJobsId.includes(job.id));

            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }


    }, [jobs])

    const handelDropDown = filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    console.log(appliedJobs.length);

    return (
        <div>
            <AppliedBanner></AppliedBanner>

            <div className="flex flex-col items-end my-5">
                <details className="dropdown">
                    <summary className="m-1 btn">Filter By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handelDropDown('all')}><a>All</a></li>
                        <li onClick={() => handelDropDown('remote')}><a>Remote</a></li>
                        <li onClick={() => handelDropDown('onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            {
                appliedJobs.length === 0 && <div className="flex flex-col justify-center items-center min-h-[calc(100vh-220px-260px)]">
                    <h1 className="text-3xl font-bold">No Job Applied Yet !!</h1>

                </div>
            }
            <div>
                {
                    displayJobs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedDetails;