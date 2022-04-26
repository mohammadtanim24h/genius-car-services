import React, { useEffect } from "react";
import {
    useSignInWithGithub,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";
import googleLogo from "../../../images/google.png";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGit, loadingGit, errorGit] =
        useSignInWithGithub(auth);
    
    // token
    const [token] = useToken(user || userGit);
    
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
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
    if (loading || loadingGit) {
        return <Loading></Loading>;
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
