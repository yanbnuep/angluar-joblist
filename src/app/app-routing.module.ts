import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component'
import { JobDetailComponent } from './job-detail/job-detail.component';
import { LoginComponent } from './login/login.component';
import {RouteGuardService} from './route-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'jobs', component: JobsComponent , canActivate: [RouteGuardService]},
  { path: 'detail/:Job_Name', component: JobDetailComponent, canActivate: [RouteGuardService] },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
