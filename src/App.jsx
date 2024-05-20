import { Link, Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import Counter from "./State-2_Refs/Counter";
import { ShowGithubUser } from "./React-router3/ShowGithubUser";
import { GithubUserList } from "./React-Router6/GithubUserList";

export function App() {
  const username = 'Miciaz'
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name="Rossella" age={30} />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="users/:username" element={<ShowGithubUser />} />
        <Route path="/users">
          <Route index element={<GithubUserList />} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
        {/* render della pagina 404 */}
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
      <Link to="/">Go to the welcome page</Link>
      <Link to="/counter">Got to Counter</Link>
      <Link to={`/users/${username}`}>Go to username page</Link>
    </div>
  );
}
