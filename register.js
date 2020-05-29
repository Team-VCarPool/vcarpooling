function validate(pooltype)
{
	if (document.getElementById("pooltype").value == 'Rider') {
	if (document.getElementById("inp1").value.length == 0 || document.getElementById("email").value.length == 0 || 
		document.getElementById("pass").value.length == 0 ||document.getElementById("contact").value.length == 0) {
		alert("Mandatory field to be filled!");
	}
	else{
		if(confirm("Success!! Sign in to your account now"))
		window.location.href = "signin.html";
	}
}
else if (document.getElementById("pooltype").value == 'Provider') {
	if (document.getElementById("inp1").value.length == 0 || document.getElementById("email").value.length == 0 || 
		document.getElementById("pass").value.length == 0 ||document.getElementById("contact").value.length == 0 || 
		document.getElementById("dl").value.length == 0 || document.getElementById("vRC").value.length == 0) {
		alert("Mandatory field to be filled!");
	}
	else{
          if(confirm("Success!! Sign in to your account now"))
          window.location.href = "signin.html";      
	}
}
else
{
	alert("Something is Wrong!");
}
return false;
}