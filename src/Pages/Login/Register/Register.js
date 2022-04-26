import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";
import useToken from "../../../hooks/useToken";

const Register = () => {
    // conditional rendering of checkbox and register button
    const [agree, setAgree] = useState(false);

    // create user
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });

    //update profile funtion
    const [updateProfile, updating] = useUpdateProfile(auth);
    
    // token
    const [token] = useToken(user);

    // register
    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        
    };

    const navigate = useNavigate();
    // navigate when user is created successfully
    useEffect(() => {
        if (token) {
            navigate("/");
        }
    }, [token]);

    if (error) {
        console.log(error);
    }
    if(loading) {
        return <Loading></Loading>;
    }
    return (
        <div className="container w-50 mx-auto border border-2 rounded px-4 py-2 my-3">
            <h2 className="text-primary text-center">Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter Name (Optional)"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    {/* <Form.Check className={agree ? 'text-primary' : 'text-danger'} onClick={() => setAgree(!agree)} type="checkbox" name="terms" label="I have read and agree to the Terms and Conditions and Privacy Policy"/> */}
                    <Form.Check
                        className={`ms-2 ${agree ? "" : "text-danger"}`}
                        onClick={() => setAgree(!agree)}
                        type="checkbox"
                        name="terms"
                        label="I have read and agree to the Terms and Conditions and Privacy Policy"
                    />
                </Form.Group>
                <Button
                    className="w-50 mx-auto d-block"
                    variant="primary"
                    type="submit"
                    disabled={!agree}
                >
                    Register
                </Button>
            </Form>
            <p className="mt-4">
                Already Have An Account?{" "}
                <Link className="text-primary text-decoration-none" to="/login">
                    Login
                </Link>
            </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;
