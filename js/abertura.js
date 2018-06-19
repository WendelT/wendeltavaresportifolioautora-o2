var nome = readCookie(nome);
	
	if (nome == null) {
		nome = prompt("Gostaria de Informar seu nome? Se sim, Digite seu nome abaixo.");
		writeCookie("nome", nome, 1);
	}
	
	if(nome != null) {
		if(nome == "Joelma") {
		alert("Bem-vindo, ao meu portifólio Professora " + nome + "!  Desde já muito obrigado pela visita! Estarei no aguardo do meu 10!");
	} else
		alert("Bem-vindo, ao meu portifólio " + nome + "!  Desde já muito obrigado pela visita!");
	}

	



	//////---------------------------------- 
	function writeCookie(name, value, days){
	var expires = "";
	if(days){
		var date = new Date();
		date.setTime(date.getTime() + (24 * 60 * 60 * 1000 * days));
		expires = "; expires="+date.toGMTString();
	}
	document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name){
	var searchname = name + "=";
	var cookies = document.cookie.split(";");
	for(var i=0; i < cookies.length; i++){
		var c = cookies[i];
		while(c.charAt(0)==' ')
		c = c.substring(1, c.length);
		if(c.indexOf(searchname) == 0)
		return c.substring(searchname.length, c.length);
	}
	return null;

}
