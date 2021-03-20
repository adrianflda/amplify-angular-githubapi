import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../../services/github-api.service';
import { User } from '../../models/user.model';
@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css'],
})
export class GithubProfileComponent implements OnInit {
  user: User = new User()
  constructor(private githubApiService: GithubApiService) {}

  async ngOnInit(): Promise<void> {
    const { data } = await this.githubApiService.getUser();
    this.user = new User(data)
  }
}
