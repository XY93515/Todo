import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const styles = `
    .form-container {
      background-image:url('/images/nn.avif');
      background-size: cover;
      background-position: center;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top: -90px;
    }

    form {
      box-shadow: rgba(248, 194, 194, 0.35) 0px 5px 15px;
      padding: 45px;
      background-color: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(80px);
      width: 400px;
    }

    .title {
      text-align: center;
      margin-bottom: 20px;
    }

    .mb-3 {
      margin-bottom: 15px;
    }

    .form-control {
      width: calc(100% - 20px); /* Adjust width by adding padding to the left and right */
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    .btn-primary {
      background-color: #007bff;
      color: #fff;
      padding: 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .btn-primary:hover {
      background-color: #0056b3;
    }
  `;

  return (
    <div className="form-container">
      <style>{styles}</style>
      <form onSubmit={handleSubmit}>
        <h4 className="title">LOGIN FORM</h4>

        <div className="mb-3">
          <input
            type="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Password"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
