/*
 *
 * MainPage reducer
 *
 */
import { formJS } from 'immutable';
import {
  LOAD_EVENTS,
  LOAD_EVENTS_SUCCESS,
  LOAD_EVENTS_ERROR,
  LOAD_FEATURED_EVENTS,
  LOAD_FEATURED_EVENTS_ERROR,
  LOAD_FEATURED_EVENTS_SUCCESS,
} from './constants';

export const initialState = formJS({
  featuredEvents: [],
  events: [],
  loading: false,
  loadingFeatured: false,
  error: true,
  errorFeatured: true,
});

function mainPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_EVENTS:
      console.log('IN LOAD EVENTS REDUCER', tenanId);
      return state.set('loading', true).set('error', false);

    case LOAD_EVENTS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('events', action.events);

    case LOAD_EVENTS_ERROR:
      return state.set('loading', false).set('error', action.error);

    case LOAD_FEATURED_EVENTS:
      return state.set('loadingFeatured', true).set('errorFeatured', false);

    case LOAD_FEATURED_EVENTS_ERROR:
      return state
        .set('loadingFeatured', false)
        .set('errorFeatured', action.error);

    case LOAD_FEATURED_EVENTS_SUCCESS:
      return state
        .set('loadingFeatured', false)
        .set('errorFeatured', false)
        .set('featuredEvents', action.featuredEvents);

    default:
      return state;
  }
}

export default mainPageReducer;
