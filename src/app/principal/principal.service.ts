import { Injectable } from '@angular/core';
import {Principal} from './principal.model';
@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  
  private principals:Principal[]=[
    {
    id:'d1',
    titulo:'Another oh hae young',
    imageUrl:'./assets/dorama1.jpg',
    informacion:['Estreno: 2 de mayo de 2016 ','Genero: Cine romántico','Temporadas: 1','Episodios: 18 + 2 especiales','Nominaciones: Baeksang Arts Premio a la Popularidad Masculino']
    },
    {
      id:'d2',
      titulo:'Gu family book',
      imageUrl:'./assets/dorama2.jpg',
      informacion:['Estreno: 8 de abril de 2013 ','Genero: Acción','Temporadas: 1','Episodios: 24','Nominaciones:  Baeksang Arts Award a la Popularidad Femenino - Televisión, MÁS']
    },
    {
        id:'d3',
        titulo:'Moon lovers scarlet heart ryeo',
        imageUrl:'./assets/dorama3.jpg',
        informacion:['Estreno: 29 de agosto de 2016','Genero: Cine romántico','Temporadas: 1','Episodios: 20 (+2 especiales)','Premio: SBS Drama Award for Best Couple']
      },
      {
        id:'d4',
        titulo:'The K2',
        imageUrl:'./assets/dorama4.jpg',
        informacion:['Estreno:23 de septiembre de 2016','Genero: Acción','Temporadas: 1','Episodios:  16','Premio: 31° Korea Best Dresser Swan Awards']
      },
      {
        id:'d5',
        titulo:'Are You Human Too?',
        imageUrl:'./assets/dorama5.jpg',
        informacion:['Estreno: 4 de junio de 2018','Genero: Cine romántico','Temporadas: 1','Episodios: 36','Premio: Best Couple Seo Kang-joon y Gong Seung-yeon']
      },
      {
        id:'d6',
        titulo:'Missing You',
        imageUrl:'./assets/dorama6.jpg',
        informacion:['Estreno: 7 de noviembre de 2012','Genero: Acción','Temporadas: 1','Episodios: 21','Premio: Baeksang Arts Premio a la Popularidad Masculino - Televisión']
      },
      ];
      constructor() { }

      getDoramas(){
        return [...this.principals];
      }

      getDoramasDetail(doramasId:string){
        return {...this.principals.find(doramas=>{
          return doramas.id===doramasId;
        })};
      }

      deleteDoramas(doramasId:string){
        this.principals=this.principals.filter(doramas=>{
          return doramas.id!==doramasId;
        })
      }
}