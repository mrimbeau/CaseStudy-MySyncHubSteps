import { Routes, RouterModule }   from '@angular/router';
import { DashboardComponent } from './dashboard';

declare let System: any; //will be transformed by webpack +2.0 to webpack_require

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent }
];

export const routing = RouterModule.forRoot(routes);