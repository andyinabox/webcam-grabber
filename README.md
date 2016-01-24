Webcam Grabber
==============

This is a simple npm module for grabbing input from the user's webcam. It is intended to be used in a setup similar to [stackgl](http://stack.gl) and processed using [browserify](http://browserify.org/).

I used [this post](http://www.kirupa.com/html5/accessing_your_webcam_in_html5.htm) as a starting point when figuring out how to use `getUserMedia`, and utilize the [`getusermedia`](https://www.npmjs.com/package/getusermedia) npm package for cross-browser compatibilit.

Usage
------

Usage is pretty straightforward, you pass a width and height for the video capture and an optional argument with setting for the `getUserMedia` [`constraints`](http://tools.ietf.org/html/draft-alvestrand-constraints-resolution-00#page-4) object.

```js

var webcamGrabber = require('webcam-grabber');

var video = webcamGrabber(600, 400, { audio: false });

document.body.appendChild(video);

video.play();

```

Example
-------

To run the included example:

```bash
npm install
npm run example
```
The example uses the [budo](https://github.com/mattdesl/budo) development server to run.