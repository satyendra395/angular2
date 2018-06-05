import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app.routing';
import { HightlightDirective } from './hightlight.directive';
import { ReversePipe } from './reverse.pipe';
import { OrderModule } from 'ngx-order-pipe';
import { CityService } from './services/city.service';

@NgModule({
  declarations: [
    AppComponent, routedComponents, HightlightDirective, ReversePipe],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, OrderModule
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
