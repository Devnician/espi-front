import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountingsDashboardComponent } from './countings-dashboard/countings-dashboard.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "dashboard",
        component: CountingsDashboardComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountingsRoutingModule { }
