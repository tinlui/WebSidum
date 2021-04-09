import { Component, OnInit } from '@angular/core';
import { RfxParallaxService } from 'rfx-parallax';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {



  constructor(private rfxParallaxService: RfxParallaxService) { }

  ngOnInit(): void {
    this.rfxParallaxService.initListeners();

  }


}
