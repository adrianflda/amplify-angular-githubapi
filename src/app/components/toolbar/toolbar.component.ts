import { Component, OnInit } from '@angular/core';
import * as Router from '../../app-routing.module';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  links: string[] = [];
  titles: string[] = [];
  activeLink = this.links[1];

  constructor() {
    Router.routes.map((r: any) => {
      if (r.data) {
        this.links.push(r.path)
        this.titles.push(r.data.name)
      }
    });
  }

  ngOnInit(): void {}
}
