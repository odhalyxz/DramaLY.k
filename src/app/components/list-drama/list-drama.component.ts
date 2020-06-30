import { Component, OnInit } from '@angular/core';


import { DramaService} from '../../service/DramaService';
import { DramaModel} from '../../models/Drama.model';

// import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-drama',
  templateUrl: './list-drama.component.html',
  styleUrls: ['./list-drama.component.css']
})
export class ListDramaComponent implements OnInit {

  dramas: DramaModel[] = [];
  cargando = false;
  constructor( private dramaService: DramaService) { }

  ngOnInit(): void {
    // this.cargando = true;
    this.getKdramas();
  }
  // Listar todos los dramas
  getKdramas(){
    this.dramaService.getKdramas()
    .subscribe( resp => {
      this.dramas = resp;
      // this.cargando = false;
    });

  }
  deleteKdrama( drama: DramaModel, i: number ) {
    // this.dramas.splice(i, 1);
    this.dramaService.deleteKdrama(drama._id).subscribe();
    this.getKdramas();
  }

}
