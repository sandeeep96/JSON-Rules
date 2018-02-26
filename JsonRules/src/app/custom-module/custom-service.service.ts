import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomServiceService {

  constructor(private http: Http) { }

  public getCountriesNames(){
    let _url :string ='https://jsonplaceholder.typicode.com/todos';
    return this.http.get(_url);
  } 

  public getCountryDetail(countryName:any){
    let _url :string ='https://jsonplaceholder.typicode.com/todos/'+countryName;
    return this.http.get(_url);
    
  }
}
