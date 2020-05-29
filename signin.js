function check(){
const details = {
v1: {name: 'berlin', password: '12345', type:'provider'},
v2: {name: 'palermo', password: 'qwerty',type:'rider'}
}

var id = document.getElementById("id").value;
console.log(document.getElementById("id2").value);
if(Object.keys(details).includes(id) && (details[id].password == document.getElementById("id2").value)){
if(details[id].type == 'rider'){
	window.location.href = "welcomerider.html";
}
else{
	window.location.href = "welcomeprovider.html";
}
}else{
alert('SORRY')
}
return false;
}