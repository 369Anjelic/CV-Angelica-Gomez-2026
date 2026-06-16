import { Octokit } from '@octokit/rest';

const token = process.env.GITHUB_TOKEN;
const username = process.env.GITHUB_USERNAME;

const octokit = new Octokit({
  auth: token,
});

export async function getUserRepos() {
  if (!username) {
    throw new Error('GITHUB_USERNAME not set');
  }

  try {
    const response = await octokit.repos.listForUser({
      username,
      sort: 'updated',
      direction: 'desc',
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching repos:', error);
    return [];
  }
}

export async function getRepoDetails(repoName: string) {
  if (!username) {
    throw new Error('GITHUB_USERNAME not set');
  }

  try {
    const response = await octokit.repos.get({
      owner: username,
      repo: repoName,
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching repo details:', error);
    return null;
  }
}
