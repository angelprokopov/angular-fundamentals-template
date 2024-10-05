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
  formSubmitted: boolean = false;

  // Use the names `title`, `description`, `author`, 'authors' (for authors list), `duration` for the form controls.

  ngOnInit(): void {
    this.courseForm = this.fb.group({
      title: [null, [Validators.required, Validators.minLength(2)]],
      description: [null, [Validators.required, Validators.minLength(2)]],

      author: [
        null,
        [Validators.minLength(2), Validators.pattern(`^[a-zA-Z-9]+$`)],
      ],

      authors: this.fb.array([]),

      duration: [null, [Validators.required, Validators.min(0)]],
    });
  }

  // addAuthorsHandler(newAuthor: string) {
  //   console.log("adding author");

  //   if (newAuthor) {
  //     (<FormArray>this.courseForm.get("authors"))?.push(
  //       this.fb.control(newAuthor)
  //     );
  //     this.courseForm.get("author")!.reset();
  //     // this.authors.push(this.fb.control(authorName));
  //   } else {
  //     console.log("shit");
  //   }
  //   console.log(this.courseForm.value.authors);
  // }
  addAuthorsHandler(newAuthor: string) {
    console.log("adding author");

    const control = new FormControl(newAuthor, 
      [Validators.minLength(2), Validators.pattern(`^[a-zA-Z-9]+$`)],
    );

    const authorRegex = /^[a-zA-Z-9]+$/;
    const valid = authorRegex.test(newAuthor);

    if (newAuthor.length>2&&valid) {
      (<FormArray>this.courseForm.get("authors"))?.push(
        this.fb.control(control.value)
      );
      this.courseForm.get("author")!.reset();
      // this.authors.push(this.fb.control(authorName));
    } else {
      console.log("shit");
    }
    console.log(this.courseForm.value.authors);
  }

  createCourseHandler() {
    this.formSubmitted = true;

    console.log("creating course");
    console.log(this.courseForm);
  }
}
