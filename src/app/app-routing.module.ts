import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ProductAddComponent } from './Components/product-add/product-add.component';
import { ProductComponent } from './Components/product/product.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ProductComponent },
  {path:"products", component:ProductComponent },
  {path:"products/category/:categoryId", component:ProductComponent },
  {path:"products/add",component:ProductAddComponent},
  {path:"login",component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
