import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {

  //constructor(private newService: MyServiceService){}

  // ngOnInit(){

  //   this.newService.getStudents();
  // }

  title = 'app';
}
