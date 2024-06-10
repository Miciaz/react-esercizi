import useSWR from 'swr';

export function useGithubUser(username) {
  if (!username) {
    return { data: null, error: null, loading: false };
  }

  const { data, error } = useSWR(`github-user-${username}`, async () => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    return response.json();
  });

  return { data, error, loading: !data && !error };
}