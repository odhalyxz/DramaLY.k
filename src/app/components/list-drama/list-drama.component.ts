import { Component, OnInit } from '@angular/core';


import { DramaService} from '../../service/DramaService';
import { DramaModel} from '../../models/Drama.model';

@Component({
  selector: 'app-list-drama',
  templateUrl: './list-drama.component.html',
  styleUrls: ['./list-drama.component.css']
})
export class ListDramaComponent implements OnInit {

  dramas: any;
  cargando = false;
  constructor( private dramaService: DramaService) { }

  ngOnInit(): void {
    this.cargando = true;
    this.dramaService.getKdramas()
    .subscribe( resp => {
      this.dramas = resp;
      this.cargando = false;
    });
  }

}
