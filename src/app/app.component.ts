import { Component } from '@angular/core';
import { MyserviceService } from './services/myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private myService: MyserviceService){
    myService.getQuestions().subscribe((data)=>{
        console.log(data);
    })
  }
}
