import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Webplatform FG - Ivy</h1>

  <button>Add lazy loaded component</button>

  <router-outlet></router-outlet>
  `
})
export class AppComponent {

  constructor() {
  }

}
