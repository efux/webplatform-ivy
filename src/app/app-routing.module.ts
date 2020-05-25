import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HigherOrderComponent } from './higher-order/higher-order.component';


const routes: Routes = [
  {
    path: 'hoc',
    component: HigherOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
