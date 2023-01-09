//Global variable
var btn = [];

//Runs the code once the page is fully loaded
$(document).ready(function () {

    //Displays the date on the Current Day ID in the month, day and year format
    var today = dayjs();
    $('#currentDay').text(today.format('MMM D, YYYY'));
    
    //Change the date format to obtain the hours in 24H format
    var militaryhour = today.format("HH");
    console.log(militaryhour);


    //Initiate a for loop to compare the time and for the class to dinalically chate to past, present or future
    for (var i = 0 ; i<19 ; i++){
      //if the 24 hour fomrat matches the time block, then it changes the class to the present format      
      if (i == militaryhour){
        $("#hour-"+i).attr("class", "row time-block present");
      }
      
      //if the 24 hour format is bigger than the time block, then it changes the class to the past format
      if (i<militaryhour){
        $("#hour-"+i).attr("class", "row time-block past");
      }

      //if the 24 hour format is smaller that the time block, then it changes the class to the future format
      if(i>militaryhour){
        $("#hour-"+i).attr("class", "row time-block future");
      }
}


//Obtain the buttons and check if there is something in local storage


for (var i = 8 ; i<19 ; i++){
  btn[i] = $("#hour-"+i).children("button").click(function(){
    alert("button " + this.btn[i] + " was clicked", position());
      function positon(){
        return this.btn[i];
      }
  }) 
  console.log(btn[i]);
}

for (var i = 8 ; i<19 ; i++){
  

}


    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //

    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
  });
  