import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-course-form",
  templateUrl: "./course-form.component.html",
  styleUrls: ["./course-form.component.scss"],
})
export class CourseFormComponent implements OnInit {
  constructor(public fb: FormBuilder, public library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
  courseForm!: FormGroup;
  // Use the names `title`, `description`, `author`, 'authors' (for authors list), `duration` for the form controls.

  ngOnInit(): void {
    this.courseForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
      author: new FormControl(null, [Validators.minLength(2)]),
      authors: new FormArray([]),
      duration: new FormArray([]),
    });
  }

  addAuthorsHandler() {
    console.log('adding author');
    
    const control = new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
    ]);
    (<FormArray>this.courseForm.get("authors"))?.push(control);
  }
}