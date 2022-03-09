import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradesComponent } from './components/grades/grades.component';
import { HomeComponent } from './components/home/home.component';
import { GradesResolver } from './services/grades.resolver';

const routes: Routes = [
  {
    path: 'grades',
    component: GradesComponent,
    resolve: { gradesData: GradesResolver }
  },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
