import lateNightDrive from './static/audio/exports'
import play from './modules/play'
import randomBgColor from './modules/randomBgColor'
import randomBtnColorStart from './modules/randomBtnColorStart'
import randomBtnColorStop from './modules/randomBtnColorStop'
import refresh from './modules/refresh'

import './styles/styles.scss'

const context = new AudioContext()
const audioElement = document.getElementById('track')
/* set loop property on audio element and dynamically add the loop attribute to the audio element. Set the value of the attribute to true. */
audioElement.loop = true
const source = context.createMediaElementSource(audioElement)

source.connect(context.destination)
// create buffer source using AJAX request
const bufferSource = context.createBufferSource()
const request = new XMLHttpRequest()
request.open('GET', lateNightDrive, true)
request.responseType = 'arraybuffer'
request.onload = () => {
	context.decodeAudioData(request.response, (buffer) => {
		bufferSource.buffer = buffer
		// ...
	})
}
request.send()
// buffer
bufferSource.start()
// when un-commented, the music plays on page  load
// audioElement.play();

// start/stop buttons and confetti variables
const startButton = document.getElementById('start')
const stopButton = document.getElementById('stop')
const refreshButton = document.getElementById('refresh')
let confettiSettings = { target: 'my-canvas' }
let confetti = new ConfettiGenerator(confettiSettings)

refreshButton.addEventListener('click', refresh)

// start button listener
startButton.addEventListener('click', (e) => {
	play()
	if (context.state === 'suspended') {
		context.resume()
		// HTML
	}
	randomBgColor()
	randomBtnColorStart()
	confetti.render()
})

// stop button listener
stopButton.addEventListener('click', (e) => {
	context.suspend()
	bufferSource.stop()
	audioElement.pause()
	randomBgColor()
	randomBtnColorStop()
	confetti.render()
})
