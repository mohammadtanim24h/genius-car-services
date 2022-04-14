import React, { useEffect } from "react";
import {
    useSignInWithGithub,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import googleLogo from "../../../images/google.png";

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGit, loadingGit, errorGit] =
        useSignInWithGithub(auth);
    useEffect(() => {
        if (user || userGit) {
            navigate("/");
        }
    }, [user, userGit]);
    let errorElement;
    if (error || errorGit) {
        errorElement = (
            <div>
                <p className="text-danger text-center">
                    Error: {error?.message} {errorGit?.message}
                </p>
            </div>
        );
    }
    let loadingElement;
    if (loading) {
        loadingElement = <p className="text-center">Loading...</p>;
    }
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center my-3">
                <div
                    style={{
                        height: "1px",
                        width: "40%",
                        backgroundColor: "lightgray",
                    }}
                ></div>
                <div className="mx-2">Or</div>
                <div
                    style={{
                        height: "1px",
                        width: "40%",
                        backgroundColor: "lightgray",
                    }}
                ></div>
            </div>
            {loadingElement}
            {errorElement}
            <div className="text-center mb-3">
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-outline-primary w-50"
                >
                    <img src={googleLogo} className="me-2" alt="" />
                    Continue With Google
                </button>
            </div>
            <div className="text-center mb-3">
                <button className="btn btn-outline-primary w-50 py-2">
                    <i className="fa-brands fa-facebook me-2"></i>
                    Continue With Facebook
                </button>
            </div>
            <div className="text-center">
                <button
                    onClick={() => signInWithGithub()}
                    className="btn btn-outline-dark w-50 py-2"
                >
                    <i className="fa-brands fa-github me-2"></i>
                    Continue With Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
