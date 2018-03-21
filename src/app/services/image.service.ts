import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageService {
private query:string;
private API_KEY:string=environment.pixabay_api_key;
private API_URL:string=environment.pixabay_api_url;
private URL:string=this.API_URL + this.API_KEY + '&q=';
private perPage:string="&per_page=10";

  constructor(private http: Http) { }

getImage(query){
  return this.http.get(this.URL+query+this.perPage)
  .map(res=>res.json());
}
}
