import { useState } from 'react';
import { GithubUser } from './GithubUser';

export function GithubUsers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${searchTerm}`);
      const userData = await response.json();
      setUsers(userData.items);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search for a user"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {loading ? (
          <li>Loading...</li>
        ) : (
          users.map((user) => (
            <li key={user.id}>
              <GithubUser username={user.login} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

