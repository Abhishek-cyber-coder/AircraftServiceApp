import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent },
  {path:'main', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
