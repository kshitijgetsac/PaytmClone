import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
export function Dashboard() {
  return (
    <div>
      <AppBar></AppBar>
      <div className="m-8">
        <Balance value={"10000"}></Balance>
      </div>
      <Users></Users>
    </div>
  );
}
