date1 = user = fetchresult = myvariable = exe = 0;

function getkeyword(input, dm1, dm2, dm3, dm4, dm5, dm6) {
	x = 0;
	input = " " + input + " ";
	while (x != 4) {
		x = x + 1;
		if (dm1 == 0) {
			input = input.replace(" michel ", " ").replace(" moi ", " ").replace(" sur ", " ");
		}
		if (dm2 == 0) {
			input = input.replace(" qui ", " ").replace(" que ", " ").replace(" qu ", " ").replace(" quoi ", " ").replace(" comment ", " ").replace(" quel ", " ").replace(" lequel ", " ").replace("laquel ", "").replace("lesquel ", "").replace("duquel ", "").replace("quels ", "");
		}
		if (dm3 == 0) {
			input = input.replace(" mais ", " ").replace(" ou ", " ").replace(" et ", " ").replace(" donc ", " ").replace(" or ", " ").replace(" ni ", " ").replace(" car ", " ");
		}
		if (dm4 == 0) {
			input = input.replace(" le ", " ").replace(" la ", " ").replace(" les ", " ").replace(" l ", " ").replace(" ce "," ").replace(" cet ", " ").replace(" cette "," ").replace(" c "," ").replace(" un ", " ").replace(" une " , " ").replace(" des ", " ");
		}
		if (dm5 == 0) {
			input = input.replace(" du ", " ").replace(" de ", " ").replace(" des "," ");
		}
		if (dm6 == 0) {
			input = input.replace(" est ", " ").replace(" était ", " ").replace(" sont ", " ").replace(" cherche ", " ").replace(" trouve ", " ").replace(" donne ", " ");
		}
	}
	return input.trim();
}


async function send(arg) {
	if (arg == 0) {
		input = document.getElementById("mess").value;
		if (input != "") {
			add("#message", "<div class=\"question\">" + input + "</div>");
			document.getElementById("mess").value = "";
			for (var i = 5 - 1; i >= 0; i--) {
				input = input.toLowerCase()
				input = input.replace("'", " ");
				input = input.replace("?", "");
				input = input.replace(",", "");
				input = input.replace("\\", "");
				input = input.replace("#", "");
				input = input.replace("&", "");
				input = input.replace("$", "");
				input = input.replace("[", "");
				input = input.replace("]", "");
				input = input.replace("é", "e");
				input = input.replace("è", "e");
				input = input.replace("ê", "e");
				input = input.replace("à", "a");
				input = input.replace("â", "a");
				input = input.replace("ô", "o");
				input = input.replace("  ", " ");
			}
			console.log(input);
			search(input);
		}
	} else {
		await wait(300);
		add("#message", "<div class=\"response\">" + arg + "</div>");
		document.getElementById("message").scroll(0, 100000000);
	}
}


function inclu(keyword) {
	return input.includes(keyword);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//function////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function synonyme() {
	output = getkeyword(input, 0, 0, 0, 0, 0, 0);
	output = output.replace("moi", "")
	output = output.replace("synonyme", "")
	output = output.replace("s ", "")
	output = output.replace(" ", "")
	send("J'ai trouvé plusieurs synonymes de <a target=\"_blank\" style=\"text-decoration: underline;\" href=\"http://www.synonymo.fr/synonyme/" + output + "\">" + output + "</a>.")
}

function antonyme() {
	output = getkeyword(input, 0, 0, 0, 0, 0, 0);
	output = output.replace("moi", "")
	output = output.replace("antonyme", "")
	output = output.replace("s ", "")
	output = output.replace(" ", "")
	send("J'ai trouvé plusieurs antonymes de <a target=\"_blank\" style=\"text-decoration: underline;\" href=\"http://www.antonyme.org/antonyme/" + output + "\">" + output + "</a>.")
}

function merci() {
	send("Tout le plasir est pour moi.");
}


