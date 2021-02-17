
function unesiElementUListu(){
	var element = document.createElement("Li");
    var unos = document.getElementById("product_name").value; 
    var text_element = document.createTextNode(unos);
    element.appendChild(text_element);
    document.getElementById("lista").appendChild(element);
	brojiElementeListe();
}

function obrisiElementeListe(){
	if(confirm("Warning! Do you want to delete all elements from list?")){
		var lista = document.getElementById("lista");
		while(lista.firstChild){
			lista.removeChild(lista.firstChild)
		}	
		var brojac = document.getElementById("brojac");
		brojac.innerHTML = 0;
	}
	else{
		alert("Your data will not deleted!")
	}
}

function brojiElementeListe(){
	var lista = document.getElementById("lista").getElementsByTagName("li");
	var i=0, brojac=-1;
	for(i = 0; i <= lista.length; i++){
		brojac++
	}
	document.getElementById("brojac").innerHTML = brojac;
}



