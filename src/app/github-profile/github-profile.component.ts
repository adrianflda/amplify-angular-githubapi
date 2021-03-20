import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../services/github-api.service';
import { User } from '../models/user.model';
@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css'],
})
export class GithubProfileComponent implements OnInit {
  user = {
    avatar_url: "https://avatars.githubusercontent.com/u/43890295?v=4",
    bio: null,
    blog: "",
    company: null,
    created_at: "2018-10-05T17:27:57Z",
    email: null,
    events_url: "https://api.github.com/users/adrianflda/events{/privacy}",
    followers: 1,
    followers_url: "https://api.github.com/users/adrianflda/followers",
    following: 0,
    following_url: "https://api.github.com/users/adrianflda/following{/other_user}",
    gists_url: "https://api.github.com/users/adrianflda/gists{/gist_id}",
    gravatar_id: "",
    hireable: true,
    html_url: "https://github.com/adrianflda",
    id: 43890295,
    location: null,
    login: "adrianflda",
    name: "Bismay",
    node_id: "MDQ6VXNlcjQzODkwMjk1",
    organizations_url: "https://api.github.com/users/adrianflda/orgs",
    public_gists: 0,
    public_repos: 4,
    received_events_url: "https://api.github.com/users/adrianflda/received_events",
    repos_url: "https://api.github.com/users/adrianflda/repos",
    site_admin: false,
    starred_url: "https://api.github.com/users/adrianflda/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/adrianflda/subscriptions",
    twitter_username: "adrianflda",
    type: "User",
    updated_at: "2021-03-18T14:41:32Z",
    url: "https://api.github.com/users/adrianflda",
  };
  constructor(private githubApiService: GithubApiService) {}

  async ngOnInit(): Promise<void> {
    const { data } = await this.githubApiService.getUser('adrianflda');
    console.log(data);
    this.user = data
  }
}
