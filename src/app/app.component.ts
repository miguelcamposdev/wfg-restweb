import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WFG - RestAPI for test';

  constructor(@Inject(DOCUMENT) private document: Document) {}
  
  goToGithub() {
    this.document.location.href = 'https://github.com/miguelcamposdev/wfg-restweb';
  }
}