function traduit() {
	if (! inclu("\"")) {
		send("Si vous voulez traduire une phrase, mettez la entre guillemets(\")...")
	} else {
		if (inclu("allemand")) {
			language = "allemand";
			lcode = "de";
		}
		if (inclu("anglai") || inclu("englai") || inclu("americain")) {
			language = "anglais";
			lcode = "en";
		}
		if (inclu("italien")) {
			language = "italien";
			lcode = "it";
		}
		if (inclu("espagnol")) {
			language = "espagnol";
			lcode = "es";
		}
		if (inclu("chinoi")) {
			language = "chinois";
			lcode = "zh";
		}
		if (inclu("japonai") || inclu("japponai") || inclu("japonnai") || inclu("japponnai")) {
			language = "japonais";
			lcode = "ja";
		}
		if (inclu("suedoi")) {
			language = "suédois";
			lcode = "sv";
		}
		if (inclu("russe")) {
			language = "russe";
			lcode = "ru";
		}
		if (inclu("danoi")) {
			language = "danois";
			lcode = "da";
		}
		if (inclu("ne") && inclu("landai")) {
			language = "néerlandais";
			lcode = "nl";
		}
		if (inclu("polonai")) {
			language = "polonais";
			lcode = "pl";
		}
		if (inclu("grec")) {
			language = "grec";
			lcode = "el";
		}
		if (inclu("finlandais")) {
			language = "finlandais";
			lcode = "fi";
		}
		if (inclu("portugai")) {
			language = "portugais";
			lcode = "pt";
		}
		content = input.match(/["][-a-zA-Z0-9@:%._\+~#= ]{1,5000}["]/);
		content = content[0].replace("\"", "");
		url = "https://www.deepl.com/translator#fr/" + lcode + "/" + content;
		send("J'ai demandé à DeepL de traduire votre phrase en " + language + " <a target=\"_blank\" style=\"text-decoration: underline;\" href=\"" + url + "\">ici</a>.");
	}
}


function salutations() {
	send("Salutation mon chère.");
}

function aurevoir() {
	send("A plus tard, heureux d'avoir parler avec vous.");
}

function mydate() {
	if (date1 == 0) {
		date1 = 1;
		send("Nous sommes le " + date().day + "/" + date.month + "/" + date.year + ", il est " + date.hour + ":" + date.minute + ".");
	} else {
		send("Nous sommes le " + date.day + "/" + date.month + "/" + date.year + ", il est " + date.hour + ":" + date.minute + ".");
	}
}

function nom() {
	send("Le nom que ma donné mon maitre est Michel, mais tu peux m'appeler MichMich ou Michou.");
}

function meteo() {
	send("Voici la météo d\'aujourd\'hui: <br /><iframe id=\"meteo\" seamless frameborder=\"0\" src=\"https://www.infoclimat.fr/public-api/mixed/iframeSLIDE?_ll=48.85341,2.3488&_inc=WyJQYXJpcyIsIjQyIiwiMjk4ODUwNyIsIkZSIl0=&_auth=CRNVQlQqXX9VeAM0B3EAKVA4UGVZLwEmVChXNAtuVisIYwNiBmZTNVc5WyYHKAM1AC0HZA80BDQDaApyWihSMwljVTlUP106VToDZgcoACtQflAxWXkBJlQ%2BVzELeFY0CG0DbwZ7UzBXOVs9BykDMAA6B3gPLwQ9A2YKblo%2FUjUJaFU5VDJdN1U8A34HKAAyUGJQYVluAT9UYVdhCzdWZwhiA2MGMFM1VztbJwcwAzUANgdvDzgENQNjCmtaKFIuCRNVQlQqXX9VeAM0B3EAKVA2UG5ZMg%3D%3D&_c=b957e7d781834c0156504f8f8a972a1c\"></iframe>")
}

function createur() {
	send("Mon créateur est Augustin, il s'est bien occupé de moi durant mon enfance.");
}

function wikipedia() {
	output = getkeyword(input, 0, 0, 0, 0, 1, 0);
	output = output.replace("wiki", "");
	output = output.replace("pedia ", "");
	send("Mon ami wiki m'a recommandé cela: <a target=\"_blank\" style=\"text-decoration: underline;\" href=\"https://fr.wikipedia.org/wiki/" + output + "\">" + output + "</a>.");
}

function error() {
	send("Je n'ai pas trés bien compris votre demande, vous pouvez signaler mon manque de savoir <a style=\"text-decoration: underline;\" target=\"_blank\" href=\"https://github.com/augustin7698/michel/issues\">ici</a>.<br />Vous pouvez rechercher votre requète sur google <a style=\"text-decoration: underline;\" target=\"_blank\" href=\"https://www.google.com/search?q=" + input + "\">ici</a>.")
}

