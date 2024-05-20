import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { ShowGithubUser } from "../React-router3/ShowGithubUser";

export function GithubUserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Github Users</h1>
      <Routes>
        <Route index element={<p>Add a user and select it</p>} />
        <Route path=":username" element={<ShowGithubUser />} />
      </Routes>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
}
