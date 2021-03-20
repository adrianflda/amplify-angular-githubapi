import { Injectable } from '@angular/core';
import { Octokit } from '@octokit/rest';

interface Search {}

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  public octokit = new Octokit();

  constructor() {
    console.log('Api github services');
  }

  async listCommits(
    repo: string | undefined = 'amplify-angular-githubapi',
    owner: string | undefined = 'adrianflda'
  ): Promise<any> {
    try {
      const { data } = await this.octokit.repos.listCommits({
        owner,
        repo,
        sha: 'dev',
      });
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async searchUsers(login: string): Promise<any> {
    try {
      const queryString = `${login} in:login type:user`;
      return this.octokit.request('GET /search/users', {
        q: queryString,
      });
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getUser(username: string | undefined = 'adrianflda'): Promise<any> {
    try {
      return this.octokit.request(`GET /users/${username}`, {
        username
      })
    } catch (error) {
      console.log(error)
    }
  }
}
