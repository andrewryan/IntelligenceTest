//Created by Andrew Ryan
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
	}
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
	}
}
function validateQ3()
{
	var userEntered = document.getElementById("usr").value;
	//document.cookie = userEntered;
	//console.log(userEntered);
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
	}
	setCookie("questThree", userEntered);
	//var cookieThree = setCookie(cookieThree, userEntered);
	//console.log(cookieThree);
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue)
{
    document.cookie = cname + "=" + cvalue + ";" + ";path=/";;
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
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
    return userEntered;
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