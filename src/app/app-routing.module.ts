import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradesComponent } from './components/grades/grades.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "grades", component: GradesComponent },
  { path: "", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
