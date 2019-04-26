import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import{ AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {OrderComponent} from 'src/order/order.component';


@NgModule({
  declarations: [
    AppComponent,
    NgModule

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrderComponent,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
