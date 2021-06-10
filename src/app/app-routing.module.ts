import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tut24UserComponent } from "./tut24-user/tut24-user.component";
import { Tut24AdminComponent } from "./tut24-admin/tut24-admin.component";

const routes: Routes = [
  {
    path:"user",
    component:Tut24UserComponent
  },
  {
    path: "admin",
    component:Tut24AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
