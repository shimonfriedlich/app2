import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question';
import {MyserviceService} from '../services/myservice.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  constructor(private service:MyserviceService) {    
    service.getQuestions().subscribe((data:Question[])=>{
        console.log(data);
        this.questions = data;
      }
    )
  }
  questions: Question[];
  ngOnInit() {
  }

}
