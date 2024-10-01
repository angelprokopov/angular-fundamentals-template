import { Component, OnInit } from "@angular/core";
import { CommonModule, NgFor } from '@angular/common';
import { faTrashCan,faPencil  } from "@fortawesome/free-solid-svg-icons";
import { mockedCoursesList, mockedAuthorsList } from "./shared/mock"; 
import { CoursesService } from "./services/courses.service"; 
import { Courses } from "./courses.model";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit{


  constructor  (private courseServices:CoursesService,
    private http:HttpClient){}
  
  title = "courses-app";
  courses = mockedCoursesList;
  authors = mockedAuthorsList;

  //header props
  isLogged: boolean = true;
  logged: string = "logout";
  notLogged: string = "login";

  //info props
  infoTitle = "Your List Is Empty";
  infoText = "Please use ’Add New Course’ button to add your first course";
  addNewCourseBtnText = "Add new course";

  //course-card
  deleteIcon = faTrashCan;
  editIcon  = faPencil;


  
   getCourses() {
    this.http.get('http://localhost:4000/courses/all')
      // .pipe(
      //   map(responseData => {
      //     const postsArray = [];
      //     for (const key in responseData) {
      //       if (responseData.hasOwnProperty(key)) {
      //         postsArray.push({ ...responseData[key], id: key });
      //       }
      //     }
      //     return postsArray;
      //   })
      // )
      .subscribe(posts => {
        // ...
        console.log(posts);
      });
  }
  ngOnInit(){
    console.log('asdas');

    this.courseServices.getAll(); 
    
  }
}
