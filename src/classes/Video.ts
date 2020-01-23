export class Video{
  titre:string;
  annee:number;
  statut:number;

  constructor(titre:string="",
              annee:number=0,
              statut:number=0) {

    this.titre = titre;
    this.annee = annee;
    this.statut = statut;
  }
}
