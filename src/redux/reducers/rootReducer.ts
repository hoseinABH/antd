import { coursesReducer, courseReducer } from './courseReducer';
import { articlesReducer, articleReducer } from './articleReducer';
import { combineReducers } from 'redux';
import { Article } from '../actions/articleActions';
import { Course } from '../actions/courseActions';
export interface StoreState {
  articles: Article[];
  article: Article | {};
  courses: Course[];
  course: Course | {};
}

export const reducer = combineReducers({
  articles: articlesReducer,
  article: articleReducer,
  courses: coursesReducer,
  course: courseReducer,
});
