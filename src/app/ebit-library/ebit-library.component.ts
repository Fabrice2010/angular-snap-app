import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-ebit-library',
  templateUrl: './ebit-library.component.html',
  styleUrls: ['./ebit-library.component.css']
})
export class EbitLibraryComponent implements OnInit {
title!: string;
description!:string;
logo!:string;

ngOnInit(){     //serve per inizializzare le propietà del componente

  this.title="Academy-Library";
  this.description="Leggere è una storia";
  this.logo="./assets/img.png";

}
 addBook():void{
  

 }
}
