import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
export function SignUp() {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2">
          <Heading label={"SignUp"}></Heading>
          <SubHeading
            label={"Enter your information to create an account"}
          ></SubHeading>
          <InputBox label={"First Name"} placeholder={"John"}></InputBox>
          <InputBox label={"Last Name"} placeholder={"Doe"}></InputBox>
          <InputBox
            label={"Email"}
            placeholder={"johndoe@example.com"}
          ></InputBox>
          <InputBox label={"Password"} type={"password"}></InputBox>
          <Button label={"Sign Up"}></Button>
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
