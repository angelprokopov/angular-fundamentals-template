import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Courses } from '@app/courses.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {


    BASE_URL="http://localhost:4000";
    
    constructor(private http:HttpClient){

    }

    getAll() {
        // Add your code here
       this.http.get(`${this.BASE_URL}/courses/all`). pipe(

       ).
       subscribe(courses=>console.log(courses)
       )
       
    //    .pipe(
        // map((responseData)) {
        //     console.log(responseData);
            
        // }
       
    }

    createCourse(course: any) { // replace 'any' with the required interface
        // Add your code here
    }

    editCourse(id: string, course: any) { // replace 'any' with the required interface
        // Add your code here
    }

    getCourse(id: string) {
        // Add your code here
    }

    deleteCourse(id: string) {
        // Add your code here
    }

    filterCourses(value: string) {
        // Add your code here
    }

    getAllAuthors() {
        // Add your code here
    }

    createAuthor(name: string) {
        // Add your code here
    }

    getAuthorById(id: string) {
        // Add your code here
    }
}
