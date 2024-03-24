const getAppliedJobs = () =>{
    
    const storedJobs = localStorage.getItem('job');
    if(storedJobs){
        return JSON.parse(storedJobs);
    }

    return [];
}

const saveAppliedJobs = id =>{
    
    const jobs = getAppliedJobs();

    const isExist = jobs.find(jId => jId === id);
    if(!isExist){
        jobs.push(id);
        localStorage.setItem('job', JSON.stringify(jobs));
    }
    else{
        alert('Already Exist !!!');
    }
}

export {getAppliedJobs, saveAppliedJobs}