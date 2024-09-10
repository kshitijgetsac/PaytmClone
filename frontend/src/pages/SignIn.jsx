import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export function SignIn() {
  const [username, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  async function signInbutton() {
    const response = await axios.post(
      "http://localhost:3000/api/v1/user/signin",
      {
        username,
        password,
      }
    );
    try {
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch {
      alert("invalid credentials");
    }
  }
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox
            placeholder="johndoe@example.com"
            label={"Email"}
            onChange={(e) => setuserName(e.target.value)}
          />
          <InputBox
            placeholder="123456"
            label={"Password"}
            type={"password"}
            onChange={(e) => setpassword(e.target.value)}
          />
          <div className="pt-4">
            <Button label={"Sign in"} onClick={signInbutton} />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign Up"}
            to={"/signup"}
          ></BottomWarning>
        </div>
      </div>
    </div>
  );
}
