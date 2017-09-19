var onSwitch=document.getElementById("turnOn");
onSwitch.addEventListener("click", lightOn);

var offSwitch=document.getElementById("turnOff");
offSwitch.addEventListener("click", lightOff);

var nameField=document.getElementById("nameInput");
nameField.addEventListener("blur", check);

function check()
{
	var nameField=document.getElementById("nameInput");
	var theName = nameField.value;
	console.log(theName+"? That's really your name?");
}

function lightOn() 
{
	var lightBox=document.getElementById('light');
	//lightBox.style.backgroundColor="yellow";
	console.log("Light turned on.");
	//alert("on");
	lightBox.className="lightOn";
	//var oldText=lightBox.innerHTML;
	lightBox.innerHTML="You turned the light on";
	lightBox.style.borderStyle="dashed";
	lightBox.style.borderWidth="3px";
}
function lightOff() 
{
	//alert("off");
	console.log("Light turned off.");
	var lightBox=document.getElementById('light');
	//lightBox.style.backgroundColor="gray";
	lightBox.className="lightOff";
	//var oldText=lightBox.innerHTML;
	lightBox.innerHTML="You turned the light off";
	lightBox.style.borderStyle="dotted";
	lightBox.style.borderWidth="3px";
}

var greetButton=document.getElementById("greeting");
greetButton.addEventListener("click", greetUser);

function greetUser()
{
	var inputField = document.getElementById("nameInput");
	var theName = inputField.value;
	if (theName==null || theName=="")
	{
		var paragraphField = document.getElementById("output");
		paragraphField.innerHTML="Error: You didn't enter a name";
	} 
	else
	{
		var theGreeting = "Welcome "+theName;
		var paragraphField = document.getElementById("output");
		paragraphField.innerHTML=theGreeting;
	}

}

