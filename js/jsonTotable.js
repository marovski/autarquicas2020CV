function json2table(t, o) {
 
  let i,
    e,
    n = t,
    r = document.getElementById(o);
  (document.getElementById("candidaturas").innerHTML =
    "Total Candidaturas: " + n.length),
    n.forEach((t) => {
      i = r.insertRow();
      for (const [o, n] of Object.entries(t)) {
        let t =
            "location=yes,height=570,width=520,scrollbars=yes,status=yes,top=-1000",
          r = n;
        if ("CM" === o && n.cv)
          (r = n.cv),
            (e = i.insertCell()),
            (a = document.createElement("a")),
            a.setAttribute("onClick", `window.open("${r}", "_blank", "${t}");`),
            a.setAttribute("title", "Abrir Curriculum Vitae"),
            (a.textContent = n.nome),
            e.appendChild(a),
            e.setAttribute("data-label", o);
        else if ("AM" == o && n.cv) {
          let t =
              "location=yes,height=570,width=520,scrollbars=yes,status=yes,top=-1000",
            r = n.cv;
          (e = i.insertCell()),
            (a = document.createElement("a")),
            a.setAttribute("onClick", `window.open("${r}", "_blank", "${t}");`),
            a.setAttribute("title", "Abrir Curriculum Vitae"),
            (a.textContent = n.nome),
            e.appendChild(a),
            e.setAttribute("data-label", o);
        } else
          n && "Website" === o
            ? ((e = i.insertCell()),
              (a = document.createElement("a")),
              a.setAttribute("href", n),
              a.setAttribute("target", "_blank"),
              (a.textContent = n),
              e.appendChild(a),
              e.setAttribute("data-label", o))
            : n && "Contato" == o
            ? ((e = i.insertCell()),
              (a = document.createElement("a")),
              a.setAttribute("href", "mailto:" + n),
              (a.textContent = n),
              e.appendChild(a),
              e.setAttribute("data-label", o))
            : "PE" === o && n
            ? ((e = i.insertCell()),
              (r = n),
              (a = document.createElement("a")),
              a.setAttribute(
                "onClick",
                `window.open("${r}", "_blank", "${t}");`
              ),
              a.setAttribute("title", "Abrir Programa Eleitoral"),
              (a.textContent = "Link"),
              e.appendChild(a),
              e.setAttribute("data-label", o))
            : n
            ? ((e = i.insertCell()),
              (e.textContent = n),
              e.setAttribute("data-label", o))
            : (e = i.insertCell());
      }
    });
}
var tabela = [
	{
		"Candidatura": "PAICV",
		"CM": "Albertino Mosso",
		"AM": "",
		"Município": "Sal",
		"Ilha": "Sal",
		"Região": "Barlavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
  },
  {
		"Candidatura": "PAICV",
		"CM": {
			"nome": "Albertino Graça",
			"cv": "http://www.albertinograca.cv/"
		},
		"AM": {
			"nome": "Leila de Pina",
			"cv": "https://noticiasdonorte.publ.cv/104696/s-vicente-leila-barros-a-cabeca-de-lista-do-paicv-para-a-assembleia-municipal/"
		},
		"Município": "São Vicente",
		"Ilha": "São Vicente",
		"Região": "Barlavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "MPD",
		"CM": "Alberto Nunes",
		"AM": "",
		"Município": "Santa Catarina",
		"Ilha": "Fogo",
		"Região": "Barlavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
  },
  {
		"Candidatura": "MPD",
		"CM": "Ângelo Vaz",
		"AM": "",
		"Município": "São Salvador do Mundo",
		"Ilha": "Santiago",
		"Região": "Sotavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "MPD",
		"CM": "António Aleixo",
		"AM": "",
		"Município": "Paúl",
		"Ilha": "Santo Antão",
		"Região": "Barlavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "PAICV",
		"CM": "António Fernandes",
		"AM": "",
		"Município": "São Lourenço dos Órgãos",
		"Ilha": "Santiago",
		"Região": "Sotavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "PAICV",
		"CM": "António Ramos",
		"AM": "",
		"Município": "Maio",
		"Ilha": "Maio",
		"Região": "Sotavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "MPD",
		"CM": "Aníbal Fonseca",
		"AM": "Jaqueline Rocha",
		"Município": "Porto Novo",
		"Ilha": "Santo Antão",
		"Região": "Barlavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "PAICV",
		"CM": "Armindo Freitas",
		"AM": "",
		"Município": "Santa Catarina",
		"Ilha": "Santiago",
		"Região": "Sotavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "MPD",
		"CM": "Augusto Neves",
		"AM": "",
		"Município": "São Vicente",
		"Ilha": "São Vicente",
		"Região": "Barlavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "PAICV",
		"CM": "Carlos Barbosa",
		"AM": "",
		"Município": "Ribeira Brava",
		"Ilha": "São Nicolau",
		"Região": "Barlavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "PAICV",
		"CM": "Carlos Silva",
		"AM": "",
		"Município": "Santa Cruz",
		"Ilha": "Santiago",
		"Região": "Sotavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
  },
  {
		"Candidatura": "PAICV",
		"CM": {
			"nome": "Carlos Pires Ferreira",
			"cv": "https://drive.google.com/file/d/0B-pIHm7n-O2ONHlfVlZlTFhmakk/view?usp=sharing"
		},
		"AM": "Wanderleya Nascimento",
		"Município": "Paul",
		"Ilha": "Santo Antão",
		"Região": "Barlavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "MPD",
		"CM": "Carlos Vasconcelos",
		"AM": "",
		"Município": "São Lourenço dos Órgãos",
		"Ilha": "Santiago",
		"Região": "Sotavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
  },
  {
		"Candidatura": "MPD",
		"CM": {
			"nome": "Celso Ribeiro",
			"cv": "https://www.facebook.com/notes/celso-ribeiro-construindo-novo-tempo-novo-tarrafal/celso-ribeiro/121822176241886/"
		},
		"AM": "Maria Rosa Semedo",
		"Município": "Tarrafal",
		"Ilha": "Santiago",
		"Região": "Sotavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "MPD",
		"CM": "Clemente Garcia",
		"AM": "",
		"Município": "São Domingos",
		"Ilha": "Santiago",
		"Região": "Sotavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "PAICV",
		"CM": "Cláudio Mendonça",
		"AM": "",
		"Município": "Boa Vista",
		"Ilha": "Boa Vista",
		"Região": "Barlavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "PAICV",
		"CM": "Clóvis Silva",
		"AM": "",
		"Município": "Brava",
		"Ilha": "Brava",
		"Região": "Sotavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "MPD",
		"CM": "Domingos Mendes",
		"AM": "",
		"Município": "Ribeira Grande",
		"Ilha": "Santiago",
		"Região": "Sotavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "PAICV",
		"CM": "Eugénio Veiga",
		"AM": "",
		"Município": "Santa Catarina",
		"Ilha": "Fogo",
		"Região": "Sotavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "PAICV",
		"CM": "Francisco Carvalho",
		"AM": "",
		"Município": "Praia",
		"Ilha": "Santiago",
		"Região": "Sotavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "UCID",
		"CM": "Francisco Silva",
		"AM": "",
		"Município": "Praia",
		"Ilha": "Santiago",
		"Região": "Sotavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "MPD",
		"CM": "Francisco Tavares",
		"AM": "",
		"Município": "Brava",
		"Ilha": "Brava",
		"Região": "Sotavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "PAICV",
		"CM": "Fábio Vieira",
		"AM": "",
		"Município": "Mosteiros ",
		"Ilha": "Fogo",
		"Região": "Sotavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "MPD",
		"CM": "Herménio Fernandes",
		"AM": "",
		"Município": "São Miguel",
		"Ilha": "Santiago",
		"Região": "Sotavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "UCID",
		"CM": "Holden Duarte",
		"AM": "",
		"Município": "Tarrafal",
		"Ilha": "Santiago",
		"Região": "Sotavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "PAICV",
		"CM": "Isaías Varela",
		"AM": "Felismina Moreno",
		"Município": "São Domingos",
		"Ilha": "Santiago",
		"Região": "Sotavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "MPD",
		"CM": "Jorge Nogueira",
		"AM": "",
		"Município": "São Filipe",
		"Ilha": "Fogo",
		"Região": "Sotavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "MPD",
		"CM": "José Alves",
		"AM": "",
		"Município": "Santa Catarina",
		"Ilha": "Santiago",
		"Região": "Sotavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "MPD",
		"CM": "José Brito",
		"AM": "",
		"Município": "Tarrafal",
		"Ilha": "São Nicolau",
		"Região": "Barlavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "MPD",
		"CM": "José L. Santos",
		"AM": "",
		"Município": "Boa Vista",
		"Ilha": "Boa Vista",
		"Região": "Barlavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "MPD",
		"CM": "José Martins",
		"AM": "",
		"Município": "Ribeira Brava",
		"Ilha": "São Nicolau",
		"Região": "Barlavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "PAICV",
		"CM": "José dos Reis",
		"AM": "",
		"Município": "Tarrafal",
		"Ilha": "Santiago",
		"Região": "Sotavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "PAICV",
		"CM": "João Alberto de Barros",
		"AM": "",
		"Município": "São Salvador do Mundo",
		"Ilha": "Santiago",
		"Região": "Sotavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "PAICV",
		"CM": "João Carvalho",
		"AM": "",
		"Município": "São Miguel",
		"Ilha": "Santiago",
		"Região": "Sotavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "PAICV",
		"CM": "João Soares",
		"AM": "",
		"Município": "Tarrafal",
		"Ilha": "São Nicolau",
		"Região": "Barlavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "MPD",
		"CM": "Júlio Lopes",
		"AM": "",
		"Município": "Sal",
		"Ilha": "Sal",
		"Região": "Barlavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "MPD",
		"CM": "Lourenço Lopes",
		"AM": "",
		"Município": "Mosteiros ",
		"Ilha": "Fogo",
		"Região": "Sotavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "MPD",
		"CM": "Miguel Rosa",
		"AM": "",
		"Município": "Maio",
		"Ilha": "Maio",
		"Região": "Sotavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "AMI É SAN DOMINGUS",
		"CM": "Milton Paiva",
		"AM": "Ana Bela Teixeira",
		"Município": "São Domingos",
		"Ilha": "Santiago",
		"Região": "Sotavento",
		"PE": "https://web.facebook.com/amiesandomingus/",
		"Website": "",
		"Contato": "amiesandomingus@gmail.com",
		"Lista": ""
	},
	{
		"Candidatura": "UCID",
		"CM": "Neida Rompão",
		"AM": "",
		"Município": "Santa Catarina",
		"Ilha": "Santiago",
		"Região": "Sotavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "Más Soncent",
		"CM": "Nelson Lopes",
		"AM": "Albertino Gonçalves",
		"Município": "São Vicente",
		"Ilha": "São Vicente",
		"Região": "Barlavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "PAICV",
		"CM": "Nelson Moreira",
		"AM": "",
		"Município": "Ribeira Grande",
		"Ilha": "Santiago",
		"Região": "Sotavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "PAICV",
		"CM": "Nilton Dias",
		"AM": "",
		"Município": "Porto Novo",
		"Ilha": "Santo Antão",
		"Região": "Barlavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
  },
  {
		"Candidatura": "PAICV",
		"CM": {
			"nome": "Nuías Silva",
			"cv": "https://cv.linkedin.com/in/nuias-mendes-barbosa-da-silva-96a16629"
		},
		"AM": "Luís Nunes",
		"Município": "São Filipe",
		"Ilha": "Fogo",
		"Região": "Sotavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "PAICV",
		"CM": "Odailson Bandeira",
		"AM": "",
		"Município": "Ribeira Grande",
		"Ilha": "Santo Antão",
		"Região": "Barlavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
  },
  {
		"Candidatura": "MPD",
		"CM": "Óscar Santos",
		"AM": "",
		"Município": "Praia",
		"Ilha": "Santiago",
		"Região": "Sotavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	},
	{
		"Candidatura": "MPD",
		"CM": "Orlando Delgado",
		"AM": "",
		"Município": "Ribeira Grande",
		"Ilha": "Santo Antão",
		"Região": "Sotavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
  },
  {
		"Candidatura": "ARG",
		"CM": {
			"nome": "Paulino Dias",
			"cv": "https://alternativaribeiragrande.cv/wp-content/uploads/2020/07/Curriculo-Paulino-Dias.pdf"
		},
		"AM": {
			"nome": "Licinia Leite",
			"cv": "https://alternativaribeiragrande.cv/wp-content/uploads/2020/06/Curriculo-Licinia-Leite.pdf"
		},
		"Município": "Ribeira Grande",
		"Ilha": "Santo Antão",
		"Região": "Barlavento",
		"PE": "https://alternativaribeiragrande.cv/?page_id=462",
		"Website": "https://alternativaribeiragrande.cv/",
		"Contato": "samlemos2015@gmail.com",
		"Lista": ""
	},
	{
		"Candidatura": "MPD",
		"CM": "Pedro Rocha",
		"AM": "Orlando Dias",
		"Município": "Santa Cruz",
		"Ilha": "Santiago",
		"Região": "Sotavento",
		"PE": "",
		"Website": "",
		"Contato": "",
		"Lista": ""
	}
	
	
	

];
json2table(tabela, "ttbody");
