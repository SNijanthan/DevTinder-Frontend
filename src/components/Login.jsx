import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const result = await axios.post(
        "http://localhost:3000/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      // Adding data to redux store
      dispatch(addUser(result.data));
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };
  return (
    <>
      <div className="w-1/4 m-auto mt-28">
        <div className="card bg-sky-800 text-primary-content w-96">
          <div className="card-body">
            <h2 className="card-title font-bold justify-center">Login</h2>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="text-base text-white label-text">
                  Email address
                </span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs text-white"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="text-base text-white label-text">
                  Password
                </span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs text-white"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </label>
            <div className="card-actions">
              <button
                className="btn w-full mt-5 hover:text-orange-700 bg-black"
                onClick={handleLogin}
              >
                Login In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
