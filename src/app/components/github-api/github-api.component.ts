import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../../services/github-api.service';
import { Repo } from '../../models/repo.model';

@Component({
  selector: 'app-github-api',
  templateUrl: './github-api.component.html',
  styleUrls: ['./github-api.component.css'],
})
export class GithubApiComponent implements OnInit {
  repo: Repo = new Repo();
  constructor(private githubApiService: GithubApiService) {}

  async ngOnInit(): Promise<void> {
    const { data } = await this.githubApiService.getRepo();
    this.repo = data;
    console.log(this.repo);
  }
}
