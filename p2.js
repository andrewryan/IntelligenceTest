//Created by Andrew Ryan
//userScore = Number(userScore);
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
	//var userInput2 = 0;// = userEntered;
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
	//console.log(getCookie("questionTwo"));
	setCookie("questionTwo", userEntered);
	console.log(getCookie("questionTwo"));
}
function validateQ3()
{
	var userEntered = document.getElementById("usr").value;
	//var userInput3 = 0;
	//userInput3 = userEntered;
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
function evalResults()
{
	//console.log(userEntered);
	//console.log(document.cookie);
	//resultThree = Number(resultThree);
	var resultOne = getCookie("questionOne");
	var resultTwo = getCookie("questionTwo");
	var resultThree = getCookie("questionThree");
	document.getElementById("output").innerHTML= resultOne + resultTwo + resultThree;


	for(i = 0; i < 4; i++)
	{
	if(resultThree == 3)
	{
		document.getElementById("output").innerHTML= "Submission for question three: " + resultThree + "   Correct.";
	}
	else
	{
		document.getElementById("output").innerHTML= "Submission for question three: " + resultThree + "   Incorrect.";
	}
	if(resultTwo == 26)
	{
		document.getElementById("output2").innerHTML= "Submission for question two: " + resultTwo + "   Correct.";
	}
	else
	{
		document.getElementById("output2").innerHTML= "Submission for question two: " + resultTwo + "   Incorrect.";
	}
	if(resultOne > 18)
	{
		document.getElementById("output3").innerHTML= "Submission for question one: " + resultOne + "   Correct.";
	}
	else
	{
		document.getElementById("output3").innerHTML= "Submission for question one: " + resultOne + "   Incorrect.";
	}
}

	/*
	console.log(userScore);
	if(resultOne == 18)
	{
		document.getElementById("output").innerHTML= "Your score for the test is 33%";
	}
	else if(resultTwo == 26)
	{
		document.getElementById("output").innerHTML= "Your score for the test is 67%";
	}
	else if(resuleThree == 3)
	{
		document.getElementById("output").innerHTML= "Your score for the test is 100%";
	}
	else
	{
		document.getElementById("output").innerHTML= "Your score for the test is 0%";
	}
	
	if(resultOne != 18 && resultTwo != 26 && resultThree != 3)
	{
		document.getElementById("output").innerHTML= "Your score for the test is 0%";
	}
	else if(resultOne == 18 && resultTwo != 26 && resultThree != 3)
	{
		document.getElementById("output").innerHTML= "Your score for the test is 33%";
	}
	else if(resultOne == 18 && resultTwo == 26 && resultThree != 3)
	{
		document.getElementById("output").innerHTML= "Your score for the test is 67%";
	}
	else //if(resultOne == 18 && resultTwo != 26 && resultThree == 3)
	{
		document.getElementById("output").innerHTML= "Your score for the test is 100%";
	}
	*/
	/*
	if(resultThree == 3)
	{
		document.getElementById("output").innerHTML= "Submission for question three: " + resultThree + "   Correct.";
	}
	else
	{
		document.getElementById("output").innerHTML= "Submission for question three: " + resultThree + "   Incorrect.";
	}
	if(resultTwo == 26)
	{
		document.getElementById("output").innerHTML= "Submission for question two: " + resultTwo + "   Correct.";
	}
	else
	{
		document.getElementById("output").innerHTML= "Submission for question two: " + resultTwo + "   Incorrect.";
	}
	if(resultOne > 18)
	{
		document.getElementById("output").innerHTML= "Submission for question one: " + resultOne + "   Correct.";
	}
	else
	{
		document.getElementById("output").innerHTML= "Submission for question one: " + resultOne + "   Incorrect.";
	}
	*/
	//document.getElementById("output").innerHTML= resultThree;
	//console.log(getCookie("questionThree"));
	//console.log(resultThree);
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
    location.assign("file:///Users/staceyalves/Desktop/CINS%20110/p02-IntelligenceTest/q2.html?");
}
function navPage3()
{
    location.assign("file:///Users/staceyalves/Desktop/CINS%20110/p02-IntelligenceTest/q3.html");
}
function navResults()
{
    location.assign("file:///Users/staceyalves/Desktop/CINS%20110/p02-IntelligenceTest/results.html");
}
function navRestart()
{
    location.assign("file:///Users/staceyalves/Desktop/CINS%20110/p02-IntelligenceTest/index.html?");
}