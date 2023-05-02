// Adapted from: https://betterprogramming.pub/how-to-use-jsx-without-react-21d23346e5dc 
// Adapted from: https://stackoverflow.com/questions/30430982/can-i-use-jsx-without-react-to-inline-html-in-script 
// Adapted from: https://github.com/developit/vhtml
// Adapted from: https://babeljs.io/docs/babel-preset-react


export const createElement = (tag, props, ...children) => {
	const element = document.createElement(tag)

	Object.entries(props || {}).forEach(([name, value]) => {
		if (name.startsWith('on') && name.toLowerCase() in window)
			element.addEventListener(name.toLowerCase().substr(2), value)
		else element.setAttribute(name, value.toString())
	})

	children.forEach((child) => {
		appendChild(element, child)
	})

	return element

}