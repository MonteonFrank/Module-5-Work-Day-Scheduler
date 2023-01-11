//Runs the code once the page is fully loaded
$(document).ready(function () {

    //Displays the date on the Current Day ID in the month, day and year format
    var today = dayjs();
    $('#currentDay').text(today.format("MMM D, YYYY h:mm A"));
    
    //Change the date format to obtain the hours in 24H format
    var militaryhour = today.format("HH");

    //Initiate a for loop to compare the time and for the class to dinamically change to past, present or future
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

    //For Cycle to retrieve adata from local storage and display it in the correct time block
    for (var i = 0 ; i<19 ; i++){
          if (localStorage.getItem("#hour-"+i) != null){
              var retrievedata = JSON.parse(localStorage.getItem("#hour-"+i))
              $("#hour-"+i).children("textarea").text(retrievedata);
          }
    }

    //Function to know that a button was clicked and saves the string in the text box in the correct time block and saves it in local storage
    $('.saveBtn').on("click", function(){
          alert("Event Saved");
          var input = $(this).siblings("textarea").val()
          var key = $(this).parent().attr("id")
          localStorage.setItem("#"+key, JSON.stringify(input));
    })

  });
  