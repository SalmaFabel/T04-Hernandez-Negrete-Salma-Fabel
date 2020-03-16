import { Component, OnInit } from '@angular/core';
import { PrincipalService } from '../principal.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Principal } from '../principal.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-doramas-detalle',
  templateUrl: './doramas-detalle.page.html',
  styleUrls: ['./doramas-detalle.page.scss'],
})
export class DoramasDetallePage implements OnInit {

  doramasDetalle:Principal;

  constructor(private principalService:PrincipalService,
    private activatedRoute:ActivatedRoute,
    private route:Router,
    private alertCt:AlertController,) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paraMap=>{
      if(!paraMap.has('doramasId')){
       
        return;
      }
      const doramasId=paraMap.get('doramasId');
      this.doramasDetalle=this.principalService.getDoramasDetail(doramasId);
    });

  }
  onDeleteDoramas(){
    this.alertCt.create({
      header:"Eliminar Dorama",
      message:"¿Desea Eliminar esta el Dorama?",
      buttons:[{
        text:"Cancelar",
        role:"Cancel"
      },
      {
        text:"Eliminar",
        handler:()=>{
          this.principalService.deleteDoramas(this.doramasDetalle.id);
          this.route.navigate(['./']);
        }
      }]
    }).then(alertEl=>{
      alertEl.present();
    })
    
  }

}