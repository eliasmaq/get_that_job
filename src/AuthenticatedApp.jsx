import styled from "@emotion/styled";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import { useAuth } from "./context/auth-context";
import JobPage from "./pages/jobPage";
import ProfileRecruiter from "./pages/profilePage";
import Search from "./pages/search";
import JobsPage from "./pages/jobsPage";
import { useEffect, useState } from "react";
import { getJobsRecruiter, updateJob } from "./service/jobsRecruiter-services";

const Container = styled.div`
  display: flex;
`;

function AuthenticatedApp() {
  const { user, recruiter } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (user) {
    }
    if (recruiter) {
      getJobsRecruiter().then(setJobs).catch(console.log);
    }
  }, [recruiter, user]);

  let filterJobs = jobs;

  if (filter === "closed") {
    filterJobs = jobs?.filter((elem) => elem.state.toLowerCase() === filter);
  }

  if (filter === "ontrack") {
    filterJobs = jobs?.filter(
      (elem) =>
        elem.applications_jobs.filter((elem) => elem.status === "review")
          .length > 0
    );
  }

  function handleFilter(event) {
    setFilter(event.target.value);
  }

  function searchJob(id) {
    return jobs.find((elem) => elem.id === id);
  }

  function handleJob(data, id) {
    updateJob(data, id);
    let newjobs = jobs.filter((elem) => elem.id !== id);

    let job = searchJob(id);
    job.state = "closed";

    newjobs.push(job);

    setJobs(newjobs);
  }

  return (
    <Container>
      {user ? (
        ""
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path={"/home"} element={<Search />} />
            <Route path={"/profile"} element={<ProfileRecruiter />} />
            <Route
              path={"/jobs"}
              element={
                <JobsPage
                  handleFilter={handleFilter}
                  jobs={filterJobs}
                  handleState={handleJob}
                />
              }
            />
            <Route
              path={"/jobs/:id"}
              element={<JobPage />}
              findJob={searchJob}
            />
          </Routes>
        </>
      )}
    </Container>
  );
}

export default AuthenticatedApp;
