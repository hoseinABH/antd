import { ActionTypes, articleAction } from './../actions/types';
import { Article } from '../actions/articleActions';

export const articlesReducer = (
  state: Article[] = [],
  action: articleAction
) => {
  switch (action.type) {
    case ActionTypes.getArticles:
      return action.payload;

    default:
      return state;
  }
};

export const articleReducer = (
  state: Article | {} = {},
  action: articleAction
) => {
  switch (action.type) {
    case ActionTypes.getArticle:
      return action.payload;

    default:
      return state;
  }
};
