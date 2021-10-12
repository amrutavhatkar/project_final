import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { PizzaDetailsComponent } from './pizza/pizza-details/pizza-details.component';

import { PizzaListComponent } from './pizza/pizza-list/pizza-list.component';
import { CartComponent } from './pizza/cart/cart.component';
import { ProductsComponent } from './pizza/products/products.component';
import { HeaderComponent } from './pizza/header/header.component';
import { FooterComponent } from './pizza/footer/footer.component';
import { SliderComponent } from './pizza/slider/slider.component';
import { LoginComponent } from './pizza/login/login.component';
import { SignupComponent } from './pizza/signup/signup.component';
import { FilterPipe } from './pizza/shared/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
   PizzaListComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    ProductsComponent,
    FilterPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
