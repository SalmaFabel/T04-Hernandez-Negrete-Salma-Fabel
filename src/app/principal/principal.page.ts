import { Component, OnInit } from '@angular/core';
import {Principal} from './principal.model';
import { PrincipalService } from './principal.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {


  constructor(private doramasService:PrincipalService) { }
  
  doramas:Principal[];

  ngOnInit() {
   this.doramas= this.doramasService.getDoramas();
  }
 

}