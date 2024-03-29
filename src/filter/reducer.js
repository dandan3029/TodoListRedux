import {SET_FILTER} from './actionTypes.js';
import FilterTypes from '../Constants.js'

export default (state = FilterTypes.ALL, action) => {
  switch(action.type) {
    case SET_FILTER: {
      return action.filter;
    }
    default:
      return state;
  }
}
