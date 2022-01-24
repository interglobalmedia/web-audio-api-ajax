// create random background color
function randomBgColor() {
	let red = Math.floor(Math.random() * 256)
	let green = Math.floor(Math.random() * 256)
	let blue = Math.floor(Math.random() * 256)
	let bgColor = `rgb(${red}, ${green}, ${blue})`
	console.log(bgColor)
	document.body.style.backgroundColor = bgColor
}

export default randomBgColor
