import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { OdemeyapComponent } from './Components/odemeyap/odemeyap.component';
import { ProductAddComponent } from './Components/product-add/product-add.component';
import { ProductComponent } from './Components/product/product.component';
import { RegisterComponent } from './Components/register/register.component';
import { SepetimComponent } from './Components/sepetim/sepetim.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ProductComponent },
  {path:"products", component:ProductComponent },
  {path:"products/category/:categoryId", component:ProductComponent },
  {path:"products/add",component:ProductAddComponent, canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent},
  {path:"sepetim", component:SepetimComponent},
  {path:"odemeyap", component:OdemeyapComponent},
  {path:"register", component:RegisterComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
