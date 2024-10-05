import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"],
})
export class CoursesComponent {
  constructor(private router: Router) {}

  public onView(id:number):void{

  }

  
  findCourse(query: string) {
    console.log(query);
    //add https request for the real search?
  }
}
