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
    const { data } = await this.octokit.repos.listCommits({
      owner,
      repo,
      sha: 'dev',
    });
    return data;
  }

}
