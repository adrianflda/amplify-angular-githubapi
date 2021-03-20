import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'amplify-angular-githubapi';
  public loading = false;

  updateLoading(state: Boolean) {
    console.log(state);
    this.loading = state.valueOf();
  }
}
