/**
 * Search GitHub users by query string.
 *
 * @param {string} query - Search query to send to the GitHub users search API.
 * @returns {Promise<Array>} A list of matching GitHub user objects.
 * @throws {Error} If the GitHub API request fails.
 */
export async function searchGithubUsers(query) {
  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `GitHub user search failed (${response.status} ${response.statusText})`
    );
  }

  const data = await response.json();
  return Array.isArray(data?.items) ? data.items : [];
}
