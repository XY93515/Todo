import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Multiavatar from '@multiavatar/multiavatar';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const generateAvatar = () => {
    const avatarSVG = Multiavatar(name);
    return `data:image/svg+xml,${encodeURIComponent(avatarSVG)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const avatar = generateAvatar();
      const res = await axios.post("http://localhost:8000/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        avatar,
      });

      if (res.data && res.data.success) {
        toast.success("Registration successful. Please log in.");
        navigate("/login");
      } else {
        toast.error(res.data ? res.data.message : "Registration failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };


const styles = `
  .register-container {
    background-image: url('/images/nn.jpg'); /* Add the path to your background image */
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0; /* Remove any default margin */
  }

  .registration-form-container {
    width: 600px;
    padding: 20px; /* Add padding to the form container */
    background-color: #fff; /* Add background color to the form container */
    border-radius: 8px; /* Add border-radius to the form container */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add box shadow to the form container */
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
    <div style={{ width: "100%", height: "100%" }}>
      <style>{styles}</style>
      <div className="register-container">
        <div className="registration-form-container">
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
            {/* Display the generated avatar just below the heading */}
            <img src={generateAvatar()} alt="Avatar" style={{ width: "100px", height: "100px", borderRadius: "50%", margin: "0 auto 20px", display: "block" }} />
          </div>
          <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
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
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
            REGISTER
          </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
