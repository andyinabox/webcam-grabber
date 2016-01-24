var webcamGrabber = require('../index.js');

var video = webcamGrabber(600, 400);

document.body.appendChild(video);

video.play();