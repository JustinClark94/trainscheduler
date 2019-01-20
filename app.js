// Initialize Firebase
var config = {
    apiKey: "AIzaSyCjwtVtjHIEkvFM9olklqAC8IcJq7MEJLc",
    authDomain: "trainscheduleproject-64c09.firebaseapp.com",
    databaseURL: "https://trainscheduleproject-64c09.firebaseio.com",
    projectId: "trainscheduleproject-64c09",
    storageBucket: "",
    messagingSenderId: "147989451466"
  };
  firebase.initializeApp(config);
  
  var database = firebase.database();
//On click, this will store values from form into a variable.
$("#submit").on("click", function(event) {
    event.preventDefault();
    
    var nameStored = $("#nameValue").val().trim();
    var trainStored = $("#firstTrainValue").val().trim();
    var destinationStored = $("#destinationValue").val().trim();
    var frequencyStored = $("#frequencyValue").val().trim();

    var trainInfo = {
        trainName: nameStored,
        firstTrain: trainStored,
        destinationName: destinationStored,
        frequencyName: frequencyStored,

    }
    database.ref().push(trainInfo);

    $("#nameValue").val("");
    $("#firstTrainValue").val("");
    $("#destinationValue").val("");
    $("#frequencyValue").val("");
});

database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    var train = childSnapshot.val().trainName;
    var first = childSnapshot.val().firstTrain;
    var destination = childSnapshot.val().destinationName;
    var frequency = childSnapshot.val().frequencyName;
    //var minutesAway = moment()
    //var next = first.add(minutes, frequency);
    //console.log(next)

    var newTrain =  $("<tr>").append(
        $("<td>").text(train),
        $("<td>").text(destination),
        $("<td>").text(frequency),
        $("<td>").text(first),


        // $("<td>").text(empRate),
        // $("<td>").text(empBilled)
    );
    $(".body").append(newTrain);
    
});