// Code your solution in this file
function findMatching(array, match) {
  return array.filter(function (element) {
    return element == match || element == match.toLowerCase()
  })
}
