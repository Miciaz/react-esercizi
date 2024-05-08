import { useGithubUser } from "./useGithubUser";

export function HookGithubUser({ username }) {
  const { data, error, loading } = useGithubUser(username);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h2>There was an error!</h2>}
      {data && <h1>{data.name}</h1>}
      {data && <p>{data.login}</p>}
      {data && <img src={data.avatar_url} alt="immagine avatar" />}
    </div>
  );
}
