import { isNullOrUndefined } from 'util';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(router: Router, title: Title) {
    router.events.subscribe((event) => {
      title.setTitle(router.url.replace('/', '') + ' - CPTUR');
    });
  }
}
