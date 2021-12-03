datedaujourdhui = 0;

function getkeyword(input) {
	x = 0;
	while (x != 4) {
		x = x + 1;
		input = input.replace("qui ", " ").replace("que ", " ").replace("qu ", " ").replace("quoi ", " ").replace("comment ", " ").replace("quel ", " ").replace("lequel ", " ").replace("laquel ", " ").replace("lesquel ", " ").replace("duquel ", " ").replace("quels ", " ");
		input = input.replace("mais ", " ").replace("ou ", " ").replace("et ", " ").replace("donc ", " ").replace("or ", " ").replace("ni ", " ").replace("car ", " ");
		input = input.replace("le ", " ").replace("la ", " ").replace("les ", " ").replace("l ", " ").replace("un ", " ").replace("une " , " ").replace("des ", " ");
		input = input.replace("du ", " ").replace("de ", " ").replace("des "," ").replace("ce "," ").replace("c "," ");
		input = input.replace("est ", " ").replace("était ", " ").replace("sont ", " ").replace("cherche ", " ").replace("trouve ", " ").replace("donne ", " ");
		input = input.replace(/[^\w\sé\èàê]/gi, '');
	}
	return input;

}

function search(input) {
	if (exe == 0 && input.includes("synon")) {
		exe =  1;
		output = getkeyword(input);
		output = output.replace("moi", "").replace("synonyme", "").replace("s ", "").replace(" ", "")
		send("J'ai trouvé des synonymes de " + output + " <a target=\"_blank\" style=\"text-decoration: underline;\" href=\"http://www.synonymo.fr/synonyme/" + output + "\">ici</a>.")
	} //synonyme


	if (exe == 0 && input.includes("merci")) {
		exe = 1;
		send("Tout le plasir et pour moi.")
	} //remerciement



	if (exe == 0 && (input.includes("bonjour") || input.includes("salut") || input.includes("bonsoir") || input.includes("bonne jour"))) {
		exe = 1;
		send("Salutation mon chère.")
	} //salutation



	if (exe == 0 && (input.includes("au revoir") || input.includes("à bientôt") || input.includes("bonsoir") || input.includes("bonne nuit"))) {
		exe = 1;
		send("A plus tard, heureux d'avoir parler avec vous.")
	} //au revoir



	if (exe == 0 && (input.includes("date") || input.includes("heur") || input.includes("jour") || input.includes("minute"))) {
		exe = 1;
		datedaujourdhui = datedaujourdhui + 1;
		if (datedaujourdhui == 1) {
			datedaujourdhui = datedaujourdhui + 1;
			send("Nous sommes le " + date().day + "/" + date.month + "/" + date.year + ", il est " + date.hour + ":" + date.minute + ".");
		} else {
			send("Nous sommes le " + date.day + "/" + date.month + "/" + date.year + ", il est " + date.hour + ":" + date.minute + ".");
		}
	} //date


	if (exe == 0 && (((input.includes("tu") || input.includes("t'")) && input.includes("appel")) || (input.includes("ton") && input.includes("nom")))) {
		exe = 1;
		send("Le nom que ma donné mon propriétaire est Michel, mais tu peux m'appeler MichMich.");
	} //nom



	if (exe == 0 && input.includes("tu ") == false && (input.includes("wiki") || input.includes("recherche") || input.includes("qui") || input.includes("est", " ") || input.includes("qu'est ce que"))) {
		exe = 1;
		output = getkeyword(input).replace("wiki", "").replace("pédia ", "").replace("pedia ", "");
		send("Je pense que vous trouverez votre bohneur à propos de " + output + " <a target=\"_blank\" style=\"text-decoration: underline;\" href=\"https://fr.wikipedia.org/wiki/" + output + "\">ici</a>.");
	} //wikipédia



	if (exe == 0 && (input.includes("météo") || input.includes("tempé") || input.includes("temps") || input.includes("meteo"))) {
		exe = 1;
		send("voici la météo d\'aujourd\'hui: <br /><iframe seamless frameborder=\"0\" src=\"https://www.infoclimat.fr/public-api/mixed/iframeSLIDE?_ll=48.85341,2.3488&_inc=WyJQYXJpcyIsIjQyIiwiMjk4ODUwNyIsIkZSIl0=&_auth=CRNVQlQqXX9VeAM0B3EAKVA4UGVZLwEmVChXNAtuVisIYwNiBmZTNVc5WyYHKAM1AC0HZA80BDQDaApyWihSMwljVTlUP106VToDZgcoACtQflAxWXkBJlQ%2BVzELeFY0CG0DbwZ7UzBXOVs9BykDMAA6B3gPLwQ9A2YKblo%2FUjUJaFU5VDJdN1U8A34HKAAyUGJQYVluAT9UYVdhCzdWZwhiA2MGMFM1VztbJwcwAzUANgdvDzgENQNjCmtaKFIuCRNVQlQqXX9VeAM0B3EAKVA2UG5ZMg%3D%3D&_c=b957e7d781834c0156504f8f8a972a1c\"></iframe>")
	} //météo



	if (exe == 0) {
		exe = 1;
		send("Je n'ai pas trés bien compris votre demande, vous pouvez signaler mon manque de savoir <a style=\"text-decoration: underline;\" target=\"_blank\" href=\"https://github.com/augustin7698/michel/issues\">ici</a>.")
	} //error
}