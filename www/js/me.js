//Geo Location Stuff     cordova-plugin-geolocation
var onSuccess = function(position) {
    // alert('Latitude: '          + position.coords.latitude          + '\n' +
    //       'Longitude: '         + position.coords.longitude         + '\n' +
    //       'Altitude: '          + position.coords.altitude          + '\n' +
    //       'Accuracy: '          + position.coords.accuracy          + '\n' +
    //       'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
    //       'Heading: '           + position.coords.heading           + '\n' +
    //       'Speed: '             + position.coords.speed             + '\n' +
    //       'Timestamp: '         + position.timestamp                + '\n');
    submit(position.coords.latitude, position.coords.longitude, username, null);
};
// onError Callback receives a PositionError object
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

var notifFlag = true;
var timeout;
function mainButton () {
	if(notifFlag) {
		ActivateNotif();
        $('#status').text("Status: Danger");
        $('#bar').css("background", "#ff0000");
	} else {
		clearTimeout(timeout);
        $('#status').text("Status: OK");
        $('#bar').css("background", "#35e859");
	}
	notifFlag = !notifFlag;
}

function ActivateNotif() {
	timeout = setTimeout(function () {
			navigator.geolocation.getCurrentPosition(onSuccess, onError);
		}, 500);
}

function recordAudio() {
    var src = "myrecording.wav";
    var mediaRec = new Media(src,
        // success callback
        function() {
            console.log("recordAudio():Audio Success");
        },

        // error callback
        function(err) {
            console.log("recordAudio():Audio Error: "+ err.code);
        });

    // Record audio
    mediaRec.startRecord();
    console.log("RECORD START");
    setTimeout(function() {
        mediaRec.stopRecord();
        console.log("RECORD STOP");
        mediaRec.play();
    }, 10000);
    mediaRec.play;
}

var audioFlag = true;
var src = "file:///android_asset/www/media/whistle.mp3";
var mediaRec = null;
function playAudio() {
    if(audioFlag) {
    	if(mediaRec == null) {
    		mediaRec = new Media(src,
		    // success callback
		    function() {
		        console.log("recordAudio():Audio Success");
		    },

			// error callback
		    function(err) {
		        console.log("recordAudio():Audio Error: "+ err.code);
		    });
    	}
    	mediaRec.play();
    } else {
    	if(mediaRec == null) {
    		mediaRec = new Media(src,
		    // success callback
		    function() {
		        console.log("recordAudio():Audio Success");
		    },

			// error callback
		    function(err) {
		        console.log("recordAudio():Audio Error: "+ err.code);
		    });
    	}
    	mediaRec.pause();
    }
    audioFlag = !audioFlag;
}