function randomBtnColorStop() {
	let red = Math.floor(Math.random() * 255)
	let green = Math.floor(Math.random() * 255)
	let blue = Math.floor(Math.random() * 255)
	let bgBtnColor = `rgb(${red}, ${green}, ${blue})`
	console.log(bgBtnColor)
	const button2 = document.querySelector('#stop')
	button2.style.backgroundColor = bgBtnColor
	let red2 = Math.floor(Math.random() * 255)
	let green2 = Math.floor(Math.random() * 255)
	let blue2 = Math.floor(Math.random() * 255)
	let btnColor = `rgb(${red2}, ${green2}, ${blue2})`
	button2.style.color = btnColor
}

export default randomBtnColorStop
