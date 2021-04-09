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
import { SliderComponent } from './slider/slider.component';
import { PortadaComponent } from './portada/portada.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { SemblanzaComponent } from './semblanza/semblanza.component';
import { MvvComponent } from './mvv/mvv.component';
import { GestionComponent } from './gestion/gestion.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
      SidenavComponent,
      ContenidoComponent,
      ParallaxDirective,
      SliderComponent,
      PortadaComponent,
      BienvenidoComponent,
      SemblanzaComponent,
      MvvComponent,
      GestionComponent,
      PiePaginaComponent
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
