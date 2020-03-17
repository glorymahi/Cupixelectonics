import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BooknowComponent } from './booknow/booknow.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'home', component:AppComponent},
  {path:'about', component:AboutComponent},
    // {path:'',component:BooknowComponent},
   {path:'',redirectTo:'/booknow',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
