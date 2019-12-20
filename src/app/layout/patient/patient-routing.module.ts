import { NgModule } from "@angular/core";
import { PatientComponent } from "./patient.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{ path: "", component: PatientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule {}
