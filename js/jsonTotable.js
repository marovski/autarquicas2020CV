function json2table(json, classes) {
  let data=json;
  console.log(data);
  let table = document.getElementById(classes);
  let row, cell;
  
  for (let i = 0; i < data.length; i++) {
    row = table.insertRow();
    cell = row.insertCell();

    cell.textContent = data[i].Partido;
    cell = row.insertCell();
    cell.textContent = data[i].CM;
    cell = row.insertCell();
    cell.textContent = data[i].AM;
    cell = row.insertCell();
    cell.textContent = data[i].Município;
    cell = row.insertCell();
    cell.textContent = data[i].Ilha;
    cell = row.insertCell();
    cell.textContent = data[i].Região;
    cell = row.insertCell();
    cell.textContent = data[i].PE;
    cell = row.insertCell();
    cell.textContent = data[i].Website;
    cell = row.insertCell();
    cell.textContent = data[i].Contacto;
    cell = row.insertCell();
    cell.textContent = data[i].Lista;
    
  }

}
var tabela =[
  {
      "Partido": "UCID",
      "CM": "Francisco Silva",
      "AM": "",
      "Município": "Praia",
      "Ilha": "Santiago",
      "Região": "Sotavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "PAICV",
      "CM": "Odailson Bandeira",      "AM": "",
      "Município": "Ribeira Grande",
      "Ilha": "Santo Antão",
      "Região": "Barlavento",   "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "PAICV",
      "CM": "Nuías Silva",
      "AM": "Luís Nunes",
      "Município": "São Filipe",
      "Ilha": "Fogo",
      "Região": "Sotavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "MUDAR",
      "CM": "Paulino Dias",
      "AM": "Licinia Leite",
      "Município": "Ribeira Grande",
      "Ilha": "Santo Antão",
      "Região": "Barlavento",
      "PE": "",
      "Website": "https://alternativaribeiragrande.cv/",
      "Contacto": "geral@alternativaribeiragrande.cv",
      "Lista": ""
  },
  {
      "Partido": "MPD",
      "CM": "Jorge Nogueira",
      "AM": "",
      "Município": "São Filipe",
      "Ilha": "Fogo",
      "Região": "Sotavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "MPD",
      "CM": "Júlio Lopes",
      "AM": "",
      "Município": "Sal",
      "Ilha": "Sal",
      "Região": "Barlavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "MPD",
      "CM": "Miguel Rosa",
      "AM": "",
      "Município": "Maio",
      "Ilha": "Maio",
      "Região": "Sotavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "MPD",
      "CM": "Clemente Garcia",
      "AM": "",
      "Município": "São Domingos",
      "Ilha": "Santiago",
      "Região": "Sotavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "MPD",
      "CM": "Herménio Fernandes",
      "AM": "",
      "Município": "São Miguel",
      "Ilha": "Santiago",
      "Região": "Sotavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "MPD",
      "CM": "Francisco Tavares",
      "AM": "",
      "Município": "Brava",
      "Ilha": "Brava",
      "Região": "Sotavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "MPD",
      "CM": "José L. Santos",
      "AM": "",
      "Município": "Boa Vista",
      "Ilha": "Boa Vista",
      "Região": "Barlavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "MPD",
      "CM": "Celso Soares",
      "AM": "",
      "Município": "Tarrafal",
      "Ilha": "Santiago",
      "Região": "Sotavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "MPD",
      "CM": "Pedro Rocha",
      "AM": "",
      "Município": "Santa Cruz",
      "Ilha": "Santiago",
      "Região": "Sotavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "MPD",
      "CM": "Lourenço Lopes",
      "AM": "",
      "Município": "Mosteiros ",
      "Ilha": "Fogo",
      "Região": "Sotavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "MPD",
      "CM": "José Martins",
      "AM": "",
      "Município": "Ribeira Brava",
      "Ilha": "São Nicolau",
      "Região": "Barlavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "MPD",
      "CM": "José Alves",
      "AM": "",
      "Município": "Santa Catarina",
      "Ilha": "Santiago",
      "Região": "Sotavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "MPD",
      "CM": "Carlos Vasconcelos",
      "AM": "",
      "Município": "São Lourenço dos Órgãos",
      "Ilha": "Santiago",
      "Região": "Sotavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "MPD",
      "CM": "Ângelo Vaz",
      "AM": "",
      "Município": "São Salvador do Mundo",
      "Ilha": "Santiago",
      "Região": "Sotavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "MPD",
      "CM": "Augusto Neves",
      "AM": "",
      "Município": "São Vicente",
      "Ilha": "São Vicente",
      "Região": "Barlavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "MPD",
      "CM": "Aníbal Fonseca",
      "AM": "",
      "Município": "Porto Novo",
      "Ilha": "Santo Antão",
      "Região": "Barlavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "MPD",
      "CM": "António Aleixo",
      "AM": "",
      "Município": "Paúl",
      "Ilha": "Santo Antão",
      "Região": "Barlavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "MPD",
      "CM": "José Brito",
      "AM": "",
      "Município": "Tarrafal",
      "Ilha": "São Nicolau",
      "Região": "Barlavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "MPD",
      "CM": "Óscar Santos",
      "AM": "",
      "Município": "Praia",
      "Ilha": "Santiago",
      "Região": "Sotavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "MPD",
      "CM": "Alberto Nunes",
      "AM": "",
      "Município": "Santa Catarina",
      "Ilha": "Fogo",
      "Região": "Barlavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "MPD",
      "CM": "Orlando Delgado",
      "AM": "",
      "Município": "Ribeira Grande",
      "Ilha": "Santo Antão",
      "Região": "Sotavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "MPD",
      "CM": "Domingos Mendes",
      "AM": "",
      "Município": "Ribeira Grande",
      "Ilha": "Santiago",
      "Região": "Sotavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "PAICV",
      "CM": "Francisco Carvalho",
      "AM": "",
      "Município": "Praia",
      "Ilha": "Santiago",
      "Região": "Sotavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "PAICV",
      "CM": "Nelson Moreira",
      "AM": "",
      "Município": "Ribeira Grande",
      "Ilha": "Santiago",
      "Região": "Sotavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "PAICV",
      "CM": "Isaías Varela",
      "AM": "",
      "Município": "São Domingos",
      "Ilha": "Santiago",
      "Região": "Sotavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "PAICV",
      "CM": "José dos Reis",
      "AM": "",
      "Município": "Tarrafal",
      "Ilha": "Santiago",
      "Região": "Sotavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "PAICV",
      "CM": "Armindo Freitas",
      "AM": "",
      "Município": "Santa Catarina",
      "Ilha": "Santiago",
      "Região": "Sotavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "PAICV",
      "CM": "João Alberto de Barros",
      "AM": "",
      "Município": "São Salvador do Mundo",
      "Ilha": "Santiago",
      "Região": "Sotavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "PAICV",
      "CM": "António Fernandes",
      "AM": "",
      "Município": "São Lourenço dos Órgãos",
      "Ilha": "Santiago",
      "Região": "Sotavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "PAICV",
      "CM": "Carlos Silva",
      "AM": "",
      "Município": "Santa Cruz",
      "Ilha": "Santiago",
      "Região": "Sotavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "PAICV",
      "CM": "João Carvalho",
      "AM": "",
      "Município": "São Miguel",
      "Ilha": "Santiago",
      "Região": "Sotavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "PAICV",
      "CM": "Albertino Graça",
      "AM": "",
      "Município": "São Vicente",
      "Ilha": "Santiago",
      "Região": "Barlavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "PAICV",
      "CM": "Eugénio Veiga",
      "AM": "",
      "Município": "Santa Catarina",
      "Ilha": "Santiago",
      "Região": "Sotavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "PAICV",
      "CM": "Fábio Vieira",
      "AM": "",
      "Município": "Mosteiros ",
      "Ilha": "Fogo",
      "Região": "Sotavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "PAICV",
      "CM": "Clóvis Silva",
      "AM": "",
      "Município": "Brava",
      "Ilha": "Brava",
      "Região": "Sotavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "PAICV",
      "CM": "Cláudio Mendonça",
      "AM": "",
      "Município": "Boa Vista",
      "Ilha": "Boa Vista",
      "Região": "Barlavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "PAICV",
      "CM": "Carlos Pires Ferreira",
      "AM": "",
      "Município": "Paul",
      "Ilha": "Santo Antão",
      "Região": "Barlavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "PAICV",
      "CM": "Nilton Dias",
      "AM": "",
      "Município": "Porto Novo",
      "Ilha": "Santo Antão",
      "Região": "Barlavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "PAICV",
      "CM": "Albertino Mosso",
      "AM": "",
      "Município": "Sal",
      "Ilha": "Sal",
      "Região": "Barlavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "PAICV",
      "CM": "António Ramos",
      "AM": "",
      "Município": "Maio",
      "Ilha": "Maio",
      "Região": "Sotavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "PAICV",
      "CM": "Carlos Barbosa",
      "AM": "",
      "Município": "Ribeira Brava",
      "Ilha": "São Nicolau",
      "Região": "Barlavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  },
  {
      "Partido": "PAICV",
      "CM": "João Soares",
      "AM": "",
      "Município": "Tarrafal",
      "Ilha": "São Nicolau",
      "Região": "Barlavento",
      "PE": "",
      "Website": "",
      "Contacto": "",
      "Lista": ""
  }
]
// fetch('./data.json')
//   .then(response => response.json())
//   .then(data => input = data)
//   .then(() => console.log(input));



json2table(tabela,"ttbody")

//Contagem de candidaturas

document.getElementById("candidaturas").innerHTML = "Total Candidaturas: "+ tabela.length; 