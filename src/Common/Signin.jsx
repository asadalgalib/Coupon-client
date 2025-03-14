import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { signInWithPopup, signInAnonymously } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const { user, setUser, setLoading, auth, provider } = useContext(AuthContext);
    const navigate = useNavigate();

    const googleLogin = () => {
        if (user) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You are already loged in!",
            });
        }

        signInWithPopup(auth, provider)
            .then(res => {
                if (res.user) {
                    setUser(res.user);
                    setLoading(false);
                    navigate("/");
                }
                console.log(res.user);
            })
            .catch(err => {
                console.log(err.code);
            })
    }

    const handleAnynomouse = () => {
        if (user) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You are already loged in!",
            });
        }

        signInAnonymously(auth)
            .then(res => {
                console.log(res.user);
                navigate('/');
            })
            .catch(err => {
                console.log(err.code);
            })
    }

    return (
        <div className="flex min-h-[100vh] py-14 flex-col items-center justify-center gap-6 bg-base-200">
            <div className="flex w-full max-w-md flex-col gap-6">
                <div className="flex flex-col gap-4 bg-white py-20 px-20 rounded">
                    <button onClick={googleLogin} id="login" className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                            <path fill="#fff" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                        </svg>
                        <span>Sign in with Google</span>
                    </button>
                    <button onClick={handleAnynomouse} id="login" className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                            <path fill="currentColor" d="M12 12c2.76 0 5-2.24 5-5S14.76 2 12 2 7 4.24 7 7s2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z" />
                        </svg>
                        <span>Continue as Guest</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signin;