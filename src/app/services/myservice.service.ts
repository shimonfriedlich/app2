import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../models/question';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) {}
  
  public getQuestions(): Observable<Question[]>{
    return this.http.get<Question[]>('assets/mock/questions.json');
  }
}
