export function changeFilter(filter) {
  return {
    type: 'CHANGE_FILTER',
    filter
  }
}

export function onMarkerClick(marker) {
  return {
    type: 'MARKER_CLICK',
    marker
  }
}
