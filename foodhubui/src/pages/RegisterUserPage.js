import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../utils/DataImport";
import axios from "axios";

// images
import Register from "../assets/register.svg";

function RegisterUserPage() {
  // React Use Case
  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  // useEffect(() => {
  //   if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
  //     toast.success("Registration success", toastOptions);
  //     navigate("/categories");
  //   }
  // }, []);

  // Functions

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      // console.log(registerRoute);
      const { password, username, email } = values;
      const { data } = await axios.post(registerRoute, {
        username,
        password,
        email,
      });

      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        toast.success(data.msg, toastOptions);
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );
        navigate("/");
      }
    }
  };

  const handleValidation = () => {
    const { password, username, email } = values;
    if (username.length < 3) {
      toast.error("Enter valid username.", toastOptions);
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Return values

  return (
    <>
      <RegisterUserSection>
        <div className="container col-xl-10 col-xxl-8 px-4 py-4">
          <a href="/" className="prev-page ">
            BackToPage
          </a>
          <div className="row align-items-center g-lg-5 py-4">
            <div className="col-md-10 mx-auto col-lg-5">
              <form
                className="p-4 p-md-5 rounded-3 form-bg shadow-lg"
                onSubmit={(e) => handleSubmit(e)}
              >
                <h2 className="headline3">Register and have fun on delivery</h2>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control input-ideal"
                    id="floatingInput"
                    placeholder="abc"
                    name="username"
                    onChange={(e) => handleChange(e)}
                  />
                  <label htmlFor="floatingInput">Full Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control input-ideal"
                    id="floatingInputEmail"
                    placeholder="name@example.com"
                    name="email"
                    onChange={(e) => handleChange(e)}
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control input-ideal"
                    id="floatingPassword"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => handleChange(e)}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button
                  className="w-100 btn btn-lg next-page d-block"
                  type="submit"
                >
                  Register
                </button>
                <hr className="my-2" />
                <small className="text-muted">
                  Already have an account?{" "}
                  <a href="login" className="link-page">
                    Login here.
                  </a>
                </small>
              </form>
            </div>
            <div className="col-lg-7 text-center text-lg-start">
              <h1 className="headline1 fw-bold lh-1 mb-3">
                Register and order fast!
              </h1>
              <p className="col-lg-10 ">
                <img
                  src={Register}
                  alt="image1"
                  className="login-image w-100"
                />
              </p>
            </div>
          </div>
        </div>
      </RegisterUserSection>
      <ToastContainer />
    </>
  );
}

const RegisterUserSection = styled.section`
  height: 100vh;
  background-color: var(--light-white);

  .login-image {
    height: 450px;
  }

  .headline1 {
    font-size: 3rem;
    color: var(--blue);
    font-family: var(--Ls);
    font-weight: 900;
  }

  .headline3 {
    font-family: var(--PDs);
    font-size: 1.3rem;
    color: var(--blue);
    font-weight: bold;
  }

  .prev-page {
    font-size: 1.2rem;
    color: var(--blue);
    text-decoration: underline;
  }

  .prev-page:hover {
    color: var(--green);
    text-decoration: none;
  }
  .next-page {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--light-white);
    background-color: var(--blue);
  }

  .next-page:hover {
    color: var(--green);
    ${"" /* border: 0; */}
    outline: 0;
  }
  .next-page1 {
    font-size: 1rem;
    color: var(--light-white);
    background-color: var(--blue);
  }

  .next-page1:hover {
    color: var(--green);
    ${"" /* border: 0; */}
    outline: 0;
  }
  .next-page2 {
    font-size: 1rem;
    color: var(--light-white);
    background-color: var(--blue);
  }

  .next-page2:hover {
    color: var(--green);
    ${"" /* border: 0; */}
    outline: 0;
  }

  .log-icon {
    font-size: 1.5rem;
    padding-right: 1rem;
  }

  .form-bg {
    background-color: var(--light-white);
    color: var(--blue);
    border: 3px solid var(--blue);
  }

  .input-ideal {
    outline: 0;
    border: 0;
    background-color: var(--light-white);
    border-bottom: 1px solid var(--blue);
  }

  .input-ideal:focus {
    box-shadow: 0;
    outline: 0;
    border-bottom: 3px solid #273e47;
    background-color: var(--light-white);
  }

  .link-page {
    color: var(--blue);
    font-size: 1rem;
    font-weight: 600;
    text-decoration: underline;
  }

  .link-page:hover {
    text-decoration: none;
    color: var(--green);
  }
`;

export default RegisterUserPage;
