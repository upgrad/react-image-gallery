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
Estimate the aspect ratio based on width x height
*/
export function estimateAspectRatio(width, height, errorAllowed, aspectRatio) {
  let ratio = width / height; 
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

/*
Estimate the approximate width x height with error buffer
*/
export function approximateDimensions(dimensions, requiredDimensions, errorAllowed) {
	return new Promise((resolve) => {
		let approxMinWidth = errorAllowed / 100 * requiredDimensions.width - requiredDimensions.width 
		let approxMinHeight = errorAllowed / 100 * requiredDimensions.height - requiredDimensions.height
		let approxMaxWidth = errorAllowed / 100 * requiredDimensions.width + requiredDimensions.width 
		let approxMaxHeight = errorAllowed / 100 * requiredDimensions.height + requiredDimensions.height
		resolve({ widthError: dimensions.width < approxMaxWidth && dimensions.width > approxMinWidth , heightError: dimensions.height < approxMaxHeight && dimensions.height > approxMinHeight })
	})
}