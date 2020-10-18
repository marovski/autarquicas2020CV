function json2table(t, o) {
  let i,
    e,
    n = t,
    r = document.getElementById(o);
  (document.getElementById("candidaturas").innerHTML =
    "Total Candidaturas: " + n.length);

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
            a.setAttribute("title", "Abrir Biografia/CV"),
            (a.textContent = n.nome),
            e.appendChild(a),
            e.setAttribute("data-label", o);
        else if ("AM" == o && n.cv) {
            r = n.cv;
          (e = i.insertCell()),
            (a = document.createElement("a")),
            a.setAttribute("onClick", `window.open("${r}", "_blank", "${t}");`),
            a.setAttribute("title", "Abrir Biografia/CV"),
            (a.textContent = n.nome),
            e.appendChild(a),
            e.setAttribute("data-label", o);
        } else
          n && "Plataforma" === o
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
              a.setAttribute("onClick", `window.open("${r}", "_blank", "${t}");`),
              a.setAttribute("title", "Abrir Programa Eleitoral"),
              (a.textContent = "Link"),
              e.appendChild(a),
              e.setAttribute("data-label", o))
              : "Lista" === o && n.cm
              ? ((e = i.insertCell()),
                (r = n),
                (a = document.createElement("a")),
                (i = document.createElement("span")),
                a.setAttribute("onClick", `window.open("${r.cm}", "_blank", "${t}");`),
                a.setAttribute("title", "Ver Listas"),
                // (a.textContent = ""),
                i.setAttribute("class","glyphicon glyphicon-list-alt"),
                e.appendChild(a),
                a.appendChild(i),
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
    Candidatura: "PAICV",
    CM: {nome:"Albertino Mosso",cv:"https://www.linkedin.com/in/albertino-mosso-14a352134/"},
    AM: "Manuel Portugal",
    Município: "Sal",
    Ilha: "Sal",
    Região: "Barlavento",
    PE: "",
    Plataforma: "https://facebook.com/AlbertinoMosso2020/",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "PAICV",
    CM: { nome: "Albertino Graça", cv: "http://www.albertinograca.cv/" },
    AM: {
      nome: "Leila de Pina",
      cv:
        "https://noticiasdonorte.publ.cv/104696/s-vicente-leila-barros-a-cabeca-de-lista-do-paicv-para-a-assembleia-municipal/",
    },
    Município: "São Vicente",
    Ilha: "São Vicente",
    Região: "Barlavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "MPD",
    CM: {nome:"Alberto Nunes",cv:"https://docs.google.com/document/d/e/2PACX-1vQySxl5KKLke73BL6kWS85xIDQdmKRu4lIGQJe67c3rY9nec29-Pt3n_ca6lY3FDC8-q2CNwXJvVgu-/pub"},
    AM: "Luís Alves",
    Município: "Santa Catarina",
    Ilha: "Fogo",
    Região: "Sotavento",
    PE: "",
    Plataforma: "https://santacatarinafogo.mpd.cv/",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "SAL",
    CM: {nome:"Aldirley Gomes",cv:"https://inforpress.cv/autarquicas-2020-sal-biografia-de-aldirley-gomes-cabeca-de-lista-independente/"},
    AM: "Selizia Ribeiro",
    Município: "Sal",
    Ilha: "Sal",
    Região: "Barlavento",
    PE: "",
    Plataforma: "https://web.facebook.com/aldirleySal2020",
    Contato: "aldirley@salgrupoindependente.com",
    Lista: {cm:"https://drive.google.com/file/d/1Q4Parea9SkXesHiffdQpSfZHttPdYVco/view"},
  },
  {
    Candidatura: "MPD",
    CM: "Amândio Vicente",
    AM: "Juvenal Furtado",
    Município: "Praia",
    Ilha: "Santiago",
    Região: "Sotavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "MPD",
    CM: {nome:"Ângelo Vaz",cv:"https://docs.google.com/document/d/e/2PACX-1vShV6_RFUus4txgGmi004v9EWE8PNHgkon5-aTZnhh8LssZYt0tyI9ZK5swhz7HgezZm8VuBkQpWRn8/pub"},
    AM: "Elsa Rodrigues",
    Município: "São Salvador do Mundo",
    Ilha: "Santiago",
    Região: "Sotavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "MPD",
    CM: {nome:"António Aleixo",cv:"https://inforpress.cv/autarquicas-2020-paul-biografia-de-antonio-aleixo-martins-cabeca-de-lista-do-mpd/"},
    AM: "Sandra Rodrigues",
    Município: "Paúl",
    Ilha: "Santo Antão",
    Região: "Barlavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "PAICV",
    CM:{nome: "António Fernandes",cv:"https://paicv.cv/autarquicas-2020-sao-lourenco-dos-orgaos-biografia-de-antonio-fernandes-cabeca-de-lista-do-paicv/"},
    AM: "Victor Baessa",
    Município: "São Lourenço dos Órgãos",
    Ilha: "Santiago",
    Região: "Sotavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "PAICV",
    CM: {nome:"António Ramos",cv:"http://paicv.cv/autarquicas-2020-maio-biografia-de-antonio-ramos-cabeca-de-lista-do-paicv/"},
    AM: "Alcídia Tavares",
    Município: "Maio",
    Ilha: "Maio",
    Região: "Sotavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "MPD",
    CM: {nome:"Aníbal Fonseca",cv:"https://noticias.sapo.cv/actualidade/artigos/autarquicas-2020porto-novo-biografia-de-anibal-fonseca-cabeca-de-lista-mpd"},
    AM: "Jaqueline Rocha",
    Município: "Porto Novo",
    Ilha: "Santo Antão",
    Região: "Barlavento",
    PE: "",
    Plataforma: "https://portonovo.mpd.cv/",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "PAICV",
    CM: {nome:"Armindo Freitas",cv:"https://inforpress.cv/autarquicas-2020-santa-catarina-biografia-de-armindo-freitas-cabeca-de-lista-do-paicv/"},
    AM: "Ermelindo Fernandes",
    Município: "Santa Catarina",
    Ilha: "Santiago",
    Região: "Sotavento",
    PE: "",
    Plataforma: "https://rb.gy/offkgj",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "MPD",
    CM: {nome:"Augusto Neves",cv:"https://www.cmsv.cv/index.php/municipio/camara-municipal/executivo/133-executivo/257-presidente-augusto-neves"},
    AM: {nome:"Lídia Lima", cv:"https://www.cmsv.cv/index.php/municipio/camara-municipal/executivo/133-executivo/286-vereadora-lidia-lima"},
    Município: "São Vicente",
    Ilha: "São Vicente",
    Região: "Barlavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "PAICV",
    CM: {nome:"Carlos Barbosa",cv:"https://noticias.sapo.cv/actualidade/artigos/autarquicas-2020ribeira-brava-biografia-de-carlos-barbosa-candidato-do-paicv"},
    AM: "Antonino Brito",
    Município: "Ribeira Brava",
    Ilha: "São Nicolau",
    Região: "Barlavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "PAICV",
    CM: {nome:"Carlos Silva",cv:"https://noticias.sapo.cv/actualidade/artigos/autarquicas-2020santa-cruz-biografia-de-carlos-silva-cabeca-de-lista-do-paicv"},
    AM: "Gilson Cardoso",
    Município: "Santa Cruz",
    Ilha: "Santiago",
    Região: "Sotavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "PAICV",
    CM: {
      nome: "Carlos Pires Ferreira",
      cv:
        "https://drive.google.com/file/d/0B-pIHm7n-O2ONHlfVlZlTFhmakk/view?usp=sharing",
    },
    AM: "Wanderleya Nascimento",
    Município: "Paul",
    Ilha: "Santo Antão",
    Região: "Barlavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "MPD",
    CM: {nome:"Carlos Vasconcelos",cv:"https://noticias.sapo.cv/actualidade/artigos/autarquicas-2020sao-lourenco-dos-orgaos-biografia-de-carlos-vasconcelos-cabeca-de-lista-do-mpd"},
    AM: "Emanuel Gonçalves",
    Município: "São Lourenço dos Órgãos",
    Ilha: "Santiago",
    Região: "Sotavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "MPD",
    CM: {
      nome: "Celso Ribeiro",
      cv:
        "https://www.facebook.com/notes/celso-ribeiro-construindo-novo-tempo-novo-tarrafal/celso-ribeiro/121822176241886/",
    },
    AM: "Maria Rosa Semedo",
    Município: "Tarrafal",
    Ilha: "Santiago",
    Região: "Sotavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "MPD",
    CM: {nome:"Clemente Garcia",cv:"https://docs.google.com/document/d/e/2PACX-1vTumqmw7Lv5IrXfWx_XUN7w_pHx6spb0URCKMA0is_WqVk-GxxV7D41uyAHmFChnpTvauObFfl0tBRX/pub"},
    AM: "Admilson Moniz",
    Município: "São Domingos",
    Ilha: "Santiago",
    Região: "Sotavento",
    PE: "",
    Plataforma: "https://saodomingos.mpd.cv/",
    Contato: "clementegarcia1@hotmail.com",
    Lista: "",
  },
  {
    Candidatura: "PAICV",
    CM: "Cláudio Mendonça",
    AM: "Walter Évora",
    Município: "Boa Vista",
    Ilha: "Boa Vista",
    Região: "Barlavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "PAICV",
    CM: "Clóvis Silva",
    AM: {nome:"Margarida Fernandes", cv:"https://docs.google.com/document/d/e/2PACX-1vSyXNK2G52ie9BB63ZWq7bvq_TT_9mgP0E4bcCyvoWsO4pZ7n8GmurIlB8tuMFOob8PKagznZOILlui/pub"},
    Município: "Brava",
    Ilha: "Brava",
    Região: "Sotavento",
    PE: "",
    Plataforma: "",
    Contato: "clovisildo@gmail.com",
    Lista: "",
  },
  {
    Candidatura: "MPD",
    CM: "Domingos Mendes",
    AM: "António Monteiro",
    Município: "Ribeira Grande",
    Ilha: "Santiago",
    Região: "Sotavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "PAICV",
    CM: "Eugénio Veiga",
    AM: "Irilandia Andrade",
    Município: "Santa Catarina",
    Ilha: "Fogo",
    Região: "Sotavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "PAICV",
    CM: "Fábio Vieira",
    AM: "Lúcio Fernandes",
    Município: "Mosteiros ",
    Ilha: "Fogo",
    Região: "Sotavento",
    PE: "",
    Plataforma: "",
    Contato: "paicvmosteiros@gmail.com",
    Lista: "",
  },
  {
    Candidatura: "SAT",
    CM:{nome: "Felix Cardoso",cv:"https://inforpress.cv/autarquicas-2020-santa-catarina-biografia-de-felix-cardoso-cabeca-de-lista-de-candidatura-independente/"},
    AM: "Alcides da Moura",
    Município: "Santa Catarina ",
    Ilha: "Santiago",
    Região: "Sotavento",
    PE: "https://drive.google.com/file/d/1bos8MsoXOCva6eYieONranIor57XFYM_/view?fbclid=IwAR3H1y6kZSea4v8-QejaL8ZYNpnqFdex-_PTjyL-jg3Cv_tPZIrNTyrEwYU",
    Plataforma: "https://cutt.ly/0gjFtcO",
    Contato: "",
    Lista: {cm:"https://drive.google.com/file/d/1jJfIFolnTe5xtinclFeEwWATl39-IgyY/view"},
  },
  {
    Candidatura: "PAICV",
    CM: "Francisco Carvalho",
    AM: "Maria Clara Marques",
    Município: "Praia",
    Ilha: "Santiago",
    Região: "Sotavento",
    PE: "",
    Plataforma: "https://cutt.ly/XgjFXtj",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "UCID",
    CM: "Francisco Silva",
    AM: "Juceliano Vieira",
    Município: "Praia",
    Ilha: "Santiago",
    Região: "Sotavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "MPD",
    CM: "Francisco Tavares",
    AM: "Fernanda Burgo",
    Município: "Brava",
    Ilha: "Brava",
    Região: "Sotavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "MPD",
    CM: "Herménio Fernandes",
    AM: "Leocádia Furtado",
    Município: "São Miguel",
    Ilha: "Santiago",
    Região: "Sotavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "UCID",
    CM: "Holden Duarte",
    AM: "Rosa Lopes",
    Município: "Tarrafal",
    Ilha: "Santiago",
    Região: "Sotavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "PAICV",
    CM: "Isaías Varela",
    AM: "Felismina Moreno",
    Município: "São Domingos",
    Ilha: "Santiago",
    Região: "Sotavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "MPD",
    CM: "Jorge Nogueira",
    AM: "Adolfo Rodrigues",
    Município: "São Filipe",
    Ilha: "Fogo",
    Região: "Sotavento",
    PE: "",
    Plataforma: "https://saofilipe.mpd.cv/",
    Contato: "jorgenogueiracv@gmail.com",
    Lista: {cm:"https://drive.google.com/file/d/1r3hSaf2ifG6eocXFukuYg4wi-J-oCK-m/view?usp=sharing"},
  },
  {
    Candidatura: "MPD",
    CM: "Beto Alves",
    AM: "Eurico da Moura",
    Município: "Santa Catarina",
    Ilha: "Santiago",
    Região: "Sotavento",
    PE: "",
    Plataforma: "https://facebook.com/SomadaRibaLa/",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "MPD",
    CM: "José Brito",
    AM: "Raimundo Lopes",
    Município: "Tarrafal",
    Ilha: "São Nicolau",
    Região: "Barlavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "MPD",
    CM: "José L. Santos",
    AM: "Elizabete Évora",
    Município: "Boa Vista",
    Ilha: "Boa Vista",
    Região: "Barlavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "MPD",
    CM: "José Martins",
    AM: "Benvindo Almeida",
    Município: "Ribeira Brava",
    Ilha: "São Nicolau",
    Região: "Barlavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "PAICV",
    CM: {nome:"José dos Reis",cv:"https://inforpress.cv/autarquicas-2020-tarrafal-biografia-do-candidato-do-paicv-jose-dos-reis-varela/"},
    AM: "Adilson Costa",
    Município: "Tarrafal",
    Ilha: "Santiago",
    Região: "Sotavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "PAICV",
    CM: "João Alberto de Barros",
    AM: "Nasolino Gomes de Carvalho",
    Município: "São Salvador do Mundo",
    Ilha: "Santiago",
    Região: "Sotavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "PAICV",
    CM: "João Carvalho",
    AM: "Carla Carvalho",
    Município: "São Miguel",
    Ilha: "Santiago",
    Região: "Sotavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "PAICV",
    CM: "João Soares",
    AM: "Manuel Fernandes",
    Município: "Tarrafal",
    Ilha: "São Nicolau",
    Região: "Barlavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "MPD",
    CM: {nome:"Júlio Lopes",cv:"https://inforpress.cv/autarquicas-2020-sal-biografia-de-julio-lopes-cabeca-de-lista-do-mpd/"},
    AM: "Nuno Santos",
    Município: "Sal",
    Ilha: "Sal",
    Região: "Barlavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "MPD",
    CM: {nome:"Lourenço Lopes",cv:"https://noticias.sapo.cv/actualidade/artigos/autarquicas-2020mosteiros-biografia-de-lourenco-lopes-cabeca-de-lista-do-mpd"},
    AM: "Francisco B. Amado",
    Município: "Mosteiros ",
    Ilha: "Fogo",
    Região: "Sotavento",
    PE: "",
    Plataforma: "https://mosteiros.mpd.cv/",
    Contato: "lourencolopesmosteiros@gmail.com",
    Lista: "",
  },
  {
    Candidatura: "MPD",
    CM: {nome:"Miguel Rosa",cv:"https://noticias.sapo.cv/actualidade/artigos/autarquicas-2020maio-biografia-de-miguel-rosa-cabeca-de-lista-do-mpd"},
    AM: "Alcídia Maria Tavares",
    Município: "Maio",
    Ilha: "Maio",
    Região: "Sotavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "AMI É SAN DOMINGUS",
    CM: {nome:"Milton Paiva",cv:"https://www.slideshare.net/slideshow/embed_code/key/5PaZNYvek6i2f3"},
    AM: "Ana Bela Teixeira",
    Município: "São Domingos",
    Ilha: "Santiago",
    Região: "Sotavento",
    PE: "",
    Plataforma: "https://facebook.com/amiesandomingus/",
    Contato: "amiesandomingus@gmail.com",
    Lista: "",
  },
  {
    Candidatura: "UCID",
    CM: "Neida Rompão",
    AM: "Adelgisa Monteiro",
    Município: "Santa Catarina",
    Ilha: "Santiago",
    Região: "Sotavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "Más Soncent",
    CM: {nome:"Nelson Lopes",cv:"https://massoncent.com/nelson-lopes/"},
    AM: "Albertino Gonçalves",
    Município: "São Vicente",
    Ilha: "São Vicente",
    Região: "Barlavento",
    PE: "",
    Plataforma: "https://massoncent.com/",
    Contato: "massoncent.gerais@gmail.com",
    Lista: "",
  },
  {
    Candidatura: "PAICV",
    CM: {nome:"Nelson Moreira",cv:"https://inforpress.cv/autarquicas-2020-ribeira-grande-de-santiago-biografia-de-nelson-vaz-moreira-cabeca-de-lista-do-paicv/"},
    AM: "José Gomes Veiga",
    Município: "Ribeira Grande",
    Ilha: "Santiago",
    Região: "Sotavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "PAICV",
    CM: {nome:"Nilton Dias",cv:"https://inforpress.cv/autarquicas-2020-porto-novo-biografia-de-nilton-dias-cabeca-de-lista-do-paicv/"},
    AM: "Vitória Sabino",
    Município: "Porto Novo",
    Ilha: "Santo Antão",
    Região: "Barlavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "PAICV",
    CM: {
      nome: "Nuías Silva",
      cv: "https://cv.linkedin.com/in/nuias-mendes-barbosa-da-silva-96a16629",
    },
    AM: "Luís Nunes",
    Município: "São Filipe",
    Ilha: "Fogo",
    Região: "Sotavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "PAICV",
    CM: {nome:"Odailson Bandeira",cv:"https://noticias.sapo.cv/actualidade/artigos/autarquicas-2020ribeira-grande-biografia-de-odailson-bandeira-cabeca-de-lista-do-paicv"},
    AM: "Armindo Cruz",
    Município: "Ribeira Grande",
    Ilha: "Santo Antão",
    Região: "Barlavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "MPD",
    CM: {nome:"Óscar Santos",cv:"https://docs.google.com/document/d/e/2PACX-1vT7PA2sNxuslQ-AQe0_blc0eQa5kJwKqf3lW6xT48Dd7A-Ut5OzVQvBELocEBf3Q0M1hTMgbdNd6oOH/pub"},
    AM: "Ana Barber",
    Município: "Praia",
    Ilha: "Santiago",
    Região: "Sotavento",
    PE: "",
    Plataforma: "https://praia.mpd.cv/",
    Contato: "",
    Lista: {cm:"https://praia.mpd.cv/lista-cmp/", am:"https://praia.mpd.cv/lista-amp/"},
  },
  {
    Candidatura: "MPD",
    CM: {nome:"Orlando Delgado",cv:"https://inforpress.cv/autarquicas-2020-ribeira-grande-biografia-de-orlando-delgado-cabeca-de-lista-do-mpd/"},
    AM: "Leida Maurício Andrade",
    Município: "Ribeira Grande",
    Ilha: "Santo Antão",
    Região: "Sotavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "ARG",
    CM: {
      nome: "Paulino Dias",
      cv:
        "https://alternativaribeiragrande.cv/wp-content/uploads/2020/07/Curriculo-Paulino-Dias.pdf",
    },
    AM: {
      nome: "Licinia Leite",
      cv:
        "https://alternativaribeiragrande.cv/wp-content/uploads/2020/06/Curriculo-Licinia-Leite.pdf",
    },
    Município: "Ribeira Grande",
    Ilha: "Santo Antão",
    Região: "Barlavento",
    PE: "https://alternativaribeiragrande.cv/?page_id=462",
    Plataforma: "https://alternativaribeiragrande.cv/",
    Contato: "samlemos2015@gmail.com",
    Lista: {cm:"https://drive.google.com/file/d/1DvWbr_5gsTlYiOhC2SvfZOjnH54Gzxhl/view?usp=sharing"},
  },
  {
    Candidatura: "MPD",
    CM: {nome:"Pedro Rocha",cv:"https://noticias.sapo.cv/actualidade/artigos/autarquicas-2020santa-cruz-biografia-de-pedro-alexandre-rocha-cabeca-de-lista-do-mpd"},
    AM: "Orlando Dias",
    Município: "Santa Cruz",
    Ilha: "Santiago",
    Região: "Sotavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
  {
    Candidatura: "UCID",
    CM: {nome:"Pedro Ribeiro",cv:"https://docs.google.com/document/d/e/2PACX-1vRP68ymT9Zg6RvNH8RDB0VdHMzhqk8MmamE5MKyT2ywBsvOsJptWFHYcf7C78sg9Krfy2wld4wvxbTT/pub"},
    AM: "Felizardo Afonso",
    Município: "São Filipe",
    Ilha: "Fogo",
    Região: "Sotavento",
    PE: "",
    Plataforma: "",
    Contato: "",
    Lista: "",
  },
];
json2table(tabela, "ttbody");
