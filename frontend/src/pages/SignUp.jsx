import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export function SignUp() {
  const [username, setUsername] = useState("");
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function buttonSignup() {
    console.log("here in signup ");
    const response = await axios.post(
      "http://localhost:3000/api/v1/user/signup",
      {
        username,
        firstname,
        lastname,
        password,
      }
    );
    const token = response.data.token;
    console.log(token);
    localStorage.setItem("token", token);
    navigate("/dashboard");
  }
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2">
          <Heading label={"SignUp"}></Heading>
          <SubHeading
            label={"Enter your information to create an account"}
          ></SubHeading>
          <InputBox
            label={"First Name"}
            placeholder={"John"}
            onChange={(e) => {
              setfirstName(e.target.value);
            }}
          ></InputBox>
          <InputBox
            label={"Last Name"}
            placeholder={"Doe"}
            onChange={(e) => {
              setlastName(e.target.value);
            }}
          ></InputBox>
          <InputBox
            label={"Email"}
            placeholder={"johndoe@example.com"}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></InputBox>
          <InputBox
            label={"Password"}
            type={"password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></InputBox>
          <Button label={"Sign Up"} onClick={buttonSignup}></Button>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Login"}
            to={"/signin"}
          ></BottomWarning>
        </div>
      </div>
    </div>
  );
}
