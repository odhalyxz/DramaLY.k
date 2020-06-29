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

  /*actualizarHeroe( drama: DramaModel ) {

    const heroeTemp = {
      ...heroe
    };

    delete heroeTemp.id;

    return this.http.put(`${ this.url }/heroes/${ heroe.id }.json`, heroeTemp);


  }

  borrarHeroe( id: string ) {

    return this.http.delete(`${ this.url }/heroes/${ id }.json`);

  }


  getHeroe( id: string ) {

    return this.http.get(`${ this.url }/heroes/${ id }.json`);

  }


  getHeroes() {
    return this.http.get(`${ this.url }/heroes.json`)
            .pipe(
              map( this.crearArreglo ),
              delay(0)
            );
  }

  private crearArreglo( heroesObj: object ) {

    const heroes: HeroeModel[] = [];

    Object.keys( heroesObj ).forEach( key => {

      const heroe: HeroeModel = heroesObj[key];
      heroe.id = key;

      heroes.push( heroe );
    });


    return heroes;

  }*/
}
