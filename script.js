// Criando o banco: 

use mapaedu_db

// i. Coleções 

db.createCollection("questao")
db.createCollection("usuario")

// ii. Documentos 

// Questões:
db.questao.insertMany([
    { _id: 1, descricao: "Na frase “Degue Mata. Se a gente bobear, ela volta. É hora de esquentar a briga contra o mosquito.”, a palavra ELA substitui a palavra:", tema: "Sujeito", disciplina: "Português", nivel: "Super Fácil", pontuacao: 1, alternativa: [ { descricao: "Dengue", correta: true }, { descricao: "Gente", correta: false }, { descricao: "Briga", correta: false }, { descricao: "Hora", correta: false }, { descricao: "Nenhuma das alternativas", correta: false } ], respostas: [ { _id: 1, resposta: true, data: new Date() }, { _id: 2, resposta: true, data: new Date() }, { _id: 3, resposta: true, data: new Date() }, { _id: 4, resposta: true, data: new Date() }, { _id: 5, resposta: true, data: new Date() } ] },
    { _id: 2, descricao: "Qual o tipo da frase: “Como se chama o teu gato?”.", tema: "Tipos de Frase", disciplina: "Português", nivel: "Super Fácil", pontuacao: 1, alternativa: [ { descricao: "Interrogativa", correta: true }, { descricao: "Exclamativa", correta: false }, { descricao: "Imperativa", correta: false }, { descricao: "Declarativa", correta: false }, { descricao: "Nenhuma das alternativas", correta: false } ], respostas: [ { _id: 1, resposta: true, data: new Date() }, { _id: 2, resposta: true, data: new Date() }, { _id: 3, resposta: true, data: new Date() }, { _id: 4, resposta: true, data: new Date() }, { _id: 5, resposta: true, data: new Date() } ] },
    { _id: 3, descricao: "Indique a palavra que tem 5 fonemas:", tema: "Fonema", disciplina: "Português", nivel: "Super Fácil", pontuacao: 1, alternativa: [ { descricao: "Ficha", correta: false }, { descricao: "Molhado", correta: false }, { descricao: "Guerra", correta: false }, { descricao: "Fixo", correta: true }, { descricao: "Nenhuma das alternativas", correta: false } ], respostas: [ { _id: 1, resposta: true, data: new Date() }, { _id: 2, resposta: true, data: new Date() }, { _id: 3, resposta: true, data: new Date() }, { _id: 4, resposta: true, data: new Date() }, { _id: 5, resposta: true, data: new Date() } ] },
    { _id: 4, descricao: "Qual a variedade linguística da frase: “Na hora de cumê, nois come; Na hora de bebe, nois bebe”.", tema: "Linguagem", disciplina: "Português", nivel: "Difícil", pontuacao: 7, alternativa: [ { descricao: "Linguagem formal", correta: false }, { descricao: "Linguagem errada", correta: false }, { descricao: "Linguagem informal", correta: true }, { descricao: "Linguagem animal", correta: false }, { descricao: "Nenhuma das alternativas", correta: false } ], respostas: [ { _id: 1, resposta: true, data: new Date() }, { _id: 2, resposta: true, data: new Date() }, { _id: 3, resposta: true, data: new Date() }, { _id: 4, resposta: true, data: new Date() }, { _id: 5, resposta: true, data: new Date() } ] },
    { _id: 5, descricao: "A palavra que possui mais letra do que fonema, é:", tema: "Fonema", disciplina: "Português", nivel: "Extremamente Difícil", pontuacao: 10, alternativa: [ { descricao: "Caderno", correta: false }, { descricao: "Chapéu", correta: true }, { descricao: "Flores", correta: false }, { descricao: "Livro", correta: false }, { descricao: "Nenhuma das alternativas", correta: false } ], respostas: [ { _id: 1, resposta: true, data: new Date() }, { _id: 2, resposta: true, data: new Date() }, { _id: 3, resposta: true, data: new Date() }, { _id: 4, resposta: true, data: new Date() }, { _id: 5, resposta: true, data: new Date() } ] }
])

