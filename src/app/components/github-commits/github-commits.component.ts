import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GithubApiService } from '../../services/github-api.service';
import { Commit } from '../../models/commit.model';

@Component({
  selector: 'app-github-commits',
  templateUrl: './github-commits.component.html',
  styleUrls: ['./github-commits.component.css'],
})
export class GithubCommitsComponent implements AfterViewInit {
  displayedColumns: string[] = ['date', 'author', 'message', 'url'];
  dataSource: MatTableDataSource<Commit> = new MatTableDataSource<Commit>([]);

  constructor(private githubApiService: GithubApiService) {}

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  async ngAfterViewInit() {
    let commits = [];
    try {
      commits = (await this.githubApiService.listCommits()) || [];
      commits = commits.map((c: any) => Commit.convert(c));
    } catch (error) {
      console.log(error);
      alert(error)
    }
    this.dataSource = new MatTableDataSource<Commit>(commits);
    this.dataSource.paginator = this.paginator;
  }

}
