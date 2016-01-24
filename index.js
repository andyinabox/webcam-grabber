// polyfill for Object.assign
require('es6-object-assign').polyfill();

// getUserMedia polyfill
var getUserMedia = require('getusermedia');

function webcamGrabber(width, height, opts) {
	// create video DOM dlement
	var v = document.createElement('video');
	var constraints = Object.assign(_defaultConstraints(width, height), opts);

	// set video player width and height
	v.width = width;
	v.height = height;

	// init getUserMedia
	getUserMedia(constraints, function(err, stream) {
		if(err) {
			throw new Error(err);
		}

		// http://www.kirupa.com/html5/accessing_your_webcam_in_html5.htm
		v.src = window.URL.createObjectURL(stream);
	});

	return v;
}

// setup constraints for getUserMedia
function _defaultConstraints(width, height) {
	return {
		video: {
			width: { min: width, ideal: width }
			, height: { min: height, ideal: height}
		}
	}
}

module.exports = webcamGrabber;