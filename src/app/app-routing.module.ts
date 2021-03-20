import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GithubCommitsComponent } from './github-commits/github-commits.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubApiComponent } from './github-api/github-api.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'github-commits', component: GithubCommitsComponent },
  { path: 'github-profile', component: GithubProfileComponent },
  { path: 'github-api', component: GithubApiComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
