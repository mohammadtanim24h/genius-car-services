import React from "react";
import {
    useAuthState,
    useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const RequireAuth = ({ children }) => {
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const [user, loading] = useAuthState(auth);
    console.log(user);
    const location = useLocation();
    console.log(user);
    if (loading) {
        return <Loading></Loading>; //login e gele to fire ashe na kintu loading component dekhanor pore abar render hoy kibhabe? login onno ekta route eijonno? Yes
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (!user.emailVerified) {
        return (
            <div>
                <h2 className="text-danger text-center">
                    Your email is not verified
                </h2>
                <h3 className="text-center text-primary">
                    Please verify your email to access this page
                </h3>
                <div className="text-center">
                    <p>Didn't receive the email? </p>
                    <button
                        onClick={async () => {
                            await sendEmailVerification();
                            toast("Sent email");
                        }}
                        className="btn btn-primary"
                    >
                        Send Again
                    </button>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        );
    }

    return children;
};

export default RequireAuth;
