import { useEffect, useState } from "react";
import Job from "./Job";

const Jobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    return (
        <div className="text-center space-y-6 mt-5 mb-10 w-[1000px] mx-auto">
            <h1 className="text-3xl font-bold ">Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid grid-cols-2 gap-4">
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>

        </div>
    );
};

export default Jobs;