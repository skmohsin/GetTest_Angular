import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { Screen2Component } from './screen2/screen2.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
              path: 'user',
              loadChildren: './user/user.module#UserModule'
            },
            {
              path: 'patient',
              loadChildren: './patient/patient.module#PatientModule'
            },
            {
                path: 'screen1',
                loadChildren: './screen1/screen1.module#Screen1Module'
            },
            {
                path: 'screen2',
                component: Screen2Component
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {}
