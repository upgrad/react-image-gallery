import { estimateAspectRatio } from './aspectRatioUtil'
export const validate = (file, restrictions) => {
	let errors = []
	return new Promise((resolve, reject) => {
		if (!restrictions || !Object.keys(restrictions).length) return resolve()
		if (restrictions.size && file.size > restrictions.size) errors.push(`Uploaded image's size exceeds the accepted limit of ${Math.ceil(restrictions.size / 1000000)} MB.`)
		if (!restrictions.dimensions) {
			validateAspectRatio(file, restrictions.aspectRatio, restrictions.errorAllowed).then(err => {
				if (err && err.length) errors.push(...err)
			}).then(() => {
				if (errors.length) reject(errors)
				else resolve()
			})
		} else {
			validateDimensions(file, restrictions.dimensions).then(err => {
				if (err && err.length) errors.push(...err)
			}).then(() => {
				if (errors.length) reject(errors)
				else resolve()
			})
		}
	})
}

const validateDimensions = (file, dimensions) => {
	return new Promise((resolve) => {
		if (!dimensions) return resolve()
		let errors = []
		let reader = new FileReader()
		reader.onload = function (e) {
			let img = new Image()
			img.src = e.target.result
			img.onload = function () {
				if (dimensions.width !== 0 && this.width !== dimensions.width) errors.push(`Uploaded image's width does not match required value of ${dimensions.width} pixels.`)
				if (dimensions.height !== 0 && this.height !== dimensions.height) errors.push(`Uploaded image's height does not match required value of ${dimensions.height} pixels.`)
				resolve(errors)
			}
		}
		reader.readAsDataURL(file)
	})

}

const validateAspectRatio = (file, aspectRatio, errorAllowed) => {
	return new Promise((resolve) => {
		console.log("inside")
		if (!aspectRatio) return resolve()
		let errors = []
		let reader = new FileReader()
		reader.onload = function (e) {
			let img = new Image()
			img.src = e.target.result
			img.onload = function () {
				if (!estimateAspectRatio(this.width, this.height, errorAllowed, aspectRatio)) errors.push(`Uploaded image's ratio does not match required Aspect Ratio of ${aspectRatio}.`)
				resolve(errors)
			}
		}
		reader.readAsDataURL(file)
	})

}

