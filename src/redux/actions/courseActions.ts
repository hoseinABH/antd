import { ActionTypes } from './types';
import axios from 'axios';
import { Dispatch } from 'redux';

export interface Course {
  id: number;
  title: string;
  rate: number;
  Instructors: string;
  students: string;
  img: string;
  desc?: string;
  InsPic: string;
}
export interface getCoursesAction {
  type: ActionTypes.getCourses;
  payload: Course[];
}

export interface getCourseAction {
  type: ActionTypes.getCourse;
  payload: Course;
}

export const getCourses = () => async (dispatch: Dispatch) => {
  const res = await axios.get<Course[]>('/courses');

  dispatch<getCoursesAction>({
    type: ActionTypes.getCourses,
    payload: res.data,
  });
};
export const getCourse = (id: number) => async (dispatch: Dispatch) => {
  const res = await axios.get<Course>(`/courses/${id}`);

  dispatch<getCourseAction>({
    type: ActionTypes.getCourse,
    payload: res.data,
  });
};