// Usuários:
db.usuario.insertMany([
    { _id: 1, nome: "Adjamilton Junior", dtnasc: "2010/10/10", sexo: "m", email: "jr@ieee.org", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PE" }, pontos: 150, escola: { nome: "IFPB", cidade: "João Pessoa", uf: "PB", tipo: "Federal" }, respostas: [ { _id: 1, resposta: true, data: new Date() }, { _id: 2, resposta: true, data: new Date() }, { _id: 3, resposta: true, data: new Date() }, { _id: 4, resposta: true, data: new Date() }, { _id: 5, resposta: true, data: new Date() } ] },
    
    { _id: 2, nome: "Paulo Ricardo", dtnasc: "2005/05/20", sexo: "m", email: "pricardo@gmail.com", telefone: ["83999440111"], localizacao: { cidade: "João Pessoa", uf: "PE" }, pontos : 100, escola: { nome: "EEEFM Raul Machado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] },
    
    { _id: 3, nome: "João Rodrigues de Almeida", dtnasc: "2008/03/01", sexo: "m", email: "jra@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PE" }, pontos : 100, escola: { nome: "EEEFM Raul Machado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() }, { _id: 2, resposta: true, data: new Date() }, { _id: 3, resposta: true, data: new Date() }, { _id: 4, resposta: true, data: new Date() }, { _id: 5, resposta: true, data: new Date() } ] },

    { _id: 4, nome: "Karla de Souza", dtnasc: "1999/09/24", sexo: "f", email: "karlasz@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Raul Machado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 4, resposta: true, data: new Date() } ] },

    { _id: 5, nome: "Diógenes Batista dos Santos", dtnasc: "2004/11/07", sexo: "m", email: "diogenesb@outlook.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Raul Machado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: ObjectId("5c6883b4566f5b03457d16d9"), resposta: true, data: new Date() }, { _id: 1, resposta: true, data: new Date() }, { _id: 2, resposta: true, data: new Date() }, { _id: 3, resposta: true, data: new Date() }, { _id: 4, resposta: true, data: new Date() } ] }
])

db.usuario.insertMany([
    { _id: 6, nome: "Juliano Righetto", dtnasc: "2002/10/19", sexo: "m", email: "jrighetto@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Raul Machado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() }, { _id: 2, resposta: true, data: new Date() }, { _id: 3, resposta: true, data: new Date() }, { _id: 4, resposta: true, data: new Date() }, { _id: 5, resposta: true, data: new Date() } ] },

    { _id: 7, nome: "Francisco Silva", dtnasc: "2001/09/11", sexo: "m", email: "fsilva15@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Raul Machado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 5, resposta: true, data: new Date() }, { _id: 1, resposta: true, data: new Date() }, { _id: 2, resposta: true, data: new Date() }, { _id: 3, resposta: true, data: new Date() }, { _id: 4, resposta: true, data: new Date() } ] },

    { _id: 8, nome: "Mariana dos Santos Neves", dtnasc: "2006/11/09", sexo: "f", email: "msneves@outlook.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Raul Machado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] },

    { _id: 9, nome: "Juliana Battisti", dtnasc: "2001/04/18", sexo: "f", email: "julianabattisti@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Raul Machado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() }, { _id: 2, resposta: true, data: new Date() }, { _id: 3, resposta: true, data: new Date() }, { _id: 4, resposta: true, data: new Date() }, { _id: 5, resposta: true, data: new Date() } ] },

    { _id: 10, nome: "Luiza Patrícia dos Santos", dtnasc: "2001/04/10", sexo: "f", email: "luizinhap@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Raul Machado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] }
])

db.usuario.insertMany([
    { _id: 11, nome: "Maria Eduarda Félix de Almeida", dtnasc: "2007/07/17", sexo: "f", email: "mduda@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Raul Machado", cidade: "João Pessoa", uf: "PE", tipo: "Estadual" }, respostas: [ { _id: ObjectId("5c6883b4566f5b03457d16d9"), resposta: true, data: new Date() }, { _id: ObjectId("5c6883b4566f5b03457d16da"), resposta: true, data: new Date() }, { _id: ObjectId("5c6883b4566f5b03457d16db"), resposta: true, data: new Date() }, { _id: ObjectId("5c6883b4566f5b03457d16dc"), resposta: true, data: new Date() }, { _id: 1, resposta: true, data: new Date() } ] },

    { _id: 12, nome: "Patrícia Rouanet", dtnasc: "2002/06/23", sexo: "f", email: "patrciart@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PE" }, pontos : 100, escola: { nome: "EEEFM Raul Machado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 3, resposta: true, data: new Date() } ] },

    { _id: 13, nome: "Mary de Souza", dtnasc: "1997/10/10", sexo: "f", email: "marysouzajp@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PE" }, pontos : 100, escola: { nome: "EEEFM Raul Machado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 2, resposta: true, data: new Date() } ] },

    { _id: 14, nome: "João de Souza e Silva", dtnasc: "2003/07/18", sexo: "m", email: "joaoss@yahoo.com.br", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Raul Machado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] },

    { _id: 15, nome: "Luciano Patrício", dtnasc: "2004/01/21", sexo: "m", email: "lucianopatricio@outlook.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PE" }, pontos : 100, escola: { nome: "EEEFM Raul Machado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] }
])

db.usuario.insertMany([
    { _id: 16, nome: "Jaqueline Belgrado", dtnasc: "2002/07/12", sexo: "f", email: "jaquebel@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] },

    { _id: 17, nome: "Arcênio Segundo", dtnasc: "1999/02/11", sexo: "m", email: "arcenio@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] },

    { _id: 18, nome: "Diniz Medeiros", dtnasc: "2003/01/21", sexo: "m", email: "dinizmed@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 5, resposta: true, data: new Date() } ] },

    { _id: 19, nome: "Diogo Silva", dtnasc: "2000/08/31", sexo: "m", email: "dslv@outlook.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] },

    { _id: 20, nome: "Jackie Santini", dtnasc: "1995/12/31", sexo: "f", email: "jackiesantini@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() }, { _id: 2, resposta: true, data: new Date() }, { _id: 3, resposta: true, data: new Date() }, { _id: 4, resposta: true, data: new Date() }, { _id: 5, resposta: true, data: new Date() } ] }
])

db.usuario.insertMany([
    { _id: 21, nome: "Rafael Medeiros", dtnasc: "2008/10/20", sexo: "m", email: "rafamedeiros@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 3, resposta: true, data: new Date() } ] },

    { _id: 22, nome: "Rafael Brito", dtnasc: "1999/04/10", sexo: "m", email: "rafb@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] },

    { _id: 23, nome: "Poliana DiCaprio Almeida", dtnasc: "2002/05/20", sexo: "f", email: "polidcaprio@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] },

    { _id: 24, nome: "Joana Fonn", dtnasc: "1998/06/17", sexo: "f", email: "jfonn@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] },

    { _id: 25, nome: "James Dias", dtnasc: "2001/07/15", sexo: "m", email: "jdias@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 4, resposta: true, data: new Date() }, { _id: 1, resposta: true, data: new Date() }, { _id: 2, resposta: true, data: new Date() }, { _id: 3, resposta: true, data: new Date() }, { _id: 5, resposta: true, data: new Date() } ] }
])

db.usuario.insertMany([
    { _id: 26, nome: "Gutierrez Almeida", dtnasc: "2006/08/11", sexo: "m", email: "gutierrez@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 5, resposta: true, data: new Date() }, { _id: 1, resposta: true, data: new Date() }, { _id: 2, resposta: true, data: new Date() }, { _id: 3, resposta: true, data: new Date() }, { _id: 4, resposta: true, data: new Date() } ] },

    { _id: 27, nome: "João José da Silva", dtnasc: "2005/09/09", sexo: "m", email: "jjsilva@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] },

    { _id: 28, nome: "Denis Djhonathan", dtnasc: "2004/08/10", sexo: "m", email: "denisdj@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] },

    { _id: 29, nome: "Rafaella Maria", dtnasc: "2008/07/11", sexo: "f", email: "rafamaria@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] },

    { _id: 30, nome: "Geni Carla", dtnasc: "2007/06/12", sexo: "f", email: "geni@yahoo.com.br", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] }
])

db.usuario.insertMany([
    { _id: 31, nome: "Carlos Henrique", dtnasc: "1999/05/01", sexo: "m", email: "calhenrique@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() }, { _id: 2, resposta: true, data: new Date() }, { _id: 3, resposta: true, data: new Date() }, { _id: 4, resposta: true, data: new Date() }, { _id: 5, resposta: true, data: new Date() } ] },

    { _id: 32, nome: "Diana Almeida", dtnasc: "2000/04/02", sexo: "f", email: "dialmeida@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() }, { _id: 2, resposta: true, data: new Date() }, { _id: 3, resposta: true, data: new Date() }, { _id: 4, resposta: true, data: new Date() }, { _id: 5, resposta: true, data: new Date() } ] },

    { _id: 33, nome: "Juliana Ribeiro", dtnasc: "2001/03/03", sexo: "f", email: "juliana.r@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() }, { _id: 2, resposta: true, data: new Date() }, { _id: 3, resposta: true, data: new Date() }, { _id: 4, resposta: true, data: new Date() }, { _id: 5, resposta: true, data: new Date() } ] },

    { _id: 34, nome: "Juliano Souza", dtnasc: "2002/02/04", sexo: "m", email: "julianosz@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] },

    { _id: 35, nome: "Judith Safra", dtnasc: "2009/01/05", sexo: "f", email: "judith@yahoo.com.br", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] }
])

db.usuario.insertMany([
    { _id: 36, nome: "Marcos C Lima", dtnasc: "2007/06/29", sexo: "m", email: "mcl@yahoo.com.br", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] },

    { _id: 37, nome: "Nicácio Lima", dtnasc: "2008/07/28", sexo: "m", email: "nicacio@yahoo.com.br", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] },

    { _id: 38, nome: "Dennys Moreira", dtnasc: "2007/08/27", sexo: "m", email: "dennysm@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] },

    { _id: 39, nome: "Denilson Silva", dtnasc: "2005/09/26", sexo: "m", email: "denilson@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] },

    { _id: 40, nome: "Luan Carlos", dtnasc: "2004/10/25", sexo: "m", email: "luanc@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() }, { _id: 2, resposta: true, data: new Date() }, { _id: 3, resposta: true, data: new Date() }, { _id: 4, resposta: true, data: new Date() }, { _id: 5, resposta: true, data: new Date() } ] }
])

db.usuario.insertMany([
    { _id: 41, nome: "Paula Diniz", dtnasc: "2002/11/24", sexo: "f", email: "pauladiniz@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() }, { _id: 2, resposta: true, data: new Date() }, { _id: 3, resposta: true, data: new Date() }, { _id: 4, resposta: true, data: new Date() }, { _id: 5, resposta: true, data: new Date() } ] },

    { _id: 42, nome: "Rita de Cassia", dtnasc: "2001/12/23", sexo: "f", email: "ritadecassia@hotmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] },

    { _id: 43, nome: "Reinaldo Franco", dtnasc: "2000/01/22", sexo: "m", email: "rfranco@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] },

    { _id: 44, nome: "Petrônio Gonçalves", dtnasc: "2008/02/21", sexo: "m", email: "pgoncalves@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() }, { _id: 2, resposta: true, data: new Date() }, { _id: 3, resposta: true, data: new Date() }, { _id: 4, resposta: true, data: new Date() }, { _id: 5, resposta: true, data: new Date() } ] },

    { _id: 45, nome: "Giuliano Santos", dtnasc: "2007/03/20", sexo: "m", email: "guiluano@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() }, { _id: 2, resposta: true, data: new Date() }, { _id: 3, resposta: true, data: new Date() }, { _id: 4, resposta: true, data: new Date() }, { _id: 5, resposta: true, data: new Date() } ] }
])

db.usuario.insertMany([
    { _id: 46, nome: "Dante Silva", dtnasc: "2006/04/19", sexo: "m", email: "danteslv@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] },

    { _id: 47, nome: "Robson Euller", dtnasc: "2005/05/18", sexo: "m", email: "r.euller@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] },

    { _id: 48, nome: "Maria Josefa", dtnasc: "2004/06/17", sexo: "f", email: "mjosefa@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] },

    { _id: 49, nome: "Mariana Santana", dtnasc: "2003/07/16", sexo: "f", email: "marianasanta@hotmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() }, { _id: 2, resposta: true, data: new Date() }, { _id: 3, resposta: true, data: new Date() }, { _id: 4, resposta: true, data: new Date() }, { _id: 5, resposta: true, data: new Date() } ] },

    { _id: 50, nome: "Marlene Diniz", dtnasc: "2002/08/15", sexo: "f", email: "marlene@hotmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() }, { _id: 2, resposta: true, data: new Date() }, { _id: 3, resposta: true, data: new Date() }, { _id: 4, resposta: true, data: new Date() }, { _id: 5, resposta: true, data: new Date() } ] }
])

db.usuario.insertMany([
    { _id: 51, nome: "Glaucia de Souza", dtnasc: "2001/09/14", sexo: "f", email: "glaucia@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] },

    { _id: 52, nome: "Túlio Santos", dtnasc: "2000/10/13", sexo: "m", email: "tuliocsantos@hotmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] },

    { _id: 53, nome: "Maria Joaquina", dtnasc: "1999/12/11", sexo: "f", email: "mariajoaquina@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] },

    { _id: 54, nome: "Larissa do Socorro", dtnasc: "1998/11/12", sexo: "f", email: "lala@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] },

    { _id: 55, nome: "João P Santos", dtnasc: "1997/10/04", sexo: "m", email: "jpsantos@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() }, { _id: 2, resposta: true, data: new Date() }, { _id: 3, resposta: true, data: new Date() }, { _id: 4, resposta: true, data: new Date() }, { _id: 5, resposta: true, data: new Date() } ] }
])

db.usuario.insertMany([
    { _id: 56, nome: "Pedro Santos", dtnasc: "2000/09/03", sexo: "m", email: "pedrosantos@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 2, resposta: true, data: new Date() } ] },

    { _id: 57, nome: "Maria Eduarda Oliveira", dtnasc: "2001/08/02", sexo: "f", email: "mariadudaoliv@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() }, { _id: 2, resposta: true, data: new Date() }, { _id: 3, resposta: true, data: new Date() }, { _id: 4, resposta: true, data: new Date() }, { _id: 5, resposta: true, data: new Date() } ] },

    { _id: 58, nome: "Margarida Alves", dtnasc: "2002/07/01", sexo: "f", email: "margarida@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() }, { _id: 2, resposta: true, data: new Date() }, { _id: 3, resposta: true, data: new Date() }, { _id: 4, resposta: true, data: new Date() }, { _id: 5, resposta: true, data: new Date() } ] },

    { _id: 59, nome: "Dilma dos Santos", dtnasc: "2003/06/06", sexo: "f", email: "dilma@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] },

    { _id: 60, nome: "Janaina Silva", dtnasc: "2004/05/07", sexo: "f", email: "janainas@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "EEEFM Prof. Maria Helena Bronzeado", cidade: "João Pessoa", uf: "PB", tipo: "Estadual" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] }
])

db.usuario.insertMany([
    { _id: 61, nome: "Denise Carla", dtnasc: "2005/04/08", sexo: "f", email: "denisecarla@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PE" }, pontos : 100, escola: { nome: "Marista Pio X", cidade: "João Pessoa", uf: "PB", tipo: "Privada" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] },

    { _id: 62, nome: "Rafael Oliveiras", dtnasc: "2006/03/09", sexo: "m", email: "rafaeloliveiras@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PE" }, pontos : 100, escola: { nome: "Marista Pio X", cidade: "João Pessoa", uf: "PB", tipo: "Privada" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] },

    { _id: 63, nome: "Mariana S Rodolfo", dtnasc: "2007/02/17", sexo: "f", email: "marianasr@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PE" }, pontos : 100, escola: { nome: "Marista Pio X", cidade: "João Pessoa", uf: "PB", tipo: "Privada" }, respostas: [ { _id: 3, resposta: true, data: new Date() } ] },

    { _id: 64, nome: "Jennifer dos Santos", dtnasc: "1999/01/11", sexo: "f", email: "jennifer@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PE" }, pontos : 100, escola: { nome: "Marista Pio X", cidade: "João Pessoa", uf: "PB", tipo: "Privada" }, respostas: [ { _id: 1, resposta: true, data: new Date() }, { _id: 2, resposta: true, data: new Date() }, { _id: 3, resposta: true, data: new Date() }, { _id: 4, resposta: true, data: new Date() }, { _id: 5, resposta: true, data: new Date() } ] },

    { _id: 65, nome: "Luiz Carlos", dtnasc: "2000/12/30", sexo: "m", email: "lc@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "Marista Pio X", cidade: "João Pessoa", uf: "PB", tipo: "Privada" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] }
])

db.usuario.insertMany([
    { _id: 66, nome: "Santana do Nascimento", dtnasc: "2001/08/31", sexo: "m", email: "santana@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "Marista Pio X", cidade: "João Pessoa", uf: "PB", tipo: "Privada" }, respostas: [ { _id: 2, resposta: true, data: new Date() } ] },

    { _id: 67, nome: "Yuri Souza", dtnasc: "2002/07/29", sexo: "m", email: "yuri@hotmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "Marista Pio X", cidade: "João Pessoa", uf: "PB", tipo: "Privada" }, respostas: [ { _id: 5, resposta: true, data: new Date() } ] },

    { _id: 68, nome: "João Medeiros", dtnasc: "2003/08/28", sexo: "m", email: "joaomed@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos : 100, escola: { nome: "Marista Pio X", cidade: "João Pessoa", uf: "PB", tipo: "Privada" }, respostas: [ { _id: 1, resposta: true, data: new Date() }, { _id: 2, resposta: true, data: new Date() }, { _id: 3, resposta: true, data: new Date() }, { _id: 4, resposta: true, data: new Date() }, { _id: 5, resposta: true, data: new Date() } ] },

    { _id: 69, nome: "Rafaela Silva Santos", dtnasc: "2004/10/27", sexo: "f", email: "rafaelassantos@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "Campina Grande", uf: "PB" }, pontos : 100, escola: { nome: "Marista Pio X", cidade: "João Pessoa", uf: "PB", tipo: "Privada" }, respostas: [ { _id: 1, resposta: true, data: new Date() } ] },

    { _id: 70, nome: "Mirna dos Santos", dtnasc: "2005/11/26", sexo: "f", email: "mirna@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "Campo Grande", uf: "PE" }, pontos: 100, escola: { nome: "GEO Sul", cidade: "João Pessoa", uf: "PB", tipo: "Privada" }, respostas: [ { _id: 2, resposta: true, data: new Date() } ] },

    { _id: 71, nome: "Gonçalves Silva", dtnasc: "2006/02/25", sexo: "m", email: "gsilva@gmail.com", telefone: ["83999440111", "8332240323"], localizacao: { cidade: "João Pessoa", uf: "PB" }, pontos: 100, escola: { nome: "GEO Sul", cidade: "João Pessoa", uf: "PB", tipo: "Privada" }, respostas: [ { _id: 2, resposta: true, data: new Date() } ] },
])

// iii. Índices 

db.questao.createIndex( { descricao: 1 } )
db.usuario.createIndex( { nome: 1, pontos: -1 } )

// b. Operações de DML (CRUD): 
// i. Inserções diversas  
// ii. Atualizações (02)  

// Atualizando o nome do usuário Adjamilton Junior.
db.usuario.update( { "nome": "Adjamilton Junior" }, { $set: { "nome": "Adjamilton M. A. Junior" } } )

// Alterando a UF de PE para PB das cidades de João Pessoa e Campina Grande.
db.usuario.updateMany( { "localizacao.cidade": { $in: ["João Pessoa", "Campina Grande"] } }, { $set: { "localizacao.uf": "PB" } })

// iii. Remoção (01) 
// Removendo o usuário Gonçalves Silva.
db.usuario.remove( { "nome": "Gonçalves Silva" } )

// iv. Consultas diversas 
// - **01 com Coleção inteira**
// Todos os documentos da coleção ```questao``` de forma organizada.
db.questao.find().pretty()

// **01 com Contagem de documentos na coleção**
// Quantidade de documentos da coleção ```usuario```.
db.usuario.count()

// **03 consultas com filtros diversos (IN, GT, etc), sem projeção**
// Usuários com mais de 100 pontos.
db.usuario.find( { "pontos": { $gt: 100 } } )

// Usuários que estudam em escolas da cidade de **Campina Grande** e **Recife**.
db.usuario.find( { "escola.cidade": { $in: ["Campina Grande", "Recife"] } } )

// Usuários com pontos maior que 100 ou que não marcaram nenhum ponto.
db.usuario.find( { $or: [ { "pontos": { $lt: 1 } }, { "pontos": { $gt: 100 } } ] } )

// - **03 consultas com filtros diversos, com projeção**
// Nome dos usuários com mais de 100 pontos.
db.usuario.find( { "pontos": { $gt: 100 } }, { "nome": true } )

// Nome dos usuários que ainda não pontuaram. 
db.usuario.find( { "pontos": { $lt: 1 } }, { _id: false, nome: true } )

// Ranking dos usuários da Paraíba.
db.usuario.find( { "localizacao.uf": "PB" }, { _id: false, nome: true, pontos: true, "escola.nome": true } ).pretty()

// - **01 consulta com filtro e projeção e uso de expressão regular**
// Usuários que moram em cidades cujo nome começam com **Camp**.
db.usuario.find({ "localizacao.cidade": { $regex: /^Camp/ } }, { "nome": true } )

// - **01 consulta com acesso a array de elementos**
// Descrição da(s) questão(ões) cuja a segunda alternativa seja a resposta correta.
db.questao.find({ "alternativa.1.correta": true }, { "descricao": true } )

// - **01 consulta com acesso a estrutura embutida**
// Listagem dos usuários estudantes da escola ```EEEFM Prof. Maria Helena Bronzeado```.

db.usuario.find( { "escola.nome": "EEEFM Prof. Maria Helena Bronzeado" } ).pretty()

// - **01 consulta com função de agregação (sum, avg, max ou min)**
// Maior número de pontos.
db.usuario.aggregate({ $group : { _id: null, pontos: { $max: "$pontos"} } } )

// - **01 consulta que use distinct ou limit**
// Três primeiros usuários por ordem alfabética do nome.
db.usuario.find().sort({nome: 1}).limit(3).pretty()

// - **01 outra consulta a seu critério, explicando o porquê dela**
// Quantidade de pontos por cidade.
db.usuario.aggregate( [ { $match: { "localizacao.cidade": "João Pessoa" } }, { $group: { _id: "$localizacao.cidade", "pontos": { $sum: "$pontos" } } } ] )
