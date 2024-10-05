// Add your code here
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesState, coursesFeatureKey } from "./courses.reducer";


const getCoursesFeatureSelector = createFeatureSelector<CoursesState>(coursesFeatureKey);

// isAllCoursesLoadingSelector
export const isAllCoursesLoadingSelector = createSelector(getCoursesFeatureSelector, (state:CoursesState)=>state.isAllCoursesLoading);

// isSearchingStateSelector
export const isSearchingStateSelector = createSelector(getCoursesFeatureSelector, (state:CoursesState)=>state.isSearchState);
// isSingleCourseLoadingSelector
export const isSingleCourseLoadingSelector = createSelector(getCoursesFeatureSelector, (state:CoursesState)=>state.isSingleCourseLoading);
// getCourses
export const getCourses = createSelector(getCoursesFeatureSelector, (state:CoursesState)=>state.allCourses);
// getAllCourses
export const getAllCourses = createSelector(getCoursesFeatureSelector, (state:CoursesState)=>state.allCourses);
// getCourse
export const getCourse = createSelector(getCoursesFeatureSelector, (state:CoursesState)=>state.course);
// getErrorMessage
export const getErrorMessage = createSelector(getCoursesFeatureSelector, (state:CoursesState)=>state.errorMessage);
