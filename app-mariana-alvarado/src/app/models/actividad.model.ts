export class Actividad {
    nombre: string;
    lugar: string;
    inicio: string;
    duracion: string;
    inversion: number;
    cupo: number;
    imagen: string;

    constructor( nombre: string, lugar: string, inicio: string, duracion: string, inversion: number, cupo: number, imagen: string) {
        this.nombre = nombre;
        this.lugar = lugar;
        this.inicio = inicio;
        this.duracion = duracion;
        this.inversion = inversion;
        this.cupo = cupo;
        this.imagen = imagen;
    }
}
