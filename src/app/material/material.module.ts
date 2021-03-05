import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations:[],
  exports:[
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule
  ],
  imports:[
    CommonModule
  ],
}
)
export class MaterialModule { }
