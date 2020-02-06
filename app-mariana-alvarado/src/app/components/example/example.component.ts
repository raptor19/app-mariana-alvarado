import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import * as Granim from 'granim';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit, AfterViewInit {

   /** Template reference to the canvas element */
   @ViewChild('planoA', {static: true}) planoA: ElementRef;
   @ViewChild('planoB', {static: true}) planoB: ElementRef;
   private x: any;
   private y: any;
   private z: any;
   private u: any;
   /** Canvas 2d context */
   private contextA: CanvasRenderingContext2D;
  constructor() { }

  ngAfterViewInit() {
    this.contextA = (this.planoA.nativeElement as HTMLCanvasElement).getContext('2d');
    this.inicializarCanvaA();
    this.inicializarCanvaB();

  }

  ngOnInit() {
  }

  inicializarCanvaA() {
    const s = getComputedStyle((this.planoA.nativeElement as HTMLCanvasElement));
    console.log('s es igual a: ');
    console.log(s);
    const w = s.width;
    console.log('w es igual a: ');
    console.log(w);
    const h = s.height;
    console.log('h es igual a: ');
    console.log(h);
    (this.planoA.nativeElement).width = w.split('px')[0];
    (this.planoA.nativeElement).height = h.split('px')[0];
    this.x = (this.planoA.nativeElement).width / 2;
    this.y = (this.planoA.nativeElement).height / 2;
    this.dibujarA();
  }

  inicializarCanvaB() {
    const s = getComputedStyle((this.planoB.nativeElement as HTMLCanvasElement));
    console.log('s es igual a: ');
    console.log(s);
    const w = s.width;
    console.log('w es igual a: ');
    console.log(w);
    const h = s.height;
    console.log('h es igual a: ');
    console.log(h);
    (this.planoB.nativeElement).width = w.split('px')[0];
    (this.planoB.nativeElement).height = h.split('px')[0];
    this.x = (this.planoB.nativeElement).width / 4;
    this.y = (this.planoB.nativeElement).height / 4;
    this.dibujarB();
  }

  dibujarA() {
    this.contextA.fillStyle = '#108EFF';
    this.contextA.arc( this.x, this.y + 50, this.x, 0, 2 * Math.PI);
    this.contextA.fill();
  }

  dibujarB() {
    this.contextA.fillStyle = '#4E4E4E';
    this.contextA.arc( this.x - 100 , this.y, this.x, 0, 2 * Math.PI);
    this.contextA.fill();
  }

}
