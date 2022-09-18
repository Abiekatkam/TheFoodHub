import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../utils/DataImport";
import axios from "axios";

// images
import Login1 from "../assets/login1.svg";

function LoginUserPage() {
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
    email: "",
    password: "",
    googleId: "",
  });

  // useEffect(() => {
  //   if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
  //     navigate("/course-overview");
  //   }
  // }, []);

  // // Functions

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      // console.log(loginRoute);
      const { password, email } = values;
      const { data } = await axios.post(loginRoute, {
        password,
        email,
      });

      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );
        toast.success("Login success", toastOptions);
        navigate("/");
      }
    }
  };

  const handleValidation = () => {
    const { password, email } = values;
    if (password === "") {
      toast.error("Email and password is required.", toastOptions);
      return false;
    } else if (email === "") {
      toast.error("Email and password is required.", toastOptions);
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
      <LoginUserSection>
        <div className="container col-xl-10 col-xxl-8 px-4 py-4">
          <a href="/" className="prev-page ">
            BackToPage
          </a>
          <div className="row align-items-center g-lg-5 py-4">
            <div className="col-lg-7 text-center text-lg-start">
              <h1 className="headline1 fw-bold lh-1 mb-3">
                The Food Hub, Welcomes you back!
              </h1>
              <p className="col-lg-10 fs-4">
                <img src={Login1} alt="image1" className="login-image w-100" />
              </p>
            </div>
            <div className="col-md-10 mx-auto col-lg-5">
              <form
                className="p-4 p-md-5 rounded-3 form-bg shadow-lg"
                onSubmit={(e) => handleSubmit(e)}
              >
                <h2 className="headline3">Login and start ordering.</h2>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control input-ideal"
                    id="floatingInput"
                    placeholder="name@example.com"
                    onChange={(e) => handleChange(e)}
                    name="email"
                    min="3"
                  />
                  <label for="floatingInput">Email address</label>
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
                  <label for="floatingPassword">Password</label>
                </div>
                <button
                  className="w-100 btn btn-lg next-page d-block"
                  type="submit"
                >
                  Log in
                </button>
                <hr className="my-2" />

                <small className="text-muted">
                  Don't have an account?
                  <a href="register" className="link-page">
                    Register here.
                  </a>
                </small>
              </form>
            </div>
          </div>
        </div>
      </LoginUserSection>
      <ToastContainer />
    </>
  );
}

const LoginUserSection = styled.section`
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
    color: var(--green);
    text-decoration: none;
  }
`;

export default LoginUserPage;
