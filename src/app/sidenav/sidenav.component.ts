
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnDestroy {

  mobileQuery: MediaQueryList;

  fillerNav = Array.from({ length: 15}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({length: 15}, () =>
      `inicio`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.opcionesMenu=
    [
      {
        nombre:'Gestion Urbana',
        icon:'tal'
      },
      {
        nombre:'Directorio',
        icon:'tal',
        url:'tal'
      },
      {
        nombre:'Licencias',
        icon:'tal',
        url:'tal'
      },
      {
        nombre:'Fondo Metropolitano',
        icon:'tal',
        url:'tal'
      }
    ]

    for (let index = 0; index < this.opcionesMenu.length; index++) {
      this.element = this.opcionesMenu[index];
      console.log(this.element.nombre)
    }

  }
element:any;
opcionesMenu: any;
}
