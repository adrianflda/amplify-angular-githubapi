import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubCommitsComponent } from './github-commits/github-commits.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubApiComponent } from './github-api/github-api.component';

const routes: Routes = [
  { path: 'github-profile', component: GithubProfileComponent },
  { path: '', redirectTo: '/github-profile', pathMatch: 'full' },
  { path: 'github-commits', component: GithubCommitsComponent },
  { path: 'github-api', component: GithubApiComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
