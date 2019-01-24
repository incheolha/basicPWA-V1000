import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getToeflList() {
   return this.http.get<{message: string, toefls: any[]}>('https://examsimv100.herokuapp.com/showexam/')
  }

}
