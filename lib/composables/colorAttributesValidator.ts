const colorsAttributesValidator = () => {
	const colors = [
		'primary',
		'secondary',
		'accent',
		'error',
		'success',
		'warning',
		'info',
		'neutral',
	]
	const scales = ['100', '200', '300', '400', '500', '600', '700', '800', '900']

	const validAttributes: string[] = []
	colors.forEach(color => {
		validAttributes.push(`${color}`)
		scales.forEach(scale => {
			validAttributes.push(`${color}-${scale}`)
		})
	})

	const isValidAttribute = (attr: string) => validAttributes.includes(attr)

	return { isValidAttribute }
}

export default colorsAttributesValidator