function resetPwd(){
const details = {
v1: {name: 'phani', password: '12345'},
v2: {name: 'palermo', password: 'qwerty'}
}

var id = document.getElementById("vid").value
if(Object.keys(details).includes(id) && document.getElementById("pwd").value === document.getElementById("pwd2").value &&
document.getElementById("pwd").value.length != 0 && document.getElementById("pwd2").value.length != 0 ){
details[id].password=document.getElementById("pwd").value
	if(confirm("Reidrecting to login page")) 
		window.location = 'signin.html';
}
else if(document.getElementById("pwd").value !== document.getElementById("pwd2").value)
{
	alert("Passwords doesnt match!");
}
else if(document.getElementById("pwd").value.length == 0 || document.getElementById("pwd2").value.length == 0)
{
	alert("You have left mandatory fields empty!");
}
else
{
alert("Authentication Error!");
}
}