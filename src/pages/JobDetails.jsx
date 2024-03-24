import { useLoaderData, useParams } from "react-router-dom";
import JobDetailBanner from "../components/JobDetailBanner";
import { saveAppliedJobs } from "../utils/storage";
// import { useEffect, useState } from "react";

const JobDetails = () => {
    const {id} = useParams();
     console.log(id)
    
     const jobs = useLoaderData();
     console.log(jobs);

    const handelApply = () =>{
        saveAppliedJobs(parseInt(id));
    }

    const job = jobs.find(job => job.id == id);
    console.log(job)

    const {job_title, company_name, remote_or_onsite, location, job_type, salary, contact_information, experiences, educational_requirements, job_responsibility, job_description} = job;

    return (
        <div>
            <JobDetailBanner></JobDetailBanner>

            <div className="flex gap-4 p-5 w-[1000px] mx-auto">
                <div className="w-2/3 p-8 space-y-2">
                    <h1><span className="text-lg font-bold">Job Description</span> : {job_description}</h1>
                    <h1><span className="text-lg font-bold">Job Responsibility</span> : {job_responsibility}</h1>
                    <h1><span className="text-lg font-bold">Educational Requirement</span></h1>
                    <p>{educational_requirements}</p>
                    <h1><span className="text-lg font-bold">Experience</span></h1>
                    <p>{experiences}</p>
                </div>
                <div className="w-1/3 p-4 border border-base-300 space-y-4">
                    <h1 className="text-xl font-bold">Job Details</h1>
                    <hr />
                    <h1><span className="text-lg font-bold">Salary</span> : {salary}</h1>
                    <h1><span className="text-lg font-bold">Job Title</span> : {job_title}</h1>

                    <h1>Contact Information</h1>
                    <hr />
                    <h1><span className="text-lg font-bold">Phone</span> : {contact_information.phone}</h1>
                    <h1><span className="text-lg font-bold">Email</span> : {contact_information.email}</h1>
                    <h1><span className="text-lg font-bold">Address</span> : {contact_information.address}</h1>
                    <button onClick={handelApply} className="btn btn-primary">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;