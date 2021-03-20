interface UserData {
  avatar_url: string;
  bio: string | null;
  blog: string;
  company: string | null;
  created_at: string;
  email: string | null;
  events_url: string;
  followers: string | boolean;
  followers_url: string;
  following: string | boolean;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: string | boolean;
  html_url: string;
  id: string | number;
  location: string | null;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: string | number;
  public_repos: string | number;
  received_events_url: string;
  repos_url: string;
  site_admin: string | boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: string;
  type: string;
  updated_at: string;
  url: string;
}

export class User implements UserData{
  public avatar_url: string = '';
  public bio: string | null = '';
  public blog: string = '';
  public company: string | null = '';
  public created_at: string = '';
  public email: string | null = '';
  public events_url: string = '';
  public followers: string | boolean = '';
  public followers_url: string = '';
  public following: string | boolean = '';
  public following_url: string = '';
  public gists_url: string = '';
  public gravatar_id: string = '';
  public hireable: string | boolean = '';
  public html_url: string = '';
  public id: string | number = '';
  public location: string | null = '';
  public login: string = '';
  public name: string = '';
  public node_id: string = '';
  public organizations_url: string = '';
  public public_gists: string | number = '';
  public public_repos: string | number = '';
  public received_events_url: string = '';
  public repos_url: string = '';
  public site_admin: string | boolean = '';
  public starred_url: string = '';
  public subscriptions_url: string = '';
  public twitter_username: string = '';
  public type: string = '';
  public updated_at: string = '';
  public url: string = '';

  constructor(data?: UserData) {
    Object.assign(this, data)
  }
}
