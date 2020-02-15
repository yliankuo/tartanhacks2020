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
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
		ActivateNotif();
        $('#status').text("Status: Danger");
        $('#bar').css("background", "#ff0000");
        $('.buttons').css("background", "#c62828");
        $('.buttons').css("border-color", "#8e0000");
	} else {
		clearTimeout(timeout);
        $('#status').text("Status: OK");
        $('#bar').css("background", "#35e859");
        $('.buttons').css("background", "#66fa75");
        $('.buttons').css("border-color", "#2e8c38");
	}
	notifFlag = !notifFlag;
}

function ActivateNotif() {
	timeout = setTimeout(function () {
			navigator.geolocation.getCurrentPosition(onSuccess, onError);
            ActivateNotif();
		}, 10000);
}

var recordFlag = false;
var src = "myrecording.wav";
var mediaRec1 = null;
function recordAudio() {
    if(!recordFlag) {
        $('#record-btn').css("background", "#c62828");
        $('#record-btn').css("border-color", "#8e0000");
    if(mediaRec1){
        mediaRec1.stop();
    }
    mediaRec1 = new Media(src,
        // success callback
        function() {
            console.log("recordAudio():Audio Success");
        },

        // error callback
        function(err) {
            console.log("recordAudio():Audio Error: "+ err.code);
        });
    // Record audio
    mediaRec1.startRecord();
    console.log("RECORD START");
    recordFlag = true;
    } else {
        $('#record-btn').css("background", "#66fa75");
        $('#record-btn').css("border-color", "#2e8c38");
        recordFlag = false;
        mediaRec1.stopRecord();
        console.log("RECORD STOP");
        mediaRec1.play();
    }
}

var audioFlag = false;
var src1 = "file:///android_asset/www/media/whistle.mp3";
var mediaRec = null;
function playAudio() {
    if(!audioFlag) {
        $('#whistle-btn').css("background", "#c62828");
        $('#whistle-btn').css("border-color", "#8e0000");
    	if(mediaRec == null) {
    		mediaRec = new Media(src1,
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
        audioFlag = true;
    } else {
    	mediaRec.stop();
        $('#whistle-btn').css("background", "#66fa75");
        $('#whistle-btn').css("border-color", "#2e8c38");
        audioFlag = false;
    }

}