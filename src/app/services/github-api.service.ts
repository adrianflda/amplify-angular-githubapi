import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { Octokit } from '@octokit/rest';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  public octokit = new Octokit();

  @Output() loadingChange: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor() {
    console.log('Api github services');
  }

  parseFeatures(source: any, features: string[]) {
    let functionResult = source;
    features.map((f: string) => (functionResult = functionResult[f]));
    return functionResult;
    if (features.length === 1) return source[features[0]];
    else return source[features[0]][features[1]];
  }

  async octokitMiddleware(features: string[], params: any): Promise<any> {
    try {
      this.loadingChange.emit(new Boolean(true));
      const response = await this.parseFeatures(
        this.octokit,
        features
      )(...params);
      return response;
    } catch (error) {
      console.log(error);
      alert(error);
      return null;
    } finally {
      this.loadingChange.emit(new Boolean(false));
    }
  }

  async listCommits(
    repo: string | undefined = environment.repo,
    owner: string | undefined = environment.username
  ): Promise<any> {
    try {
      const { data } = await this.octokitMiddleware(
        ['repos', 'listCommits'],
        [
          {
            owner,
            repo,
            sha: 'dev',
          },
        ]
      );
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async searchUsers(login: string = environment.username): Promise<any> {
    const queryString = `${login} in:login type:user`;
    return this.octokitMiddleware(
      ['request'],
      [
        'GET /search/users',
        {
          q: queryString,
        },
      ]
    );
  }

  async getUser(
    username: string | undefined = environment.username
  ): Promise<any> {
    return this.octokitMiddleware(
      ['request'],
      [
        `GET /users/${username}`,
        {
          username,
        },
      ]
    );
  }

  async getRepo(
    repo: string | undefined = environment.repo,
    owner: string | undefined = environment.username
  ) {
    return this.octokitMiddleware(
      ['repos', 'get'],
      [
        {
          owner,
          repo,
        },
      ]
    );
  }
}
