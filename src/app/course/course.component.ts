import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
            <h2>{{title}}</h2>
            <ul>
              <li *ngFor ="let course of courses">{{course}}</li>
            </ul>
            <img  src="{{imageUrl}}"/>
            <br/>
            <button [style.backgroundColor]="isActive ? 'lightblue' : 'white'">Save</button>
            `
})
export class CourseComponent {
  title = "List of courses";
  courses = ["english", "science","french"];
  imageUrl = "http://lorempixel.com/400/200";
  isActive = true;
  
}
