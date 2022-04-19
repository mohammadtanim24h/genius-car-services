import { async } from "@firebase/util";
import React, { useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import titleHelmet from '../../../titleHelmet';

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    };

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
            console.log(user);
        }
    }, [user]);

    let errorElement;
    if (error) {
        errorElement = (
            <p className="text-danger text-center">{error.message}</p>
        );
    }

    // password reset hook
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if(!email){
            toast('Please enter an email');
            return;
        }
        await sendPasswordResetEmail(email);
        toast('Password Reset Email Sent');
    };

    // a way to set title dynamically besides react helmet async
    // useEffect(() => {
    //     document.title = "Login Page"
    // }, [])

    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div className="container w-50 mx-auto border border-2 rounded px-4 py-2 my-3">
            <PageTitle title="Login"></PageTitle>
            {/* {titleHelmet("Login")} */}
            <h2 className="text-primary text-center">Login</h2>
            {errorElement}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        ref={emailRef}
                        type="email"
                        placeholder="Enter email"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        ref={passwordRef}
                        type="password"
                        placeholder="Password"
                        required
                    />
                </Form.Group>

                <Button
                    className="w-50 mx-auto d-block"
                    variant="primary"
                    type="submit"
                >
                    Login
                </Button>
            </Form>
            <p className="mt-4">
                New to Genius Car Services?{" "}
                <Link
                    className="text-primary text-decoration-none"
                    to="/register"
                >
                    Register
                </Link>
            </p>

            <p>
                Forgot Password?{" "}
                <span
                    style={{ cursor: "pointer" }}
                    className="text-primary"
                    onClick={resetPassword}
                >
                    Reset Password
                </span>
            </p>
            <SocialLogin></SocialLogin>

            {/* Toast Container */}
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;
