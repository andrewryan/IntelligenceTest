//Created by Andrew Ryan
var userScore = 0;
function validateQ1()
{
	var userEntered = document.getElementById("usr").value;
	//error checking courtesy of x15-InstantValidation lab
	if(isNaN(userEntered) == true)
	{
		document.getElementById("usrError").innerHTML="The answer must only contain numbers, please try again.";
	    document.getElementById("usrGroup").classList.add("has-error");
	    document.getElementById("usrGroup").classList.remove("has-success");
	}
	else if(userEntered != 18)
	{
		document.getElementById("usrError").innerHTML="Incorrect, keep trying.";
	    document.getElementById("usrGroup").classList.add("has-error");
	    document.getElementById("usrGroup").classList.remove("has-success");
	}
	else
	{
		document.getElementById("usrError").innerHTML="Congratulations you got it!";
		document.getElementById("usrGroup").classList.add("has-success");
		document.getElementById("usrGroup").classList.remove("has-error");
		userScore++;
	}
	setCookie("questionOne", userEntered);
	console.log(getCookie("questionOne"));
}
function validateQ2()
{
	var userEntered = document.getElementById("usr").value;
	//error checking courtesy of x15-InstantValidation lab
	if(isNaN(userEntered) == true)
	{
		document.getElementById("usrError").innerHTML="The answer must only contain numbers, please try again.";
	    document.getElementById("usrGroup").classList.add("has-error");
	    document.getElementById("usrGroup").classList.remove("has-success");
	}
	else if(userEntered != 26)
	{
		document.getElementById("usrError").innerHTML="Incorrect, keep trying.";
	    document.getElementById("usrGroup").classList.add("has-error");
	    document.getElementById("usrGroup").classList.remove("has-success");
	}
	else
	{
		document.getElementById("usrError").innerHTML="Congratulations you got it!";
		document.getElementById("usrGroup").classList.add("has-success");
		document.getElementById("usrGroup").classList.remove("has-error");
		userScore++;
	}
	setCookie("questionTwo", userEntered);
	console.log(getCookie("questionTwo"));
}
function validateQ3()
{
	var userEntered = document.getElementById("usr").value;
	//error checking courtesy of x15-InstantValidation lab
	if(isNaN(userEntered) == true)
	{
		document.getElementById("usrError").innerHTML="The answer must only contain numbers, please try again.";
	    document.getElementById("usrGroup").classList.add("has-error");
	    document.getElementById("usrGroup").classList.remove("has-success");
	}
	else if(userEntered != 3)
	{
		document.getElementById("usrError").innerHTML="Incorrect, keep trying.";
	    document.getElementById("usrGroup").classList.add("has-error");
	    document.getElementById("usrGroup").classList.remove("has-success");
	}
	else
	{
		document.getElementById("usrError").innerHTML="Congratulations you got it!";
		document.getElementById("usrGroup").classList.add("has-success");
		document.getElementById("usrGroup").classList.remove("has-error");
		userScore++;
	}
	setCookie("questionThree", userEntered);
	console.log(getCookie("questionThree"));
}

var score = 0;
function evalResults()
{
	var resultOne = getCookie("questionOne");
	var resultTwo = getCookie("questionTwo");
	var resultThree = getCookie("questionThree");

	if(resultThree == 3)
	{
		document.getElementById("output3").innerHTML= "Submission for question three: " + resultThree + "  -- Correct.";
		score++;
	}
	else
	{
		document.getElementById("output3").innerHTML= "Submission for question three: " + resultThree + "  -- Incorrect.";
	}
	if(resultTwo == 26)
	{
		document.getElementById("output2").innerHTML= "Submission for question two: " + resultTwo + "  -- Correct.";
		score++;
	}
	else
	{
		document.getElementById("output2").innerHTML= "Submission for question two: " + resultTwo + "  -- Incorrect.";
	}
	if(resultOne == 18)
	{
		document.getElementById("output").innerHTML= "Submission for question one: " + resultOne + "  -- Correct.";
		score++;
	}
	else
	{
		document.getElementById("output").innerHTML= "Submission for question one: " + resultOne + "  -- Incorrect.";
	}
	
	if(score == 1)
	{
		document.getElementById("outputScore").innerHTML= "Percentage = 33%";
	}
	else if(score == 2)
	{
		document.getElementById("outputScore").innerHTML= "Percentage = 67%";
	}
	else if(score == 3)
	{
		document.getElementById("outputScore").innerHTML= "Percentage = 100%";
	}
	else
	{
		document.getElementById("outputScore").innerHTML= "Percentage = 0%";
	}
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue)
{
    document.cookie = cname + "=" + cvalue + ";" + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function navPage2()
{
    location.assign("q2.html");
}
function navPage3()
{
    location.assign("q3.html");
}
function navResults()
{
    location.assign("results.html");
}
function navRestart()
{
    location.assign("index.html");
}