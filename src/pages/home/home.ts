import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Video} from "../../classes/Video";

import {VillageoisListePage} from "../villageois-liste/villageois-liste";
import {BataillesListePage} from "../batailles-liste/batailles-liste";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private title;
  private description;
  private image;
  private films =[
    {titre: "Avatar", annee:2010, statut:1},
    {titre: "Interstellar", annee:2014, statut:2},
    {titre: "Matrix", annee:1999, statut:0}
  ];

  private film="";

  private videos: Array<Video> = [];
  private newVideo:Video =  new Video();

  constructor(public navCtrl: NavController) {
      this.title = "TP 17/01";
      this.description="Introduction à Ionic";
      this.image ="../../assets/imgs/bagarreGauloise.jpg";
  }

  getDetails(film){
    console.log("film", film);
    this.film = film;
  }

  createVideo(){
    this.videos.push(this.newVideo);
    this.newVideo = new Video();
  }

  listeVillageois(){
    this.navCtrl.push(VillageoisListePage);
  }

  listeBatailles(){
    this.navCtrl.push(BataillesListePage);
  }

}
