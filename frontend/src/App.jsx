import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn } from "./components/SignIn.jsx";
import { SignUp } from "./components/SignUp.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing></Landing>}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
function Landing() {
  return <div>Welcome to Paytm</div>;
}
export default App;
