import { ActionTypes } from './types';
import axios from 'axios';
import { Dispatch } from 'redux';

export interface Article {
  id: number;
  date: string;
  title: string;
  author: string;
  ttr: string;
  img: string;
  desc: string;
  body: string;
}
export interface getArticlesAction {
  type: ActionTypes.getArticles;
  payload: Article[];
}

export interface getArticleAction {
  type: ActionTypes.getArticle;
  payload: Article;
}

export const getArticles = () => async (dispatch: Dispatch) => {
  const res = await axios.get<Article[]>('/articles');

  dispatch<getArticlesAction>({
    type: ActionTypes.getArticles,
    payload: res.data,
  });
};
export const getArticle = (id: number) => async (dispatch: Dispatch) => {
  const res = await axios.get<Article>(`/articles/${id}`);

  dispatch<getArticleAction>({
    type: ActionTypes.getArticle,
    payload: res.data,
  });
};
