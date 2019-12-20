import { NgModule } from "@angular/core";
import { UserComponent } from "./user.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{ path: "", component: UserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
