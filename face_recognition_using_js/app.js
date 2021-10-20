const video = document.getElementById('video')

Promise.all([
		faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
		faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
		faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
		faceapi.nets.faceExpressionNet.loadFromUri('/models')
	]).then(startVideo)

function startVideo() {
	navigator.getUserMedia(
	{ video: {} },
	stream =>  video.srcObject = stream,
	err => console.error(err)
	)
}
startVideo()
// video.addEventListener('play', ()=> {
// 	const canvas = faceapi.createCanvasFromMedia(video)
// 	document.body.append(canvas)
// 	const displaySize = {width: video.width, height: video.height }
// 	setInterval(async () => {
// 		const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
// 		const resizedDetections = faceapi.resizeResults(detections,displaySize)
// 		canvas.getContext('2d').clearReact(0, 0, canvas.width, canvas.height)
// 		faceapi.draw.drawDetections(vanvas, resizedDetections)
// 	}, 100)
// })