let STANDARD_ASPECT_RATIOS = [
  [1, '1:1'],
  [4 / 3, '4:3'],
  [5 / 4, '5:4'],
  [3 / 2, '3:2'],
  [16 / 10, '16:10'],
  [16 / 9, '16:9'],
  [21 / 9, '21:9'],
  [32 / 9, '32:9'],
]
let RATIOS = STANDARD_ASPECT_RATIOS.map(function (tpl) { return tpl[0] }).sort()
let LOOKUP = Object()
for (let i = 0; i < STANDARD_ASPECT_RATIOS.length; i++) {
  LOOKUP[STANDARD_ASPECT_RATIOS[i][0]] = STANDARD_ASPECT_RATIOS[i][1]
}

/*
Find the closest value in a sorted array
*/
function findClosest(arrSorted, value) {
  let closest = arrSorted[0]
  let closestDiff = Math.abs(arrSorted[0] - value)
  for (let i = 1; i < arrSorted.length; i++) {
    let diff = Math.abs(arrSorted[i] - value)
    if (diff < closestDiff) {
      closestDiff = diff
      closest = arrSorted[i]
    } else {
      return closest
    }
  }
  return arrSorted[arrSorted.length - 1]
}

/*
Estimate the aspect ratio based on width x height (order doesn't matter)
*/
export function estimateAspectRatio(dim1, dim2, errorAllowed, aspectRatio) {
  let ratio = Math.max(dim1, dim2) / Math.min(dim1, dim2)
  if (ratio in LOOKUP) {
    return LOOKUP[ratio] === aspectRatio
  }

  // Look by approximation
  let closest = findClosest(RATIOS, ratio)
  if (Math.abs(closest - ratio) <= errorAllowed / 100) {
    return LOOKUP[closest] === aspectRatio
  }

  return false
}