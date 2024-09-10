import { useState } from "react";
import { Link } from "react-router-dom";
export function Users() {
  const [users, setUsers] = useState([
    {
      firstName: "Kshitij",
      lastName: "Taneja",
      _id: 1,
    },
  ]);
  return (
    <div className="flex flex-col">
      <div className="text-xl font-medium ml-4">Users</div>
      <input
        className=" flex mt-2 ml-4 border rounded"
        type="text"
        placeholder="Search users ..."
      />
      <div>
        {users.map((user) => (
          <User user={user} />
        ))}
      </div>
    </div>
  );
}
function User({ user }) {
  function revertoSendMoney() {}
  return (
    <div className="flex justify-between ">
      <div className="flex">
        <div className="ml-4 h-12 w-12 mt-2 rounded-full border bg-slate-200 text-center px-2 py-2">
          {user.firstName[0]}
        </div>
        <div className="mt-2 text-center ml font-medium px-2 py-2">
          {user.firstName + " " + user.lastName}
        </div>
      </div>
      <div>
        <button
          onClick={revertoSendMoney}
          className="mr-2 bg-black text-white text-sm mt-2 border rounded-lg h-12 w-24"
        >
          Send Money
        </button>
      </div>
    </div>
  );
}
