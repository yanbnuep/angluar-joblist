import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { JobsComponent } from './jobs/jobs.component';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import { AppRoutingModule } from './/app-routing.module';
import { JobDetailComponent } from './job-detail/job-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    JobDetailComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    AppRoutingModule,
    MatDividerModule,
    MatListModule,
  ],
  exports: [RouterModule,MatTableModule,MatDividerModule,MatListModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
