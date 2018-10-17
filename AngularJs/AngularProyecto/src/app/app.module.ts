import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { AppResaltarDirective } from './Directives/resaltar.directive';
import { AppContarClikcsDirective } from './Directives/contarClicks.directive';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';

const appRoutes: Routes = [
    {path: 'AppComponent', component: AppComponent },
    {path: 'lugares', component: LugaresComponent },
    {path: 'detalle/:id', component: DetalleComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    AppResaltarDirective,
    AppContarClikcsDirective,
    DetalleComponent,
    LugaresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB3m2OoXVDekTxn5h8ferzXr2FFm3RNe2s'
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
