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



//Retrieve stored information from local storage and show it
if (localStorage.getItem("#hour-8") != null){
  var retrieveinfo8 = JSON.parse(localStorage.getItem("#hour-8"));
  $("#hour-8").children("textarea").text(retrieveinfo8);
  console.log(retrieveinfo8);
}
if (localStorage.getItem("#hour-9") != null){
  var retrieveinfo9 = JSON.parse(localStorage.getItem("#hour-9"));
  $("#hour-9").children("textarea").text(retrieveinfo9);
  console.log(retrieveinfo8);
}

if (localStorage.getItem("#hour-10") != null){
  var retrieveinfo10 = JSON.parse(localStorage.getItem("#hour-10"));
  $("#hour-10").children("textarea").text(retrieveinfo10);
  console.log(retrieveinfo10);
}
if (localStorage.getItem("#hour-11") != null){
  var retrieveinfo11 = JSON.parse(localStorage.getItem("#hour-11"));
  $("#hour-11").children("textarea").text(retrieveinfo11);
  console.log(retrieveinfo10);
}
if (localStorage.getItem("#hour-12") != null){
  var retrieveinfo12 = JSON.parse(localStorage.getItem("#hour-12"));
  $("#hour-12").children("textarea").text(retrieveinfo12);
  console.log(retrieveinfo12);
}
if (localStorage.getItem("#hour-13") != null){
  var retrieveinfo13 = JSON.parse(localStorage.getItem("#hour-13"));
  $("#hour-13").children("textarea").text(retrieveinfo13);
  console.log(retrieveinfo13);
}
if (localStorage.getItem("#hour-14") != null){
  var retrieveinfo14 = JSON.parse(localStorage.getItem("#hour-14"));
  $("#hour-14").children("textarea").text(retrieveinfo14);
  console.log(retrieveinfo14);
}
if (localStorage.getItem("#hour-15") != null){
  var retrieveinfo15 = JSON.parse(localStorage.getItem("#hour-15"));
  $("#hour-15").children("textarea").text(retrieveinfo15);
  console.log(retrieveinfo15);
}
if (localStorage.getItem("#hour-16") != null){
  var retrieveinfo16 = JSON.parse(localStorage.getItem("#hour-16"));
  $("#hour-16").children("textarea").text(retrieveinfo16);
  console.log(retrieveinfo16);
}
if (localStorage.getItem("#hour-17") != null){
  var retrieveinfo17 = JSON.parse(localStorage.getItem("#hour-17"));
  $("#hour-17").children("textarea").text(retrieveinfo17);
  console.log(retrieveinfo17);
}
if (localStorage.getItem("#hour-18") != null){
  var retrieveinfo18 = JSON.parse(localStorage.getItem("#hour-18"));
  $("#hour-18").children("textarea").text(retrieveinfo18);
  console.log(retrieveinfo18);
}



//For loop to avoid big code
/*
for (var i = 8 ; i<19 ; i++){

  btn = $("#hour-"+i).children("button").click(function(){
    alert("button " + this.btn[i] + " was clicked", position());
      function positon(){
        return this.btn[i];
      }
  }) 
  console.log(btn[i]);
}
*/

//Obtain button and store information from the text area to local storage
$("#hour-8").children("button").click(function(){
  alert("8 AM event saved");
  var input8 = $("#hour-8").children("textarea").val();
  console.log(input8);
  localStorage.setItem("#hour-8", JSON.stringify(input8));
})
$("#hour-9").children("button").click(function(){
  alert("9 AM event saved");
  var input9 = $("#hour-9").children("textarea").val();
  console.log(input9);
  localStorage.setItem("#hour-9", JSON.stringify(input9));
})
$("#hour-10").children("button").click(function(){
  alert("10 AM event saved");
  var input10 = $("#hour-10").children("textarea").val();
  console.log(input10);
  localStorage.setItem("#hour-10", JSON.stringify(input10));
})
$("#hour-11").children("button").click(function(){
  alert("11 AM event saved");
  var input11 = $("#hour-11").children("textarea").val();
  console.log(input11);
  localStorage.setItem("#hour-11", JSON.stringify(input11));
})
$("#hour-12").children("button").click(function(){
  alert("12 PM event saved");
  var input12 = $("#hour-12").children("textarea").val();
  console.log(input12);
  localStorage.setItem("#hour-12", JSON.stringify(input12));
})
$("#hour-13").children("button").click(function(){
  alert("1 PM event saved");
  var input13 = $("#hour-13").children("textarea").val();
  console.log(input13);
  localStorage.setItem("#hour-13", JSON.stringify(input13));
})
$("#hour-14").children("button").click(function(){
  alert("2 PM event saved");
  var input14 = $("#hour-14").children("textarea").val();
  console.log(input14);
  localStorage.setItem("#hour-14", JSON.stringify(input14));
})
$("#hour-15").children("button").click(function(){
  alert("3 PM event saved");
  var input15 = $("#hour-15").children("textarea").val();
  console.log(input15);
  localStorage.setItem("#hour-15", JSON.stringify(input15));
})
$("#hour-16").children("button").click(function(){
  alert("4 PM event saved");
  var input16 = $("#hour-16").children("textarea").val();
  console.log(input16);
  localStorage.setItem("#hour-16", JSON.stringify(input16));
})
$("#hour-17").children("button").click(function(){
  alert("5 PM event saved");
  var input17 = $("#hour-17").children("textarea").val();
  console.log(input17);
  localStorage.setItem("#hour-17", JSON.stringify(input17));
})
$("#hour-18").children("button").click(function(){
  alert("6 PM event saved");
  var input18 = $("#hour-18").children("textarea").val();
  console.log(input18);
  localStorage.setItem("#hour-18", JSON.stringify(input18));
})

  });
  