<script>

  var today = new Date();
  var day = today.getDay();
  var daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let Day_Selection = "";
  if(daylist[day] == "Sunday"){
    Day_Selection = "We are Closed. See you Tuesday!";
  }else if(daylist[day] == "Monday"){
    Day_Selection = "We are Closed. See you Tuesday!";
       
  }else if(daylist[day] == "Tuesday"){
    Day_Selection = "Try our Pork Chop Nugget Sammich.";
     
  }else if(daylist[day] == "Wednesday"){
    Day_Selection = "We are serving our delightful Fried CHIX Sammich.";
 
  }else if(daylist[day] == "Thursday"){
    Day_Selection = "Enjoy a delicious Shrimp PoBoy.";

  }else if(daylist[day] == "Friday"){
    Day_Selection = "Give our irresistible Cajun Seafood Roll a try.";
 
  }else if(daylist[day] == "Saturday"){
    Day_Selection = "Choose BBQ Sammiches or Crab & Shrimp Boil Bags.";
  }
  console.log(
    "Today is : " + daylist[day] + "." + Day_Selection
  );
  document.getElementById("today_special").innerHTML =  "Today is " + daylist[day] + ". " + Day_Selection
</script>
