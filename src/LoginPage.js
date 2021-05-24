import React, { useState } from "react";
import useForm from "react-hook-form";
import * as yup from "yup";
import { api } from "./api/index";
import { Link, useHistory } from "react-router-dom";
import "./register.css";



const SignupSchema = yup.object().shape({

    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required")
});

export function LoginForm({ setAdmin, setAuthentication }) {

    const history = useHistory();
    const [validationMessage, setValidationMessage] = useState("")

    const { register, handleSubmit, errors } = useForm({
        validationSchema: SignupSchema
    });

    const onSubmit = async (data) => {
        const user =
        {
            email: data.email,
            password: data.password
        }
        await api.post("/api/account/signin", user)
            .then((res) => {
                console.log(res)
                localStorage.setItem("ACCESS_TOKEN", res.data.accessToken);

                setAuthentication(true)
                res.data.user.role === "admin" ? setAdmin(true) : setAdmin(false);

                history.push("/menu");


            })
            .catch((err) => {
                setValidationMessage(err.response.data.message)
                console.log(err.response)
            });

    };


    return (

        <div className="App">
            <form onSubmit={handleSubmit(onSubmit)}>
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
                {validationMessage && <p className="error-message">{validationMessage}</p>}
                <input className="btn btn-warning" type="submit" value="Login" />
                <p className="mt-3 text-center">Not a user ?
                <Link to="/registration" className="text-primary d-inline font-weight-bold">Register here!</Link>
                </p>
            </form>

        </div>
    );
}


