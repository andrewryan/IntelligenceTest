function validate()
{
	var userEntered = document.getElementById("usr").value;
	console.log(userEntered);
	var userLength = userEntered.length;

	//error checking courtesy of x15-InstantValidation lab
	if(userLength < 10)
	{
		document.getElementById("usrError").innerHTML="Incorrect.";
	    document.getElementById("usrGroup").classList.add("has-error");
	    document.getElementById("usrGroup").classList.remove("has-success");
	    console.log("inside conditional check");
	}
	else
	{
		document.getElementById("usrError").innerHTML="Congratulations you got it!";
		document.getElementById("usrGroup").classList.add("has-success");
		document.getElementById("usrGroup").classList.remove("has-error");
	}
}