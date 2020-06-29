import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import {DramaModel } from '../../models/Drama.model'

@Component({
  selector: 'app-add-drama',
  templateUrl: './add-drama.component.html',
  styleUrls: ['./add-drama.component.css']
})
export class AddDramaComponent implements OnInit {

  kdrama: DramaModel = new DramaModel();

  constructor() { }

  ngOnInit(): void {
  }

  saveDrama(form: NgForm){
    if ( form.invalid ) {
      console.log('Formulario no válido');
      return;
    }
    console.log(form);
    console.log(this.kdrama);
    return true;
  }
}
