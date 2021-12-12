import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ClientAddComponent } from './component/client-add/client-add.component';
import { ClientListComponent } from './component/client-list/client-list.component';

const routes: Routes = [
  {path:'lista-clientes',component:ClientListComponent},
  {path:'add-cliente',component:ClientAddComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
