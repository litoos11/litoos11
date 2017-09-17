import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'descripcion',
  templateUrl: '../views/descripcion.component.html'
})
export class DescripcionComponent implements OnInit{
  public titulo: string;

  constructor(
    private _rouete: ActivatedRoute,
    private _router: Router
  ){
    this.titulo = 'Descripción';
  }

  ngOnInit(){
    console.log('Descripcion cargado correctamente...');
  }

}
