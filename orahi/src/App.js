import { useEffect, useState } from "react";
import {
  Switch,
  BrowserRouter,
  Link,
  NavLink,
  Route,
  useHistory,
} from "react-router-dom";
import Home from "./Component/Home";
function App() {
  const [mobileNo, setMobileNo] = useState("");
  const [result, setResult] = useState("");
  const [waitMsg, setWaitMsg] = useState("");
  const [error, setError] = useState("");
  const [inputOTP, setInputOTP] = useState("");
  let history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState("");
  const handleGenerateOTPClick = () => {
    console.log("inside handle otp");
    setResult("");
    if (mobileNo !== "" && mobileNo !== null) {
      if (mobileNo.length === 10) {
        setError("");
        setWaitMsg("Wait for OTP....");
      } else {
        setError(`Mobile No Should be of 10 Digit`);
      }
    } else {
      setError(`Mobile No can't be Empty`);
    }
  };
  const validateOTP = () => {
    if (inputOTP === result) {
      alert("Successfully Login");
      setIsLoggedIn(true);
      setResult("");
      setWaitMsg("");
      setError("");
      setInputOTP("");
      setMobileNo("");
    } else {
      setError("OTP Mismatch,Enter exact OTP");
    }
  };

  useEffect(() => {
    console.log("Inside useEffect");
    fetch("https://demo5636362.mockable.io/stats")
      .then((result) => result.json())
      .then((result) => setData(result));
    if (waitMsg !== "") {
      const generateOTP = () => {
        let digits = "0123456789";
        let otp = "";
        for (let i = 0; i < 6; i++) {
          otp += digits[Math.floor(Math.random() * 10)];
        }
        setWaitMsg("");
        setResult(otp);
        alert("Enter otp Displayed on Top");
      };
      setTimeout(generateOTP, 5 * 1000);
    }
  }, [waitMsg]);
  return (
    <main>
      <BrowserRouter history={history}>
        <Switch>
          <Route exact path="/Orahi-Frontend-Assignment">
            <div className="form-wrapper">
              <h1>Login here</h1>

              <div className="form-content">
                <label className="error">{error}</label>
                <label className="result">
                  {waitMsg} {result}
                </label>
                <input
                  type="number"
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                  className="input-style"
                  placeholder="Enter 10 Digit Mobile No here "
                  onFocus={() => setError("")}
                />
                <button
                  type="button"
                  className="input-style btn"
                  onClick={handleGenerateOTPClick}
                >
                  Send OTP
                </button>
                <input
                  type="password"
                  className="input-style"
                  placeholder="Enter OTP here"
                  value={inputOTP}
                  onChange={(e) => setInputOTP(e.target.value)}
                  onFocus={() => setError("")}
                />
                <button
                  type="button"
                  className="input-style btn"
                  onClick={validateOTP}
                >
                  Signin
                </button>
                {isLoggedIn && (
                  <Link to="/home">
                    <button type="button" className="input-style btn">
                      Go To Home
                    </button>{" "}
                  </Link>
                )}
              </div>
            </div>
          </Route>
          <Route exact path="/home">
            <Home
              isLoggedIn={isLoggedIn}
              fetchData={data}
              setIsLoggedIn={setIsLoggedIn}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
