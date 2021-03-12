import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ RfxParallaxModule} from 'rfx-parallax'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { ParallaxDirective } from './parallax.directive';

@NgModule({
  declarations: [
    AppComponent,
      SidenavComponent,
      ContenidoComponent,
      ParallaxDirective
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RfxParallaxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
