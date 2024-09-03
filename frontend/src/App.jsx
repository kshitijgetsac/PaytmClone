import { useState } from "react";
import { SignUp } from "./components/Signup.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SignUp></SignUp>
    </>
  );
}

export default App;
