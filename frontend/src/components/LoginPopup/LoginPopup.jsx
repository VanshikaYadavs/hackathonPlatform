import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const { setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({ name: "", email: "", password: "", role: "developer" });
  const [error, setError] = useState("");

  const onChangeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setError(""); // Clear previous errors

    try {
      const endpoint = currState === "Login" ? "/api/auth/login" : "/api/auth/register";
      const response = await axios.post(endpoint, data);

      if (response.data.token) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false); // Close popup on success
      }
    } catch (error) {
      setError(error.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onSubmit} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <button onClick={() => setShowLogin(false)}>✖</button>
        </div>

        {error && <p className="error-message">{error}</p>}

        {currState === "Sign Up" && (
          <>
            <div className="login-popup-inputs">
              <input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder="Your Name" required />
              <select name="role" onChange={onChangeHandler} value={data.role}>
                <option value="developer">Developer</option>
                <option value="company">Company</option>
              </select>
            </div>
          </>
        )}
        
        <div className="login-popup-inputs">
          <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="Your Email" required />
          <input name="password" onChange={onChangeHandler} value={data.password} type="password" placeholder="Password" required />
      </div>

        
        <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        
        {currState === "Login" ? (
          <p>New user? <span onClick={() => setCurrState("Sign Up")}>Sign Up</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login</span></p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
