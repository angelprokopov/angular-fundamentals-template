import { createAction, props } from "@ngrx/store";
import { CoursesConstants } from "@app/store/courses/courses.constants";
import { Course } from "@app/courses.model";
// Add your code here

// all courses actions
export const requestAllCourses = createAction(
  CoursesConstants.REQUEST_ALL_COURSES
);
//Add courses props to provide a courses list to the reducer
export const requestAllCoursesSuccess = createAction(
  CoursesConstants.REQUEST_ALL_COURSES_SUCCESS,
  props<{ coursesList: Course[] }>()
);

//Add error props to provide an error to the reducer).
export const requestAllCoursesFail = createAction(
  CoursesConstants.REQUEST_ALL_COURSES_FAIL,
  props<{ error:any }>()
  
);

// single course actions
export const requestSingleCourse = createAction(
  CoursesConstants.REQUEST_SINGLE_COURSE,
  props<{ id: string }>()
);
export const requestSingleCourseSuccess = createAction(
  CoursesConstants.REQUEST_SINGLE_COURSE_SUCCESS,
  props<{ course: Course }>()
);
export const requestSingleCourseFail = createAction(
  CoursesConstants.REQUEST_SINGLE_COURSE_FAIL,
  props<{ error:any }>()
);

// Actions for request filtered Courses

// requestFilteredCourses (Add title props).
export const requestFilteredCourses = createAction(
  CoursesConstants.REQUEST_FILTERED_COURSES,
  props<{ title: string }>()
);
// requestFilteredCoursesSuccess (Add courses props to provide a courses list to the reducer).
export const requestFilteredCoursesSuccess = createAction(
  CoursesConstants.REQUEST_FILTERED_COURSES_SUCCESS,
  props<{ coursesList: Course[] }>()
);

// requestFilteredCoursesFail (Add error props to provide an error to the reducer).
export const requestFilteredCoursesFail = createAction(
  CoursesConstants.REQUEST_FILTERED_COURSES_FAIL,
  props<{ error:any }>()
);

// Delete actions
// requestDeleteCourse (Add id props).
export const requestDeleteCourse = createAction(
  CoursesConstants.REQUEST_DELETE_COURSE,
  props<{ id: string }>()
);
//requestDeleteCourseSuccess.
export const requestDeleteCourseSuccess = createAction(
  CoursesConstants.REQUEST_DELETE_COURSE_SUCCESS, props<{ id: string }>()
);
// requestDeleteCourseFail (Add error props to provide an error to the reducer).
export const requestDeleteCourseFail = createAction(
  CoursesConstants.REQUEST_DELETE_COURSE_FAIL,
  props<{ error:any }>()
);

// Actions for edit course

// requestEditCourse (Add id and course props to provide an id and course info to the reducer).
export const requestEditCourse = createAction(
  CoursesConstants.REQUEST_EDIT_COURSE,
  props<{ id: string; course: Course }>()
);

// requestEditCourseSuccess (Add course props to provide an updated course to the reducer).
export const requestEditCourseSuccess = createAction(
  CoursesConstants.REQUEST_EDIT_COURSE_SUCCESS,
  props<{ course: Course }>()
);

// requestEditCourseFail (Add error props to provide an error to the reducer).
export const requestEditCourseFail = createAction(
  CoursesConstants.REQUEST_EDIT_COURSE_FAIL,
  props<{ error:any }>()
);

//   Actions for create course

// requestCreateCourse (Add course props to provide a course to the reducer).
export const requestCreateCourse = createAction(
  CoursesConstants.REQUEST_CREATE_COURSE,
  props<{ course: Course }>()
);

// requestCreateCourseSuccess (Add course props to provide a created course to the reducer).
export const requestCreateCourseSuccess = createAction(
  CoursesConstants.REQUEST_CREATE_COURSE_SUCCESS,
  props<{ course: Course }>()
);

// requestCreateCourseFail (Add error props to provide an error to the reducer).
export const requestCreateCourseFail = createAction(
  CoursesConstants.REQUEST_CREATE_COURSE_FAIL,
  props<{ error:any }>()
);
