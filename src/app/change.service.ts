import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http'
import {Employee} from './hello'
import {Observable} from 'rxjs'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
@Injectable()
export class ChangeService {

private _url:string="/assets/hello.json";
  constructor(private http:HttpClient ) {}

 getDetails():Observable<Employee[]>{
   return this.http.get<Employee[]>(this._url).catch(this.errorHandler);
 }

 errorHandler(error:HttpErrorResponse){
   return Observable.throw(error.message || "Server error");
 }

}