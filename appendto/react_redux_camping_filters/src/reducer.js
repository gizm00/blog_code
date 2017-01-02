import {Map} from 'immutable';

function getFilterIndex(state, itemId) {
  return state.get('filters').findIndex(
    (item) => item.get('id') === itemId
  );
}

function setState(state, newState) {
  return state.merge(newState);
}

function markerClick(state, marker) {
  // get marker info
  // update text in details window
  console.log('markerClick in reducer')
  return state
}

function changeFilter(state, filter) {
  let filterIndex = getFilterIndex(state,filter)
  const updatedFilter = state.get('filters')
    .get(filterIndex)
    .update('inuse', inuse => inuse === false ? true : false);
  console.log(updatedFilter)
  return state.update('filters', filters => filters.set(filterIndex, updatedFilter));
}

export default function(state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'CHANGE_FILTER':
        return changeFilter(state, action.filter);
    case 'MARKER_CLICK':
        return markerClick(state, action.marker)
    default:
      return state
  }
}
