import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeResolver } from './employee-resolver';
import { EmployeeComponent } from './employee/employee.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path:'header',component:HeaderComponent},
{path:'',component:HomeComponent},
{path:'employee',component:EmployeeComponent, resolve:{employee:EmployeeResolver}},
{path:'employee-list',component:EmployeeListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
