import { Component,OnInit } from '@angular/core';
import { SnapPic } from './models/snap-pic.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

picSnaps!:SnapPic[];     //Array de SnapPic
 /* mySnap!: SnapPic;
otherSnap!:SnapPic;
lastSnap!:SnapPic;*/


ngOnInit(): void {
  this.picSnaps=[    
    {                   /* this.mySnap=new SnapPic():quand on utilise le constructor*/
    title:'ArchivPhoto',
    description:'My best friend!',
   imageUrl: './assets/pict.png',
    createdDate:new Date(),
   snaps: 0   
  },
  {

    title:'Super Book',
    description:'Un bel libro',
    imageUrl:'./assets/img.png',
    createdDate:new Date(),
    snaps:0,
    location:'Paris'
    },
    {
      title:'My Neighbor',
      description:'Condividere con gli altri',
      imageUrl:'',
      createdDate:new Date(),
      snaps:0,
      location:'Italia'
      
      },
      {                   /* this.mySnap=new SnapPic():quand on utilise le constructor*/
      title:'ArchivPhoto',
      description:'My best friend!',
     imageUrl: './assets/pict.png',
      createdDate:new Date(),
     snaps: 250   
    },
    {
  
      title:'Super Book',
      description:'Un bel libro',
      imageUrl:'./assets/img.png',
      createdDate:new Date(),
      snaps:0,
      location:'Paris'
      },
      {
        title:'My Neighbor',
        description:'vivere in armonia',
        imageUrl:'',
        createdDate:new Date(),
        snaps:0,
        location:'Genova'
        
        }

  ];
   /* this.mySnap= {                 
    title:'ArchivPhoto',
    description:'My best friend!',
   imageUrl: './assets/pic.jpg',
    createdDate:new Date(),
   snaps: 0   
  };
this.otherSnap={

title:'Super Book',
description:'Un livre avec un titre unique',
imageUrl:'./assets/img.png',
createdDate:new Date(),
snaps:0,
location:'Paris'

};

this.lastSnap={
title:'My Neighbor',
description:'La vie en communauté',
imageUrl:'',
createdDate:new Date(),
snaps:0,
location:'Cameroon'

};*/


}
}
