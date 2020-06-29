import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  DramaModel} from '../models/Drama.model';
import { map, delay } from 'rxjs/operators';
import { GLOBAL} from './global';


@Injectable({
  providedIn: 'root'
})
export class DramaService {

  private url = GLOBAL.url;


  constructor( private http: HttpClient ) { }
  //  guardar la info en la DB
  async crearKdrama(drama: DramaModel ) {
    const asyncResult = await this.http.post(`${ this.url }/kdramas/new-Kdrama`, drama).toPromise();
    console.log(asyncResult);
  }

  // Eliminaru n kdrama
  deleteKdrama( id: string ) {
    return this.http.get(`${ this.url }/kdramas/delete/${ id }`);
    //this.getKdramas();

  }
  // Obtener la lista de todos los dramas

  getKdramas() {
    // const asyncResult = await this.http.get(`${ this.url }/kdramas`).toPromise();
    // return asyncResult;
    return this.http.get(`${ this.url }/kdramas`)
            .pipe(
              map( this.crearArreglo ),
              delay(0)
            );
  }
  private crearArreglo( kdramasObj: object ) {

    const kdramasList: DramaModel[] = [];

    Object.keys( kdramasObj ).forEach( key => {
      const kdrama: DramaModel = kdramasObj[key];
      console.log('kdrama', kdrama);
      //let iid = kdrama.;
      kdrama.cont = key;
      //kdrama.id = iid;
      kdramasList.push( kdrama );
    });
    return kdramasList;
  }
}
