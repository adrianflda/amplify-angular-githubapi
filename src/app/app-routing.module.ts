import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubCommitsComponent } from './components/github-commits/github-commits.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { GithubApiComponent } from './components/github-api/github-api.component';

export const routes: Routes = [
  {
    data: { name: 'Profile' },
    path: 'github-profile',
    component: GithubProfileComponent,
  },
  { path: '', redirectTo: '/github-profile', pathMatch: 'full' },
  {
    data: { name: 'Commits' },
    path: 'github-commits',
    component: GithubCommitsComponent,
  },
  {
    data: { name: 'Others' },
    path: 'github-api',
    component: GithubApiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
