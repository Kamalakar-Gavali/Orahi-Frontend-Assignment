import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      {props.isLoggedIn && (
        <div className="logout-wrapper">
          <button
            type="button"
            className="input-style logout-btn"
            onClick={() => props.setIsLoggedIn(false)}
          >
            Logout
          </button>
        </div>
      )}
      <h1>You are on Home Screen</h1>
      {props.isLoggedIn ? (
        <>
          <div className="bar-container">
            {props.fetchData.data.map((result, index) => (
              <div className="bar-wrapper" key={index}>
                <div className="bar" style={{ height: result.stat + "px" }}>
                  {result.stat}
                </div>
                <span>{[...result.month].slice(0, 3)}</span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2>You have not login first login</h2> <Link to="/Orahi-Frontend-Assignment">here</Link>
        </>
      )}
      {/* {console.log(props.fetchData.data[0].month)} */}
    </>
  );
};
export default Home;
