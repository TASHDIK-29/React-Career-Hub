import { NavLink } from "react-router-dom";

const Job = ({ job }) => {

    // console.log(job);

    const {salary, job_type, location, remote_or_onsite, company_name, job_title, logo, id} = job;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={logo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-start text-start">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="flex gap-4">
                    <h3 className="border px-2 py-1 border-base-300">{remote_or_onsite}</h3>
                    <h3 className="border px-2 py-1 border-base-300">{job_type}</h3>
                </div>
                <div className="flex gap-4">
                    <h3>Location : {location}</h3>
                    <h3>Salary : {salary}</h3>
                </div>
                <div className="card-actions">
                    <NavLink to={`/job/${id}`}><button className="btn btn-primary">Details</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Job;