var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded());

app.get('/', function (req, res) {
    res.json(lista);
});

app.get('/orientador/:id', function (req, res) {
    var id = req.params.id;
    res.json(orientadores[id]);
});

app.get('/foto/:foto', function (req, res) {
    var foto = req.params.foto;
    res.sendFile(__dirname + '/fotos/' + foto);
});

app.post('/uppercase', function (req, res) {
    var texto = req.body.texto;
    res.send(texto.toUpperCase());
});

/* Configurações do OpenShift */
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

var server = app.listen(server_port, server_ip_address, function () {
    console.log('Example app listening at http://%s:%s', server_ip_address, server_port);
});

/******************************* Dados dos orientadores *******************************/

var lista = [
    {
        'Id': 0,
        'Nome': 'Ariane Machado Lima'
    }, {
        'Id': 1,
        'Nome': 'Clodoaldo Aparecido de Moraes Lima'
    }, {
        'Id': 2,
        'Nome': 'Fátima de Lourdes dos Santos Nunes Marques'
    }, {
        'Id': 3,
        'Nome': 'Ivandré Paraboni'
    }, {
        'Id': 4,
        'Nome': 'Káthia Maria Honório'
    }, {
        'Id': 5,
        'Nome': 'Luciano Antonio Digiampietri'
    }, {
        'Id': 6,
        'Nome': 'Marcelo Fantinato'
    }, {
        'Id': 7,
        'Nome': 'Marcelo Medeiros Eler'
    }, {
        'Id': 8,
        'Nome': 'Marcos Lordello Chaim'
    }, {
        'Id': 9,
        'Nome': 'Marislei Nishijima'
    }, {
        'Id': 10,
        'Nome': 'Norton Trevisan Roman'
    }, {
        'Id': 11,
        'Nome': 'Patrícia Rufino Oliveira'
    }, {
        'Id': 12,
        'Nome': 'Sarajane Marques Peres'
    }, {
        'Id': 13,
        'Nome': 'Valdinei Freire da Silva'
    }
];

