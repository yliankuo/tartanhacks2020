/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        console.log("ON START");
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        // LocalStorage.clear();
        console.log(window.location.href);
        LocalStorage.initialize();
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');

        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');

        // console.log('Received Event: ' + id);
    }
};

app.initialize();

var username = null;

function submitCredentials() {
    var url = "me.html";
    location.href = url;
    username = $('#username').text();
}

function submit(lat,lon, cmuId, user){
     var request = $.ajax({
      type: "POST",
      dataType: "json",
      url: "https://api.appery.io/rest/1/code/ae71106c-4bdf-476e-ba80-df3c60f07a27/exec",
      data: {"cmuId":cmuId,"user":user, "danger":true, "panic": true, "location":{"lat": lat,"lon":lon}},
      timeout: 10000,
      xhrFields: { withCredentials: false },

      success: function(data) {
        console.log("SUCCESS");
      },

      error: function(msg) {
        console.log(msg)
      },
    });

}

