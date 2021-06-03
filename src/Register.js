import React, { useState } from "react";
import useForm from "react-hook-form";
import * as yup from "yup";
import { api } from "./api/index"
import "./register.css";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";


const SignupSchema = yup.object().shape({
  fullName: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, " Only alphabets are allowed")
    .required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string().required("Confirmation password is required").oneOf([yup.ref('password'), null], 'Passwords must match')
});

export default function Register() {
  const [toggle, setToggle] = useState(false);
  const [role, setRole] = useState("")


  return (
    <div className="col-sm-8  col-lg-7 mx-auto">
      <div className="text-center mt-3">
        <button
          className="btn btn-warning navbar-btn mx-5 my-5 p-2"
          onClick={() => {
            setToggle(true);
            setRole("admin")
          }
          }
        >
          <Link to='/registration/admin'>Admin</Link>
        </button>

        <button
          className="btn btn-warning navbar-btn mx-5 my-5 p-2"
          onClick={() => {
            setToggle(true);
            setRole("user")
          }
          }
        >
          <Link to='/registration/user'>User</Link>
        </button>

      </div>


      {toggle && <RegistrationForm role={role} />}

    </div>
  );
}

export function RegistrationForm({ roleType }) {
  const history = useHistory();

  const [validation, setValidation] = useState("")
  const { register, handleSubmit, errors } = useForm({
    validationSchema: SignupSchema
  });

  const onSubmit = async (data) => {
    const user =
    {
      name: data.fullName,
      email: data.email,
      password: data.password
    }

    api.post(`/api/account/signup/${roleType}`, user)
      .then((res) => {
        alert(`Pizza Paradise : Welcome ${data.fullName}`)
        history.push("/login");
      })
      .catch((error) => {

        if (error.response) {
          setValidation(error.response.data.error)
        } else if (error.request) {
          setValidation("Network Error!! Try again")
        } else if (error.message) {
          console.log(error.message)
        }

      });

  };

  return (
    <div className="App card">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            name="fullName"
            placeholder="Enter Full name"
            ref={register}
          />
        </div>
        {errors.fullName && <p className="error-message">{errors.fullName}</p>}


        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="Enter Mail address"
            type="email"
            ref={register}
          />
        </div>
        {errors.email && <p className="error-message">{errors.email}</p>}

        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            placeholder="Enter Password"
            type="password"
            ref={register}
          />
        </div>
        {errors.password && <p className="error-message">{errors.password}</p>}


        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            name="confirmPassword"
            placeholder="Enter Password again"
            type="password"
            ref={register}
          />
        </div>
        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}

        {validation && <p className="error-message">{validation}</p>}
        <input className="btn btn-warning" type="submit" />

        <p className="mt-3 text-center">Already a user ?
                <Link to="/login" className="text-primary d-inline font-weight-bold">Login here!</Link>
        </p>

      </form>
    </div>
  );
}