var orientadores = [
    {
        'Nome': 'Ariane Machado Lima',
        'Foto': 'ariane1.jpg',
        'Formacao': [
                'Pós-doutorado em Bioinformática (Universidade de São Paulo, 2009)',
                'Doutorado em Bioinformática (Universidade de São Paulo, 2006)',
                'Mestrado em Ciência da Computação (Universidade de São Paulo, 2002)',
                'Bacharelado em Ciência da Computação (Universidade de São Paulo, 1998)'
            ],
        'Pesquisa': [
                'Reconhecimento de Padrões',
                'Gramáticas Estocásticas',
                'Classificadores de Sequências',
                'Bioinformática',
                'RNAs não codificantes'
            ],
        'Lattes': 'http://lattes.cnpq.br/6342311646947853',
        'Email': 'ariane.machado no servidor usp.br'
    }, {
        'Nome': 'Clodoaldo Aparecido de Moraes Lima',
        'Foto': 'clodoaldo1.jpg',
        'Formacao': [
                'Pós-Doutorado em Engenharia Elétrica (Universidade Estadual de Campinas, 2006)',
                'Doutorado em Engenharia Elétrica (Universidade Estadual de Campinas, 2004)',
                'Mestrado em Engenharia Elétrica (Universidade Estadual de Campinas, 2000)',
                'Graduação em Engenharia Elétrica (Universidade Federal de Juiz de Fora, 1997)'
            ],
        'Pesquisa': [
                'Inteligência Artificial',
                'Machine Learning',
                'Métodos de kernel',
                'Análise e Predição de Séries Temporais Financeiras e Biomédicas',
                'Sistemas Biométricos (Reconhecimento de Iris, Face, Digital)'
            ],
        'Lattes': 'http://lattes.cnpq.br/3017337174053381',
        'Email': 'c.lima no servidor usp.br'
    }, {
        'Nome': 'Fátima de Lourdes dos Santos Nunes Marques',
        'Foto': 'fatima1.jpg',
        'Formacao': [
                'Pós-Doutorado em Engenharia Elétrica – área de Visão Computacional (EESC–USP, 2003)',
                'Doutorado em Física Computacional (IFSC–USP, 2001)',
                'Mestrado em Engenharia Elétrica (EESC– SP, 1997)',
                'Bacharelado em Ciência da Computação (UNESP, Bauru, 1994)'
            ],
        'Pesquisa': [
                'Realidade Virtual',
                'Processamento de Imagens',
                'Banco de Dados',
                'Sistemas de Auxílio ao Diagnóstico',
                'Treinamento Médico Virtual',
                'Mamografia',
                'Recuperação Baseada em Conteúdo'
            ],
        'Lattes': 'http://lattes.cnpq.br/8626964624628522',
        'Email': 'fatima.nunes no servidor usp.br'
    }, {
        'Nome': 'Ivandré Paraboni',
        'Foto': 'ivandre1.jpg',
        'Formacao': [
                'Pós-doutorado em Ciência da Computação (University of Aberdeen, Escócia, 2012)',
                'Doutorado em Ciência da Computação (University of Brighton, Inglaterra, 2003)',
                'Mestrado em Informática (PUCRS, 1997)',
                'Especialização em Análise de Sistemas (PUCRS, 1995)',
                'Bacharelado em Informática (UNISINOS, 1994)'
            ],
        'Pesquisa': [
                'Inteligência Artificial',
                'Tecnologia da Língua Humana',
                'Processamento e Geração de Língua Natural',
                'Ciências cognitivas'
            ],
        'Lattes': 'http://lattes.cnpq.br/4979536048261282',
        'Email': 'ivandre no servidor usp.br'
    }, {
        'Nome': 'Káthia Maria Honório',
        'Foto': 'kathia.jpg',
        'Formacao': [
                'Pós-Doutorado (Instituto de Física de São Carlos -Universidade de São Paulo, 2006)',
                'Doutorado em Físico-Química (Instituto de Química de São Carlos, Universidade de São Paulo, 2004)',
                'Mestrado em Físico-Química (Instituto de Química de São Carlos, Universidade de São Paulo, 2000)',
                'Bacharelado em Química (Instituto de Química de São Carlos, Universidade de São Paulo, 1997)'
            ],
        'Pesquisa': [
                'Métodos computacionais aplicados na área química',
                'Química medicinal computacional',
                'Química teórica',
                'Modelagem molecular',
                'Reconhecimento de padrões'
            ],
        'Lattes': 'http://lattes.cnpq.br/0438695263897215',
        'Email': 'kmhonorio no servidor usp.br'
    }, {
        'Nome': 'Luciano Antonio Digiampietri',
        'Foto': 'lucianoDigiampietri.jpg',
        'Formacao': [
                'Doutorado em Ciência da Computação (Universidade Estadual de Campinas, 2007)',
                'Bacharelado em Ciência da Computação (Universidade Estadual de Campinas, 2002)'
            ],
        'Pesquisa': [
                'Biologia Computacional',
                'Bancos de Dados',
                'Inteligência Artificial',
                'Workflows Científicos',
                'Bioinformática',
                'Proveniência de Dados',
                'Composição Automática de Serviços',
                'Rastreabilidade de Experimentos',
                'Algoritmos'
            ],
        'Lattes': 'http://lattes.cnpq.br/1689147340536405',
        'Email': 'digiampietri no servidor usp.br'
    }, {
        'Nome': 'Marcelo Fantinato',
        'Foto': 'fantinato.jpg',
        'Formacao': [
                'Livre-docência em Informação e Tecnologia (Universidade de São Paulo, 2014)',
                'Doutorado em Ciência da Computação (Universidade Estadual de Campinas, 2007)',
                'Mestrado em Engenharia Elétrica (Universidade Estadual de Campinas, 2002)',
                'Bacharelado em Ciência da Computação (Universidade Estadual de Maringá, 1999)'
            ],
        'Pesquisa': [
                'Gestão Automatizada de Processos de Negócio (BPM - Automated Business Process Management)',
                'Arquitetura Orientada a Seviços (SOA - Service Oriented Architecture)',
                'Engenharia de Software',
                'Reúso de Software',
                'Linha de Produto de Software',
                'Qualidade de Software',
                'Teste de Software'
            ],
        'Lattes': 'http://lattes.cnpq.br/8207954538307988',
        'Email': 'm.fantinato no servidor usp.br'
    }, {
        'Nome': 'Marcelo Medeiros Eler',
        'Foto': 'eler.jpg',
        'Formacao': [
                'Doutorado em Ciências da Computação e Matemática Computacional (Universidade de São Paulo, 2012)',
                'Mestrado em Ciências da Computação e Matemática Computacional (Universidade de São Paulo, 2006)',
                'Bacharelado em Ciência da Computação (Universidade do Oeste Paulista, 2003)'
            ],
        'Pesquisa': [
                'Engenharia de Software',
                'Teste de Software',
                'Métodos de Desenvolvimento de Software',
                'Programação Orientada a Aspectos',
                'Desenvolvimento Baseado em Componentes',
                'Arquitetura Orientada a Serviços'
            ],
        'Lattes': 'http://lattes.cnpq.br/0170428647417667',
        'Email': 'marceloeler no servidor usp.br'
    }, {
        'Nome': 'Marcos Lordello Chaim',
        'Foto': 'chaim.jpg',
        'Formacao': [
                'Doutorado em Engenharia Elétrica (Universidade Estadual de Campinas, 2001)',
                'Mestrado em Engenharia Elétrica (Universidade Estadual de Campinas, 1991)',
                'Bacharelado em Engenharia Elétrica (Universidade Estadual de Campinas, 1987)'
            ],
        'Pesquisa': [
                'Engenharia de Software',
                'Teste e Depuração de Software',
                'Manutenção de Software',
                'Métodos de Desenvolvimento de Software',
                'Linguagens de Programação'
            ],
        'Lattes': 'http://lattes.cnpq.br/6414738466336890',
        'Email': 'chaim no servidor usp.br'
    }, {
        'Nome': 'Marislei Nishijima',
        'Foto': 'marislei.jpg',
        'Formacao': [
                'Pós-doutorado (Department of Economics - Boston University, EUA, 2014-2015)',
                'Livre-Docência em Economia e Políticas Públicas (Universidade de São Paulo, 2010)',
                'Pós-Doutorado em Economia (Escola de Economia da Fundação Getúlio Vargas, 2008)',
                'Doutorado em Teoria Econômica (Universidade de São Paulo, 2003)',
                'Mestrado em Economia (Universidade Estadual de Campinas, 1998)',
                'Graduação em Economia (Universidade de São Paulo, 1993)'
            ],
        'Pesquisa': [
                'Economia da Regulação e Defesa da Concorrência',
                'Análises de Intervenções de Políticas sobre Bem-Estar (Microeconometria)',
                'Setor Farmacêutico',
                'Economia da Informação'
            ],
        'Lattes': 'http://lattes.cnpq.br/5620359266790501',
        'Email': 'marislei no servidor usp.br'
    }, {
        'Nome': 'Norton Trevisan Roman',
        'Foto': 'norton.jpg',
        'Formacao': [
                'Doutorado em Ciência da Computação (Universidade Estadual de Campinas, 2007)',
                'Mestrado em Ciência da Computação (Universidade Estadual de Campinas, 2001)',
                'Bacharelado em Física (Universidade Estadual de Campinas, 1998)'
            ],
        'Pesquisa': [
                'Processamento de Língua Natural (Linguística Computacional)',
                'Inteligência Artificial',
                'Educação em Informática'
            ],
        'Lattes': 'http://lattes.cnpq.br/4440731926425760',
        'Email': 'norton no servidor usp.br'
    }, {
        'Nome': 'Patrícia Rufino Oliveira',
        'Foto': 'patricia.jpg',
        'Formacao': [
                'Doutorado em Ciências da Computação e Matemática Computacional (Universidade de São Paulo, 2004)',
                'Mestrado em Ciências da Computação e Matemática Computacional (Universidade de São Paulo, 1997)',
                'Bacharelado em Ciências da Computação (Universidade Estadual Paulista Júlio de Mesquita Filho, 1994)'
            ],
        'Pesquisa': [
                'Inteligência Artificial',
                'Computação Bioinspirada',
                'Redes Neurais Artificiais',
                'Processamento de Imagens Digitais',
                'Visão Computacional',
                'Análise de Componentes Independentes'
            ],
        'Lattes': 'http://lattes.cnpq.br/9174573815394512',
        'Email': 'proliveira no servidor usp.br'
    }, {
        'Nome': 'Sarajane Marques Peres',
        'Foto': 'sarajane1.jpg',
        'Formacao': [
                'Doutorado em Engenharia Elétrica (Universidade Estadual de Campinas, 2006)',
                'Mestrado em Engenharia de Produção (Universidade Federal de Santa Catarina, 1999)',
                'Bacharelado em Ciência da Computação (Universidade Estadual de Maringá, 1996)'
            ],
        'Pesquisa': [
                'Inteligência Computacional',
                'Aprendizado de Máquina',
                'Reconhecimento de Padrões'
            ],
        'Lattes': 'http://lattes.cnpq.br/6265936760089757',
        'Email': 'sarajane no servidor usp.br'
    }, {
        'Nome': 'Valdinei Freire da Silva',
        'Foto': 'valdinei.jpg',
        'Formacao': [
                'Doutorado em Engenharia Elétrica (Universidade de São Paulo, 2009)',
                'Graduação em Engenharia da Computação (Universidade de São Paulo, 2002)'
            ],
        'Pesquisa': [
                'Inteligência Artificial',
                'Processos Markovianos de Decisão',
                'Aprendizado por Reforço',
                'Sistemas de Recomendação',
                'Robótica Inteligente'
            ],
        'Lattes': 'http://lattes.cnpq.br/0813823100105934',
        'Email': 'valdinei.freire no servidor usp.br'
    }
];