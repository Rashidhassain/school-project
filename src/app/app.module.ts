import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { HomeworkComponent } from './homework/homework.component';
import { LoginComponent } from './login/login.component';
import { ResultComponent } from './result/result.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { ParentComponent } from './parent/parent.component';
import { TeacherComponent } from './teacher/teacher.component';
import { RegisterComponent } from './register/register.component';
import { SsComponent } from './ss/ss.component';
import { DemoComponent } from './demo/demo.component';
import { MessageComponent } from './message/message.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeesComponent } from './fees/fees.component';
import { ServiceComponent } from './service/service.component';
import { Demo6Component } from './demo6/demo6.component';
import { Login1Component } from './login1/login1.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Student1Component } from './student1/student1.component';
import { Fees1Component } from './fees1/fees1.component';
import { School1Component } from './school1/school1.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    AboutComponent,
    AdminComponent,
    StudentComponent,
    HomeworkComponent,
    LoginComponent,
    ResultComponent,
    AttendenceComponent,
    ParentComponent,
    TeacherComponent,
    RegisterComponent,
    SsComponent,
    DemoComponent,
    MessageComponent,
    FooterComponent,
    DashboardComponent,
    FeesComponent,
    ServiceComponent,
    Demo6Component,
    Login1Component,

    Student1Component,
    Fees1Component,
    School1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule

  ],
  providers: [HttpParams],
  bootstrap: [AppComponent]
})
export class AppModule { }
