//
//       Train Schedule HW javascript file
//
// -----------------------------------------
// 
firebase.initializeApp(config);
// Initialize Firebase
var config = {
    apiKey: "AIzaSyC4pHuiNvNoMMrmCujJw_3SZy7-JbSOc_c",
    authDomain: "train-scheduler-d2e47.firebaseapp.com",
    databaseURL: "https://train-scheduler-d2e47.firebaseio.com",
    projectId: "train-scheduler-d2e47",
    storageBucket: "",
    messagingSenderId: "921343952428"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
// main input Variables :)
  var trainName = $("#trainName-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var firstTrainTime = $("#firstTrainTime-input").val().trim();
  var freqMins = $("#freqMins-input").val().trim();
// variable to store input 
  // to create local temporary object to hold train data
  var newTrain = {
    name: trainName,
    dest: destination,
    ftrain: firstTrain,
    freq: frequency
  }

// Take in User Input from 'Form'...
// Capture Button Click
$("#add-train").on("click", function (event) {
  event.preventDefault();
// Grabbed values from text boxes
name = $("#name-input").val().trim();
dest = $("#dest-input").val().trim();
ftrain = $("#ftrain-input").val().trim();
freq = $("#freq-input").val().trim();
// Code for handling the push
database.ref().push({
  name: name,
  email: email,
  age: age,
  comment: comment,
  dateAdded: firebase.database.ServerValue.TIMESTAMP
});

});




    // Assume the following situations.

    // (TEST 1)
    // First Train of the Day is 3:00 AM
    // Assume Train comes every 3 minutes.
    // Assume the current time is 3:16 AM....
    // What time would the next train be...? (Use your brain first)
    // It would be 3:18 -- 2 minutes away

    // (TEST 2)
    // First Train of the Day is 3:00 AM
    // Assume Train comes every 7 minutes.
    // Assume the current time is 3:16 AM....
    // What time would the next train be...? (Use your brain first)
    // It would be 3:21 -- 5 minutes away


    // ==========================================================

    // Solved Mathematically
    // Test case 1:
    // 16 - 00 = 16
    // 16 % 3 = 1 (Modulus is the remainder)
    // 3 - 1 = 2 minutes away
    // 2 + 3:16 = 3:18

    // Solved Mathematically
    // Test case 2:
    // 16 - 00 = 16
    // 16 % 7 = 2 (Modulus is the remainder)
    // 7 - 2 = 5 minutes away
    // 5 + 3:16 = 3:21

    // Assumptions
    var tFrequency = 3;

    // Time is 3:30 AM
    var firstTime = "03:30";

    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    // Take right now (moment()) and find the difference between that parsed time and the parsed time value of firstTimeConverted and return it in minutes
    var diffTime = moment().diff(firstTimeConverted, "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + nextTrain.format("hh:mm"));
  </script>

</body>

</html>
