import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Car } from 'src/app/models/car.model';
import * as Granim from 'granim';
import { Actividad } from 'src/app/models/actividad.model';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ActividadesComponent implements OnInit, AfterViewInit {

  cars: Car[] = [
    new Car('Fiat', 'Blanco', 'auto1', 1998),
    new Car('Ford', 'Verde', 'auto2', 1975),
    new Car('Renault', 'Gris', 'auto3', 1986)
  ];
  actividades: Actividad[] = [
    new Actividad('Taller Grupal de Autoconocimiento_1', 'Centro_1', '12 de Marzo', '2 meses', 2500, 12, 'actividad1'),
    new Actividad('Taller Grupal de Autoconocimiento_2', 'Centro_2', '15 de Abril', '3 meses', 1500, 20, 'actividad2'),
    new Actividad('Taller Grupal de Autoconocimiento_3', 'Centro_3', '20 de Junio', '4 meses', 3500, 15, 'actividad3')
  ];
  responsiveOptions: any;

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    const primerCirculo = new Granim({
      element: '#circulo-uno',
      direction: 'radial',
      isPausedWhenNotInView: true,
      states: {
        'default-state': {
          gradients: [
            ['#ff9966', '#ff5e62'],
            ['#00F260', '#0575E6'],
            ['#e1eec3', '#f05053']
          ]
        }
      }
    });
    const segundoCirculo = new Granim({
      element: '#circulo-dos',
      direction: 'radial',
      isPausedWhenNotInView: true,
      states: {
        'default-state': {
          gradients: [
            ['#ff9966', '#ff5e62'],
            ['#00F260', '#0575E6'],
            ['#e1eec3', '#f05053']
          ]
        }
      }
    });
  }
}
