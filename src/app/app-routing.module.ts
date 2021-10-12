import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pizza/login/login.component';
import { PizzaListComponent } from './pizza/pizza-list/pizza-list.component';
import { SignupComponent } from './pizza/signup/signup.component';
import { SliderComponent } from './pizza/slider/slider.component';
import { CartComponent } from './pizza/cart/cart.component';
import { ProductsComponent } from './pizza/products/products.component';

const routes: Routes = [
{path:'', component:SliderComponent},
{path:"pizza-details",component:ProductsComponent},
{path:'login', component: LoginComponent},
{path:'signup', component: SignupComponent}, 
{path:'cart', component:CartComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
