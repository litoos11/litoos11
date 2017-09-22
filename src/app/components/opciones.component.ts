import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'opciones',
  templateUrl: '../views/opciones.component.html',
  styleUrls: ['../../assets/css/opciones.component.css']
})
export class OpcionesComponent implements OnInit{
  public titulo: string;

  constructor(
    private _rouete: ActivatedRoute,
    private _router: Router
  ){
    this.titulo = 'Descubreme';
  }

  ngOnInit(){
    console.log('Opciones cargado correctamente...');
  }

}
