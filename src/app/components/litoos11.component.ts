import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'litoos11',
  templateUrl: '../views/litoos11.component.html',
  styleUrls: ['../../assets/css/litoos11.component.css']
})
export class Litoos11Component implements OnInit{
  public titulo: string;

  constructor(
    private _rouete: ActivatedRoute,
    private _router: Router
  ){
    this.titulo = 'Angel Ortiz Sarmiento';
  }

  ngOnInit(){
    console.log('Litoos11 cargado correctamente...');
  }

}
