import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export function Users() {
  const [filter, setFilter] = useState("");
  const [users, setUsers] = useState([]);
  async function getUsersfromBackend() {
    const response = await axios.get("http://localhost:3000/api/v1/user/bulk", {
      params: {
        filter: filter,
      },
    });
    return response.data;
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/user/bulk",
          {
            params: { firstname: filter },
          }
        );

        setUsers(response.data);
      } catch (error) {
        setUsers([]);
        console.error("Error fetching users:", error);
      }
    }
    fetchData();
  }, [filter]);
  return (
    <div className="flex flex-col">
      <div className="text-xl font-medium ml-4">Users</div>
      <input
        className=" flex mt-2 ml-4 border rounded"
        type="text"
        placeholder="Search users ..."
        onChange={(e) => setFilter(e.target.value)}
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
  return (
    <div className="flex justify-between ">
      <div className="flex">
        <div className="ml-4 h-12 w-12 mt-2 rounded-full border bg-slate-200 text-center px-2 py-2">
          {user.firstname[0]}
        </div>
        <div className="mt-2 text-center ml font-medium px-2 py-2">
          {user.firstname + " " + user.lastname}
        </div>
      </div>
      <div>
        <button className="mr-2 bg-black text-white text-sm mt-2 border rounded-lg h-12 w-24">
          Send Money
        </button>
      </div>
    </div>
  );
}
