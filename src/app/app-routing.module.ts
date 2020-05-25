import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HigherOrderComponent } from './higher-order/higher-order.component';
import { withRouteInput } from './higher-order/withRouteInput';


const routes: Routes = [
  {
    path: 'hoc',
    component: withRouteInput(HigherOrderComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