function openweb() {
	website = input.replace("ouvre", "").replace(" ", "");
	if (website.includes("https://") || website.includes("http://")) {}
	else {
		website = "http://" + website;
	}
	if (website.match(/[h][t][t][p][s]?[:][/][/][a-zA-Z0-9-/&:%£$*:/!§;.]{3,30}[.][a-z]{0,3}[/]?[a-z/-]{0,2000}/)) {
		window.open(website, '_blank');
		send("Je vous ai ouvert " + website + " dans un nouvel onglet.");
	} else  {
		if (website.includes("instagram")) {
			window.open("https://instagram.com", '_blank');
			send("le site instagrame a bien été ouvert");
		}
		else if (website.includes("youtub")) {
			window.open("https://youtube.fr", '_blank');
			send("le site youtube a bien été ouvert");
		}
		else if (website.includes("tik") && website.includes("tok")) {
			window.open("https://tiktok.com", '_blank');
			send("le site Tik-Tok a bien été ouvert");
		}
		else if (website.includes("dailymotion")) {
			window.open("https://www.dailymotion.com", '_blank');
			send("le site dailymotion a bien été ouvert");
		}
		else {
			website = website + ".com";
			window.open(website, '_blank');
			send("Je vous ai ouvert " + website + " dans un nouvel onglet.");
		}
	}
}

function usernom() {
	send("Je ne connait aucun de mes maîtres ou de leurs informations, ce serait une offense à leurs confidentialité.");
}

function franceculture1() {
	number = 0;
	while (fetchresult[number]["diffusion"] == undefined) {
		number = number + 1;
	}
	if (fetchresult[number]["diffusion"]["url"] == null) {
		send("Selon France info, la dernière info majeur est: " + fetchresult[number]["diffusion"]["title"]);
	}
	else {
		send("Selon France info, la dernière info majeur est: <a target=\"_blank\" style=\"text-decoration: underline;\" href=\"" + fetchresult[number]["diffusion"]["url"] + "\">" + fetchresult[number]["diffusion"]["title"] + "</a>");
	}
}

function franceculture2() {
	title = content["title"];
	myurl = content["url"];
	send("France Culture m'a recommandé son dernier podcast intitulé: " + title + ".<br /><iframe allow=\"autoplay\" class=\"radio\" src=\"" + myurl + "\"></iframe>");
}

async function francecultur() {
	if (inclu("info")) {
		fetch('https://openapi.radiofrance.fr/v1/graphql?x-token=110a1bc4-2263-4cb8-b686-fdf835c0a0d6', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query: `
					query  {
						grid(station: FRANCEINFO, includeTracks: false) {
							... on DiffusionStep {
								id
								diffusion {
									id
									title
									standFirst
									url
									published_date
									podcastEpisode {
										id
										title
										url
										created
										duration
									}
								}
							}
							... on TrackStep {
								id
								track {
									id
									title
									albumTitle
								}
							}
							... on BlankStep {
								id
								title
							}
						}
					}
				`,
			}),
		})
		.then((res) => res.json())
		.then((result) => fetchresult = result["data"]["grid"])
		.then((result) => franceculture1())
	} else if (inclu("radio")) {
		send("Voici la radio France Info: <br /><iframe src=\"https://embed.radiofrance.fr/franceinfo/player/direct\" width=\"540\" height=\"170\" frameborder=\"0\" scrolling=\"no\"></iframe>")
	}
	else {
		fetch('https://openapi.radiofrance.fr/v1/graphql?x-token=110a1bc4-2263-4cb8-b686-fdf835c0a0d6', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query: `
					query  {
						grid(station: FRANCECULTURE, includeTracks: false) {
							... on DiffusionStep {
								id
								diffusion {
									id
									title
									standFirst
									url
									published_date
									podcastEpisode {
										id
										title
										url
										created
										duration
									}
								}
							}
							... on TrackStep {
								id
								track {
									id
									title
									albumTitle
								}
							}
							... on BlankStep {
								id
								title
							}
						}
					}
				`,
			}),
		})
		.then((res) => res.json())
		.then((result) => content = result["data"]["grid"][0]["diffusion"]["podcastEpisode"])
		.then((result) => franceculture2());
	}
}

function cartefr() {
	send("Voici une carte de la france: <iframe width=\"425\" height=\"350\" frameborder=\"0\" scrolling=\"no\" src=\"https://www.openstreetmap.org/export/embed.html?bbox=-4.960327148437501%2C44.58655513209545%2C6.871948242187501%2C50.138185230436896&amp;layer=mapnik\" ></iframe><br/><small>")
}

function age() {
	send("Je ne suis pour l'instant pas trés agé...")
}

function amazone() {
	output = getkeyword(input, 0, 0, 0, 0, 0, 0).replace("amazone", "").replace("amazon", "");
	send("Amazon me reommande ce(tte) <a target=\"_blank\" style=\"text-decoration: underline;\" href=\"https://www.amazon.com/s?k=" + output + "\">" + output + "</a>.");
}

function définition() {
	output = getkeyword(input, 0, 0, 0, 0, 0, 0).replace("mots", "").replace("mot", "").replace("definitions", "").replace("definition", "");
	send("Le Larousse connait surement la définition du mots <a target=\"_blank\" style=\"text-decoration: underline;\" href=\"https://www.larousse.fr/dictionnaires/francais/" + output + "\">" + output + "</a>.")
}

