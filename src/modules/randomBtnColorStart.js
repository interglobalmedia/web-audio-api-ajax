function randomBtnColorStart() {
	// set up random button background color
	let red = Math.floor(Math.random() * 255)
	let green = Math.floor(Math.random() * 255)
	let blue = Math.floor(Math.random() * 255)
	let bgBtnColor = `rgb(${red}, ${green}, ${blue})`
	console.log(bgBtnColor)
	const button1 = document.querySelector('#start')
	button1.style.backgroundColor = bgBtnColor
	// set up button color
	let red2 = Math.floor(Math.random() * 255)
	let green2 = Math.floor(Math.random() * 255)
	let blue2 = Math.floor(Math.random() * 255)
	let btnColor = `rgb(${red2}, ${green2}, ${blue2})`
	button1.style.color = btnColor
}

export default randomBtnColorStart
