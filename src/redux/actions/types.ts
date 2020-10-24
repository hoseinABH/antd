import { getArticlesAction, getArticleAction } from './articleActions';
import { getCoursesAction, getCourseAction } from './courseActions';
export enum ActionTypes {
  getArticles,
  getArticle,
  getCourses,
  getCourse,
}

export type articleAction = getArticlesAction | getArticleAction;

export type courseAction = getCoursesAction | getCourseAction;
