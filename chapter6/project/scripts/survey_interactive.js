var phoneNumberField = document.getElementById("phone");
phoneNumberField.addEventListener("blur", goodLuck);
function goodLuck() 
{
	alert("Good Luck");
}

var nameField = document.getElementById("name");
nameField.addEventListener("input", questionOne);
function questionOne() 
{
	var nameField = document.getElementById("name");
	name = nameField.value;
	var paragraphField = document.getElementById("paraOne");
	paragraphField.innerHTML = "Have we met before, "+name+"?";
}

var favDishField = document.getElementById("favDish");
favDishField.addEventListener("change", questionTwo);
function questionTwo()
{
	var favDishField = document.getElementById("favDish");
	favDishField.style.backgroundColor = "green";
	var paragraphField = document.getElementById("paraTwo");
	paragraphField.style.backgroundColor = "green";
	paragraphField.innerHTML = "Good choice";
}

var restRatingField = document.getElementById("restRating");
restRatingField.addEventListener("change", questionThree);
function questionThree()
{
	var restRatingField = document.getElementById("restRating");
	restRating = restRatingField.value;
	var paragraphField = document.getElementById("paraThree");
	/*
	if(restRating <= 4) 
	{
		paragraphField.innerHTML = "Are you sure?";
	} 
	else if (restRating == 5)
	{
		paragraphField.innerHTML = "blah";
	}
	else if (restRating >= 6)
	{
		paragraphField.innerHTML = "Great.";
	}
	*/
	switch(restRating)
	{
		case "1":
			paragraphField.innerHTML = "You should totes add 9 to this rating";
			break;
		case "2":
			paragraphField.innerHTML = "Are you this critical of your mother's cooking too?";
			break;
		case "3":
			paragraphField.innerHTML = "You know...if you combine a 3 with a backwards 3, it looks like an 8... just saying...";
			break;
		case "4":
			paragraphField.innerHTML = "Are you sure?";
			break;
		case "5":
			paragraphField.innerHTML = "You can't go past this point. 0 - 4 are actually just an illusion of choice.";
			break;
		case "6":
			paragraphField.innerHTML = "Great";
			break;
		case "7":
			paragraphField.innerHTML = "At least you had a decent time";
			break;
		case "8":
			paragraphField.innerHTML = "So, you're experience was pretty good then, eh?";
			break;
		case "9":
			paragraphField.innerHTML = "Really though, what's the difference between a 9 and a 10? You should just bump it up another point";
			break;
		case "10":
			paragraphField.innerHTML = "Please come again!";
			break;
	}
}

var resetBtnField = document.getElementById("btn_reset");
resetBtnField.addEventListener("click", resetAlert);
function resetAlert()
{
	alert("Get it right this time!");
	var entirePageField = document.getElementById("entirePage");
	entirePageField.style.backgroundColor = "pink";
}

var submitBtnField = document.getElementById("btn_submit");
submitBtnField.addEventListener("submit", submitFunc);
function submitFunc()
{
	var phoneNumberField = document.getElementById("phone");
	var phoneNumber = phoneNumberField.value;
	var paragraphField = document.getElementById("paraFour");
	//if (phoneNumber == null || phoneNumber == "")
	//variable will evaluate to true if value is not: null, undefined, NaN, empty string(""), 0, false
	if (phoneNumber)
	{
		paragraphField.innerHTML = "Tricked you--phone number is required!";
		paragraphField.style.color = "red";
		paragraphField.style.backgroundColor = "gray";
		submitBtnField.addEventListener("submit", 
			function(event){event.preventDefault()});
		return false;
	}
	else 
	{
		paragraphField.innerHTML = "Thanks--can I call you tomorrow?";
		paragraphField.style.color = "green";
		paragraphField.style.backgroundColor = "black";
		return true;
	}
}





