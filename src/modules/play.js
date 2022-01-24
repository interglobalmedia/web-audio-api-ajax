/* place audioElement.play() inside function so that audio only starts when click on start button instead of on page load. */
function play() {
	const audioElement = document.getElementById('track')
	audioElement.play()
}

export default play
