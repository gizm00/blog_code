export function changeFilter(filter) {
  return {
    type: 'CHANGE_FILTER',
    filter
  }
}

export function markerClick(marker) {
  return {
    type: 'MARKER_CLICK',
    marker
  }
}
