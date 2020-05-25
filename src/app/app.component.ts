import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Webplatform FG - Ivy</h1>

  <button (click)="onClicked()">Add lazy loaded component</button>

  <ng-template #vcr></ng-template>

  <router-outlet></router-outlet>
  `
})
export class AppComponent {

  @ViewChild('vcr', {read: ViewContainerRef}) vcr: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  async onClicked() {
    const infoComp = await import( /* webpackChunkName: 'info-cmp' */ './information/information.component');
    const factory = this.componentFactoryResolver.resolveComponentFactory(infoComp.InformationComponent);
    const comp = this.vcr.createComponent(factory);
  }

}
