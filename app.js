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
$(".btn").on("click", function(event) {
    event.preventDefault();
    
    var nameStored = $("#nameValue").val().trim();
    var destinationStored = $("#destinationValue").val().trim();
    var frequencyStored = $("#frequencyValue").val().trim();

    var trainInfo = {
        trainName: nameStored,
        destinationName: destinationStored,
        frequencyName: frequencyStored,

    }
    database.ref().push(trainInfo);
});

