/*
 *
 * MainPage actions
 *
 */

import {
  LOAD_EVENTS,
  LOAD_EVENTS_SUCCESS,
  LOAD_EVENTS_ERROR,
  LOAD_FEATURED_EVENTS,
  LOAD_FEATURED_EVENTS_SUCCESS,
  LOAD_FEATURED_EVENTS_ERROR,
} from './constants';

export function loadEvents(tenantId, skip, take, searchTerm) {
  console.log('In Load events action', tenantId);
  return {
    type: LOAD_EVENTS,
    tenantId,
    skip,
    take,
    searchTerm,
  };
}

export function loadEventsSuccess(events) {
  return {
    type: LOAD_EVENTS_SUCCESS,
    events,
  };
}

export function loadEventsError(error) {
  return {
    type: LOAD_EVENTS_ERROR,
    error,
  };
}

export function loadFeaturedEvents(tenantId, skip, take) {
  return {
    type: LOAD_FEATURED_EVENTS,
    tenantId,
    skip,
    take,
  };
}

export function loadFeaturedEventsSuccess(featuredEvents) {
  return {
    type: LOAD_FEATURED_EVENTS_SUCCESS,
    events,
  };
}

export function loadFeaturedEventsError(error) {
  return {
    type: LOAD_FEATURED_EVENTS_ERROR,
    error,
  };
}
