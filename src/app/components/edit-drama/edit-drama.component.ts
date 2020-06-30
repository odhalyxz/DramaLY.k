import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

import { DramaModel } from '../../models/Drama.model';
import {  DramaService} from '../../service/DramaService';
@Component({
  selector: 'app-edit-drama',
  templateUrl: './edit-drama.component.html',
  styleUrls: ['./edit-drama.component.css']
})
export class EditDramaComponent implements OnInit {
  kdrama: DramaModel = new DramaModel();
  constructor(private dramaService: DramaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('id desde edit', id);
    this.getKdrama(id);
  }
  getKdrama(id: string){
    let peticion: Observable<any>;
    peticion = this.dramaService.getKdrama(id);
    peticion.subscribe( (resp: DramaModel) =>  {
      this.kdrama = resp;

    });
  }

  updateKDrama(form: NgForm){
    console.log('PETICION', this.kdrama);
    //this.kdrama
    this.dramaService.updateKdrama(this.kdrama);

  }

}
