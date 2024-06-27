import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function GitHubUser({ username }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const data = await response.json();
        setUser(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [username]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Name: {user.name}</h2>
      <p>Login: {user.login}</p>
      <img src={user.avatar_url} alt="User Avatar" />
    </div>
  );
}

GitHubUser.propTypes = {
  username: PropTypes.string.isRequired,
};

export default GitHubUser;