import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { GithubCommitsComponent } from './github-commits/github-commits.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubApiComponent } from './github-api/github-api.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GithubCommitsComponent,
    GithubProfileComponent,
    GithubApiComponent,
    ToolbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatIconModule, MatToolbarModule, MatDividerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
