import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as Router from '../../app-routing.module';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  links: string[] = [];
  titles: string[] = [];
  activeLink = this.links[0];

  @Output() loadingChange: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor() {
    Router.routes.map((r: any) => {
      if (r.data) {
        this.links.push(r.path);
        this.titles.push(r.data.name);
      }
    });
  }

  selection(link: string) {
    if (this.activeLink !== link) this.loadingChange.emit(new Boolean(true));
    this.activeLink = link;
  }

  ngOnInit(): void {}
}
