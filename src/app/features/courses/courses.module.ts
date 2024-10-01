import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoursesListComponent } from "./courses-list/courses-list.component";
import { CoursesComponent } from "./courses.component";
import { SharedModule } from "@app/shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { CourseFormComponent } from "@app/shared/components";




const routes: Routes = [
  { path: '', component: CoursesListComponent },
  { path: 'add', component: CourseFormComponent },
  { path: 'edit/:id', component: CourseFormComponent },
];


@NgModule({
  declarations: [CoursesListComponent, CoursesComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [CoursesListComponent, CoursesComponent, RouterModule],
})
export class CoursesModule {}
