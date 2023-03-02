import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';


  count:number = 0;
  hidden:boolean = true;

  onclick() {

    this.count++;
  }

  onDoubleClick() {

    if(this.hidden === false)
    this.hidden = true;

    else
    this.hidden = false;
    
  }
}


