import { Component,OnInit,Input} from '@angular/core';
import { SnapPic } from '../models/snap-pic.model';

@Component({
  selector: 'app-snap-pic',
  templateUrl: './snap-pic.component.html',
  styleUrls: ['./snap-pic.component.css']
})



export class SnapPicComponent implements OnInit{
  @Input() snapPic!: SnapPic;

title!:string;
description!:string;
createdDate!:Date;
snaps!:number;
imageUrl!:string;
buttonText!:string;

ngOnInit(){
this.title='ArchivPhoto';
this.description='My best friend!';
this.createdDate= new Date();
this.snaps=10;
this.imageUrl='./assets/pic.jpg';
this.buttonText='Oh Snap!';
}

onSnap(){
   if(this.buttonText==='Oh Snap!'){
    this.snapPic.snaps++;
    this.buttonText ='Oops,un snap';
     }
   else{
        this.snapPic.snaps--;
        this.buttonText='Oh Snap!';
   }
}


}
