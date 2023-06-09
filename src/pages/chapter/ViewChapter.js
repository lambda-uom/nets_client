import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const ViewChapter = () => {
  const [chapters, setChapters] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:1337/chapters/showAllChapters")
      .then(function (response) {
        const filteredChapters = response.data.filter(chapter => chapter.depID !== null && chapter.status === "active");
        setChapters(filteredChapters);
      });
  }, []);

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const departmentNames = chapters.reduce((acc, chapter) => {
    if (!acc.includes(chapter.depID?.depName)) {
      acc.push(chapter.depID?.depName);
    }
    return acc;
  }, []);

  const filteredChapters = selectedDepartment
    ? chapters.filter((chapter) => chapter.depID?.depName === selectedDepartment)
    : chapters;

  return (
    <React.Fragment>
      <div className="container">
        <div className="alert mt-3 heading"><h5>View Chapters</h5></div>
        <br></br>
        <div className="mb-3">
          <label htmlFor="department-select" className="form-label">
            Filter by department:
          </label>
          <select
            id="department-select"
            className="form-select"
            value={selectedDepartment}
            onChange={handleDepartmentChange}
          >
            <option value="">All departments</option>
            {departmentNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
          <hr className="mt-3"></hr>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Chapter name</th>
              <th scope="col">Related department</th>
              <th scope="col">Created by</th>
            </tr>
          </thead>
          <tbody>
            {filteredChapters.map((chapter) => (
              <tr className="align-middle" key={chapter._id}>
                <th scope="row">{chapter._id}</th>
                <td>{chapter.chapterName}</td>
                <td>{chapter.depID?.depName}</td>
                <td>{chapter.createdBy?.firstName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default ViewChapter;