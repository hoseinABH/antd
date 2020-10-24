import { ActionTypes, courseAction } from './../actions/types';
import { Course } from '../actions/courseActions';

export const coursesReducer = (state: Course[] = [], action: courseAction) => {
  switch (action.type) {
    case ActionTypes.getCourses:
      return action.payload;

    default:
      return state;
  }
};

export const courseReducer = (
  state: Course | {} = {},
  action: courseAction
) => {
  switch (action.type) {
    case ActionTypes.getCourse:
      return action.payload;

    default:
      return state;
  }
};
