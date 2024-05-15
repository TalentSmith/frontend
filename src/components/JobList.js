import React, {useState,useEffect} from "react";



export default function JobList(){

    const [jobList , setJobList] = useState([]);
    
    useEffect(() => {
        const consumeResources = async () => {
          fetch("http://localhost:8080/job/getAllJobs")
          .then(res=>res.json())
          .then(result=>{
            setJobList(result)
          })
        };
        consumeResources();
      }, []);

      console.log("Job Data",jobList)

    return(
        <div class="job-page">
        <h2>Job List</h2>
        <div class="job-cards-container">
            {jobList.map((job) => (
              <div class="job-card" key={job.job_id}>
                <h3>{job.job_title}</h3>
                <p><strong>Location:</strong> {job.job_location}</p>
                <p><strong>Company ID:</strong> {job.company_id}</p>
                <p><strong>Posting Date:</strong> {job.post_date}</p>
                <a href={job.job_url} target="_blank" rel="noopener noreferrer" class="job-link">Job Link</a>
              </div>
            ))}
          </div>
      </div>
    );
  }