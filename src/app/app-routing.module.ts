import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistraionComponent } from './registraion/registraion.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  
  {path:'',component:TodoComponent},
  {path:'register',component:RegistraionComponent},
  {path:'login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
