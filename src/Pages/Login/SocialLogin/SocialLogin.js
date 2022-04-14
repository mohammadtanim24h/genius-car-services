import React from "react";
import googleLogo from '../../../images/google.png';

const SocialLogin = () => {
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
            <div className="text-center mb-3">
                <button className="btn btn-outline-primary">
                    <img src={googleLogo} className="me-2" alt="" />
                    Continue With Google
                </button>
            </div>
            <div className="text-center mb-3">
                <button className="btn btn-outline-primary py-2">
                    <i className="fa-brands fa-facebook me-2"></i>
                    Continue With Facebook
                </button>
            </div>
            <div className="text-center">
                <button className="btn btn-outline-dark py-2">
                    <i className="fa-brands fa-github me-2"></i>
                    Continue With Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
