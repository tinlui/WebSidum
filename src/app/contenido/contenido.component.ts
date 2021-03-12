import { Component, OnInit } from '@angular/core';
import { RfxParallaxService } from 'rfx-parallax';
export interface About {
  cols: number;
  rows: number;
  text: string;
}
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
  about: About[] = [
    {text: 'En la Administración Estatal que preside el Gobernador Miguel Angel Riquelme Solis, la cobertura y calidad de la infraestructura es la base estructural para que nuestra sociedad sea más próspera e incluyente; reducir las desigualdades e incrementar las oportunidades de crecimiento para todos los coahuilenses en cada una de las regiones.', cols: 3, rows: 1},
    {text: 'En la Secretaría de Infraestructura, Desarrollo Urbano y Movilidad en un esfuerzo compartido y el trabajo conjunto entre los tres órdenes de gobierno, nuestro objetivo principal es la construcción de las obras públicas que hagan realidad los proyectos que multipliquen en el potencial de la población en el ámbito empresarial, industrial y de servicios.', cols: 1, rows: 2},
    {text: 'Impulsamos una mejor infraestructura como factor determinante para la competitividad del estado, la atracción de las inversiones productivas que generen empleos y mejoren los ingresos de las familias, por eso, la estrategia central es el impulso a las instalaciones de vanguardia en aeropuertos, carreteras, vialidades, hospitales, sitios turísticos, equipamiento urbano e instalaciones por la seguridad.', cols: 1, rows: 1},
    {text: 'De esta forma, trabajamos con orden, planeación y transparencia en la ejecución de las obras que resuelven problemas de fondo y perduren en el futuro de los coahuilenses como mejores espacios vitales para su desarrollo, la cohesión social y la plenitud de las familias.', cols: 2, rows: 1},
  ];
}
