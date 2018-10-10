import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { AppResaltarDirective } from './Directives/Directives.Resaltar/resaltar.directive';



@NgModule({
  declarations: [
    AppComponent,
    AppResaltarDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB3m2OoXVDekTxn5h8ferzXr2FFm3RNe2sxx'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
