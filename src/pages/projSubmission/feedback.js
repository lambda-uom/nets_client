import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import swal from "sweetalert";
import axios from "axios";

const Feedback = () => {
  const API_BASE = "http://localhost:1337";
  const [employee, setEmployee] = useState([]);

  const currentUser = jwt_decode(
    JSON?.parse(localStorage?.getItem("user"))?.token
  )?.userData?._id;

  useEffect(() => {
    axios
      .get(API_BASE + "/getFeedback/" + currentUser)
      .then((res) => setEmployee(res?.data))
      .catch((error) => {
        if (error?.response && error?.response?.status === 404) {
          // Handle "User not found" error
          swal({
            title: "Error",
            text: error.response.data.error,
            icon: "warning",
            dangerMode: true,
          });
        } else {
          // Handle other errors
          swal({
            title: "Error",
            text: error?.message,
            icon: "warning",
            dangerMode: true,
          });
        }
      });
  }, []);

  return (
    <div>
      {employee?.show ? ( // Checking if the employee data contains true in "show" field
        <div className="container feedback shadow mt-5">
          <h3 className="feedback-title py-3">Project Submission Feedback</h3>
          <div className="feedback-body">
            <>
              <span className="me-1">Project Name</span>
              <span>{employee?.projectName}</span>
            </>
            <>
              <span className="">Score</span>
              <span className="">{employee?.score} / 100</span>
            </>
            <>
              <span className="">Feedback</span>
              <span>{employee?.feedback}</span>
            </>
            <>
              <span className="">Evaluated Time</span>
              <span>{employee?.gradedOn}</span>
            </>
            <>
              <span className="">Graded Supervisor</span>
              <span className="d-flex">
                <img
                  className="img-fluid rounded-circle supervisor-avatar"
                  src={employee?.supervisorImage}
                  alt={employee?.gradedBy}
                />
                <span>{employee?.gradedBy}</span>
              </span>
            </>
          </div>
        </div>
      ) : (
        <div
          className="shadow text-center bg-dark text-light"
          width="90px"
          height="90px"
          style={{ margin: "300px", padding: "20px" }}
        >
          <h4>You are not allowed to view the results</h4>
        </div>
      )}
    </div>
  );
};

export default Feedback;
