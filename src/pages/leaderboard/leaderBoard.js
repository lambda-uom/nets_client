import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import rank1 from "../../images/gold.png";
import rank2 from "../../images/silver.png";
import rank3 from "../../images/bronze.png";

const LeaderBoard = () => {
  const API_BASE = "http://localhost:1337";
  const [score, setScore] = useState([]);
  const [rank, setRank] = useState();

  const currentUser =
    // jwt_decode(JSON.parse(localStorage.getItem("user")).token)
    //   .userData._id;
    // jey kumar =
    "64160c4a7fb077053a2042e9";
  // piruthuviraj
  // "6415ebd87fb077053a2042d3";
  // lakshmi
  // "63e492dafcd770ee87359ed8";
  //sagini
  // "63e492acfcd770ee87359ed6";

  useEffect(() => {
    axios
      .get(API_BASE + "/getLeaderboardData/" + currentUser)
      .then((res) => setScore(res.data))
      .catch((err) => console.log(err));
    axios
      .get(API_BASE + "/showbadge/" + currentUser)
      .then((res) => setRank(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(rank);

  return (
    <div>
      <h1 className="py-4 result-head card ps-5"> Leaderboard</h1>
      <div className="container-md bg-light my-lg-3 p-md-4">
        <h2 className="top-gainers">Top Gainers</h2>
        <div className="row m-0 justify-content-center gy-3">
          <div className="col col-12 col-md-12 col-lg-3">
            <div className="card leaderboard-card text-center">
              <div className={`card-header leaderboard-header `}>
                <h2 className="w-100">{score?.lbData?.[0]?.totalScore}</h2>
              </div>
              <div className="leaderboard-avatar-wrapper">
                <img
                  className="img-fluid rounded-circle leaderboard-avatar"
                  src="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title leaderboard-title">
                  {score?.lbData?.[0]?.firstName} {score?.lbData?.[0]?.lastName}
                </h5>
                <hr />
                <div className="d-flex justify-content-around fw-semibold">
                  <span className="card-title leaderboard-desc">
                    {score?.lbData?.[0]?.empId}
                  </span>
                  <span className="card-title leaderboard-desc">
                    {score?.lbData?.[0]?.averageScore}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col col-12 col-md-6 col-lg-3">
            <div className="card leaderboard-card text-center">
              <div className={`card-header leaderboard-header`}>
                <h2 className="w-100">{score?.lbData?.[1]?.totalScore}</h2>
              </div>
              <div className="leaderboard-avatar-wrapper">
                <img
                  className="img-fluid rounded-circle leaderboard-avatar"
                  src="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title leaderboard-title">
                  {score?.lbData?.[1]?.firstName} {score?.lbData?.[1]?.lastName}
                </h5>
                <hr />
                <div className="d-flex justify-content-around fw-semibold">
                  <span className="card-title leaderboard-desc">
                    {score?.lbData?.[1]?.empId}
                  </span>
                  <span className="card-title leaderboard-desc">
                    {score?.lbData?.[1]?.averageScore}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-12 col-md-6 col-lg-3">
            <div className="card leaderboard-card text-center">
              <div className={`card-header leaderboard-header `}>
                <h2 className="w-100">{score?.lbData?.[2]?.totalScore}</h2>
              </div>
              <div className="leaderboard-avatar-wrapper">
                <img
                  className="img-fluid rounded-circle leaderboard-avatar"
                  src="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title leaderboard-title">
                  {score?.lbData?.[2]?.firstName} {score?.lbData?.[2]?.lastName}
                </h5>
                <hr />
                <div className="d-flex justify-content-around fw-semibold">
                  <span className="card-title leaderboard-desc">
                    {score?.lbData?.[2]?.empId}
                  </span>
                  <span className="card-title leaderboard-desc">
                    {score?.lbData?.[2]?.averageScore}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-5">
          {rank < 3 && (
            <img
              src={
                rank === 0
                  ? rank1
                  : rank === 1
                  ? rank2
                  : rank === 2
                  ? rank3
                  : ""
              }
              className=" rank-badge mt-6 ms-5"
              draggable="false"
            />
          )}
          {score?.lbData?.[0]?.totalScore !== score?.currentUserScore && (
            <div className=" d-flex justify-content-center ">
              <div class="score-alert alert alert-info ms-5" role="alert">
                You Need
                <span className="text-primary fw-bold">
                  {" "}
                  {(
                    score?.lbData?.[0]?.averageScore - score?.currentUserScore
                  ).toFixed(2)}{" "}
                </span>
                score on average to beat
                <span className="text-primary">
                  {" "}
                  {score?.lbData?.[0]?.firstName} {score?.lbData?.[0]?.lastName}
                </span>
              </div>
            </div>
          )}
        </div>

        <img src={rank1} className="badge ms-5" draggable="false" />
        <div className="leaderboard-table-wrapper">
          <h4 className="top-gainers">All Employees</h4>
          <table className="table leaderboard-table">
            <thead>
              <tr className="table-head">
                <th className="leaderboard-empId leaderboard-th">ID</th>
                <th className="leaderboard-th align-middle text-center">
                  Name
                </th>
                <th className="leaderboard-th align-middle text-center">
                  Total score
                </th>
                <th className="leaderboard-th align-middle text-center">
                  Average score
                </th>
                <th className="leaderboard-th align-middle text-center">
                  Rank
                </th>
              </tr>
            </thead>
            <tbody>
              {score?.lbData?.map(
                (emp, index) =>
                  index > 2 && (
                    <tr className="leaderboard-tr">
                      <td className="leaderboard-td align-middle text-center">
                        <div className="d-flex align-items-center h-100">
                          <img
                            className="img-fluid rounded-circle leaderboard-table-avatar"
                            src="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg"
                          />
                          <div className="d-flex flex-column px-3">
                            <span className="text-start leaderboard-table-name">
                              {emp.empId}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="leaderboard-td align-middle text-center">
                        {emp.firstName} {emp.lastName}
                      </td>
                      <td className="leaderboard-td align-middle text-center">
                        {emp.totalScore}
                      </td>
                      <td className="leaderboard-td align-middle text-center">
                        {emp.averageScore.toFixed(2)}
                      </td>
                      <td className="leaderboard-td align-middle text-center">
                        {score?.lbData?.indexOf(emp) + 1}
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;