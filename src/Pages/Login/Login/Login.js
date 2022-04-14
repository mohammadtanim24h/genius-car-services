import React, { useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    };

    
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user]);

    if (error) {
        console.log(error);
    }
    return (
        <div className="container w-50 mx-auto border border-2 rounded px-4 py-2 my-3">
            <h2 className="text-primary text-center">Login</h2>
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

                <Button variant="primary" type="submit">
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
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;
