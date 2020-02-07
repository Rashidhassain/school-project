import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';
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
import { Demo6Component } from './demo6/demo6.component';
import { Login1Component } from './login1/login1.component';
import { Student1Component } from './student1/student1.component';
import { School1Component } from './school1/school1.component';
import { Fees1Component } from './fees1/fees1.component';
import { DbComponent } from './db/db.component';


const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'register', component: RegisterComponent},
{path:  'message', component: MessageComponent},
{path: 'footer', component: FooterComponent},
{path: 'dashboard', component: DashboardComponent},
{path: 'fees', component: FeesComponent},
{path: 'demo' , component: DemoComponent},
{path: 'login1', component: Login1Component},
{path: 'student1', component: Student1Component},
{path: 'fees1', component: Fees1Component},
{path: 'school1', component: School1Component},
{path: 'db', component: DbComponent},

{path: 'contactus', component: ContactusComponent},
{path: 'about', component: AboutComponent},
{path : 'admin', component: AdminComponent},
{path : 'student', component: StudentComponent},
{path : 'homework', component: HomeworkComponent},
{path: 'login', component: LoginComponent},
{path: 'result', component: ResultComponent},
{path: 'attendence', component: AttendenceComponent},
{path: 'parent', component: ParentComponent},
{path: 'teacher', component: TeacherComponent},
{path: 'ss', component : SsComponent},
{path: 'demo6', component: Demo6Component},
{path: '**', redirectTo: 'home', pathMatch: 'full'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
