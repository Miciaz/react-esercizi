import useSWR from 'swr';

export function useGithubUserSwrFetcher(username) {
  if (!username) {
    return { data: null, error: null, loading: false, refetch: () => {} };
  }

  const { data, error, mutate } = useSWR(`github-user-${username}`, async () => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    return response.json();
  });

  return { data, error, loading: !data && !error, refetch: mutate };
}