function imagegoogle() {
	output = getkeyword(input, 0, 0, 0, 0, 0, 0).replace("images", "").replace("image", "");
	send("Google m'a recommandé ces images de <a target=\"_blank\" style=\"text-decoration: underline;\" href=\"https://www.google.com/search?q=" + output + "&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjfsMnFxsz0AhUlzYUKHWysDsEQ_AUoAXoECAEQAw&biw=1327&bih=802&dpr=2\">" + output + "</a>.")
}

function call() {
	output = getkeyword(input, 0, 0, 0, 0, 0, 0).replace("appele", "").replace("appel", "").replace("appele", "").replace("apele", "").replace("appel", "");
	send("appeler le <a target=\"_blank\" style=\"text-decoration: underline;\" href=\"tel:" + output + "\">" + output + "</a>")
}

function calcul() {
	result = input.match(/[0-9\*\+-\/().^ ]{1,100}/);
	if (eval(result[0]) == undefined) {
		input = input.replace("*", " ").replace("-", " ").replace("/", " ").replace("+", " ").replace(".", " ");
		input = input.replace("*", " ").replace("-", " ").replace("/", " ").replace("+", " ").replace(".", " ");
		input = input.replace("*", " ").replace("-", " ").replace("/", " ").replace("+", " ").replace(".", " ");
		input = input.replace("*", " ").replace("-", " ").replace("/", " ").replace("+", " ").replace(".", " ");
		search(input)
	} else {
		send(eval(result[0]));
	}
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//search algo function////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function search(input) {
	input = input;
	exe = 0;
	while (myvariable == 0) {
		if (inclu("+") || inclu("-") || inclu("/") || inclu("*") || inclu(".")) {
			calcul();
			break;
		} if (user == 1) {
			usernom()
			break;
		} if (inclu("synonyme")) {
			synonyme();
			break;
		} if (inclu("antonyme")) {
			antonyme();
			break;
		} if (inclu("tradu") || (inclu("comment") && inclu("dit"))) {
			traduit();
			break;
		} if (inclu("definition")) {
			définition();
			break;
		} if (inclu("date") || inclu("heur") || inclu(" jour") || inclu("minute")) {
			mydate();
			break;
		} if (inclu("merci")) {
			merci();
			break;
		} if (inclu("amazon")) {
			amazone();
			break;
		} if (inclu("image")) {
			imagegoogle();
			break;
		}  if ((inclu("apel") || inclu("appel")) && (inclu("33") || inclu("06") || inclu("07") || inclu("01") || inclu("08"))) {
			call();
			break;
		} if (inclu("bonjour") || inclu("salut") || inclu("bonsoir") || inclu("bonne jour")) {
			salutations();
			break;
		} if ((inclu("france") && inclu("cultur")) || (inclu("info") || inclu("radio"))) {
			francecultur();
			break;
		} if (inclu("au revoir") || inclu("a bientot") || inclu("bonsoir") || inclu("bonne nuit") || inclu("adieu")) {
			aurevoir();
			break;
		} if (inclu("meteo") || inclu("tempe") || inclu("temps")) {
			meteo();
			break;
		} if (inclu("ouvre") || (inclu("http") || inclu(".com") || inclu(".fr"))) {
			openweb();
			break;
		} if ((inclu("tu") && inclu("qui") && inclu("est")) || ((inclu("tu") || inclu(" t ")) && inclu("appel")) || (inclu("ton") && inclu("nom"))) {
			nom()
			break;
		} if (inclu("quel") && inclu("age") && inclu("tu") && (!inclu("j ") && !inclu(" ai "))) {
			age()
			break;
		} if ((inclu("mon") && inclu("nom")) || (inclu("je") && inclu("m ") && inclu("apel") || inclu("appel"))) {
			usernom()
			break;
		} if ((inclu(" ton") && (inclu("createur") || inclu("maitre"))) || (inclu(" cree") && inclu(" t "))) {
			createur();
			break;
		} if (inclu(" ou ") || inclu("carte") && (inclu(" de ") || inclu(" du "))) {
			cartefr();
			break;
		}
		usersearch();
		if (exe == 1) {
			exe = 0;
			break;
		}
		if (inclu("tu") == false && (inclu("wiki") || inclu("cherche") || inclu("qui est") || inclu("qui sont") || inclu("qu est"))) {
			wikipedia();
			break;
		} if (exe == 0) {
			error();
			break;
		}
	}
}