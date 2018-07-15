import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) {}
  
  public getQuestions(){
    return this.http.get('assets/mock/questions.json');
  }
}
