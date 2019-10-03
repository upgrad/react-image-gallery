export const size = () => {

}

export const dimensions = () => {

}

export const validate = (file, restrictions) => {
	let errors = []
	return new Promise((resolve, reject) => {
		if(!restrictions || !Object.keys(restrictions).length) return resolve()
		if(restrictions.size && file.size > restrictions.size) errors.push(`Uploaded image's size exceeds the accepted limit of ${Math.ceil(restrictions.size / 1000000)} MB.`)
		if(restrictions.dimensions) {
			let reader = new FileReader()
			reader.onload = function(e) {
				let img = new Image()
				img.src = e.target.result
				img.onload = function () {
					if(restrictions.dimensions.width !== 0 && this.width !== restrictions.dimensions.width) errors.push(`Uploaded image's width does not match required value of ${restrictions.dimensions.width} pixels.`)
					if(restrictions.dimensions.height !== 0 && this.height !== restrictions.dimensions.height) errors.push(`Uploaded image's height does not match required value of ${restrictions.dimensions.height} pixels.`)
					if(errors.length) reject(errors)
					else resolve()
				}
			}
			reader.readAsDataURL(file)
		} else {
			if(errors.length) reject(errors)
			else resolve()
		}
	})
}
