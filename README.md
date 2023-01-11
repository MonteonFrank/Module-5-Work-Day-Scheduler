# Module-5-Work-Day-Scheduler
<h1>Scheduler created by topics seen during Moldule 5</h1>

<h2><strong>Description</strong></h2>

<p>For this challenge, a partial code was provided and we had to fill it in using knowledge obtained by the topics seen during module 5, which was 3rd Party APIs, such as jQuery and Bootstrap.</p> 
  
<p>This challenge consists of creating a scheduler for working hours only and it displays the date on the top. During the day, the sections are colored grey, red and green which represents past, present and future respectfully. This assists the user by identifying what the time visually. This web application also allows the user to type the tasks to be completed during the day and this is sent to local storage and is retreived when the web page is refreshed or opened after being closed.</p>
 
<h2><strong>Programming Logic</strong></h2>
<p>An API called DayJS was used to retrieve information of what currently day and time it is. This date is then shown on top of the page while the time is also transfomred in 24 hour format, this with the intention of being compared against the ID tag "hour-#" in section to then switch the class appropiately to present, past or future.</p>
  
<p>The command $(this) was also used in order to reduce the amount of code used since it let us know what button was pushed instead of manually programming event listeners per button. Once the button is clicked, if there is a string inside the text area, it gets saved in local strorage.</p>


<h2><strong>What did I learn?</strong></h2>
<p>During this challenge, I learned how to use jQuery and learn more about local storage. I liked using jQuery instead of vanilla JavaScript since it reduces the amount of code used with the selectors. 

jQuery is much simpler to use and also compared with Challenge 4, it was much more easier to understand the concept and learn how to use it better</p>

<h2><strong>Screenshots and links</strong></h2>
<p>How the webpage should look when opening:</p>
<p>![image](https://user-images.githubusercontent.com/112662397/211706875-6ce91221-3127-458b-86d4-7b913cbe516d.png)</p>

<p>When saving an event, a pop up window stated the event was saved</p>
<p>![image](https://user-images.githubusercontent.com/112662397/211707062-5739b113-ac00-4ae4-ad48-a838dd2da042.png)</p>

<p>Event saved an be seen in local storage and when closing or reloading, its displayed</p>
<p>![image](https://user-images.githubusercontent.com/112662397/211707205-d3bf928c-0730-4a12-bf66-921e56556e83.png)</p>

<p>Time blocks change color as the time chages</p>
<p></p>

<p>Link to github pages </p>
<p>https://monteonfrank.github.io/Work-Day-Scheduler-using-3rd-Party-APIs---Bootcamp-Module-5/</p>

