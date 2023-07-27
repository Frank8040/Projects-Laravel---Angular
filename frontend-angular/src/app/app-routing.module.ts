import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSchoolComponent } from './components/list-school/list-school.component';
import { AddSchoolComponent } from './components/add-school/add-school.component';
import { EditSchoolComponent } from './components/edit-school/edit-school.component';

const routes: Routes = [
  {path:'',component:ListSchoolComponent},
  {path:'edit-school',component:EditSchoolComponent},
  {path:'add-school',component:AddSchoolComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
