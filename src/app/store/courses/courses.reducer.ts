
import { Action, createReducer, on } from "@ngrx/store";
import * as CoursesActions from "./courses.actions";
import { Course } from "@app/courses.model";

export const coursesFeatureKey = 'courses';

export interface CoursesState {
  allCourses: Course[];
  course: Course|null;
  isAllCoursesLoading: boolean;
  isSingleCourseLoading: boolean;
  isSearchState: boolean;
  errorMessage: string | null;
}

export const initialState: CoursesState = {
  allCourses: [],
  course: null,
  isAllCoursesLoading: false,
  isSingleCourseLoading: false,
  isSearchState: false,
  errorMessage: null,
};

export const coursesReducer = createReducer(
  initialState,
  // All courses 
  on(CoursesActions.requestAllCourses, (state) => ({
    ...state,
    isAllCoursesLoading: true,
    errorMessage: null,
  })),
  on(CoursesActions.requestAllCoursesSuccess, (state, { coursesList }) => ({
    ...state,
    allCourses: coursesList,
    isAllCoursesLoading: false,
  })),
 
 

  on(CoursesActions.requestAllCoursesFail, (state, {error}) => ({
    ...state,
    isAllCoursesLoading: false,
    errorMessage: error,
  })),
 
 
  // Single course 
  on(CoursesActions.requestSingleCourse, (state) => ({
    ...state,
    isSingleCourseLoading: true,
    errorMessage: null,
  })),
  on(CoursesActions.requestSingleCourseSuccess, (state, { course }) => ({
    ...state,
    course,
    isSingleCourseLoading: false,
  })),
  on(CoursesActions.requestSingleCourseFail, (state, { error }) => ({
    ...state,
    isSingleCourseLoading: false,
    errorMessage: error,
  })),
  // Filtered courses 
  on(CoursesActions.requestFilteredCourses, (state) => ({
    ...state,
    // isAllCoursesLoading: true, ?
    isSearchState: true,
    errorMessage: null,
  })),
  on(CoursesActions.requestFilteredCoursesSuccess, (state, { coursesList }) => ({
    ...state,
    // isAllCoursesLoading: false, ?
    allCourses: coursesList,
    isSearchState: false,
  })),
  on(CoursesActions.requestFilteredCoursesFail, (state, { error }) => ({
    ...state,
    // isAllCoursesLoading: false, ?
    isSearchState: false,
    errorMessage: error,
  })),
  // Delete course 
  on(CoursesActions.requestDeleteCourse, (state) => ({
    ...state,
    // isAllCoursesLoading: true,
    errorMessage: null,
  })),
  on(CoursesActions.requestDeleteCourseSuccess, (state, { id }) => ({
    ...state,
    allCourses: state.allCourses.filter(course => course.id !== id),
  })),
  on(CoursesActions.requestDeleteCourseFail, (state, { error }) => ({
    ...state,
    errorMessage: error,
  })),
  // Edit course 
  on(CoursesActions.requestEditCourse, (state) => ({
    ...state,
    isSingleCourseLoading: true,
    errorMessage: null,
  })),
  on(CoursesActions.requestEditCourseSuccess, (state, { course }) => ({
    ...state,
    isSingleCourseLoading: false,
    allCourses: state.allCourses.map(c => c.id === course.id ? course : c),
  })),
  on(CoursesActions.requestEditCourseFail, (state, { error }) => ({
    ...state,
    isSingleCourseLoading: false,
    errorMessage: error,
  })),
  // Create course 
  on(CoursesActions.requestCreateCourse, (state) => ({
    ...state,
    isSingleCourseLoading: true,

    errorMessage: null,
  })),
  on(CoursesActions.requestCreateCourseSuccess, (state, { course }) => ({
    ...state,
    isSingleCourseLoading: false,
    allCourses: [...state.allCourses, course],
  })),
  on(CoursesActions.requestCreateCourseFail, (state, { error }) => ({
    ...state,
    isSingleCourseLoading: false,

    errorMessage: error,
  }))
);

export const reducer = (
  state: CoursesState | undefined,
  action: Action
): CoursesState => {
  return coursesReducer(state, action);
};
