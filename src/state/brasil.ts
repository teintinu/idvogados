import { useState, useEffect } from 'react'

export type SiglaEstado = 'RO' | 'AC' | 'AM' | 'RR' | 'PA' | 'AP' | 'TO' | 'MA' | 'PI' | 'CE' | 'RN' | 'PB' | 'PE' | 'AL' | 'SE' | 'BA' | 'MG' | 'ES' | 'RJ' | 'SP' | 'PR' | 'SC' | 'RS' | 'MS' | 'MT' | 'GO' | 'DF'

export interface Cidade {
  nome: string
  uf: string
  ibge: number
  lat: number
  lng: number
}
export interface Estado {
  nome: string
  ibge: number
  capital: Cidade
  cidades: Cidade[]
}

export const brasil: { [sigla in SiglaEstado]: Estado } = {
  "RO": {
    "nome": "Rondônia",
    "ibge": 11,
    "cidades": [
      {
        "nome": "Alta Floresta D'Oeste",
        "uf": "RO",
        "ibge": 1100015,
        "lat": -11.9283,
        "lng": -61.9953
      },
      {
        "nome": "Alto Alegre dos Parecis",
        "uf": "RO",
        "ibge": 1100379,
        "lat": -12.132,
        "lng": -61.835
      },
      {
        "nome": "Alto Paraíso",
        "uf": "RO",
        "ibge": 1100403,
        "lat": -9.71429,
        "lng": -63.3188
      },
      {
        "nome": "Alvorada D'Oeste",
        "uf": "RO",
        "ibge": 1100346,
        "lat": -11.3463,
        "lng": -62.2847
      },
      {
        "nome": "Ariquemes",
        "uf": "RO",
        "ibge": 1100023,
        "lat": -9.90571,
        "lng": -63.0325
      },
      {
        "nome": "Buritis",
        "uf": "RO",
        "ibge": 1100452,
        "lat": -10.1943,
        "lng": -63.8324
      },
      {
        "nome": "Cabixi",
        "uf": "RO",
        "ibge": 1100031,
        "lat": -13.4945,
        "lng": -60.552
      },
      {
        "nome": "Cacaulândia",
        "uf": "RO",
        "ibge": 1100601,
        "lat": -10.349,
        "lng": -62.9043
      },
      {
        "nome": "Cacoal",
        "uf": "RO",
        "ibge": 1100049,
        "lat": -11.4343,
        "lng": -61.4562
      },
      {
        "nome": "Campo Novo de Rondônia",
        "uf": "RO",
        "ibge": 1100700,
        "lat": -10.5712,
        "lng": -63.6266
      },
      {
        "nome": "Candeias do Jamari",
        "uf": "RO",
        "ibge": 1100809,
        "lat": -8.7907,
        "lng": -63.7005
      },
      {
        "nome": "Castanheiras",
        "uf": "RO",
        "ibge": 1100908,
        "lat": -11.4253,
        "lng": -61.9482
      },
      {
        "nome": "Cerejeiras",
        "uf": "RO",
        "ibge": 1100056,
        "lat": -13.187,
        "lng": -60.8168
      },
      {
        "nome": "Chupinguaia",
        "uf": "RO",
        "ibge": 1100924,
        "lat": -12.5611,
        "lng": -60.8877
      },
      {
        "nome": "Colorado do Oeste",
        "uf": "RO",
        "ibge": 1100064,
        "lat": -13.1174,
        "lng": -60.5454
      },
      {
        "nome": "Corumbiara",
        "uf": "RO",
        "ibge": 1100072,
        "lat": -12.9551,
        "lng": -60.8947
      },
      {
        "nome": "Costa Marques",
        "uf": "RO",
        "ibge": 1100080,
        "lat": -12.4367,
        "lng": -64.228
      },
      {
        "nome": "Cujubim",
        "uf": "RO",
        "ibge": 1100940,
        "lat": -9.36065,
        "lng": -62.5846
      },
      {
        "nome": "Espigão D'Oeste",
        "uf": "RO",
        "ibge": 1100098,
        "lat": -11.5266,
        "lng": -61.0252
      },
      {
        "nome": "Governador Jorge Teixeira",
        "uf": "RO",
        "ibge": 1101005,
        "lat": -10.61,
        "lng": -62.7371
      },
      {
        "nome": "Guajará-Mirim",
        "uf": "RO",
        "ibge": 1100106,
        "lat": -10.7889,
        "lng": -65.3296
      },
      {
        "nome": "Itapuã do Oeste",
        "uf": "RO",
        "ibge": 1101104,
        "lat": -9.19687,
        "lng": -63.1809
      },
      {
        "nome": "Jaru",
        "uf": "RO",
        "ibge": 1100114,
        "lat": -10.4318,
        "lng": -62.4788
      },
      {
        "nome": "Ji-Paraná",
        "uf": "RO",
        "ibge": 1100122,
        "lat": -10.8777,
        "lng": -61.9322
      },
      {
        "nome": "Machadinho D'Oeste",
        "uf": "RO",
        "ibge": 1100130,
        "lat": -9.44363,
        "lng": -61.9818
      },
      {
        "nome": "Ministro Andreazza",
        "uf": "RO",
        "ibge": 1101203,
        "lat": -11.196,
        "lng": -61.5174
      },
      {
        "nome": "Mirante da Serra",
        "uf": "RO",
        "ibge": 1101302,
        "lat": -11.029,
        "lng": -62.6696
      },
      {
        "nome": "Monte Negro",
        "uf": "RO",
        "ibge": 1101401,
        "lat": -10.2458,
        "lng": -63.29
      },
      {
        "nome": "Nova Brasilândia D'Oeste",
        "uf": "RO",
        "ibge": 1100148,
        "lat": -11.7247,
        "lng": -62.3127
      },
      {
        "nome": "Nova Mamoré",
        "uf": "RO",
        "ibge": 1100338,
        "lat": -10.4077,
        "lng": -65.3346
      },
      {
        "nome": "Nova União",
        "uf": "RO",
        "ibge": 1101435,
        "lat": -10.9068,
        "lng": -62.5564
      },
      {
        "nome": "Novo Horizonte do Oeste",
        "uf": "RO",
        "ibge": 1100502,
        "lat": -11.6961,
        "lng": -61.9951
      },
      {
        "nome": "Ouro Preto do Oeste",
        "uf": "RO",
        "ibge": 1100155,
        "lat": -10.7167,
        "lng": -62.2565
      },
      {
        "nome": "Parecis",
        "uf": "RO",
        "ibge": 1101450,
        "lat": -12.1754,
        "lng": -61.6032
      },
      {
        "nome": "Pimenta Bueno",
        "uf": "RO",
        "ibge": 1100189,
        "lat": -11.672,
        "lng": -61.198
      },
      {
        "nome": "Pimenteiras do Oeste",
        "uf": "RO",
        "ibge": 1101468,
        "lat": -13.4823,
        "lng": -61.0471
      },
      {
        "nome": "Presidente Médici",
        "uf": "RO",
        "ibge": 1100254,
        "lat": -11.169,
        "lng": -61.8986
      },
      {
        "nome": "Primavera de Rondônia",
        "uf": "RO",
        "ibge": 1101476,
        "lat": -11.8295,
        "lng": -61.3153
      },
      {
        "nome": "Rio Crespo",
        "uf": "RO",
        "ibge": 1100262,
        "lat": -9.69965,
        "lng": -62.9011
      },
      {
        "nome": "Rolim de Moura",
        "uf": "RO",
        "ibge": 1100288,
        "lat": -11.7271,
        "lng": -61.7714
      },
      {
        "nome": "Santa Luzia D'Oeste",
        "uf": "RO",
        "ibge": 1100296,
        "lat": -11.9074,
        "lng": -61.7777
      },
      {
        "nome": "São Felipe D'Oeste",
        "uf": "RO",
        "ibge": 1101484,
        "lat": -11.9023,
        "lng": -61.5026
      },
      {
        "nome": "São Francisco do Guaporé",
        "uf": "RO",
        "ibge": 1101492,
        "lat": -12.052,
        "lng": -63.568
      },
      {
        "nome": "São Miguel do Guaporé",
        "uf": "RO",
        "ibge": 1100320,
        "lat": -11.6953,
        "lng": -62.7192
      },
      {
        "nome": "Seringueiras",
        "uf": "RO",
        "ibge": 1101500,
        "lat": -11.8055,
        "lng": -63.0182
      },
      {
        "nome": "Teixeirópolis",
        "uf": "RO",
        "ibge": 1101559,
        "lat": -10.9056,
        "lng": -62.242
      },
      {
        "nome": "Theobroma",
        "uf": "RO",
        "ibge": 1101609,
        "lat": -10.2483,
        "lng": -62.3538
      },
      {
        "nome": "Urupá",
        "uf": "RO",
        "ibge": 1101708,
        "lat": -11.1261,
        "lng": -62.3639
      },
      {
        "nome": "Vale do Anari",
        "uf": "RO",
        "ibge": 1101757,
        "lat": -9.86215,
        "lng": -62.1876
      },
      {
        "nome": "Vale do Paraíso",
        "uf": "RO",
        "ibge": 1101807,
        "lat": -10.4465,
        "lng": -62.1352
      },
      {
        "nome": "Vilhena",
        "uf": "RO",
        "ibge": 1100304,
        "lat": -12.7502,
        "lng": -60.1488
      }
    ],
    "capital": {
      "nome": "Porto Velho",
      "uf": "RO",
      "ibge": 1100205,
      "lat": -8.76077,
      "lng": -63.8999
    }
  },
  "AC": {
    "nome": "Acre",
    "ibge": 12,
    "cidades": [
      {
        "nome": "Acrelândia",
        "uf": "AC",
        "ibge": 1200013,
        "lat": -9.82581,
        "lng": -66.8972
      },
      {
        "nome": "Assis Brasil",
        "uf": "AC",
        "ibge": 1200054,
        "lat": -10.9298,
        "lng": -69.5738
      },
      {
        "nome": "Brasiléia",
        "uf": "AC",
        "ibge": 1200104,
        "lat": -10.995,
        "lng": -68.7497
      },
      {
        "nome": "Bujari",
        "uf": "AC",
        "ibge": 1200138,
        "lat": -9.81528,
        "lng": -67.955
      },
      {
        "nome": "Capixaba",
        "uf": "AC",
        "ibge": 1200179,
        "lat": -10.566,
        "lng": -67.686
      },
      {
        "nome": "Cruzeiro do Sul",
        "uf": "AC",
        "ibge": 1200203,
        "lat": -7.62762,
        "lng": -72.6756
      },
      {
        "nome": "Epitaciolândia",
        "uf": "AC",
        "ibge": 1200252,
        "lat": -11.0188,
        "lng": -68.7341
      },
      {
        "nome": "Feijó",
        "uf": "AC",
        "ibge": 1200302,
        "lat": -8.17054,
        "lng": -70.351
      },
      {
        "nome": "Jordão",
        "uf": "AC",
        "ibge": 1200328,
        "lat": -9.43091,
        "lng": -71.8974
      },
      {
        "nome": "Mâncio Lima",
        "uf": "AC",
        "ibge": 1200336,
        "lat": -7.61657,
        "lng": -72.8997
      },
      {
        "nome": "Manoel Urbano",
        "uf": "AC",
        "ibge": 1200344,
        "lat": -8.83291,
        "lng": -69.2679
      },
      {
        "nome": "Marechal Thaumaturgo",
        "uf": "AC",
        "ibge": 1200351,
        "lat": -8.93898,
        "lng": -72.7997
      },
      {
        "nome": "Plácido de Castro",
        "uf": "AC",
        "ibge": 1200385,
        "lat": -10.2806,
        "lng": -67.1371
      },
      {
        "nome": "Porto Acre",
        "uf": "AC",
        "ibge": 1200807,
        "lat": -9.58138,
        "lng": -67.5478
      },
      {
        "nome": "Porto Walter",
        "uf": "AC",
        "ibge": 1200393,
        "lat": -8.26323,
        "lng": -72.7537
      },
      {
        "nome": "Rodrigues Alves",
        "uf": "AC",
        "ibge": 1200427,
        "lat": -7.73864,
        "lng": -72.661
      },
      {
        "nome": "Santa Rosa do Purus",
        "uf": "AC",
        "ibge": 1200435,
        "lat": -9.44652,
        "lng": -70.4902
      },
      {
        "nome": "Sena Madureira",
        "uf": "AC",
        "ibge": 1200500,
        "lat": -9.06596,
        "lng": -68.6571
      },
      {
        "nome": "Senador Guiomard",
        "uf": "AC",
        "ibge": 1200450,
        "lat": -10.1497,
        "lng": -67.7362
      },
      {
        "nome": "Tarauacá",
        "uf": "AC",
        "ibge": 1200609,
        "lat": -8.15697,
        "lng": -70.7722
      },
      {
        "nome": "Xapuri",
        "uf": "AC",
        "ibge": 1200708,
        "lat": -10.6516,
        "lng": -68.4969
      }
    ],
    "capital": {
      "nome": "Rio Branco",
      "uf": "AC",
      "ibge": 1200401,
      "lat": -9.97499,
      "lng": -67.8243
    }
  },
  "AM": {
    "nome": "Amazonas",
    "ibge": 13,
    "cidades": [
      {
        "nome": "Alvarães",
        "uf": "AM",
        "ibge": 1300029,
        "lat": -3.22727,
        "lng": -64.8007
      },
      {
        "nome": "Amaturá",
        "uf": "AM",
        "ibge": 1300060,
        "lat": -3.37455,
        "lng": -68.2005
      },
      {
        "nome": "Anamã",
        "uf": "AM",
        "ibge": 1300086,
        "lat": -3.56697,
        "lng": -61.3963
      },
      {
        "nome": "Anori",
        "uf": "AM",
        "ibge": 1300102,
        "lat": -3.74603,
        "lng": -61.6575
      },
      {
        "nome": "Apuí",
        "uf": "AM",
        "ibge": 1300144,
        "lat": -7.19409,
        "lng": -59.896
      },
      {
        "nome": "Atalaia do Norte",
        "uf": "AM",
        "ibge": 1300201,
        "lat": -4.37055,
        "lng": -70.1967
      },
      {
        "nome": "Autazes",
        "uf": "AM",
        "ibge": 1300300,
        "lat": -3.58574,
        "lng": -59.1256
      },
      {
        "nome": "Barcelos",
        "uf": "AM",
        "ibge": 1300409,
        "lat": -0.983373,
        "lng": -62.9311
      },
      {
        "nome": "Barreirinha",
        "uf": "AM",
        "ibge": 1300508,
        "lat": -2.79886,
        "lng": -57.0679
      },
      {
        "nome": "Benjamin Constant",
        "uf": "AM",
        "ibge": 1300607,
        "lat": -4.37768,
        "lng": -70.0342
      },
      {
        "nome": "Beruri",
        "uf": "AM",
        "ibge": 1300631,
        "lat": -3.89874,
        "lng": -61.3616
      },
      {
        "nome": "Boa Vista do Ramos",
        "uf": "AM",
        "ibge": 1300680,
        "lat": -2.97409,
        "lng": -57.5873
      },
      {
        "nome": "Boca do Acre",
        "uf": "AM",
        "ibge": 1300706,
        "lat": -8.74232,
        "lng": -67.3919
      },
      {
        "nome": "Borba",
        "uf": "AM",
        "ibge": 1300805,
        "lat": -4.39154,
        "lng": -59.5874
      },
      {
        "nome": "Caapiranga",
        "uf": "AM",
        "ibge": 1300839,
        "lat": -3.31537,
        "lng": -61.2206
      },
      {
        "nome": "Canutama",
        "uf": "AM",
        "ibge": 1300904,
        "lat": -6.52582,
        "lng": -64.3953
      },
      {
        "nome": "Carauari",
        "uf": "AM",
        "ibge": 1301001,
        "lat": -4.88161,
        "lng": -66.9086
      },
      {
        "nome": "Careiro",
        "uf": "AM",
        "ibge": 1301100,
        "lat": -3.76803,
        "lng": -60.369
      },
      {
        "nome": "Careiro da Várzea",
        "uf": "AM",
        "ibge": 1301159,
        "lat": -3.314,
        "lng": -59.5557
      },
      {
        "nome": "Coari",
        "uf": "AM",
        "ibge": 1301209,
        "lat": -4.09412,
        "lng": -63.1441
      },
      {
        "nome": "Codajás",
        "uf": "AM",
        "ibge": 1301308,
        "lat": -3.83053,
        "lng": -62.0658
      },
      {
        "nome": "Eirunepé",
        "uf": "AM",
        "ibge": 1301407,
        "lat": -6.65677,
        "lng": -69.8662
      },
      {
        "nome": "Envira",
        "uf": "AM",
        "ibge": 1301506,
        "lat": -7.43789,
        "lng": -70.0281
      },
      {
        "nome": "Fonte Boa",
        "uf": "AM",
        "ibge": 1301605,
        "lat": -2.52342,
        "lng": -66.0942
      },
      {
        "nome": "Guajará",
        "uf": "AM",
        "ibge": 1301654,
        "lat": -7.53797,
        "lng": -72.5907
      },
      {
        "nome": "Humaitá",
        "uf": "AM",
        "ibge": 1301704,
        "lat": -7.51171,
        "lng": -63.0327
      },
      {
        "nome": "Ipixuna",
        "uf": "AM",
        "ibge": 1301803,
        "lat": -7.04791,
        "lng": -71.6934
      },
      {
        "nome": "Iranduba",
        "uf": "AM",
        "ibge": 1301852,
        "lat": -3.27479,
        "lng": -60.19
      },
      {
        "nome": "Itacoatiara",
        "uf": "AM",
        "ibge": 1301902,
        "lat": -3.13861,
        "lng": -58.4449
      },
      {
        "nome": "Itamarati",
        "uf": "AM",
        "ibge": 1301951,
        "lat": -6.43852,
        "lng": -68.2437
      },
      {
        "nome": "Itapiranga",
        "uf": "AM",
        "ibge": 1302009,
        "lat": -2.74081,
        "lng": -58.0293
      },
      {
        "nome": "Japurá",
        "uf": "AM",
        "ibge": 1302108,
        "lat": -1.88237,
        "lng": -66.9291
      },
      {
        "nome": "Juruá",
        "uf": "AM",
        "ibge": 1302207,
        "lat": -3.48438,
        "lng": -66.0718
      },
      {
        "nome": "Jutaí",
        "uf": "AM",
        "ibge": 1302306,
        "lat": -2.75814,
        "lng": -66.7595
      },
      {
        "nome": "Lábrea",
        "uf": "AM",
        "ibge": 1302405,
        "lat": -7.26413,
        "lng": -64.7948
      },
      {
        "nome": "Manacapuru",
        "uf": "AM",
        "ibge": 1302504,
        "lat": -3.29066,
        "lng": -60.6216
      },
      {
        "nome": "Manaquiri",
        "uf": "AM",
        "ibge": 1302553,
        "lat": -3.44078,
        "lng": -60.4612
      },
      {
        "nome": "Manicoré",
        "uf": "AM",
        "ibge": 1302702,
        "lat": -5.80462,
        "lng": -61.2895
      },
      {
        "nome": "Maraã",
        "uf": "AM",
        "ibge": 1302801,
        "lat": -1.85313,
        "lng": -65.573
      },
      {
        "nome": "Maués",
        "uf": "AM",
        "ibge": 1302900,
        "lat": -3.39289,
        "lng": -57.7067
      },
      {
        "nome": "Nhamundá",
        "uf": "AM",
        "ibge": 1303007,
        "lat": -2.20793,
        "lng": -56.7112
      },
      {
        "nome": "Nova Olinda do Norte",
        "uf": "AM",
        "ibge": 1303106,
        "lat": -3.90037,
        "lng": -59.094
      },
      {
        "nome": "Novo Airão",
        "uf": "AM",
        "ibge": 1303205,
        "lat": -2.63637,
        "lng": -60.9434
      },
      {
        "nome": "Novo Aripuanã",
        "uf": "AM",
        "ibge": 1303304,
        "lat": -5.12593,
        "lng": -60.3732
      },
      {
        "nome": "Parintins",
        "uf": "AM",
        "ibge": 1303403,
        "lat": -2.63741,
        "lng": -56.729
      },
      {
        "nome": "Pauini",
        "uf": "AM",
        "ibge": 1303502,
        "lat": -7.71311,
        "lng": -66.992
      },
      {
        "nome": "Presidente Figueiredo",
        "uf": "AM",
        "ibge": 1303536,
        "lat": -2.02981,
        "lng": -60.0234
      },
      {
        "nome": "Rio Preto da Eva",
        "uf": "AM",
        "ibge": 1303569,
        "lat": -2.7045,
        "lng": -59.6858
      },
      {
        "nome": "Santa Isabel do Rio Negro",
        "uf": "AM",
        "ibge": 1303601,
        "lat": -0.410824,
        "lng": -65.0092
      },
      {
        "nome": "Santo Antônio do Içá",
        "uf": "AM",
        "ibge": 1303700,
        "lat": -3.09544,
        "lng": -67.9463
      },
      {
        "nome": "São Gabriel da Cachoeira",
        "uf": "AM",
        "ibge": 1303809,
        "lat": -0.11909,
        "lng": -67.084
      },
      {
        "nome": "São Paulo de Olivença",
        "uf": "AM",
        "ibge": 1303908,
        "lat": -3.47292,
        "lng": -68.9646
      },
      {
        "nome": "São Sebastião do Uatumã",
        "uf": "AM",
        "ibge": 1303957,
        "lat": -2.55915,
        "lng": -57.8731
      },
      {
        "nome": "Silves",
        "uf": "AM",
        "ibge": 1304005,
        "lat": -2.81748,
        "lng": -58.248
      },
      {
        "nome": "Tabatinga",
        "uf": "AM",
        "ibge": 1304062,
        "lat": -4.2416,
        "lng": -69.9383
      },
      {
        "nome": "Tapauá",
        "uf": "AM",
        "ibge": 1304104,
        "lat": -5.62085,
        "lng": -63.1808
      },
      {
        "nome": "Tefé",
        "uf": "AM",
        "ibge": 1304203,
        "lat": -3.36822,
        "lng": -64.7193
      },
      {
        "nome": "Tonantins",
        "uf": "AM",
        "ibge": 1304237,
        "lat": -2.86582,
        "lng": -67.7919
      },
      {
        "nome": "Uarini",
        "uf": "AM",
        "ibge": 1304260,
        "lat": -2.99609,
        "lng": -65.1133
      },
      {
        "nome": "Urucará",
        "uf": "AM",
        "ibge": 1304302,
        "lat": -2.52936,
        "lng": -57.7538
      },
      {
        "nome": "Urucurituba",
        "uf": "AM",
        "ibge": 1304401,
        "lat": -3.12841,
        "lng": -58.1496
      }
    ],
    "capital": {
      "nome": "Manaus",
      "uf": "AM",
      "ibge": 1302603,
      "lat": -3.11866,
      "lng": -60.0212
    }
  },
  "RR": {
    "nome": "Roraima",
    "ibge": 14,
    "cidades": [
      {
        "nome": "Alto Alegre",
        "uf": "RR",
        "ibge": 1400050,
        "lat": 2.98858,
        "lng": -61.3072
      },
      {
        "nome": "Amajari",
        "uf": "RR",
        "ibge": 1400027,
        "lat": 3.64571,
        "lng": -61.3692
      },
      {
        "nome": "Bonfim",
        "uf": "RR",
        "ibge": 1400159,
        "lat": 3.36161,
        "lng": -59.8333
      },
      {
        "nome": "Cantá",
        "uf": "RR",
        "ibge": 1400175,
        "lat": 2.60994,
        "lng": -60.6058
      },
      {
        "nome": "Caracaraí",
        "uf": "RR",
        "ibge": 1400209,
        "lat": 1.82766,
        "lng": -61.1304
      },
      {
        "nome": "Caroebe",
        "uf": "RR",
        "ibge": 1400233,
        "lat": 0.884203,
        "lng": -59.6959
      },
      {
        "nome": "Iracema",
        "uf": "RR",
        "ibge": 1400282,
        "lat": 2.18305,
        "lng": -61.0415
      },
      {
        "nome": "Mucajaí",
        "uf": "RR",
        "ibge": 1400308,
        "lat": 2.43998,
        "lng": -60.9096
      },
      {
        "nome": "Normandia",
        "uf": "RR",
        "ibge": 1400407,
        "lat": 3.8853,
        "lng": -59.6204
      },
      {
        "nome": "Pacaraima",
        "uf": "RR",
        "ibge": 1400456,
        "lat": 4.4799,
        "lng": -61.1477
      },
      {
        "nome": "Rorainópolis",
        "uf": "RR",
        "ibge": 1400472,
        "lat": 0.939956,
        "lng": -60.4389
      },
      {
        "nome": "São João da Baliza",
        "uf": "RR",
        "ibge": 1400506,
        "lat": 0.951659,
        "lng": -59.9133
      },
      {
        "nome": "São Luiz",
        "uf": "RR",
        "ibge": 1400605,
        "lat": 1.01019,
        "lng": -60.0419
      },
      {
        "nome": "Uiramutã",
        "uf": "RR",
        "ibge": 1400704,
        "lat": 4.60314,
        "lng": -60.1815
      }
    ],
    "capital": {
      "nome": "Boa Vista",
      "uf": "RR",
      "ibge": 1400100,
      "lat": 2.82384,
      "lng": -60.6753
    }
  },
  "PA": {
    "nome": "Pará",
    "ibge": 15,
    "cidades": [
      {
        "nome": "Abaetetuba",
        "uf": "PA",
        "ibge": 1500107,
        "lat": -1.72183,
        "lng": -48.8788
      },
      {
        "nome": "Abel Figueiredo",
        "uf": "PA",
        "ibge": 1500131,
        "lat": -4.95333,
        "lng": -48.3933
      },
      {
        "nome": "Acará",
        "uf": "PA",
        "ibge": 1500206,
        "lat": -1.95383,
        "lng": -48.1985
      },
      {
        "nome": "Afuá",
        "uf": "PA",
        "ibge": 1500305,
        "lat": -0.154874,
        "lng": -50.3861
      },
      {
        "nome": "Água Azul do Norte",
        "uf": "PA",
        "ibge": 1500347,
        "lat": -6.79053,
        "lng": -50.4791
      },
      {
        "nome": "Alenquer",
        "uf": "PA",
        "ibge": 1500404,
        "lat": -1.94623,
        "lng": -54.7384
      },
      {
        "nome": "Almeirim",
        "uf": "PA",
        "ibge": 1500503,
        "lat": -1.52904,
        "lng": -52.5788
      },
      {
        "nome": "Altamira",
        "uf": "PA",
        "ibge": 1500602,
        "lat": -3.20407,
        "lng": -52.21
      },
      {
        "nome": "Anajás",
        "uf": "PA",
        "ibge": 1500701,
        "lat": -0.996811,
        "lng": -49.9354
      },
      {
        "nome": "Ananindeua",
        "uf": "PA",
        "ibge": 1500800,
        "lat": -1.36391,
        "lng": -48.3743
      },
      {
        "nome": "Anapu",
        "uf": "PA",
        "ibge": 1500859,
        "lat": -3.46985,
        "lng": -51.2003
      },
      {
        "nome": "Augusto Corrêa",
        "uf": "PA",
        "ibge": 1500909,
        "lat": -1.05109,
        "lng": -46.6147
      },
      {
        "nome": "Aurora do Pará",
        "uf": "PA",
        "ibge": 1500958,
        "lat": -2.14898,
        "lng": -47.5677
      },
      {
        "nome": "Aveiro",
        "uf": "PA",
        "ibge": 1501006,
        "lat": -3.60841,
        "lng": -55.3199
      },
      {
        "nome": "Bagre",
        "uf": "PA",
        "ibge": 1501105,
        "lat": -1.90057,
        "lng": -50.1987
      },
      {
        "nome": "Baião",
        "uf": "PA",
        "ibge": 1501204,
        "lat": -2.79021,
        "lng": -49.6694
      },
      {
        "nome": "Bannach",
        "uf": "PA",
        "ibge": 1501253,
        "lat": -7.34779,
        "lng": -50.3959
      },
      {
        "nome": "Barcarena",
        "uf": "PA",
        "ibge": 1501303,
        "lat": -1.51187,
        "lng": -48.6195
      },
      {
        "nome": "Belterra",
        "uf": "PA",
        "ibge": 1501451,
        "lat": -2.63609,
        "lng": -54.9374
      },
      {
        "nome": "Benevides",
        "uf": "PA",
        "ibge": 1501501,
        "lat": -1.36183,
        "lng": -48.2434
      },
      {
        "nome": "Bom Jesus do Tocantins",
        "uf": "PA",
        "ibge": 1501576,
        "lat": -5.0424,
        "lng": -48.6047
      },
      {
        "nome": "Bonito",
        "uf": "PA",
        "ibge": 1501600,
        "lat": -1.36745,
        "lng": -47.3066
      },
      {
        "nome": "Bragança",
        "uf": "PA",
        "ibge": 1501709,
        "lat": -1.06126,
        "lng": -46.7826
      },
      {
        "nome": "Brasil Novo",
        "uf": "PA",
        "ibge": 1501725,
        "lat": -3.29792,
        "lng": -52.534
      },
      {
        "nome": "Brejo Grande do Araguaia",
        "uf": "PA",
        "ibge": 1501758,
        "lat": -5.69822,
        "lng": -48.4103
      },
      {
        "nome": "Breu Branco",
        "uf": "PA",
        "ibge": 1501782,
        "lat": -3.77191,
        "lng": -49.5735
      },
      {
        "nome": "Breves",
        "uf": "PA",
        "ibge": 1501808,
        "lat": -1.68036,
        "lng": -50.4791
      },
      {
        "nome": "Bujaru",
        "uf": "PA",
        "ibge": 1501907,
        "lat": -1.51762,
        "lng": -48.0381
      },
      {
        "nome": "Cachoeira do Arari",
        "uf": "PA",
        "ibge": 1502004,
        "lat": -1.01226,
        "lng": -48.9503
      },
      {
        "nome": "Cachoeira do Piriá",
        "uf": "PA",
        "ibge": 1501956,
        "lat": -1.75974,
        "lng": -46.5459
      },
      {
        "nome": "Cametá",
        "uf": "PA",
        "ibge": 1502103,
        "lat": -2.24295,
        "lng": -49.4979
      },
      {
        "nome": "Canaã dos Carajás",
        "uf": "PA",
        "ibge": 1502152,
        "lat": -6.49659,
        "lng": -49.8776
      },
      {
        "nome": "Capanema",
        "uf": "PA",
        "ibge": 1502202,
        "lat": -1.20529,
        "lng": -47.1778
      },
      {
        "nome": "Capitão Poço",
        "uf": "PA",
        "ibge": 1502301,
        "lat": -1.74785,
        "lng": -47.0629
      },
      {
        "nome": "Castanhal",
        "uf": "PA",
        "ibge": 1502400,
        "lat": -1.29797,
        "lng": -47.9167
      },
      {
        "nome": "Chaves",
        "uf": "PA",
        "ibge": 1502509,
        "lat": -0.164154,
        "lng": -49.987
      },
      {
        "nome": "Colares",
        "uf": "PA",
        "ibge": 1502608,
        "lat": -0.936423,
        "lng": -48.2803
      },
      {
        "nome": "Conceição do Araguaia",
        "uf": "PA",
        "ibge": 1502707,
        "lat": -8.26136,
        "lng": -49.2689
      },
      {
        "nome": "Concórdia do Pará",
        "uf": "PA",
        "ibge": 1502756,
        "lat": -1.99238,
        "lng": -47.9422
      },
      {
        "nome": "Cumaru do Norte",
        "uf": "PA",
        "ibge": 1502764,
        "lat": -7.81097,
        "lng": -50.7698
      },
      {
        "nome": "Curionópolis",
        "uf": "PA",
        "ibge": 1502772,
        "lat": -6.09965,
        "lng": -49.6068
      },
      {
        "nome": "Curralinho",
        "uf": "PA",
        "ibge": 1502806,
        "lat": -1.81179,
        "lng": -49.7952
      },
      {
        "nome": "Curuá",
        "uf": "PA",
        "ibge": 1502855,
        "lat": -1.88775,
        "lng": -55.1168
      },
      {
        "nome": "Curuçá",
        "uf": "PA",
        "ibge": 1502905,
        "lat": -0.733214,
        "lng": -47.8515
      },
      {
        "nome": "Dom Eliseu",
        "uf": "PA",
        "ibge": 1502939,
        "lat": -4.19944,
        "lng": -47.8245
      },
      {
        "nome": "Eldorado do Carajás",
        "uf": "PA",
        "ibge": 1502954,
        "lat": -6.10389,
        "lng": -49.3553
      },
      {
        "nome": "Faro",
        "uf": "PA",
        "ibge": 1503002,
        "lat": -2.16805,
        "lng": -56.7405
      },
      {
        "nome": "Floresta do Araguaia",
        "uf": "PA",
        "ibge": 1503044,
        "lat": -7.55335,
        "lng": -49.7125
      },
      {
        "nome": "Garrafão do Norte",
        "uf": "PA",
        "ibge": 1503077,
        "lat": -1.92986,
        "lng": -47.0505
      },
      {
        "nome": "Goianésia do Pará",
        "uf": "PA",
        "ibge": 1503093,
        "lat": -3.84338,
        "lng": -49.0974
      },
      {
        "nome": "Gurupá",
        "uf": "PA",
        "ibge": 1503101,
        "lat": -1.41412,
        "lng": -51.6338
      },
      {
        "nome": "Igarapé-Açu",
        "uf": "PA",
        "ibge": 1503200,
        "lat": -1.12539,
        "lng": -47.626
      },
      {
        "nome": "Igarapé-Miri",
        "uf": "PA",
        "ibge": 1503309,
        "lat": -1.97533,
        "lng": -48.9575
      },
      {
        "nome": "Inhangapi",
        "uf": "PA",
        "ibge": 1503408,
        "lat": -1.4349,
        "lng": -47.9114
      },
      {
        "nome": "Ipixuna do Pará",
        "uf": "PA",
        "ibge": 1503457,
        "lat": -2.55992,
        "lng": -47.5059
      },
      {
        "nome": "Irituia",
        "uf": "PA",
        "ibge": 1503507,
        "lat": -1.76984,
        "lng": -47.446
      },
      {
        "nome": "Itaituba",
        "uf": "PA",
        "ibge": 1503606,
        "lat": -4.2667,
        "lng": -55.9926
      },
      {
        "nome": "Itupiranga",
        "uf": "PA",
        "ibge": 1503705,
        "lat": -5.13272,
        "lng": -49.3358
      },
      {
        "nome": "Jacareacanga",
        "uf": "PA",
        "ibge": 1503754,
        "lat": -6.21469,
        "lng": -57.7544
      },
      {
        "nome": "Jacundá",
        "uf": "PA",
        "ibge": 1503804,
        "lat": -4.44617,
        "lng": -49.1153
      },
      {
        "nome": "Juruti",
        "uf": "PA",
        "ibge": 1503903,
        "lat": -2.16347,
        "lng": -56.0889
      },
      {
        "nome": "Limoeiro do Ajuru",
        "uf": "PA",
        "ibge": 1504000,
        "lat": -1.8985,
        "lng": -49.3903
      },
      {
        "nome": "Mãe do Rio",
        "uf": "PA",
        "ibge": 1504059,
        "lat": -2.05683,
        "lng": -47.5601
      },
      {
        "nome": "Magalhães Barata",
        "uf": "PA",
        "ibge": 1504109,
        "lat": -0.803391,
        "lng": -47.6014
      },
      {
        "nome": "Marabá",
        "uf": "PA",
        "ibge": 1504208,
        "lat": -5.38075,
        "lng": -49.1327
      },
      {
        "nome": "Maracanã",
        "uf": "PA",
        "ibge": 1504307,
        "lat": -0.778899,
        "lng": -47.452
      },
      {
        "nome": "Marapanim",
        "uf": "PA",
        "ibge": 1504406,
        "lat": -0.714702,
        "lng": -47.7034
      },
      {
        "nome": "Marituba",
        "uf": "PA",
        "ibge": 1504422,
        "lat": -1.36002,
        "lng": -48.3421
      },
      {
        "nome": "Medicilândia",
        "uf": "PA",
        "ibge": 1504455,
        "lat": -3.44637,
        "lng": -52.8875
      },
      {
        "nome": "Melgaço",
        "uf": "PA",
        "ibge": 1504505,
        "lat": -1.8032,
        "lng": -50.7149
      },
      {
        "nome": "Mocajuba",
        "uf": "PA",
        "ibge": 1504604,
        "lat": -2.5831,
        "lng": -49.5042
      },
      {
        "nome": "Moju",
        "uf": "PA",
        "ibge": 1504703,
        "lat": -1.88993,
        "lng": -48.7668
      },
      {
        "nome": "Mojuí dos Campos",
        "uf": "PA",
        "ibge": 1504752,
        "lat": -2.6822,
        "lng": -54.6425
      },
      {
        "nome": "Monte Alegre",
        "uf": "PA",
        "ibge": 1504802,
        "lat": -1.99768,
        "lng": -54.0724
      },
      {
        "nome": "Muaná",
        "uf": "PA",
        "ibge": 1504901,
        "lat": -1.53936,
        "lng": -49.2224
      },
      {
        "nome": "Nova Esperança do Piriá",
        "uf": "PA",
        "ibge": 1504950,
        "lat": -2.26693,
        "lng": -46.9731
      },
      {
        "nome": "Nova Ipixuna",
        "uf": "PA",
        "ibge": 1504976,
        "lat": -4.91622,
        "lng": -49.0822
      },
      {
        "nome": "Nova Timboteua",
        "uf": "PA",
        "ibge": 1505007,
        "lat": -1.20874,
        "lng": -47.3921
      },
      {
        "nome": "Novo Progresso",
        "uf": "PA",
        "ibge": 1505031,
        "lat": -7.14347,
        "lng": -55.3786
      },
      {
        "nome": "Novo Repartimento",
        "uf": "PA",
        "ibge": 1505064,
        "lat": -4.24749,
        "lng": -49.9499
      },
      {
        "nome": "Óbidos",
        "uf": "PA",
        "ibge": 1505106,
        "lat": -1.90107,
        "lng": -55.5208
      },
      {
        "nome": "Oeiras do Pará",
        "uf": "PA",
        "ibge": 1505205,
        "lat": -2.00358,
        "lng": -49.8628
      },
      {
        "nome": "Oriximiná",
        "uf": "PA",
        "ibge": 1505304,
        "lat": -1.75989,
        "lng": -55.8579
      },
      {
        "nome": "Ourém",
        "uf": "PA",
        "ibge": 1505403,
        "lat": -1.54168,
        "lng": -47.1126
      },
      {
        "nome": "Ourilândia do Norte",
        "uf": "PA",
        "ibge": 1505437,
        "lat": -6.7529,
        "lng": -51.0858
      },
      {
        "nome": "Pacajá",
        "uf": "PA",
        "ibge": 1505486,
        "lat": -3.83542,
        "lng": -50.6399
      },
      {
        "nome": "Palestina do Pará",
        "uf": "PA",
        "ibge": 1505494,
        "lat": -5.74027,
        "lng": -48.3181
      },
      {
        "nome": "Paragominas",
        "uf": "PA",
        "ibge": 1505502,
        "lat": -3.00212,
        "lng": -47.3527
      },
      {
        "nome": "Parauapebas",
        "uf": "PA",
        "ibge": 1505536,
        "lat": -6.06781,
        "lng": -49.9037
      },
      {
        "nome": "Pau d'Arco",
        "uf": "PA",
        "ibge": 1505551,
        "lat": -1.59772,
        "lng": -46.9268
      },
      {
        "nome": "Peixe-Boi",
        "uf": "PA",
        "ibge": 1505601,
        "lat": -1.19382,
        "lng": -47.324
      },
      {
        "nome": "Piçarra",
        "uf": "PA",
        "ibge": 1505635,
        "lat": -6.43778,
        "lng": -48.8716
      },
      {
        "nome": "Placas",
        "uf": "PA",
        "ibge": 1505650,
        "lat": -3.86813,
        "lng": -54.2124
      },
      {
        "nome": "Ponta de Pedras",
        "uf": "PA",
        "ibge": 1505700,
        "lat": -1.39587,
        "lng": -48.8661
      },
      {
        "nome": "Portel",
        "uf": "PA",
        "ibge": 1505809,
        "lat": -1.93639,
        "lng": -50.8194
      },
      {
        "nome": "Porto de Moz",
        "uf": "PA",
        "ibge": 1505908,
        "lat": -1.74691,
        "lng": -52.2361
      },
      {
        "nome": "Prainha",
        "uf": "PA",
        "ibge": 1506005,
        "lat": -1.798,
        "lng": -53.4779
      },
      {
        "nome": "Primavera",
        "uf": "PA",
        "ibge": 1506104,
        "lat": -0.945439,
        "lng": -47.1253
      },
      {
        "nome": "Quatipuru",
        "uf": "PA",
        "ibge": 1506112,
        "lat": -0.899604,
        "lng": -47.0134
      },
      {
        "nome": "Redenção",
        "uf": "PA",
        "ibge": 1506138,
        "lat": -8.02529,
        "lng": -50.0317
      },
      {
        "nome": "Rio Maria",
        "uf": "PA",
        "ibge": 1506161,
        "lat": -7.31236,
        "lng": -50.0379
      },
      {
        "nome": "Rondon do Pará",
        "uf": "PA",
        "ibge": 1506187,
        "lat": -4.77793,
        "lng": -48.067
      },
      {
        "nome": "Rurópolis",
        "uf": "PA",
        "ibge": 1506195,
        "lat": -4.10028,
        "lng": -54.9092
      },
      {
        "nome": "Salinópolis",
        "uf": "PA",
        "ibge": 1506203,
        "lat": -0.630815,
        "lng": -47.3465
      },
      {
        "nome": "Salvaterra",
        "uf": "PA",
        "ibge": 1506302,
        "lat": -0.758444,
        "lng": -48.5139
      },
      {
        "nome": "Santa Bárbara do Pará",
        "uf": "PA",
        "ibge": 1506351,
        "lat": -1.19219,
        "lng": -48.238
      },
      {
        "nome": "Santa Cruz do Arari",
        "uf": "PA",
        "ibge": 1506401,
        "lat": -0.661019,
        "lng": -49.1771
      },
      {
        "nome": "Santa Izabel do Pará",
        "uf": "PA",
        "ibge": 1506500,
        "lat": -1.29686,
        "lng": -48.1606
      },
      {
        "nome": "Santa Luzia do Pará",
        "uf": "PA",
        "ibge": 1506559,
        "lat": -1.52147,
        "lng": -46.9008
      },
      {
        "nome": "Santa Maria das Barreiras",
        "uf": "PA",
        "ibge": 1506583,
        "lat": -8.85784,
        "lng": -49.7215
      },
      {
        "nome": "Santa Maria do Pará",
        "uf": "PA",
        "ibge": 1506609,
        "lat": -1.35392,
        "lng": -47.5712
      },
      {
        "nome": "Santana do Araguaia",
        "uf": "PA",
        "ibge": 1506708,
        "lat": -9.3281,
        "lng": -50.35
      },
      {
        "nome": "Santarém",
        "uf": "PA",
        "ibge": 1506807,
        "lat": -2.43849,
        "lng": -54.6996
      },
      {
        "nome": "Santarém Novo",
        "uf": "PA",
        "ibge": 1506906,
        "lat": -0.93097,
        "lng": -47.3855
      },
      {
        "nome": "Santo Antônio do Tauá",
        "uf": "PA",
        "ibge": 1507003,
        "lat": -1.1522,
        "lng": -48.1314
      },
      {
        "nome": "São Caetano de Odivelas",
        "uf": "PA",
        "ibge": 1507102,
        "lat": -0.747293,
        "lng": -48.0246
      },
      {
        "nome": "São Domingos do Araguaia",
        "uf": "PA",
        "ibge": 1507151,
        "lat": -5.53732,
        "lng": -48.7366
      },
      {
        "nome": "São Domingos do Capim",
        "uf": "PA",
        "ibge": 1507201,
        "lat": -1.68768,
        "lng": -47.7665
      },
      {
        "nome": "São Félix do Xingu",
        "uf": "PA",
        "ibge": 1507300,
        "lat": -6.64254,
        "lng": -51.9904
      },
      {
        "nome": "São Francisco do Pará",
        "uf": "PA",
        "ibge": 1507409,
        "lat": -1.16963,
        "lng": -47.7917
      },
      {
        "nome": "São Geraldo do Araguaia",
        "uf": "PA",
        "ibge": 1507458,
        "lat": -6.39471,
        "lng": -48.5592
      },
      {
        "nome": "São João da Ponta",
        "uf": "PA",
        "ibge": 1507466,
        "lat": -0.857885,
        "lng": -47.918
      },
      {
        "nome": "São João de Pirabas",
        "uf": "PA",
        "ibge": 1507474,
        "lat": -0.780222,
        "lng": -47.181
      },
      {
        "nome": "São João do Araguaia",
        "uf": "PA",
        "ibge": 1507508,
        "lat": -5.36334,
        "lng": -48.7926
      },
      {
        "nome": "São Miguel do Guamá",
        "uf": "PA",
        "ibge": 1507607,
        "lat": -1.61307,
        "lng": -47.4784
      },
      {
        "nome": "São Sebastião da Boa Vista",
        "uf": "PA",
        "ibge": 1507706,
        "lat": -1.71597,
        "lng": -49.5249
      },
      {
        "nome": "Sapucaia",
        "uf": "PA",
        "ibge": 1507755,
        "lat": -6.94018,
        "lng": -49.6834
      },
      {
        "nome": "Senador José Porfírio",
        "uf": "PA",
        "ibge": 1507805,
        "lat": -4.31242,
        "lng": -51.5764
      },
      {
        "nome": "Soure",
        "uf": "PA",
        "ibge": 1507904,
        "lat": -0.73032,
        "lng": -48.5015
      },
      {
        "nome": "Tailândia",
        "uf": "PA",
        "ibge": 1507953,
        "lat": -2.94584,
        "lng": -48.9489
      },
      {
        "nome": "Terra Alta",
        "uf": "PA",
        "ibge": 1507961,
        "lat": -1.02963,
        "lng": -47.9004
      },
      {
        "nome": "Terra Santa",
        "uf": "PA",
        "ibge": 1507979,
        "lat": -2.10443,
        "lng": -56.4877
      },
      {
        "nome": "Tomé-Açu",
        "uf": "PA",
        "ibge": 1508001,
        "lat": -2.41302,
        "lng": -48.1415
      },
      {
        "nome": "Tracuateua",
        "uf": "PA",
        "ibge": 1508035,
        "lat": -1.07653,
        "lng": -46.9031
      },
      {
        "nome": "Trairão",
        "uf": "PA",
        "ibge": 1508050,
        "lat": -4.57347,
        "lng": -55.9429
      },
      {
        "nome": "Tucumã",
        "uf": "PA",
        "ibge": 1508084,
        "lat": -6.74687,
        "lng": -51.1626
      },
      {
        "nome": "Tucuruí",
        "uf": "PA",
        "ibge": 1508100,
        "lat": -3.7657,
        "lng": -49.6773
      },
      {
        "nome": "Ulianópolis",
        "uf": "PA",
        "ibge": 1508126,
        "lat": -3.75007,
        "lng": -47.4892
      },
      {
        "nome": "Uruará",
        "uf": "PA",
        "ibge": 1508159,
        "lat": -3.71519,
        "lng": -53.7396
      },
      {
        "nome": "Vigia",
        "uf": "PA",
        "ibge": 1508209,
        "lat": -0.861194,
        "lng": -48.1386
      },
      {
        "nome": "Viseu",
        "uf": "PA",
        "ibge": 1508308,
        "lat": -1.19124,
        "lng": -46.1399
      },
      {
        "nome": "Vitória do Xingu",
        "uf": "PA",
        "ibge": 1508357,
        "lat": -2.87922,
        "lng": -52.0088
      },
      {
        "nome": "Xinguara",
        "uf": "PA",
        "ibge": 1508407,
        "lat": -7.0983,
        "lng": -49.9437
      }
    ],
    "capital": {
      "nome": "Belém",
      "uf": "PA",
      "ibge": 1501402,
      "lat": -1.4554,
      "lng": -48.4898
    }
  },
  "AP": {
    "nome": "Amapá",
    "ibge": 16,
    "cidades": [
      {
        "nome": "Amapá",
        "uf": "AP",
        "ibge": 1600105,
        "lat": 2.05267,
        "lng": -50.7957
      },
      {
        "nome": "Calçoene",
        "uf": "AP",
        "ibge": 1600204,
        "lat": 2.50475,
        "lng": -50.9512
      },
      {
        "nome": "Cutias",
        "uf": "AP",
        "ibge": 1600212,
        "lat": 0.970761,
        "lng": -50.8005
      },
      {
        "nome": "Ferreira Gomes",
        "uf": "AP",
        "ibge": 1600238,
        "lat": 0.857256,
        "lng": -51.1795
      },
      {
        "nome": "Itaubal",
        "uf": "AP",
        "ibge": 1600253,
        "lat": 0.602185,
        "lng": -50.6996
      },
      {
        "nome": "Laranjal do Jari",
        "uf": "AP",
        "ibge": 1600279,
        "lat": -0.804911,
        "lng": -52.453
      },
      {
        "nome": "Mazagão",
        "uf": "AP",
        "ibge": 1600402,
        "lat": -0.11336,
        "lng": -51.2891
      },
      {
        "nome": "Oiapoque",
        "uf": "AP",
        "ibge": 1600501,
        "lat": 3.84074,
        "lng": -51.8331
      },
      {
        "nome": "Pedra Branca do Amapari",
        "uf": "AP",
        "ibge": 1600154,
        "lat": 0.777424,
        "lng": -51.9503
      },
      {
        "nome": "Porto Grande",
        "uf": "AP",
        "ibge": 1600535,
        "lat": 0.71243,
        "lng": -51.4155
      },
      {
        "nome": "Pracuúba",
        "uf": "AP",
        "ibge": 1600550,
        "lat": 1.74543,
        "lng": -50.7892
      },
      {
        "nome": "Santana",
        "uf": "AP",
        "ibge": 1600600,
        "lat": -0.045434,
        "lng": -51.1729
      },
      {
        "nome": "Serra do Navio",
        "uf": "AP",
        "ibge": 1600055,
        "lat": 0.901357,
        "lng": -52.0036
      },
      {
        "nome": "Tartarugalzinho",
        "uf": "AP",
        "ibge": 1600709,
        "lat": 1.50652,
        "lng": -50.9087
      },
      {
        "nome": "Vitória do Jari",
        "uf": "AP",
        "ibge": 1600808,
        "lat": -0.938,
        "lng": -52.424
      }
    ],
    "capital": {
      "nome": "Macapá",
      "uf": "AP",
      "ibge": 1600303,
      "lat": 0.034934,
      "lng": -51.0694
    }
  },
  "TO": {
    "nome": "Tocantins",
    "ibge": 17,
    "cidades": [
      {
        "nome": "Abreulândia",
        "uf": "TO",
        "ibge": 1700251,
        "lat": -9.62101,
        "lng": -49.1518
      },
      {
        "nome": "Aguiarnópolis",
        "uf": "TO",
        "ibge": 1700301,
        "lat": -6.55409,
        "lng": -47.4702
      },
      {
        "nome": "Aliança do Tocantins",
        "uf": "TO",
        "ibge": 1700350,
        "lat": -11.3056,
        "lng": -48.9361
      },
      {
        "nome": "Almas",
        "uf": "TO",
        "ibge": 1700400,
        "lat": -11.5706,
        "lng": -47.1792
      },
      {
        "nome": "Alvorada",
        "uf": "TO",
        "ibge": 1700707,
        "lat": -12.4785,
        "lng": -49.1249
      },
      {
        "nome": "Ananás",
        "uf": "TO",
        "ibge": 1701002,
        "lat": -6.36437,
        "lng": -48.0735
      },
      {
        "nome": "Angico",
        "uf": "TO",
        "ibge": 1701051,
        "lat": -6.39179,
        "lng": -47.8611
      },
      {
        "nome": "Aparecida do Rio Negro",
        "uf": "TO",
        "ibge": 1701101,
        "lat": -9.94139,
        "lng": -47.9638
      },
      {
        "nome": "Aragominas",
        "uf": "TO",
        "ibge": 1701309,
        "lat": -7.16005,
        "lng": -48.5291
      },
      {
        "nome": "Araguacema",
        "uf": "TO",
        "ibge": 1701903,
        "lat": -8.80755,
        "lng": -49.5569
      },
      {
        "nome": "Araguaçu",
        "uf": "TO",
        "ibge": 1702000,
        "lat": -12.9289,
        "lng": -49.8231
      },
      {
        "nome": "Araguaína",
        "uf": "TO",
        "ibge": 1702109,
        "lat": -7.19238,
        "lng": -48.2044
      },
      {
        "nome": "Araguanã",
        "uf": "TO",
        "ibge": 1702158,
        "lat": -6.58225,
        "lng": -48.6395
      },
      {
        "nome": "Araguatins",
        "uf": "TO",
        "ibge": 1702208,
        "lat": -5.64659,
        "lng": -48.1232
      },
      {
        "nome": "Arapoema",
        "uf": "TO",
        "ibge": 1702307,
        "lat": -7.65463,
        "lng": -49.0637
      },
      {
        "nome": "Arraias",
        "uf": "TO",
        "ibge": 1702406,
        "lat": -12.9287,
        "lng": -46.9359
      },
      {
        "nome": "Augustinópolis",
        "uf": "TO",
        "ibge": 1702554,
        "lat": -5.46863,
        "lng": -47.8863
      },
      {
        "nome": "Aurora do Tocantins",
        "uf": "TO",
        "ibge": 1702703,
        "lat": -12.7105,
        "lng": -46.4076
      },
      {
        "nome": "Axixá do Tocantins",
        "uf": "TO",
        "ibge": 1702901,
        "lat": -5.61275,
        "lng": -47.7701
      },
      {
        "nome": "Babaçulândia",
        "uf": "TO",
        "ibge": 1703008,
        "lat": -7.20923,
        "lng": -47.7613
      },
      {
        "nome": "Bandeirantes do Tocantins",
        "uf": "TO",
        "ibge": 1703057,
        "lat": -7.75612,
        "lng": -48.5836
      },
      {
        "nome": "Barra do Ouro",
        "uf": "TO",
        "ibge": 1703073,
        "lat": -7.69593,
        "lng": -47.6776
      },
      {
        "nome": "Barrolândia",
        "uf": "TO",
        "ibge": 1703107,
        "lat": -9.83404,
        "lng": -48.7252
      },
      {
        "nome": "Bernardo Sayão",
        "uf": "TO",
        "ibge": 1703206,
        "lat": -7.87481,
        "lng": -48.8893
      },
      {
        "nome": "Bom Jesus do Tocantins",
        "uf": "TO",
        "ibge": 1703305,
        "lat": -8.96306,
        "lng": -48.165
      },
      {
        "nome": "Brasilândia do Tocantins",
        "uf": "TO",
        "ibge": 1703602,
        "lat": -8.38918,
        "lng": -48.4822
      },
      {
        "nome": "Brejinho de Nazaré",
        "uf": "TO",
        "ibge": 1703701,
        "lat": -11.0058,
        "lng": -48.5683
      },
      {
        "nome": "Buriti do Tocantins",
        "uf": "TO",
        "ibge": 1703800,
        "lat": -5.31448,
        "lng": -48.2271
      },
      {
        "nome": "Cachoeirinha",
        "uf": "TO",
        "ibge": 1703826,
        "lat": -6.1156,
        "lng": -47.9234
      },
      {
        "nome": "Campos Lindos",
        "uf": "TO",
        "ibge": 1703842,
        "lat": -7.98956,
        "lng": -46.8645
      },
      {
        "nome": "Cariri do Tocantins",
        "uf": "TO",
        "ibge": 1703867,
        "lat": -11.8881,
        "lng": -49.1609
      },
      {
        "nome": "Carmolândia",
        "uf": "TO",
        "ibge": 1703883,
        "lat": -7.03262,
        "lng": -48.3978
      },
      {
        "nome": "Carrasco Bonito",
        "uf": "TO",
        "ibge": 1703891,
        "lat": -5.31415,
        "lng": -48.0314
      },
      {
        "nome": "Caseara",
        "uf": "TO",
        "ibge": 1703909,
        "lat": -9.27612,
        "lng": -49.9521
      },
      {
        "nome": "Centenário",
        "uf": "TO",
        "ibge": 1704105,
        "lat": -8.96103,
        "lng": -47.3304
      },
      {
        "nome": "Chapada da Natividade",
        "uf": "TO",
        "ibge": 1705102,
        "lat": -11.6175,
        "lng": -47.7486
      },
      {
        "nome": "Chapada de Areia",
        "uf": "TO",
        "ibge": 1704600,
        "lat": -10.1419,
        "lng": -49.1403
      },
      {
        "nome": "Colinas do Tocantins",
        "uf": "TO",
        "ibge": 1705508,
        "lat": -8.05764,
        "lng": -48.4757
      },
      {
        "nome": "Colméia",
        "uf": "TO",
        "ibge": 1716703,
        "lat": -8.72463,
        "lng": -48.7638
      },
      {
        "nome": "Combinado",
        "uf": "TO",
        "ibge": 1705557,
        "lat": -12.7917,
        "lng": -46.5388
      },
      {
        "nome": "Conceição do Tocantins",
        "uf": "TO",
        "ibge": 1705607,
        "lat": -12.2209,
        "lng": -47.2951
      },
      {
        "nome": "Couto Magalhães",
        "uf": "TO",
        "ibge": 1706001,
        "lat": -8.28411,
        "lng": -49.2473
      },
      {
        "nome": "Cristalândia",
        "uf": "TO",
        "ibge": 1706100,
        "lat": -10.5985,
        "lng": -49.1942
      },
      {
        "nome": "Crixás do Tocantins",
        "uf": "TO",
        "ibge": 1706258,
        "lat": -11.0994,
        "lng": -48.9152
      },
      {
        "nome": "Darcinópolis",
        "uf": "TO",
        "ibge": 1706506,
        "lat": -6.71591,
        "lng": -47.7597
      },
      {
        "nome": "Dianópolis",
        "uf": "TO",
        "ibge": 1707009,
        "lat": -11.624,
        "lng": -46.8198
      },
      {
        "nome": "Divinópolis do Tocantins",
        "uf": "TO",
        "ibge": 1707108,
        "lat": -9.80018,
        "lng": -49.2169
      },
      {
        "nome": "Dois Irmãos do Tocantins",
        "uf": "TO",
        "ibge": 1707207,
        "lat": -9.25534,
        "lng": -49.0638
      },
      {
        "nome": "Dueré",
        "uf": "TO",
        "ibge": 1707306,
        "lat": -11.3416,
        "lng": -49.2716
      },
      {
        "nome": "Esperantina",
        "uf": "TO",
        "ibge": 1707405,
        "lat": -5.36593,
        "lng": -48.5378
      },
      {
        "nome": "Fátima",
        "uf": "TO",
        "ibge": 1707553,
        "lat": -10.7603,
        "lng": -48.9076
      },
      {
        "nome": "Figueirópolis",
        "uf": "TO",
        "ibge": 1707652,
        "lat": -12.1312,
        "lng": -49.1748
      },
      {
        "nome": "Filadélfia",
        "uf": "TO",
        "ibge": 1707702,
        "lat": -7.33501,
        "lng": -47.4954
      },
      {
        "nome": "Formoso do Araguaia",
        "uf": "TO",
        "ibge": 1708205,
        "lat": -11.7976,
        "lng": -49.5316
      },
      {
        "nome": "Fortaleza do Tabocão",
        "uf": "TO",
        "ibge": 1708254,
        "lat": -9.05611,
        "lng": -48.5206
      },
      {
        "nome": "Goianorte",
        "uf": "TO",
        "ibge": 1708304,
        "lat": -8.77413,
        "lng": -48.9313
      },
      {
        "nome": "Goiatins",
        "uf": "TO",
        "ibge": 1709005,
        "lat": -7.71478,
        "lng": -47.3252
      },
      {
        "nome": "Guaraí",
        "uf": "TO",
        "ibge": 1709302,
        "lat": -8.83543,
        "lng": -48.5114
      },
      {
        "nome": "Gurupi",
        "uf": "TO",
        "ibge": 1709500,
        "lat": -11.7279,
        "lng": -49.068
      },
      {
        "nome": "Ipueiras",
        "uf": "TO",
        "ibge": 1709807,
        "lat": -11.2329,
        "lng": -48.46
      },
      {
        "nome": "Itacajá",
        "uf": "TO",
        "ibge": 1710508,
        "lat": -8.39293,
        "lng": -47.7726
      },
      {
        "nome": "Itaguatins",
        "uf": "TO",
        "ibge": 1710706,
        "lat": -5.77267,
        "lng": -47.4864
      },
      {
        "nome": "Itapiratins",
        "uf": "TO",
        "ibge": 1710904,
        "lat": -8.37982,
        "lng": -48.1072
      },
      {
        "nome": "Itaporã do Tocantins",
        "uf": "TO",
        "ibge": 1711100,
        "lat": -8.57172,
        "lng": -48.6895
      },
      {
        "nome": "Jaú do Tocantins",
        "uf": "TO",
        "ibge": 1711506,
        "lat": -12.6509,
        "lng": -48.589
      },
      {
        "nome": "Juarina",
        "uf": "TO",
        "ibge": 1711803,
        "lat": -8.11951,
        "lng": -49.0643
      },
      {
        "nome": "Lagoa da Confusão",
        "uf": "TO",
        "ibge": 1711902,
        "lat": -10.7906,
        "lng": -49.6199
      },
      {
        "nome": "Lagoa do Tocantins",
        "uf": "TO",
        "ibge": 1711951,
        "lat": -10.368,
        "lng": -47.538
      },
      {
        "nome": "Lajeado",
        "uf": "TO",
        "ibge": 1712009,
        "lat": -9.74996,
        "lng": -48.3565
      },
      {
        "nome": "Lavandeira",
        "uf": "TO",
        "ibge": 1712157,
        "lat": -12.7847,
        "lng": -46.5099
      },
      {
        "nome": "Lizarda",
        "uf": "TO",
        "ibge": 1712405,
        "lat": -9.59002,
        "lng": -46.6738
      },
      {
        "nome": "Luzinópolis",
        "uf": "TO",
        "ibge": 1712454,
        "lat": -6.17794,
        "lng": -47.8582
      },
      {
        "nome": "Marianópolis do Tocantins",
        "uf": "TO",
        "ibge": 1712504,
        "lat": -9.79377,
        "lng": -49.6553
      },
      {
        "nome": "Mateiros",
        "uf": "TO",
        "ibge": 1712702,
        "lat": -10.5464,
        "lng": -46.4168
      },
      {
        "nome": "Maurilândia do Tocantins",
        "uf": "TO",
        "ibge": 1712801,
        "lat": -5.95169,
        "lng": -47.5125
      },
      {
        "nome": "Miracema do Tocantins",
        "uf": "TO",
        "ibge": 1713205,
        "lat": -9.56556,
        "lng": -48.393
      },
      {
        "nome": "Miranorte",
        "uf": "TO",
        "ibge": 1713304,
        "lat": -9.52907,
        "lng": -48.5922
      },
      {
        "nome": "Monte do Carmo",
        "uf": "TO",
        "ibge": 1713601,
        "lat": -10.7611,
        "lng": -48.1114
      },
      {
        "nome": "Monte Santo do Tocantins",
        "uf": "TO",
        "ibge": 1713700,
        "lat": -10.0075,
        "lng": -48.9941
      },
      {
        "nome": "Muricilândia",
        "uf": "TO",
        "ibge": 1713957,
        "lat": -7.14669,
        "lng": -48.6091
      },
      {
        "nome": "Natividade",
        "uf": "TO",
        "ibge": 1714203,
        "lat": -11.7034,
        "lng": -47.7223
      },
      {
        "nome": "Nazaré",
        "uf": "TO",
        "ibge": 1714302,
        "lat": -6.37496,
        "lng": -47.6643
      },
      {
        "nome": "Nova Olinda",
        "uf": "TO",
        "ibge": 1714880,
        "lat": -7.63171,
        "lng": -48.4252
      },
      {
        "nome": "Nova Rosalândia",
        "uf": "TO",
        "ibge": 1715002,
        "lat": -10.5651,
        "lng": -48.9125
      },
      {
        "nome": "Novo Acordo",
        "uf": "TO",
        "ibge": 1715101,
        "lat": -9.97063,
        "lng": -47.6785
      },
      {
        "nome": "Novo Alegre",
        "uf": "TO",
        "ibge": 1715150,
        "lat": -12.9217,
        "lng": -46.5713
      },
      {
        "nome": "Novo Jardim",
        "uf": "TO",
        "ibge": 1715259,
        "lat": -11.826,
        "lng": -46.6325
      },
      {
        "nome": "Oliveira de Fátima",
        "uf": "TO",
        "ibge": 1715507,
        "lat": -10.707,
        "lng": -48.9086
      },
      {
        "nome": "Palmeirante",
        "uf": "TO",
        "ibge": 1715705,
        "lat": -7.84786,
        "lng": -47.9242
      },
      {
        "nome": "Palmeiras do Tocantins",
        "uf": "TO",
        "ibge": 1713809,
        "lat": -6.61658,
        "lng": -47.5464
      },
      {
        "nome": "Palmeirópolis",
        "uf": "TO",
        "ibge": 1715754,
        "lat": -13.0447,
        "lng": -48.4026
      },
      {
        "nome": "Paraíso do Tocantins",
        "uf": "TO",
        "ibge": 1716109,
        "lat": -10.175,
        "lng": -48.8823
      },
      {
        "nome": "Paranã",
        "uf": "TO",
        "ibge": 1716208,
        "lat": -12.6167,
        "lng": -47.8734
      },
      {
        "nome": "Pau D'Arco",
        "uf": "TO",
        "ibge": 1716307,
        "lat": -7.53919,
        "lng": -49.367
      },
      {
        "nome": "Pedro Afonso",
        "uf": "TO",
        "ibge": 1716505,
        "lat": -8.97034,
        "lng": -48.1729
      },
      {
        "nome": "Peixe",
        "uf": "TO",
        "ibge": 1716604,
        "lat": -12.0254,
        "lng": -48.5395
      },
      {
        "nome": "Pequizeiro",
        "uf": "TO",
        "ibge": 1716653,
        "lat": -8.5932,
        "lng": -48.9327
      },
      {
        "nome": "Pindorama do Tocantins",
        "uf": "TO",
        "ibge": 1717008,
        "lat": -11.1311,
        "lng": -47.5726
      },
      {
        "nome": "Piraquê",
        "uf": "TO",
        "ibge": 1717206,
        "lat": -6.77302,
        "lng": -48.2958
      },
      {
        "nome": "Pium",
        "uf": "TO",
        "ibge": 1717503,
        "lat": -10.442,
        "lng": -49.1876
      },
      {
        "nome": "Ponte Alta do Bom Jesus",
        "uf": "TO",
        "ibge": 1717800,
        "lat": -12.0853,
        "lng": -46.4825
      },
      {
        "nome": "Ponte Alta do Tocantins",
        "uf": "TO",
        "ibge": 1717909,
        "lat": -10.7481,
        "lng": -47.5276
      },
      {
        "nome": "Porto Alegre do Tocantins",
        "uf": "TO",
        "ibge": 1718006,
        "lat": -11.618,
        "lng": -47.0621
      },
      {
        "nome": "Porto Nacional",
        "uf": "TO",
        "ibge": 1718204,
        "lat": -10.7027,
        "lng": -48.408
      },
      {
        "nome": "Praia Norte",
        "uf": "TO",
        "ibge": 1718303,
        "lat": -5.39281,
        "lng": -47.8111
      },
      {
        "nome": "Presidente Kennedy",
        "uf": "TO",
        "ibge": 1718402,
        "lat": -8.5406,
        "lng": -48.5062
      },
      {
        "nome": "Pugmil",
        "uf": "TO",
        "ibge": 1718451,
        "lat": -10.424,
        "lng": -48.8957
      },
      {
        "nome": "Recursolândia",
        "uf": "TO",
        "ibge": 1718501,
        "lat": -8.7227,
        "lng": -47.2421
      },
      {
        "nome": "Riachinho",
        "uf": "TO",
        "ibge": 1718550,
        "lat": -6.44005,
        "lng": -48.1371
      },
      {
        "nome": "Rio da Conceição",
        "uf": "TO",
        "ibge": 1718659,
        "lat": -11.3949,
        "lng": -46.8847
      },
      {
        "nome": "Rio dos Bois",
        "uf": "TO",
        "ibge": 1718709,
        "lat": -9.34425,
        "lng": -48.5245
      },
      {
        "nome": "Rio Sono",
        "uf": "TO",
        "ibge": 1718758,
        "lat": -9.35002,
        "lng": -47.888
      },
      {
        "nome": "Sampaio",
        "uf": "TO",
        "ibge": 1718808,
        "lat": -5.35423,
        "lng": -47.8782
      },
      {
        "nome": "Sandolândia",
        "uf": "TO",
        "ibge": 1718840,
        "lat": -12.538,
        "lng": -49.9242
      },
      {
        "nome": "Santa Fé do Araguaia",
        "uf": "TO",
        "ibge": 1718865,
        "lat": -7.15803,
        "lng": -48.7165
      },
      {
        "nome": "Santa Maria do Tocantins",
        "uf": "TO",
        "ibge": 1718881,
        "lat": -8.8046,
        "lng": -47.7887
      },
      {
        "nome": "Santa Rita do Tocantins",
        "uf": "TO",
        "ibge": 1718899,
        "lat": -10.8617,
        "lng": -48.9161
      },
      {
        "nome": "Santa Rosa do Tocantins",
        "uf": "TO",
        "ibge": 1718907,
        "lat": -11.4474,
        "lng": -48.1216
      },
      {
        "nome": "Santa Tereza do Tocantins",
        "uf": "TO",
        "ibge": 1719004,
        "lat": -10.2746,
        "lng": -47.8033
      },
      {
        "nome": "Santa Terezinha do Tocantins",
        "uf": "TO",
        "ibge": 1720002,
        "lat": -6.44438,
        "lng": -47.6684
      },
      {
        "nome": "São Bento do Tocantins",
        "uf": "TO",
        "ibge": 1720101,
        "lat": -6.0258,
        "lng": -47.9012
      },
      {
        "nome": "São Félix do Tocantins",
        "uf": "TO",
        "ibge": 1720150,
        "lat": -10.1615,
        "lng": -46.6618
      },
      {
        "nome": "São Miguel do Tocantins",
        "uf": "TO",
        "ibge": 1720200,
        "lat": -5.56305,
        "lng": -47.5743
      },
      {
        "nome": "São Salvador do Tocantins",
        "uf": "TO",
        "ibge": 1720259,
        "lat": -12.7458,
        "lng": -48.2352
      },
      {
        "nome": "São Sebastião do Tocantins",
        "uf": "TO",
        "ibge": 1720309,
        "lat": -5.26131,
        "lng": -48.2021
      },
      {
        "nome": "São Valério",
        "uf": "TO",
        "ibge": 1720499,
        "lat": -11.9743,
        "lng": -48.2353
      },
      {
        "nome": "Silvanópolis",
        "uf": "TO",
        "ibge": 1720655,
        "lat": -11.1471,
        "lng": -48.1694
      },
      {
        "nome": "Sítio Novo do Tocantins",
        "uf": "TO",
        "ibge": 1720804,
        "lat": -5.6012,
        "lng": -47.6381
      },
      {
        "nome": "Sucupira",
        "uf": "TO",
        "ibge": 1720853,
        "lat": -11.993,
        "lng": -48.9685
      },
      {
        "nome": "Taguatinga",
        "uf": "TO",
        "ibge": 1720903,
        "lat": -12.4026,
        "lng": -46.437
      },
      {
        "nome": "Taipas do Tocantins",
        "uf": "TO",
        "ibge": 1720937,
        "lat": -12.1873,
        "lng": -46.9797
      },
      {
        "nome": "Talismã",
        "uf": "TO",
        "ibge": 1720978,
        "lat": -12.7949,
        "lng": -49.0896
      },
      {
        "nome": "Tocantínia",
        "uf": "TO",
        "ibge": 1721109,
        "lat": -9.5632,
        "lng": -48.3741
      },
      {
        "nome": "Tocantinópolis",
        "uf": "TO",
        "ibge": 1721208,
        "lat": -6.32447,
        "lng": -47.4224
      },
      {
        "nome": "Tupirama",
        "uf": "TO",
        "ibge": 1721257,
        "lat": -8.97168,
        "lng": -48.1883
      },
      {
        "nome": "Tupiratins",
        "uf": "TO",
        "ibge": 1721307,
        "lat": -8.39388,
        "lng": -48.1277
      },
      {
        "nome": "Wanderlândia",
        "uf": "TO",
        "ibge": 1722081,
        "lat": -6.85274,
        "lng": -47.9601
      },
      {
        "nome": "Xambioá",
        "uf": "TO",
        "ibge": 1722107,
        "lat": -6.4141,
        "lng": -48.532
      }
    ],
    "capital": {
      "nome": "Palmas",
      "uf": "TO",
      "ibge": 1721000,
      "lat": -10.24,
      "lng": -48.3558
    }
  },
  "MA": {
    "nome": "Maranhão",
    "ibge": 21,
    "cidades": [
      {
        "nome": "Açailândia",
        "uf": "MA",
        "ibge": 2100055,
        "lat": -4.94714,
        "lng": -47.5004
      },
      {
        "nome": "Afonso Cunha",
        "uf": "MA",
        "ibge": 2100105,
        "lat": -4.13631,
        "lng": -43.3275
      },
      {
        "nome": "Água Doce do Maranhão",
        "uf": "MA",
        "ibge": 2100154,
        "lat": -2.84048,
        "lng": -42.1189
      },
      {
        "nome": "Alcântara",
        "uf": "MA",
        "ibge": 2100204,
        "lat": -2.39574,
        "lng": -44.4062
      },
      {
        "nome": "Aldeias Altas",
        "uf": "MA",
        "ibge": 2100303,
        "lat": -4.62621,
        "lng": -43.4689
      },
      {
        "nome": "Altamira do Maranhão",
        "uf": "MA",
        "ibge": 2100402,
        "lat": -4.16598,
        "lng": -45.4706
      },
      {
        "nome": "Alto Alegre do Maranhão",
        "uf": "MA",
        "ibge": 2100436,
        "lat": -4.213,
        "lng": -44.446
      },
      {
        "nome": "Alto Alegre do Pindaré",
        "uf": "MA",
        "ibge": 2100477,
        "lat": -3.66689,
        "lng": -45.8421
      },
      {
        "nome": "Alto Parnaíba",
        "uf": "MA",
        "ibge": 2100501,
        "lat": -9.10273,
        "lng": -45.9303
      },
      {
        "nome": "Amapá do Maranhão",
        "uf": "MA",
        "ibge": 2100550,
        "lat": -1.67524,
        "lng": -46.0024
      },
      {
        "nome": "Amarante do Maranhão",
        "uf": "MA",
        "ibge": 2100600,
        "lat": -5.56913,
        "lng": -46.7473
      },
      {
        "nome": "Anajatuba",
        "uf": "MA",
        "ibge": 2100709,
        "lat": -3.26269,
        "lng": -44.6126
      },
      {
        "nome": "Anapurus",
        "uf": "MA",
        "ibge": 2100808,
        "lat": -3.67577,
        "lng": -43.1014
      },
      {
        "nome": "Apicum-Açu",
        "uf": "MA",
        "ibge": 2100832,
        "lat": -1.45862,
        "lng": -45.0864
      },
      {
        "nome": "Araguanã",
        "uf": "MA",
        "ibge": 2100873,
        "lat": -2.94644,
        "lng": -45.6589
      },
      {
        "nome": "Araioses",
        "uf": "MA",
        "ibge": 2100907,
        "lat": -2.89091,
        "lng": -41.905
      },
      {
        "nome": "Arame",
        "uf": "MA",
        "ibge": 2100956,
        "lat": -4.88347,
        "lng": -46.0032
      },
      {
        "nome": "Arari",
        "uf": "MA",
        "ibge": 2101004,
        "lat": -3.45214,
        "lng": -44.7665
      },
      {
        "nome": "Axixá",
        "uf": "MA",
        "ibge": 2101103,
        "lat": -2.83939,
        "lng": -44.062
      },
      {
        "nome": "Bacabal",
        "uf": "MA",
        "ibge": 2101202,
        "lat": -4.22447,
        "lng": -44.7832
      },
      {
        "nome": "Bacabeira",
        "uf": "MA",
        "ibge": 2101251,
        "lat": -2.96452,
        "lng": -44.3164
      },
      {
        "nome": "Bacuri",
        "uf": "MA",
        "ibge": 2101301,
        "lat": -1.6965,
        "lng": -45.1328
      },
      {
        "nome": "Bacurituba",
        "uf": "MA",
        "ibge": 2101350,
        "lat": -2.71,
        "lng": -44.7329
      },
      {
        "nome": "Balsas",
        "uf": "MA",
        "ibge": 2101400,
        "lat": -7.53214,
        "lng": -46.0372
      },
      {
        "nome": "Barão de Grajaú",
        "uf": "MA",
        "ibge": 2101509,
        "lat": -6.74463,
        "lng": -43.0261
      },
      {
        "nome": "Barra do Corda",
        "uf": "MA",
        "ibge": 2101608,
        "lat": -5.49682,
        "lng": -45.2485
      },
      {
        "nome": "Barreirinhas",
        "uf": "MA",
        "ibge": 2101707,
        "lat": -2.75863,
        "lng": -42.8232
      },
      {
        "nome": "Bela Vista do Maranhão",
        "uf": "MA",
        "ibge": 2101772,
        "lat": -3.72618,
        "lng": -45.3075
      },
      {
        "nome": "Belágua",
        "uf": "MA",
        "ibge": 2101731,
        "lat": -3.15485,
        "lng": -43.5122
      },
      {
        "nome": "Benedito Leite",
        "uf": "MA",
        "ibge": 2101806,
        "lat": -7.21037,
        "lng": -44.5577
      },
      {
        "nome": "Bequimão",
        "uf": "MA",
        "ibge": 2101905,
        "lat": -2.44162,
        "lng": -44.7842
      },
      {
        "nome": "Bernardo do Mearim",
        "uf": "MA",
        "ibge": 2101939,
        "lat": -4.62666,
        "lng": -44.7608
      },
      {
        "nome": "Boa Vista do Gurupi",
        "uf": "MA",
        "ibge": 2101970,
        "lat": -1.77614,
        "lng": -46.3002
      },
      {
        "nome": "Bom Jardim",
        "uf": "MA",
        "ibge": 2102002,
        "lat": -3.54129,
        "lng": -45.606
      },
      {
        "nome": "Bom Jesus das Selvas",
        "uf": "MA",
        "ibge": 2102036,
        "lat": -4.47638,
        "lng": -46.8641
      },
      {
        "nome": "Bom Lugar",
        "uf": "MA",
        "ibge": 2102077,
        "lat": -4.37311,
        "lng": -45.0326
      },
      {
        "nome": "Brejo",
        "uf": "MA",
        "ibge": 2102101,
        "lat": -3.67796,
        "lng": -42.7527
      },
      {
        "nome": "Brejo de Areia",
        "uf": "MA",
        "ibge": 2102150,
        "lat": -4.334,
        "lng": -45.581
      },
      {
        "nome": "Buriti",
        "uf": "MA",
        "ibge": 2102200,
        "lat": -3.94169,
        "lng": -42.9179
      },
      {
        "nome": "Buriti Bravo",
        "uf": "MA",
        "ibge": 2102309,
        "lat": -5.83239,
        "lng": -43.8353
      },
      {
        "nome": "Buriticupu",
        "uf": "MA",
        "ibge": 2102325,
        "lat": -4.32375,
        "lng": -46.4409
      },
      {
        "nome": "Buritirana",
        "uf": "MA",
        "ibge": 2102358,
        "lat": -5.59823,
        "lng": -47.0131
      },
      {
        "nome": "Cachoeira Grande",
        "uf": "MA",
        "ibge": 2102374,
        "lat": -2.93074,
        "lng": -44.0528
      },
      {
        "nome": "Cajapió",
        "uf": "MA",
        "ibge": 2102408,
        "lat": -2.87326,
        "lng": -44.6741
      },
      {
        "nome": "Cajari",
        "uf": "MA",
        "ibge": 2102507,
        "lat": -3.32742,
        "lng": -45.0145
      },
      {
        "nome": "Campestre do Maranhão",
        "uf": "MA",
        "ibge": 2102556,
        "lat": -6.17075,
        "lng": -47.3625
      },
      {
        "nome": "Cândido Mendes",
        "uf": "MA",
        "ibge": 2102606,
        "lat": -1.43265,
        "lng": -45.7161
      },
      {
        "nome": "Cantanhede",
        "uf": "MA",
        "ibge": 2102705,
        "lat": -3.63757,
        "lng": -44.383
      },
      {
        "nome": "Capinzal do Norte",
        "uf": "MA",
        "ibge": 2102754,
        "lat": -4.7236,
        "lng": -44.328
      },
      {
        "nome": "Carolina",
        "uf": "MA",
        "ibge": 2102804,
        "lat": -7.33584,
        "lng": -47.4634
      },
      {
        "nome": "Carutapera",
        "uf": "MA",
        "ibge": 2102903,
        "lat": -1.19696,
        "lng": -46.0085
      },
      {
        "nome": "Caxias",
        "uf": "MA",
        "ibge": 2103000,
        "lat": -4.86505,
        "lng": -43.3617
      },
      {
        "nome": "Cedral",
        "uf": "MA",
        "ibge": 2103109,
        "lat": -2.00027,
        "lng": -44.5281
      },
      {
        "nome": "Central do Maranhão",
        "uf": "MA",
        "ibge": 2103125,
        "lat": -2.19831,
        "lng": -44.8254
      },
      {
        "nome": "Centro do Guilherme",
        "uf": "MA",
        "ibge": 2103158,
        "lat": -2.44891,
        "lng": -46.0345
      },
      {
        "nome": "Centro Novo do Maranhão",
        "uf": "MA",
        "ibge": 2103174,
        "lat": -2.12696,
        "lng": -46.1228
      },
      {
        "nome": "Chapadinha",
        "uf": "MA",
        "ibge": 2103208,
        "lat": -3.73875,
        "lng": -43.3538
      },
      {
        "nome": "Cidelândia",
        "uf": "MA",
        "ibge": 2103257,
        "lat": -5.17465,
        "lng": -47.7781
      },
      {
        "nome": "Codó",
        "uf": "MA",
        "ibge": 2103307,
        "lat": -4.45562,
        "lng": -43.8924
      },
      {
        "nome": "Coelho Neto",
        "uf": "MA",
        "ibge": 2103406,
        "lat": -4.25245,
        "lng": -43.0108
      },
      {
        "nome": "Colinas",
        "uf": "MA",
        "ibge": 2103505,
        "lat": -6.03199,
        "lng": -44.2543
      },
      {
        "nome": "Conceição do Lago-Açu",
        "uf": "MA",
        "ibge": 2103554,
        "lat": -3.85142,
        "lng": -44.8895
      },
      {
        "nome": "Coroatá",
        "uf": "MA",
        "ibge": 2103604,
        "lat": -4.13442,
        "lng": -44.1244
      },
      {
        "nome": "Cururupu",
        "uf": "MA",
        "ibge": 2103703,
        "lat": -1.81475,
        "lng": -44.8644
      },
      {
        "nome": "Davinópolis",
        "uf": "MA",
        "ibge": 2103752,
        "lat": -5.54637,
        "lng": -47.4217
      },
      {
        "nome": "Dom Pedro",
        "uf": "MA",
        "ibge": 2103802,
        "lat": -5.03518,
        "lng": -44.4409
      },
      {
        "nome": "Duque Bacelar",
        "uf": "MA",
        "ibge": 2103901,
        "lat": -4.15002,
        "lng": -42.9477
      },
      {
        "nome": "Esperantinópolis",
        "uf": "MA",
        "ibge": 2104008,
        "lat": -4.87938,
        "lng": -44.6926
      },
      {
        "nome": "Estreito",
        "uf": "MA",
        "ibge": 2104057,
        "lat": -6.56077,
        "lng": -47.4431
      },
      {
        "nome": "Feira Nova do Maranhão",
        "uf": "MA",
        "ibge": 2104073,
        "lat": -6.96508,
        "lng": -46.6786
      },
      {
        "nome": "Fernando Falcão",
        "uf": "MA",
        "ibge": 2104081,
        "lat": -6.16207,
        "lng": -44.8979
      },
      {
        "nome": "Formosa da Serra Negra",
        "uf": "MA",
        "ibge": 2104099,
        "lat": -6.44017,
        "lng": -46.1916
      },
      {
        "nome": "Fortaleza dos Nogueiras",
        "uf": "MA",
        "ibge": 2104107,
        "lat": -6.95983,
        "lng": -46.1749
      },
      {
        "nome": "Fortuna",
        "uf": "MA",
        "ibge": 2104206,
        "lat": -5.72792,
        "lng": -44.1565
      },
      {
        "nome": "Godofredo Viana",
        "uf": "MA",
        "ibge": 2104305,
        "lat": -1.40259,
        "lng": -45.7795
      },
      {
        "nome": "Gonçalves Dias",
        "uf": "MA",
        "ibge": 2104404,
        "lat": -5.1475,
        "lng": -44.3013
      },
      {
        "nome": "Governador Archer",
        "uf": "MA",
        "ibge": 2104503,
        "lat": -5.02078,
        "lng": -44.2754
      },
      {
        "nome": "Governador Edison Lobão",
        "uf": "MA",
        "ibge": 2104552,
        "lat": -5.74973,
        "lng": -47.3646
      },
      {
        "nome": "Governador Eugênio Barros",
        "uf": "MA",
        "ibge": 2104602,
        "lat": -5.31897,
        "lng": -44.2469
      },
      {
        "nome": "Governador Luiz Rocha",
        "uf": "MA",
        "ibge": 2104628,
        "lat": -5.47835,
        "lng": -44.0774
      },
      {
        "nome": "Governador Newton Bello",
        "uf": "MA",
        "ibge": 2104651,
        "lat": -3.43245,
        "lng": -45.6619
      },
      {
        "nome": "Governador Nunes Freire",
        "uf": "MA",
        "ibge": 2104677,
        "lat": -2.12899,
        "lng": -45.8777
      },
      {
        "nome": "Graça Aranha",
        "uf": "MA",
        "ibge": 2104701,
        "lat": -5.40547,
        "lng": -44.3358
      },
      {
        "nome": "Grajaú",
        "uf": "MA",
        "ibge": 2104800,
        "lat": -5.81367,
        "lng": -46.1462
      },
      {
        "nome": "Guimarães",
        "uf": "MA",
        "ibge": 2104909,
        "lat": -2.12755,
        "lng": -44.602
      },
      {
        "nome": "Humberto de Campos",
        "uf": "MA",
        "ibge": 2105005,
        "lat": -2.59828,
        "lng": -43.4649
      },
      {
        "nome": "Icatu",
        "uf": "MA",
        "ibge": 2105104,
        "lat": -2.77206,
        "lng": -44.0501
      },
      {
        "nome": "Igarapé do Meio",
        "uf": "MA",
        "ibge": 2105153,
        "lat": -3.65771,
        "lng": -45.2114
      },
      {
        "nome": "Igarapé Grande",
        "uf": "MA",
        "ibge": 2105203,
        "lat": -4.6625,
        "lng": -44.8558
      },
      {
        "nome": "Imperatriz",
        "uf": "MA",
        "ibge": 2105302,
        "lat": -5.51847,
        "lng": -47.4777
      },
      {
        "nome": "Itaipava do Grajaú",
        "uf": "MA",
        "ibge": 2105351,
        "lat": -5.14252,
        "lng": -45.7877
      },
      {
        "nome": "Itapecuru Mirim",
        "uf": "MA",
        "ibge": 2105401,
        "lat": -3.40202,
        "lng": -44.3508
      },
      {
        "nome": "Itinga do Maranhão",
        "uf": "MA",
        "ibge": 2105427,
        "lat": -4.45293,
        "lng": -47.5235
      },
      {
        "nome": "Jatobá",
        "uf": "MA",
        "ibge": 2105450,
        "lat": -5.82282,
        "lng": -44.2153
      },
      {
        "nome": "Jenipapo dos Vieiras",
        "uf": "MA",
        "ibge": 2105476,
        "lat": -5.36237,
        "lng": -45.6356
      },
      {
        "nome": "João Lisboa",
        "uf": "MA",
        "ibge": 2105500,
        "lat": -5.44363,
        "lng": -47.4064
      },
      {
        "nome": "Joselândia",
        "uf": "MA",
        "ibge": 2105609,
        "lat": -4.98611,
        "lng": -44.6958
      },
      {
        "nome": "Junco do Maranhão",
        "uf": "MA",
        "ibge": 2105658,
        "lat": -1.83888,
        "lng": -46.09
      },
      {
        "nome": "Lago da Pedra",
        "uf": "MA",
        "ibge": 2105708,
        "lat": -4.56974,
        "lng": -45.1319
      },
      {
        "nome": "Lago do Junco",
        "uf": "MA",
        "ibge": 2105807,
        "lat": -4.609,
        "lng": -45.049
      },
      {
        "nome": "Lago dos Rodrigues",
        "uf": "MA",
        "ibge": 2105948,
        "lat": -4.61173,
        "lng": -44.9798
      },
      {
        "nome": "Lago Verde",
        "uf": "MA",
        "ibge": 2105906,
        "lat": -3.94661,
        "lng": -44.826
      },
      {
        "nome": "Lagoa do Mato",
        "uf": "MA",
        "ibge": 2105922,
        "lat": -6.05023,
        "lng": -43.5333
      },
      {
        "nome": "Lagoa Grande do Maranhão",
        "uf": "MA",
        "ibge": 2105963,
        "lat": -4.98893,
        "lng": -45.3816
      },
      {
        "nome": "Lajeado Novo",
        "uf": "MA",
        "ibge": 2105989,
        "lat": -6.18539,
        "lng": -47.0293
      },
      {
        "nome": "Lima Campos",
        "uf": "MA",
        "ibge": 2106003,
        "lat": -4.51837,
        "lng": -44.4646
      },
      {
        "nome": "Loreto",
        "uf": "MA",
        "ibge": 2106102,
        "lat": -7.08111,
        "lng": -45.1451
      },
      {
        "nome": "Luís Domingues",
        "uf": "MA",
        "ibge": 2106201,
        "lat": -1.27492,
        "lng": -45.867
      },
      {
        "nome": "Magalhães de Almeida",
        "uf": "MA",
        "ibge": 2106300,
        "lat": -3.39232,
        "lng": -42.2117
      },
      {
        "nome": "Maracaçumé",
        "uf": "MA",
        "ibge": 2106326,
        "lat": -2.04918,
        "lng": -45.9587
      },
      {
        "nome": "Marajá do Sena",
        "uf": "MA",
        "ibge": 2106359,
        "lat": -4.62806,
        "lng": -45.4531
      },
      {
        "nome": "Maranhãozinho",
        "uf": "MA",
        "ibge": 2106375,
        "lat": -2.24078,
        "lng": -45.8507
      },
      {
        "nome": "Mata Roma",
        "uf": "MA",
        "ibge": 2106409,
        "lat": -3.62035,
        "lng": -43.1112
      },
      {
        "nome": "Matinha",
        "uf": "MA",
        "ibge": 2106508,
        "lat": -3.09849,
        "lng": -45.035
      },
      {
        "nome": "Matões",
        "uf": "MA",
        "ibge": 2106607,
        "lat": -5.51359,
        "lng": -43.2018
      },
      {
        "nome": "Matões do Norte",
        "uf": "MA",
        "ibge": 2106631,
        "lat": -3.6244,
        "lng": -44.5468
      },
      {
        "nome": "Milagres do Maranhão",
        "uf": "MA",
        "ibge": 2106672,
        "lat": -3.57443,
        "lng": -42.6131
      },
      {
        "nome": "Mirador",
        "uf": "MA",
        "ibge": 2106706,
        "lat": -6.37454,
        "lng": -44.3683
      },
      {
        "nome": "Miranda do Norte",
        "uf": "MA",
        "ibge": 2106755,
        "lat": -3.56313,
        "lng": -44.5814
      },
      {
        "nome": "Mirinzal",
        "uf": "MA",
        "ibge": 2106805,
        "lat": -2.07094,
        "lng": -44.7787
      },
      {
        "nome": "Monção",
        "uf": "MA",
        "ibge": 2106904,
        "lat": -3.48125,
        "lng": -45.2496
      },
      {
        "nome": "Montes Altos",
        "uf": "MA",
        "ibge": 2107001,
        "lat": -5.83067,
        "lng": -47.0673
      },
      {
        "nome": "Morros",
        "uf": "MA",
        "ibge": 2107100,
        "lat": -2.85379,
        "lng": -44.0357
      },
      {
        "nome": "Nina Rodrigues",
        "uf": "MA",
        "ibge": 2107209,
        "lat": -3.46788,
        "lng": -43.9134
      },
      {
        "nome": "Nova Colinas",
        "uf": "MA",
        "ibge": 2107258,
        "lat": -7.12263,
        "lng": -46.2607
      },
      {
        "nome": "Nova Iorque",
        "uf": "MA",
        "ibge": 2107308,
        "lat": -6.73047,
        "lng": -44.0471
      },
      {
        "nome": "Nova Olinda do Maranhão",
        "uf": "MA",
        "ibge": 2107357,
        "lat": -2.84227,
        "lng": -45.6953
      },
      {
        "nome": "Olho d'Água das Cunhãs",
        "uf": "MA",
        "ibge": 2107407,
        "lat": -4.13417,
        "lng": -45.1163
      },
      {
        "nome": "Olinda Nova do Maranhão",
        "uf": "MA",
        "ibge": 2107456,
        "lat": -2.99295,
        "lng": -44.9897
      },
      {
        "nome": "Paço do Lumiar",
        "uf": "MA",
        "ibge": 2107506,
        "lat": -2.51657,
        "lng": -44.1019
      },
      {
        "nome": "Palmeirândia",
        "uf": "MA",
        "ibge": 2107605,
        "lat": -2.64433,
        "lng": -44.8933
      },
      {
        "nome": "Paraibano",
        "uf": "MA",
        "ibge": 2107704,
        "lat": -6.4264,
        "lng": -43.9792
      },
      {
        "nome": "Parnarama",
        "uf": "MA",
        "ibge": 2107803,
        "lat": -5.67365,
        "lng": -43.1011
      },
      {
        "nome": "Passagem Franca",
        "uf": "MA",
        "ibge": 2107902,
        "lat": -6.17745,
        "lng": -43.7755
      },
      {
        "nome": "Pastos Bons",
        "uf": "MA",
        "ibge": 2108009,
        "lat": -6.60296,
        "lng": -44.0745
      },
      {
        "nome": "Paulino Neves",
        "uf": "MA",
        "ibge": 2108058,
        "lat": -2.72094,
        "lng": -42.5258
      },
      {
        "nome": "Paulo Ramos",
        "uf": "MA",
        "ibge": 2108108,
        "lat": -4.44485,
        "lng": -45.2398
      },
      {
        "nome": "Pedreiras",
        "uf": "MA",
        "ibge": 2108207,
        "lat": -4.56482,
        "lng": -44.6006
      },
      {
        "nome": "Pedro do Rosário",
        "uf": "MA",
        "ibge": 2108256,
        "lat": -2.97272,
        "lng": -45.3493
      },
      {
        "nome": "Penalva",
        "uf": "MA",
        "ibge": 2108306,
        "lat": -3.27674,
        "lng": -45.1768
      },
      {
        "nome": "Peri Mirim",
        "uf": "MA",
        "ibge": 2108405,
        "lat": -2.57676,
        "lng": -44.8504
      },
      {
        "nome": "Peritoró",
        "uf": "MA",
        "ibge": 2108454,
        "lat": -4.37459,
        "lng": -44.3369
      },
      {
        "nome": "Pindaré-Mirim",
        "uf": "MA",
        "ibge": 2108504,
        "lat": -3.60985,
        "lng": -45.342
      },
      {
        "nome": "Pinheiro",
        "uf": "MA",
        "ibge": 2108603,
        "lat": -2.52224,
        "lng": -45.0788
      },
      {
        "nome": "Pio XII",
        "uf": "MA",
        "ibge": 2108702,
        "lat": -3.89315,
        "lng": -45.1759
      },
      {
        "nome": "Pirapemas",
        "uf": "MA",
        "ibge": 2108801,
        "lat": -3.72041,
        "lng": -44.2216
      },
      {
        "nome": "Poção de Pedras",
        "uf": "MA",
        "ibge": 2108900,
        "lat": -4.74626,
        "lng": -44.9432
      },
      {
        "nome": "Porto Franco",
        "uf": "MA",
        "ibge": 2109007,
        "lat": -6.34149,
        "lng": -47.3962
      },
      {
        "nome": "Porto Rico do Maranhão",
        "uf": "MA",
        "ibge": 2109056,
        "lat": -1.85925,
        "lng": -44.5842
      },
      {
        "nome": "Presidente Dutra",
        "uf": "MA",
        "ibge": 2109106,
        "lat": -5.2898,
        "lng": -44.495
      },
      {
        "nome": "Presidente Juscelino",
        "uf": "MA",
        "ibge": 2109205,
        "lat": -2.91872,
        "lng": -44.0715
      },
      {
        "nome": "Presidente Médici",
        "uf": "MA",
        "ibge": 2109239,
        "lat": -2.38991,
        "lng": -45.82
      },
      {
        "nome": "Presidente Sarney",
        "uf": "MA",
        "ibge": 2109270,
        "lat": -2.58799,
        "lng": -45.3595
      },
      {
        "nome": "Presidente Vargas",
        "uf": "MA",
        "ibge": 2109304,
        "lat": -3.40787,
        "lng": -44.0234
      },
      {
        "nome": "Primeira Cruz",
        "uf": "MA",
        "ibge": 2109403,
        "lat": -2.50568,
        "lng": -43.4232
      },
      {
        "nome": "Raposa",
        "uf": "MA",
        "ibge": 2109452,
        "lat": -2.4254,
        "lng": -44.0973
      },
      {
        "nome": "Riachão",
        "uf": "MA",
        "ibge": 2109502,
        "lat": -7.35819,
        "lng": -46.6225
      },
      {
        "nome": "Ribamar Fiquene",
        "uf": "MA",
        "ibge": 2109551,
        "lat": -5.93067,
        "lng": -47.3888
      },
      {
        "nome": "Rosário",
        "uf": "MA",
        "ibge": 2109601,
        "lat": -2.93444,
        "lng": -44.2531
      },
      {
        "nome": "Sambaíba",
        "uf": "MA",
        "ibge": 2109700,
        "lat": -7.13447,
        "lng": -45.3515
      },
      {
        "nome": "Santa Filomena do Maranhão",
        "uf": "MA",
        "ibge": 2109759,
        "lat": -5.49671,
        "lng": -44.5638
      },
      {
        "nome": "Santa Helena",
        "uf": "MA",
        "ibge": 2109809,
        "lat": -2.24426,
        "lng": -45.29
      },
      {
        "nome": "Santa Inês",
        "uf": "MA",
        "ibge": 2109908,
        "lat": -3.65112,
        "lng": -45.3774
      },
      {
        "nome": "Santa Luzia",
        "uf": "MA",
        "ibge": 2110005,
        "lat": -4.06873,
        "lng": -45.69
      },
      {
        "nome": "Santa Luzia do Paruá",
        "uf": "MA",
        "ibge": 2110039,
        "lat": -2.51123,
        "lng": -45.7801
      },
      {
        "nome": "Santa Quitéria do Maranhão",
        "uf": "MA",
        "ibge": 2110104,
        "lat": -3.49308,
        "lng": -42.5688
      },
      {
        "nome": "Santa Rita",
        "uf": "MA",
        "ibge": 2110203,
        "lat": -3.14241,
        "lng": -44.3211
      },
      {
        "nome": "Santana do Maranhão",
        "uf": "MA",
        "ibge": 2110237,
        "lat": -3.109,
        "lng": -42.4064
      },
      {
        "nome": "Santo Amaro do Maranhão",
        "uf": "MA",
        "ibge": 2110278,
        "lat": -2.50068,
        "lng": -43.238
      },
      {
        "nome": "Santo Antônio dos Lopes",
        "uf": "MA",
        "ibge": 2110302,
        "lat": -4.86613,
        "lng": -44.3653
      },
      {
        "nome": "São Benedito do Rio Preto",
        "uf": "MA",
        "ibge": 2110401,
        "lat": -3.33515,
        "lng": -43.5287
      },
      {
        "nome": "São Bento",
        "uf": "MA",
        "ibge": 2110500,
        "lat": -2.69781,
        "lng": -44.8289
      },
      {
        "nome": "São Bernardo",
        "uf": "MA",
        "ibge": 2110609,
        "lat": -3.37223,
        "lng": -42.4191
      },
      {
        "nome": "São Domingos do Azeitão",
        "uf": "MA",
        "ibge": 2110658,
        "lat": -6.81471,
        "lng": -44.6509
      },
      {
        "nome": "São Domingos do Maranhão",
        "uf": "MA",
        "ibge": 2110708,
        "lat": -5.58095,
        "lng": -44.3822
      },
      {
        "nome": "São Félix de Balsas",
        "uf": "MA",
        "ibge": 2110807,
        "lat": -7.07535,
        "lng": -44.8092
      },
      {
        "nome": "São Francisco do Brejão",
        "uf": "MA",
        "ibge": 2110856,
        "lat": -5.12584,
        "lng": -47.389
      },
      {
        "nome": "São Francisco do Maranhão",
        "uf": "MA",
        "ibge": 2110906,
        "lat": -6.25159,
        "lng": -42.8668
      },
      {
        "nome": "São João Batista",
        "uf": "MA",
        "ibge": 2111003,
        "lat": -2.95398,
        "lng": -44.7953
      },
      {
        "nome": "São João do Carú",
        "uf": "MA",
        "ibge": 2111029,
        "lat": -3.5503,
        "lng": -46.2507
      },
      {
        "nome": "São João do Paraíso",
        "uf": "MA",
        "ibge": 2111052,
        "lat": -6.45634,
        "lng": -47.0594
      },
      {
        "nome": "São João do Soter",
        "uf": "MA",
        "ibge": 2111078,
        "lat": -5.10821,
        "lng": -43.8163
      },
      {
        "nome": "São João dos Patos",
        "uf": "MA",
        "ibge": 2111102,
        "lat": -6.4934,
        "lng": -43.7036
      },
      {
        "nome": "São José de Ribamar",
        "uf": "MA",
        "ibge": 2111201,
        "lat": -2.54704,
        "lng": -44.0597
      },
      {
        "nome": "São José dos Basílios",
        "uf": "MA",
        "ibge": 2111250,
        "lat": -5.05493,
        "lng": -44.5809
      },
      {
        "nome": "São Luís Gonzaga do Maranhão",
        "uf": "MA",
        "ibge": 2111409,
        "lat": -4.38541,
        "lng": -44.6654
      },
      {
        "nome": "São Mateus do Maranhão",
        "uf": "MA",
        "ibge": 2111508,
        "lat": -4.03736,
        "lng": -44.4707
      },
      {
        "nome": "São Pedro da Água Branca",
        "uf": "MA",
        "ibge": 2111532,
        "lat": -5.08472,
        "lng": -48.4291
      },
      {
        "nome": "São Pedro dos Crentes",
        "uf": "MA",
        "ibge": 2111573,
        "lat": -6.82389,
        "lng": -46.5319
      },
      {
        "nome": "São Raimundo das Mangabeiras",
        "uf": "MA",
        "ibge": 2111607,
        "lat": -7.02183,
        "lng": -45.4809
      },
      {
        "nome": "São Raimundo do Doca Bezerra",
        "uf": "MA",
        "ibge": 2111631,
        "lat": -5.11053,
        "lng": -45.0696
      },
      {
        "nome": "São Roberto",
        "uf": "MA",
        "ibge": 2111672,
        "lat": -5.0231,
        "lng": -45.001
      },
      {
        "nome": "São Vicente Ferrer",
        "uf": "MA",
        "ibge": 2111706,
        "lat": -2.89487,
        "lng": -44.8681
      },
      {
        "nome": "Satubinha",
        "uf": "MA",
        "ibge": 2111722,
        "lat": -4.04913,
        "lng": -45.2457
      },
      {
        "nome": "Senador Alexandre Costa",
        "uf": "MA",
        "ibge": 2111748,
        "lat": -5.25096,
        "lng": -44.0533
      },
      {
        "nome": "Senador La Rocque",
        "uf": "MA",
        "ibge": 2111763,
        "lat": -5.4461,
        "lng": -47.2959
      },
      {
        "nome": "Serrano do Maranhão",
        "uf": "MA",
        "ibge": 2111789,
        "lat": -1.85229,
        "lng": -45.1207
      },
      {
        "nome": "Sítio Novo",
        "uf": "MA",
        "ibge": 2111805,
        "lat": -5.87601,
        "lng": -46.7033
      },
      {
        "nome": "Sucupira do Norte",
        "uf": "MA",
        "ibge": 2111904,
        "lat": -6.47839,
        "lng": -44.1919
      },
      {
        "nome": "Sucupira do Riachão",
        "uf": "MA",
        "ibge": 2111953,
        "lat": -6.40858,
        "lng": -43.5455
      },
      {
        "nome": "Tasso Fragoso",
        "uf": "MA",
        "ibge": 2112001,
        "lat": -8.4662,
        "lng": -45.7536
      },
      {
        "nome": "Timbiras",
        "uf": "MA",
        "ibge": 2112100,
        "lat": -4.25597,
        "lng": -43.932
      },
      {
        "nome": "Timon",
        "uf": "MA",
        "ibge": 2112209,
        "lat": -5.09769,
        "lng": -42.8329
      },
      {
        "nome": "Trizidela do Vale",
        "uf": "MA",
        "ibge": 2112233,
        "lat": -4.538,
        "lng": -44.628
      },
      {
        "nome": "Tufilândia",
        "uf": "MA",
        "ibge": 2112274,
        "lat": -3.67355,
        "lng": -45.6238
      },
      {
        "nome": "Tuntum",
        "uf": "MA",
        "ibge": 2112308,
        "lat": -5.25476,
        "lng": -44.6444
      },
      {
        "nome": "Turiaçu",
        "uf": "MA",
        "ibge": 2112407,
        "lat": -1.65893,
        "lng": -45.3798
      },
      {
        "nome": "Turilândia",
        "uf": "MA",
        "ibge": 2112456,
        "lat": -2.21638,
        "lng": -45.3044
      },
      {
        "nome": "Tutóia",
        "uf": "MA",
        "ibge": 2112506,
        "lat": -2.76141,
        "lng": -42.2755
      },
      {
        "nome": "Urbano Santos",
        "uf": "MA",
        "ibge": 2112605,
        "lat": -3.20642,
        "lng": -43.3878
      },
      {
        "nome": "Vargem Grande",
        "uf": "MA",
        "ibge": 2112704,
        "lat": -3.53639,
        "lng": -43.917
      },
      {
        "nome": "Viana",
        "uf": "MA",
        "ibge": 2112803,
        "lat": -3.20451,
        "lng": -44.9912
      },
      {
        "nome": "Vila Nova dos Martírios",
        "uf": "MA",
        "ibge": 2112852,
        "lat": -5.18889,
        "lng": -48.1336
      },
      {
        "nome": "Vitória do Mearim",
        "uf": "MA",
        "ibge": 2112902,
        "lat": -3.45125,
        "lng": -44.8643
      },
      {
        "nome": "Vitorino Freire",
        "uf": "MA",
        "ibge": 2113009,
        "lat": -4.28184,
        "lng": -45.2505
      },
      {
        "nome": "Zé Doca",
        "uf": "MA",
        "ibge": 2114007,
        "lat": -3.27014,
        "lng": -45.6553
      }
    ],
    "capital": {
      "nome": "São Luís",
      "uf": "MA",
      "ibge": 2111300,
      "lat": -2.53874,
      "lng": -44.2825
    }
  },
  "PI": {
    "nome": "Piauí",
    "ibge": 22,
    "cidades": [
      {
        "nome": "Acauã",
        "uf": "PI",
        "ibge": 2200053,
        "lat": -8.21954,
        "lng": -41.0831
      },
      {
        "nome": "Agricolândia",
        "uf": "PI",
        "ibge": 2200103,
        "lat": -5.79676,
        "lng": -42.6664
      },
      {
        "nome": "Água Branca",
        "uf": "PI",
        "ibge": 2200202,
        "lat": -5.88856,
        "lng": -42.637
      },
      {
        "nome": "Alagoinha do Piauí",
        "uf": "PI",
        "ibge": 2200251,
        "lat": -7.00039,
        "lng": -40.9282
      },
      {
        "nome": "Alegrete do Piauí",
        "uf": "PI",
        "ibge": 2200277,
        "lat": -7.24196,
        "lng": -40.8566
      },
      {
        "nome": "Alto Longá",
        "uf": "PI",
        "ibge": 2200301,
        "lat": -5.25634,
        "lng": -42.2096
      },
      {
        "nome": "Altos",
        "uf": "PI",
        "ibge": 2200400,
        "lat": -5.03888,
        "lng": -42.4612
      },
      {
        "nome": "Alvorada do Gurguéia",
        "uf": "PI",
        "ibge": 2200459,
        "lat": -8.42418,
        "lng": -43.777
      },
      {
        "nome": "Amarante",
        "uf": "PI",
        "ibge": 2200509,
        "lat": -6.24304,
        "lng": -42.8433
      },
      {
        "nome": "Angical do Piauí",
        "uf": "PI",
        "ibge": 2200608,
        "lat": -6.08786,
        "lng": -42.74
      },
      {
        "nome": "Anísio de Abreu",
        "uf": "PI",
        "ibge": 2200707,
        "lat": -9.18564,
        "lng": -43.0494
      },
      {
        "nome": "Antônio Almeida",
        "uf": "PI",
        "ibge": 2200806,
        "lat": -7.21276,
        "lng": -44.1889
      },
      {
        "nome": "Aroazes",
        "uf": "PI",
        "ibge": 2200905,
        "lat": -6.11022,
        "lng": -41.7822
      },
      {
        "nome": "Aroeiras do Itaim",
        "uf": "PI",
        "ibge": 2200954,
        "lat": -7.24502,
        "lng": -41.5325
      },
      {
        "nome": "Arraial",
        "uf": "PI",
        "ibge": 2201002,
        "lat": -6.65075,
        "lng": -42.5418
      },
      {
        "nome": "Assunção do Piauí",
        "uf": "PI",
        "ibge": 2201051,
        "lat": -5.865,
        "lng": -41.0389
      },
      {
        "nome": "Avelino Lopes",
        "uf": "PI",
        "ibge": 2201101,
        "lat": -10.1345,
        "lng": -43.9563
      },
      {
        "nome": "Baixa Grande do Ribeiro",
        "uf": "PI",
        "ibge": 2201150,
        "lat": -7.84903,
        "lng": -45.219
      },
      {
        "nome": "Barra D'Alcântara",
        "uf": "PI",
        "ibge": 2201176,
        "lat": -6.51645,
        "lng": -42.1146
      },
      {
        "nome": "Barras",
        "uf": "PI",
        "ibge": 2201200,
        "lat": -4.24468,
        "lng": -42.2922
      },
      {
        "nome": "Barreiras do Piauí",
        "uf": "PI",
        "ibge": 2201309,
        "lat": -9.9296,
        "lng": -45.4702
      },
      {
        "nome": "Barro Duro",
        "uf": "PI",
        "ibge": 2201408,
        "lat": -5.81673,
        "lng": -42.5147
      },
      {
        "nome": "Batalha",
        "uf": "PI",
        "ibge": 2201507,
        "lat": -4.0223,
        "lng": -42.0787
      },
      {
        "nome": "Bela Vista do Piauí",
        "uf": "PI",
        "ibge": 2201556,
        "lat": -7.98809,
        "lng": -41.8675
      },
      {
        "nome": "Belém do Piauí",
        "uf": "PI",
        "ibge": 2201572,
        "lat": -7.36652,
        "lng": -40.9688
      },
      {
        "nome": "Beneditinos",
        "uf": "PI",
        "ibge": 2201606,
        "lat": -5.45676,
        "lng": -42.3638
      },
      {
        "nome": "Bertolínia",
        "uf": "PI",
        "ibge": 2201705,
        "lat": -7.63338,
        "lng": -43.9498
      },
      {
        "nome": "Betânia do Piauí",
        "uf": "PI",
        "ibge": 2201739,
        "lat": -8.14376,
        "lng": -40.7989
      },
      {
        "nome": "Boa Hora",
        "uf": "PI",
        "ibge": 2201770,
        "lat": -4.41404,
        "lng": -42.1357
      },
      {
        "nome": "Bocaina",
        "uf": "PI",
        "ibge": 2201804,
        "lat": -6.94124,
        "lng": -41.3168
      },
      {
        "nome": "Bom Jesus",
        "uf": "PI",
        "ibge": 2201903,
        "lat": -9.07124,
        "lng": -44.359
      },
      {
        "nome": "Bom Princípio do Piauí",
        "uf": "PI",
        "ibge": 2201919,
        "lat": -3.19631,
        "lng": -41.6403
      },
      {
        "nome": "Bonfim do Piauí",
        "uf": "PI",
        "ibge": 2201929,
        "lat": -9.1605,
        "lng": -42.8865
      },
      {
        "nome": "Boqueirão do Piauí",
        "uf": "PI",
        "ibge": 2201945,
        "lat": -4.48181,
        "lng": -42.1212
      },
      {
        "nome": "Brasileira",
        "uf": "PI",
        "ibge": 2201960,
        "lat": -4.1337,
        "lng": -41.7859
      },
      {
        "nome": "Brejo do Piauí",
        "uf": "PI",
        "ibge": 2201988,
        "lat": -8.20314,
        "lng": -42.8229
      },
      {
        "nome": "Buriti dos Lopes",
        "uf": "PI",
        "ibge": 2202000,
        "lat": -3.18259,
        "lng": -41.8695
      },
      {
        "nome": "Buriti dos Montes",
        "uf": "PI",
        "ibge": 2202026,
        "lat": -5.30584,
        "lng": -41.0933
      },
      {
        "nome": "Cabeceiras do Piauí",
        "uf": "PI",
        "ibge": 2202059,
        "lat": -4.4773,
        "lng": -42.3069
      },
      {
        "nome": "Cajazeiras do Piauí",
        "uf": "PI",
        "ibge": 2202075,
        "lat": -6.79667,
        "lng": -42.3903
      },
      {
        "nome": "Cajueiro da Praia",
        "uf": "PI",
        "ibge": 2202083,
        "lat": -2.93111,
        "lng": -41.3408
      },
      {
        "nome": "Caldeirão Grande do Piauí",
        "uf": "PI",
        "ibge": 2202091,
        "lat": -7.3314,
        "lng": -40.6366
      },
      {
        "nome": "Campinas do Piauí",
        "uf": "PI",
        "ibge": 2202109,
        "lat": -7.6593,
        "lng": -41.8775
      },
      {
        "nome": "Campo Alegre do Fidalgo",
        "uf": "PI",
        "ibge": 2202117,
        "lat": -8.38236,
        "lng": -41.8344
      },
      {
        "nome": "Campo Grande do Piauí",
        "uf": "PI",
        "ibge": 2202133,
        "lat": -7.12827,
        "lng": -41.0315
      },
      {
        "nome": "Campo Largo do Piauí",
        "uf": "PI",
        "ibge": 2202174,
        "lat": -3.80441,
        "lng": -42.64
      },
      {
        "nome": "Campo Maior",
        "uf": "PI",
        "ibge": 2202208,
        "lat": -4.8217,
        "lng": -42.1641
      },
      {
        "nome": "Canavieira",
        "uf": "PI",
        "ibge": 2202251,
        "lat": -7.68821,
        "lng": -43.7233
      },
      {
        "nome": "Canto do Buriti",
        "uf": "PI",
        "ibge": 2202307,
        "lat": -8.1111,
        "lng": -42.9517
      },
      {
        "nome": "Capitão de Campos",
        "uf": "PI",
        "ibge": 2202406,
        "lat": -4.457,
        "lng": -41.944
      },
      {
        "nome": "Capitão Gervásio Oliveira",
        "uf": "PI",
        "ibge": 2202455,
        "lat": -8.49655,
        "lng": -41.814
      },
      {
        "nome": "Caracol",
        "uf": "PI",
        "ibge": 2202505,
        "lat": -9.27933,
        "lng": -43.329
      },
      {
        "nome": "Caraúbas do Piauí",
        "uf": "PI",
        "ibge": 2202539,
        "lat": -3.47525,
        "lng": -41.8425
      },
      {
        "nome": "Caridade do Piauí",
        "uf": "PI",
        "ibge": 2202554,
        "lat": -7.73435,
        "lng": -40.9848
      },
      {
        "nome": "Castelo do Piauí",
        "uf": "PI",
        "ibge": 2202604,
        "lat": -5.31869,
        "lng": -41.5499
      },
      {
        "nome": "Caxingó",
        "uf": "PI",
        "ibge": 2202653,
        "lat": -3.41904,
        "lng": -41.8955
      },
      {
        "nome": "Cocal",
        "uf": "PI",
        "ibge": 2202703,
        "lat": -3.47279,
        "lng": -41.5546
      },
      {
        "nome": "Cocal de Telha",
        "uf": "PI",
        "ibge": 2202711,
        "lat": -4.5571,
        "lng": -41.9587
      },
      {
        "nome": "Cocal dos Alves",
        "uf": "PI",
        "ibge": 2202729,
        "lat": -3.62047,
        "lng": -41.4402
      },
      {
        "nome": "Coivaras",
        "uf": "PI",
        "ibge": 2202737,
        "lat": -5.09224,
        "lng": -42.208
      },
      {
        "nome": "Colônia do Gurguéia",
        "uf": "PI",
        "ibge": 2202752,
        "lat": -8.1837,
        "lng": -43.794
      },
      {
        "nome": "Colônia do Piauí",
        "uf": "PI",
        "ibge": 2202778,
        "lat": -7.22651,
        "lng": -42.1756
      },
      {
        "nome": "Conceição do Canindé",
        "uf": "PI",
        "ibge": 2202802,
        "lat": -7.87638,
        "lng": -41.5942
      },
      {
        "nome": "Coronel José Dias",
        "uf": "PI",
        "ibge": 2202851,
        "lat": -8.81397,
        "lng": -42.5232
      },
      {
        "nome": "Corrente",
        "uf": "PI",
        "ibge": 2202901,
        "lat": -10.4333,
        "lng": -45.1633
      },
      {
        "nome": "Cristalândia do Piauí",
        "uf": "PI",
        "ibge": 2203008,
        "lat": -10.6443,
        "lng": -45.1893
      },
      {
        "nome": "Cristino Castro",
        "uf": "PI",
        "ibge": 2203107,
        "lat": -8.82273,
        "lng": -44.223
      },
      {
        "nome": "Curimatá",
        "uf": "PI",
        "ibge": 2203206,
        "lat": -10.0326,
        "lng": -44.3002
      },
      {
        "nome": "Currais",
        "uf": "PI",
        "ibge": 2203230,
        "lat": -9.01175,
        "lng": -44.4062
      },
      {
        "nome": "Curral Novo do Piauí",
        "uf": "PI",
        "ibge": 2203271,
        "lat": -7.8313,
        "lng": -40.8957
      },
      {
        "nome": "Curralinhos",
        "uf": "PI",
        "ibge": 2203255,
        "lat": -5.60825,
        "lng": -42.8376
      },
      {
        "nome": "Demerval Lobão",
        "uf": "PI",
        "ibge": 2203305,
        "lat": -5.35875,
        "lng": -42.6776
      },
      {
        "nome": "Dirceu Arcoverde",
        "uf": "PI",
        "ibge": 2203354,
        "lat": -9.33939,
        "lng": -42.4348
      },
      {
        "nome": "Dom Expedito Lopes",
        "uf": "PI",
        "ibge": 2203404,
        "lat": -6.95332,
        "lng": -41.6396
      },
      {
        "nome": "Dom Inocêncio",
        "uf": "PI",
        "ibge": 2203453,
        "lat": -9.00516,
        "lng": -41.9697
      },
      {
        "nome": "Domingos Mourão",
        "uf": "PI",
        "ibge": 2203420,
        "lat": -4.2495,
        "lng": -41.2683
      },
      {
        "nome": "Elesbão Veloso",
        "uf": "PI",
        "ibge": 2203503,
        "lat": -6.19947,
        "lng": -42.1355
      },
      {
        "nome": "Eliseu Martins",
        "uf": "PI",
        "ibge": 2203602,
        "lat": -8.09629,
        "lng": -43.6705
      },
      {
        "nome": "Esperantina",
        "uf": "PI",
        "ibge": 2203701,
        "lat": -3.88863,
        "lng": -42.2324
      },
      {
        "nome": "Fartura do Piauí",
        "uf": "PI",
        "ibge": 2203750,
        "lat": -9.48342,
        "lng": -42.7912
      },
      {
        "nome": "Flores do Piauí",
        "uf": "PI",
        "ibge": 2203800,
        "lat": -7.78793,
        "lng": -42.918
      },
      {
        "nome": "Floresta do Piauí",
        "uf": "PI",
        "ibge": 2203859,
        "lat": -7.46682,
        "lng": -41.7883
      },
      {
        "nome": "Floriano",
        "uf": "PI",
        "ibge": 2203909,
        "lat": -6.77182,
        "lng": -43.0241
      },
      {
        "nome": "Francinópolis",
        "uf": "PI",
        "ibge": 2204006,
        "lat": -6.39334,
        "lng": -42.2591
      },
      {
        "nome": "Francisco Ayres",
        "uf": "PI",
        "ibge": 2204105,
        "lat": -6.62606,
        "lng": -42.6881
      },
      {
        "nome": "Francisco Macedo",
        "uf": "PI",
        "ibge": 2204154,
        "lat": -7.331,
        "lng": -40.788
      },
      {
        "nome": "Francisco Santos",
        "uf": "PI",
        "ibge": 2204204,
        "lat": -6.99491,
        "lng": -41.1288
      },
      {
        "nome": "Fronteiras",
        "uf": "PI",
        "ibge": 2204303,
        "lat": -7.08173,
        "lng": -40.6146
      },
      {
        "nome": "Geminiano",
        "uf": "PI",
        "ibge": 2204352,
        "lat": -7.15476,
        "lng": -41.3409
      },
      {
        "nome": "Gilbués",
        "uf": "PI",
        "ibge": 2204402,
        "lat": -9.83001,
        "lng": -45.3423
      },
      {
        "nome": "Guadalupe",
        "uf": "PI",
        "ibge": 2204501,
        "lat": -6.78285,
        "lng": -43.5594
      },
      {
        "nome": "Guaribas",
        "uf": "PI",
        "ibge": 2204550,
        "lat": -9.38647,
        "lng": -43.6943
      },
      {
        "nome": "Hugo Napoleão",
        "uf": "PI",
        "ibge": 2204600,
        "lat": -5.9886,
        "lng": -42.5598
      },
      {
        "nome": "Ilha Grande",
        "uf": "PI",
        "ibge": 2204659,
        "lat": -2.85774,
        "lng": -41.8186
      },
      {
        "nome": "Inhuma",
        "uf": "PI",
        "ibge": 2204709,
        "lat": -6.665,
        "lng": -41.7041
      },
      {
        "nome": "Ipiranga do Piauí",
        "uf": "PI",
        "ibge": 2204808,
        "lat": -6.82421,
        "lng": -41.7381
      },
      {
        "nome": "Isaías Coelho",
        "uf": "PI",
        "ibge": 2204907,
        "lat": -7.73597,
        "lng": -41.6735
      },
      {
        "nome": "Itainópolis",
        "uf": "PI",
        "ibge": 2205003,
        "lat": -7.44336,
        "lng": -41.4687
      },
      {
        "nome": "Itaueira",
        "uf": "PI",
        "ibge": 2205102,
        "lat": -7.59989,
        "lng": -43.0249
      },
      {
        "nome": "Jacobina do Piauí",
        "uf": "PI",
        "ibge": 2205151,
        "lat": -7.93063,
        "lng": -41.2075
      },
      {
        "nome": "Jaicós",
        "uf": "PI",
        "ibge": 2205201,
        "lat": -7.36229,
        "lng": -41.1371
      },
      {
        "nome": "Jardim do Mulato",
        "uf": "PI",
        "ibge": 2205250,
        "lat": -6.099,
        "lng": -42.63
      },
      {
        "nome": "Jatobá do Piauí",
        "uf": "PI",
        "ibge": 2205276,
        "lat": -4.77025,
        "lng": -41.817
      },
      {
        "nome": "Jerumenha",
        "uf": "PI",
        "ibge": 2205300,
        "lat": -7.09128,
        "lng": -43.5033
      },
      {
        "nome": "João Costa",
        "uf": "PI",
        "ibge": 2205359,
        "lat": -8.50736,
        "lng": -42.4264
      },
      {
        "nome": "Joaquim Pires",
        "uf": "PI",
        "ibge": 2205409,
        "lat": -3.50164,
        "lng": -42.1865
      },
      {
        "nome": "Joca Marques",
        "uf": "PI",
        "ibge": 2205458,
        "lat": -3.4804,
        "lng": -42.4255
      },
      {
        "nome": "José de Freitas",
        "uf": "PI",
        "ibge": 2205508,
        "lat": -4.75146,
        "lng": -42.5746
      },
      {
        "nome": "Juazeiro do Piauí",
        "uf": "PI",
        "ibge": 2205516,
        "lat": -5.17459,
        "lng": -41.6976
      },
      {
        "nome": "Júlio Borges",
        "uf": "PI",
        "ibge": 2205524,
        "lat": -10.3225,
        "lng": -44.2381
      },
      {
        "nome": "Jurema",
        "uf": "PI",
        "ibge": 2205532,
        "lat": -9.21992,
        "lng": -43.1337
      },
      {
        "nome": "Lagoa Alegre",
        "uf": "PI",
        "ibge": 2205557,
        "lat": -4.51539,
        "lng": -42.6309
      },
      {
        "nome": "Lagoa de São Francisco",
        "uf": "PI",
        "ibge": 2205573,
        "lat": -4.38505,
        "lng": -41.5969
      },
      {
        "nome": "Lagoa do Barro do Piauí",
        "uf": "PI",
        "ibge": 2205565,
        "lat": -8.47673,
        "lng": -41.5342
      },
      {
        "nome": "Lagoa do Piauí",
        "uf": "PI",
        "ibge": 2205581,
        "lat": -5.41864,
        "lng": -42.6437
      },
      {
        "nome": "Lagoa do Sítio",
        "uf": "PI",
        "ibge": 2205599,
        "lat": -6.50766,
        "lng": -41.5653
      },
      {
        "nome": "Lagoinha do Piauí",
        "uf": "PI",
        "ibge": 2205540,
        "lat": -5.83074,
        "lng": -42.6223
      },
      {
        "nome": "Landri Sales",
        "uf": "PI",
        "ibge": 2205607,
        "lat": -7.25922,
        "lng": -43.9364
      },
      {
        "nome": "Luís Correia",
        "uf": "PI",
        "ibge": 2205706,
        "lat": -2.88438,
        "lng": -41.6641
      },
      {
        "nome": "Luzilândia",
        "uf": "PI",
        "ibge": 2205805,
        "lat": -3.4683,
        "lng": -42.3718
      },
      {
        "nome": "Madeiro",
        "uf": "PI",
        "ibge": 2205854,
        "lat": -3.48624,
        "lng": -42.4981
      },
      {
        "nome": "Manoel Emídio",
        "uf": "PI",
        "ibge": 2205904,
        "lat": -8.01234,
        "lng": -43.8755
      },
      {
        "nome": "Marcolândia",
        "uf": "PI",
        "ibge": 2205953,
        "lat": -7.44169,
        "lng": -40.6602
      },
      {
        "nome": "Marcos Parente",
        "uf": "PI",
        "ibge": 2206001,
        "lat": -7.11565,
        "lng": -43.8926
      },
      {
        "nome": "Massapê do Piauí",
        "uf": "PI",
        "ibge": 2206050,
        "lat": -7.47469,
        "lng": -41.1103
      },
      {
        "nome": "Matias Olímpio",
        "uf": "PI",
        "ibge": 2206100,
        "lat": -3.71492,
        "lng": -42.5507
      },
      {
        "nome": "Miguel Alves",
        "uf": "PI",
        "ibge": 2206209,
        "lat": -4.16857,
        "lng": -42.8963
      },
      {
        "nome": "Miguel Leão",
        "uf": "PI",
        "ibge": 2206308,
        "lat": -5.68077,
        "lng": -42.7436
      },
      {
        "nome": "Milton Brandão",
        "uf": "PI",
        "ibge": 2206357,
        "lat": -4.68295,
        "lng": -41.4173
      },
      {
        "nome": "Monsenhor Gil",
        "uf": "PI",
        "ibge": 2206407,
        "lat": -5.562,
        "lng": -42.6075
      },
      {
        "nome": "Monsenhor Hipólito",
        "uf": "PI",
        "ibge": 2206506,
        "lat": -6.99275,
        "lng": -41.026
      },
      {
        "nome": "Monte Alegre do Piauí",
        "uf": "PI",
        "ibge": 2206605,
        "lat": -9.75364,
        "lng": -45.3037
      },
      {
        "nome": "Morro Cabeça no Tempo",
        "uf": "PI",
        "ibge": 2206654,
        "lat": -9.71891,
        "lng": -43.9072
      },
      {
        "nome": "Morro do Chapéu do Piauí",
        "uf": "PI",
        "ibge": 2206670,
        "lat": -3.73337,
        "lng": -42.3024
      },
      {
        "nome": "Murici dos Portelas",
        "uf": "PI",
        "ibge": 2206696,
        "lat": -3.319,
        "lng": -42.094
      },
      {
        "nome": "Nazaré do Piauí",
        "uf": "PI",
        "ibge": 2206704,
        "lat": -6.97023,
        "lng": -42.6773
      },
      {
        "nome": "Nazária",
        "uf": "PI",
        "ibge": 2206720,
        "lat": -5.35128,
        "lng": -42.8153
      },
      {
        "nome": "Nossa Senhora de Nazaré",
        "uf": "PI",
        "ibge": 2206753,
        "lat": -4.63019,
        "lng": -42.173
      },
      {
        "nome": "Nossa Senhora dos Remédios",
        "uf": "PI",
        "ibge": 2206803,
        "lat": -3.97574,
        "lng": -42.6184
      },
      {
        "nome": "Nova Santa Rita",
        "uf": "PI",
        "ibge": 2207959,
        "lat": -8.09707,
        "lng": -42.0471
      },
      {
        "nome": "Novo Oriente do Piauí",
        "uf": "PI",
        "ibge": 2206902,
        "lat": -6.44901,
        "lng": -41.9261
      },
      {
        "nome": "Novo Santo Antônio",
        "uf": "PI",
        "ibge": 2206951,
        "lat": -5.28749,
        "lng": -41.9325
      },
      {
        "nome": "Oeiras",
        "uf": "PI",
        "ibge": 2207009,
        "lat": -7.01915,
        "lng": -42.1283
      },
      {
        "nome": "Olho D'Água do Piauí",
        "uf": "PI",
        "ibge": 2207108,
        "lat": -5.84125,
        "lng": -42.5594
      },
      {
        "nome": "Padre Marcos",
        "uf": "PI",
        "ibge": 2207207,
        "lat": -7.35101,
        "lng": -40.8997
      },
      {
        "nome": "Paes Landim",
        "uf": "PI",
        "ibge": 2207306,
        "lat": -7.77375,
        "lng": -42.2474
      },
      {
        "nome": "Pajeú do Piauí",
        "uf": "PI",
        "ibge": 2207355,
        "lat": -7.85508,
        "lng": -42.8248
      },
      {
        "nome": "Palmeira do Piauí",
        "uf": "PI",
        "ibge": 2207405,
        "lat": -8.73076,
        "lng": -44.2466
      },
      {
        "nome": "Palmeirais",
        "uf": "PI",
        "ibge": 2207504,
        "lat": -5.97086,
        "lng": -43.056
      },
      {
        "nome": "Paquetá",
        "uf": "PI",
        "ibge": 2207553,
        "lat": -7.10303,
        "lng": -41.7
      },
      {
        "nome": "Parnaguá",
        "uf": "PI",
        "ibge": 2207603,
        "lat": -10.2166,
        "lng": -44.63
      },
      {
        "nome": "Parnaíba",
        "uf": "PI",
        "ibge": 2207702,
        "lat": -2.90585,
        "lng": -41.7754
      },
      {
        "nome": "Passagem Franca do Piauí",
        "uf": "PI",
        "ibge": 2207751,
        "lat": -5.86036,
        "lng": -42.4436
      },
      {
        "nome": "Patos do Piauí",
        "uf": "PI",
        "ibge": 2207777,
        "lat": -7.67231,
        "lng": -41.2408
      },
      {
        "nome": "Pau D'Arco do Piauí",
        "uf": "PI",
        "ibge": 2207793,
        "lat": -5.26072,
        "lng": -42.3908
      },
      {
        "nome": "Paulistana",
        "uf": "PI",
        "ibge": 2207801,
        "lat": -8.13436,
        "lng": -41.1431
      },
      {
        "nome": "Pavussu",
        "uf": "PI",
        "ibge": 2207850,
        "lat": -7.96059,
        "lng": -43.2284
      },
      {
        "nome": "Pedro II",
        "uf": "PI",
        "ibge": 2207900,
        "lat": -4.42585,
        "lng": -41.4482
      },
      {
        "nome": "Pedro Laurentino",
        "uf": "PI",
        "ibge": 2207934,
        "lat": -8.06807,
        "lng": -42.2847
      },
      {
        "nome": "Picos",
        "uf": "PI",
        "ibge": 2208007,
        "lat": -7.07721,
        "lng": -41.467
      },
      {
        "nome": "Pimenteiras",
        "uf": "PI",
        "ibge": 2208106,
        "lat": -6.23839,
        "lng": -41.4113
      },
      {
        "nome": "Pio IX",
        "uf": "PI",
        "ibge": 2208205,
        "lat": -6.83002,
        "lng": -40.6083
      },
      {
        "nome": "Piracuruca",
        "uf": "PI",
        "ibge": 2208304,
        "lat": -3.93335,
        "lng": -41.7088
      },
      {
        "nome": "Piripiri",
        "uf": "PI",
        "ibge": 2208403,
        "lat": -4.27157,
        "lng": -41.7716
      },
      {
        "nome": "Porto",
        "uf": "PI",
        "ibge": 2208502,
        "lat": -3.88815,
        "lng": -42.6998
      },
      {
        "nome": "Porto Alegre do Piauí",
        "uf": "PI",
        "ibge": 2208551,
        "lat": -6.96423,
        "lng": -44.1837
      },
      {
        "nome": "Prata do Piauí",
        "uf": "PI",
        "ibge": 2208601,
        "lat": -5.67265,
        "lng": -42.2046
      },
      {
        "nome": "Queimada Nova",
        "uf": "PI",
        "ibge": 2208650,
        "lat": -8.57064,
        "lng": -41.4106
      },
      {
        "nome": "Redenção do Gurguéia",
        "uf": "PI",
        "ibge": 2208700,
        "lat": -9.47937,
        "lng": -44.5811
      },
      {
        "nome": "Regeneração",
        "uf": "PI",
        "ibge": 2208809,
        "lat": -6.23115,
        "lng": -42.6842
      },
      {
        "nome": "Riacho Frio",
        "uf": "PI",
        "ibge": 2208858,
        "lat": -10.1244,
        "lng": -44.9503
      },
      {
        "nome": "Ribeira do Piauí",
        "uf": "PI",
        "ibge": 2208874,
        "lat": -7.69028,
        "lng": -42.7128
      },
      {
        "nome": "Ribeiro Gonçalves",
        "uf": "PI",
        "ibge": 2208908,
        "lat": -7.55651,
        "lng": -45.2447
      },
      {
        "nome": "Rio Grande do Piauí",
        "uf": "PI",
        "ibge": 2209005,
        "lat": -7.78029,
        "lng": -43.1369
      },
      {
        "nome": "Santa Cruz do Piauí",
        "uf": "PI",
        "ibge": 2209104,
        "lat": -7.1785,
        "lng": -41.7609
      },
      {
        "nome": "Santa Cruz dos Milagres",
        "uf": "PI",
        "ibge": 2209153,
        "lat": -5.80581,
        "lng": -41.9506
      },
      {
        "nome": "Santa Filomena",
        "uf": "PI",
        "ibge": 2209203,
        "lat": -9.11228,
        "lng": -45.9116
      },
      {
        "nome": "Santa Luz",
        "uf": "PI",
        "ibge": 2209302,
        "lat": -8.9488,
        "lng": -44.1296
      },
      {
        "nome": "Santa Rosa do Piauí",
        "uf": "PI",
        "ibge": 2209377,
        "lat": -6.79581,
        "lng": -42.2814
      },
      {
        "nome": "Santana do Piauí",
        "uf": "PI",
        "ibge": 2209351,
        "lat": -6.94696,
        "lng": -41.5178
      },
      {
        "nome": "Santo Antônio de Lisboa",
        "uf": "PI",
        "ibge": 2209401,
        "lat": -6.98676,
        "lng": -41.2252
      },
      {
        "nome": "Santo Antônio dos Milagres",
        "uf": "PI",
        "ibge": 2209450,
        "lat": -6.04647,
        "lng": -42.7123
      },
      {
        "nome": "Santo Inácio do Piauí",
        "uf": "PI",
        "ibge": 2209500,
        "lat": -7.42072,
        "lng": -41.9063
      },
      {
        "nome": "São Braz do Piauí",
        "uf": "PI",
        "ibge": 2209559,
        "lat": -9.05797,
        "lng": -43.0076
      },
      {
        "nome": "São Félix do Piauí",
        "uf": "PI",
        "ibge": 2209609,
        "lat": -5.93485,
        "lng": -42.1172
      },
      {
        "nome": "São Francisco de Assis do Piauí",
        "uf": "PI",
        "ibge": 2209658,
        "lat": -8.23599,
        "lng": -41.6873
      },
      {
        "nome": "São Francisco do Piauí",
        "uf": "PI",
        "ibge": 2209708,
        "lat": -7.2463,
        "lng": -42.541
      },
      {
        "nome": "São Gonçalo do Gurguéia",
        "uf": "PI",
        "ibge": 2209757,
        "lat": -10.0319,
        "lng": -45.3092
      },
      {
        "nome": "São Gonçalo do Piauí",
        "uf": "PI",
        "ibge": 2209807,
        "lat": -5.99393,
        "lng": -42.7095
      },
      {
        "nome": "São João da Canabrava",
        "uf": "PI",
        "ibge": 2209856,
        "lat": -6.81203,
        "lng": -41.3415
      },
      {
        "nome": "São João da Fronteira",
        "uf": "PI",
        "ibge": 2209872,
        "lat": -3.95497,
        "lng": -41.2569
      },
      {
        "nome": "São João da Serra",
        "uf": "PI",
        "ibge": 2209906,
        "lat": -5.51081,
        "lng": -41.8923
      },
      {
        "nome": "São João da Varjota",
        "uf": "PI",
        "ibge": 2209955,
        "lat": -6.94082,
        "lng": -41.8889
      },
      {
        "nome": "São João do Arraial",
        "uf": "PI",
        "ibge": 2209971,
        "lat": -3.8186,
        "lng": -42.4459
      },
      {
        "nome": "São João do Piauí",
        "uf": "PI",
        "ibge": 2210003,
        "lat": -8.35466,
        "lng": -42.2559
      },
      {
        "nome": "São José do Divino",
        "uf": "PI",
        "ibge": 2210052,
        "lat": -3.81411,
        "lng": -41.8308
      },
      {
        "nome": "São José do Peixe",
        "uf": "PI",
        "ibge": 2210102,
        "lat": -7.48554,
        "lng": -42.5672
      },
      {
        "nome": "São José do Piauí",
        "uf": "PI",
        "ibge": 2210201,
        "lat": -6.87194,
        "lng": -41.4731
      },
      {
        "nome": "São Julião",
        "uf": "PI",
        "ibge": 2210300,
        "lat": -7.08391,
        "lng": -40.8246
      },
      {
        "nome": "São Lourenço do Piauí",
        "uf": "PI",
        "ibge": 2210359,
        "lat": -9.16463,
        "lng": -42.5496
      },
      {
        "nome": "São Luis do Piauí",
        "uf": "PI",
        "ibge": 2210375,
        "lat": -6.81936,
        "lng": -41.3175
      },
      {
        "nome": "São Miguel da Baixa Grande",
        "uf": "PI",
        "ibge": 2210383,
        "lat": -5.85646,
        "lng": -42.1934
      },
      {
        "nome": "São Miguel do Fidalgo",
        "uf": "PI",
        "ibge": 2210391,
        "lat": -7.59713,
        "lng": -42.3676
      },
      {
        "nome": "São Miguel do Tapuio",
        "uf": "PI",
        "ibge": 2210409,
        "lat": -5.49729,
        "lng": -41.3165
      },
      {
        "nome": "São Pedro do Piauí",
        "uf": "PI",
        "ibge": 2210508,
        "lat": -5.92078,
        "lng": -42.7192
      },
      {
        "nome": "São Raimundo Nonato",
        "uf": "PI",
        "ibge": 2210607,
        "lat": -9.01241,
        "lng": -42.6987
      },
      {
        "nome": "Sebastião Barros",
        "uf": "PI",
        "ibge": 2210623,
        "lat": -10.817,
        "lng": -44.8337
      },
      {
        "nome": "Sebastião Leal",
        "uf": "PI",
        "ibge": 2210631,
        "lat": -7.56803,
        "lng": -44.06
      },
      {
        "nome": "Sigefredo Pacheco",
        "uf": "PI",
        "ibge": 2210656,
        "lat": -4.91665,
        "lng": -41.7311
      },
      {
        "nome": "Simões",
        "uf": "PI",
        "ibge": 2210706,
        "lat": -7.59109,
        "lng": -40.8137
      },
      {
        "nome": "Simplício Mendes",
        "uf": "PI",
        "ibge": 2210805,
        "lat": -7.85294,
        "lng": -41.9075
      },
      {
        "nome": "Socorro do Piauí",
        "uf": "PI",
        "ibge": 2210904,
        "lat": -7.86773,
        "lng": -42.4922
      },
      {
        "nome": "Sussuapara",
        "uf": "PI",
        "ibge": 2210938,
        "lat": -7.03687,
        "lng": -41.3767
      },
      {
        "nome": "Tamboril do Piauí",
        "uf": "PI",
        "ibge": 2210953,
        "lat": -8.40937,
        "lng": -42.9211
      },
      {
        "nome": "Tanque do Piauí",
        "uf": "PI",
        "ibge": 2210979,
        "lat": -6.59787,
        "lng": -42.2795
      },
      {
        "nome": "União",
        "uf": "PI",
        "ibge": 2211100,
        "lat": -4.58571,
        "lng": -42.8583
      },
      {
        "nome": "Uruçuí",
        "uf": "PI",
        "ibge": 2211209,
        "lat": -7.23944,
        "lng": -44.5577
      },
      {
        "nome": "Valença do Piauí",
        "uf": "PI",
        "ibge": 2211308,
        "lat": -6.40301,
        "lng": -41.7375
      },
      {
        "nome": "Várzea Branca",
        "uf": "PI",
        "ibge": 2211357,
        "lat": -9.238,
        "lng": -42.9692
      },
      {
        "nome": "Várzea Grande",
        "uf": "PI",
        "ibge": 2211407,
        "lat": -6.54899,
        "lng": -42.248
      },
      {
        "nome": "Vera Mendes",
        "uf": "PI",
        "ibge": 2211506,
        "lat": -7.59748,
        "lng": -41.4673
      },
      {
        "nome": "Vila Nova do Piauí",
        "uf": "PI",
        "ibge": 2211605,
        "lat": -7.13272,
        "lng": -40.9345
      },
      {
        "nome": "Wall Ferraz",
        "uf": "PI",
        "ibge": 2211704,
        "lat": -7.23151,
        "lng": -41.905
      }
    ],
    "capital": {
      "nome": "Teresina",
      "uf": "PI",
      "ibge": 2211001,
      "lat": -5.09194,
      "lng": -42.8034
    }
  },
  "CE": {
    "nome": "Ceará",
    "ibge": 23,
    "cidades": [
      {
        "nome": "Abaiara",
        "uf": "CE",
        "ibge": 2300101,
        "lat": -7.34588,
        "lng": -39.0416
      },
      {
        "nome": "Acarape",
        "uf": "CE",
        "ibge": 2300150,
        "lat": -4.22083,
        "lng": -38.7055
      },
      {
        "nome": "Acaraú",
        "uf": "CE",
        "ibge": 2300200,
        "lat": -2.88769,
        "lng": -40.1183
      },
      {
        "nome": "Acopiara",
        "uf": "CE",
        "ibge": 2300309,
        "lat": -6.08911,
        "lng": -39.448
      },
      {
        "nome": "Aiuaba",
        "uf": "CE",
        "ibge": 2300408,
        "lat": -6.57122,
        "lng": -40.1178
      },
      {
        "nome": "Alcântaras",
        "uf": "CE",
        "ibge": 2300507,
        "lat": -3.58537,
        "lng": -40.5479
      },
      {
        "nome": "Altaneira",
        "uf": "CE",
        "ibge": 2300606,
        "lat": -6.99837,
        "lng": -39.7356
      },
      {
        "nome": "Alto Santo",
        "uf": "CE",
        "ibge": 2300705,
        "lat": -5.50894,
        "lng": -38.2743
      },
      {
        "nome": "Amontada",
        "uf": "CE",
        "ibge": 2300754,
        "lat": -3.36017,
        "lng": -39.8288
      },
      {
        "nome": "Antonina do Norte",
        "uf": "CE",
        "ibge": 2300804,
        "lat": -6.76919,
        "lng": -39.987
      },
      {
        "nome": "Apuiarés",
        "uf": "CE",
        "ibge": 2300903,
        "lat": -3.94506,
        "lng": -39.4359
      },
      {
        "nome": "Aquiraz",
        "uf": "CE",
        "ibge": 2301000,
        "lat": -3.89929,
        "lng": -38.3896
      },
      {
        "nome": "Aracati",
        "uf": "CE",
        "ibge": 2301109,
        "lat": -4.55826,
        "lng": -37.7679
      },
      {
        "nome": "Aracoiaba",
        "uf": "CE",
        "ibge": 2301208,
        "lat": -4.36872,
        "lng": -38.8125
      },
      {
        "nome": "Ararendá",
        "uf": "CE",
        "ibge": 2301257,
        "lat": -4.74567,
        "lng": -40.831
      },
      {
        "nome": "Araripe",
        "uf": "CE",
        "ibge": 2301307,
        "lat": -7.21319,
        "lng": -40.1359
      },
      {
        "nome": "Aratuba",
        "uf": "CE",
        "ibge": 2301406,
        "lat": -4.41229,
        "lng": -39.0471
      },
      {
        "nome": "Arneiroz",
        "uf": "CE",
        "ibge": 2301505,
        "lat": -6.3165,
        "lng": -40.1653
      },
      {
        "nome": "Assaré",
        "uf": "CE",
        "ibge": 2301604,
        "lat": -6.8669,
        "lng": -39.8689
      },
      {
        "nome": "Aurora",
        "uf": "CE",
        "ibge": 2301703,
        "lat": -6.93349,
        "lng": -38.9742
      },
      {
        "nome": "Baixio",
        "uf": "CE",
        "ibge": 2301802,
        "lat": -6.71945,
        "lng": -38.7134
      },
      {
        "nome": "Banabuiú",
        "uf": "CE",
        "ibge": 2301851,
        "lat": -5.30454,
        "lng": -38.9132
      },
      {
        "nome": "Barbalha",
        "uf": "CE",
        "ibge": 2301901,
        "lat": -7.2982,
        "lng": -39.3021
      },
      {
        "nome": "Barreira",
        "uf": "CE",
        "ibge": 2301950,
        "lat": -4.28921,
        "lng": -38.6429
      },
      {
        "nome": "Barro",
        "uf": "CE",
        "ibge": 2302008,
        "lat": -7.17188,
        "lng": -38.7741
      },
      {
        "nome": "Barroquinha",
        "uf": "CE",
        "ibge": 2302057,
        "lat": -3.02051,
        "lng": -41.1358
      },
      {
        "nome": "Baturité",
        "uf": "CE",
        "ibge": 2302107,
        "lat": -4.32598,
        "lng": -38.8812
      },
      {
        "nome": "Beberibe",
        "uf": "CE",
        "ibge": 2302206,
        "lat": -4.17741,
        "lng": -38.1271
      },
      {
        "nome": "Bela Cruz",
        "uf": "CE",
        "ibge": 2302305,
        "lat": -3.04996,
        "lng": -40.1671
      },
      {
        "nome": "Boa Viagem",
        "uf": "CE",
        "ibge": 2302404,
        "lat": -5.11258,
        "lng": -39.7337
      },
      {
        "nome": "Brejo Santo",
        "uf": "CE",
        "ibge": 2302503,
        "lat": -7.48469,
        "lng": -38.9799
      },
      {
        "nome": "Camocim",
        "uf": "CE",
        "ibge": 2302602,
        "lat": -2.9005,
        "lng": -40.8544
      },
      {
        "nome": "Campos Sales",
        "uf": "CE",
        "ibge": 2302701,
        "lat": -7.06761,
        "lng": -40.3687
      },
      {
        "nome": "Canindé",
        "uf": "CE",
        "ibge": 2302800,
        "lat": -4.35162,
        "lng": -39.3155
      },
      {
        "nome": "Capistrano",
        "uf": "CE",
        "ibge": 2302909,
        "lat": -4.45569,
        "lng": -38.9048
      },
      {
        "nome": "Caridade",
        "uf": "CE",
        "ibge": 2303006,
        "lat": -4.22514,
        "lng": -39.1912
      },
      {
        "nome": "Cariré",
        "uf": "CE",
        "ibge": 2303105,
        "lat": -3.94858,
        "lng": -40.476
      },
      {
        "nome": "Caririaçu",
        "uf": "CE",
        "ibge": 2303204,
        "lat": -7.02808,
        "lng": -39.2828
      },
      {
        "nome": "Cariús",
        "uf": "CE",
        "ibge": 2303303,
        "lat": -6.52428,
        "lng": -39.4916
      },
      {
        "nome": "Carnaubal",
        "uf": "CE",
        "ibge": 2303402,
        "lat": -4.15985,
        "lng": -40.9413
      },
      {
        "nome": "Cascavel",
        "uf": "CE",
        "ibge": 2303501,
        "lat": -4.12967,
        "lng": -38.2412
      },
      {
        "nome": "Catarina",
        "uf": "CE",
        "ibge": 2303600,
        "lat": -6.12291,
        "lng": -39.8736
      },
      {
        "nome": "Catunda",
        "uf": "CE",
        "ibge": 2303659,
        "lat": -4.64336,
        "lng": -40.2
      },
      {
        "nome": "Caucaia",
        "uf": "CE",
        "ibge": 2303709,
        "lat": -3.72797,
        "lng": -38.6619
      },
      {
        "nome": "Cedro",
        "uf": "CE",
        "ibge": 2303808,
        "lat": -6.60034,
        "lng": -39.0609
      },
      {
        "nome": "Chaval",
        "uf": "CE",
        "ibge": 2303907,
        "lat": -3.03571,
        "lng": -41.2435
      },
      {
        "nome": "Choró",
        "uf": "CE",
        "ibge": 2303931,
        "lat": -4.83906,
        "lng": -39.1344
      },
      {
        "nome": "Chorozinho",
        "uf": "CE",
        "ibge": 2303956,
        "lat": -4.28873,
        "lng": -38.4986
      },
      {
        "nome": "Coreaú",
        "uf": "CE",
        "ibge": 2304004,
        "lat": -3.5415,
        "lng": -40.6587
      },
      {
        "nome": "Crateús",
        "uf": "CE",
        "ibge": 2304103,
        "lat": -5.16768,
        "lng": -40.6536
      },
      {
        "nome": "Crato",
        "uf": "CE",
        "ibge": 2304202,
        "lat": -7.2153,
        "lng": -39.4103
      },
      {
        "nome": "Croatá",
        "uf": "CE",
        "ibge": 2304236,
        "lat": -4.40481,
        "lng": -40.9022
      },
      {
        "nome": "Cruz",
        "uf": "CE",
        "ibge": 2304251,
        "lat": -2.91813,
        "lng": -40.176
      },
      {
        "nome": "Deputado Irapuan Pinheiro",
        "uf": "CE",
        "ibge": 2304269,
        "lat": -5.91485,
        "lng": -39.257
      },
      {
        "nome": "Ererê",
        "uf": "CE",
        "ibge": 2304277,
        "lat": -6.02751,
        "lng": -38.3461
      },
      {
        "nome": "Eusébio",
        "uf": "CE",
        "ibge": 2304285,
        "lat": -3.8925,
        "lng": -38.4559
      },
      {
        "nome": "Farias Brito",
        "uf": "CE",
        "ibge": 2304301,
        "lat": -6.92146,
        "lng": -39.5651
      },
      {
        "nome": "Forquilha",
        "uf": "CE",
        "ibge": 2304350,
        "lat": -3.79945,
        "lng": -40.2634
      },
      {
        "nome": "Fortim",
        "uf": "CE",
        "ibge": 2304459,
        "lat": -4.45126,
        "lng": -37.7981
      },
      {
        "nome": "Frecheirinha",
        "uf": "CE",
        "ibge": 2304509,
        "lat": -3.75557,
        "lng": -40.818
      },
      {
        "nome": "General Sampaio",
        "uf": "CE",
        "ibge": 2304608,
        "lat": -4.04351,
        "lng": -39.454
      },
      {
        "nome": "Graça",
        "uf": "CE",
        "ibge": 2304657,
        "lat": -4.04422,
        "lng": -40.749
      },
      {
        "nome": "Granja",
        "uf": "CE",
        "ibge": 2304707,
        "lat": -3.12788,
        "lng": -40.8372
      },
      {
        "nome": "Granjeiro",
        "uf": "CE",
        "ibge": 2304806,
        "lat": -6.88134,
        "lng": -39.2144
      },
      {
        "nome": "Groaíras",
        "uf": "CE",
        "ibge": 2304905,
        "lat": -3.91787,
        "lng": -40.3852
      },
      {
        "nome": "Guaiúba",
        "uf": "CE",
        "ibge": 2304954,
        "lat": -4.04057,
        "lng": -38.6404
      },
      {
        "nome": "Guaraciaba do Norte",
        "uf": "CE",
        "ibge": 2305001,
        "lat": -4.15814,
        "lng": -40.7476
      },
      {
        "nome": "Guaramiranga",
        "uf": "CE",
        "ibge": 2305100,
        "lat": -4.26248,
        "lng": -38.932
      },
      {
        "nome": "Hidrolândia",
        "uf": "CE",
        "ibge": 2305209,
        "lat": -4.40958,
        "lng": -40.4056
      },
      {
        "nome": "Horizonte",
        "uf": "CE",
        "ibge": 2305233,
        "lat": -4.1209,
        "lng": -38.4707
      },
      {
        "nome": "Ibaretama",
        "uf": "CE",
        "ibge": 2305266,
        "lat": -4.80376,
        "lng": -38.7501
      },
      {
        "nome": "Ibiapina",
        "uf": "CE",
        "ibge": 2305308,
        "lat": -3.92403,
        "lng": -40.8911
      },
      {
        "nome": "Ibicuitinga",
        "uf": "CE",
        "ibge": 2305332,
        "lat": -4.96999,
        "lng": -38.6362
      },
      {
        "nome": "Icapuí",
        "uf": "CE",
        "ibge": 2305357,
        "lat": -4.71206,
        "lng": -37.3531
      },
      {
        "nome": "Icó",
        "uf": "CE",
        "ibge": 2305407,
        "lat": -6.39627,
        "lng": -38.8554
      },
      {
        "nome": "Iguatu",
        "uf": "CE",
        "ibge": 2305506,
        "lat": -6.36281,
        "lng": -39.2892
      },
      {
        "nome": "Independência",
        "uf": "CE",
        "ibge": 2305605,
        "lat": -5.38789,
        "lng": -40.3085
      },
      {
        "nome": "Ipaporanga",
        "uf": "CE",
        "ibge": 2305654,
        "lat": -4.89764,
        "lng": -40.7537
      },
      {
        "nome": "Ipaumirim",
        "uf": "CE",
        "ibge": 2305704,
        "lat": -6.78265,
        "lng": -38.7179
      },
      {
        "nome": "Ipu",
        "uf": "CE",
        "ibge": 2305803,
        "lat": -4.31748,
        "lng": -40.7059
      },
      {
        "nome": "Ipueiras",
        "uf": "CE",
        "ibge": 2305902,
        "lat": -4.53802,
        "lng": -40.7118
      },
      {
        "nome": "Iracema",
        "uf": "CE",
        "ibge": 2306009,
        "lat": -5.8124,
        "lng": -38.2919
      },
      {
        "nome": "Irauçuba",
        "uf": "CE",
        "ibge": 2306108,
        "lat": -3.74737,
        "lng": -39.7843
      },
      {
        "nome": "Itaiçaba",
        "uf": "CE",
        "ibge": 2306207,
        "lat": -4.67146,
        "lng": -37.833
      },
      {
        "nome": "Itaitinga",
        "uf": "CE",
        "ibge": 2306256,
        "lat": -3.96577,
        "lng": -38.5298
      },
      {
        "nome": "Itapajé",
        "uf": "CE",
        "ibge": 2306306,
        "lat": -3.68314,
        "lng": -39.5855
      },
      {
        "nome": "Itapipoca",
        "uf": "CE",
        "ibge": 2306405,
        "lat": -3.49933,
        "lng": -39.5836
      },
      {
        "nome": "Itapiúna",
        "uf": "CE",
        "ibge": 2306504,
        "lat": -4.55516,
        "lng": -38.9281
      },
      {
        "nome": "Itarema",
        "uf": "CE",
        "ibge": 2306553,
        "lat": -2.9248,
        "lng": -39.9167
      },
      {
        "nome": "Itatira",
        "uf": "CE",
        "ibge": 2306603,
        "lat": -4.52608,
        "lng": -39.6202
      },
      {
        "nome": "Jaguaretama",
        "uf": "CE",
        "ibge": 2306702,
        "lat": -5.6051,
        "lng": -38.7639
      },
      {
        "nome": "Jaguaribara",
        "uf": "CE",
        "ibge": 2306801,
        "lat": -5.67765,
        "lng": -38.5359
      },
      {
        "nome": "Jaguaribe",
        "uf": "CE",
        "ibge": 2306900,
        "lat": -5.90213,
        "lng": -38.6227
      },
      {
        "nome": "Jaguaruana",
        "uf": "CE",
        "ibge": 2307007,
        "lat": -4.83151,
        "lng": -37.781
      },
      {
        "nome": "Jardim",
        "uf": "CE",
        "ibge": 2307106,
        "lat": -7.57599,
        "lng": -39.2826
      },
      {
        "nome": "Jati",
        "uf": "CE",
        "ibge": 2307205,
        "lat": -7.6797,
        "lng": -39.0029
      },
      {
        "nome": "Jijoca de Jericoacoara",
        "uf": "CE",
        "ibge": 2307254,
        "lat": -2.79331,
        "lng": -40.5127
      },
      {
        "nome": "Juazeiro do Norte",
        "uf": "CE",
        "ibge": 2307304,
        "lat": -7.19621,
        "lng": -39.3076
      },
      {
        "nome": "Jucás",
        "uf": "CE",
        "ibge": 2307403,
        "lat": -6.51523,
        "lng": -39.5187
      },
      {
        "nome": "Lavras da Mangabeira",
        "uf": "CE",
        "ibge": 2307502,
        "lat": -6.7448,
        "lng": -38.9706
      },
      {
        "nome": "Limoeiro do Norte",
        "uf": "CE",
        "ibge": 2307601,
        "lat": -5.14392,
        "lng": -38.0847
      },
      {
        "nome": "Madalena",
        "uf": "CE",
        "ibge": 2307635,
        "lat": -4.84601,
        "lng": -39.5725
      },
      {
        "nome": "Maracanaú",
        "uf": "CE",
        "ibge": 2307650,
        "lat": -3.86699,
        "lng": -38.6259
      },
      {
        "nome": "Maranguape",
        "uf": "CE",
        "ibge": 2307700,
        "lat": -3.89143,
        "lng": -38.6829
      },
      {
        "nome": "Marco",
        "uf": "CE",
        "ibge": 2307809,
        "lat": -3.1285,
        "lng": -40.1582
      },
      {
        "nome": "Martinópole",
        "uf": "CE",
        "ibge": 2307908,
        "lat": -3.2252,
        "lng": -40.6896
      },
      {
        "nome": "Massapê",
        "uf": "CE",
        "ibge": 2308005,
        "lat": -3.52364,
        "lng": -40.3423
      },
      {
        "nome": "Mauriti",
        "uf": "CE",
        "ibge": 2308104,
        "lat": -7.38597,
        "lng": -38.7708
      },
      {
        "nome": "Meruoca",
        "uf": "CE",
        "ibge": 2308203,
        "lat": -3.53974,
        "lng": -40.4531
      },
      {
        "nome": "Milagres",
        "uf": "CE",
        "ibge": 2308302,
        "lat": -7.29749,
        "lng": -38.9378
      },
      {
        "nome": "Milhã",
        "uf": "CE",
        "ibge": 2308351,
        "lat": -5.67252,
        "lng": -39.1875
      },
      {
        "nome": "Miraíma",
        "uf": "CE",
        "ibge": 2308377,
        "lat": -3.56867,
        "lng": -39.9663
      },
      {
        "nome": "Missão Velha",
        "uf": "CE",
        "ibge": 2308401,
        "lat": -7.23522,
        "lng": -39.143
      },
      {
        "nome": "Mombaça",
        "uf": "CE",
        "ibge": 2308500,
        "lat": -5.73844,
        "lng": -39.63
      },
      {
        "nome": "Monsenhor Tabosa",
        "uf": "CE",
        "ibge": 2308609,
        "lat": -4.79102,
        "lng": -40.0646
      },
      {
        "nome": "Morada Nova",
        "uf": "CE",
        "ibge": 2308708,
        "lat": -5.09736,
        "lng": -38.3702
      },
      {
        "nome": "Moraújo",
        "uf": "CE",
        "ibge": 2308807,
        "lat": -3.46311,
        "lng": -40.6776
      },
      {
        "nome": "Morrinhos",
        "uf": "CE",
        "ibge": 2308906,
        "lat": -3.23426,
        "lng": -40.1233
      },
      {
        "nome": "Mucambo",
        "uf": "CE",
        "ibge": 2309003,
        "lat": -3.90271,
        "lng": -40.7452
      },
      {
        "nome": "Mulungu",
        "uf": "CE",
        "ibge": 2309102,
        "lat": -4.30294,
        "lng": -38.9951
      },
      {
        "nome": "Nova Olinda",
        "uf": "CE",
        "ibge": 2309201,
        "lat": -7.08415,
        "lng": -39.6713
      },
      {
        "nome": "Nova Russas",
        "uf": "CE",
        "ibge": 2309300,
        "lat": -4.70581,
        "lng": -40.5621
      },
      {
        "nome": "Novo Oriente",
        "uf": "CE",
        "ibge": 2309409,
        "lat": -5.52552,
        "lng": -40.7713
      },
      {
        "nome": "Ocara",
        "uf": "CE",
        "ibge": 2309458,
        "lat": -4.48523,
        "lng": -38.5933
      },
      {
        "nome": "Orós",
        "uf": "CE",
        "ibge": 2309508,
        "lat": -6.25182,
        "lng": -38.9053
      },
      {
        "nome": "Pacajus",
        "uf": "CE",
        "ibge": 2309607,
        "lat": -4.17107,
        "lng": -38.465
      },
      {
        "nome": "Pacatuba",
        "uf": "CE",
        "ibge": 2309706,
        "lat": -3.9784,
        "lng": -38.6183
      },
      {
        "nome": "Pacoti",
        "uf": "CE",
        "ibge": 2309805,
        "lat": -4.22492,
        "lng": -38.922
      },
      {
        "nome": "Pacujá",
        "uf": "CE",
        "ibge": 2309904,
        "lat": -3.98327,
        "lng": -40.6989
      },
      {
        "nome": "Palhano",
        "uf": "CE",
        "ibge": 2310001,
        "lat": -4.73672,
        "lng": -37.9655
      },
      {
        "nome": "Palmácia",
        "uf": "CE",
        "ibge": 2310100,
        "lat": -4.13831,
        "lng": -38.8446
      },
      {
        "nome": "Paracuru",
        "uf": "CE",
        "ibge": 2310209,
        "lat": -3.41436,
        "lng": -39.03
      },
      {
        "nome": "Paraipaba",
        "uf": "CE",
        "ibge": 2310258,
        "lat": -3.43799,
        "lng": -39.1479
      },
      {
        "nome": "Parambu",
        "uf": "CE",
        "ibge": 2310308,
        "lat": -6.20768,
        "lng": -40.6905
      },
      {
        "nome": "Paramoti",
        "uf": "CE",
        "ibge": 2310407,
        "lat": -4.08815,
        "lng": -39.2417
      },
      {
        "nome": "Pedra Branca",
        "uf": "CE",
        "ibge": 2310506,
        "lat": -5.45341,
        "lng": -39.7078
      },
      {
        "nome": "Penaforte",
        "uf": "CE",
        "ibge": 2310605,
        "lat": -7.82163,
        "lng": -39.0707
      },
      {
        "nome": "Pentecoste",
        "uf": "CE",
        "ibge": 2310704,
        "lat": -3.79274,
        "lng": -39.2692
      },
      {
        "nome": "Pereiro",
        "uf": "CE",
        "ibge": 2310803,
        "lat": -6.03576,
        "lng": -38.4624
      },
      {
        "nome": "Pindoretama",
        "uf": "CE",
        "ibge": 2310852,
        "lat": -4.01584,
        "lng": -38.3061
      },
      {
        "nome": "Piquet Carneiro",
        "uf": "CE",
        "ibge": 2310902,
        "lat": -5.80025,
        "lng": -39.417
      },
      {
        "nome": "Pires Ferreira",
        "uf": "CE",
        "ibge": 2310951,
        "lat": -4.23922,
        "lng": -40.6442
      },
      {
        "nome": "Poranga",
        "uf": "CE",
        "ibge": 2311009,
        "lat": -4.74672,
        "lng": -40.9205
      },
      {
        "nome": "Porteiras",
        "uf": "CE",
        "ibge": 2311108,
        "lat": -7.52265,
        "lng": -39.114
      },
      {
        "nome": "Potengi",
        "uf": "CE",
        "ibge": 2311207,
        "lat": -7.09154,
        "lng": -40.0233
      },
      {
        "nome": "Potiretama",
        "uf": "CE",
        "ibge": 2311231,
        "lat": -5.71287,
        "lng": -38.1578
      },
      {
        "nome": "Quiterianópolis",
        "uf": "CE",
        "ibge": 2311264,
        "lat": -5.8425,
        "lng": -40.7002
      },
      {
        "nome": "Quixadá",
        "uf": "CE",
        "ibge": 2311306,
        "lat": -4.9663,
        "lng": -39.0155
      },
      {
        "nome": "Quixelô",
        "uf": "CE",
        "ibge": 2311355,
        "lat": -6.24637,
        "lng": -39.2011
      },
      {
        "nome": "Quixeramobim",
        "uf": "CE",
        "ibge": 2311405,
        "lat": -5.19067,
        "lng": -39.2889
      },
      {
        "nome": "Quixeré",
        "uf": "CE",
        "ibge": 2311504,
        "lat": -5.07148,
        "lng": -37.9802
      },
      {
        "nome": "Redenção",
        "uf": "CE",
        "ibge": 2311603,
        "lat": -4.21587,
        "lng": -38.7277
      },
      {
        "nome": "Reriutaba",
        "uf": "CE",
        "ibge": 2311702,
        "lat": -4.14191,
        "lng": -40.5759
      },
      {
        "nome": "Russas",
        "uf": "CE",
        "ibge": 2311801,
        "lat": -4.92673,
        "lng": -37.9721
      },
      {
        "nome": "Saboeiro",
        "uf": "CE",
        "ibge": 2311900,
        "lat": -6.5346,
        "lng": -39.9017
      },
      {
        "nome": "Salitre",
        "uf": "CE",
        "ibge": 2311959,
        "lat": -7.28398,
        "lng": -40.45
      },
      {
        "nome": "Santa Quitéria",
        "uf": "CE",
        "ibge": 2312205,
        "lat": -4.32608,
        "lng": -40.1523
      },
      {
        "nome": "Santana do Acaraú",
        "uf": "CE",
        "ibge": 2312007,
        "lat": -3.46144,
        "lng": -40.2118
      },
      {
        "nome": "Santana do Cariri",
        "uf": "CE",
        "ibge": 2312106,
        "lat": -7.17613,
        "lng": -39.7302
      },
      {
        "nome": "São Benedito",
        "uf": "CE",
        "ibge": 2312304,
        "lat": -4.04713,
        "lng": -40.8596
      },
      {
        "nome": "São Gonçalo do Amarante",
        "uf": "CE",
        "ibge": 2312403,
        "lat": -3.60515,
        "lng": -38.9726
      },
      {
        "nome": "São João do Jaguaribe",
        "uf": "CE",
        "ibge": 2312502,
        "lat": -5.27516,
        "lng": -38.2694
      },
      {
        "nome": "São Luís do Curu",
        "uf": "CE",
        "ibge": 2312601,
        "lat": -3.66976,
        "lng": -39.2391
      },
      {
        "nome": "Senador Pompeu",
        "uf": "CE",
        "ibge": 2312700,
        "lat": -5.58244,
        "lng": -39.3704
      },
      {
        "nome": "Senador Sá",
        "uf": "CE",
        "ibge": 2312809,
        "lat": -3.35305,
        "lng": -40.4662
      },
      {
        "nome": "Sobral",
        "uf": "CE",
        "ibge": 2312908,
        "lat": -3.68913,
        "lng": -40.3482
      },
      {
        "nome": "Solonópole",
        "uf": "CE",
        "ibge": 2313005,
        "lat": -5.71894,
        "lng": -39.0107
      },
      {
        "nome": "Tabuleiro do Norte",
        "uf": "CE",
        "ibge": 2313104,
        "lat": -5.24353,
        "lng": -38.1282
      },
      {
        "nome": "Tamboril",
        "uf": "CE",
        "ibge": 2313203,
        "lat": -4.83136,
        "lng": -40.3196
      },
      {
        "nome": "Tarrafas",
        "uf": "CE",
        "ibge": 2313252,
        "lat": -6.67838,
        "lng": -39.753
      },
      {
        "nome": "Tauá",
        "uf": "CE",
        "ibge": 2313302,
        "lat": -5.98585,
        "lng": -40.2968
      },
      {
        "nome": "Tejuçuoca",
        "uf": "CE",
        "ibge": 2313351,
        "lat": -3.98831,
        "lng": -39.5799
      },
      {
        "nome": "Tianguá",
        "uf": "CE",
        "ibge": 2313401,
        "lat": -3.72965,
        "lng": -40.9923
      },
      {
        "nome": "Trairi",
        "uf": "CE",
        "ibge": 2313500,
        "lat": -3.26932,
        "lng": -39.2681
      },
      {
        "nome": "Tururu",
        "uf": "CE",
        "ibge": 2313559,
        "lat": -3.58413,
        "lng": -39.4297
      },
      {
        "nome": "Ubajara",
        "uf": "CE",
        "ibge": 2313609,
        "lat": -3.85448,
        "lng": -40.9204
      },
      {
        "nome": "Umari",
        "uf": "CE",
        "ibge": 2313708,
        "lat": -6.63893,
        "lng": -38.7008
      },
      {
        "nome": "Umirim",
        "uf": "CE",
        "ibge": 2313757,
        "lat": -3.67654,
        "lng": -39.3465
      },
      {
        "nome": "Uruburetama",
        "uf": "CE",
        "ibge": 2313807,
        "lat": -3.62316,
        "lng": -39.5107
      },
      {
        "nome": "Uruoca",
        "uf": "CE",
        "ibge": 2313906,
        "lat": -3.30819,
        "lng": -40.5628
      },
      {
        "nome": "Varjota",
        "uf": "CE",
        "ibge": 2313955,
        "lat": -4.19387,
        "lng": -40.4741
      },
      {
        "nome": "Várzea Alegre",
        "uf": "CE",
        "ibge": 2314003,
        "lat": -6.78264,
        "lng": -39.2942
      },
      {
        "nome": "Viçosa do Ceará",
        "uf": "CE",
        "ibge": 2314102,
        "lat": -3.5667,
        "lng": -41.0916
      }
    ],
    "capital": {
      "nome": "Fortaleza",
      "uf": "CE",
      "ibge": 2304400,
      "lat": -3.71664,
      "lng": -38.5423
    }
  },
  "RN": {
    "nome": "Rio Grande do Norte",
    "ibge": 24,
    "cidades": [
      {
        "nome": "Acari",
        "uf": "RN",
        "ibge": 2400109,
        "lat": -6.4282,
        "lng": -36.6347
      },
      {
        "nome": "Açu",
        "uf": "RN",
        "ibge": 2400208,
        "lat": -5.58362,
        "lng": -36.914
      },
      {
        "nome": "Afonso Bezerra",
        "uf": "RN",
        "ibge": 2400307,
        "lat": -5.49229,
        "lng": -36.5075
      },
      {
        "nome": "Água Nova",
        "uf": "RN",
        "ibge": 2400406,
        "lat": -6.20351,
        "lng": -38.2941
      },
      {
        "nome": "Alexandria",
        "uf": "RN",
        "ibge": 2400505,
        "lat": -6.40533,
        "lng": -38.0142
      },
      {
        "nome": "Almino Afonso",
        "uf": "RN",
        "ibge": 2400604,
        "lat": -6.1475,
        "lng": -37.7636
      },
      {
        "nome": "Alto do Rodrigues",
        "uf": "RN",
        "ibge": 2400703,
        "lat": -5.28186,
        "lng": -36.75
      },
      {
        "nome": "Angicos",
        "uf": "RN",
        "ibge": 2400802,
        "lat": -5.65792,
        "lng": -36.6094
      },
      {
        "nome": "Antônio Martins",
        "uf": "RN",
        "ibge": 2400901,
        "lat": -6.21367,
        "lng": -37.8834
      },
      {
        "nome": "Apodi",
        "uf": "RN",
        "ibge": 2401008,
        "lat": -5.65349,
        "lng": -37.7946
      },
      {
        "nome": "Areia Branca",
        "uf": "RN",
        "ibge": 2401107,
        "lat": -4.95254,
        "lng": -37.1252
      },
      {
        "nome": "Arês",
        "uf": "RN",
        "ibge": 2401206,
        "lat": -6.18831,
        "lng": -35.1608
      },
      {
        "nome": "Augusto Severo (Campo Grande)",
        "uf": "RN",
        "ibge": 2401305,
        "lat": -5.86206,
        "lng": -37.3135
      },
      {
        "nome": "Baía Formosa",
        "uf": "RN",
        "ibge": 2401404,
        "lat": -6.37161,
        "lng": -35.0033
      },
      {
        "nome": "Baraúna",
        "uf": "RN",
        "ibge": 2401453,
        "lat": -5.06977,
        "lng": -37.6129
      },
      {
        "nome": "Barcelona",
        "uf": "RN",
        "ibge": 2401503,
        "lat": -5.94284,
        "lng": -35.9247
      },
      {
        "nome": "Bento Fernandes",
        "uf": "RN",
        "ibge": 2401602,
        "lat": -5.69906,
        "lng": -35.813
      },
      {
        "nome": "Bodó",
        "uf": "RN",
        "ibge": 2401651,
        "lat": -5.98027,
        "lng": -36.4167
      },
      {
        "nome": "Bom Jesus",
        "uf": "RN",
        "ibge": 2401701,
        "lat": -5.98648,
        "lng": -35.5792
      },
      {
        "nome": "Brejinho",
        "uf": "RN",
        "ibge": 2401800,
        "lat": -6.18566,
        "lng": -35.3591
      },
      {
        "nome": "Caiçara do Norte",
        "uf": "RN",
        "ibge": 2401859,
        "lat": -5.07091,
        "lng": -36.0717
      },
      {
        "nome": "Caiçara do Rio do Vento",
        "uf": "RN",
        "ibge": 2401909,
        "lat": -5.76541,
        "lng": -35.9938
      },
      {
        "nome": "Caicó",
        "uf": "RN",
        "ibge": 2402006,
        "lat": -6.45441,
        "lng": -37.1067
      },
      {
        "nome": "Campo Redondo",
        "uf": "RN",
        "ibge": 2402105,
        "lat": -6.23829,
        "lng": -36.1888
      },
      {
        "nome": "Canguaretama",
        "uf": "RN",
        "ibge": 2402204,
        "lat": -6.37193,
        "lng": -35.1281
      },
      {
        "nome": "Caraúbas",
        "uf": "RN",
        "ibge": 2402303,
        "lat": -5.78387,
        "lng": -37.5586
      },
      {
        "nome": "Carnaúba dos Dantas",
        "uf": "RN",
        "ibge": 2402402,
        "lat": -6.55015,
        "lng": -36.5868
      },
      {
        "nome": "Carnaubais",
        "uf": "RN",
        "ibge": 2402501,
        "lat": -5.34181,
        "lng": -36.8335
      },
      {
        "nome": "Ceará-Mirim",
        "uf": "RN",
        "ibge": 2402600,
        "lat": -5.64323,
        "lng": -35.4247
      },
      {
        "nome": "Cerro Corá",
        "uf": "RN",
        "ibge": 2402709,
        "lat": -6.03503,
        "lng": -36.3503
      },
      {
        "nome": "Coronel Ezequiel",
        "uf": "RN",
        "ibge": 2402808,
        "lat": -6.3748,
        "lng": -36.2223
      },
      {
        "nome": "Coronel João Pessoa",
        "uf": "RN",
        "ibge": 2402907,
        "lat": -6.24974,
        "lng": -38.4441
      },
      {
        "nome": "Cruzeta",
        "uf": "RN",
        "ibge": 2403004,
        "lat": -6.40894,
        "lng": -36.7782
      },
      {
        "nome": "Currais Novos",
        "uf": "RN",
        "ibge": 2403103,
        "lat": -6.25484,
        "lng": -36.5146
      },
      {
        "nome": "Doutor Severiano",
        "uf": "RN",
        "ibge": 2403202,
        "lat": -6.08082,
        "lng": -38.3794
      },
      {
        "nome": "Encanto",
        "uf": "RN",
        "ibge": 2403301,
        "lat": -6.10691,
        "lng": -38.3033
      },
      {
        "nome": "Equador",
        "uf": "RN",
        "ibge": 2403400,
        "lat": -6.93835,
        "lng": -36.717
      },
      {
        "nome": "Espírito Santo",
        "uf": "RN",
        "ibge": 2403509,
        "lat": -6.33563,
        "lng": -35.3052
      },
      {
        "nome": "Extremoz",
        "uf": "RN",
        "ibge": 2403608,
        "lat": -5.70143,
        "lng": -35.3048
      },
      {
        "nome": "Felipe Guerra",
        "uf": "RN",
        "ibge": 2403707,
        "lat": -5.59274,
        "lng": -37.6875
      },
      {
        "nome": "Fernando Pedroza",
        "uf": "RN",
        "ibge": 2403756,
        "lat": -5.69096,
        "lng": -36.5282
      },
      {
        "nome": "Florânia",
        "uf": "RN",
        "ibge": 2403806,
        "lat": -6.12264,
        "lng": -36.8226
      },
      {
        "nome": "Francisco Dantas",
        "uf": "RN",
        "ibge": 2403905,
        "lat": -6.07234,
        "lng": -38.1212
      },
      {
        "nome": "Frutuoso Gomes",
        "uf": "RN",
        "ibge": 2404002,
        "lat": -6.15669,
        "lng": -37.8375
      },
      {
        "nome": "Galinhos",
        "uf": "RN",
        "ibge": 2404101,
        "lat": -5.0909,
        "lng": -36.2754
      },
      {
        "nome": "Goianinha",
        "uf": "RN",
        "ibge": 2404200,
        "lat": -6.26486,
        "lng": -35.1943
      },
      {
        "nome": "Governador Dix-Sept Rosado",
        "uf": "RN",
        "ibge": 2404309,
        "lat": -5.44887,
        "lng": -37.5183
      },
      {
        "nome": "Grossos",
        "uf": "RN",
        "ibge": 2404408,
        "lat": -4.98068,
        "lng": -37.1621
      },
      {
        "nome": "Guamaré",
        "uf": "RN",
        "ibge": 2404507,
        "lat": -5.10619,
        "lng": -36.3222
      },
      {
        "nome": "Ielmo Marinho",
        "uf": "RN",
        "ibge": 2404606,
        "lat": -5.82447,
        "lng": -35.55
      },
      {
        "nome": "Ipanguaçu",
        "uf": "RN",
        "ibge": 2404705,
        "lat": -5.48984,
        "lng": -36.8501
      },
      {
        "nome": "Ipueira",
        "uf": "RN",
        "ibge": 2404804,
        "lat": -6.80596,
        "lng": -37.2045
      },
      {
        "nome": "Itajá",
        "uf": "RN",
        "ibge": 2404853,
        "lat": -5.63894,
        "lng": -36.8712
      },
      {
        "nome": "Itaú",
        "uf": "RN",
        "ibge": 2404903,
        "lat": -5.8363,
        "lng": -37.9912
      },
      {
        "nome": "Jaçanã",
        "uf": "RN",
        "ibge": 2405009,
        "lat": -6.41856,
        "lng": -36.2031
      },
      {
        "nome": "Jandaíra",
        "uf": "RN",
        "ibge": 2405108,
        "lat": -5.35211,
        "lng": -36.1278
      },
      {
        "nome": "Janduís",
        "uf": "RN",
        "ibge": 2405207,
        "lat": -6.01474,
        "lng": -37.4048
      },
      {
        "nome": "Januário Cicco (Boa Saúde)",
        "uf": "RN",
        "ibge": 2405306,
        "lat": -6.16566,
        "lng": -35.6219
      },
      {
        "nome": "Japi",
        "uf": "RN",
        "ibge": 2405405,
        "lat": -6.46544,
        "lng": -35.9346
      },
      {
        "nome": "Jardim de Angicos",
        "uf": "RN",
        "ibge": 2405504,
        "lat": -5.64999,
        "lng": -35.9713
      },
      {
        "nome": "Jardim de Piranhas",
        "uf": "RN",
        "ibge": 2405603,
        "lat": -6.37665,
        "lng": -37.3496
      },
      {
        "nome": "Jardim do Seridó",
        "uf": "RN",
        "ibge": 2405702,
        "lat": -6.58047,
        "lng": -36.7736
      },
      {
        "nome": "João Câmara",
        "uf": "RN",
        "ibge": 2405801,
        "lat": -5.54094,
        "lng": -35.8122
      },
      {
        "nome": "João Dias",
        "uf": "RN",
        "ibge": 2405900,
        "lat": -6.27215,
        "lng": -37.7885
      },
      {
        "nome": "José da Penha",
        "uf": "RN",
        "ibge": 2406007,
        "lat": -6.31095,
        "lng": -38.2823
      },
      {
        "nome": "Jucurutu",
        "uf": "RN",
        "ibge": 2406106,
        "lat": -6.0306,
        "lng": -37.009
      },
      {
        "nome": "Jundiá",
        "uf": "RN",
        "ibge": 2406155,
        "lat": -6.26866,
        "lng": -35.3495
      },
      {
        "nome": "Lagoa d'Anta",
        "uf": "RN",
        "ibge": 2406205,
        "lat": -6.39493,
        "lng": -35.5949
      },
      {
        "nome": "Lagoa de Pedras",
        "uf": "RN",
        "ibge": 2406304,
        "lat": -6.15082,
        "lng": -35.4299
      },
      {
        "nome": "Lagoa de Velhos",
        "uf": "RN",
        "ibge": 2406403,
        "lat": -6.0119,
        "lng": -35.8729
      },
      {
        "nome": "Lagoa Nova",
        "uf": "RN",
        "ibge": 2406502,
        "lat": -6.09339,
        "lng": -36.4703
      },
      {
        "nome": "Lagoa Salgada",
        "uf": "RN",
        "ibge": 2406601,
        "lat": -6.12295,
        "lng": -35.4724
      },
      {
        "nome": "Lajes",
        "uf": "RN",
        "ibge": 2406700,
        "lat": -5.69322,
        "lng": -36.247
      },
      {
        "nome": "Lajes Pintadas",
        "uf": "RN",
        "ibge": 2406809,
        "lat": -6.14943,
        "lng": -36.1171
      },
      {
        "nome": "Lucrécia",
        "uf": "RN",
        "ibge": 2406908,
        "lat": -6.10525,
        "lng": -37.8134
      },
      {
        "nome": "Luís Gomes",
        "uf": "RN",
        "ibge": 2407005,
        "lat": -6.40588,
        "lng": -38.3899
      },
      {
        "nome": "Macaíba",
        "uf": "RN",
        "ibge": 2407104,
        "lat": -5.85229,
        "lng": -35.3552
      },
      {
        "nome": "Macau",
        "uf": "RN",
        "ibge": 2407203,
        "lat": -5.10795,
        "lng": -36.6318
      },
      {
        "nome": "Major Sales",
        "uf": "RN",
        "ibge": 2407252,
        "lat": -6.39949,
        "lng": -38.324
      },
      {
        "nome": "Marcelino Vieira",
        "uf": "RN",
        "ibge": 2407302,
        "lat": -6.2846,
        "lng": -38.1642
      },
      {
        "nome": "Martins",
        "uf": "RN",
        "ibge": 2407401,
        "lat": -6.08279,
        "lng": -37.908
      },
      {
        "nome": "Maxaranguape",
        "uf": "RN",
        "ibge": 2407500,
        "lat": -5.52181,
        "lng": -35.2631
      },
      {
        "nome": "Messias Targino",
        "uf": "RN",
        "ibge": 2407609,
        "lat": -6.07194,
        "lng": -37.5158
      },
      {
        "nome": "Montanhas",
        "uf": "RN",
        "ibge": 2407708,
        "lat": -6.48522,
        "lng": -35.2842
      },
      {
        "nome": "Monte Alegre",
        "uf": "RN",
        "ibge": 2407807,
        "lat": -6.07063,
        "lng": -35.3253
      },
      {
        "nome": "Monte das Gameleiras",
        "uf": "RN",
        "ibge": 2407906,
        "lat": -6.43698,
        "lng": -35.7831
      },
      {
        "nome": "Mossoró",
        "uf": "RN",
        "ibge": 2408003,
        "lat": -5.18374,
        "lng": -37.3474
      },
      {
        "nome": "Nísia Floresta",
        "uf": "RN",
        "ibge": 2408201,
        "lat": -6.09329,
        "lng": -35.1991
      },
      {
        "nome": "Nova Cruz",
        "uf": "RN",
        "ibge": 2408300,
        "lat": -6.47511,
        "lng": -35.4286
      },
      {
        "nome": "Olho-d'Água do Borges",
        "uf": "RN",
        "ibge": 2408409,
        "lat": -5.9486,
        "lng": -37.7047
      },
      {
        "nome": "Ouro Branco",
        "uf": "RN",
        "ibge": 2408508,
        "lat": -6.6958,
        "lng": -36.9428
      },
      {
        "nome": "Paraná",
        "uf": "RN",
        "ibge": 2408607,
        "lat": -6.47565,
        "lng": -38.3057
      },
      {
        "nome": "Paraú",
        "uf": "RN",
        "ibge": 2408706,
        "lat": -5.76893,
        "lng": -37.1032
      },
      {
        "nome": "Parazinho",
        "uf": "RN",
        "ibge": 2408805,
        "lat": -5.22276,
        "lng": -35.8398
      },
      {
        "nome": "Parelhas",
        "uf": "RN",
        "ibge": 2408904,
        "lat": -6.68491,
        "lng": -36.6566
      },
      {
        "nome": "Parnamirim",
        "uf": "RN",
        "ibge": 2403251,
        "lat": -5.91116,
        "lng": -35.271
      },
      {
        "nome": "Passa e Fica",
        "uf": "RN",
        "ibge": 2409100,
        "lat": -6.43018,
        "lng": -35.6442
      },
      {
        "nome": "Passagem",
        "uf": "RN",
        "ibge": 2409209,
        "lat": -6.27268,
        "lng": -35.37
      },
      {
        "nome": "Patu",
        "uf": "RN",
        "ibge": 2409308,
        "lat": -6.10656,
        "lng": -37.6356
      },
      {
        "nome": "Pau dos Ferros",
        "uf": "RN",
        "ibge": 2409407,
        "lat": -6.10498,
        "lng": -38.2077
      },
      {
        "nome": "Pedra Grande",
        "uf": "RN",
        "ibge": 2409506,
        "lat": -5.14988,
        "lng": -35.876
      },
      {
        "nome": "Pedra Preta",
        "uf": "RN",
        "ibge": 2409605,
        "lat": -5.57352,
        "lng": -36.1084
      },
      {
        "nome": "Pedro Avelino",
        "uf": "RN",
        "ibge": 2409704,
        "lat": -5.5161,
        "lng": -36.3867
      },
      {
        "nome": "Pedro Velho",
        "uf": "RN",
        "ibge": 2409803,
        "lat": -6.4356,
        "lng": -35.2195
      },
      {
        "nome": "Pendências",
        "uf": "RN",
        "ibge": 2409902,
        "lat": -5.2564,
        "lng": -36.7095
      },
      {
        "nome": "Pilões",
        "uf": "RN",
        "ibge": 2410009,
        "lat": -6.26364,
        "lng": -38.0461
      },
      {
        "nome": "Poço Branco",
        "uf": "RN",
        "ibge": 2410108,
        "lat": -5.62233,
        "lng": -35.6635
      },
      {
        "nome": "Portalegre",
        "uf": "RN",
        "ibge": 2410207,
        "lat": -6.02064,
        "lng": -37.9865
      },
      {
        "nome": "Porto do Mangue",
        "uf": "RN",
        "ibge": 2410256,
        "lat": -5.05441,
        "lng": -36.7887
      },
      {
        "nome": "Pureza",
        "uf": "RN",
        "ibge": 2410405,
        "lat": -5.46393,
        "lng": -35.5554
      },
      {
        "nome": "Rafael Fernandes",
        "uf": "RN",
        "ibge": 2410504,
        "lat": -6.18987,
        "lng": -38.2211
      },
      {
        "nome": "Rafael Godeiro",
        "uf": "RN",
        "ibge": 2410603,
        "lat": -6.07244,
        "lng": -37.716
      },
      {
        "nome": "Riacho da Cruz",
        "uf": "RN",
        "ibge": 2410702,
        "lat": -5.92654,
        "lng": -37.949
      },
      {
        "nome": "Riacho de Santana",
        "uf": "RN",
        "ibge": 2410801,
        "lat": -6.25139,
        "lng": -38.3116
      },
      {
        "nome": "Riachuelo",
        "uf": "RN",
        "ibge": 2410900,
        "lat": -5.82156,
        "lng": -35.8215
      },
      {
        "nome": "Rio do Fogo",
        "uf": "RN",
        "ibge": 2408953,
        "lat": -5.2765,
        "lng": -35.3794
      },
      {
        "nome": "Rodolfo Fernandes",
        "uf": "RN",
        "ibge": 2411007,
        "lat": -5.78393,
        "lng": -38.0579
      },
      {
        "nome": "Ruy Barbosa",
        "uf": "RN",
        "ibge": 2411106,
        "lat": -5.88745,
        "lng": -35.933
      },
      {
        "nome": "Santa Cruz",
        "uf": "RN",
        "ibge": 2411205,
        "lat": -6.22475,
        "lng": -36.0193
      },
      {
        "nome": "Santa Maria",
        "uf": "RN",
        "ibge": 2409332,
        "lat": -5.83802,
        "lng": -35.6914
      },
      {
        "nome": "Santana do Matos",
        "uf": "RN",
        "ibge": 2411403,
        "lat": -5.94605,
        "lng": -36.6578
      },
      {
        "nome": "Santana do Seridó",
        "uf": "RN",
        "ibge": 2411429,
        "lat": -6.76643,
        "lng": -36.7312
      },
      {
        "nome": "Santo Antônio",
        "uf": "RN",
        "ibge": 2411502,
        "lat": -6.31195,
        "lng": -35.4739
      },
      {
        "nome": "São Bento do Norte",
        "uf": "RN",
        "ibge": 2411601,
        "lat": -5.09259,
        "lng": -35.9587
      },
      {
        "nome": "São Bento do Trairí",
        "uf": "RN",
        "ibge": 2411700,
        "lat": -6.33798,
        "lng": -36.0863
      },
      {
        "nome": "São Fernando",
        "uf": "RN",
        "ibge": 2411809,
        "lat": -6.37975,
        "lng": -37.1864
      },
      {
        "nome": "São Francisco do Oeste",
        "uf": "RN",
        "ibge": 2411908,
        "lat": -5.97472,
        "lng": -38.1519
      },
      {
        "nome": "São Gonçalo do Amarante",
        "uf": "RN",
        "ibge": 2412005,
        "lat": -5.79068,
        "lng": -35.3257
      },
      {
        "nome": "São João do Sabugi",
        "uf": "RN",
        "ibge": 2412104,
        "lat": -6.71387,
        "lng": -37.2027
      },
      {
        "nome": "São José de Mipibu",
        "uf": "RN",
        "ibge": 2412203,
        "lat": -6.0773,
        "lng": -35.2417
      },
      {
        "nome": "São José do Campestre",
        "uf": "RN",
        "ibge": 2412302,
        "lat": -6.31087,
        "lng": -35.7067
      },
      {
        "nome": "São José do Seridó",
        "uf": "RN",
        "ibge": 2412401,
        "lat": -6.44002,
        "lng": -36.8746
      },
      {
        "nome": "São Miguel",
        "uf": "RN",
        "ibge": 2412500,
        "lat": -6.20283,
        "lng": -38.4947
      },
      {
        "nome": "São Miguel do Gostoso",
        "uf": "RN",
        "ibge": 2412559,
        "lat": -5.12302,
        "lng": -35.6354
      },
      {
        "nome": "São Paulo do Potengi",
        "uf": "RN",
        "ibge": 2412609,
        "lat": -5.8994,
        "lng": -35.7642
      },
      {
        "nome": "São Pedro",
        "uf": "RN",
        "ibge": 2412708,
        "lat": -5.90559,
        "lng": -35.6317
      },
      {
        "nome": "São Rafael",
        "uf": "RN",
        "ibge": 2412807,
        "lat": -5.79791,
        "lng": -36.8778
      },
      {
        "nome": "São Tomé",
        "uf": "RN",
        "ibge": 2412906,
        "lat": -5.96404,
        "lng": -36.0798
      },
      {
        "nome": "São Vicente",
        "uf": "RN",
        "ibge": 2413003,
        "lat": -6.21893,
        "lng": -36.6827
      },
      {
        "nome": "Senador Elói de Souza",
        "uf": "RN",
        "ibge": 2413102,
        "lat": -6.03334,
        "lng": -35.6978
      },
      {
        "nome": "Senador Georgino Avelino",
        "uf": "RN",
        "ibge": 2413201,
        "lat": -6.1576,
        "lng": -35.1299
      },
      {
        "nome": "Serra Caiada",
        "uf": "RN",
        "ibge": 2410306,
        "lat": -6.10478,
        "lng": -35.7113
      },
      {
        "nome": "Serra de São Bento",
        "uf": "RN",
        "ibge": 2413300,
        "lat": -6.41762,
        "lng": -35.7033
      },
      {
        "nome": "Serra do Mel",
        "uf": "RN",
        "ibge": 2413359,
        "lat": -5.17725,
        "lng": -37.0242
      },
      {
        "nome": "Serra Negra do Norte",
        "uf": "RN",
        "ibge": 2413409,
        "lat": -6.66031,
        "lng": -37.3996
      },
      {
        "nome": "Serrinha",
        "uf": "RN",
        "ibge": 2413508,
        "lat": -6.28181,
        "lng": -35.5
      },
      {
        "nome": "Serrinha dos Pintos",
        "uf": "RN",
        "ibge": 2413557,
        "lat": -6.11087,
        "lng": -37.9548
      },
      {
        "nome": "Severiano Melo",
        "uf": "RN",
        "ibge": 2413607,
        "lat": -5.77666,
        "lng": -37.957
      },
      {
        "nome": "Sítio Novo",
        "uf": "RN",
        "ibge": 2413706,
        "lat": -6.11132,
        "lng": -35.909
      },
      {
        "nome": "Taboleiro Grande",
        "uf": "RN",
        "ibge": 2413805,
        "lat": -5.91948,
        "lng": -38.0367
      },
      {
        "nome": "Taipu",
        "uf": "RN",
        "ibge": 2413904,
        "lat": -5.63058,
        "lng": -35.5918
      },
      {
        "nome": "Tangará",
        "uf": "RN",
        "ibge": 2414001,
        "lat": -6.19649,
        "lng": -35.7989
      },
      {
        "nome": "Tenente Ananias",
        "uf": "RN",
        "ibge": 2414100,
        "lat": -6.45823,
        "lng": -38.182
      },
      {
        "nome": "Tenente Laurentino Cruz",
        "uf": "RN",
        "ibge": 2414159,
        "lat": -6.1378,
        "lng": -36.7135
      },
      {
        "nome": "Tibau",
        "uf": "RN",
        "ibge": 2411056,
        "lat": -4.83729,
        "lng": -37.2554
      },
      {
        "nome": "Tibau do Sul",
        "uf": "RN",
        "ibge": 2414209,
        "lat": -6.19176,
        "lng": -35.0866
      },
      {
        "nome": "Timbaúba dos Batistas",
        "uf": "RN",
        "ibge": 2414308,
        "lat": -6.45768,
        "lng": -37.2745
      },
      {
        "nome": "Touros",
        "uf": "RN",
        "ibge": 2414407,
        "lat": -5.20182,
        "lng": -35.4621
      },
      {
        "nome": "Triunfo Potiguar",
        "uf": "RN",
        "ibge": 2414456,
        "lat": -5.85408,
        "lng": -37.1786
      },
      {
        "nome": "Umarizal",
        "uf": "RN",
        "ibge": 2414506,
        "lat": -5.98238,
        "lng": -37.818
      },
      {
        "nome": "Upanema",
        "uf": "RN",
        "ibge": 2414605,
        "lat": -5.63761,
        "lng": -37.2635
      },
      {
        "nome": "Várzea",
        "uf": "RN",
        "ibge": 2414704,
        "lat": -6.34641,
        "lng": -35.3732
      },
      {
        "nome": "Venha-Ver",
        "uf": "RN",
        "ibge": 2414753,
        "lat": -6.32016,
        "lng": -38.4896
      },
      {
        "nome": "Vera Cruz",
        "uf": "RN",
        "ibge": 2414803,
        "lat": -6.04399,
        "lng": -35.428
      },
      {
        "nome": "Viçosa",
        "uf": "RN",
        "ibge": 2414902,
        "lat": -5.98253,
        "lng": -37.9462
      },
      {
        "nome": "Vila Flor",
        "uf": "RN",
        "ibge": 2415008,
        "lat": -6.31287,
        "lng": -35.067
      }
    ],
    "capital": {
      "nome": "Natal",
      "uf": "RN",
      "ibge": 2408102,
      "lat": -5.79357,
      "lng": -35.1986
    }
  },
  "PB": {
    "nome": "Paraíba",
    "ibge": 25,
    "cidades": [
      {
        "nome": "Água Branca",
        "uf": "PB",
        "ibge": 2500106,
        "lat": -7.51144,
        "lng": -37.6357
      },
      {
        "nome": "Aguiar",
        "uf": "PB",
        "ibge": 2500205,
        "lat": -7.0918,
        "lng": -38.1681
      },
      {
        "nome": "Alagoa Grande",
        "uf": "PB",
        "ibge": 2500304,
        "lat": -7.03943,
        "lng": -35.6206
      },
      {
        "nome": "Alagoa Nova",
        "uf": "PB",
        "ibge": 2500403,
        "lat": -7.05377,
        "lng": -35.7591
      },
      {
        "nome": "Alagoinha",
        "uf": "PB",
        "ibge": 2500502,
        "lat": -6.94657,
        "lng": -35.5332
      },
      {
        "nome": "Alcantil",
        "uf": "PB",
        "ibge": 2500536,
        "lat": -7.73668,
        "lng": -36.0511
      },
      {
        "nome": "Algodão de Jandaíra",
        "uf": "PB",
        "ibge": 2500577,
        "lat": -6.89292,
        "lng": -36.0129
      },
      {
        "nome": "Alhandra",
        "uf": "PB",
        "ibge": 2500601,
        "lat": -7.42977,
        "lng": -34.9057
      },
      {
        "nome": "Amparo",
        "uf": "PB",
        "ibge": 2500734,
        "lat": -7.55502,
        "lng": -37.0628
      },
      {
        "nome": "Aparecida",
        "uf": "PB",
        "ibge": 2500775,
        "lat": -6.78466,
        "lng": -38.0803
      },
      {
        "nome": "Araçagi",
        "uf": "PB",
        "ibge": 2500809,
        "lat": -6.84374,
        "lng": -35.3737
      },
      {
        "nome": "Arara",
        "uf": "PB",
        "ibge": 2500908,
        "lat": -6.82813,
        "lng": -35.7552
      },
      {
        "nome": "Araruna",
        "uf": "PB",
        "ibge": 2501005,
        "lat": -6.54848,
        "lng": -35.7498
      },
      {
        "nome": "Areia",
        "uf": "PB",
        "ibge": 2501104,
        "lat": -6.96396,
        "lng": -35.6977
      },
      {
        "nome": "Areia de Baraúnas",
        "uf": "PB",
        "ibge": 2501153,
        "lat": -7.11702,
        "lng": -36.9404
      },
      {
        "nome": "Areial",
        "uf": "PB",
        "ibge": 2501203,
        "lat": -7.04789,
        "lng": -35.9313
      },
      {
        "nome": "Aroeiras",
        "uf": "PB",
        "ibge": 2501302,
        "lat": -7.54473,
        "lng": -35.7066
      },
      {
        "nome": "Assunção",
        "uf": "PB",
        "ibge": 2501351,
        "lat": -7.07231,
        "lng": -36.725
      },
      {
        "nome": "Baía da Traição",
        "uf": "PB",
        "ibge": 2501401,
        "lat": -6.69209,
        "lng": -34.9381
      },
      {
        "nome": "Bananeiras",
        "uf": "PB",
        "ibge": 2501500,
        "lat": -6.74775,
        "lng": -35.6246
      },
      {
        "nome": "Baraúna",
        "uf": "PB",
        "ibge": 2501534,
        "lat": -6.63484,
        "lng": -36.2601
      },
      {
        "nome": "Barra de Santa Rosa",
        "uf": "PB",
        "ibge": 2501609,
        "lat": -6.71816,
        "lng": -36.0671
      },
      {
        "nome": "Barra de Santana",
        "uf": "PB",
        "ibge": 2501575,
        "lat": -7.51809,
        "lng": -35.9913
      },
      {
        "nome": "Barra de São Miguel",
        "uf": "PB",
        "ibge": 2501708,
        "lat": -7.74603,
        "lng": -36.3209
      },
      {
        "nome": "Bayeux",
        "uf": "PB",
        "ibge": 2501807,
        "lat": -7.1238,
        "lng": -34.9293
      },
      {
        "nome": "Belém",
        "uf": "PB",
        "ibge": 2501906,
        "lat": -6.74261,
        "lng": -35.5166
      },
      {
        "nome": "Belém do Brejo do Cruz",
        "uf": "PB",
        "ibge": 2502003,
        "lat": -6.18515,
        "lng": -37.5348
      },
      {
        "nome": "Bernardino Batista",
        "uf": "PB",
        "ibge": 2502052,
        "lat": -6.44572,
        "lng": -38.5521
      },
      {
        "nome": "Boa Ventura",
        "uf": "PB",
        "ibge": 2502102,
        "lat": -7.40982,
        "lng": -38.2113
      },
      {
        "nome": "Boa Vista",
        "uf": "PB",
        "ibge": 2502151,
        "lat": -7.26365,
        "lng": -36.2357
      },
      {
        "nome": "Bom Jesus",
        "uf": "PB",
        "ibge": 2502201,
        "lat": -6.81601,
        "lng": -38.6453
      },
      {
        "nome": "Bom Sucesso",
        "uf": "PB",
        "ibge": 2502300,
        "lat": -6.44176,
        "lng": -37.9234
      },
      {
        "nome": "Bonito de Santa Fé",
        "uf": "PB",
        "ibge": 2502409,
        "lat": -7.31341,
        "lng": -38.5133
      },
      {
        "nome": "Boqueirão",
        "uf": "PB",
        "ibge": 2502508,
        "lat": -7.487,
        "lng": -36.1309
      },
      {
        "nome": "Borborema",
        "uf": "PB",
        "ibge": 2502706,
        "lat": -6.80199,
        "lng": -35.6187
      },
      {
        "nome": "Brejo do Cruz",
        "uf": "PB",
        "ibge": 2502805,
        "lat": -6.34185,
        "lng": -37.4943
      },
      {
        "nome": "Brejo dos Santos",
        "uf": "PB",
        "ibge": 2502904,
        "lat": -6.37065,
        "lng": -37.8253
      },
      {
        "nome": "Caaporã",
        "uf": "PB",
        "ibge": 2503001,
        "lat": -7.51351,
        "lng": -34.9055
      },
      {
        "nome": "Cabaceiras",
        "uf": "PB",
        "ibge": 2503100,
        "lat": -7.48899,
        "lng": -36.287
      },
      {
        "nome": "Cabedelo",
        "uf": "PB",
        "ibge": 2503209,
        "lat": -6.98731,
        "lng": -34.8284
      },
      {
        "nome": "Cachoeira dos Índios",
        "uf": "PB",
        "ibge": 2503308,
        "lat": -6.91353,
        "lng": -38.676
      },
      {
        "nome": "Cacimba de Areia",
        "uf": "PB",
        "ibge": 2503407,
        "lat": -7.12128,
        "lng": -37.1563
      },
      {
        "nome": "Cacimba de Dentro",
        "uf": "PB",
        "ibge": 2503506,
        "lat": -6.6386,
        "lng": -35.7778
      },
      {
        "nome": "Cacimbas",
        "uf": "PB",
        "ibge": 2503555,
        "lat": -7.20721,
        "lng": -37.0604
      },
      {
        "nome": "Caiçara",
        "uf": "PB",
        "ibge": 2503605,
        "lat": -6.62115,
        "lng": -35.4581
      },
      {
        "nome": "Cajazeiras",
        "uf": "PB",
        "ibge": 2503704,
        "lat": -6.88004,
        "lng": -38.5577
      },
      {
        "nome": "Cajazeirinhas",
        "uf": "PB",
        "ibge": 2503753,
        "lat": -6.96016,
        "lng": -37.8009
      },
      {
        "nome": "Caldas Brandão",
        "uf": "PB",
        "ibge": 2503803,
        "lat": -7.1025,
        "lng": -35.3272
      },
      {
        "nome": "Camalaú",
        "uf": "PB",
        "ibge": 2503902,
        "lat": -7.88503,
        "lng": -36.8242
      },
      {
        "nome": "Campina Grande",
        "uf": "PB",
        "ibge": 2504009,
        "lat": -7.22196,
        "lng": -35.8731
      },
      {
        "nome": "Capim",
        "uf": "PB",
        "ibge": 2504033,
        "lat": -6.91624,
        "lng": -35.1673
      },
      {
        "nome": "Caraúbas",
        "uf": "PB",
        "ibge": 2504074,
        "lat": -7.72049,
        "lng": -36.492
      },
      {
        "nome": "Carrapateira",
        "uf": "PB",
        "ibge": 2504108,
        "lat": -7.03414,
        "lng": -38.3399
      },
      {
        "nome": "Casserengue",
        "uf": "PB",
        "ibge": 2504157,
        "lat": -6.77954,
        "lng": -35.8179
      },
      {
        "nome": "Catingueira",
        "uf": "PB",
        "ibge": 2504207,
        "lat": -7.12008,
        "lng": -37.6064
      },
      {
        "nome": "Catolé do Rocha",
        "uf": "PB",
        "ibge": 2504306,
        "lat": -6.34062,
        "lng": -37.747
      },
      {
        "nome": "Caturité",
        "uf": "PB",
        "ibge": 2504355,
        "lat": -7.41659,
        "lng": -36.0306
      },
      {
        "nome": "Conceição",
        "uf": "PB",
        "ibge": 2504405,
        "lat": -7.55106,
        "lng": -38.5014
      },
      {
        "nome": "Condado",
        "uf": "PB",
        "ibge": 2504504,
        "lat": -6.89831,
        "lng": -37.606
      },
      {
        "nome": "Conde",
        "uf": "PB",
        "ibge": 2504603,
        "lat": -7.25746,
        "lng": -34.8999
      },
      {
        "nome": "Congo",
        "uf": "PB",
        "ibge": 2504702,
        "lat": -7.79078,
        "lng": -36.6581
      },
      {
        "nome": "Coremas",
        "uf": "PB",
        "ibge": 2504801,
        "lat": -7.00712,
        "lng": -37.9346
      },
      {
        "nome": "Coxixola",
        "uf": "PB",
        "ibge": 2504850,
        "lat": -7.62365,
        "lng": -36.6064
      },
      {
        "nome": "Cruz do Espírito Santo",
        "uf": "PB",
        "ibge": 2504900,
        "lat": -7.13902,
        "lng": -35.0857
      },
      {
        "nome": "Cubati",
        "uf": "PB",
        "ibge": 2505006,
        "lat": -6.86686,
        "lng": -36.3619
      },
      {
        "nome": "Cuité",
        "uf": "PB",
        "ibge": 2505105,
        "lat": -6.47647,
        "lng": -36.1515
      },
      {
        "nome": "Cuité de Mamanguape",
        "uf": "PB",
        "ibge": 2505238,
        "lat": -6.91292,
        "lng": -35.2502
      },
      {
        "nome": "Cuitegi",
        "uf": "PB",
        "ibge": 2505204,
        "lat": -6.89058,
        "lng": -35.5215
      },
      {
        "nome": "Curral de Cima",
        "uf": "PB",
        "ibge": 2505279,
        "lat": -6.72325,
        "lng": -35.2639
      },
      {
        "nome": "Curral Velho",
        "uf": "PB",
        "ibge": 2505303,
        "lat": -7.53075,
        "lng": -38.1962
      },
      {
        "nome": "Damião",
        "uf": "PB",
        "ibge": 2505352,
        "lat": -6.63161,
        "lng": -35.9101
      },
      {
        "nome": "Desterro",
        "uf": "PB",
        "ibge": 2505402,
        "lat": -7.287,
        "lng": -37.0925
      },
      {
        "nome": "Diamante",
        "uf": "PB",
        "ibge": 2505600,
        "lat": -7.41738,
        "lng": -38.2615
      },
      {
        "nome": "Dona Inês",
        "uf": "PB",
        "ibge": 2505709,
        "lat": -6.61566,
        "lng": -35.6205
      },
      {
        "nome": "Duas Estradas",
        "uf": "PB",
        "ibge": 2505808,
        "lat": -6.68499,
        "lng": -35.418
      },
      {
        "nome": "Emas",
        "uf": "PB",
        "ibge": 2505907,
        "lat": -7.09964,
        "lng": -37.7163
      },
      {
        "nome": "Esperança",
        "uf": "PB",
        "ibge": 2506004,
        "lat": -7.02278,
        "lng": -35.8597
      },
      {
        "nome": "Fagundes",
        "uf": "PB",
        "ibge": 2506103,
        "lat": -7.34454,
        "lng": -35.7931
      },
      {
        "nome": "Frei Martinho",
        "uf": "PB",
        "ibge": 2506202,
        "lat": -6.39759,
        "lng": -36.4526
      },
      {
        "nome": "Gado Bravo",
        "uf": "PB",
        "ibge": 2506251,
        "lat": -7.58279,
        "lng": -35.7899
      },
      {
        "nome": "Guarabira",
        "uf": "PB",
        "ibge": 2506301,
        "lat": -6.85064,
        "lng": -35.485
      },
      {
        "nome": "Gurinhém",
        "uf": "PB",
        "ibge": 2506400,
        "lat": -7.1233,
        "lng": -35.4222
      },
      {
        "nome": "Gurjão",
        "uf": "PB",
        "ibge": 2506509,
        "lat": -7.24833,
        "lng": -36.4923
      },
      {
        "nome": "Ibiara",
        "uf": "PB",
        "ibge": 2506608,
        "lat": -7.47957,
        "lng": -38.4059
      },
      {
        "nome": "Igaracy",
        "uf": "PB",
        "ibge": 2502607,
        "lat": -7.17184,
        "lng": -38.1478
      },
      {
        "nome": "Imaculada",
        "uf": "PB",
        "ibge": 2506707,
        "lat": -7.3889,
        "lng": -37.5079
      },
      {
        "nome": "Ingá",
        "uf": "PB",
        "ibge": 2506806,
        "lat": -7.28144,
        "lng": -35.605
      },
      {
        "nome": "Itabaiana",
        "uf": "PB",
        "ibge": 2506905,
        "lat": -7.33167,
        "lng": -35.3317
      },
      {
        "nome": "Itaporanga",
        "uf": "PB",
        "ibge": 2507002,
        "lat": -7.30202,
        "lng": -38.1504
      },
      {
        "nome": "Itapororoca",
        "uf": "PB",
        "ibge": 2507101,
        "lat": -6.82374,
        "lng": -35.2406
      },
      {
        "nome": "Itatuba",
        "uf": "PB",
        "ibge": 2507200,
        "lat": -7.38115,
        "lng": -35.638
      },
      {
        "nome": "Jacaraú",
        "uf": "PB",
        "ibge": 2507309,
        "lat": -6.61453,
        "lng": -35.289
      },
      {
        "nome": "Jericó",
        "uf": "PB",
        "ibge": 2507408,
        "lat": -6.54577,
        "lng": -37.8036
      },
      {
        "nome": "Joca Claudino",
        "uf": "PB",
        "ibge": 2513653,
        "lat": -6.48362,
        "lng": -38.4764
      },
      {
        "nome": "Juarez Távora",
        "uf": "PB",
        "ibge": 2507606,
        "lat": -7.1713,
        "lng": -35.5686
      },
      {
        "nome": "Juazeirinho",
        "uf": "PB",
        "ibge": 2507705,
        "lat": -7.06092,
        "lng": -36.5793
      },
      {
        "nome": "Junco do Seridó",
        "uf": "PB",
        "ibge": 2507804,
        "lat": -6.99269,
        "lng": -36.7166
      },
      {
        "nome": "Juripiranga",
        "uf": "PB",
        "ibge": 2507903,
        "lat": -7.36176,
        "lng": -35.2321
      },
      {
        "nome": "Juru",
        "uf": "PB",
        "ibge": 2508000,
        "lat": -7.52983,
        "lng": -37.815
      },
      {
        "nome": "Lagoa",
        "uf": "PB",
        "ibge": 2508109,
        "lat": -6.58572,
        "lng": -37.9127
      },
      {
        "nome": "Lagoa de Dentro",
        "uf": "PB",
        "ibge": 2508208,
        "lat": -6.67213,
        "lng": -35.3706
      },
      {
        "nome": "Lagoa Seca",
        "uf": "PB",
        "ibge": 2508307,
        "lat": -7.15535,
        "lng": -35.8491
      },
      {
        "nome": "Lastro",
        "uf": "PB",
        "ibge": 2508406,
        "lat": -6.50603,
        "lng": -38.1742
      },
      {
        "nome": "Livramento",
        "uf": "PB",
        "ibge": 2508505,
        "lat": -7.37113,
        "lng": -36.9491
      },
      {
        "nome": "Logradouro",
        "uf": "PB",
        "ibge": 2508554,
        "lat": -6.61191,
        "lng": -35.4384
      },
      {
        "nome": "Lucena",
        "uf": "PB",
        "ibge": 2508604,
        "lat": -6.90258,
        "lng": -34.8748
      },
      {
        "nome": "Mãe d'Água",
        "uf": "PB",
        "ibge": 2508703,
        "lat": -7.25201,
        "lng": -37.4322
      },
      {
        "nome": "Malta",
        "uf": "PB",
        "ibge": 2508802,
        "lat": -6.89719,
        "lng": -37.5221
      },
      {
        "nome": "Mamanguape",
        "uf": "PB",
        "ibge": 2508901,
        "lat": -6.8337,
        "lng": -35.1213
      },
      {
        "nome": "Manaíra",
        "uf": "PB",
        "ibge": 2509008,
        "lat": -7.70331,
        "lng": -38.1523
      },
      {
        "nome": "Marcação",
        "uf": "PB",
        "ibge": 2509057,
        "lat": -6.76535,
        "lng": -35.0087
      },
      {
        "nome": "Mari",
        "uf": "PB",
        "ibge": 2509107,
        "lat": -7.05942,
        "lng": -35.318
      },
      {
        "nome": "Marizópolis",
        "uf": "PB",
        "ibge": 2509156,
        "lat": -6.82748,
        "lng": -38.3528
      },
      {
        "nome": "Massaranduba",
        "uf": "PB",
        "ibge": 2509206,
        "lat": -7.18995,
        "lng": -35.7848
      },
      {
        "nome": "Mataraca",
        "uf": "PB",
        "ibge": 2509305,
        "lat": -6.59673,
        "lng": -35.0531
      },
      {
        "nome": "Matinhas",
        "uf": "PB",
        "ibge": 2509339,
        "lat": -7.12486,
        "lng": -35.7669
      },
      {
        "nome": "Mato Grosso",
        "uf": "PB",
        "ibge": 2509370,
        "lat": -6.54018,
        "lng": -37.7279
      },
      {
        "nome": "Maturéia",
        "uf": "PB",
        "ibge": 2509396,
        "lat": -7.26188,
        "lng": -37.351
      },
      {
        "nome": "Mogeiro",
        "uf": "PB",
        "ibge": 2509404,
        "lat": -7.28517,
        "lng": -35.4832
      },
      {
        "nome": "Montadas",
        "uf": "PB",
        "ibge": 2509503,
        "lat": -7.08848,
        "lng": -35.9592
      },
      {
        "nome": "Monte Horebe",
        "uf": "PB",
        "ibge": 2509602,
        "lat": -7.20402,
        "lng": -38.5838
      },
      {
        "nome": "Monteiro",
        "uf": "PB",
        "ibge": 2509701,
        "lat": -7.88363,
        "lng": -37.1184
      },
      {
        "nome": "Mulungu",
        "uf": "PB",
        "ibge": 2509800,
        "lat": -7.02525,
        "lng": -35.46
      },
      {
        "nome": "Natuba",
        "uf": "PB",
        "ibge": 2509909,
        "lat": -7.63514,
        "lng": -35.5586
      },
      {
        "nome": "Nazarezinho",
        "uf": "PB",
        "ibge": 2510006,
        "lat": -6.9114,
        "lng": -38.322
      },
      {
        "nome": "Nova Floresta",
        "uf": "PB",
        "ibge": 2510105,
        "lat": -6.45056,
        "lng": -36.2057
      },
      {
        "nome": "Nova Olinda",
        "uf": "PB",
        "ibge": 2510204,
        "lat": -7.47232,
        "lng": -38.0382
      },
      {
        "nome": "Nova Palmeira",
        "uf": "PB",
        "ibge": 2510303,
        "lat": -6.67122,
        "lng": -36.422
      },
      {
        "nome": "Olho d'Água",
        "uf": "PB",
        "ibge": 2510402,
        "lat": -7.22118,
        "lng": -37.7406
      },
      {
        "nome": "Olivedos",
        "uf": "PB",
        "ibge": 2510501,
        "lat": -6.98434,
        "lng": -36.241
      },
      {
        "nome": "Ouro Velho",
        "uf": "PB",
        "ibge": 2510600,
        "lat": -7.61604,
        "lng": -37.1519
      },
      {
        "nome": "Parari",
        "uf": "PB",
        "ibge": 2510659,
        "lat": -7.30975,
        "lng": -36.6522
      },
      {
        "nome": "Passagem",
        "uf": "PB",
        "ibge": 2510709,
        "lat": -7.13467,
        "lng": -37.0433
      },
      {
        "nome": "Patos",
        "uf": "PB",
        "ibge": 2510808,
        "lat": -7.01743,
        "lng": -37.2747
      },
      {
        "nome": "Paulista",
        "uf": "PB",
        "ibge": 2510907,
        "lat": -6.59138,
        "lng": -37.6185
      },
      {
        "nome": "Pedra Branca",
        "uf": "PB",
        "ibge": 2511004,
        "lat": -7.42169,
        "lng": -38.0689
      },
      {
        "nome": "Pedra Lavrada",
        "uf": "PB",
        "ibge": 2511103,
        "lat": -6.74997,
        "lng": -36.4758
      },
      {
        "nome": "Pedras de Fogo",
        "uf": "PB",
        "ibge": 2511202,
        "lat": -7.39107,
        "lng": -35.1065
      },
      {
        "nome": "Pedro Régis",
        "uf": "PB",
        "ibge": 2512721,
        "lat": -6.63323,
        "lng": -35.2966
      },
      {
        "nome": "Piancó",
        "uf": "PB",
        "ibge": 2511301,
        "lat": -7.19282,
        "lng": -37.9289
      },
      {
        "nome": "Picuí",
        "uf": "PB",
        "ibge": 2511400,
        "lat": -6.50845,
        "lng": -36.3497
      },
      {
        "nome": "Pilar",
        "uf": "PB",
        "ibge": 2511509,
        "lat": -7.26403,
        "lng": -35.2523
      },
      {
        "nome": "Pilões",
        "uf": "PB",
        "ibge": 2511608,
        "lat": -6.86827,
        "lng": -35.613
      },
      {
        "nome": "Pilõezinhos",
        "uf": "PB",
        "ibge": 2511707,
        "lat": -6.84277,
        "lng": -35.531
      },
      {
        "nome": "Pirpirituba",
        "uf": "PB",
        "ibge": 2511806,
        "lat": -6.77922,
        "lng": -35.4906
      },
      {
        "nome": "Pitimbu",
        "uf": "PB",
        "ibge": 2511905,
        "lat": -7.4664,
        "lng": -34.8151
      },
      {
        "nome": "Pocinhos",
        "uf": "PB",
        "ibge": 2512002,
        "lat": -7.06658,
        "lng": -36.0668
      },
      {
        "nome": "Poço Dantas",
        "uf": "PB",
        "ibge": 2512036,
        "lat": -6.39876,
        "lng": -38.4909
      },
      {
        "nome": "Poço de José de Moura",
        "uf": "PB",
        "ibge": 2512077,
        "lat": -6.56401,
        "lng": -38.5111
      },
      {
        "nome": "Pombal",
        "uf": "PB",
        "ibge": 2512101,
        "lat": -6.76606,
        "lng": -37.8003
      },
      {
        "nome": "Prata",
        "uf": "PB",
        "ibge": 2512200,
        "lat": -7.68826,
        "lng": -37.0801
      },
      {
        "nome": "Princesa Isabel",
        "uf": "PB",
        "ibge": 2512309,
        "lat": -7.73175,
        "lng": -37.9886
      },
      {
        "nome": "Puxinanã",
        "uf": "PB",
        "ibge": 2512408,
        "lat": -7.15479,
        "lng": -35.9543
      },
      {
        "nome": "Queimadas",
        "uf": "PB",
        "ibge": 2512507,
        "lat": -7.35029,
        "lng": -35.9031
      },
      {
        "nome": "Quixabá",
        "uf": "PB",
        "ibge": 2512606,
        "lat": -7.0224,
        "lng": -37.1458
      },
      {
        "nome": "Remígio",
        "uf": "PB",
        "ibge": 2512705,
        "lat": -6.94992,
        "lng": -35.8011
      },
      {
        "nome": "Riachão",
        "uf": "PB",
        "ibge": 2512747,
        "lat": -6.54269,
        "lng": -35.661
      },
      {
        "nome": "Riachão do Bacamarte",
        "uf": "PB",
        "ibge": 2512754,
        "lat": -7.25347,
        "lng": -35.6693
      },
      {
        "nome": "Riachão do Poço",
        "uf": "PB",
        "ibge": 2512762,
        "lat": -7.14173,
        "lng": -35.2914
      },
      {
        "nome": "Riacho de Santo Antônio",
        "uf": "PB",
        "ibge": 2512788,
        "lat": -7.68023,
        "lng": -36.157
      },
      {
        "nome": "Riacho dos Cavalos",
        "uf": "PB",
        "ibge": 2512804,
        "lat": -6.44067,
        "lng": -37.6483
      },
      {
        "nome": "Rio Tinto",
        "uf": "PB",
        "ibge": 2512903,
        "lat": -6.80383,
        "lng": -35.0776
      },
      {
        "nome": "Salgadinho",
        "uf": "PB",
        "ibge": 2513000,
        "lat": -7.10098,
        "lng": -36.8458
      },
      {
        "nome": "Salgado de São Félix",
        "uf": "PB",
        "ibge": 2513109,
        "lat": -7.35337,
        "lng": -35.4305
      },
      {
        "nome": "Santa Cecília",
        "uf": "PB",
        "ibge": 2513158,
        "lat": -7.7389,
        "lng": -35.8764
      },
      {
        "nome": "Santa Cruz",
        "uf": "PB",
        "ibge": 2513208,
        "lat": -6.5237,
        "lng": -38.0617
      },
      {
        "nome": "Santa Helena",
        "uf": "PB",
        "ibge": 2513307,
        "lat": -6.7176,
        "lng": -38.6427
      },
      {
        "nome": "Santa Inês",
        "uf": "PB",
        "ibge": 2513356,
        "lat": -7.621,
        "lng": -38.554
      },
      {
        "nome": "Santa Luzia",
        "uf": "PB",
        "ibge": 2513406,
        "lat": -6.86092,
        "lng": -36.9178
      },
      {
        "nome": "Santa Rita",
        "uf": "PB",
        "ibge": 2513703,
        "lat": -7.11724,
        "lng": -34.9753
      },
      {
        "nome": "Santa Teresinha",
        "uf": "PB",
        "ibge": 2513802,
        "lat": -7.07964,
        "lng": -37.4435
      },
      {
        "nome": "Santana de Mangueira",
        "uf": "PB",
        "ibge": 2513505,
        "lat": -7.54705,
        "lng": -38.3236
      },
      {
        "nome": "Santana dos Garrotes",
        "uf": "PB",
        "ibge": 2513604,
        "lat": -7.38162,
        "lng": -37.9819
      },
      {
        "nome": "Santo André",
        "uf": "PB",
        "ibge": 2513851,
        "lat": -7.22016,
        "lng": -36.6213
      },
      {
        "nome": "São Bentinho",
        "uf": "PB",
        "ibge": 2513927,
        "lat": -6.88596,
        "lng": -37.7243
      },
      {
        "nome": "São Bento",
        "uf": "PB",
        "ibge": 2513901,
        "lat": -6.48529,
        "lng": -37.4488
      },
      {
        "nome": "São Domingos",
        "uf": "PB",
        "ibge": 2513968,
        "lat": -6.80313,
        "lng": -37.9488
      },
      {
        "nome": "São Domingos do Cariri",
        "uf": "PB",
        "ibge": 2513943,
        "lat": -7.63273,
        "lng": -36.4374
      },
      {
        "nome": "São Francisco",
        "uf": "PB",
        "ibge": 2513984,
        "lat": -6.60773,
        "lng": -38.0968
      },
      {
        "nome": "São João do Cariri",
        "uf": "PB",
        "ibge": 2514008,
        "lat": -7.38168,
        "lng": -36.5345
      },
      {
        "nome": "São João do Rio do Peixe",
        "uf": "PB",
        "ibge": 2500700,
        "lat": -6.72195,
        "lng": -38.4468
      },
      {
        "nome": "São João do Tigre",
        "uf": "PB",
        "ibge": 2514107,
        "lat": -8.07703,
        "lng": -36.8547
      },
      {
        "nome": "São José da Lagoa Tapada",
        "uf": "PB",
        "ibge": 2514206,
        "lat": -6.93646,
        "lng": -38.1622
      },
      {
        "nome": "São José de Caiana",
        "uf": "PB",
        "ibge": 2514305,
        "lat": -7.24636,
        "lng": -38.2989
      },
      {
        "nome": "São José de Espinharas",
        "uf": "PB",
        "ibge": 2514404,
        "lat": -6.83974,
        "lng": -37.3214
      },
      {
        "nome": "São José de Piranhas",
        "uf": "PB",
        "ibge": 2514503,
        "lat": -7.1187,
        "lng": -38.502
      },
      {
        "nome": "São José de Princesa",
        "uf": "PB",
        "ibge": 2514552,
        "lat": -7.73633,
        "lng": -38.0894
      },
      {
        "nome": "São José do Bonfim",
        "uf": "PB",
        "ibge": 2514602,
        "lat": -7.1607,
        "lng": -37.3036
      },
      {
        "nome": "São José do Brejo do Cruz",
        "uf": "PB",
        "ibge": 2514651,
        "lat": -6.21054,
        "lng": -37.3601
      },
      {
        "nome": "São José do Sabugi",
        "uf": "PB",
        "ibge": 2514701,
        "lat": -6.76295,
        "lng": -36.7972
      },
      {
        "nome": "São José dos Cordeiros",
        "uf": "PB",
        "ibge": 2514800,
        "lat": -7.38775,
        "lng": -36.8085
      },
      {
        "nome": "São José dos Ramos",
        "uf": "PB",
        "ibge": 2514453,
        "lat": -7.25238,
        "lng": -35.3725
      },
      {
        "nome": "São Mamede",
        "uf": "PB",
        "ibge": 2514909,
        "lat": -6.92386,
        "lng": -37.0954
      },
      {
        "nome": "São Miguel de Taipu",
        "uf": "PB",
        "ibge": 2515005,
        "lat": -7.24764,
        "lng": -35.2016
      },
      {
        "nome": "São Sebastião de Lagoa de Roça",
        "uf": "PB",
        "ibge": 2515104,
        "lat": -7.11034,
        "lng": -35.8678
      },
      {
        "nome": "São Sebastião do Umbuzeiro",
        "uf": "PB",
        "ibge": 2515203,
        "lat": -8.15289,
        "lng": -37.0138
      },
      {
        "nome": "São Vicente do Seridó",
        "uf": "PB",
        "ibge": 2515401,
        "lat": -6.85426,
        "lng": -36.4122
      },
      {
        "nome": "Sapé",
        "uf": "PB",
        "ibge": 2515302,
        "lat": -7.09359,
        "lng": -35.228
      },
      {
        "nome": "Serra Branca",
        "uf": "PB",
        "ibge": 2515500,
        "lat": -7.48034,
        "lng": -36.666
      },
      {
        "nome": "Serra da Raiz",
        "uf": "PB",
        "ibge": 2515609,
        "lat": -6.68527,
        "lng": -35.4379
      },
      {
        "nome": "Serra Grande",
        "uf": "PB",
        "ibge": 2515708,
        "lat": -7.20957,
        "lng": -38.3647
      },
      {
        "nome": "Serra Redonda",
        "uf": "PB",
        "ibge": 2515807,
        "lat": -7.18622,
        "lng": -35.6842
      },
      {
        "nome": "Serraria",
        "uf": "PB",
        "ibge": 2515906,
        "lat": -6.81569,
        "lng": -35.6282
      },
      {
        "nome": "Sertãozinho",
        "uf": "PB",
        "ibge": 2515930,
        "lat": -6.75127,
        "lng": -35.4372
      },
      {
        "nome": "Sobrado",
        "uf": "PB",
        "ibge": 2515971,
        "lat": -7.14429,
        "lng": -35.2357
      },
      {
        "nome": "Solânea",
        "uf": "PB",
        "ibge": 2516003,
        "lat": -6.75161,
        "lng": -35.6636
      },
      {
        "nome": "Soledade",
        "uf": "PB",
        "ibge": 2516102,
        "lat": -7.05829,
        "lng": -36.3668
      },
      {
        "nome": "Sossêgo",
        "uf": "PB",
        "ibge": 2516151,
        "lat": -6.77067,
        "lng": -36.2538
      },
      {
        "nome": "Sousa",
        "uf": "PB",
        "ibge": 2516201,
        "lat": -6.75148,
        "lng": -38.2311
      },
      {
        "nome": "Sumé",
        "uf": "PB",
        "ibge": 2516300,
        "lat": -7.66206,
        "lng": -36.884
      },
      {
        "nome": "Tacima",
        "uf": "PB",
        "ibge": 2516409,
        "lat": -6.48759,
        "lng": -35.6367
      },
      {
        "nome": "Taperoá",
        "uf": "PB",
        "ibge": 2516508,
        "lat": -7.20629,
        "lng": -36.8245
      },
      {
        "nome": "Tavares",
        "uf": "PB",
        "ibge": 2516607,
        "lat": -7.62697,
        "lng": -37.8712
      },
      {
        "nome": "Teixeira",
        "uf": "PB",
        "ibge": 2516706,
        "lat": -7.22104,
        "lng": -37.2525
      },
      {
        "nome": "Tenório",
        "uf": "PB",
        "ibge": 2516755,
        "lat": -6.93855,
        "lng": -36.6273
      },
      {
        "nome": "Triunfo",
        "uf": "PB",
        "ibge": 2516805,
        "lat": -6.5713,
        "lng": -38.5986
      },
      {
        "nome": "Uiraúna",
        "uf": "PB",
        "ibge": 2516904,
        "lat": -6.51504,
        "lng": -38.4128
      },
      {
        "nome": "Umbuzeiro",
        "uf": "PB",
        "ibge": 2517001,
        "lat": -7.69199,
        "lng": -35.6582
      },
      {
        "nome": "Várzea",
        "uf": "PB",
        "ibge": 2517100,
        "lat": -6.76189,
        "lng": -36.9913
      },
      {
        "nome": "Vieirópolis",
        "uf": "PB",
        "ibge": 2517209,
        "lat": -6.50684,
        "lng": -38.2567
      },
      {
        "nome": "Vista Serrana",
        "uf": "PB",
        "ibge": 2505501,
        "lat": -6.7303,
        "lng": -37.5704
      },
      {
        "nome": "Zabelê",
        "uf": "PB",
        "ibge": 2517407,
        "lat": -8.07901,
        "lng": -37.1057
      }
    ],
    "capital": {
      "nome": "João Pessoa",
      "uf": "PB",
      "ibge": 2507507,
      "lat": -7.11509,
      "lng": -34.8641
    }
  },
  "PE": {
    "nome": "Pernambuco",
    "ibge": 26,
    "cidades": [
      {
        "nome": "Abreu e Lima",
        "uf": "PE",
        "ibge": 2600054,
        "lat": -7.90072,
        "lng": -34.8984
      },
      {
        "nome": "Afogados da Ingazeira",
        "uf": "PE",
        "ibge": 2600104,
        "lat": -7.74312,
        "lng": -37.631
      },
      {
        "nome": "Afrânio",
        "uf": "PE",
        "ibge": 2600203,
        "lat": -8.51136,
        "lng": -41.0095
      },
      {
        "nome": "Agrestina",
        "uf": "PE",
        "ibge": 2600302,
        "lat": -8.45966,
        "lng": -35.9447
      },
      {
        "nome": "Água Preta",
        "uf": "PE",
        "ibge": 2600401,
        "lat": -8.70609,
        "lng": -35.5263
      },
      {
        "nome": "Águas Belas",
        "uf": "PE",
        "ibge": 2600500,
        "lat": -9.11125,
        "lng": -37.1226
      },
      {
        "nome": "Alagoinha",
        "uf": "PE",
        "ibge": 2600609,
        "lat": -8.4665,
        "lng": -36.7788
      },
      {
        "nome": "Aliança",
        "uf": "PE",
        "ibge": 2600708,
        "lat": -7.60398,
        "lng": -35.2227
      },
      {
        "nome": "Altinho",
        "uf": "PE",
        "ibge": 2600807,
        "lat": -8.48482,
        "lng": -36.0644
      },
      {
        "nome": "Amaraji",
        "uf": "PE",
        "ibge": 2600906,
        "lat": -8.37691,
        "lng": -35.4501
      },
      {
        "nome": "Angelim",
        "uf": "PE",
        "ibge": 2601003,
        "lat": -8.88429,
        "lng": -36.2902
      },
      {
        "nome": "Araçoiaba",
        "uf": "PE",
        "ibge": 2601052,
        "lat": -7.78391,
        "lng": -35.0809
      },
      {
        "nome": "Araripina",
        "uf": "PE",
        "ibge": 2601102,
        "lat": -7.57073,
        "lng": -40.494
      },
      {
        "nome": "Arcoverde",
        "uf": "PE",
        "ibge": 2601201,
        "lat": -8.41519,
        "lng": -37.0577
      },
      {
        "nome": "Barra de Guabiraba",
        "uf": "PE",
        "ibge": 2601300,
        "lat": -8.42075,
        "lng": -35.6585
      },
      {
        "nome": "Barreiros",
        "uf": "PE",
        "ibge": 2601409,
        "lat": -8.81605,
        "lng": -35.1832
      },
      {
        "nome": "Belém de Maria",
        "uf": "PE",
        "ibge": 2601508,
        "lat": -8.62504,
        "lng": -35.8335
      },
      {
        "nome": "Belém do São Francisco",
        "uf": "PE",
        "ibge": 2601607,
        "lat": -8.75046,
        "lng": -38.9623
      },
      {
        "nome": "Belo Jardim",
        "uf": "PE",
        "ibge": 2601706,
        "lat": -8.3313,
        "lng": -36.4258
      },
      {
        "nome": "Betânia",
        "uf": "PE",
        "ibge": 2601805,
        "lat": -8.26787,
        "lng": -38.0345
      },
      {
        "nome": "Bezerros",
        "uf": "PE",
        "ibge": 2601904,
        "lat": -8.2328,
        "lng": -35.796
      },
      {
        "nome": "Bodocó",
        "uf": "PE",
        "ibge": 2602001,
        "lat": -7.77759,
        "lng": -39.9338
      },
      {
        "nome": "Bom Conselho",
        "uf": "PE",
        "ibge": 2602100,
        "lat": -9.16919,
        "lng": -36.6857
      },
      {
        "nome": "Bom Jardim",
        "uf": "PE",
        "ibge": 2602209,
        "lat": -7.79695,
        "lng": -35.5784
      },
      {
        "nome": "Bonito",
        "uf": "PE",
        "ibge": 2602308,
        "lat": -8.47163,
        "lng": -35.7292
      },
      {
        "nome": "Brejão",
        "uf": "PE",
        "ibge": 2602407,
        "lat": -9.02915,
        "lng": -36.566
      },
      {
        "nome": "Brejinho",
        "uf": "PE",
        "ibge": 2602506,
        "lat": -7.34694,
        "lng": -37.2865
      },
      {
        "nome": "Brejo da Madre de Deus",
        "uf": "PE",
        "ibge": 2602605,
        "lat": -8.14933,
        "lng": -36.3741
      },
      {
        "nome": "Buenos Aires",
        "uf": "PE",
        "ibge": 2602704,
        "lat": -7.72449,
        "lng": -35.3182
      },
      {
        "nome": "Buíque",
        "uf": "PE",
        "ibge": 2602803,
        "lat": -8.61954,
        "lng": -37.1606
      },
      {
        "nome": "Cabo de Santo Agostinho",
        "uf": "PE",
        "ibge": 2602902,
        "lat": -8.28218,
        "lng": -35.0253
      },
      {
        "nome": "Cabrobó",
        "uf": "PE",
        "ibge": 2603009,
        "lat": -8.50548,
        "lng": -39.3094
      },
      {
        "nome": "Cachoeirinha",
        "uf": "PE",
        "ibge": 2603108,
        "lat": -8.48668,
        "lng": -36.2402
      },
      {
        "nome": "Caetés",
        "uf": "PE",
        "ibge": 2603207,
        "lat": -8.7803,
        "lng": -36.6268
      },
      {
        "nome": "Calçado",
        "uf": "PE",
        "ibge": 2603306,
        "lat": -8.73108,
        "lng": -36.3366
      },
      {
        "nome": "Calumbi",
        "uf": "PE",
        "ibge": 2603405,
        "lat": -7.93551,
        "lng": -38.1482
      },
      {
        "nome": "Camaragibe",
        "uf": "PE",
        "ibge": 2603454,
        "lat": -8.02351,
        "lng": -34.9782
      },
      {
        "nome": "Camocim de São Félix",
        "uf": "PE",
        "ibge": 2603504,
        "lat": -8.35865,
        "lng": -35.7653
      },
      {
        "nome": "Camutanga",
        "uf": "PE",
        "ibge": 2603603,
        "lat": -7.40545,
        "lng": -35.2664
      },
      {
        "nome": "Canhotinho",
        "uf": "PE",
        "ibge": 2603702,
        "lat": -8.87652,
        "lng": -36.1979
      },
      {
        "nome": "Capoeiras",
        "uf": "PE",
        "ibge": 2603801,
        "lat": -8.73423,
        "lng": -36.6306
      },
      {
        "nome": "Carnaíba",
        "uf": "PE",
        "ibge": 2603900,
        "lat": -7.79342,
        "lng": -37.7946
      },
      {
        "nome": "Carnaubeira da Penha",
        "uf": "PE",
        "ibge": 2603926,
        "lat": -8.31799,
        "lng": -38.7512
      },
      {
        "nome": "Carpina",
        "uf": "PE",
        "ibge": 2604007,
        "lat": -7.84566,
        "lng": -35.2514
      },
      {
        "nome": "Caruaru",
        "uf": "PE",
        "ibge": 2604106,
        "lat": -8.28455,
        "lng": -35.9699
      },
      {
        "nome": "Casinhas",
        "uf": "PE",
        "ibge": 2604155,
        "lat": -7.74084,
        "lng": -35.7206
      },
      {
        "nome": "Catende",
        "uf": "PE",
        "ibge": 2604205,
        "lat": -8.67509,
        "lng": -35.7024
      },
      {
        "nome": "Cedro",
        "uf": "PE",
        "ibge": 2604304,
        "lat": -7.71179,
        "lng": -39.2367
      },
      {
        "nome": "Chã de Alegria",
        "uf": "PE",
        "ibge": 2604403,
        "lat": -8.00679,
        "lng": -35.204
      },
      {
        "nome": "Chã Grande",
        "uf": "PE",
        "ibge": 2604502,
        "lat": -8.23827,
        "lng": -35.4571
      },
      {
        "nome": "Condado",
        "uf": "PE",
        "ibge": 2604601,
        "lat": -7.58787,
        "lng": -35.0999
      },
      {
        "nome": "Correntes",
        "uf": "PE",
        "ibge": 2604700,
        "lat": -9.12117,
        "lng": -36.3244
      },
      {
        "nome": "Cortês",
        "uf": "PE",
        "ibge": 2604809,
        "lat": -8.47443,
        "lng": -35.5468
      },
      {
        "nome": "Cumaru",
        "uf": "PE",
        "ibge": 2604908,
        "lat": -8.00827,
        "lng": -35.6957
      },
      {
        "nome": "Cupira",
        "uf": "PE",
        "ibge": 2605004,
        "lat": -8.62432,
        "lng": -35.9518
      },
      {
        "nome": "Custódia",
        "uf": "PE",
        "ibge": 2605103,
        "lat": -8.08546,
        "lng": -37.6443
      },
      {
        "nome": "Dormentes",
        "uf": "PE",
        "ibge": 2605152,
        "lat": -8.44116,
        "lng": -40.7662
      },
      {
        "nome": "Escada",
        "uf": "PE",
        "ibge": 2605202,
        "lat": -8.35672,
        "lng": -35.2241
      },
      {
        "nome": "Exu",
        "uf": "PE",
        "ibge": 2605301,
        "lat": -7.50364,
        "lng": -39.7238
      },
      {
        "nome": "Feira Nova",
        "uf": "PE",
        "ibge": 2605400,
        "lat": -7.94704,
        "lng": -35.3801
      },
      {
        "nome": "Fernando de Noronha",
        "uf": "PE",
        "ibge": 2605459,
        "lat": -3.8396,
        "lng": -32.4107
      },
      {
        "nome": "Ferreiros",
        "uf": "PE",
        "ibge": 2605509,
        "lat": -7.44666,
        "lng": -35.2373
      },
      {
        "nome": "Flores",
        "uf": "PE",
        "ibge": 2605608,
        "lat": -7.85842,
        "lng": -37.9715
      },
      {
        "nome": "Floresta",
        "uf": "PE",
        "ibge": 2605707,
        "lat": -8.60307,
        "lng": -38.5687
      },
      {
        "nome": "Frei Miguelinho",
        "uf": "PE",
        "ibge": 2605806,
        "lat": -7.93918,
        "lng": -35.9113
      },
      {
        "nome": "Gameleira",
        "uf": "PE",
        "ibge": 2605905,
        "lat": -8.5798,
        "lng": -35.3846
      },
      {
        "nome": "Garanhuns",
        "uf": "PE",
        "ibge": 2606002,
        "lat": -8.88243,
        "lng": -36.4966
      },
      {
        "nome": "Glória do Goitá",
        "uf": "PE",
        "ibge": 2606101,
        "lat": -8.00568,
        "lng": -35.2904
      },
      {
        "nome": "Goiana",
        "uf": "PE",
        "ibge": 2606200,
        "lat": -7.5606,
        "lng": -34.9959
      },
      {
        "nome": "Granito",
        "uf": "PE",
        "ibge": 2606309,
        "lat": -7.70711,
        "lng": -39.615
      },
      {
        "nome": "Gravatá",
        "uf": "PE",
        "ibge": 2606408,
        "lat": -8.21118,
        "lng": -35.5675
      },
      {
        "nome": "Iati",
        "uf": "PE",
        "ibge": 2606507,
        "lat": -9.04559,
        "lng": -36.8498
      },
      {
        "nome": "Ibimirim",
        "uf": "PE",
        "ibge": 2606606,
        "lat": -8.54026,
        "lng": -37.7032
      },
      {
        "nome": "Ibirajuba",
        "uf": "PE",
        "ibge": 2606705,
        "lat": -8.57633,
        "lng": -36.1812
      },
      {
        "nome": "Igarassu",
        "uf": "PE",
        "ibge": 2606804,
        "lat": -7.82881,
        "lng": -34.9013
      },
      {
        "nome": "Iguaracy",
        "uf": "PE",
        "ibge": 2606903,
        "lat": -7.83222,
        "lng": -37.5082
      },
      {
        "nome": "Ilha de Itamaracá",
        "uf": "PE",
        "ibge": 2607604,
        "lat": -7.74766,
        "lng": -34.8303
      },
      {
        "nome": "Inajá",
        "uf": "PE",
        "ibge": 2607000,
        "lat": -8.90206,
        "lng": -37.8351
      },
      {
        "nome": "Ingazeira",
        "uf": "PE",
        "ibge": 2607109,
        "lat": -7.66909,
        "lng": -37.4576
      },
      {
        "nome": "Ipojuca",
        "uf": "PE",
        "ibge": 2607208,
        "lat": -8.39303,
        "lng": -35.0609
      },
      {
        "nome": "Ipubi",
        "uf": "PE",
        "ibge": 2607307,
        "lat": -7.64505,
        "lng": -40.1476
      },
      {
        "nome": "Itacuruba",
        "uf": "PE",
        "ibge": 2607406,
        "lat": -8.82231,
        "lng": -38.6975
      },
      {
        "nome": "Itaíba",
        "uf": "PE",
        "ibge": 2607505,
        "lat": -8.94569,
        "lng": -37.4173
      },
      {
        "nome": "Itambé",
        "uf": "PE",
        "ibge": 2607653,
        "lat": -7.41403,
        "lng": -35.0963
      },
      {
        "nome": "Itapetim",
        "uf": "PE",
        "ibge": 2607703,
        "lat": -7.37178,
        "lng": -37.1863
      },
      {
        "nome": "Itapissuma",
        "uf": "PE",
        "ibge": 2607752,
        "lat": -7.76798,
        "lng": -34.8971
      },
      {
        "nome": "Itaquitinga",
        "uf": "PE",
        "ibge": 2607802,
        "lat": -7.66373,
        "lng": -35.1002
      },
      {
        "nome": "Jaboatão dos Guararapes",
        "uf": "PE",
        "ibge": 2607901,
        "lat": -8.11298,
        "lng": -35.015
      },
      {
        "nome": "Jaqueira",
        "uf": "PE",
        "ibge": 2607950,
        "lat": -8.72618,
        "lng": -35.7942
      },
      {
        "nome": "Jataúba",
        "uf": "PE",
        "ibge": 2608008,
        "lat": -7.97668,
        "lng": -36.4943
      },
      {
        "nome": "Jatobá",
        "uf": "PE",
        "ibge": 2608057,
        "lat": -9.17476,
        "lng": -38.2607
      },
      {
        "nome": "João Alfredo",
        "uf": "PE",
        "ibge": 2608107,
        "lat": -7.86565,
        "lng": -35.5787
      },
      {
        "nome": "Joaquim Nabuco",
        "uf": "PE",
        "ibge": 2608206,
        "lat": -8.62281,
        "lng": -35.5288
      },
      {
        "nome": "Jucati",
        "uf": "PE",
        "ibge": 2608255,
        "lat": -8.70195,
        "lng": -36.4871
      },
      {
        "nome": "Jupi",
        "uf": "PE",
        "ibge": 2608305,
        "lat": -8.70904,
        "lng": -36.4126
      },
      {
        "nome": "Jurema",
        "uf": "PE",
        "ibge": 2608404,
        "lat": -8.70714,
        "lng": -36.1347
      },
      {
        "nome": "Lagoa de Itaenga",
        "uf": "PE",
        "ibge": 2608503,
        "lat": -7.93005,
        "lng": -35.2874
      },
      {
        "nome": "Lagoa do Carro",
        "uf": "PE",
        "ibge": 2608453,
        "lat": -7.84383,
        "lng": -35.3108
      },
      {
        "nome": "Lagoa do Ouro",
        "uf": "PE",
        "ibge": 2608602,
        "lat": -9.12567,
        "lng": -36.4584
      },
      {
        "nome": "Lagoa dos Gatos",
        "uf": "PE",
        "ibge": 2608701,
        "lat": -8.6602,
        "lng": -35.904
      },
      {
        "nome": "Lagoa Grande",
        "uf": "PE",
        "ibge": 2608750,
        "lat": -8.99452,
        "lng": -40.2767
      },
      {
        "nome": "Lajedo",
        "uf": "PE",
        "ibge": 2608800,
        "lat": -8.65791,
        "lng": -36.3293
      },
      {
        "nome": "Limoeiro",
        "uf": "PE",
        "ibge": 2608909,
        "lat": -7.8726,
        "lng": -35.4402
      },
      {
        "nome": "Macaparana",
        "uf": "PE",
        "ibge": 2609006,
        "lat": -7.55564,
        "lng": -35.4425
      },
      {
        "nome": "Machados",
        "uf": "PE",
        "ibge": 2609105,
        "lat": -7.68827,
        "lng": -35.5114
      },
      {
        "nome": "Manari",
        "uf": "PE",
        "ibge": 2609154,
        "lat": -8.9649,
        "lng": -37.6313
      },
      {
        "nome": "Maraial",
        "uf": "PE",
        "ibge": 2609204,
        "lat": -8.79062,
        "lng": -35.8266
      },
      {
        "nome": "Mirandiba",
        "uf": "PE",
        "ibge": 2609303,
        "lat": -8.12113,
        "lng": -38.7388
      },
      {
        "nome": "Moreilândia",
        "uf": "PE",
        "ibge": 2614303,
        "lat": -7.61931,
        "lng": -39.546
      },
      {
        "nome": "Moreno",
        "uf": "PE",
        "ibge": 2609402,
        "lat": -8.10871,
        "lng": -35.0835
      },
      {
        "nome": "Nazaré da Mata",
        "uf": "PE",
        "ibge": 2609501,
        "lat": -7.74149,
        "lng": -35.2193
      },
      {
        "nome": "Olinda",
        "uf": "PE",
        "ibge": 2609600,
        "lat": -8.01017,
        "lng": -34.8545
      },
      {
        "nome": "Orobó",
        "uf": "PE",
        "ibge": 2609709,
        "lat": -7.74553,
        "lng": -35.5956
      },
      {
        "nome": "Orocó",
        "uf": "PE",
        "ibge": 2609808,
        "lat": -8.61026,
        "lng": -39.6026
      },
      {
        "nome": "Ouricuri",
        "uf": "PE",
        "ibge": 2609907,
        "lat": -7.87918,
        "lng": -40.08
      },
      {
        "nome": "Palmares",
        "uf": "PE",
        "ibge": 2610004,
        "lat": -8.68423,
        "lng": -35.589
      },
      {
        "nome": "Palmeirina",
        "uf": "PE",
        "ibge": 2610103,
        "lat": -9.0109,
        "lng": -36.3242
      },
      {
        "nome": "Panelas",
        "uf": "PE",
        "ibge": 2610202,
        "lat": -8.66121,
        "lng": -36.0125
      },
      {
        "nome": "Paranatama",
        "uf": "PE",
        "ibge": 2610301,
        "lat": -8.91875,
        "lng": -36.6549
      },
      {
        "nome": "Parnamirim",
        "uf": "PE",
        "ibge": 2610400,
        "lat": -8.08729,
        "lng": -39.5795
      },
      {
        "nome": "Passira",
        "uf": "PE",
        "ibge": 2610509,
        "lat": -7.9971,
        "lng": -35.5813
      },
      {
        "nome": "Paudalho",
        "uf": "PE",
        "ibge": 2610608,
        "lat": -7.90287,
        "lng": -35.1716
      },
      {
        "nome": "Paulista",
        "uf": "PE",
        "ibge": 2610707,
        "lat": -7.93401,
        "lng": -34.8684
      },
      {
        "nome": "Pedra",
        "uf": "PE",
        "ibge": 2610806,
        "lat": -8.49641,
        "lng": -36.94
      },
      {
        "nome": "Pesqueira",
        "uf": "PE",
        "ibge": 2610905,
        "lat": -8.35797,
        "lng": -36.6978
      },
      {
        "nome": "Petrolândia",
        "uf": "PE",
        "ibge": 2611002,
        "lat": -9.06863,
        "lng": -38.3027
      },
      {
        "nome": "Petrolina",
        "uf": "PE",
        "ibge": 2611101,
        "lat": -9.38866,
        "lng": -40.5027
      },
      {
        "nome": "Poção",
        "uf": "PE",
        "ibge": 2611200,
        "lat": -8.18726,
        "lng": -36.7111
      },
      {
        "nome": "Pombos",
        "uf": "PE",
        "ibge": 2611309,
        "lat": -8.13982,
        "lng": -35.3967
      },
      {
        "nome": "Primavera",
        "uf": "PE",
        "ibge": 2611408,
        "lat": -8.32999,
        "lng": -35.3544
      },
      {
        "nome": "Quipapá",
        "uf": "PE",
        "ibge": 2611507,
        "lat": -8.81175,
        "lng": -36.0137
      },
      {
        "nome": "Quixaba",
        "uf": "PE",
        "ibge": 2611533,
        "lat": -7.70734,
        "lng": -37.8446
      },
      {
        "nome": "Riacho das Almas",
        "uf": "PE",
        "ibge": 2611705,
        "lat": -8.13742,
        "lng": -35.8648
      },
      {
        "nome": "Ribeirão",
        "uf": "PE",
        "ibge": 2611804,
        "lat": -8.50957,
        "lng": -35.3698
      },
      {
        "nome": "Rio Formoso",
        "uf": "PE",
        "ibge": 2611903,
        "lat": -8.6592,
        "lng": -35.1532
      },
      {
        "nome": "Sairé",
        "uf": "PE",
        "ibge": 2612000,
        "lat": -8.32864,
        "lng": -35.6967
      },
      {
        "nome": "Salgadinho",
        "uf": "PE",
        "ibge": 2612109,
        "lat": -7.9269,
        "lng": -35.6503
      },
      {
        "nome": "Salgueiro",
        "uf": "PE",
        "ibge": 2612208,
        "lat": -8.07373,
        "lng": -39.1247
      },
      {
        "nome": "Saloá",
        "uf": "PE",
        "ibge": 2612307,
        "lat": -8.9723,
        "lng": -36.691
      },
      {
        "nome": "Sanharó",
        "uf": "PE",
        "ibge": 2612406,
        "lat": -8.36097,
        "lng": -36.5696
      },
      {
        "nome": "Santa Cruz",
        "uf": "PE",
        "ibge": 2612455,
        "lat": -8.24153,
        "lng": -40.3434
      },
      {
        "nome": "Santa Cruz da Baixa Verde",
        "uf": "PE",
        "ibge": 2612471,
        "lat": -7.81339,
        "lng": -38.1476
      },
      {
        "nome": "Santa Cruz do Capibaribe",
        "uf": "PE",
        "ibge": 2612505,
        "lat": -7.94802,
        "lng": -36.2061
      },
      {
        "nome": "Santa Filomena",
        "uf": "PE",
        "ibge": 2612554,
        "lat": -8.16688,
        "lng": -40.6079
      },
      {
        "nome": "Santa Maria da Boa Vista",
        "uf": "PE",
        "ibge": 2612604,
        "lat": -8.79766,
        "lng": -39.8241
      },
      {
        "nome": "Santa Maria do Cambucá",
        "uf": "PE",
        "ibge": 2612703,
        "lat": -7.83676,
        "lng": -35.8941
      },
      {
        "nome": "Santa Terezinha",
        "uf": "PE",
        "ibge": 2612802,
        "lat": -7.37696,
        "lng": -37.4787
      },
      {
        "nome": "São Benedito do Sul",
        "uf": "PE",
        "ibge": 2612901,
        "lat": -8.8166,
        "lng": -35.9453
      },
      {
        "nome": "São Bento do Una",
        "uf": "PE",
        "ibge": 2613008,
        "lat": -8.52637,
        "lng": -36.4465
      },
      {
        "nome": "São Caetano",
        "uf": "PE",
        "ibge": 2613107,
        "lat": -8.33763,
        "lng": -36.2869
      },
      {
        "nome": "São João",
        "uf": "PE",
        "ibge": 2613206,
        "lat": -8.87576,
        "lng": -36.3653
      },
      {
        "nome": "São Joaquim do Monte",
        "uf": "PE",
        "ibge": 2613305,
        "lat": -8.43196,
        "lng": -35.8035
      },
      {
        "nome": "São José da Coroa Grande",
        "uf": "PE",
        "ibge": 2613404,
        "lat": -8.88937,
        "lng": -35.1515
      },
      {
        "nome": "São José do Belmonte",
        "uf": "PE",
        "ibge": 2613503,
        "lat": -7.85723,
        "lng": -38.7577
      },
      {
        "nome": "São José do Egito",
        "uf": "PE",
        "ibge": 2613602,
        "lat": -7.46945,
        "lng": -37.274
      },
      {
        "nome": "São Lourenço da Mata",
        "uf": "PE",
        "ibge": 2613701,
        "lat": -8.00684,
        "lng": -35.0124
      },
      {
        "nome": "São Vicente Ferrer",
        "uf": "PE",
        "ibge": 2613800,
        "lat": -7.58969,
        "lng": -35.4808
      },
      {
        "nome": "Serra Talhada",
        "uf": "PE",
        "ibge": 2613909,
        "lat": -7.98178,
        "lng": -38.289
      },
      {
        "nome": "Serrita",
        "uf": "PE",
        "ibge": 2614006,
        "lat": -7.94041,
        "lng": -39.2951
      },
      {
        "nome": "Sertânia",
        "uf": "PE",
        "ibge": 2614105,
        "lat": -8.06847,
        "lng": -37.2684
      },
      {
        "nome": "Sirinhaém",
        "uf": "PE",
        "ibge": 2614204,
        "lat": -8.58778,
        "lng": -35.1126
      },
      {
        "nome": "Solidão",
        "uf": "PE",
        "ibge": 2614402,
        "lat": -7.59472,
        "lng": -37.6445
      },
      {
        "nome": "Surubim",
        "uf": "PE",
        "ibge": 2614501,
        "lat": -7.84746,
        "lng": -35.7481
      },
      {
        "nome": "Tabira",
        "uf": "PE",
        "ibge": 2614600,
        "lat": -7.58366,
        "lng": -37.5377
      },
      {
        "nome": "Tacaimbó",
        "uf": "PE",
        "ibge": 2614709,
        "lat": -8.30867,
        "lng": -36.3
      },
      {
        "nome": "Tacaratu",
        "uf": "PE",
        "ibge": 2614808,
        "lat": -9.09798,
        "lng": -38.1504
      },
      {
        "nome": "Tamandaré",
        "uf": "PE",
        "ibge": 2614857,
        "lat": -8.75665,
        "lng": -35.1033
      },
      {
        "nome": "Taquaritinga do Norte",
        "uf": "PE",
        "ibge": 2615003,
        "lat": -7.89446,
        "lng": -36.0423
      },
      {
        "nome": "Terezinha",
        "uf": "PE",
        "ibge": 2615102,
        "lat": -9.05621,
        "lng": -36.6272
      },
      {
        "nome": "Terra Nova",
        "uf": "PE",
        "ibge": 2615201,
        "lat": -8.22244,
        "lng": -39.3825
      },
      {
        "nome": "Timbaúba",
        "uf": "PE",
        "ibge": 2615300,
        "lat": -7.50484,
        "lng": -35.3119
      },
      {
        "nome": "Toritama",
        "uf": "PE",
        "ibge": 2615409,
        "lat": -8.00955,
        "lng": -36.0637
      },
      {
        "nome": "Tracunhaém",
        "uf": "PE",
        "ibge": 2615508,
        "lat": -7.80228,
        "lng": -35.2314
      },
      {
        "nome": "Trindade",
        "uf": "PE",
        "ibge": 2615607,
        "lat": -7.759,
        "lng": -40.2647
      },
      {
        "nome": "Triunfo",
        "uf": "PE",
        "ibge": 2615706,
        "lat": -7.83272,
        "lng": -38.0978
      },
      {
        "nome": "Tupanatinga",
        "uf": "PE",
        "ibge": 2615805,
        "lat": -8.74798,
        "lng": -37.3445
      },
      {
        "nome": "Tuparetama",
        "uf": "PE",
        "ibge": 2615904,
        "lat": -7.6003,
        "lng": -37.3165
      },
      {
        "nome": "Venturosa",
        "uf": "PE",
        "ibge": 2616001,
        "lat": -8.57885,
        "lng": -36.8742
      },
      {
        "nome": "Verdejante",
        "uf": "PE",
        "ibge": 2616100,
        "lat": -7.92235,
        "lng": -38.9701
      },
      {
        "nome": "Vertente do Lério",
        "uf": "PE",
        "ibge": 2616183,
        "lat": -7.77084,
        "lng": -35.8491
      },
      {
        "nome": "Vertentes",
        "uf": "PE",
        "ibge": 2616209,
        "lat": -7.90158,
        "lng": -35.9681
      },
      {
        "nome": "Vicência",
        "uf": "PE",
        "ibge": 2616308,
        "lat": -7.65655,
        "lng": -35.3139
      },
      {
        "nome": "Vitória de Santo Antão",
        "uf": "PE",
        "ibge": 2616407,
        "lat": -8.12819,
        "lng": -35.2976
      },
      {
        "nome": "Xexéu",
        "uf": "PE",
        "ibge": 2616506,
        "lat": -8.8046,
        "lng": -35.6212
      }
    ],
    "capital": {
      "nome": "Recife",
      "uf": "PE",
      "ibge": 2611606,
      "lat": -8.04666,
      "lng": -34.8771
    }
  },
  "AL": {
    "nome": "Alagoas",
    "ibge": 27,
    "cidades": [
      {
        "nome": "Água Branca",
        "uf": "AL",
        "ibge": 2700102,
        "lat": -9.262,
        "lng": -37.938
      },
      {
        "nome": "Anadia",
        "uf": "AL",
        "ibge": 2700201,
        "lat": -9.68489,
        "lng": -36.3078
      },
      {
        "nome": "Arapiraca",
        "uf": "AL",
        "ibge": 2700300,
        "lat": -9.75487,
        "lng": -36.6615
      },
      {
        "nome": "Atalaia",
        "uf": "AL",
        "ibge": 2700409,
        "lat": -9.5119,
        "lng": -36.0086
      },
      {
        "nome": "Barra de Santo Antônio",
        "uf": "AL",
        "ibge": 2700508,
        "lat": -9.4023,
        "lng": -35.5101
      },
      {
        "nome": "Barra de São Miguel",
        "uf": "AL",
        "ibge": 2700607,
        "lat": -9.83842,
        "lng": -35.9057
      },
      {
        "nome": "Batalha",
        "uf": "AL",
        "ibge": 2700706,
        "lat": -9.6742,
        "lng": -37.133
      },
      {
        "nome": "Belém",
        "uf": "AL",
        "ibge": 2700805,
        "lat": -9.57047,
        "lng": -36.4904
      },
      {
        "nome": "Belo Monte",
        "uf": "AL",
        "ibge": 2700904,
        "lat": -9.82272,
        "lng": -37.277
      },
      {
        "nome": "Boca da Mata",
        "uf": "AL",
        "ibge": 2701001,
        "lat": -9.64308,
        "lng": -36.2125
      },
      {
        "nome": "Branquinha",
        "uf": "AL",
        "ibge": 2701100,
        "lat": -9.23342,
        "lng": -36.0162
      },
      {
        "nome": "Cacimbinhas",
        "uf": "AL",
        "ibge": 2701209,
        "lat": -9.40121,
        "lng": -36.9911
      },
      {
        "nome": "Cajueiro",
        "uf": "AL",
        "ibge": 2701308,
        "lat": -9.3994,
        "lng": -36.1559
      },
      {
        "nome": "Campestre",
        "uf": "AL",
        "ibge": 2701357,
        "lat": -8.84723,
        "lng": -35.5685
      },
      {
        "nome": "Campo Alegre",
        "uf": "AL",
        "ibge": 2701407,
        "lat": -9.78451,
        "lng": -36.3525
      },
      {
        "nome": "Campo Grande",
        "uf": "AL",
        "ibge": 2701506,
        "lat": -9.95542,
        "lng": -36.7926
      },
      {
        "nome": "Canapi",
        "uf": "AL",
        "ibge": 2701605,
        "lat": -9.11932,
        "lng": -37.5967
      },
      {
        "nome": "Capela",
        "uf": "AL",
        "ibge": 2701704,
        "lat": -9.41504,
        "lng": -36.0826
      },
      {
        "nome": "Carneiros",
        "uf": "AL",
        "ibge": 2701803,
        "lat": -9.48476,
        "lng": -37.3773
      },
      {
        "nome": "Chã Preta",
        "uf": "AL",
        "ibge": 2701902,
        "lat": -9.2556,
        "lng": -36.2983
      },
      {
        "nome": "Coité do Nóia",
        "uf": "AL",
        "ibge": 2702009,
        "lat": -9.63348,
        "lng": -36.5845
      },
      {
        "nome": "Colônia Leopoldina",
        "uf": "AL",
        "ibge": 2702108,
        "lat": -8.91806,
        "lng": -35.7214
      },
      {
        "nome": "Coqueiro Seco",
        "uf": "AL",
        "ibge": 2702207,
        "lat": -9.63715,
        "lng": -35.7994
      },
      {
        "nome": "Coruripe",
        "uf": "AL",
        "ibge": 2702306,
        "lat": -10.1276,
        "lng": -36.1717
      },
      {
        "nome": "Craíbas",
        "uf": "AL",
        "ibge": 2702355,
        "lat": -9.6178,
        "lng": -36.7697
      },
      {
        "nome": "Delmiro Gouveia",
        "uf": "AL",
        "ibge": 2702405,
        "lat": -9.38534,
        "lng": -37.9987
      },
      {
        "nome": "Dois Riachos",
        "uf": "AL",
        "ibge": 2702504,
        "lat": -9.38465,
        "lng": -37.0965
      },
      {
        "nome": "Estrela de Alagoas",
        "uf": "AL",
        "ibge": 2702553,
        "lat": -9.39089,
        "lng": -36.7644
      },
      {
        "nome": "Feira Grande",
        "uf": "AL",
        "ibge": 2702603,
        "lat": -9.89859,
        "lng": -36.6815
      },
      {
        "nome": "Feliz Deserto",
        "uf": "AL",
        "ibge": 2702702,
        "lat": -10.2935,
        "lng": -36.3028
      },
      {
        "nome": "Flexeiras",
        "uf": "AL",
        "ibge": 2702801,
        "lat": -9.27281,
        "lng": -35.7139
      },
      {
        "nome": "Girau do Ponciano",
        "uf": "AL",
        "ibge": 2702900,
        "lat": -9.88404,
        "lng": -36.8316
      },
      {
        "nome": "Ibateguara",
        "uf": "AL",
        "ibge": 2703007,
        "lat": -8.97823,
        "lng": -35.9373
      },
      {
        "nome": "Igaci",
        "uf": "AL",
        "ibge": 2703106,
        "lat": -9.53768,
        "lng": -36.6372
      },
      {
        "nome": "Igreja Nova",
        "uf": "AL",
        "ibge": 2703205,
        "lat": -10.1235,
        "lng": -36.6597
      },
      {
        "nome": "Inhapi",
        "uf": "AL",
        "ibge": 2703304,
        "lat": -9.22594,
        "lng": -37.7509
      },
      {
        "nome": "Jacaré dos Homens",
        "uf": "AL",
        "ibge": 2703403,
        "lat": -9.63545,
        "lng": -37.2076
      },
      {
        "nome": "Jacuípe",
        "uf": "AL",
        "ibge": 2703502,
        "lat": -8.83951,
        "lng": -35.4591
      },
      {
        "nome": "Japaratinga",
        "uf": "AL",
        "ibge": 2703601,
        "lat": -9.08746,
        "lng": -35.2634
      },
      {
        "nome": "Jaramataia",
        "uf": "AL",
        "ibge": 2703700,
        "lat": -9.66224,
        "lng": -37.0046
      },
      {
        "nome": "Jequiá da Praia",
        "uf": "AL",
        "ibge": 2703759,
        "lat": -10.0133,
        "lng": -36.0142
      },
      {
        "nome": "Joaquim Gomes",
        "uf": "AL",
        "ibge": 2703809,
        "lat": -9.1328,
        "lng": -35.7474
      },
      {
        "nome": "Jundiá",
        "uf": "AL",
        "ibge": 2703908,
        "lat": -8.93297,
        "lng": -35.5669
      },
      {
        "nome": "Junqueiro",
        "uf": "AL",
        "ibge": 2704005,
        "lat": -9.90696,
        "lng": -36.4803
      },
      {
        "nome": "Lagoa da Canoa",
        "uf": "AL",
        "ibge": 2704104,
        "lat": -9.83291,
        "lng": -36.7413
      },
      {
        "nome": "Limoeiro de Anadia",
        "uf": "AL",
        "ibge": 2704203,
        "lat": -9.74098,
        "lng": -36.5121
      },
      {
        "nome": "Major Isidoro",
        "uf": "AL",
        "ibge": 2704401,
        "lat": -9.53009,
        "lng": -36.992
      },
      {
        "nome": "Mar Vermelho",
        "uf": "AL",
        "ibge": 2704906,
        "lat": -9.44739,
        "lng": -36.3881
      },
      {
        "nome": "Maragogi",
        "uf": "AL",
        "ibge": 2704500,
        "lat": -9.00744,
        "lng": -35.2267
      },
      {
        "nome": "Maravilha",
        "uf": "AL",
        "ibge": 2704609,
        "lat": -9.23045,
        "lng": -37.3524
      },
      {
        "nome": "Marechal Deodoro",
        "uf": "AL",
        "ibge": 2704708,
        "lat": -9.70971,
        "lng": -35.8967
      },
      {
        "nome": "Maribondo",
        "uf": "AL",
        "ibge": 2704807,
        "lat": -9.58353,
        "lng": -36.3045
      },
      {
        "nome": "Mata Grande",
        "uf": "AL",
        "ibge": 2705002,
        "lat": -9.11824,
        "lng": -37.7323
      },
      {
        "nome": "Matriz de Camaragibe",
        "uf": "AL",
        "ibge": 2705101,
        "lat": -9.15437,
        "lng": -35.5243
      },
      {
        "nome": "Messias",
        "uf": "AL",
        "ibge": 2705200,
        "lat": -9.39384,
        "lng": -35.8392
      },
      {
        "nome": "Minador do Negrão",
        "uf": "AL",
        "ibge": 2705309,
        "lat": -9.31236,
        "lng": -36.8696
      },
      {
        "nome": "Monteirópolis",
        "uf": "AL",
        "ibge": 2705408,
        "lat": -9.60357,
        "lng": -37.2505
      },
      {
        "nome": "Murici",
        "uf": "AL",
        "ibge": 2705507,
        "lat": -9.30682,
        "lng": -35.9428
      },
      {
        "nome": "Novo Lino",
        "uf": "AL",
        "ibge": 2705606,
        "lat": -8.94191,
        "lng": -35.664
      },
      {
        "nome": "Olho d'Água das Flores",
        "uf": "AL",
        "ibge": 2705705,
        "lat": -9.53686,
        "lng": -37.2971
      },
      {
        "nome": "Olho d'Água do Casado",
        "uf": "AL",
        "ibge": 2705804,
        "lat": -9.50357,
        "lng": -37.8301
      },
      {
        "nome": "Olho d'Água Grande",
        "uf": "AL",
        "ibge": 2705903,
        "lat": -10.0572,
        "lng": -36.8101
      },
      {
        "nome": "Olivença",
        "uf": "AL",
        "ibge": 2706000,
        "lat": -9.51954,
        "lng": -37.1954
      },
      {
        "nome": "Ouro Branco",
        "uf": "AL",
        "ibge": 2706109,
        "lat": -9.15884,
        "lng": -37.3556
      },
      {
        "nome": "Palestina",
        "uf": "AL",
        "ibge": 2706208,
        "lat": -9.67493,
        "lng": -37.339
      },
      {
        "nome": "Palmeira dos Índios",
        "uf": "AL",
        "ibge": 2706307,
        "lat": -9.40568,
        "lng": -36.6328
      },
      {
        "nome": "Pão de Açúcar",
        "uf": "AL",
        "ibge": 2706406,
        "lat": -9.74032,
        "lng": -37.4403
      },
      {
        "nome": "Pariconha",
        "uf": "AL",
        "ibge": 2706422,
        "lat": -9.25634,
        "lng": -37.9988
      },
      {
        "nome": "Paripueira",
        "uf": "AL",
        "ibge": 2706448,
        "lat": -9.46313,
        "lng": -35.552
      },
      {
        "nome": "Passo de Camaragibe",
        "uf": "AL",
        "ibge": 2706505,
        "lat": -9.24511,
        "lng": -35.4745
      },
      {
        "nome": "Paulo Jacinto",
        "uf": "AL",
        "ibge": 2706604,
        "lat": -9.36792,
        "lng": -36.3672
      },
      {
        "nome": "Penedo",
        "uf": "AL",
        "ibge": 2706703,
        "lat": -10.2874,
        "lng": -36.5819
      },
      {
        "nome": "Piaçabuçu",
        "uf": "AL",
        "ibge": 2706802,
        "lat": -10.406,
        "lng": -36.434
      },
      {
        "nome": "Pilar",
        "uf": "AL",
        "ibge": 2706901,
        "lat": -9.60135,
        "lng": -35.9543
      },
      {
        "nome": "Pindoba",
        "uf": "AL",
        "ibge": 2707008,
        "lat": -9.47382,
        "lng": -36.2918
      },
      {
        "nome": "Piranhas",
        "uf": "AL",
        "ibge": 2707107,
        "lat": -9.624,
        "lng": -37.757
      },
      {
        "nome": "Poço das Trincheiras",
        "uf": "AL",
        "ibge": 2707206,
        "lat": -9.30742,
        "lng": -37.2889
      },
      {
        "nome": "Porto Calvo",
        "uf": "AL",
        "ibge": 2707305,
        "lat": -9.05195,
        "lng": -35.3987
      },
      {
        "nome": "Porto de Pedras",
        "uf": "AL",
        "ibge": 2707404,
        "lat": -9.16006,
        "lng": -35.3049
      },
      {
        "nome": "Porto Real do Colégio",
        "uf": "AL",
        "ibge": 2707503,
        "lat": -10.1849,
        "lng": -36.8376
      },
      {
        "nome": "Quebrangulo",
        "uf": "AL",
        "ibge": 2707602,
        "lat": -9.32001,
        "lng": -36.4692
      },
      {
        "nome": "Rio Largo",
        "uf": "AL",
        "ibge": 2707701,
        "lat": -9.47783,
        "lng": -35.8394
      },
      {
        "nome": "Roteiro",
        "uf": "AL",
        "ibge": 2707800,
        "lat": -9.83503,
        "lng": -35.9782
      },
      {
        "nome": "Santa Luzia do Norte",
        "uf": "AL",
        "ibge": 2707909,
        "lat": -9.6037,
        "lng": -35.8232
      },
      {
        "nome": "Santana do Ipanema",
        "uf": "AL",
        "ibge": 2708006,
        "lat": -9.36999,
        "lng": -37.248
      },
      {
        "nome": "Santana do Mundaú",
        "uf": "AL",
        "ibge": 2708105,
        "lat": -9.17141,
        "lng": -36.2176
      },
      {
        "nome": "São Brás",
        "uf": "AL",
        "ibge": 2708204,
        "lat": -10.1141,
        "lng": -36.8522
      },
      {
        "nome": "São José da Laje",
        "uf": "AL",
        "ibge": 2708303,
        "lat": -9.01278,
        "lng": -36.0515
      },
      {
        "nome": "São José da Tapera",
        "uf": "AL",
        "ibge": 2708402,
        "lat": -9.55768,
        "lng": -37.3831
      },
      {
        "nome": "São Luís do Quitunde",
        "uf": "AL",
        "ibge": 2708501,
        "lat": -9.31816,
        "lng": -35.5606
      },
      {
        "nome": "São Miguel dos Campos",
        "uf": "AL",
        "ibge": 2708600,
        "lat": -9.78301,
        "lng": -36.0971
      },
      {
        "nome": "São Miguel dos Milagres",
        "uf": "AL",
        "ibge": 2708709,
        "lat": -9.26493,
        "lng": -35.3763
      },
      {
        "nome": "São Sebastião",
        "uf": "AL",
        "ibge": 2708808,
        "lat": -9.93043,
        "lng": -36.559
      },
      {
        "nome": "Satuba",
        "uf": "AL",
        "ibge": 2708907,
        "lat": -9.56911,
        "lng": -35.8227
      },
      {
        "nome": "Senador Rui Palmeira",
        "uf": "AL",
        "ibge": 2708956,
        "lat": -9.46986,
        "lng": -37.4576
      },
      {
        "nome": "Tanque d'Arca",
        "uf": "AL",
        "ibge": 2709004,
        "lat": -9.53379,
        "lng": -36.4366
      },
      {
        "nome": "Taquarana",
        "uf": "AL",
        "ibge": 2709103,
        "lat": -9.64529,
        "lng": -36.4928
      },
      {
        "nome": "Teotônio Vilela",
        "uf": "AL",
        "ibge": 2709152,
        "lat": -9.91656,
        "lng": -36.3492
      },
      {
        "nome": "Traipu",
        "uf": "AL",
        "ibge": 2709202,
        "lat": -9.96262,
        "lng": -37.0071
      },
      {
        "nome": "União dos Palmares",
        "uf": "AL",
        "ibge": 2709301,
        "lat": -9.15921,
        "lng": -36.0223
      },
      {
        "nome": "Viçosa",
        "uf": "AL",
        "ibge": 2709400,
        "lat": -9.36763,
        "lng": -36.2431
      }
    ],
    "capital": {
      "nome": "Maceió",
      "uf": "AL",
      "ibge": 2704302,
      "lat": -9.66599,
      "lng": -35.735
    }
  },
  "SE": {
    "nome": "Sergipe",
    "ibge": 28,
    "cidades": [
      {
        "nome": "Amparo de São Francisco",
        "uf": "SE",
        "ibge": 2800100,
        "lat": -10.1348,
        "lng": -36.935
      },
      {
        "nome": "Aquidabã",
        "uf": "SE",
        "ibge": 2800209,
        "lat": -10.278,
        "lng": -37.0148
      },
      {
        "nome": "Arauá",
        "uf": "SE",
        "ibge": 2800407,
        "lat": -11.2614,
        "lng": -37.6201
      },
      {
        "nome": "Areia Branca",
        "uf": "SE",
        "ibge": 2800506,
        "lat": -10.758,
        "lng": -37.3251
      },
      {
        "nome": "Barra dos Coqueiros",
        "uf": "SE",
        "ibge": 2800605,
        "lat": -10.8996,
        "lng": -37.0323
      },
      {
        "nome": "Boquim",
        "uf": "SE",
        "ibge": 2800670,
        "lat": -11.1397,
        "lng": -37.6195
      },
      {
        "nome": "Brejo Grande",
        "uf": "SE",
        "ibge": 2800704,
        "lat": -10.4297,
        "lng": -36.4611
      },
      {
        "nome": "Campo do Brito",
        "uf": "SE",
        "ibge": 2801009,
        "lat": -10.7392,
        "lng": -37.4954
      },
      {
        "nome": "Canhoba",
        "uf": "SE",
        "ibge": 2801108,
        "lat": -10.1365,
        "lng": -36.9806
      },
      {
        "nome": "Canindé de São Francisco",
        "uf": "SE",
        "ibge": 2801207,
        "lat": -9.64882,
        "lng": -37.7923
      },
      {
        "nome": "Capela",
        "uf": "SE",
        "ibge": 2801306,
        "lat": -10.5069,
        "lng": -37.0628
      },
      {
        "nome": "Carira",
        "uf": "SE",
        "ibge": 2801405,
        "lat": -10.3524,
        "lng": -37.7002
      },
      {
        "nome": "Carmópolis",
        "uf": "SE",
        "ibge": 2801504,
        "lat": -10.6449,
        "lng": -36.9887
      },
      {
        "nome": "Cedro de São João",
        "uf": "SE",
        "ibge": 2801603,
        "lat": -10.2534,
        "lng": -36.8856
      },
      {
        "nome": "Cristinápolis",
        "uf": "SE",
        "ibge": 2801702,
        "lat": -11.4668,
        "lng": -37.7585
      },
      {
        "nome": "Cumbe",
        "uf": "SE",
        "ibge": 2801900,
        "lat": -10.352,
        "lng": -37.1846
      },
      {
        "nome": "Divina Pastora",
        "uf": "SE",
        "ibge": 2802007,
        "lat": -10.6782,
        "lng": -37.1506
      },
      {
        "nome": "Estância",
        "uf": "SE",
        "ibge": 2802106,
        "lat": -11.2659,
        "lng": -37.4484
      },
      {
        "nome": "Feira Nova",
        "uf": "SE",
        "ibge": 2802205,
        "lat": -10.2616,
        "lng": -37.3147
      },
      {
        "nome": "Frei Paulo",
        "uf": "SE",
        "ibge": 2802304,
        "lat": -10.5513,
        "lng": -37.5279
      },
      {
        "nome": "Gararu",
        "uf": "SE",
        "ibge": 2802403,
        "lat": -9.9722,
        "lng": -37.0869
      },
      {
        "nome": "General Maynard",
        "uf": "SE",
        "ibge": 2802502,
        "lat": -10.6835,
        "lng": -36.9838
      },
      {
        "nome": "Gracho Cardoso",
        "uf": "SE",
        "ibge": 2802601,
        "lat": -10.2252,
        "lng": -37.2006
      },
      {
        "nome": "Ilha das Flores",
        "uf": "SE",
        "ibge": 2802700,
        "lat": -10.4425,
        "lng": -36.5479
      },
      {
        "nome": "Indiaroba",
        "uf": "SE",
        "ibge": 2802809,
        "lat": -11.5157,
        "lng": -37.515
      },
      {
        "nome": "Itabaiana",
        "uf": "SE",
        "ibge": 2802908,
        "lat": -10.6826,
        "lng": -37.4273
      },
      {
        "nome": "Itabaianinha",
        "uf": "SE",
        "ibge": 2803005,
        "lat": -11.2693,
        "lng": -37.7875
      },
      {
        "nome": "Itabi",
        "uf": "SE",
        "ibge": 2803104,
        "lat": -10.1248,
        "lng": -37.1056
      },
      {
        "nome": "Itaporanga d'Ajuda",
        "uf": "SE",
        "ibge": 2803203,
        "lat": -10.99,
        "lng": -37.3078
      },
      {
        "nome": "Japaratuba",
        "uf": "SE",
        "ibge": 2803302,
        "lat": -10.5849,
        "lng": -36.9418
      },
      {
        "nome": "Japoatã",
        "uf": "SE",
        "ibge": 2803401,
        "lat": -10.3477,
        "lng": -36.8045
      },
      {
        "nome": "Lagarto",
        "uf": "SE",
        "ibge": 2803500,
        "lat": -10.9136,
        "lng": -37.6689
      },
      {
        "nome": "Laranjeiras",
        "uf": "SE",
        "ibge": 2803609,
        "lat": -10.7981,
        "lng": -37.1731
      },
      {
        "nome": "Macambira",
        "uf": "SE",
        "ibge": 2803708,
        "lat": -10.6619,
        "lng": -37.5413
      },
      {
        "nome": "Malhada dos Bois",
        "uf": "SE",
        "ibge": 2803807,
        "lat": -10.3418,
        "lng": -36.9252
      },
      {
        "nome": "Malhador",
        "uf": "SE",
        "ibge": 2803906,
        "lat": -10.6649,
        "lng": -37.3004
      },
      {
        "nome": "Maruim",
        "uf": "SE",
        "ibge": 2804003,
        "lat": -10.7308,
        "lng": -37.0856
      },
      {
        "nome": "Moita Bonita",
        "uf": "SE",
        "ibge": 2804102,
        "lat": -10.5769,
        "lng": -37.3512
      },
      {
        "nome": "Monte Alegre de Sergipe",
        "uf": "SE",
        "ibge": 2804201,
        "lat": -10.0256,
        "lng": -37.5616
      },
      {
        "nome": "Muribeca",
        "uf": "SE",
        "ibge": 2804300,
        "lat": -10.4271,
        "lng": -36.9588
      },
      {
        "nome": "Neópolis",
        "uf": "SE",
        "ibge": 2804409,
        "lat": -10.3215,
        "lng": -36.585
      },
      {
        "nome": "Nossa Senhora Aparecida",
        "uf": "SE",
        "ibge": 2804458,
        "lat": -10.3944,
        "lng": -37.4517
      },
      {
        "nome": "Nossa Senhora da Glória",
        "uf": "SE",
        "ibge": 2804508,
        "lat": -10.2158,
        "lng": -37.4211
      },
      {
        "nome": "Nossa Senhora das Dores",
        "uf": "SE",
        "ibge": 2804607,
        "lat": -10.4854,
        "lng": -37.1963
      },
      {
        "nome": "Nossa Senhora de Lourdes",
        "uf": "SE",
        "ibge": 2804706,
        "lat": -10.0772,
        "lng": -37.0615
      },
      {
        "nome": "Nossa Senhora do Socorro",
        "uf": "SE",
        "ibge": 2804805,
        "lat": -10.8468,
        "lng": -37.1231
      },
      {
        "nome": "Pacatuba",
        "uf": "SE",
        "ibge": 2804904,
        "lat": -10.4538,
        "lng": -36.6531
      },
      {
        "nome": "Pedra Mole",
        "uf": "SE",
        "ibge": 2805000,
        "lat": -10.6134,
        "lng": -37.6922
      },
      {
        "nome": "Pedrinhas",
        "uf": "SE",
        "ibge": 2805109,
        "lat": -11.1902,
        "lng": -37.6775
      },
      {
        "nome": "Pinhão",
        "uf": "SE",
        "ibge": 2805208,
        "lat": -10.5677,
        "lng": -37.7242
      },
      {
        "nome": "Pirambu",
        "uf": "SE",
        "ibge": 2805307,
        "lat": -10.7215,
        "lng": -36.8544
      },
      {
        "nome": "Poço Redondo",
        "uf": "SE",
        "ibge": 2805406,
        "lat": -9.80616,
        "lng": -37.6833
      },
      {
        "nome": "Poço Verde",
        "uf": "SE",
        "ibge": 2805505,
        "lat": -10.7151,
        "lng": -38.1813
      },
      {
        "nome": "Porto da Folha",
        "uf": "SE",
        "ibge": 2805604,
        "lat": -9.91626,
        "lng": -37.2842
      },
      {
        "nome": "Propriá",
        "uf": "SE",
        "ibge": 2805703,
        "lat": -10.2138,
        "lng": -36.8442
      },
      {
        "nome": "Riachão do Dantas",
        "uf": "SE",
        "ibge": 2805802,
        "lat": -11.0729,
        "lng": -37.731
      },
      {
        "nome": "Riachuelo",
        "uf": "SE",
        "ibge": 2805901,
        "lat": -10.735,
        "lng": -37.1966
      },
      {
        "nome": "Ribeirópolis",
        "uf": "SE",
        "ibge": 2806008,
        "lat": -10.5357,
        "lng": -37.438
      },
      {
        "nome": "Rosário do Catete",
        "uf": "SE",
        "ibge": 2806107,
        "lat": -10.6904,
        "lng": -37.0357
      },
      {
        "nome": "Salgado",
        "uf": "SE",
        "ibge": 2806206,
        "lat": -11.0288,
        "lng": -37.4804
      },
      {
        "nome": "Santa Luzia do Itanhy",
        "uf": "SE",
        "ibge": 2806305,
        "lat": -11.3536,
        "lng": -37.4586
      },
      {
        "nome": "Santa Rosa de Lima",
        "uf": "SE",
        "ibge": 2806503,
        "lat": -10.6434,
        "lng": -37.1931
      },
      {
        "nome": "Santana do São Francisco",
        "uf": "SE",
        "ibge": 2806404,
        "lat": -10.2922,
        "lng": -36.6105
      },
      {
        "nome": "Santo Amaro das Brotas",
        "uf": "SE",
        "ibge": 2806602,
        "lat": -10.7892,
        "lng": -37.0564
      },
      {
        "nome": "São Cristóvão",
        "uf": "SE",
        "ibge": 2806701,
        "lat": -11.0084,
        "lng": -37.2044
      },
      {
        "nome": "São Domingos",
        "uf": "SE",
        "ibge": 2806800,
        "lat": -10.7916,
        "lng": -37.5685
      },
      {
        "nome": "São Francisco",
        "uf": "SE",
        "ibge": 2806909,
        "lat": -10.3442,
        "lng": -36.8869
      },
      {
        "nome": "São Miguel do Aleixo",
        "uf": "SE",
        "ibge": 2807006,
        "lat": -10.3847,
        "lng": -37.3836
      },
      {
        "nome": "Simão Dias",
        "uf": "SE",
        "ibge": 2807105,
        "lat": -10.7387,
        "lng": -37.8097
      },
      {
        "nome": "Siriri",
        "uf": "SE",
        "ibge": 2807204,
        "lat": -10.5965,
        "lng": -37.1131
      },
      {
        "nome": "Telha",
        "uf": "SE",
        "ibge": 2807303,
        "lat": -10.2064,
        "lng": -36.8818
      },
      {
        "nome": "Tobias Barreto",
        "uf": "SE",
        "ibge": 2807402,
        "lat": -11.1798,
        "lng": -37.9995
      },
      {
        "nome": "Tomar do Geru",
        "uf": "SE",
        "ibge": 2807501,
        "lat": -11.3694,
        "lng": -37.8433
      },
      {
        "nome": "Umbaúba",
        "uf": "SE",
        "ibge": 2807600,
        "lat": -11.3809,
        "lng": -37.6623
      }
    ],
    "capital": {
      "nome": "Aracaju",
      "uf": "SE",
      "ibge": 2800308,
      "lat": -10.9091,
      "lng": -37.0677
    }
  },
  "BA": {
    "nome": "Bahia",
    "ibge": 29,
    "cidades": [
      {
        "nome": "Abaíra",
        "uf": "BA",
        "ibge": 2900108,
        "lat": -13.2488,
        "lng": -41.6619
      },
      {
        "nome": "Abaré",
        "uf": "BA",
        "ibge": 2900207,
        "lat": -8.72073,
        "lng": -39.1162
      },
      {
        "nome": "Acajutiba",
        "uf": "BA",
        "ibge": 2900306,
        "lat": -11.6575,
        "lng": -38.0197
      },
      {
        "nome": "Adustina",
        "uf": "BA",
        "ibge": 2900355,
        "lat": -10.5437,
        "lng": -38.1113
      },
      {
        "nome": "Água Fria",
        "uf": "BA",
        "ibge": 2900405,
        "lat": -11.8618,
        "lng": -38.7639
      },
      {
        "nome": "Aiquara",
        "uf": "BA",
        "ibge": 2900603,
        "lat": -14.1269,
        "lng": -39.8937
      },
      {
        "nome": "Alagoinhas",
        "uf": "BA",
        "ibge": 2900702,
        "lat": -12.1335,
        "lng": -38.4208
      },
      {
        "nome": "Alcobaça",
        "uf": "BA",
        "ibge": 2900801,
        "lat": -17.5195,
        "lng": -39.2036
      },
      {
        "nome": "Almadina",
        "uf": "BA",
        "ibge": 2900900,
        "lat": -14.7089,
        "lng": -39.6415
      },
      {
        "nome": "Amargosa",
        "uf": "BA",
        "ibge": 2901007,
        "lat": -13.0215,
        "lng": -39.602
      },
      {
        "nome": "Amélia Rodrigues",
        "uf": "BA",
        "ibge": 2901106,
        "lat": -12.3914,
        "lng": -38.7563
      },
      {
        "nome": "América Dourada",
        "uf": "BA",
        "ibge": 2901155,
        "lat": -11.4429,
        "lng": -41.439
      },
      {
        "nome": "Anagé",
        "uf": "BA",
        "ibge": 2901205,
        "lat": -14.6151,
        "lng": -41.1356
      },
      {
        "nome": "Andaraí",
        "uf": "BA",
        "ibge": 2901304,
        "lat": -12.8049,
        "lng": -41.3297
      },
      {
        "nome": "Andorinha",
        "uf": "BA",
        "ibge": 2901353,
        "lat": -10.3482,
        "lng": -39.8391
      },
      {
        "nome": "Angical",
        "uf": "BA",
        "ibge": 2901403,
        "lat": -12.0063,
        "lng": -44.7003
      },
      {
        "nome": "Anguera",
        "uf": "BA",
        "ibge": 2901502,
        "lat": -12.1462,
        "lng": -39.2462
      },
      {
        "nome": "Antas",
        "uf": "BA",
        "ibge": 2901601,
        "lat": -10.3856,
        "lng": -38.3401
      },
      {
        "nome": "Antônio Cardoso",
        "uf": "BA",
        "ibge": 2901700,
        "lat": -12.4335,
        "lng": -39.1176
      },
      {
        "nome": "Antônio Gonçalves",
        "uf": "BA",
        "ibge": 2901809,
        "lat": -10.5767,
        "lng": -40.2785
      },
      {
        "nome": "Aporá",
        "uf": "BA",
        "ibge": 2901908,
        "lat": -11.6577,
        "lng": -38.0814
      },
      {
        "nome": "Apuarema",
        "uf": "BA",
        "ibge": 2901957,
        "lat": -13.8542,
        "lng": -39.7501
      },
      {
        "nome": "Araças",
        "uf": "BA",
        "ibge": 2902054,
        "lat": -12.22,
        "lng": -38.2027
      },
      {
        "nome": "Aracatu",
        "uf": "BA",
        "ibge": 2902005,
        "lat": -14.428,
        "lng": -41.4648
      },
      {
        "nome": "Araci",
        "uf": "BA",
        "ibge": 2902104,
        "lat": -11.3253,
        "lng": -38.9584
      },
      {
        "nome": "Aramari",
        "uf": "BA",
        "ibge": 2902203,
        "lat": -12.0884,
        "lng": -38.4969
      },
      {
        "nome": "Arataca",
        "uf": "BA",
        "ibge": 2902252,
        "lat": -15.2651,
        "lng": -39.419
      },
      {
        "nome": "Aratuípe",
        "uf": "BA",
        "ibge": 2902302,
        "lat": -13.0716,
        "lng": -39.0038
      },
      {
        "nome": "Aurelino Leal",
        "uf": "BA",
        "ibge": 2902401,
        "lat": -14.321,
        "lng": -39.329
      },
      {
        "nome": "Baianópolis",
        "uf": "BA",
        "ibge": 2902500,
        "lat": -12.3016,
        "lng": -44.5388
      },
      {
        "nome": "Baixa Grande",
        "uf": "BA",
        "ibge": 2902609,
        "lat": -11.9519,
        "lng": -40.169
      },
      {
        "nome": "Banzaê",
        "uf": "BA",
        "ibge": 2902658,
        "lat": -10.5788,
        "lng": -38.6212
      },
      {
        "nome": "Barra",
        "uf": "BA",
        "ibge": 2902708,
        "lat": -11.0859,
        "lng": -43.1459
      },
      {
        "nome": "Barra da Estiva",
        "uf": "BA",
        "ibge": 2902807,
        "lat": -13.6237,
        "lng": -41.3347
      },
      {
        "nome": "Barra do Choça",
        "uf": "BA",
        "ibge": 2902906,
        "lat": -14.8654,
        "lng": -40.5791
      },
      {
        "nome": "Barra do Mendes",
        "uf": "BA",
        "ibge": 2903003,
        "lat": -11.81,
        "lng": -42.059
      },
      {
        "nome": "Barra do Rocha",
        "uf": "BA",
        "ibge": 2903102,
        "lat": -14.2,
        "lng": -39.5991
      },
      {
        "nome": "Barreiras",
        "uf": "BA",
        "ibge": 2903201,
        "lat": -12.1439,
        "lng": -44.9968
      },
      {
        "nome": "Barro Alto",
        "uf": "BA",
        "ibge": 2903235,
        "lat": -11.7605,
        "lng": -41.9054
      },
      {
        "nome": "Barro Preto",
        "uf": "BA",
        "ibge": 2903300,
        "lat": -14.7948,
        "lng": -39.476
      },
      {
        "nome": "Barrocas",
        "uf": "BA",
        "ibge": 2903276,
        "lat": -11.5272,
        "lng": -39.0776
      },
      {
        "nome": "Belmonte",
        "uf": "BA",
        "ibge": 2903409,
        "lat": -15.8608,
        "lng": -38.8758
      },
      {
        "nome": "Belo Campo",
        "uf": "BA",
        "ibge": 2903508,
        "lat": -15.0334,
        "lng": -41.2652
      },
      {
        "nome": "Biritinga",
        "uf": "BA",
        "ibge": 2903607,
        "lat": -11.6072,
        "lng": -38.8051
      },
      {
        "nome": "Boa Nova",
        "uf": "BA",
        "ibge": 2903706,
        "lat": -14.3598,
        "lng": -40.2064
      },
      {
        "nome": "Boa Vista do Tupim",
        "uf": "BA",
        "ibge": 2903805,
        "lat": -12.6498,
        "lng": -40.6064
      },
      {
        "nome": "Bom Jesus da Lapa",
        "uf": "BA",
        "ibge": 2903904,
        "lat": -13.2506,
        "lng": -43.4108
      },
      {
        "nome": "Bom Jesus da Serra",
        "uf": "BA",
        "ibge": 2903953,
        "lat": -14.3663,
        "lng": -40.5126
      },
      {
        "nome": "Boninal",
        "uf": "BA",
        "ibge": 2904001,
        "lat": -12.7069,
        "lng": -41.8286
      },
      {
        "nome": "Bonito",
        "uf": "BA",
        "ibge": 2904050,
        "lat": -11.9668,
        "lng": -41.2647
      },
      {
        "nome": "Boquira",
        "uf": "BA",
        "ibge": 2904100,
        "lat": -12.8205,
        "lng": -42.7324
      },
      {
        "nome": "Botuporã",
        "uf": "BA",
        "ibge": 2904209,
        "lat": -13.3772,
        "lng": -42.5163
      },
      {
        "nome": "Brejões",
        "uf": "BA",
        "ibge": 2904308,
        "lat": -13.1039,
        "lng": -39.7988
      },
      {
        "nome": "Brejolândia",
        "uf": "BA",
        "ibge": 2904407,
        "lat": -12.4815,
        "lng": -43.9679
      },
      {
        "nome": "Brotas de Macaúbas",
        "uf": "BA",
        "ibge": 2904506,
        "lat": -11.9915,
        "lng": -42.6326
      },
      {
        "nome": "Brumado",
        "uf": "BA",
        "ibge": 2904605,
        "lat": -14.2021,
        "lng": -41.6696
      },
      {
        "nome": "Buerarema",
        "uf": "BA",
        "ibge": 2904704,
        "lat": -14.9595,
        "lng": -39.3028
      },
      {
        "nome": "Buritirama",
        "uf": "BA",
        "ibge": 2904753,
        "lat": -10.7171,
        "lng": -43.6302
      },
      {
        "nome": "Caatiba",
        "uf": "BA",
        "ibge": 2904803,
        "lat": -14.9699,
        "lng": -40.4092
      },
      {
        "nome": "Cabaceiras do Paraguaçu",
        "uf": "BA",
        "ibge": 2904852,
        "lat": -12.5317,
        "lng": -39.1902
      },
      {
        "nome": "Cachoeira",
        "uf": "BA",
        "ibge": 2904902,
        "lat": -12.5994,
        "lng": -38.9587
      },
      {
        "nome": "Caculé",
        "uf": "BA",
        "ibge": 2905008,
        "lat": -14.5003,
        "lng": -42.2229
      },
      {
        "nome": "Caém",
        "uf": "BA",
        "ibge": 2905107,
        "lat": -11.0677,
        "lng": -40.432
      },
      {
        "nome": "Caetanos",
        "uf": "BA",
        "ibge": 2905156,
        "lat": -14.3347,
        "lng": -40.9175
      },
      {
        "nome": "Caetité",
        "uf": "BA",
        "ibge": 2905206,
        "lat": -14.0684,
        "lng": -42.4861
      },
      {
        "nome": "Cafarnaum",
        "uf": "BA",
        "ibge": 2905305,
        "lat": -11.6914,
        "lng": -41.4688
      },
      {
        "nome": "Cairu",
        "uf": "BA",
        "ibge": 2905404,
        "lat": -13.4904,
        "lng": -39.0465
      },
      {
        "nome": "Caldeirão Grande",
        "uf": "BA",
        "ibge": 2905503,
        "lat": -11.0208,
        "lng": -40.2956
      },
      {
        "nome": "Camacan",
        "uf": "BA",
        "ibge": 2905602,
        "lat": -15.4142,
        "lng": -39.4919
      },
      {
        "nome": "Camaçari",
        "uf": "BA",
        "ibge": 2905701,
        "lat": -12.6996,
        "lng": -38.3263
      },
      {
        "nome": "Camamu",
        "uf": "BA",
        "ibge": 2905800,
        "lat": -13.9398,
        "lng": -39.1071
      },
      {
        "nome": "Campo Alegre de Lourdes",
        "uf": "BA",
        "ibge": 2905909,
        "lat": -9.52221,
        "lng": -43.0126
      },
      {
        "nome": "Campo Formoso",
        "uf": "BA",
        "ibge": 2906006,
        "lat": -10.5105,
        "lng": -40.32
      },
      {
        "nome": "Canápolis",
        "uf": "BA",
        "ibge": 2906105,
        "lat": -13.0725,
        "lng": -44.201
      },
      {
        "nome": "Canarana",
        "uf": "BA",
        "ibge": 2906204,
        "lat": -11.6858,
        "lng": -41.7677
      },
      {
        "nome": "Canavieiras",
        "uf": "BA",
        "ibge": 2906303,
        "lat": -15.6722,
        "lng": -38.9536
      },
      {
        "nome": "Candeal",
        "uf": "BA",
        "ibge": 2906402,
        "lat": -11.8049,
        "lng": -39.1203
      },
      {
        "nome": "Candeias",
        "uf": "BA",
        "ibge": 2906501,
        "lat": -12.6716,
        "lng": -38.5472
      },
      {
        "nome": "Candiba",
        "uf": "BA",
        "ibge": 2906600,
        "lat": -14.4097,
        "lng": -42.8667
      },
      {
        "nome": "Cândido Sales",
        "uf": "BA",
        "ibge": 2906709,
        "lat": -15.4993,
        "lng": -41.2414
      },
      {
        "nome": "Cansanção",
        "uf": "BA",
        "ibge": 2906808,
        "lat": -10.6647,
        "lng": -39.4944
      },
      {
        "nome": "Canudos",
        "uf": "BA",
        "ibge": 2906824,
        "lat": -9.90014,
        "lng": -39.1471
      },
      {
        "nome": "Capela do Alto Alegre",
        "uf": "BA",
        "ibge": 2906857,
        "lat": -11.6658,
        "lng": -39.8349
      },
      {
        "nome": "Capim Grosso",
        "uf": "BA",
        "ibge": 2906873,
        "lat": -11.3797,
        "lng": -40.0089
      },
      {
        "nome": "Caraíbas",
        "uf": "BA",
        "ibge": 2906899,
        "lat": -14.7177,
        "lng": -41.2603
      },
      {
        "nome": "Caravelas",
        "uf": "BA",
        "ibge": 2906907,
        "lat": -17.7268,
        "lng": -39.2597
      },
      {
        "nome": "Cardeal da Silva",
        "uf": "BA",
        "ibge": 2907004,
        "lat": -11.9472,
        "lng": -37.9469
      },
      {
        "nome": "Carinhanha",
        "uf": "BA",
        "ibge": 2907103,
        "lat": -14.2985,
        "lng": -43.7724
      },
      {
        "nome": "Casa Nova",
        "uf": "BA",
        "ibge": 2907202,
        "lat": -9.16408,
        "lng": -40.974
      },
      {
        "nome": "Castro Alves",
        "uf": "BA",
        "ibge": 2907301,
        "lat": -12.7579,
        "lng": -39.4248
      },
      {
        "nome": "Catolândia",
        "uf": "BA",
        "ibge": 2907400,
        "lat": -12.31,
        "lng": -44.8648
      },
      {
        "nome": "Catu",
        "uf": "BA",
        "ibge": 2907509,
        "lat": -12.3513,
        "lng": -38.3791
      },
      {
        "nome": "Caturama",
        "uf": "BA",
        "ibge": 2907558,
        "lat": -13.3239,
        "lng": -42.2904
      },
      {
        "nome": "Central",
        "uf": "BA",
        "ibge": 2907608,
        "lat": -11.1376,
        "lng": -42.1116
      },
      {
        "nome": "Chorrochó",
        "uf": "BA",
        "ibge": 2907707,
        "lat": -8.9695,
        "lng": -39.0979
      },
      {
        "nome": "Cícero Dantas",
        "uf": "BA",
        "ibge": 2907806,
        "lat": -10.5897,
        "lng": -38.3794
      },
      {
        "nome": "Cipó",
        "uf": "BA",
        "ibge": 2907905,
        "lat": -11.1032,
        "lng": -38.5179
      },
      {
        "nome": "Coaraci",
        "uf": "BA",
        "ibge": 2908002,
        "lat": -14.637,
        "lng": -39.5556
      },
      {
        "nome": "Cocos",
        "uf": "BA",
        "ibge": 2908101,
        "lat": -14.1814,
        "lng": -44.5352
      },
      {
        "nome": "Conceição da Feira",
        "uf": "BA",
        "ibge": 2908200,
        "lat": -12.5078,
        "lng": -38.9978
      },
      {
        "nome": "Conceição do Almeida",
        "uf": "BA",
        "ibge": 2908309,
        "lat": -12.7836,
        "lng": -39.1715
      },
      {
        "nome": "Conceição do Coité",
        "uf": "BA",
        "ibge": 2908408,
        "lat": -11.56,
        "lng": -39.2808
      },
      {
        "nome": "Conceição do Jacuípe",
        "uf": "BA",
        "ibge": 2908507,
        "lat": -12.3268,
        "lng": -38.7684
      },
      {
        "nome": "Conde",
        "uf": "BA",
        "ibge": 2908606,
        "lat": -11.8179,
        "lng": -37.6131
      },
      {
        "nome": "Condeúba",
        "uf": "BA",
        "ibge": 2908705,
        "lat": -14.9022,
        "lng": -41.9718
      },
      {
        "nome": "Contendas do Sincorá",
        "uf": "BA",
        "ibge": 2908804,
        "lat": -13.7537,
        "lng": -41.048
      },
      {
        "nome": "Coração de Maria",
        "uf": "BA",
        "ibge": 2908903,
        "lat": -12.2333,
        "lng": -38.7487
      },
      {
        "nome": "Cordeiros",
        "uf": "BA",
        "ibge": 2909000,
        "lat": -15.0356,
        "lng": -41.9308
      },
      {
        "nome": "Coribe",
        "uf": "BA",
        "ibge": 2909109,
        "lat": -13.8232,
        "lng": -44.4586
      },
      {
        "nome": "Coronel João Sá",
        "uf": "BA",
        "ibge": 2909208,
        "lat": -10.2847,
        "lng": -37.9198
      },
      {
        "nome": "Correntina",
        "uf": "BA",
        "ibge": 2909307,
        "lat": -13.3477,
        "lng": -44.6333
      },
      {
        "nome": "Cotegipe",
        "uf": "BA",
        "ibge": 2909406,
        "lat": -12.0228,
        "lng": -44.2566
      },
      {
        "nome": "Cravolândia",
        "uf": "BA",
        "ibge": 2909505,
        "lat": -13.3531,
        "lng": -39.8031
      },
      {
        "nome": "Crisópolis",
        "uf": "BA",
        "ibge": 2909604,
        "lat": -11.5059,
        "lng": -38.1515
      },
      {
        "nome": "Cristópolis",
        "uf": "BA",
        "ibge": 2909703,
        "lat": -12.2249,
        "lng": -44.4214
      },
      {
        "nome": "Cruz das Almas",
        "uf": "BA",
        "ibge": 2909802,
        "lat": -12.6675,
        "lng": -39.1008
      },
      {
        "nome": "Curaçá",
        "uf": "BA",
        "ibge": 2909901,
        "lat": -8.98458,
        "lng": -39.8997
      },
      {
        "nome": "Dário Meira",
        "uf": "BA",
        "ibge": 2910008,
        "lat": -14.4229,
        "lng": -39.9031
      },
      {
        "nome": "Dias d'Ávila",
        "uf": "BA",
        "ibge": 2910057,
        "lat": -12.6187,
        "lng": -38.2926
      },
      {
        "nome": "Dom Basílio",
        "uf": "BA",
        "ibge": 2910107,
        "lat": -13.7565,
        "lng": -41.7677
      },
      {
        "nome": "Dom Macedo Costa",
        "uf": "BA",
        "ibge": 2910206,
        "lat": -12.9016,
        "lng": -39.1923
      },
      {
        "nome": "Elísio Medrado",
        "uf": "BA",
        "ibge": 2910305,
        "lat": -12.9417,
        "lng": -39.5191
      },
      {
        "nome": "Encruzilhada",
        "uf": "BA",
        "ibge": 2910404,
        "lat": -15.5302,
        "lng": -40.9124
      },
      {
        "nome": "Entre Rios",
        "uf": "BA",
        "ibge": 2910503,
        "lat": -11.9392,
        "lng": -38.0871
      },
      {
        "nome": "Érico Cardoso",
        "uf": "BA",
        "ibge": 2900504,
        "lat": -13.4215,
        "lng": -42.1352
      },
      {
        "nome": "Esplanada",
        "uf": "BA",
        "ibge": 2910602,
        "lat": -11.7942,
        "lng": -37.9432
      },
      {
        "nome": "Euclides da Cunha",
        "uf": "BA",
        "ibge": 2910701,
        "lat": -10.5078,
        "lng": -39.0153
      },
      {
        "nome": "Eunápolis",
        "uf": "BA",
        "ibge": 2910727,
        "lat": -16.3715,
        "lng": -39.5821
      },
      {
        "nome": "Fátima",
        "uf": "BA",
        "ibge": 2910750,
        "lat": -10.616,
        "lng": -38.2239
      },
      {
        "nome": "Feira da Mata",
        "uf": "BA",
        "ibge": 2910776,
        "lat": -14.2044,
        "lng": -44.2744
      },
      {
        "nome": "Feira de Santana",
        "uf": "BA",
        "ibge": 2910800,
        "lat": -12.2664,
        "lng": -38.9663
      },
      {
        "nome": "Filadélfia",
        "uf": "BA",
        "ibge": 2910859,
        "lat": -10.7405,
        "lng": -40.1437
      },
      {
        "nome": "Firmino Alves",
        "uf": "BA",
        "ibge": 2910909,
        "lat": -14.9823,
        "lng": -39.9269
      },
      {
        "nome": "Floresta Azul",
        "uf": "BA",
        "ibge": 2911006,
        "lat": -14.8629,
        "lng": -39.6579
      },
      {
        "nome": "Formosa do Rio Preto",
        "uf": "BA",
        "ibge": 2911105,
        "lat": -11.0328,
        "lng": -45.193
      },
      {
        "nome": "Gandu",
        "uf": "BA",
        "ibge": 2911204,
        "lat": -13.7441,
        "lng": -39.4747
      },
      {
        "nome": "Gavião",
        "uf": "BA",
        "ibge": 2911253,
        "lat": -11.4688,
        "lng": -39.7757
      },
      {
        "nome": "Gentio do Ouro",
        "uf": "BA",
        "ibge": 2911303,
        "lat": -11.4342,
        "lng": -42.5077
      },
      {
        "nome": "Glória",
        "uf": "BA",
        "ibge": 2911402,
        "lat": -9.34382,
        "lng": -38.2544
      },
      {
        "nome": "Gongogi",
        "uf": "BA",
        "ibge": 2911501,
        "lat": -14.3195,
        "lng": -39.469
      },
      {
        "nome": "Governador Mangabeira",
        "uf": "BA",
        "ibge": 2911600,
        "lat": -12.5994,
        "lng": -39.0412
      },
      {
        "nome": "Guajeru",
        "uf": "BA",
        "ibge": 2911659,
        "lat": -14.5467,
        "lng": -41.9381
      },
      {
        "nome": "Guanambi",
        "uf": "BA",
        "ibge": 2911709,
        "lat": -14.2231,
        "lng": -42.7799
      },
      {
        "nome": "Guaratinga",
        "uf": "BA",
        "ibge": 2911808,
        "lat": -16.5833,
        "lng": -39.7847
      },
      {
        "nome": "Heliópolis",
        "uf": "BA",
        "ibge": 2911857,
        "lat": -10.6825,
        "lng": -38.2907
      },
      {
        "nome": "Iaçu",
        "uf": "BA",
        "ibge": 2911907,
        "lat": -12.7666,
        "lng": -40.2056
      },
      {
        "nome": "Ibiassucê",
        "uf": "BA",
        "ibge": 2912004,
        "lat": -14.2711,
        "lng": -42.257
      },
      {
        "nome": "Ibicaraí",
        "uf": "BA",
        "ibge": 2912103,
        "lat": -14.8579,
        "lng": -39.5914
      },
      {
        "nome": "Ibicoara",
        "uf": "BA",
        "ibge": 2912202,
        "lat": -13.4059,
        "lng": -41.284
      },
      {
        "nome": "Ibicuí",
        "uf": "BA",
        "ibge": 2912301,
        "lat": -14.845,
        "lng": -39.9879
      },
      {
        "nome": "Ibipeba",
        "uf": "BA",
        "ibge": 2912400,
        "lat": -11.6438,
        "lng": -42.0195
      },
      {
        "nome": "Ibipitanga",
        "uf": "BA",
        "ibge": 2912509,
        "lat": -12.8804,
        "lng": -42.4856
      },
      {
        "nome": "Ibiquera",
        "uf": "BA",
        "ibge": 2912608,
        "lat": -12.6444,
        "lng": -40.9338
      },
      {
        "nome": "Ibirapitanga",
        "uf": "BA",
        "ibge": 2912707,
        "lat": -14.1649,
        "lng": -39.3787
      },
      {
        "nome": "Ibirapuã",
        "uf": "BA",
        "ibge": 2912806,
        "lat": -17.6832,
        "lng": -40.1129
      },
      {
        "nome": "Ibirataia",
        "uf": "BA",
        "ibge": 2912905,
        "lat": -14.0643,
        "lng": -39.6459
      },
      {
        "nome": "Ibitiara",
        "uf": "BA",
        "ibge": 2913002,
        "lat": -12.6502,
        "lng": -42.2179
      },
      {
        "nome": "Ibititá",
        "uf": "BA",
        "ibge": 2913101,
        "lat": -11.5414,
        "lng": -41.9748
      },
      {
        "nome": "Ibotirama",
        "uf": "BA",
        "ibge": 2913200,
        "lat": -12.1779,
        "lng": -43.2167
      },
      {
        "nome": "Ichu",
        "uf": "BA",
        "ibge": 2913309,
        "lat": -11.7431,
        "lng": -39.1905
      },
      {
        "nome": "Igaporã",
        "uf": "BA",
        "ibge": 2913408,
        "lat": -13.774,
        "lng": -42.7155
      },
      {
        "nome": "Igrapiúna",
        "uf": "BA",
        "ibge": 2913457,
        "lat": -13.8295,
        "lng": -39.1361
      },
      {
        "nome": "Iguaí",
        "uf": "BA",
        "ibge": 2913507,
        "lat": -14.7528,
        "lng": -40.0894
      },
      {
        "nome": "Ilhéus",
        "uf": "BA",
        "ibge": 2913606,
        "lat": -14.793,
        "lng": -39.046
      },
      {
        "nome": "Inhambupe",
        "uf": "BA",
        "ibge": 2913705,
        "lat": -11.781,
        "lng": -38.355
      },
      {
        "nome": "Ipecaetá",
        "uf": "BA",
        "ibge": 2913804,
        "lat": -12.3028,
        "lng": -39.3069
      },
      {
        "nome": "Ipiaú",
        "uf": "BA",
        "ibge": 2913903,
        "lat": -14.1226,
        "lng": -39.7353
      },
      {
        "nome": "Ipirá",
        "uf": "BA",
        "ibge": 2914000,
        "lat": -12.1561,
        "lng": -39.7359
      },
      {
        "nome": "Ipupiara",
        "uf": "BA",
        "ibge": 2914109,
        "lat": -11.8219,
        "lng": -42.6179
      },
      {
        "nome": "Irajuba",
        "uf": "BA",
        "ibge": 2914208,
        "lat": -13.2563,
        "lng": -40.0848
      },
      {
        "nome": "Iramaia",
        "uf": "BA",
        "ibge": 2914307,
        "lat": -13.2902,
        "lng": -40.9595
      },
      {
        "nome": "Iraquara",
        "uf": "BA",
        "ibge": 2914406,
        "lat": -12.2429,
        "lng": -41.6155
      },
      {
        "nome": "Irará",
        "uf": "BA",
        "ibge": 2914505,
        "lat": -12.0504,
        "lng": -38.7631
      },
      {
        "nome": "Irecê",
        "uf": "BA",
        "ibge": 2914604,
        "lat": -11.3033,
        "lng": -41.8535
      },
      {
        "nome": "Itabela",
        "uf": "BA",
        "ibge": 2914653,
        "lat": -16.5732,
        "lng": -39.5593
      },
      {
        "nome": "Itaberaba",
        "uf": "BA",
        "ibge": 2914703,
        "lat": -12.5242,
        "lng": -40.3059
      },
      {
        "nome": "Itabuna",
        "uf": "BA",
        "ibge": 2914802,
        "lat": -14.7876,
        "lng": -39.2781
      },
      {
        "nome": "Itacaré",
        "uf": "BA",
        "ibge": 2914901,
        "lat": -14.2784,
        "lng": -38.9959
      },
      {
        "nome": "Itaeté",
        "uf": "BA",
        "ibge": 2915007,
        "lat": -12.9831,
        "lng": -40.9677
      },
      {
        "nome": "Itagi",
        "uf": "BA",
        "ibge": 2915106,
        "lat": -14.1615,
        "lng": -40.0131
      },
      {
        "nome": "Itagibá",
        "uf": "BA",
        "ibge": 2915205,
        "lat": -14.2782,
        "lng": -39.8449
      },
      {
        "nome": "Itagimirim",
        "uf": "BA",
        "ibge": 2915304,
        "lat": -16.0819,
        "lng": -39.6133
      },
      {
        "nome": "Itaguaçu da Bahia",
        "uf": "BA",
        "ibge": 2915353,
        "lat": -11.0147,
        "lng": -42.3997
      },
      {
        "nome": "Itaju do Colônia",
        "uf": "BA",
        "ibge": 2915403,
        "lat": -15.1366,
        "lng": -39.7283
      },
      {
        "nome": "Itajuípe",
        "uf": "BA",
        "ibge": 2915502,
        "lat": -14.6788,
        "lng": -39.3698
      },
      {
        "nome": "Itamaraju",
        "uf": "BA",
        "ibge": 2915601,
        "lat": -17.0378,
        "lng": -39.5386
      },
      {
        "nome": "Itamari",
        "uf": "BA",
        "ibge": 2915700,
        "lat": -13.7782,
        "lng": -39.683
      },
      {
        "nome": "Itambé",
        "uf": "BA",
        "ibge": 2915809,
        "lat": -15.2429,
        "lng": -40.63
      },
      {
        "nome": "Itanagra",
        "uf": "BA",
        "ibge": 2915908,
        "lat": -12.2614,
        "lng": -38.0436
      },
      {
        "nome": "Itanhém",
        "uf": "BA",
        "ibge": 2916005,
        "lat": -17.1642,
        "lng": -40.3321
      },
      {
        "nome": "Itaparica",
        "uf": "BA",
        "ibge": 2916104,
        "lat": -12.8932,
        "lng": -38.68
      },
      {
        "nome": "Itapé",
        "uf": "BA",
        "ibge": 2916203,
        "lat": -14.8876,
        "lng": -39.4239
      },
      {
        "nome": "Itapebi",
        "uf": "BA",
        "ibge": 2916302,
        "lat": -15.9551,
        "lng": -39.5329
      },
      {
        "nome": "Itapetinga",
        "uf": "BA",
        "ibge": 2916401,
        "lat": -15.2475,
        "lng": -40.2482
      },
      {
        "nome": "Itapicuru",
        "uf": "BA",
        "ibge": 2916500,
        "lat": -11.3088,
        "lng": -38.2262
      },
      {
        "nome": "Itapitanga",
        "uf": "BA",
        "ibge": 2916609,
        "lat": -14.4139,
        "lng": -39.5657
      },
      {
        "nome": "Itaquara",
        "uf": "BA",
        "ibge": 2916708,
        "lat": -13.4459,
        "lng": -39.9378
      },
      {
        "nome": "Itarantim",
        "uf": "BA",
        "ibge": 2916807,
        "lat": -15.6528,
        "lng": -40.065
      },
      {
        "nome": "Itatim",
        "uf": "BA",
        "ibge": 2916856,
        "lat": -12.7099,
        "lng": -39.6952
      },
      {
        "nome": "Itiruçu",
        "uf": "BA",
        "ibge": 2916906,
        "lat": -13.529,
        "lng": -40.1472
      },
      {
        "nome": "Itiúba",
        "uf": "BA",
        "ibge": 2917003,
        "lat": -10.6948,
        "lng": -39.8446
      },
      {
        "nome": "Itororó",
        "uf": "BA",
        "ibge": 2917102,
        "lat": -15.11,
        "lng": -40.0684
      },
      {
        "nome": "Ituaçu",
        "uf": "BA",
        "ibge": 2917201,
        "lat": -13.8107,
        "lng": -41.3003
      },
      {
        "nome": "Ituberá",
        "uf": "BA",
        "ibge": 2917300,
        "lat": -13.7249,
        "lng": -39.1481
      },
      {
        "nome": "Iuiú",
        "uf": "BA",
        "ibge": 2917334,
        "lat": -14.4054,
        "lng": -43.5595
      },
      {
        "nome": "Jaborandi",
        "uf": "BA",
        "ibge": 2917359,
        "lat": -13.6071,
        "lng": -44.4255
      },
      {
        "nome": "Jacaraci",
        "uf": "BA",
        "ibge": 2917409,
        "lat": -14.8541,
        "lng": -42.4329
      },
      {
        "nome": "Jacobina",
        "uf": "BA",
        "ibge": 2917508,
        "lat": -11.1812,
        "lng": -40.5117
      },
      {
        "nome": "Jaguaquara",
        "uf": "BA",
        "ibge": 2917607,
        "lat": -13.5248,
        "lng": -39.964
      },
      {
        "nome": "Jaguarari",
        "uf": "BA",
        "ibge": 2917706,
        "lat": -10.2569,
        "lng": -40.1999
      },
      {
        "nome": "Jaguaripe",
        "uf": "BA",
        "ibge": 2917805,
        "lat": -13.1109,
        "lng": -38.8939
      },
      {
        "nome": "Jandaíra",
        "uf": "BA",
        "ibge": 2917904,
        "lat": -11.5616,
        "lng": -37.7853
      },
      {
        "nome": "Jequié",
        "uf": "BA",
        "ibge": 2918001,
        "lat": -13.8509,
        "lng": -40.0877
      },
      {
        "nome": "Jeremoabo",
        "uf": "BA",
        "ibge": 2918100,
        "lat": -10.0685,
        "lng": -38.3471
      },
      {
        "nome": "Jiquiriçá",
        "uf": "BA",
        "ibge": 2918209,
        "lat": -13.2621,
        "lng": -39.5737
      },
      {
        "nome": "Jitaúna",
        "uf": "BA",
        "ibge": 2918308,
        "lat": -14.0131,
        "lng": -39.8969
      },
      {
        "nome": "João Dourado",
        "uf": "BA",
        "ibge": 2918357,
        "lat": -11.3486,
        "lng": -41.6548
      },
      {
        "nome": "Juazeiro",
        "uf": "BA",
        "ibge": 2918407,
        "lat": -9.41622,
        "lng": -40.5033
      },
      {
        "nome": "Jucuruçu",
        "uf": "BA",
        "ibge": 2918456,
        "lat": -16.8488,
        "lng": -40.1641
      },
      {
        "nome": "Jussara",
        "uf": "BA",
        "ibge": 2918506,
        "lat": -11.0431,
        "lng": -41.9702
      },
      {
        "nome": "Jussari",
        "uf": "BA",
        "ibge": 2918555,
        "lat": -15.192,
        "lng": -39.491
      },
      {
        "nome": "Jussiape",
        "uf": "BA",
        "ibge": 2918605,
        "lat": -13.5155,
        "lng": -41.5882
      },
      {
        "nome": "Lafaiete Coutinho",
        "uf": "BA",
        "ibge": 2918704,
        "lat": -13.6541,
        "lng": -40.2119
      },
      {
        "nome": "Lagoa Real",
        "uf": "BA",
        "ibge": 2918803,
        "lat": -14.0334,
        "lng": -42.1328
      },
      {
        "nome": "Laje",
        "uf": "BA",
        "ibge": 2918902,
        "lat": -13.1673,
        "lng": -39.4213
      },
      {
        "nome": "Lajedão",
        "uf": "BA",
        "ibge": 2919009,
        "lat": -17.6056,
        "lng": -40.3383
      },
      {
        "nome": "Lajedinho",
        "uf": "BA",
        "ibge": 2919058,
        "lat": -12.3529,
        "lng": -40.9048
      },
      {
        "nome": "Lajedo do Tabocal",
        "uf": "BA",
        "ibge": 2918753,
        "lat": -13.4663,
        "lng": -40.2204
      },
      {
        "nome": "Lamarão",
        "uf": "BA",
        "ibge": 2919108,
        "lat": -11.773,
        "lng": -38.887
      },
      {
        "nome": "Lapão",
        "uf": "BA",
        "ibge": 2919157,
        "lat": -11.3851,
        "lng": -41.8286
      },
      {
        "nome": "Lauro de Freitas",
        "uf": "BA",
        "ibge": 2919207,
        "lat": -12.8978,
        "lng": -38.321
      },
      {
        "nome": "Lençóis",
        "uf": "BA",
        "ibge": 2919306,
        "lat": -12.5616,
        "lng": -41.3928
      },
      {
        "nome": "Licínio de Almeida",
        "uf": "BA",
        "ibge": 2919405,
        "lat": -14.6842,
        "lng": -42.5095
      },
      {
        "nome": "Livramento de Nossa Senhora",
        "uf": "BA",
        "ibge": 2919504,
        "lat": -13.6369,
        "lng": -41.8432
      },
      {
        "nome": "Luís Eduardo Magalhães",
        "uf": "BA",
        "ibge": 2919553,
        "lat": -12.0956,
        "lng": -45.7866
      },
      {
        "nome": "Macajuba",
        "uf": "BA",
        "ibge": 2919603,
        "lat": -12.1326,
        "lng": -40.3571
      },
      {
        "nome": "Macarani",
        "uf": "BA",
        "ibge": 2919702,
        "lat": -15.5646,
        "lng": -40.4209
      },
      {
        "nome": "Macaúbas",
        "uf": "BA",
        "ibge": 2919801,
        "lat": -13.0186,
        "lng": -42.6945
      },
      {
        "nome": "Macururé",
        "uf": "BA",
        "ibge": 2919900,
        "lat": -9.16226,
        "lng": -39.0518
      },
      {
        "nome": "Madre de Deus",
        "uf": "BA",
        "ibge": 2919926,
        "lat": -12.7446,
        "lng": -38.6153
      },
      {
        "nome": "Maetinga",
        "uf": "BA",
        "ibge": 2919959,
        "lat": -14.6623,
        "lng": -41.4915
      },
      {
        "nome": "Maiquinique",
        "uf": "BA",
        "ibge": 2920007,
        "lat": -15.624,
        "lng": -40.2587
      },
      {
        "nome": "Mairi",
        "uf": "BA",
        "ibge": 2920106,
        "lat": -11.7107,
        "lng": -40.1437
      },
      {
        "nome": "Malhada",
        "uf": "BA",
        "ibge": 2920205,
        "lat": -14.3371,
        "lng": -43.7686
      },
      {
        "nome": "Malhada de Pedras",
        "uf": "BA",
        "ibge": 2920304,
        "lat": -14.3847,
        "lng": -41.8842
      },
      {
        "nome": "Manoel Vitorino",
        "uf": "BA",
        "ibge": 2920403,
        "lat": -14.1476,
        "lng": -40.2399
      },
      {
        "nome": "Mansidão",
        "uf": "BA",
        "ibge": 2920452,
        "lat": -10.7227,
        "lng": -44.0428
      },
      {
        "nome": "Maracás",
        "uf": "BA",
        "ibge": 2920502,
        "lat": -13.4355,
        "lng": -40.4323
      },
      {
        "nome": "Maragogipe",
        "uf": "BA",
        "ibge": 2920601,
        "lat": -12.776,
        "lng": -38.9175
      },
      {
        "nome": "Maraú",
        "uf": "BA",
        "ibge": 2920700,
        "lat": -14.1035,
        "lng": -39.0137
      },
      {
        "nome": "Marcionílio Souza",
        "uf": "BA",
        "ibge": 2920809,
        "lat": -13.0064,
        "lng": -40.5295
      },
      {
        "nome": "Mascote",
        "uf": "BA",
        "ibge": 2920908,
        "lat": -15.5542,
        "lng": -39.3016
      },
      {
        "nome": "Mata de São João",
        "uf": "BA",
        "ibge": 2921005,
        "lat": -12.5307,
        "lng": -38.3009
      },
      {
        "nome": "Matina",
        "uf": "BA",
        "ibge": 2921054,
        "lat": -13.9109,
        "lng": -42.8439
      },
      {
        "nome": "Medeiros Neto",
        "uf": "BA",
        "ibge": 2921104,
        "lat": -17.3707,
        "lng": -40.2238
      },
      {
        "nome": "Miguel Calmon",
        "uf": "BA",
        "ibge": 2921203,
        "lat": -11.4299,
        "lng": -40.6031
      },
      {
        "nome": "Milagres",
        "uf": "BA",
        "ibge": 2921302,
        "lat": -12.8646,
        "lng": -39.8611
      },
      {
        "nome": "Mirangaba",
        "uf": "BA",
        "ibge": 2921401,
        "lat": -10.961,
        "lng": -40.574
      },
      {
        "nome": "Mirante",
        "uf": "BA",
        "ibge": 2921450,
        "lat": -14.2385,
        "lng": -40.7718
      },
      {
        "nome": "Monte Santo",
        "uf": "BA",
        "ibge": 2921500,
        "lat": -10.4374,
        "lng": -39.3321
      },
      {
        "nome": "Morpará",
        "uf": "BA",
        "ibge": 2921609,
        "lat": -11.5569,
        "lng": -43.2766
      },
      {
        "nome": "Morro do Chapéu",
        "uf": "BA",
        "ibge": 2921708,
        "lat": -11.5488,
        "lng": -41.1565
      },
      {
        "nome": "Mortugaba",
        "uf": "BA",
        "ibge": 2921807,
        "lat": -15.0225,
        "lng": -42.3727
      },
      {
        "nome": "Mucugê",
        "uf": "BA",
        "ibge": 2921906,
        "lat": -13.0053,
        "lng": -41.3703
      },
      {
        "nome": "Mucuri",
        "uf": "BA",
        "ibge": 2922003,
        "lat": -18.0754,
        "lng": -39.5565
      },
      {
        "nome": "Mulungu do Morro",
        "uf": "BA",
        "ibge": 2922052,
        "lat": -11.9648,
        "lng": -41.6374
      },
      {
        "nome": "Mundo Novo",
        "uf": "BA",
        "ibge": 2922102,
        "lat": -11.8541,
        "lng": -40.4714
      },
      {
        "nome": "Muniz Ferreira",
        "uf": "BA",
        "ibge": 2922201,
        "lat": -13.0092,
        "lng": -39.1092
      },
      {
        "nome": "Muquém de São Francisco",
        "uf": "BA",
        "ibge": 2922250,
        "lat": -12.065,
        "lng": -43.5497
      },
      {
        "nome": "Muritiba",
        "uf": "BA",
        "ibge": 2922300,
        "lat": -12.6329,
        "lng": -38.9921
      },
      {
        "nome": "Mutuípe",
        "uf": "BA",
        "ibge": 2922409,
        "lat": -13.2284,
        "lng": -39.5044
      },
      {
        "nome": "Nazaré",
        "uf": "BA",
        "ibge": 2922508,
        "lat": -13.0235,
        "lng": -39.0108
      },
      {
        "nome": "Nilo Peçanha",
        "uf": "BA",
        "ibge": 2922607,
        "lat": -13.604,
        "lng": -39.1091
      },
      {
        "nome": "Nordestina",
        "uf": "BA",
        "ibge": 2922656,
        "lat": -10.8192,
        "lng": -39.4297
      },
      {
        "nome": "Nova Canaã",
        "uf": "BA",
        "ibge": 2922706,
        "lat": -14.7912,
        "lng": -40.1458
      },
      {
        "nome": "Nova Fátima",
        "uf": "BA",
        "ibge": 2922730,
        "lat": -11.6031,
        "lng": -39.6302
      },
      {
        "nome": "Nova Ibiá",
        "uf": "BA",
        "ibge": 2922755,
        "lat": -13.812,
        "lng": -39.6182
      },
      {
        "nome": "Nova Itarana",
        "uf": "BA",
        "ibge": 2922805,
        "lat": -13.0241,
        "lng": -40.0653
      },
      {
        "nome": "Nova Redenção",
        "uf": "BA",
        "ibge": 2922854,
        "lat": -12.815,
        "lng": -41.0748
      },
      {
        "nome": "Nova Soure",
        "uf": "BA",
        "ibge": 2922904,
        "lat": -11.2329,
        "lng": -38.4871
      },
      {
        "nome": "Nova Viçosa",
        "uf": "BA",
        "ibge": 2923001,
        "lat": -17.8926,
        "lng": -39.3743
      },
      {
        "nome": "Novo Horizonte",
        "uf": "BA",
        "ibge": 2923035,
        "lat": -12.8083,
        "lng": -42.1682
      },
      {
        "nome": "Novo Triunfo",
        "uf": "BA",
        "ibge": 2923050,
        "lat": -10.3182,
        "lng": -38.4014
      },
      {
        "nome": "Olindina",
        "uf": "BA",
        "ibge": 2923100,
        "lat": -11.3497,
        "lng": -38.3379
      },
      {
        "nome": "Oliveira dos Brejinhos",
        "uf": "BA",
        "ibge": 2923209,
        "lat": -12.3132,
        "lng": -42.8969
      },
      {
        "nome": "Ouriçangas",
        "uf": "BA",
        "ibge": 2923308,
        "lat": -12.0175,
        "lng": -38.6166
      },
      {
        "nome": "Ourolândia",
        "uf": "BA",
        "ibge": 2923357,
        "lat": -10.9578,
        "lng": -41.0756
      },
      {
        "nome": "Palmas de Monte Alto",
        "uf": "BA",
        "ibge": 2923407,
        "lat": -14.2676,
        "lng": -43.1609
      },
      {
        "nome": "Palmeiras",
        "uf": "BA",
        "ibge": 2923506,
        "lat": -12.5059,
        "lng": -41.5809
      },
      {
        "nome": "Paramirim",
        "uf": "BA",
        "ibge": 2923605,
        "lat": -13.4388,
        "lng": -42.2395
      },
      {
        "nome": "Paratinga",
        "uf": "BA",
        "ibge": 2923704,
        "lat": -12.687,
        "lng": -43.1798
      },
      {
        "nome": "Paripiranga",
        "uf": "BA",
        "ibge": 2923803,
        "lat": -10.6859,
        "lng": -37.8626
      },
      {
        "nome": "Pau Brasil",
        "uf": "BA",
        "ibge": 2923902,
        "lat": -15.4572,
        "lng": -39.6458
      },
      {
        "nome": "Paulo Afonso",
        "uf": "BA",
        "ibge": 2924009,
        "lat": -9.3983,
        "lng": -38.2216
      },
      {
        "nome": "Pé de Serra",
        "uf": "BA",
        "ibge": 2924058,
        "lat": -11.8313,
        "lng": -39.611
      },
      {
        "nome": "Pedrão",
        "uf": "BA",
        "ibge": 2924108,
        "lat": -12.1491,
        "lng": -38.6487
      },
      {
        "nome": "Pedro Alexandre",
        "uf": "BA",
        "ibge": 2924207,
        "lat": -10.012,
        "lng": -37.8932
      },
      {
        "nome": "Piatã",
        "uf": "BA",
        "ibge": 2924306,
        "lat": -13.1465,
        "lng": -41.7702
      },
      {
        "nome": "Pilão Arcado",
        "uf": "BA",
        "ibge": 2924405,
        "lat": -10.0051,
        "lng": -42.4936
      },
      {
        "nome": "Pindaí",
        "uf": "BA",
        "ibge": 2924504,
        "lat": -14.4921,
        "lng": -42.686
      },
      {
        "nome": "Pindobaçu",
        "uf": "BA",
        "ibge": 2924603,
        "lat": -10.7433,
        "lng": -40.3675
      },
      {
        "nome": "Pintadas",
        "uf": "BA",
        "ibge": 2924652,
        "lat": -11.8117,
        "lng": -39.9009
      },
      {
        "nome": "Piraí do Norte",
        "uf": "BA",
        "ibge": 2924678,
        "lat": -13.759,
        "lng": -39.3836
      },
      {
        "nome": "Piripá",
        "uf": "BA",
        "ibge": 2924702,
        "lat": -14.9444,
        "lng": -41.7168
      },
      {
        "nome": "Piritiba",
        "uf": "BA",
        "ibge": 2924801,
        "lat": -11.73,
        "lng": -40.5587
      },
      {
        "nome": "Planaltino",
        "uf": "BA",
        "ibge": 2924900,
        "lat": -13.2618,
        "lng": -40.3695
      },
      {
        "nome": "Planalto",
        "uf": "BA",
        "ibge": 2925006,
        "lat": -14.6654,
        "lng": -40.4718
      },
      {
        "nome": "Poções",
        "uf": "BA",
        "ibge": 2925105,
        "lat": -14.5234,
        "lng": -40.3634
      },
      {
        "nome": "Pojuca",
        "uf": "BA",
        "ibge": 2925204,
        "lat": -12.4303,
        "lng": -38.3374
      },
      {
        "nome": "Ponto Novo",
        "uf": "BA",
        "ibge": 2925253,
        "lat": -10.8653,
        "lng": -40.1311
      },
      {
        "nome": "Porto Seguro",
        "uf": "BA",
        "ibge": 2925303,
        "lat": -16.4435,
        "lng": -39.0643
      },
      {
        "nome": "Potiraguá",
        "uf": "BA",
        "ibge": 2925402,
        "lat": -15.5943,
        "lng": -39.8638
      },
      {
        "nome": "Prado",
        "uf": "BA",
        "ibge": 2925501,
        "lat": -17.3364,
        "lng": -39.2227
      },
      {
        "nome": "Presidente Dutra",
        "uf": "BA",
        "ibge": 2925600,
        "lat": -11.2923,
        "lng": -41.9843
      },
      {
        "nome": "Presidente Jânio Quadros",
        "uf": "BA",
        "ibge": 2925709,
        "lat": -14.6885,
        "lng": -41.6798
      },
      {
        "nome": "Presidente Tancredo Neves",
        "uf": "BA",
        "ibge": 2925758,
        "lat": -13.4471,
        "lng": -39.4203
      },
      {
        "nome": "Queimadas",
        "uf": "BA",
        "ibge": 2925808,
        "lat": -10.9736,
        "lng": -39.6293
      },
      {
        "nome": "Quijingue",
        "uf": "BA",
        "ibge": 2925907,
        "lat": -10.7505,
        "lng": -39.2137
      },
      {
        "nome": "Quixabeira",
        "uf": "BA",
        "ibge": 2925931,
        "lat": -11.4031,
        "lng": -40.12
      },
      {
        "nome": "Rafael Jambeiro",
        "uf": "BA",
        "ibge": 2925956,
        "lat": -12.4053,
        "lng": -39.5007
      },
      {
        "nome": "Remanso",
        "uf": "BA",
        "ibge": 2926004,
        "lat": -9.61944,
        "lng": -42.0848
      },
      {
        "nome": "Retirolândia",
        "uf": "BA",
        "ibge": 2926103,
        "lat": -11.4832,
        "lng": -39.4234
      },
      {
        "nome": "Riachão das Neves",
        "uf": "BA",
        "ibge": 2926202,
        "lat": -11.7508,
        "lng": -44.9143
      },
      {
        "nome": "Riachão do Jacuípe",
        "uf": "BA",
        "ibge": 2926301,
        "lat": -11.8067,
        "lng": -39.3818
      },
      {
        "nome": "Riacho de Santana",
        "uf": "BA",
        "ibge": 2926400,
        "lat": -13.6059,
        "lng": -42.9397
      },
      {
        "nome": "Ribeira do Amparo",
        "uf": "BA",
        "ibge": 2926509,
        "lat": -11.0421,
        "lng": -38.4242
      },
      {
        "nome": "Ribeira do Pombal",
        "uf": "BA",
        "ibge": 2926608,
        "lat": -10.8373,
        "lng": -38.5382
      },
      {
        "nome": "Ribeirão do Largo",
        "uf": "BA",
        "ibge": 2926657,
        "lat": -15.4508,
        "lng": -40.7441
      },
      {
        "nome": "Rio de Contas",
        "uf": "BA",
        "ibge": 2926707,
        "lat": -13.5852,
        "lng": -41.8048
      },
      {
        "nome": "Rio do Antônio",
        "uf": "BA",
        "ibge": 2926806,
        "lat": -14.4071,
        "lng": -42.0721
      },
      {
        "nome": "Rio do Pires",
        "uf": "BA",
        "ibge": 2926905,
        "lat": -13.1185,
        "lng": -42.2902
      },
      {
        "nome": "Rio Real",
        "uf": "BA",
        "ibge": 2927002,
        "lat": -11.4814,
        "lng": -37.9332
      },
      {
        "nome": "Rodelas",
        "uf": "BA",
        "ibge": 2927101,
        "lat": -8.85021,
        "lng": -38.78
      },
      {
        "nome": "Ruy Barbosa",
        "uf": "BA",
        "ibge": 2927200,
        "lat": -12.2816,
        "lng": -40.4931
      },
      {
        "nome": "Salinas da Margarida",
        "uf": "BA",
        "ibge": 2927309,
        "lat": -12.873,
        "lng": -38.7562
      },
      {
        "nome": "Santa Bárbara",
        "uf": "BA",
        "ibge": 2927507,
        "lat": -11.9515,
        "lng": -38.9681
      },
      {
        "nome": "Santa Brígida",
        "uf": "BA",
        "ibge": 2927606,
        "lat": -9.73227,
        "lng": -38.1209
      },
      {
        "nome": "Santa Cruz Cabrália",
        "uf": "BA",
        "ibge": 2927705,
        "lat": -16.2825,
        "lng": -39.0295
      },
      {
        "nome": "Santa Cruz da Vitória",
        "uf": "BA",
        "ibge": 2927804,
        "lat": -14.964,
        "lng": -39.8115
      },
      {
        "nome": "Santa Inês",
        "uf": "BA",
        "ibge": 2927903,
        "lat": -13.2793,
        "lng": -39.814
      },
      {
        "nome": "Santa Luzia",
        "uf": "BA",
        "ibge": 2928059,
        "lat": -15.4342,
        "lng": -39.3287
      },
      {
        "nome": "Santa Maria da Vitória",
        "uf": "BA",
        "ibge": 2928109,
        "lat": -13.3859,
        "lng": -44.2011
      },
      {
        "nome": "Santa Rita de Cássia",
        "uf": "BA",
        "ibge": 2928406,
        "lat": -11.0063,
        "lng": -44.5255
      },
      {
        "nome": "Santa Teresinha",
        "uf": "BA",
        "ibge": 2928505,
        "lat": -12.7697,
        "lng": -39.5215
      },
      {
        "nome": "Santaluz",
        "uf": "BA",
        "ibge": 2928000,
        "lat": -11.2508,
        "lng": -39.375
      },
      {
        "nome": "Santana",
        "uf": "BA",
        "ibge": 2928208,
        "lat": -12.9792,
        "lng": -44.0506
      },
      {
        "nome": "Santanópolis",
        "uf": "BA",
        "ibge": 2928307,
        "lat": -12.0311,
        "lng": -38.8694
      },
      {
        "nome": "Santo Amaro",
        "uf": "BA",
        "ibge": 2928604,
        "lat": -12.5472,
        "lng": -38.7137
      },
      {
        "nome": "Santo Antônio de Jesus",
        "uf": "BA",
        "ibge": 2928703,
        "lat": -12.9614,
        "lng": -39.2584
      },
      {
        "nome": "Santo Estêvão",
        "uf": "BA",
        "ibge": 2928802,
        "lat": -12.428,
        "lng": -39.2505
      },
      {
        "nome": "São Desidério",
        "uf": "BA",
        "ibge": 2928901,
        "lat": -12.3572,
        "lng": -44.9769
      },
      {
        "nome": "São Domingos",
        "uf": "BA",
        "ibge": 2928950,
        "lat": -11.4649,
        "lng": -39.5268
      },
      {
        "nome": "São Felipe",
        "uf": "BA",
        "ibge": 2929107,
        "lat": -12.8394,
        "lng": -39.0893
      },
      {
        "nome": "São Félix",
        "uf": "BA",
        "ibge": 2929008,
        "lat": -12.6104,
        "lng": -38.9727
      },
      {
        "nome": "São Félix do Coribe",
        "uf": "BA",
        "ibge": 2929057,
        "lat": -13.4019,
        "lng": -44.1837
      },
      {
        "nome": "São Francisco do Conde",
        "uf": "BA",
        "ibge": 2929206,
        "lat": -12.6183,
        "lng": -38.6786
      },
      {
        "nome": "São Gabriel",
        "uf": "BA",
        "ibge": 2929255,
        "lat": -11.2175,
        "lng": -41.8843
      },
      {
        "nome": "São Gonçalo dos Campos",
        "uf": "BA",
        "ibge": 2929305,
        "lat": -12.4331,
        "lng": -38.9663
      },
      {
        "nome": "São José da Vitória",
        "uf": "BA",
        "ibge": 2929354,
        "lat": -15.0787,
        "lng": -39.3437
      },
      {
        "nome": "São José do Jacuípe",
        "uf": "BA",
        "ibge": 2929370,
        "lat": -11.4137,
        "lng": -39.8669
      },
      {
        "nome": "São Miguel das Matas",
        "uf": "BA",
        "ibge": 2929404,
        "lat": -13.0434,
        "lng": -39.4578
      },
      {
        "nome": "São Sebastião do Passé",
        "uf": "BA",
        "ibge": 2929503,
        "lat": -12.5123,
        "lng": -38.4905
      },
      {
        "nome": "Sapeaçu",
        "uf": "BA",
        "ibge": 2929602,
        "lat": -12.7208,
        "lng": -39.1824
      },
      {
        "nome": "Sátiro Dias",
        "uf": "BA",
        "ibge": 2929701,
        "lat": -11.5929,
        "lng": -38.5938
      },
      {
        "nome": "Saubara",
        "uf": "BA",
        "ibge": 2929750,
        "lat": -12.7387,
        "lng": -38.7625
      },
      {
        "nome": "Saúde",
        "uf": "BA",
        "ibge": 2929800,
        "lat": -10.9428,
        "lng": -40.4155
      },
      {
        "nome": "Seabra",
        "uf": "BA",
        "ibge": 2929909,
        "lat": -12.4169,
        "lng": -41.7722
      },
      {
        "nome": "Sebastião Laranjeiras",
        "uf": "BA",
        "ibge": 2930006,
        "lat": -14.571,
        "lng": -42.9434
      },
      {
        "nome": "Senhor do Bonfim",
        "uf": "BA",
        "ibge": 2930105,
        "lat": -10.4594,
        "lng": -40.1865
      },
      {
        "nome": "Sento Sé",
        "uf": "BA",
        "ibge": 2930204,
        "lat": -9.74138,
        "lng": -41.8786
      },
      {
        "nome": "Serra do Ramalho",
        "uf": "BA",
        "ibge": 2930154,
        "lat": -13.5659,
        "lng": -43.5929
      },
      {
        "nome": "Serra Dourada",
        "uf": "BA",
        "ibge": 2930303,
        "lat": -12.759,
        "lng": -43.9504
      },
      {
        "nome": "Serra Preta",
        "uf": "BA",
        "ibge": 2930402,
        "lat": -12.156,
        "lng": -39.3305
      },
      {
        "nome": "Serrinha",
        "uf": "BA",
        "ibge": 2930501,
        "lat": -11.6584,
        "lng": -39.01
      },
      {
        "nome": "Serrolândia",
        "uf": "BA",
        "ibge": 2930600,
        "lat": -11.4085,
        "lng": -40.2983
      },
      {
        "nome": "Simões Filho",
        "uf": "BA",
        "ibge": 2930709,
        "lat": -12.7866,
        "lng": -38.4029
      },
      {
        "nome": "Sítio do Mato",
        "uf": "BA",
        "ibge": 2930758,
        "lat": -13.0801,
        "lng": -43.4689
      },
      {
        "nome": "Sítio do Quinto",
        "uf": "BA",
        "ibge": 2930766,
        "lat": -10.3545,
        "lng": -38.2213
      },
      {
        "nome": "Sobradinho",
        "uf": "BA",
        "ibge": 2930774,
        "lat": -9.45024,
        "lng": -40.8145
      },
      {
        "nome": "Souto Soares",
        "uf": "BA",
        "ibge": 2930808,
        "lat": -12.088,
        "lng": -41.6427
      },
      {
        "nome": "Tabocas do Brejo Velho",
        "uf": "BA",
        "ibge": 2930907,
        "lat": -12.7026,
        "lng": -44.0075
      },
      {
        "nome": "Tanhaçu",
        "uf": "BA",
        "ibge": 2931004,
        "lat": -14.0197,
        "lng": -41.2473
      },
      {
        "nome": "Tanque Novo",
        "uf": "BA",
        "ibge": 2931053,
        "lat": -13.5485,
        "lng": -42.4934
      },
      {
        "nome": "Tanquinho",
        "uf": "BA",
        "ibge": 2931103,
        "lat": -11.968,
        "lng": -39.1033
      },
      {
        "nome": "Taperoá",
        "uf": "BA",
        "ibge": 2931202,
        "lat": -13.5321,
        "lng": -39.1009
      },
      {
        "nome": "Tapiramutá",
        "uf": "BA",
        "ibge": 2931301,
        "lat": -11.8475,
        "lng": -40.7927
      },
      {
        "nome": "Teixeira de Freitas",
        "uf": "BA",
        "ibge": 2931350,
        "lat": -17.5399,
        "lng": -39.74
      },
      {
        "nome": "Teodoro Sampaio",
        "uf": "BA",
        "ibge": 2931400,
        "lat": -12.295,
        "lng": -38.6347
      },
      {
        "nome": "Teofilândia",
        "uf": "BA",
        "ibge": 2931509,
        "lat": -11.4827,
        "lng": -38.9913
      },
      {
        "nome": "Teolândia",
        "uf": "BA",
        "ibge": 2931608,
        "lat": -13.5896,
        "lng": -39.484
      },
      {
        "nome": "Terra Nova",
        "uf": "BA",
        "ibge": 2931707,
        "lat": -12.3888,
        "lng": -38.6238
      },
      {
        "nome": "Tremedal",
        "uf": "BA",
        "ibge": 2931806,
        "lat": -14.9736,
        "lng": -41.4142
      },
      {
        "nome": "Tucano",
        "uf": "BA",
        "ibge": 2931905,
        "lat": -10.9584,
        "lng": -38.7894
      },
      {
        "nome": "Uauá",
        "uf": "BA",
        "ibge": 2932002,
        "lat": -9.83325,
        "lng": -39.4794
      },
      {
        "nome": "Ubaíra",
        "uf": "BA",
        "ibge": 2932101,
        "lat": -13.2714,
        "lng": -39.666
      },
      {
        "nome": "Ubaitaba",
        "uf": "BA",
        "ibge": 2932200,
        "lat": -14.303,
        "lng": -39.3222
      },
      {
        "nome": "Ubatã",
        "uf": "BA",
        "ibge": 2932309,
        "lat": -14.2063,
        "lng": -39.5207
      },
      {
        "nome": "Uibaí",
        "uf": "BA",
        "ibge": 2932408,
        "lat": -11.3394,
        "lng": -42.1354
      },
      {
        "nome": "Umburanas",
        "uf": "BA",
        "ibge": 2932457,
        "lat": -10.7339,
        "lng": -41.3234
      },
      {
        "nome": "Una",
        "uf": "BA",
        "ibge": 2932507,
        "lat": -15.2791,
        "lng": -39.0765
      },
      {
        "nome": "Urandi",
        "uf": "BA",
        "ibge": 2932606,
        "lat": -14.7678,
        "lng": -42.6498
      },
      {
        "nome": "Uruçuca",
        "uf": "BA",
        "ibge": 2932705,
        "lat": -14.5963,
        "lng": -39.2851
      },
      {
        "nome": "Utinga",
        "uf": "BA",
        "ibge": 2932804,
        "lat": -12.0783,
        "lng": -41.0954
      },
      {
        "nome": "Valença",
        "uf": "BA",
        "ibge": 2932903,
        "lat": -13.3669,
        "lng": -39.073
      },
      {
        "nome": "Valente",
        "uf": "BA",
        "ibge": 2933000,
        "lat": -11.4062,
        "lng": -39.457
      },
      {
        "nome": "Várzea da Roça",
        "uf": "BA",
        "ibge": 2933059,
        "lat": -11.6005,
        "lng": -40.1328
      },
      {
        "nome": "Várzea do Poço",
        "uf": "BA",
        "ibge": 2933109,
        "lat": -11.5273,
        "lng": -40.3149
      },
      {
        "nome": "Várzea Nova",
        "uf": "BA",
        "ibge": 2933158,
        "lat": -11.2557,
        "lng": -40.9432
      },
      {
        "nome": "Varzedo",
        "uf": "BA",
        "ibge": 2933174,
        "lat": -12.9672,
        "lng": -39.3919
      },
      {
        "nome": "Vera Cruz",
        "uf": "BA",
        "ibge": 2933208,
        "lat": -12.9568,
        "lng": -38.6153
      },
      {
        "nome": "Vereda",
        "uf": "BA",
        "ibge": 2933257,
        "lat": -17.2183,
        "lng": -40.0974
      },
      {
        "nome": "Vitória da Conquista",
        "uf": "BA",
        "ibge": 2933307,
        "lat": -14.8615,
        "lng": -40.8442
      },
      {
        "nome": "Wagner",
        "uf": "BA",
        "ibge": 2933406,
        "lat": -12.2819,
        "lng": -41.1715
      },
      {
        "nome": "Wanderley",
        "uf": "BA",
        "ibge": 2933455,
        "lat": -12.1144,
        "lng": -43.8958
      },
      {
        "nome": "Wenceslau Guimarães",
        "uf": "BA",
        "ibge": 2933505,
        "lat": -13.6908,
        "lng": -39.4762
      },
      {
        "nome": "Xique-Xique",
        "uf": "BA",
        "ibge": 2933604,
        "lat": -10.823,
        "lng": -42.7245
      }
    ],
    "capital": {
      "nome": "Salvador",
      "uf": "BA",
      "ibge": 2927408,
      "lat": -12.9718,
      "lng": -38.5011
    }
  },
  "MG": {
    "nome": "Minas Gerais",
    "ibge": 31,
    "cidades": [
      {
        "nome": "Abadia dos Dourados",
        "uf": "MG",
        "ibge": 3100104,
        "lat": -18.4831,
        "lng": -47.3916
      },
      {
        "nome": "Abaeté",
        "uf": "MG",
        "ibge": 3100203,
        "lat": -19.1551,
        "lng": -45.4444
      },
      {
        "nome": "Abre Campo",
        "uf": "MG",
        "ibge": 3100302,
        "lat": -20.2996,
        "lng": -42.4743
      },
      {
        "nome": "Acaiaca",
        "uf": "MG",
        "ibge": 3100401,
        "lat": -20.359,
        "lng": -43.1439
      },
      {
        "nome": "Açucena",
        "uf": "MG",
        "ibge": 3100500,
        "lat": -19.0671,
        "lng": -42.5419
      },
      {
        "nome": "Água Boa",
        "uf": "MG",
        "ibge": 3100609,
        "lat": -17.9914,
        "lng": -42.3806
      },
      {
        "nome": "Água Comprida",
        "uf": "MG",
        "ibge": 3100708,
        "lat": -20.0576,
        "lng": -48.1069
      },
      {
        "nome": "Aguanil",
        "uf": "MG",
        "ibge": 3100807,
        "lat": -20.9439,
        "lng": -45.3915
      },
      {
        "nome": "Águas Formosas",
        "uf": "MG",
        "ibge": 3100906,
        "lat": -17.0802,
        "lng": -40.9384
      },
      {
        "nome": "Águas Vermelhas",
        "uf": "MG",
        "ibge": 3101003,
        "lat": -15.7431,
        "lng": -41.4571
      },
      {
        "nome": "Aimorés",
        "uf": "MG",
        "ibge": 3101102,
        "lat": -19.5007,
        "lng": -41.0746
      },
      {
        "nome": "Aiuruoca",
        "uf": "MG",
        "ibge": 3101201,
        "lat": -21.9736,
        "lng": -44.6042
      },
      {
        "nome": "Alagoa",
        "uf": "MG",
        "ibge": 3101300,
        "lat": -22.171,
        "lng": -44.6413
      },
      {
        "nome": "Albertina",
        "uf": "MG",
        "ibge": 3101409,
        "lat": -22.2018,
        "lng": -46.6139
      },
      {
        "nome": "Além Paraíba",
        "uf": "MG",
        "ibge": 3101508,
        "lat": -21.8797,
        "lng": -42.7176
      },
      {
        "nome": "Alfenas",
        "uf": "MG",
        "ibge": 3101607,
        "lat": -21.4256,
        "lng": -45.9477
      },
      {
        "nome": "Alfredo Vasconcelos",
        "uf": "MG",
        "ibge": 3101631,
        "lat": -21.1535,
        "lng": -43.7718
      },
      {
        "nome": "Almenara",
        "uf": "MG",
        "ibge": 3101706,
        "lat": -16.1785,
        "lng": -40.6942
      },
      {
        "nome": "Alpercata",
        "uf": "MG",
        "ibge": 3101805,
        "lat": -18.974,
        "lng": -41.97
      },
      {
        "nome": "Alpinópolis",
        "uf": "MG",
        "ibge": 3101904,
        "lat": -20.8631,
        "lng": -46.3878
      },
      {
        "nome": "Alterosa",
        "uf": "MG",
        "ibge": 3102001,
        "lat": -21.2488,
        "lng": -46.1387
      },
      {
        "nome": "Alto Caparaó",
        "uf": "MG",
        "ibge": 3102050,
        "lat": -20.431,
        "lng": -41.8738
      },
      {
        "nome": "Alto Jequitibá",
        "uf": "MG",
        "ibge": 3153509,
        "lat": -20.4208,
        "lng": -41.967
      },
      {
        "nome": "Alto Rio Doce",
        "uf": "MG",
        "ibge": 3102100,
        "lat": -21.0281,
        "lng": -43.4067
      },
      {
        "nome": "Alvarenga",
        "uf": "MG",
        "ibge": 3102209,
        "lat": -19.4174,
        "lng": -41.7317
      },
      {
        "nome": "Alvinópolis",
        "uf": "MG",
        "ibge": 3102308,
        "lat": -20.1098,
        "lng": -43.0535
      },
      {
        "nome": "Alvorada de Minas",
        "uf": "MG",
        "ibge": 3102407,
        "lat": -18.7334,
        "lng": -43.3638
      },
      {
        "nome": "Amparo do Serra",
        "uf": "MG",
        "ibge": 3102506,
        "lat": -20.5051,
        "lng": -42.8009
      },
      {
        "nome": "Andradas",
        "uf": "MG",
        "ibge": 3102605,
        "lat": -22.0695,
        "lng": -46.5724
      },
      {
        "nome": "Andrelândia",
        "uf": "MG",
        "ibge": 3102803,
        "lat": -21.7411,
        "lng": -44.3117
      },
      {
        "nome": "Angelândia",
        "uf": "MG",
        "ibge": 3102852,
        "lat": -17.7279,
        "lng": -42.2641
      },
      {
        "nome": "Antônio Carlos",
        "uf": "MG",
        "ibge": 3102902,
        "lat": -21.321,
        "lng": -43.7451
      },
      {
        "nome": "Antônio Dias",
        "uf": "MG",
        "ibge": 3103009,
        "lat": -19.6491,
        "lng": -42.8732
      },
      {
        "nome": "Antônio Prado de Minas",
        "uf": "MG",
        "ibge": 3103108,
        "lat": -21.0192,
        "lng": -42.1109
      },
      {
        "nome": "Araçaí",
        "uf": "MG",
        "ibge": 3103207,
        "lat": -19.1955,
        "lng": -44.2493
      },
      {
        "nome": "Aracitaba",
        "uf": "MG",
        "ibge": 3103306,
        "lat": -21.3446,
        "lng": -43.3736
      },
      {
        "nome": "Araçuaí",
        "uf": "MG",
        "ibge": 3103405,
        "lat": -16.8523,
        "lng": -42.0637
      },
      {
        "nome": "Araguari",
        "uf": "MG",
        "ibge": 3103504,
        "lat": -18.6456,
        "lng": -48.1934
      },
      {
        "nome": "Arantina",
        "uf": "MG",
        "ibge": 3103603,
        "lat": -21.9102,
        "lng": -44.2555
      },
      {
        "nome": "Araponga",
        "uf": "MG",
        "ibge": 3103702,
        "lat": -20.6686,
        "lng": -42.5178
      },
      {
        "nome": "Araporã",
        "uf": "MG",
        "ibge": 3103751,
        "lat": -18.4357,
        "lng": -49.1847
      },
      {
        "nome": "Arapuá",
        "uf": "MG",
        "ibge": 3103801,
        "lat": -19.0268,
        "lng": -46.1484
      },
      {
        "nome": "Araújos",
        "uf": "MG",
        "ibge": 3103900,
        "lat": -19.9405,
        "lng": -45.1671
      },
      {
        "nome": "Araxá",
        "uf": "MG",
        "ibge": 3104007,
        "lat": -19.5902,
        "lng": -46.9438
      },
      {
        "nome": "Arceburgo",
        "uf": "MG",
        "ibge": 3104106,
        "lat": -21.359,
        "lng": -46.9401
      },
      {
        "nome": "Arcos",
        "uf": "MG",
        "ibge": 3104205,
        "lat": -20.2863,
        "lng": -45.5373
      },
      {
        "nome": "Areado",
        "uf": "MG",
        "ibge": 3104304,
        "lat": -21.3572,
        "lng": -46.1421
      },
      {
        "nome": "Argirita",
        "uf": "MG",
        "ibge": 3104403,
        "lat": -21.6083,
        "lng": -42.8292
      },
      {
        "nome": "Aricanduva",
        "uf": "MG",
        "ibge": 3104452,
        "lat": -17.8666,
        "lng": -42.5533
      },
      {
        "nome": "Arinos",
        "uf": "MG",
        "ibge": 3104502,
        "lat": -15.9187,
        "lng": -46.1043
      },
      {
        "nome": "Astolfo Dutra",
        "uf": "MG",
        "ibge": 3104601,
        "lat": -21.3184,
        "lng": -42.8572
      },
      {
        "nome": "Ataléia",
        "uf": "MG",
        "ibge": 3104700,
        "lat": -18.0438,
        "lng": -41.1149
      },
      {
        "nome": "Augusto de Lima",
        "uf": "MG",
        "ibge": 3104809,
        "lat": -18.0997,
        "lng": -44.2655
      },
      {
        "nome": "Baependi",
        "uf": "MG",
        "ibge": 3104908,
        "lat": -21.957,
        "lng": -44.8874
      },
      {
        "nome": "Baldim",
        "uf": "MG",
        "ibge": 3105004,
        "lat": -19.2832,
        "lng": -43.9613
      },
      {
        "nome": "Bambuí",
        "uf": "MG",
        "ibge": 3105103,
        "lat": -20.0166,
        "lng": -45.9754
      },
      {
        "nome": "Bandeira",
        "uf": "MG",
        "ibge": 3105202,
        "lat": -15.8783,
        "lng": -40.5622
      },
      {
        "nome": "Bandeira do Sul",
        "uf": "MG",
        "ibge": 3105301,
        "lat": -21.7308,
        "lng": -46.3833
      },
      {
        "nome": "Barão de Cocais",
        "uf": "MG",
        "ibge": 3105400,
        "lat": -19.9389,
        "lng": -43.4755
      },
      {
        "nome": "Barão de Monte Alto",
        "uf": "MG",
        "ibge": 3105509,
        "lat": -21.2444,
        "lng": -42.2372
      },
      {
        "nome": "Barbacena",
        "uf": "MG",
        "ibge": 3105608,
        "lat": -21.2214,
        "lng": -43.7703
      },
      {
        "nome": "Barra Longa",
        "uf": "MG",
        "ibge": 3105707,
        "lat": -20.2869,
        "lng": -43.0402
      },
      {
        "nome": "Barroso",
        "uf": "MG",
        "ibge": 3105905,
        "lat": -21.1907,
        "lng": -43.972
      },
      {
        "nome": "Bela Vista de Minas",
        "uf": "MG",
        "ibge": 3106002,
        "lat": -19.8302,
        "lng": -43.0922
      },
      {
        "nome": "Belmiro Braga",
        "uf": "MG",
        "ibge": 3106101,
        "lat": -21.944,
        "lng": -43.4084
      },
      {
        "nome": "Belo Oriente",
        "uf": "MG",
        "ibge": 3106309,
        "lat": -19.2199,
        "lng": -42.4828
      },
      {
        "nome": "Belo Vale",
        "uf": "MG",
        "ibge": 3106408,
        "lat": -20.4077,
        "lng": -44.0275
      },
      {
        "nome": "Berilo",
        "uf": "MG",
        "ibge": 3106507,
        "lat": -16.9567,
        "lng": -42.4606
      },
      {
        "nome": "Berizal",
        "uf": "MG",
        "ibge": 3106655,
        "lat": -15.61,
        "lng": -41.7432
      },
      {
        "nome": "Bertópolis",
        "uf": "MG",
        "ibge": 3106606,
        "lat": -17.059,
        "lng": -40.58
      },
      {
        "nome": "Betim",
        "uf": "MG",
        "ibge": 3106705,
        "lat": -19.9668,
        "lng": -44.2008
      },
      {
        "nome": "Bias Fortes",
        "uf": "MG",
        "ibge": 3106804,
        "lat": -21.602,
        "lng": -43.7574
      },
      {
        "nome": "Bicas",
        "uf": "MG",
        "ibge": 3106903,
        "lat": -21.7232,
        "lng": -43.056
      },
      {
        "nome": "Biquinhas",
        "uf": "MG",
        "ibge": 3107000,
        "lat": -18.7754,
        "lng": -45.4974
      },
      {
        "nome": "Boa Esperança",
        "uf": "MG",
        "ibge": 3107109,
        "lat": -21.0927,
        "lng": -45.5612
      },
      {
        "nome": "Bocaina de Minas",
        "uf": "MG",
        "ibge": 3107208,
        "lat": -22.1697,
        "lng": -44.3972
      },
      {
        "nome": "Bocaiúva",
        "uf": "MG",
        "ibge": 3107307,
        "lat": -17.1135,
        "lng": -43.8104
      },
      {
        "nome": "Bom Despacho",
        "uf": "MG",
        "ibge": 3107406,
        "lat": -19.7386,
        "lng": -45.2622
      },
      {
        "nome": "Bom Jardim de Minas",
        "uf": "MG",
        "ibge": 3107505,
        "lat": -21.9479,
        "lng": -44.1885
      },
      {
        "nome": "Bom Jesus da Penha",
        "uf": "MG",
        "ibge": 3107604,
        "lat": -21.0148,
        "lng": -46.5174
      },
      {
        "nome": "Bom Jesus do Amparo",
        "uf": "MG",
        "ibge": 3107703,
        "lat": -19.7054,
        "lng": -43.4782
      },
      {
        "nome": "Bom Jesus do Galho",
        "uf": "MG",
        "ibge": 3107802,
        "lat": -19.836,
        "lng": -42.3165
      },
      {
        "nome": "Bom Repouso",
        "uf": "MG",
        "ibge": 3107901,
        "lat": -22.4675,
        "lng": -46.144
      },
      {
        "nome": "Bom Sucesso",
        "uf": "MG",
        "ibge": 3108008,
        "lat": -21.0329,
        "lng": -44.7537
      },
      {
        "nome": "Bonfim",
        "uf": "MG",
        "ibge": 3108107,
        "lat": -20.3302,
        "lng": -44.2366
      },
      {
        "nome": "Bonfinópolis de Minas",
        "uf": "MG",
        "ibge": 3108206,
        "lat": -16.568,
        "lng": -45.9839
      },
      {
        "nome": "Bonito de Minas",
        "uf": "MG",
        "ibge": 3108255,
        "lat": -15.3231,
        "lng": -44.7543
      },
      {
        "nome": "Borda da Mata",
        "uf": "MG",
        "ibge": 3108305,
        "lat": -22.2707,
        "lng": -46.1653
      },
      {
        "nome": "Botelhos",
        "uf": "MG",
        "ibge": 3108404,
        "lat": -21.6412,
        "lng": -46.391
      },
      {
        "nome": "Botumirim",
        "uf": "MG",
        "ibge": 3108503,
        "lat": -16.8657,
        "lng": -43.0086
      },
      {
        "nome": "Brás Pires",
        "uf": "MG",
        "ibge": 3108701,
        "lat": -20.8419,
        "lng": -43.2406
      },
      {
        "nome": "Brasilândia de Minas",
        "uf": "MG",
        "ibge": 3108552,
        "lat": -16.9999,
        "lng": -46.0081
      },
      {
        "nome": "Brasília de Minas",
        "uf": "MG",
        "ibge": 3108602,
        "lat": -16.2104,
        "lng": -44.4299
      },
      {
        "nome": "Braúnas",
        "uf": "MG",
        "ibge": 3108800,
        "lat": -19.0562,
        "lng": -42.7099
      },
      {
        "nome": "Brazópolis",
        "uf": "MG",
        "ibge": 3108909,
        "lat": -22.4743,
        "lng": -45.6166
      },
      {
        "nome": "Brumadinho",
        "uf": "MG",
        "ibge": 3109006,
        "lat": -20.151,
        "lng": -44.2007
      },
      {
        "nome": "Bueno Brandão",
        "uf": "MG",
        "ibge": 3109105,
        "lat": -22.4383,
        "lng": -46.3491
      },
      {
        "nome": "Buenópolis",
        "uf": "MG",
        "ibge": 3109204,
        "lat": -17.8744,
        "lng": -44.1775
      },
      {
        "nome": "Bugre",
        "uf": "MG",
        "ibge": 3109253,
        "lat": -19.4231,
        "lng": -42.2552
      },
      {
        "nome": "Buritis",
        "uf": "MG",
        "ibge": 3109303,
        "lat": -15.6218,
        "lng": -46.4221
      },
      {
        "nome": "Buritizeiro",
        "uf": "MG",
        "ibge": 3109402,
        "lat": -17.3656,
        "lng": -44.9606
      },
      {
        "nome": "Cabeceira Grande",
        "uf": "MG",
        "ibge": 3109451,
        "lat": -16.0335,
        "lng": -47.0862
      },
      {
        "nome": "Cabo Verde",
        "uf": "MG",
        "ibge": 3109501,
        "lat": -21.4699,
        "lng": -46.3919
      },
      {
        "nome": "Cachoeira da Prata",
        "uf": "MG",
        "ibge": 3109600,
        "lat": -19.521,
        "lng": -44.4544
      },
      {
        "nome": "Cachoeira de Minas",
        "uf": "MG",
        "ibge": 3109709,
        "lat": -22.3511,
        "lng": -45.7809
      },
      {
        "nome": "Cachoeira de Pajeú",
        "uf": "MG",
        "ibge": 3102704,
        "lat": -15.9688,
        "lng": -41.4948
      },
      {
        "nome": "Cachoeira Dourada",
        "uf": "MG",
        "ibge": 3109808,
        "lat": -18.5161,
        "lng": -49.5039
      },
      {
        "nome": "Caetanópolis",
        "uf": "MG",
        "ibge": 3109907,
        "lat": -19.2971,
        "lng": -44.4189
      },
      {
        "nome": "Caeté",
        "uf": "MG",
        "ibge": 3110004,
        "lat": -19.8826,
        "lng": -43.6704
      },
      {
        "nome": "Caiana",
        "uf": "MG",
        "ibge": 3110103,
        "lat": -20.6956,
        "lng": -41.9292
      },
      {
        "nome": "Cajuri",
        "uf": "MG",
        "ibge": 3110202,
        "lat": -20.7903,
        "lng": -42.7925
      },
      {
        "nome": "Caldas",
        "uf": "MG",
        "ibge": 3110301,
        "lat": -21.9183,
        "lng": -46.3843
      },
      {
        "nome": "Camacho",
        "uf": "MG",
        "ibge": 3110400,
        "lat": -20.6294,
        "lng": -45.1593
      },
      {
        "nome": "Camanducaia",
        "uf": "MG",
        "ibge": 3110509,
        "lat": -22.7515,
        "lng": -46.1494
      },
      {
        "nome": "Cambuí",
        "uf": "MG",
        "ibge": 3110608,
        "lat": -22.6115,
        "lng": -46.0572
      },
      {
        "nome": "Cambuquira",
        "uf": "MG",
        "ibge": 3110707,
        "lat": -21.854,
        "lng": -45.2896
      },
      {
        "nome": "Campanário",
        "uf": "MG",
        "ibge": 3110806,
        "lat": -18.2427,
        "lng": -41.7355
      },
      {
        "nome": "Campanha",
        "uf": "MG",
        "ibge": 3110905,
        "lat": -21.836,
        "lng": -45.4004
      },
      {
        "nome": "Campestre",
        "uf": "MG",
        "ibge": 3111002,
        "lat": -21.7079,
        "lng": -46.2381
      },
      {
        "nome": "Campina Verde",
        "uf": "MG",
        "ibge": 3111101,
        "lat": -19.5382,
        "lng": -49.4862
      },
      {
        "nome": "Campo Azul",
        "uf": "MG",
        "ibge": 3111150,
        "lat": -16.5028,
        "lng": -44.8096
      },
      {
        "nome": "Campo Belo",
        "uf": "MG",
        "ibge": 3111200,
        "lat": -20.8932,
        "lng": -45.2699
      },
      {
        "nome": "Campo do Meio",
        "uf": "MG",
        "ibge": 3111309,
        "lat": -21.1127,
        "lng": -45.8273
      },
      {
        "nome": "Campo Florido",
        "uf": "MG",
        "ibge": 3111408,
        "lat": -19.7631,
        "lng": -48.5716
      },
      {
        "nome": "Campos Altos",
        "uf": "MG",
        "ibge": 3111507,
        "lat": -19.6914,
        "lng": -46.1725
      },
      {
        "nome": "Campos Gerais",
        "uf": "MG",
        "ibge": 3111606,
        "lat": -21.237,
        "lng": -45.7569
      },
      {
        "nome": "Cana Verde",
        "uf": "MG",
        "ibge": 3111903,
        "lat": -21.0232,
        "lng": -45.1801
      },
      {
        "nome": "Canaã",
        "uf": "MG",
        "ibge": 3111705,
        "lat": -20.6869,
        "lng": -42.6167
      },
      {
        "nome": "Canápolis",
        "uf": "MG",
        "ibge": 3111804,
        "lat": -18.7212,
        "lng": -49.2035
      },
      {
        "nome": "Candeias",
        "uf": "MG",
        "ibge": 3112000,
        "lat": -20.7692,
        "lng": -45.2765
      },
      {
        "nome": "Cantagalo",
        "uf": "MG",
        "ibge": 3112059,
        "lat": -18.5248,
        "lng": -42.6223
      },
      {
        "nome": "Caparaó",
        "uf": "MG",
        "ibge": 3112109,
        "lat": -20.5289,
        "lng": -41.9061
      },
      {
        "nome": "Capela Nova",
        "uf": "MG",
        "ibge": 3112208,
        "lat": -20.9179,
        "lng": -43.622
      },
      {
        "nome": "Capelinha",
        "uf": "MG",
        "ibge": 3112307,
        "lat": -17.6888,
        "lng": -42.5147
      },
      {
        "nome": "Capetinga",
        "uf": "MG",
        "ibge": 3112406,
        "lat": -20.6163,
        "lng": -47.0571
      },
      {
        "nome": "Capim Branco",
        "uf": "MG",
        "ibge": 3112505,
        "lat": -19.5471,
        "lng": -44.1304
      },
      {
        "nome": "Capinópolis",
        "uf": "MG",
        "ibge": 3112604,
        "lat": -18.6862,
        "lng": -49.5706
      },
      {
        "nome": "Capitão Andrade",
        "uf": "MG",
        "ibge": 3112653,
        "lat": -19.0748,
        "lng": -41.8614
      },
      {
        "nome": "Capitão Enéas",
        "uf": "MG",
        "ibge": 3112703,
        "lat": -16.3265,
        "lng": -43.7084
      },
      {
        "nome": "Capitólio",
        "uf": "MG",
        "ibge": 3112802,
        "lat": -20.6164,
        "lng": -46.0493
      },
      {
        "nome": "Caputira",
        "uf": "MG",
        "ibge": 3112901,
        "lat": -20.1703,
        "lng": -42.2683
      },
      {
        "nome": "Caraí",
        "uf": "MG",
        "ibge": 3113008,
        "lat": -17.1862,
        "lng": -41.7004
      },
      {
        "nome": "Caranaíba",
        "uf": "MG",
        "ibge": 3113107,
        "lat": -20.8707,
        "lng": -43.7417
      },
      {
        "nome": "Carandaí",
        "uf": "MG",
        "ibge": 3113206,
        "lat": -20.9566,
        "lng": -43.811
      },
      {
        "nome": "Carangola",
        "uf": "MG",
        "ibge": 3113305,
        "lat": -20.7343,
        "lng": -42.0313
      },
      {
        "nome": "Caratinga",
        "uf": "MG",
        "ibge": 3113404,
        "lat": -19.7868,
        "lng": -42.1292
      },
      {
        "nome": "Carbonita",
        "uf": "MG",
        "ibge": 3113503,
        "lat": -17.5255,
        "lng": -43.0137
      },
      {
        "nome": "Careaçu",
        "uf": "MG",
        "ibge": 3113602,
        "lat": -22.0424,
        "lng": -45.696
      },
      {
        "nome": "Carlos Chagas",
        "uf": "MG",
        "ibge": 3113701,
        "lat": -17.6973,
        "lng": -40.7723
      },
      {
        "nome": "Carmésia",
        "uf": "MG",
        "ibge": 3113800,
        "lat": -19.0877,
        "lng": -43.1382
      },
      {
        "nome": "Carmo da Cachoeira",
        "uf": "MG",
        "ibge": 3113909,
        "lat": -21.4633,
        "lng": -45.2201
      },
      {
        "nome": "Carmo da Mata",
        "uf": "MG",
        "ibge": 3114006,
        "lat": -20.5575,
        "lng": -44.8735
      },
      {
        "nome": "Carmo de Minas",
        "uf": "MG",
        "ibge": 3114105,
        "lat": -22.1204,
        "lng": -45.1307
      },
      {
        "nome": "Carmo do Cajuru",
        "uf": "MG",
        "ibge": 3114204,
        "lat": -20.1912,
        "lng": -44.7664
      },
      {
        "nome": "Carmo do Paranaíba",
        "uf": "MG",
        "ibge": 3114303,
        "lat": -18.991,
        "lng": -46.3167
      },
      {
        "nome": "Carmo do Rio Claro",
        "uf": "MG",
        "ibge": 3114402,
        "lat": -20.9736,
        "lng": -46.1149
      },
      {
        "nome": "Carmópolis de Minas",
        "uf": "MG",
        "ibge": 3114501,
        "lat": -20.5396,
        "lng": -44.6336
      },
      {
        "nome": "Carneirinho",
        "uf": "MG",
        "ibge": 3114550,
        "lat": -19.6987,
        "lng": -50.6894
      },
      {
        "nome": "Carrancas",
        "uf": "MG",
        "ibge": 3114600,
        "lat": -21.4898,
        "lng": -44.6446
      },
      {
        "nome": "Carvalhópolis",
        "uf": "MG",
        "ibge": 3114709,
        "lat": -21.7735,
        "lng": -45.8421
      },
      {
        "nome": "Carvalhos",
        "uf": "MG",
        "ibge": 3114808,
        "lat": -22,
        "lng": -44.4632
      },
      {
        "nome": "Casa Grande",
        "uf": "MG",
        "ibge": 3114907,
        "lat": -20.7925,
        "lng": -43.9343
      },
      {
        "nome": "Cascalho Rico",
        "uf": "MG",
        "ibge": 3115003,
        "lat": -18.5772,
        "lng": -47.8716
      },
      {
        "nome": "Cássia",
        "uf": "MG",
        "ibge": 3115102,
        "lat": -20.5831,
        "lng": -46.9201
      },
      {
        "nome": "Cataguases",
        "uf": "MG",
        "ibge": 3115300,
        "lat": -21.3924,
        "lng": -42.6896
      },
      {
        "nome": "Catas Altas",
        "uf": "MG",
        "ibge": 3115359,
        "lat": -20.0734,
        "lng": -43.4061
      },
      {
        "nome": "Catas Altas da Noruega",
        "uf": "MG",
        "ibge": 3115409,
        "lat": -20.6901,
        "lng": -43.4939
      },
      {
        "nome": "Catuji",
        "uf": "MG",
        "ibge": 3115458,
        "lat": -17.3018,
        "lng": -41.5276
      },
      {
        "nome": "Catuti",
        "uf": "MG",
        "ibge": 3115474,
        "lat": -15.3616,
        "lng": -42.9627
      },
      {
        "nome": "Caxambu",
        "uf": "MG",
        "ibge": 3115508,
        "lat": -21.9753,
        "lng": -44.9319
      },
      {
        "nome": "Cedro do Abaeté",
        "uf": "MG",
        "ibge": 3115607,
        "lat": -19.1458,
        "lng": -45.712
      },
      {
        "nome": "Central de Minas",
        "uf": "MG",
        "ibge": 3115706,
        "lat": -18.7612,
        "lng": -41.3143
      },
      {
        "nome": "Centralina",
        "uf": "MG",
        "ibge": 3115805,
        "lat": -18.5852,
        "lng": -49.2014
      },
      {
        "nome": "Chácara",
        "uf": "MG",
        "ibge": 3115904,
        "lat": -21.6733,
        "lng": -43.215
      },
      {
        "nome": "Chalé",
        "uf": "MG",
        "ibge": 3116001,
        "lat": -20.0453,
        "lng": -41.6897
      },
      {
        "nome": "Chapada do Norte",
        "uf": "MG",
        "ibge": 3116100,
        "lat": -17.0881,
        "lng": -42.5392
      },
      {
        "nome": "Chapada Gaúcha",
        "uf": "MG",
        "ibge": 3116159,
        "lat": -15.3014,
        "lng": -45.6116
      },
      {
        "nome": "Chiador",
        "uf": "MG",
        "ibge": 3116209,
        "lat": -21.9996,
        "lng": -43.0617
      },
      {
        "nome": "Cipotânea",
        "uf": "MG",
        "ibge": 3116308,
        "lat": -20.9026,
        "lng": -43.3629
      },
      {
        "nome": "Claraval",
        "uf": "MG",
        "ibge": 3116407,
        "lat": -20.397,
        "lng": -47.2768
      },
      {
        "nome": "Claro dos Poções",
        "uf": "MG",
        "ibge": 3116506,
        "lat": -17.082,
        "lng": -44.2061
      },
      {
        "nome": "Cláudio",
        "uf": "MG",
        "ibge": 3116605,
        "lat": -20.4437,
        "lng": -44.7673
      },
      {
        "nome": "Coimbra",
        "uf": "MG",
        "ibge": 3116704,
        "lat": -20.8535,
        "lng": -42.8008
      },
      {
        "nome": "Coluna",
        "uf": "MG",
        "ibge": 3116803,
        "lat": -18.2311,
        "lng": -42.8352
      },
      {
        "nome": "Comendador Gomes",
        "uf": "MG",
        "ibge": 3116902,
        "lat": -19.6973,
        "lng": -49.0789
      },
      {
        "nome": "Comercinho",
        "uf": "MG",
        "ibge": 3117009,
        "lat": -16.2963,
        "lng": -41.7945
      },
      {
        "nome": "Conceição da Aparecida",
        "uf": "MG",
        "ibge": 3117108,
        "lat": -21.096,
        "lng": -46.2049
      },
      {
        "nome": "Conceição da Barra de Minas",
        "uf": "MG",
        "ibge": 3115201,
        "lat": -21.1316,
        "lng": -44.4729
      },
      {
        "nome": "Conceição das Alagoas",
        "uf": "MG",
        "ibge": 3117306,
        "lat": -19.9172,
        "lng": -48.3839
      },
      {
        "nome": "Conceição das Pedras",
        "uf": "MG",
        "ibge": 3117207,
        "lat": -22.1576,
        "lng": -45.4562
      },
      {
        "nome": "Conceição de Ipanema",
        "uf": "MG",
        "ibge": 3117405,
        "lat": -19.9326,
        "lng": -41.6908
      },
      {
        "nome": "Conceição do Mato Dentro",
        "uf": "MG",
        "ibge": 3117504,
        "lat": -19.0344,
        "lng": -43.4221
      },
      {
        "nome": "Conceição do Pará",
        "uf": "MG",
        "ibge": 3117603,
        "lat": -19.7456,
        "lng": -44.8945
      },
      {
        "nome": "Conceição do Rio Verde",
        "uf": "MG",
        "ibge": 3117702,
        "lat": -21.8778,
        "lng": -45.087
      },
      {
        "nome": "Conceição dos Ouros",
        "uf": "MG",
        "ibge": 3117801,
        "lat": -22.4078,
        "lng": -45.7996
      },
      {
        "nome": "Cônego Marinho",
        "uf": "MG",
        "ibge": 3117836,
        "lat": -15.2892,
        "lng": -44.4181
      },
      {
        "nome": "Confins",
        "uf": "MG",
        "ibge": 3117876,
        "lat": -19.6282,
        "lng": -43.9931
      },
      {
        "nome": "Congonhal",
        "uf": "MG",
        "ibge": 3117900,
        "lat": -22.1488,
        "lng": -46.043
      },
      {
        "nome": "Congonhas",
        "uf": "MG",
        "ibge": 3118007,
        "lat": -20.4958,
        "lng": -43.851
      },
      {
        "nome": "Congonhas do Norte",
        "uf": "MG",
        "ibge": 3118106,
        "lat": -18.8021,
        "lng": -43.6767
      },
      {
        "nome": "Conquista",
        "uf": "MG",
        "ibge": 3118205,
        "lat": -19.9312,
        "lng": -47.5492
      },
      {
        "nome": "Conselheiro Lafaiete",
        "uf": "MG",
        "ibge": 3118304,
        "lat": -20.6634,
        "lng": -43.7846
      },
      {
        "nome": "Conselheiro Pena",
        "uf": "MG",
        "ibge": 3118403,
        "lat": -19.1789,
        "lng": -41.4736
      },
      {
        "nome": "Consolação",
        "uf": "MG",
        "ibge": 3118502,
        "lat": -22.5493,
        "lng": -45.9255
      },
      {
        "nome": "Contagem",
        "uf": "MG",
        "ibge": 3118601,
        "lat": -19.9321,
        "lng": -44.0539
      },
      {
        "nome": "Coqueiral",
        "uf": "MG",
        "ibge": 3118700,
        "lat": -21.1858,
        "lng": -45.4366
      },
      {
        "nome": "Coração de Jesus",
        "uf": "MG",
        "ibge": 3118809,
        "lat": -16.6841,
        "lng": -44.3635
      },
      {
        "nome": "Cordisburgo",
        "uf": "MG",
        "ibge": 3118908,
        "lat": -19.1224,
        "lng": -44.3224
      },
      {
        "nome": "Cordislândia",
        "uf": "MG",
        "ibge": 3119005,
        "lat": -21.7891,
        "lng": -45.6999
      },
      {
        "nome": "Corinto",
        "uf": "MG",
        "ibge": 3119104,
        "lat": -18.369,
        "lng": -44.4542
      },
      {
        "nome": "Coroaci",
        "uf": "MG",
        "ibge": 3119203,
        "lat": -18.6156,
        "lng": -42.2791
      },
      {
        "nome": "Coromandel",
        "uf": "MG",
        "ibge": 3119302,
        "lat": -18.4734,
        "lng": -47.1933
      },
      {
        "nome": "Coronel Fabriciano",
        "uf": "MG",
        "ibge": 3119401,
        "lat": -19.5179,
        "lng": -42.6276
      },
      {
        "nome": "Coronel Murta",
        "uf": "MG",
        "ibge": 3119500,
        "lat": -16.6148,
        "lng": -42.184
      },
      {
        "nome": "Coronel Pacheco",
        "uf": "MG",
        "ibge": 3119609,
        "lat": -21.5898,
        "lng": -43.256
      },
      {
        "nome": "Coronel Xavier Chaves",
        "uf": "MG",
        "ibge": 3119708,
        "lat": -21.0277,
        "lng": -44.2206
      },
      {
        "nome": "Córrego Danta",
        "uf": "MG",
        "ibge": 3119807,
        "lat": -19.8198,
        "lng": -45.9032
      },
      {
        "nome": "Córrego do Bom Jesus",
        "uf": "MG",
        "ibge": 3119906,
        "lat": -22.6269,
        "lng": -46.0241
      },
      {
        "nome": "Córrego Fundo",
        "uf": "MG",
        "ibge": 3119955,
        "lat": -20.4474,
        "lng": -45.5617
      },
      {
        "nome": "Córrego Novo",
        "uf": "MG",
        "ibge": 3120003,
        "lat": -19.8361,
        "lng": -42.3988
      },
      {
        "nome": "Couto de Magalhães de Minas",
        "uf": "MG",
        "ibge": 3120102,
        "lat": -18.0727,
        "lng": -43.4648
      },
      {
        "nome": "Crisólita",
        "uf": "MG",
        "ibge": 3120151,
        "lat": -17.2381,
        "lng": -40.9184
      },
      {
        "nome": "Cristais",
        "uf": "MG",
        "ibge": 3120201,
        "lat": -20.8733,
        "lng": -45.5167
      },
      {
        "nome": "Cristália",
        "uf": "MG",
        "ibge": 3120300,
        "lat": -16.716,
        "lng": -42.8571
      },
      {
        "nome": "Cristiano Otoni",
        "uf": "MG",
        "ibge": 3120409,
        "lat": -20.8324,
        "lng": -43.8166
      },
      {
        "nome": "Cristina",
        "uf": "MG",
        "ibge": 3120508,
        "lat": -22.208,
        "lng": -45.2673
      },
      {
        "nome": "Crucilândia",
        "uf": "MG",
        "ibge": 3120607,
        "lat": -20.3923,
        "lng": -44.3334
      },
      {
        "nome": "Cruzeiro da Fortaleza",
        "uf": "MG",
        "ibge": 3120706,
        "lat": -18.944,
        "lng": -46.6669
      },
      {
        "nome": "Cruzília",
        "uf": "MG",
        "ibge": 3120805,
        "lat": -21.84,
        "lng": -44.8067
      },
      {
        "nome": "Cuparaque",
        "uf": "MG",
        "ibge": 3120839,
        "lat": -18.9648,
        "lng": -41.0986
      },
      {
        "nome": "Curral de Dentro",
        "uf": "MG",
        "ibge": 3120870,
        "lat": -15.9327,
        "lng": -41.8557
      },
      {
        "nome": "Curvelo",
        "uf": "MG",
        "ibge": 3120904,
        "lat": -18.7527,
        "lng": -44.4303
      },
      {
        "nome": "Datas",
        "uf": "MG",
        "ibge": 3121001,
        "lat": -18.4478,
        "lng": -43.6591
      },
      {
        "nome": "Delfim Moreira",
        "uf": "MG",
        "ibge": 3121100,
        "lat": -22.5036,
        "lng": -45.2792
      },
      {
        "nome": "Delfinópolis",
        "uf": "MG",
        "ibge": 3121209,
        "lat": -20.3468,
        "lng": -46.8456
      },
      {
        "nome": "Delta",
        "uf": "MG",
        "ibge": 3121258,
        "lat": -19.9721,
        "lng": -47.7841
      },
      {
        "nome": "Descoberto",
        "uf": "MG",
        "ibge": 3121308,
        "lat": -21.46,
        "lng": -42.9618
      },
      {
        "nome": "Desterro de Entre Rios",
        "uf": "MG",
        "ibge": 3121407,
        "lat": -20.665,
        "lng": -44.3334
      },
      {
        "nome": "Desterro do Melo",
        "uf": "MG",
        "ibge": 3121506,
        "lat": -21.143,
        "lng": -43.5178
      },
      {
        "nome": "Diamantina",
        "uf": "MG",
        "ibge": 3121605,
        "lat": -18.2413,
        "lng": -43.6031
      },
      {
        "nome": "Diogo de Vasconcelos",
        "uf": "MG",
        "ibge": 3121704,
        "lat": -20.4879,
        "lng": -43.1953
      },
      {
        "nome": "Dionísio",
        "uf": "MG",
        "ibge": 3121803,
        "lat": -19.8433,
        "lng": -42.7701
      },
      {
        "nome": "Divinésia",
        "uf": "MG",
        "ibge": 3121902,
        "lat": -20.9917,
        "lng": -43.0003
      },
      {
        "nome": "Divino",
        "uf": "MG",
        "ibge": 3122009,
        "lat": -20.6134,
        "lng": -42.1438
      },
      {
        "nome": "Divino das Laranjeiras",
        "uf": "MG",
        "ibge": 3122108,
        "lat": -18.7755,
        "lng": -41.4781
      },
      {
        "nome": "Divinolândia de Minas",
        "uf": "MG",
        "ibge": 3122207,
        "lat": -18.8004,
        "lng": -42.6103
      },
      {
        "nome": "Divinópolis",
        "uf": "MG",
        "ibge": 3122306,
        "lat": -20.1446,
        "lng": -44.8912
      },
      {
        "nome": "Divisa Alegre",
        "uf": "MG",
        "ibge": 3122355,
        "lat": -15.7221,
        "lng": -41.3463
      },
      {
        "nome": "Divisa Nova",
        "uf": "MG",
        "ibge": 3122405,
        "lat": -21.5092,
        "lng": -46.1904
      },
      {
        "nome": "Divisópolis",
        "uf": "MG",
        "ibge": 3122454,
        "lat": -15.7254,
        "lng": -40.9997
      },
      {
        "nome": "Dom Bosco",
        "uf": "MG",
        "ibge": 3122470,
        "lat": -16.652,
        "lng": -46.2597
      },
      {
        "nome": "Dom Cavati",
        "uf": "MG",
        "ibge": 3122504,
        "lat": -19.3735,
        "lng": -42.1121
      },
      {
        "nome": "Dom Joaquim",
        "uf": "MG",
        "ibge": 3122603,
        "lat": -18.961,
        "lng": -43.2544
      },
      {
        "nome": "Dom Silvério",
        "uf": "MG",
        "ibge": 3122702,
        "lat": -20.1627,
        "lng": -42.9627
      },
      {
        "nome": "Dom Viçoso",
        "uf": "MG",
        "ibge": 3122801,
        "lat": -22.2511,
        "lng": -45.1643
      },
      {
        "nome": "Dona Eusébia",
        "uf": "MG",
        "ibge": 3122900,
        "lat": -21.319,
        "lng": -42.807
      },
      {
        "nome": "Dores de Campos",
        "uf": "MG",
        "ibge": 3123007,
        "lat": -21.1139,
        "lng": -44.0207
      },
      {
        "nome": "Dores de Guanhães",
        "uf": "MG",
        "ibge": 3123106,
        "lat": -19.0516,
        "lng": -42.9254
      },
      {
        "nome": "Dores do Indaiá",
        "uf": "MG",
        "ibge": 3123205,
        "lat": -19.4628,
        "lng": -45.5927
      },
      {
        "nome": "Dores do Turvo",
        "uf": "MG",
        "ibge": 3123304,
        "lat": -20.9785,
        "lng": -43.1834
      },
      {
        "nome": "Doresópolis",
        "uf": "MG",
        "ibge": 3123403,
        "lat": -20.2868,
        "lng": -45.9007
      },
      {
        "nome": "Douradoquara",
        "uf": "MG",
        "ibge": 3123502,
        "lat": -18.4338,
        "lng": -47.5993
      },
      {
        "nome": "Durandé",
        "uf": "MG",
        "ibge": 3123528,
        "lat": -20.2058,
        "lng": -41.7977
      },
      {
        "nome": "Elói Mendes",
        "uf": "MG",
        "ibge": 3123601,
        "lat": -21.6088,
        "lng": -45.5691
      },
      {
        "nome": "Engenheiro Caldas",
        "uf": "MG",
        "ibge": 3123700,
        "lat": -19.2065,
        "lng": -42.0503
      },
      {
        "nome": "Engenheiro Navarro",
        "uf": "MG",
        "ibge": 3123809,
        "lat": -17.2831,
        "lng": -43.947
      },
      {
        "nome": "Entre Folhas",
        "uf": "MG",
        "ibge": 3123858,
        "lat": -19.6218,
        "lng": -42.2306
      },
      {
        "nome": "Entre Rios de Minas",
        "uf": "MG",
        "ibge": 3123908,
        "lat": -20.6706,
        "lng": -44.0654
      },
      {
        "nome": "Ervália",
        "uf": "MG",
        "ibge": 3124005,
        "lat": -20.8403,
        "lng": -42.6544
      },
      {
        "nome": "Esmeraldas",
        "uf": "MG",
        "ibge": 3124104,
        "lat": -19.764,
        "lng": -44.3065
      },
      {
        "nome": "Espera Feliz",
        "uf": "MG",
        "ibge": 3124203,
        "lat": -20.6508,
        "lng": -41.9119
      },
      {
        "nome": "Espinosa",
        "uf": "MG",
        "ibge": 3124302,
        "lat": -14.9249,
        "lng": -42.809
      },
      {
        "nome": "Espírito Santo do Dourado",
        "uf": "MG",
        "ibge": 3124401,
        "lat": -22.0454,
        "lng": -45.9548
      },
      {
        "nome": "Estiva",
        "uf": "MG",
        "ibge": 3124500,
        "lat": -22.4577,
        "lng": -46.0191
      },
      {
        "nome": "Estrela Dalva",
        "uf": "MG",
        "ibge": 3124609,
        "lat": -21.7412,
        "lng": -42.4574
      },
      {
        "nome": "Estrela do Indaiá",
        "uf": "MG",
        "ibge": 3124708,
        "lat": -19.5169,
        "lng": -45.7859
      },
      {
        "nome": "Estrela do Sul",
        "uf": "MG",
        "ibge": 3124807,
        "lat": -18.7399,
        "lng": -47.6956
      },
      {
        "nome": "Eugenópolis",
        "uf": "MG",
        "ibge": 3124906,
        "lat": -21.1002,
        "lng": -42.1878
      },
      {
        "nome": "Ewbank da Câmara",
        "uf": "MG",
        "ibge": 3125002,
        "lat": -21.5498,
        "lng": -43.5068
      },
      {
        "nome": "Extrema",
        "uf": "MG",
        "ibge": 3125101,
        "lat": -22.854,
        "lng": -46.3178
      },
      {
        "nome": "Fama",
        "uf": "MG",
        "ibge": 3125200,
        "lat": -21.4089,
        "lng": -45.8286
      },
      {
        "nome": "Faria Lemos",
        "uf": "MG",
        "ibge": 3125309,
        "lat": -20.8097,
        "lng": -42.0213
      },
      {
        "nome": "Felício dos Santos",
        "uf": "MG",
        "ibge": 3125408,
        "lat": -18.0755,
        "lng": -43.2422
      },
      {
        "nome": "Felisburgo",
        "uf": "MG",
        "ibge": 3125606,
        "lat": -16.6348,
        "lng": -40.7605
      },
      {
        "nome": "Felixlândia",
        "uf": "MG",
        "ibge": 3125705,
        "lat": -18.7507,
        "lng": -44.9004
      },
      {
        "nome": "Fernandes Tourinho",
        "uf": "MG",
        "ibge": 3125804,
        "lat": -19.1541,
        "lng": -42.0803
      },
      {
        "nome": "Ferros",
        "uf": "MG",
        "ibge": 3125903,
        "lat": -19.2343,
        "lng": -43.0192
      },
      {
        "nome": "Fervedouro",
        "uf": "MG",
        "ibge": 3125952,
        "lat": -20.726,
        "lng": -42.279
      },
      {
        "nome": "Florestal",
        "uf": "MG",
        "ibge": 3126000,
        "lat": -19.888,
        "lng": -44.4318
      },
      {
        "nome": "Formiga",
        "uf": "MG",
        "ibge": 3126109,
        "lat": -20.4618,
        "lng": -45.4268
      },
      {
        "nome": "Formoso",
        "uf": "MG",
        "ibge": 3126208,
        "lat": -14.9446,
        "lng": -46.2371
      },
      {
        "nome": "Fortaleza de Minas",
        "uf": "MG",
        "ibge": 3126307,
        "lat": -20.8508,
        "lng": -46.712
      },
      {
        "nome": "Fortuna de Minas",
        "uf": "MG",
        "ibge": 3126406,
        "lat": -19.5578,
        "lng": -44.4472
      },
      {
        "nome": "Francisco Badaró",
        "uf": "MG",
        "ibge": 3126505,
        "lat": -16.9883,
        "lng": -42.3568
      },
      {
        "nome": "Francisco Dumont",
        "uf": "MG",
        "ibge": 3126604,
        "lat": -17.3107,
        "lng": -44.2317
      },
      {
        "nome": "Francisco Sá",
        "uf": "MG",
        "ibge": 3126703,
        "lat": -16.4827,
        "lng": -43.4896
      },
      {
        "nome": "Franciscópolis",
        "uf": "MG",
        "ibge": 3126752,
        "lat": -17.9578,
        "lng": -42.0094
      },
      {
        "nome": "Frei Gaspar",
        "uf": "MG",
        "ibge": 3126802,
        "lat": -18.0709,
        "lng": -41.4325
      },
      {
        "nome": "Frei Inocêncio",
        "uf": "MG",
        "ibge": 3126901,
        "lat": -18.5556,
        "lng": -41.9121
      },
      {
        "nome": "Frei Lagonegro",
        "uf": "MG",
        "ibge": 3126950,
        "lat": -18.1751,
        "lng": -42.7617
      },
      {
        "nome": "Fronteira",
        "uf": "MG",
        "ibge": 3127008,
        "lat": -20.2748,
        "lng": -49.1984
      },
      {
        "nome": "Fronteira dos Vales",
        "uf": "MG",
        "ibge": 3127057,
        "lat": -16.8898,
        "lng": -40.923
      },
      {
        "nome": "Fruta de Leite",
        "uf": "MG",
        "ibge": 3127073,
        "lat": -16.1225,
        "lng": -42.5288
      },
      {
        "nome": "Frutal",
        "uf": "MG",
        "ibge": 3127107,
        "lat": -20.0259,
        "lng": -48.9355
      },
      {
        "nome": "Funilândia",
        "uf": "MG",
        "ibge": 3127206,
        "lat": -19.3661,
        "lng": -44.061
      },
      {
        "nome": "Galiléia",
        "uf": "MG",
        "ibge": 3127305,
        "lat": -19.0005,
        "lng": -41.5387
      },
      {
        "nome": "Gameleiras",
        "uf": "MG",
        "ibge": 3127339,
        "lat": -15.0829,
        "lng": -43.125
      },
      {
        "nome": "Glaucilândia",
        "uf": "MG",
        "ibge": 3127354,
        "lat": -16.8481,
        "lng": -43.692
      },
      {
        "nome": "Goiabeira",
        "uf": "MG",
        "ibge": 3127370,
        "lat": -18.9807,
        "lng": -41.2235
      },
      {
        "nome": "Goianá",
        "uf": "MG",
        "ibge": 3127388,
        "lat": -21.536,
        "lng": -43.1957
      },
      {
        "nome": "Gonçalves",
        "uf": "MG",
        "ibge": 3127404,
        "lat": -22.6545,
        "lng": -45.8556
      },
      {
        "nome": "Gonzaga",
        "uf": "MG",
        "ibge": 3127503,
        "lat": -18.8196,
        "lng": -42.4769
      },
      {
        "nome": "Gouveia",
        "uf": "MG",
        "ibge": 3127602,
        "lat": -18.4519,
        "lng": -43.7423
      },
      {
        "nome": "Governador Valadares",
        "uf": "MG",
        "ibge": 3127701,
        "lat": -18.8545,
        "lng": -41.9555
      },
      {
        "nome": "Grão Mogol",
        "uf": "MG",
        "ibge": 3127800,
        "lat": -16.5662,
        "lng": -42.8923
      },
      {
        "nome": "Grupiara",
        "uf": "MG",
        "ibge": 3127909,
        "lat": -18.5003,
        "lng": -47.7318
      },
      {
        "nome": "Guanhães",
        "uf": "MG",
        "ibge": 3128006,
        "lat": -18.7713,
        "lng": -42.9312
      },
      {
        "nome": "Guapé",
        "uf": "MG",
        "ibge": 3128105,
        "lat": -20.7631,
        "lng": -45.9152
      },
      {
        "nome": "Guaraciaba",
        "uf": "MG",
        "ibge": 3128204,
        "lat": -20.5716,
        "lng": -43.0094
      },
      {
        "nome": "Guaraciama",
        "uf": "MG",
        "ibge": 3128253,
        "lat": -17.0142,
        "lng": -43.6675
      },
      {
        "nome": "Guaranésia",
        "uf": "MG",
        "ibge": 3128303,
        "lat": -21.3009,
        "lng": -46.7964
      },
      {
        "nome": "Guarani",
        "uf": "MG",
        "ibge": 3128402,
        "lat": -21.3563,
        "lng": -43.0328
      },
      {
        "nome": "Guarará",
        "uf": "MG",
        "ibge": 3128501,
        "lat": -21.7304,
        "lng": -43.0334
      },
      {
        "nome": "Guarda-Mor",
        "uf": "MG",
        "ibge": 3128600,
        "lat": -17.7673,
        "lng": -47.0998
      },
      {
        "nome": "Guaxupé",
        "uf": "MG",
        "ibge": 3128709,
        "lat": -21.305,
        "lng": -46.7081
      },
      {
        "nome": "Guidoval",
        "uf": "MG",
        "ibge": 3128808,
        "lat": -21.155,
        "lng": -42.7887
      },
      {
        "nome": "Guimarânia",
        "uf": "MG",
        "ibge": 3128907,
        "lat": -18.8425,
        "lng": -46.7901
      },
      {
        "nome": "Guiricema",
        "uf": "MG",
        "ibge": 3129004,
        "lat": -21.0098,
        "lng": -42.7207
      },
      {
        "nome": "Gurinhatã",
        "uf": "MG",
        "ibge": 3129103,
        "lat": -19.2143,
        "lng": -49.7876
      },
      {
        "nome": "Heliodora",
        "uf": "MG",
        "ibge": 3129202,
        "lat": -22.0644,
        "lng": -45.5453
      },
      {
        "nome": "Iapu",
        "uf": "MG",
        "ibge": 3129301,
        "lat": -19.4387,
        "lng": -42.2147
      },
      {
        "nome": "Ibertioga",
        "uf": "MG",
        "ibge": 3129400,
        "lat": -21.433,
        "lng": -43.9639
      },
      {
        "nome": "Ibiá",
        "uf": "MG",
        "ibge": 3129509,
        "lat": -19.4749,
        "lng": -46.5474
      },
      {
        "nome": "Ibiaí",
        "uf": "MG",
        "ibge": 3129608,
        "lat": -16.8591,
        "lng": -44.9046
      },
      {
        "nome": "Ibiracatu",
        "uf": "MG",
        "ibge": 3129657,
        "lat": -15.6605,
        "lng": -44.1667
      },
      {
        "nome": "Ibiraci",
        "uf": "MG",
        "ibge": 3129707,
        "lat": -20.4611,
        "lng": -47.1222
      },
      {
        "nome": "Ibirité",
        "uf": "MG",
        "ibge": 3129806,
        "lat": -20.0252,
        "lng": -44.0569
      },
      {
        "nome": "Ibitiúra de Minas",
        "uf": "MG",
        "ibge": 3129905,
        "lat": -22.0604,
        "lng": -46.4368
      },
      {
        "nome": "Ibituruna",
        "uf": "MG",
        "ibge": 3130002,
        "lat": -21.1541,
        "lng": -44.7479
      },
      {
        "nome": "Icaraí de Minas",
        "uf": "MG",
        "ibge": 3130051,
        "lat": -16.214,
        "lng": -44.9034
      },
      {
        "nome": "Igarapé",
        "uf": "MG",
        "ibge": 3130101,
        "lat": -20.0707,
        "lng": -44.2994
      },
      {
        "nome": "Igaratinga",
        "uf": "MG",
        "ibge": 3130200,
        "lat": -19.9476,
        "lng": -44.7063
      },
      {
        "nome": "Iguatama",
        "uf": "MG",
        "ibge": 3130309,
        "lat": -20.1776,
        "lng": -45.7111
      },
      {
        "nome": "Ijaci",
        "uf": "MG",
        "ibge": 3130408,
        "lat": -21.1738,
        "lng": -44.9233
      },
      {
        "nome": "Ilicínea",
        "uf": "MG",
        "ibge": 3130507,
        "lat": -20.9402,
        "lng": -45.8308
      },
      {
        "nome": "Imbé de Minas",
        "uf": "MG",
        "ibge": 3130556,
        "lat": -19.6017,
        "lng": -41.9695
      },
      {
        "nome": "Inconfidentes",
        "uf": "MG",
        "ibge": 3130606,
        "lat": -22.3136,
        "lng": -46.3264
      },
      {
        "nome": "Indaiabira",
        "uf": "MG",
        "ibge": 3130655,
        "lat": -15.4911,
        "lng": -42.2005
      },
      {
        "nome": "Indianópolis",
        "uf": "MG",
        "ibge": 3130705,
        "lat": -19.0341,
        "lng": -47.9155
      },
      {
        "nome": "Ingaí",
        "uf": "MG",
        "ibge": 3130804,
        "lat": -21.4024,
        "lng": -44.9152
      },
      {
        "nome": "Inhapim",
        "uf": "MG",
        "ibge": 3130903,
        "lat": -19.5476,
        "lng": -42.1147
      },
      {
        "nome": "Inhaúma",
        "uf": "MG",
        "ibge": 3131000,
        "lat": -19.4898,
        "lng": -44.3934
      },
      {
        "nome": "Inimutaba",
        "uf": "MG",
        "ibge": 3131109,
        "lat": -18.7271,
        "lng": -44.3584
      },
      {
        "nome": "Ipaba",
        "uf": "MG",
        "ibge": 3131158,
        "lat": -19.4158,
        "lng": -42.4139
      },
      {
        "nome": "Ipanema",
        "uf": "MG",
        "ibge": 3131208,
        "lat": -19.7992,
        "lng": -41.7164
      },
      {
        "nome": "Ipatinga",
        "uf": "MG",
        "ibge": 3131307,
        "lat": -19.4703,
        "lng": -42.5476
      },
      {
        "nome": "Ipiaçu",
        "uf": "MG",
        "ibge": 3131406,
        "lat": -18.6927,
        "lng": -49.9436
      },
      {
        "nome": "Ipuiúna",
        "uf": "MG",
        "ibge": 3131505,
        "lat": -22.1013,
        "lng": -46.1915
      },
      {
        "nome": "Iraí de Minas",
        "uf": "MG",
        "ibge": 3131604,
        "lat": -18.9819,
        "lng": -47.461
      },
      {
        "nome": "Itabira",
        "uf": "MG",
        "ibge": 3131703,
        "lat": -19.6239,
        "lng": -43.2312
      },
      {
        "nome": "Itabirinha",
        "uf": "MG",
        "ibge": 3131802,
        "lat": -18.5712,
        "lng": -41.234
      },
      {
        "nome": "Itabirito",
        "uf": "MG",
        "ibge": 3131901,
        "lat": -20.2501,
        "lng": -43.8038
      },
      {
        "nome": "Itacambira",
        "uf": "MG",
        "ibge": 3132008,
        "lat": -17.0625,
        "lng": -43.3069
      },
      {
        "nome": "Itacarambi",
        "uf": "MG",
        "ibge": 3132107,
        "lat": -15.089,
        "lng": -44.095
      },
      {
        "nome": "Itaguara",
        "uf": "MG",
        "ibge": 3132206,
        "lat": -20.3947,
        "lng": -44.4875
      },
      {
        "nome": "Itaipé",
        "uf": "MG",
        "ibge": 3132305,
        "lat": -17.4014,
        "lng": -41.6697
      },
      {
        "nome": "Itajubá",
        "uf": "MG",
        "ibge": 3132404,
        "lat": -22.4225,
        "lng": -45.4598
      },
      {
        "nome": "Itamarandiba",
        "uf": "MG",
        "ibge": 3132503,
        "lat": -17.8552,
        "lng": -42.8561
      },
      {
        "nome": "Itamarati de Minas",
        "uf": "MG",
        "ibge": 3132602,
        "lat": -21.4179,
        "lng": -42.813
      },
      {
        "nome": "Itambacuri",
        "uf": "MG",
        "ibge": 3132701,
        "lat": -18.035,
        "lng": -41.683
      },
      {
        "nome": "Itambé do Mato Dentro",
        "uf": "MG",
        "ibge": 3132800,
        "lat": -19.4158,
        "lng": -43.3182
      },
      {
        "nome": "Itamogi",
        "uf": "MG",
        "ibge": 3132909,
        "lat": -21.0758,
        "lng": -47.046
      },
      {
        "nome": "Itamonte",
        "uf": "MG",
        "ibge": 3133006,
        "lat": -22.2859,
        "lng": -44.868
      },
      {
        "nome": "Itanhandu",
        "uf": "MG",
        "ibge": 3133105,
        "lat": -22.2942,
        "lng": -44.9382
      },
      {
        "nome": "Itanhomi",
        "uf": "MG",
        "ibge": 3133204,
        "lat": -19.1736,
        "lng": -41.863
      },
      {
        "nome": "Itaobim",
        "uf": "MG",
        "ibge": 3133303,
        "lat": -16.5571,
        "lng": -41.5017
      },
      {
        "nome": "Itapagipe",
        "uf": "MG",
        "ibge": 3133402,
        "lat": -19.9062,
        "lng": -49.3781
      },
      {
        "nome": "Itapecerica",
        "uf": "MG",
        "ibge": 3133501,
        "lat": -20.4704,
        "lng": -45.127
      },
      {
        "nome": "Itapeva",
        "uf": "MG",
        "ibge": 3133600,
        "lat": -22.7665,
        "lng": -46.2241
      },
      {
        "nome": "Itatiaiuçu",
        "uf": "MG",
        "ibge": 3133709,
        "lat": -20.1983,
        "lng": -44.4211
      },
      {
        "nome": "Itaú de Minas",
        "uf": "MG",
        "ibge": 3133758,
        "lat": -20.7375,
        "lng": -46.7525
      },
      {
        "nome": "Itaúna",
        "uf": "MG",
        "ibge": 3133808,
        "lat": -20.0818,
        "lng": -44.5801
      },
      {
        "nome": "Itaverava",
        "uf": "MG",
        "ibge": 3133907,
        "lat": -20.6769,
        "lng": -43.6141
      },
      {
        "nome": "Itinga",
        "uf": "MG",
        "ibge": 3134004,
        "lat": -16.61,
        "lng": -41.7672
      },
      {
        "nome": "Itueta",
        "uf": "MG",
        "ibge": 3134103,
        "lat": -19.3999,
        "lng": -41.1746
      },
      {
        "nome": "Ituiutaba",
        "uf": "MG",
        "ibge": 3134202,
        "lat": -18.9772,
        "lng": -49.4639
      },
      {
        "nome": "Itumirim",
        "uf": "MG",
        "ibge": 3134301,
        "lat": -21.3171,
        "lng": -44.8724
      },
      {
        "nome": "Iturama",
        "uf": "MG",
        "ibge": 3134400,
        "lat": -19.7276,
        "lng": -50.1966
      },
      {
        "nome": "Itutinga",
        "uf": "MG",
        "ibge": 3134509,
        "lat": -21.3,
        "lng": -44.6567
      },
      {
        "nome": "Jaboticatubas",
        "uf": "MG",
        "ibge": 3134608,
        "lat": -19.5119,
        "lng": -43.7373
      },
      {
        "nome": "Jacinto",
        "uf": "MG",
        "ibge": 3134707,
        "lat": -16.1428,
        "lng": -40.295
      },
      {
        "nome": "Jacuí",
        "uf": "MG",
        "ibge": 3134806,
        "lat": -21.0137,
        "lng": -46.7359
      },
      {
        "nome": "Jacutinga",
        "uf": "MG",
        "ibge": 3134905,
        "lat": -22.286,
        "lng": -46.6166
      },
      {
        "nome": "Jaguaraçu",
        "uf": "MG",
        "ibge": 3135001,
        "lat": -19.647,
        "lng": -42.7498
      },
      {
        "nome": "Jaíba",
        "uf": "MG",
        "ibge": 3135050,
        "lat": -15.3432,
        "lng": -43.6688
      },
      {
        "nome": "Jampruca",
        "uf": "MG",
        "ibge": 3135076,
        "lat": -18.461,
        "lng": -41.809
      },
      {
        "nome": "Janaúba",
        "uf": "MG",
        "ibge": 3135100,
        "lat": -15.8022,
        "lng": -43.3132
      },
      {
        "nome": "Januária",
        "uf": "MG",
        "ibge": 3135209,
        "lat": -15.4802,
        "lng": -44.3639
      },
      {
        "nome": "Japaraíba",
        "uf": "MG",
        "ibge": 3135308,
        "lat": -20.1442,
        "lng": -45.5015
      },
      {
        "nome": "Japonvar",
        "uf": "MG",
        "ibge": 3135357,
        "lat": -15.9891,
        "lng": -44.2758
      },
      {
        "nome": "Jeceaba",
        "uf": "MG",
        "ibge": 3135407,
        "lat": -20.5339,
        "lng": -43.9894
      },
      {
        "nome": "Jenipapo de Minas",
        "uf": "MG",
        "ibge": 3135456,
        "lat": -17.0831,
        "lng": -42.2589
      },
      {
        "nome": "Jequeri",
        "uf": "MG",
        "ibge": 3135506,
        "lat": -20.4542,
        "lng": -42.6651
      },
      {
        "nome": "Jequitaí",
        "uf": "MG",
        "ibge": 3135605,
        "lat": -17.229,
        "lng": -44.4376
      },
      {
        "nome": "Jequitibá",
        "uf": "MG",
        "ibge": 3135704,
        "lat": -19.2345,
        "lng": -44.0304
      },
      {
        "nome": "Jequitinhonha",
        "uf": "MG",
        "ibge": 3135803,
        "lat": -16.4375,
        "lng": -41.0117
      },
      {
        "nome": "Jesuânia",
        "uf": "MG",
        "ibge": 3135902,
        "lat": -21.9887,
        "lng": -45.2911
      },
      {
        "nome": "Joaíma",
        "uf": "MG",
        "ibge": 3136009,
        "lat": -16.6522,
        "lng": -41.0229
      },
      {
        "nome": "Joanésia",
        "uf": "MG",
        "ibge": 3136108,
        "lat": -19.1729,
        "lng": -42.6775
      },
      {
        "nome": "João Monlevade",
        "uf": "MG",
        "ibge": 3136207,
        "lat": -19.8126,
        "lng": -43.1735
      },
      {
        "nome": "João Pinheiro",
        "uf": "MG",
        "ibge": 3136306,
        "lat": -17.7398,
        "lng": -46.1715
      },
      {
        "nome": "Joaquim Felício",
        "uf": "MG",
        "ibge": 3136405,
        "lat": -17.758,
        "lng": -44.1643
      },
      {
        "nome": "Jordânia",
        "uf": "MG",
        "ibge": 3136504,
        "lat": -15.9009,
        "lng": -40.1841
      },
      {
        "nome": "José Gonçalves de Minas",
        "uf": "MG",
        "ibge": 3136520,
        "lat": -16.9053,
        "lng": -42.6014
      },
      {
        "nome": "José Raydan",
        "uf": "MG",
        "ibge": 3136553,
        "lat": -18.2195,
        "lng": -42.4946
      },
      {
        "nome": "Josenópolis",
        "uf": "MG",
        "ibge": 3136579,
        "lat": -16.5417,
        "lng": -42.5151
      },
      {
        "nome": "Juatuba",
        "uf": "MG",
        "ibge": 3136652,
        "lat": -19.9448,
        "lng": -44.3451
      },
      {
        "nome": "Juiz de Fora",
        "uf": "MG",
        "ibge": 3136702,
        "lat": -21.7595,
        "lng": -43.3398
      },
      {
        "nome": "Juramento",
        "uf": "MG",
        "ibge": 3136801,
        "lat": -16.8473,
        "lng": -43.5865
      },
      {
        "nome": "Juruaia",
        "uf": "MG",
        "ibge": 3136900,
        "lat": -21.2493,
        "lng": -46.5735
      },
      {
        "nome": "Juvenília",
        "uf": "MG",
        "ibge": 3136959,
        "lat": -14.2662,
        "lng": -44.1597
      },
      {
        "nome": "Ladainha",
        "uf": "MG",
        "ibge": 3137007,
        "lat": -17.6279,
        "lng": -41.7488
      },
      {
        "nome": "Lagamar",
        "uf": "MG",
        "ibge": 3137106,
        "lat": -18.1759,
        "lng": -46.8063
      },
      {
        "nome": "Lagoa da Prata",
        "uf": "MG",
        "ibge": 3137205,
        "lat": -20.0237,
        "lng": -45.5401
      },
      {
        "nome": "Lagoa dos Patos",
        "uf": "MG",
        "ibge": 3137304,
        "lat": -16.978,
        "lng": -44.5754
      },
      {
        "nome": "Lagoa Dourada",
        "uf": "MG",
        "ibge": 3137403,
        "lat": -20.9139,
        "lng": -44.0797
      },
      {
        "nome": "Lagoa Formosa",
        "uf": "MG",
        "ibge": 3137502,
        "lat": -18.7715,
        "lng": -46.4012
      },
      {
        "nome": "Lagoa Grande",
        "uf": "MG",
        "ibge": 3137536,
        "lat": -17.8323,
        "lng": -46.5165
      },
      {
        "nome": "Lagoa Santa",
        "uf": "MG",
        "ibge": 3137601,
        "lat": -19.6397,
        "lng": -43.8932
      },
      {
        "nome": "Lajinha",
        "uf": "MG",
        "ibge": 3137700,
        "lat": -20.1539,
        "lng": -41.6228
      },
      {
        "nome": "Lambari",
        "uf": "MG",
        "ibge": 3137809,
        "lat": -21.9671,
        "lng": -45.3498
      },
      {
        "nome": "Lamim",
        "uf": "MG",
        "ibge": 3137908,
        "lat": -20.79,
        "lng": -43.4706
      },
      {
        "nome": "Laranjal",
        "uf": "MG",
        "ibge": 3138005,
        "lat": -21.3715,
        "lng": -42.4732
      },
      {
        "nome": "Lassance",
        "uf": "MG",
        "ibge": 3138104,
        "lat": -17.887,
        "lng": -44.5735
      },
      {
        "nome": "Lavras",
        "uf": "MG",
        "ibge": 3138203,
        "lat": -21.248,
        "lng": -45.0009
      },
      {
        "nome": "Leandro Ferreira",
        "uf": "MG",
        "ibge": 3138302,
        "lat": -19.7193,
        "lng": -45.0279
      },
      {
        "nome": "Leme do Prado",
        "uf": "MG",
        "ibge": 3138351,
        "lat": -17.0793,
        "lng": -42.6936
      },
      {
        "nome": "Leopoldina",
        "uf": "MG",
        "ibge": 3138401,
        "lat": -21.5296,
        "lng": -42.6421
      },
      {
        "nome": "Liberdade",
        "uf": "MG",
        "ibge": 3138500,
        "lat": -22.0275,
        "lng": -44.3208
      },
      {
        "nome": "Lima Duarte",
        "uf": "MG",
        "ibge": 3138609,
        "lat": -21.8386,
        "lng": -43.7934
      },
      {
        "nome": "Limeira do Oeste",
        "uf": "MG",
        "ibge": 3138625,
        "lat": -19.5512,
        "lng": -50.5815
      },
      {
        "nome": "Lontra",
        "uf": "MG",
        "ibge": 3138658,
        "lat": -15.9013,
        "lng": -44.306
      },
      {
        "nome": "Luisburgo",
        "uf": "MG",
        "ibge": 3138674,
        "lat": -20.4468,
        "lng": -42.0976
      },
      {
        "nome": "Luislândia",
        "uf": "MG",
        "ibge": 3138682,
        "lat": -16.1095,
        "lng": -44.5886
      },
      {
        "nome": "Luminárias",
        "uf": "MG",
        "ibge": 3138708,
        "lat": -21.5145,
        "lng": -44.9034
      },
      {
        "nome": "Luz",
        "uf": "MG",
        "ibge": 3138807,
        "lat": -19.7911,
        "lng": -45.6794
      },
      {
        "nome": "Machacalis",
        "uf": "MG",
        "ibge": 3138906,
        "lat": -17.0723,
        "lng": -40.7245
      },
      {
        "nome": "Machado",
        "uf": "MG",
        "ibge": 3139003,
        "lat": -21.6778,
        "lng": -45.9219
      },
      {
        "nome": "Madre de Deus de Minas",
        "uf": "MG",
        "ibge": 3139102,
        "lat": -21.483,
        "lng": -44.3287
      },
      {
        "nome": "Malacacheta",
        "uf": "MG",
        "ibge": 3139201,
        "lat": -17.8456,
        "lng": -42.0769
      },
      {
        "nome": "Mamonas",
        "uf": "MG",
        "ibge": 3139250,
        "lat": -15.0479,
        "lng": -42.9469
      },
      {
        "nome": "Manga",
        "uf": "MG",
        "ibge": 3139300,
        "lat": -14.7529,
        "lng": -43.9391
      },
      {
        "nome": "Manhuaçu",
        "uf": "MG",
        "ibge": 3139409,
        "lat": -20.2572,
        "lng": -42.028
      },
      {
        "nome": "Manhumirim",
        "uf": "MG",
        "ibge": 3139508,
        "lat": -20.3591,
        "lng": -41.9589
      },
      {
        "nome": "Mantena",
        "uf": "MG",
        "ibge": 3139607,
        "lat": -18.7761,
        "lng": -40.9874
      },
      {
        "nome": "Mar de Espanha",
        "uf": "MG",
        "ibge": 3139805,
        "lat": -21.8707,
        "lng": -43.0062
      },
      {
        "nome": "Maravilhas",
        "uf": "MG",
        "ibge": 3139706,
        "lat": -19.5076,
        "lng": -44.6779
      },
      {
        "nome": "Maria da Fé",
        "uf": "MG",
        "ibge": 3139904,
        "lat": -22.3044,
        "lng": -45.3773
      },
      {
        "nome": "Mariana",
        "uf": "MG",
        "ibge": 3140001,
        "lat": -20.3765,
        "lng": -43.414
      },
      {
        "nome": "Marilac",
        "uf": "MG",
        "ibge": 3140100,
        "lat": -18.5079,
        "lng": -42.0822
      },
      {
        "nome": "Mário Campos",
        "uf": "MG",
        "ibge": 3140159,
        "lat": -20.0582,
        "lng": -44.1883
      },
      {
        "nome": "Maripá de Minas",
        "uf": "MG",
        "ibge": 3140209,
        "lat": -21.6979,
        "lng": -42.9546
      },
      {
        "nome": "Marliéria",
        "uf": "MG",
        "ibge": 3140308,
        "lat": -19.7096,
        "lng": -42.7327
      },
      {
        "nome": "Marmelópolis",
        "uf": "MG",
        "ibge": 3140407,
        "lat": -22.447,
        "lng": -45.1645
      },
      {
        "nome": "Martinho Campos",
        "uf": "MG",
        "ibge": 3140506,
        "lat": -19.3306,
        "lng": -45.2434
      },
      {
        "nome": "Martins Soares",
        "uf": "MG",
        "ibge": 3140530,
        "lat": -20.2546,
        "lng": -41.8786
      },
      {
        "nome": "Mata Verde",
        "uf": "MG",
        "ibge": 3140555,
        "lat": -15.6869,
        "lng": -40.7366
      },
      {
        "nome": "Materlândia",
        "uf": "MG",
        "ibge": 3140605,
        "lat": -18.4699,
        "lng": -43.0579
      },
      {
        "nome": "Mateus Leme",
        "uf": "MG",
        "ibge": 3140704,
        "lat": -19.9794,
        "lng": -44.4318
      },
      {
        "nome": "Mathias Lobato",
        "uf": "MG",
        "ibge": 3171501,
        "lat": -18.59,
        "lng": -41.9166
      },
      {
        "nome": "Matias Barbosa",
        "uf": "MG",
        "ibge": 3140803,
        "lat": -21.869,
        "lng": -43.3135
      },
      {
        "nome": "Matias Cardoso",
        "uf": "MG",
        "ibge": 3140852,
        "lat": -14.8563,
        "lng": -43.9146
      },
      {
        "nome": "Matipó",
        "uf": "MG",
        "ibge": 3140902,
        "lat": -20.2873,
        "lng": -42.3401
      },
      {
        "nome": "Mato Verde",
        "uf": "MG",
        "ibge": 3141009,
        "lat": -15.3944,
        "lng": -42.86
      },
      {
        "nome": "Matozinhos",
        "uf": "MG",
        "ibge": 3141108,
        "lat": -19.5543,
        "lng": -44.0868
      },
      {
        "nome": "Matutina",
        "uf": "MG",
        "ibge": 3141207,
        "lat": -19.2179,
        "lng": -45.9664
      },
      {
        "nome": "Medeiros",
        "uf": "MG",
        "ibge": 3141306,
        "lat": -19.9865,
        "lng": -46.2181
      },
      {
        "nome": "Medina",
        "uf": "MG",
        "ibge": 3141405,
        "lat": -16.2245,
        "lng": -41.4728
      },
      {
        "nome": "Mendes Pimentel",
        "uf": "MG",
        "ibge": 3141504,
        "lat": -18.6631,
        "lng": -41.4052
      },
      {
        "nome": "Mercês",
        "uf": "MG",
        "ibge": 3141603,
        "lat": -21.1976,
        "lng": -43.3337
      },
      {
        "nome": "Mesquita",
        "uf": "MG",
        "ibge": 3141702,
        "lat": -19.224,
        "lng": -42.6079
      },
      {
        "nome": "Minas Novas",
        "uf": "MG",
        "ibge": 3141801,
        "lat": -17.2156,
        "lng": -42.5884
      },
      {
        "nome": "Minduri",
        "uf": "MG",
        "ibge": 3141900,
        "lat": -21.6797,
        "lng": -44.6051
      },
      {
        "nome": "Mirabela",
        "uf": "MG",
        "ibge": 3142007,
        "lat": -16.256,
        "lng": -44.1602
      },
      {
        "nome": "Miradouro",
        "uf": "MG",
        "ibge": 3142106,
        "lat": -20.8899,
        "lng": -42.3458
      },
      {
        "nome": "Miraí",
        "uf": "MG",
        "ibge": 3142205,
        "lat": -21.2021,
        "lng": -42.6122
      },
      {
        "nome": "Miravânia",
        "uf": "MG",
        "ibge": 3142254,
        "lat": -14.7348,
        "lng": -44.4092
      },
      {
        "nome": "Moeda",
        "uf": "MG",
        "ibge": 3142304,
        "lat": -20.3399,
        "lng": -44.0509
      },
      {
        "nome": "Moema",
        "uf": "MG",
        "ibge": 3142403,
        "lat": -19.8387,
        "lng": -45.4127
      },
      {
        "nome": "Monjolos",
        "uf": "MG",
        "ibge": 3142502,
        "lat": -18.3245,
        "lng": -44.118
      },
      {
        "nome": "Monsenhor Paulo",
        "uf": "MG",
        "ibge": 3142601,
        "lat": -21.7579,
        "lng": -45.5391
      },
      {
        "nome": "Montalvânia",
        "uf": "MG",
        "ibge": 3142700,
        "lat": -14.4197,
        "lng": -44.3719
      },
      {
        "nome": "Monte Alegre de Minas",
        "uf": "MG",
        "ibge": 3142809,
        "lat": -18.869,
        "lng": -48.881
      },
      {
        "nome": "Monte Azul",
        "uf": "MG",
        "ibge": 3142908,
        "lat": -15.1514,
        "lng": -42.8718
      },
      {
        "nome": "Monte Belo",
        "uf": "MG",
        "ibge": 3143005,
        "lat": -21.3271,
        "lng": -46.3635
      },
      {
        "nome": "Monte Carmelo",
        "uf": "MG",
        "ibge": 3143104,
        "lat": -18.7302,
        "lng": -47.4912
      },
      {
        "nome": "Monte Formoso",
        "uf": "MG",
        "ibge": 3143153,
        "lat": -16.8691,
        "lng": -41.2473
      },
      {
        "nome": "Monte Santo de Minas",
        "uf": "MG",
        "ibge": 3143203,
        "lat": -21.1873,
        "lng": -46.9753
      },
      {
        "nome": "Monte Sião",
        "uf": "MG",
        "ibge": 3143401,
        "lat": -22.4335,
        "lng": -46.573
      },
      {
        "nome": "Montes Claros",
        "uf": "MG",
        "ibge": 3143302,
        "lat": -16.7282,
        "lng": -43.8578
      },
      {
        "nome": "Montezuma",
        "uf": "MG",
        "ibge": 3143450,
        "lat": -15.1702,
        "lng": -42.4941
      },
      {
        "nome": "Morada Nova de Minas",
        "uf": "MG",
        "ibge": 3143500,
        "lat": -18.5998,
        "lng": -45.3584
      },
      {
        "nome": "Morro da Garça",
        "uf": "MG",
        "ibge": 3143609,
        "lat": -18.5356,
        "lng": -44.601
      },
      {
        "nome": "Morro do Pilar",
        "uf": "MG",
        "ibge": 3143708,
        "lat": -19.2236,
        "lng": -43.3795
      },
      {
        "nome": "Munhoz",
        "uf": "MG",
        "ibge": 3143807,
        "lat": -22.6092,
        "lng": -46.362
      },
      {
        "nome": "Muriaé",
        "uf": "MG",
        "ibge": 3143906,
        "lat": -21.13,
        "lng": -42.3693
      },
      {
        "nome": "Mutum",
        "uf": "MG",
        "ibge": 3144003,
        "lat": -19.8121,
        "lng": -41.4407
      },
      {
        "nome": "Muzambinho",
        "uf": "MG",
        "ibge": 3144102,
        "lat": -21.3692,
        "lng": -46.5213
      },
      {
        "nome": "Nacip Raydan",
        "uf": "MG",
        "ibge": 3144201,
        "lat": -18.4544,
        "lng": -42.2481
      },
      {
        "nome": "Nanuque",
        "uf": "MG",
        "ibge": 3144300,
        "lat": -17.8481,
        "lng": -40.3533
      },
      {
        "nome": "Naque",
        "uf": "MG",
        "ibge": 3144359,
        "lat": -19.2291,
        "lng": -42.3312
      },
      {
        "nome": "Natalândia",
        "uf": "MG",
        "ibge": 3144375,
        "lat": -16.5021,
        "lng": -46.4874
      },
      {
        "nome": "Natércia",
        "uf": "MG",
        "ibge": 3144409,
        "lat": -22.1158,
        "lng": -45.5123
      },
      {
        "nome": "Nazareno",
        "uf": "MG",
        "ibge": 3144508,
        "lat": -21.2168,
        "lng": -44.6138
      },
      {
        "nome": "Nepomuceno",
        "uf": "MG",
        "ibge": 3144607,
        "lat": -21.2324,
        "lng": -45.235
      },
      {
        "nome": "Ninheira",
        "uf": "MG",
        "ibge": 3144656,
        "lat": -15.3148,
        "lng": -41.7564
      },
      {
        "nome": "Nova Belém",
        "uf": "MG",
        "ibge": 3144672,
        "lat": -18.4925,
        "lng": -41.1107
      },
      {
        "nome": "Nova Era",
        "uf": "MG",
        "ibge": 3144706,
        "lat": -19.7577,
        "lng": -43.0333
      },
      {
        "nome": "Nova Lima",
        "uf": "MG",
        "ibge": 3144805,
        "lat": -19.9758,
        "lng": -43.8509
      },
      {
        "nome": "Nova Módica",
        "uf": "MG",
        "ibge": 3144904,
        "lat": -18.4417,
        "lng": -41.4984
      },
      {
        "nome": "Nova Ponte",
        "uf": "MG",
        "ibge": 3145000,
        "lat": -19.1461,
        "lng": -47.6779
      },
      {
        "nome": "Nova Porteirinha",
        "uf": "MG",
        "ibge": 3145059,
        "lat": -15.7993,
        "lng": -43.2941
      },
      {
        "nome": "Nova Resende",
        "uf": "MG",
        "ibge": 3145109,
        "lat": -21.1286,
        "lng": -46.4157
      },
      {
        "nome": "Nova Serrana",
        "uf": "MG",
        "ibge": 3145208,
        "lat": -19.8713,
        "lng": -44.9847
      },
      {
        "nome": "Nova União",
        "uf": "MG",
        "ibge": 3136603,
        "lat": -19.6876,
        "lng": -43.583
      },
      {
        "nome": "Novo Cruzeiro",
        "uf": "MG",
        "ibge": 3145307,
        "lat": -17.4654,
        "lng": -41.8826
      },
      {
        "nome": "Novo Oriente de Minas",
        "uf": "MG",
        "ibge": 3145356,
        "lat": -17.4089,
        "lng": -41.2194
      },
      {
        "nome": "Novorizonte",
        "uf": "MG",
        "ibge": 3145372,
        "lat": -16.0162,
        "lng": -42.4044
      },
      {
        "nome": "Olaria",
        "uf": "MG",
        "ibge": 3145406,
        "lat": -21.8598,
        "lng": -43.9356
      },
      {
        "nome": "Olhos d'Água",
        "uf": "MG",
        "ibge": 3145455,
        "lat": -17.3982,
        "lng": -43.5719
      },
      {
        "nome": "Olímpio Noronha",
        "uf": "MG",
        "ibge": 3145505,
        "lat": -22.0685,
        "lng": -45.2657
      },
      {
        "nome": "Oliveira",
        "uf": "MG",
        "ibge": 3145604,
        "lat": -20.6982,
        "lng": -44.829
      },
      {
        "nome": "Oliveira Fortes",
        "uf": "MG",
        "ibge": 3145703,
        "lat": -21.3401,
        "lng": -43.4499
      },
      {
        "nome": "Onça de Pitangui",
        "uf": "MG",
        "ibge": 3145802,
        "lat": -19.7276,
        "lng": -44.8058
      },
      {
        "nome": "Oratórios",
        "uf": "MG",
        "ibge": 3145851,
        "lat": -20.4298,
        "lng": -42.7977
      },
      {
        "nome": "Orizânia",
        "uf": "MG",
        "ibge": 3145877,
        "lat": -20.5142,
        "lng": -42.1991
      },
      {
        "nome": "Ouro Branco",
        "uf": "MG",
        "ibge": 3145901,
        "lat": -20.5263,
        "lng": -43.6962
      },
      {
        "nome": "Ouro Fino",
        "uf": "MG",
        "ibge": 3146008,
        "lat": -22.2779,
        "lng": -46.3716
      },
      {
        "nome": "Ouro Preto",
        "uf": "MG",
        "ibge": 3146107,
        "lat": -20.3796,
        "lng": -43.512
      },
      {
        "nome": "Ouro Verde de Minas",
        "uf": "MG",
        "ibge": 3146206,
        "lat": -18.0719,
        "lng": -41.2734
      },
      {
        "nome": "Padre Carvalho",
        "uf": "MG",
        "ibge": 3146255,
        "lat": -16.3646,
        "lng": -42.5088
      },
      {
        "nome": "Padre Paraíso",
        "uf": "MG",
        "ibge": 3146305,
        "lat": -17.0758,
        "lng": -41.4821
      },
      {
        "nome": "Pai Pedro",
        "uf": "MG",
        "ibge": 3146552,
        "lat": -15.5271,
        "lng": -43.07
      },
      {
        "nome": "Paineiras",
        "uf": "MG",
        "ibge": 3146404,
        "lat": -18.8993,
        "lng": -45.5321
      },
      {
        "nome": "Pains",
        "uf": "MG",
        "ibge": 3146503,
        "lat": -20.3705,
        "lng": -45.6627
      },
      {
        "nome": "Paiva",
        "uf": "MG",
        "ibge": 3146602,
        "lat": -21.2913,
        "lng": -43.4088
      },
      {
        "nome": "Palma",
        "uf": "MG",
        "ibge": 3146701,
        "lat": -21.3748,
        "lng": -42.3123
      },
      {
        "nome": "Palmópolis",
        "uf": "MG",
        "ibge": 3146750,
        "lat": -16.7364,
        "lng": -40.4296
      },
      {
        "nome": "Papagaios",
        "uf": "MG",
        "ibge": 3146909,
        "lat": -19.4419,
        "lng": -44.7468
      },
      {
        "nome": "Pará de Minas",
        "uf": "MG",
        "ibge": 3147105,
        "lat": -19.8534,
        "lng": -44.6114
      },
      {
        "nome": "Paracatu",
        "uf": "MG",
        "ibge": 3147006,
        "lat": -17.2252,
        "lng": -46.8711
      },
      {
        "nome": "Paraguaçu",
        "uf": "MG",
        "ibge": 3147204,
        "lat": -21.5465,
        "lng": -45.7374
      },
      {
        "nome": "Paraisópolis",
        "uf": "MG",
        "ibge": 3147303,
        "lat": -22.5539,
        "lng": -45.7803
      },
      {
        "nome": "Paraopeba",
        "uf": "MG",
        "ibge": 3147402,
        "lat": -19.2732,
        "lng": -44.4044
      },
      {
        "nome": "Passa Quatro",
        "uf": "MG",
        "ibge": 3147600,
        "lat": -22.3871,
        "lng": -44.9709
      },
      {
        "nome": "Passa Tempo",
        "uf": "MG",
        "ibge": 3147709,
        "lat": -20.6539,
        "lng": -44.4926
      },
      {
        "nome": "Passa-Vinte",
        "uf": "MG",
        "ibge": 3147808,
        "lat": -22.2097,
        "lng": -44.2344
      },
      {
        "nome": "Passabém",
        "uf": "MG",
        "ibge": 3147501,
        "lat": -19.3509,
        "lng": -43.1383
      },
      {
        "nome": "Passos",
        "uf": "MG",
        "ibge": 3147907,
        "lat": -20.7193,
        "lng": -46.609
      },
      {
        "nome": "Patis",
        "uf": "MG",
        "ibge": 3147956,
        "lat": -16.0773,
        "lng": -44.0787
      },
      {
        "nome": "Patos de Minas",
        "uf": "MG",
        "ibge": 3148004,
        "lat": -18.5699,
        "lng": -46.5013
      },
      {
        "nome": "Patrocínio",
        "uf": "MG",
        "ibge": 3148103,
        "lat": -18.9379,
        "lng": -46.9934
      },
      {
        "nome": "Patrocínio do Muriaé",
        "uf": "MG",
        "ibge": 3148202,
        "lat": -21.1544,
        "lng": -42.2125
      },
      {
        "nome": "Paula Cândido",
        "uf": "MG",
        "ibge": 3148301,
        "lat": -20.8754,
        "lng": -42.9752
      },
      {
        "nome": "Paulistas",
        "uf": "MG",
        "ibge": 3148400,
        "lat": -18.4276,
        "lng": -42.8628
      },
      {
        "nome": "Pavão",
        "uf": "MG",
        "ibge": 3148509,
        "lat": -17.4267,
        "lng": -41.0035
      },
      {
        "nome": "Peçanha",
        "uf": "MG",
        "ibge": 3148608,
        "lat": -18.5441,
        "lng": -42.5583
      },
      {
        "nome": "Pedra Azul",
        "uf": "MG",
        "ibge": 3148707,
        "lat": -16.0086,
        "lng": -41.2909
      },
      {
        "nome": "Pedra Bonita",
        "uf": "MG",
        "ibge": 3148756,
        "lat": -20.5219,
        "lng": -42.3304
      },
      {
        "nome": "Pedra do Anta",
        "uf": "MG",
        "ibge": 3148806,
        "lat": -20.5968,
        "lng": -42.7123
      },
      {
        "nome": "Pedra do Indaiá",
        "uf": "MG",
        "ibge": 3148905,
        "lat": -20.2563,
        "lng": -45.2107
      },
      {
        "nome": "Pedra Dourada",
        "uf": "MG",
        "ibge": 3149002,
        "lat": -20.8266,
        "lng": -42.1515
      },
      {
        "nome": "Pedralva",
        "uf": "MG",
        "ibge": 3149101,
        "lat": -22.2386,
        "lng": -45.4654
      },
      {
        "nome": "Pedras de Maria da Cruz",
        "uf": "MG",
        "ibge": 3149150,
        "lat": -15.6032,
        "lng": -44.391
      },
      {
        "nome": "Pedrinópolis",
        "uf": "MG",
        "ibge": 3149200,
        "lat": -19.2241,
        "lng": -47.4579
      },
      {
        "nome": "Pedro Leopoldo",
        "uf": "MG",
        "ibge": 3149309,
        "lat": -19.6308,
        "lng": -44.0383
      },
      {
        "nome": "Pedro Teixeira",
        "uf": "MG",
        "ibge": 3149408,
        "lat": -21.7076,
        "lng": -43.743
      },
      {
        "nome": "Pequeri",
        "uf": "MG",
        "ibge": 3149507,
        "lat": -21.8341,
        "lng": -43.1145
      },
      {
        "nome": "Pequi",
        "uf": "MG",
        "ibge": 3149606,
        "lat": -19.6284,
        "lng": -44.6604
      },
      {
        "nome": "Perdigão",
        "uf": "MG",
        "ibge": 3149705,
        "lat": -19.9411,
        "lng": -45.078
      },
      {
        "nome": "Perdizes",
        "uf": "MG",
        "ibge": 3149804,
        "lat": -19.3434,
        "lng": -47.2963
      },
      {
        "nome": "Perdões",
        "uf": "MG",
        "ibge": 3149903,
        "lat": -21.0932,
        "lng": -45.0896
      },
      {
        "nome": "Periquito",
        "uf": "MG",
        "ibge": 3149952,
        "lat": -19.1573,
        "lng": -42.2333
      },
      {
        "nome": "Pescador",
        "uf": "MG",
        "ibge": 3150000,
        "lat": -18.357,
        "lng": -41.6006
      },
      {
        "nome": "Piau",
        "uf": "MG",
        "ibge": 3150109,
        "lat": -21.5096,
        "lng": -43.313
      },
      {
        "nome": "Piedade de Caratinga",
        "uf": "MG",
        "ibge": 3150158,
        "lat": -19.7593,
        "lng": -42.0756
      },
      {
        "nome": "Piedade de Ponte Nova",
        "uf": "MG",
        "ibge": 3150208,
        "lat": -20.2438,
        "lng": -42.7379
      },
      {
        "nome": "Piedade do Rio Grande",
        "uf": "MG",
        "ibge": 3150307,
        "lat": -21.469,
        "lng": -44.1938
      },
      {
        "nome": "Piedade dos Gerais",
        "uf": "MG",
        "ibge": 3150406,
        "lat": -20.4715,
        "lng": -44.2243
      },
      {
        "nome": "Pimenta",
        "uf": "MG",
        "ibge": 3150505,
        "lat": -20.4827,
        "lng": -45.8049
      },
      {
        "nome": "Pingo-d'Água",
        "uf": "MG",
        "ibge": 3150539,
        "lat": -19.7287,
        "lng": -42.4095
      },
      {
        "nome": "Pintópolis",
        "uf": "MG",
        "ibge": 3150570,
        "lat": -16.0572,
        "lng": -45.1402
      },
      {
        "nome": "Piracema",
        "uf": "MG",
        "ibge": 3150604,
        "lat": -20.5089,
        "lng": -44.4783
      },
      {
        "nome": "Pirajuba",
        "uf": "MG",
        "ibge": 3150703,
        "lat": -19.9092,
        "lng": -48.7027
      },
      {
        "nome": "Piranga",
        "uf": "MG",
        "ibge": 3150802,
        "lat": -20.6834,
        "lng": -43.2967
      },
      {
        "nome": "Piranguçu",
        "uf": "MG",
        "ibge": 3150901,
        "lat": -22.5249,
        "lng": -45.4945
      },
      {
        "nome": "Piranguinho",
        "uf": "MG",
        "ibge": 3151008,
        "lat": -22.395,
        "lng": -45.5324
      },
      {
        "nome": "Pirapetinga",
        "uf": "MG",
        "ibge": 3151107,
        "lat": -21.6554,
        "lng": -42.3434
      },
      {
        "nome": "Pirapora",
        "uf": "MG",
        "ibge": 3151206,
        "lat": -17.3392,
        "lng": -44.934
      },
      {
        "nome": "Piraúba",
        "uf": "MG",
        "ibge": 3151305,
        "lat": -21.2825,
        "lng": -43.0172
      },
      {
        "nome": "Pitangui",
        "uf": "MG",
        "ibge": 3151404,
        "lat": -19.6741,
        "lng": -44.8964
      },
      {
        "nome": "Piumhi",
        "uf": "MG",
        "ibge": 3151503,
        "lat": -20.4762,
        "lng": -45.9589
      },
      {
        "nome": "Planura",
        "uf": "MG",
        "ibge": 3151602,
        "lat": -20.1376,
        "lng": -48.7
      },
      {
        "nome": "Poço Fundo",
        "uf": "MG",
        "ibge": 3151701,
        "lat": -21.78,
        "lng": -45.9658
      },
      {
        "nome": "Poços de Caldas",
        "uf": "MG",
        "ibge": 3151800,
        "lat": -21.78,
        "lng": -46.5692
      },
      {
        "nome": "Pocrane",
        "uf": "MG",
        "ibge": 3151909,
        "lat": -19.6208,
        "lng": -41.6334
      },
      {
        "nome": "Pompéu",
        "uf": "MG",
        "ibge": 3152006,
        "lat": -19.2257,
        "lng": -45.0141
      },
      {
        "nome": "Ponte Nova",
        "uf": "MG",
        "ibge": 3152105,
        "lat": -20.4111,
        "lng": -42.8978
      },
      {
        "nome": "Ponto Chique",
        "uf": "MG",
        "ibge": 3152131,
        "lat": -16.6282,
        "lng": -45.0588
      },
      {
        "nome": "Ponto dos Volantes",
        "uf": "MG",
        "ibge": 3152170,
        "lat": -16.7473,
        "lng": -41.5025
      },
      {
        "nome": "Porteirinha",
        "uf": "MG",
        "ibge": 3152204,
        "lat": -15.7404,
        "lng": -43.0281
      },
      {
        "nome": "Porto Firme",
        "uf": "MG",
        "ibge": 3152303,
        "lat": -20.6642,
        "lng": -43.0834
      },
      {
        "nome": "Poté",
        "uf": "MG",
        "ibge": 3152402,
        "lat": -17.8077,
        "lng": -41.786
      },
      {
        "nome": "Pouso Alegre",
        "uf": "MG",
        "ibge": 3152501,
        "lat": -22.2266,
        "lng": -45.9389
      },
      {
        "nome": "Pouso Alto",
        "uf": "MG",
        "ibge": 3152600,
        "lat": -22.1964,
        "lng": -44.9748
      },
      {
        "nome": "Prados",
        "uf": "MG",
        "ibge": 3152709,
        "lat": -21.0597,
        "lng": -44.0778
      },
      {
        "nome": "Prata",
        "uf": "MG",
        "ibge": 3152808,
        "lat": -19.3086,
        "lng": -48.9276
      },
      {
        "nome": "Pratápolis",
        "uf": "MG",
        "ibge": 3152907,
        "lat": -20.7411,
        "lng": -46.8624
      },
      {
        "nome": "Pratinha",
        "uf": "MG",
        "ibge": 3153004,
        "lat": -19.739,
        "lng": -46.3755
      },
      {
        "nome": "Presidente Bernardes",
        "uf": "MG",
        "ibge": 3153103,
        "lat": -20.7656,
        "lng": -43.1895
      },
      {
        "nome": "Presidente Juscelino",
        "uf": "MG",
        "ibge": 3153202,
        "lat": -18.6401,
        "lng": -44.06
      },
      {
        "nome": "Presidente Kubitschek",
        "uf": "MG",
        "ibge": 3153301,
        "lat": -18.6193,
        "lng": -43.5628
      },
      {
        "nome": "Presidente Olegário",
        "uf": "MG",
        "ibge": 3153400,
        "lat": -18.4096,
        "lng": -46.4165
      },
      {
        "nome": "Prudente de Morais",
        "uf": "MG",
        "ibge": 3153608,
        "lat": -19.4742,
        "lng": -44.1591
      },
      {
        "nome": "Quartel Geral",
        "uf": "MG",
        "ibge": 3153707,
        "lat": -19.2703,
        "lng": -45.5569
      },
      {
        "nome": "Queluzito",
        "uf": "MG",
        "ibge": 3153806,
        "lat": -20.7416,
        "lng": -43.8851
      },
      {
        "nome": "Raposos",
        "uf": "MG",
        "ibge": 3153905,
        "lat": -19.9636,
        "lng": -43.8079
      },
      {
        "nome": "Raul Soares",
        "uf": "MG",
        "ibge": 3154002,
        "lat": -20.1061,
        "lng": -42.4502
      },
      {
        "nome": "Recreio",
        "uf": "MG",
        "ibge": 3154101,
        "lat": -21.5289,
        "lng": -42.4676
      },
      {
        "nome": "Reduto",
        "uf": "MG",
        "ibge": 3154150,
        "lat": -20.2401,
        "lng": -41.9848
      },
      {
        "nome": "Resende Costa",
        "uf": "MG",
        "ibge": 3154200,
        "lat": -20.9171,
        "lng": -44.2407
      },
      {
        "nome": "Resplendor",
        "uf": "MG",
        "ibge": 3154309,
        "lat": -19.3194,
        "lng": -41.2462
      },
      {
        "nome": "Ressaquinha",
        "uf": "MG",
        "ibge": 3154408,
        "lat": -21.0642,
        "lng": -43.7598
      },
      {
        "nome": "Riachinho",
        "uf": "MG",
        "ibge": 3154457,
        "lat": -16.2258,
        "lng": -45.9888
      },
      {
        "nome": "Riacho dos Machados",
        "uf": "MG",
        "ibge": 3154507,
        "lat": -16.0091,
        "lng": -43.0488
      },
      {
        "nome": "Ribeirão das Neves",
        "uf": "MG",
        "ibge": 3154606,
        "lat": -19.7621,
        "lng": -44.0844
      },
      {
        "nome": "Ribeirão Vermelho",
        "uf": "MG",
        "ibge": 3154705,
        "lat": -21.1879,
        "lng": -45.0637
      },
      {
        "nome": "Rio Acima",
        "uf": "MG",
        "ibge": 3154804,
        "lat": -20.0876,
        "lng": -43.7878
      },
      {
        "nome": "Rio Casca",
        "uf": "MG",
        "ibge": 3154903,
        "lat": -20.2285,
        "lng": -42.6462
      },
      {
        "nome": "Rio do Prado",
        "uf": "MG",
        "ibge": 3155108,
        "lat": -16.6056,
        "lng": -40.5714
      },
      {
        "nome": "Rio Doce",
        "uf": "MG",
        "ibge": 3155009,
        "lat": -20.2412,
        "lng": -42.8995
      },
      {
        "nome": "Rio Espera",
        "uf": "MG",
        "ibge": 3155207,
        "lat": -20.855,
        "lng": -43.4721
      },
      {
        "nome": "Rio Manso",
        "uf": "MG",
        "ibge": 3155306,
        "lat": -20.2666,
        "lng": -44.3069
      },
      {
        "nome": "Rio Novo",
        "uf": "MG",
        "ibge": 3155405,
        "lat": -21.4649,
        "lng": -43.1168
      },
      {
        "nome": "Rio Paranaíba",
        "uf": "MG",
        "ibge": 3155504,
        "lat": -19.1861,
        "lng": -46.2455
      },
      {
        "nome": "Rio Pardo de Minas",
        "uf": "MG",
        "ibge": 3155603,
        "lat": -15.616,
        "lng": -42.5405
      },
      {
        "nome": "Rio Piracicaba",
        "uf": "MG",
        "ibge": 3155702,
        "lat": -19.9284,
        "lng": -43.1829
      },
      {
        "nome": "Rio Pomba",
        "uf": "MG",
        "ibge": 3155801,
        "lat": -21.2712,
        "lng": -43.1696
      },
      {
        "nome": "Rio Preto",
        "uf": "MG",
        "ibge": 3155900,
        "lat": -22.0861,
        "lng": -43.8293
      },
      {
        "nome": "Rio Vermelho",
        "uf": "MG",
        "ibge": 3156007,
        "lat": -18.2922,
        "lng": -43.0018
      },
      {
        "nome": "Ritápolis",
        "uf": "MG",
        "ibge": 3156106,
        "lat": -21.0276,
        "lng": -44.3204
      },
      {
        "nome": "Rochedo de Minas",
        "uf": "MG",
        "ibge": 3156205,
        "lat": -21.6284,
        "lng": -43.0165
      },
      {
        "nome": "Rodeiro",
        "uf": "MG",
        "ibge": 3156304,
        "lat": -21.2035,
        "lng": -42.8586
      },
      {
        "nome": "Romaria",
        "uf": "MG",
        "ibge": 3156403,
        "lat": -18.8838,
        "lng": -47.5782
      },
      {
        "nome": "Rosário da Limeira",
        "uf": "MG",
        "ibge": 3156452,
        "lat": -20.9812,
        "lng": -42.5112
      },
      {
        "nome": "Rubelita",
        "uf": "MG",
        "ibge": 3156502,
        "lat": -16.4053,
        "lng": -42.261
      },
      {
        "nome": "Rubim",
        "uf": "MG",
        "ibge": 3156601,
        "lat": -16.3775,
        "lng": -40.5397
      },
      {
        "nome": "Sabará",
        "uf": "MG",
        "ibge": 3156700,
        "lat": -19.884,
        "lng": -43.8263
      },
      {
        "nome": "Sabinópolis",
        "uf": "MG",
        "ibge": 3156809,
        "lat": -18.6653,
        "lng": -43.0752
      },
      {
        "nome": "Sacramento",
        "uf": "MG",
        "ibge": 3156908,
        "lat": -19.8622,
        "lng": -47.4508
      },
      {
        "nome": "Salinas",
        "uf": "MG",
        "ibge": 3157005,
        "lat": -16.1753,
        "lng": -42.2964
      },
      {
        "nome": "Salto da Divisa",
        "uf": "MG",
        "ibge": 3157104,
        "lat": -16.0063,
        "lng": -39.9391
      },
      {
        "nome": "Santa Bárbara",
        "uf": "MG",
        "ibge": 3157203,
        "lat": -19.9604,
        "lng": -43.4101
      },
      {
        "nome": "Santa Bárbara do Leste",
        "uf": "MG",
        "ibge": 3157252,
        "lat": -19.9753,
        "lng": -42.1457
      },
      {
        "nome": "Santa Bárbara do Monte Verde",
        "uf": "MG",
        "ibge": 3157278,
        "lat": -21.9592,
        "lng": -43.7027
      },
      {
        "nome": "Santa Bárbara do Tugúrio",
        "uf": "MG",
        "ibge": 3157302,
        "lat": -21.2431,
        "lng": -43.5607
      },
      {
        "nome": "Santa Cruz de Minas",
        "uf": "MG",
        "ibge": 3157336,
        "lat": -21.1241,
        "lng": -44.2202
      },
      {
        "nome": "Santa Cruz de Salinas",
        "uf": "MG",
        "ibge": 3157377,
        "lat": -16.0967,
        "lng": -41.7418
      },
      {
        "nome": "Santa Cruz do Escalvado",
        "uf": "MG",
        "ibge": 3157401,
        "lat": -20.2372,
        "lng": -42.8169
      },
      {
        "nome": "Santa Efigênia de Minas",
        "uf": "MG",
        "ibge": 3157500,
        "lat": -18.8235,
        "lng": -42.4388
      },
      {
        "nome": "Santa Fé de Minas",
        "uf": "MG",
        "ibge": 3157609,
        "lat": -16.6859,
        "lng": -45.4102
      },
      {
        "nome": "Santa Helena de Minas",
        "uf": "MG",
        "ibge": 3157658,
        "lat": -16.9707,
        "lng": -40.6727
      },
      {
        "nome": "Santa Juliana",
        "uf": "MG",
        "ibge": 3157708,
        "lat": -19.3108,
        "lng": -47.5322
      },
      {
        "nome": "Santa Luzia",
        "uf": "MG",
        "ibge": 3157807,
        "lat": -19.7548,
        "lng": -43.8497
      },
      {
        "nome": "Santa Margarida",
        "uf": "MG",
        "ibge": 3157906,
        "lat": -20.3839,
        "lng": -42.2519
      },
      {
        "nome": "Santa Maria de Itabira",
        "uf": "MG",
        "ibge": 3158003,
        "lat": -19.4431,
        "lng": -43.1064
      },
      {
        "nome": "Santa Maria do Salto",
        "uf": "MG",
        "ibge": 3158102,
        "lat": -16.2479,
        "lng": -40.1512
      },
      {
        "nome": "Santa Maria do Suaçuí",
        "uf": "MG",
        "ibge": 3158201,
        "lat": -18.1896,
        "lng": -42.4139
      },
      {
        "nome": "Santa Rita de Caldas",
        "uf": "MG",
        "ibge": 3159209,
        "lat": -22.0292,
        "lng": -46.3385
      },
      {
        "nome": "Santa Rita de Ibitipoca",
        "uf": "MG",
        "ibge": 3159407,
        "lat": -21.5658,
        "lng": -43.9163
      },
      {
        "nome": "Santa Rita de Jacutinga",
        "uf": "MG",
        "ibge": 3159308,
        "lat": -22.1474,
        "lng": -44.0977
      },
      {
        "nome": "Santa Rita de Minas",
        "uf": "MG",
        "ibge": 3159357,
        "lat": -19.876,
        "lng": -42.1363
      },
      {
        "nome": "Santa Rita do Itueto",
        "uf": "MG",
        "ibge": 3159506,
        "lat": -19.3576,
        "lng": -41.3821
      },
      {
        "nome": "Santa Rita do Sapucaí",
        "uf": "MG",
        "ibge": 3159605,
        "lat": -22.2461,
        "lng": -45.7034
      },
      {
        "nome": "Santa Rosa da Serra",
        "uf": "MG",
        "ibge": 3159704,
        "lat": -19.5186,
        "lng": -45.9611
      },
      {
        "nome": "Santa Vitória",
        "uf": "MG",
        "ibge": 3159803,
        "lat": -18.8414,
        "lng": -50.1208
      },
      {
        "nome": "Santana da Vargem",
        "uf": "MG",
        "ibge": 3158300,
        "lat": -21.2449,
        "lng": -45.5005
      },
      {
        "nome": "Santana de Cataguases",
        "uf": "MG",
        "ibge": 3158409,
        "lat": -21.2893,
        "lng": -42.5524
      },
      {
        "nome": "Santana de Pirapama",
        "uf": "MG",
        "ibge": 3158508,
        "lat": -18.9962,
        "lng": -44.0409
      },
      {
        "nome": "Santana do Deserto",
        "uf": "MG",
        "ibge": 3158607,
        "lat": -21.9512,
        "lng": -43.1583
      },
      {
        "nome": "Santana do Garambéu",
        "uf": "MG",
        "ibge": 3158706,
        "lat": -21.5983,
        "lng": -44.105
      },
      {
        "nome": "Santana do Jacaré",
        "uf": "MG",
        "ibge": 3158805,
        "lat": -20.9007,
        "lng": -45.1285
      },
      {
        "nome": "Santana do Manhuaçu",
        "uf": "MG",
        "ibge": 3158904,
        "lat": -20.1031,
        "lng": -41.9278
      },
      {
        "nome": "Santana do Paraíso",
        "uf": "MG",
        "ibge": 3158953,
        "lat": -19.3661,
        "lng": -42.5446
      },
      {
        "nome": "Santana do Riacho",
        "uf": "MG",
        "ibge": 3159001,
        "lat": -19.1662,
        "lng": -43.722
      },
      {
        "nome": "Santana dos Montes",
        "uf": "MG",
        "ibge": 3159100,
        "lat": -20.7868,
        "lng": -43.6949
      },
      {
        "nome": "Santo Antônio do Amparo",
        "uf": "MG",
        "ibge": 3159902,
        "lat": -20.943,
        "lng": -44.9176
      },
      {
        "nome": "Santo Antônio do Aventureiro",
        "uf": "MG",
        "ibge": 3160009,
        "lat": -21.7606,
        "lng": -42.8115
      },
      {
        "nome": "Santo Antônio do Grama",
        "uf": "MG",
        "ibge": 3160108,
        "lat": -20.3185,
        "lng": -42.6047
      },
      {
        "nome": "Santo Antônio do Itambé",
        "uf": "MG",
        "ibge": 3160207,
        "lat": -18.4609,
        "lng": -43.3006
      },
      {
        "nome": "Santo Antônio do Jacinto",
        "uf": "MG",
        "ibge": 3160306,
        "lat": -16.5332,
        "lng": -40.1817
      },
      {
        "nome": "Santo Antônio do Monte",
        "uf": "MG",
        "ibge": 3160405,
        "lat": -20.085,
        "lng": -45.2947
      },
      {
        "nome": "Santo Antônio do Retiro",
        "uf": "MG",
        "ibge": 3160454,
        "lat": -15.3393,
        "lng": -42.6171
      },
      {
        "nome": "Santo Antônio do Rio Abaixo",
        "uf": "MG",
        "ibge": 3160504,
        "lat": -19.2374,
        "lng": -43.2604
      },
      {
        "nome": "Santo Hipólito",
        "uf": "MG",
        "ibge": 3160603,
        "lat": -18.2968,
        "lng": -44.2229
      },
      {
        "nome": "Santos Dumont",
        "uf": "MG",
        "ibge": 3160702,
        "lat": -21.4634,
        "lng": -43.5499
      },
      {
        "nome": "São Bento Abade",
        "uf": "MG",
        "ibge": 3160801,
        "lat": -21.5839,
        "lng": -45.0699
      },
      {
        "nome": "São Brás do Suaçuí",
        "uf": "MG",
        "ibge": 3160900,
        "lat": -20.6242,
        "lng": -43.9515
      },
      {
        "nome": "São Domingos das Dores",
        "uf": "MG",
        "ibge": 3160959,
        "lat": -19.5246,
        "lng": -42.0106
      },
      {
        "nome": "São Domingos do Prata",
        "uf": "MG",
        "ibge": 3161007,
        "lat": -19.8678,
        "lng": -42.971
      },
      {
        "nome": "São Félix de Minas",
        "uf": "MG",
        "ibge": 3161056,
        "lat": -18.5959,
        "lng": -41.4889
      },
      {
        "nome": "São Francisco",
        "uf": "MG",
        "ibge": 3161106,
        "lat": -15.9514,
        "lng": -44.8593
      },
      {
        "nome": "São Francisco de Paula",
        "uf": "MG",
        "ibge": 3161205,
        "lat": -20.7036,
        "lng": -44.9838
      },
      {
        "nome": "São Francisco de Sales",
        "uf": "MG",
        "ibge": 3161304,
        "lat": -19.8611,
        "lng": -49.7727
      },
      {
        "nome": "São Francisco do Glória",
        "uf": "MG",
        "ibge": 3161403,
        "lat": -20.7923,
        "lng": -42.2673
      },
      {
        "nome": "São Geraldo",
        "uf": "MG",
        "ibge": 3161502,
        "lat": -20.9252,
        "lng": -42.8364
      },
      {
        "nome": "São Geraldo da Piedade",
        "uf": "MG",
        "ibge": 3161601,
        "lat": -18.8411,
        "lng": -42.2867
      },
      {
        "nome": "São Geraldo do Baixio",
        "uf": "MG",
        "ibge": 3161650,
        "lat": -18.9097,
        "lng": -41.363
      },
      {
        "nome": "São Gonçalo do Abaeté",
        "uf": "MG",
        "ibge": 3161700,
        "lat": -18.3315,
        "lng": -45.8265
      },
      {
        "nome": "São Gonçalo do Pará",
        "uf": "MG",
        "ibge": 3161809,
        "lat": -19.9822,
        "lng": -44.8593
      },
      {
        "nome": "São Gonçalo do Rio Abaixo",
        "uf": "MG",
        "ibge": 3161908,
        "lat": -19.8221,
        "lng": -43.366
      },
      {
        "nome": "São Gonçalo do Rio Preto",
        "uf": "MG",
        "ibge": 3125507,
        "lat": -18.0025,
        "lng": -43.3854
      },
      {
        "nome": "São Gonçalo do Sapucaí",
        "uf": "MG",
        "ibge": 3162005,
        "lat": -21.8932,
        "lng": -45.5893
      },
      {
        "nome": "São Gotardo",
        "uf": "MG",
        "ibge": 3162104,
        "lat": -19.3087,
        "lng": -46.0465
      },
      {
        "nome": "São João Batista do Glória",
        "uf": "MG",
        "ibge": 3162203,
        "lat": -20.635,
        "lng": -46.508
      },
      {
        "nome": "São João da Lagoa",
        "uf": "MG",
        "ibge": 3162252,
        "lat": -16.8455,
        "lng": -44.3507
      },
      {
        "nome": "São João da Mata",
        "uf": "MG",
        "ibge": 3162302,
        "lat": -21.928,
        "lng": -45.9297
      },
      {
        "nome": "São João da Ponte",
        "uf": "MG",
        "ibge": 3162401,
        "lat": -15.9271,
        "lng": -44.0096
      },
      {
        "nome": "São João das Missões",
        "uf": "MG",
        "ibge": 3162450,
        "lat": -14.8859,
        "lng": -44.0922
      },
      {
        "nome": "São João del Rei",
        "uf": "MG",
        "ibge": 3162500,
        "lat": -21.1311,
        "lng": -44.2526
      },
      {
        "nome": "São João do Manhuaçu",
        "uf": "MG",
        "ibge": 3162559,
        "lat": -20.3933,
        "lng": -42.1533
      },
      {
        "nome": "São João do Manteninha",
        "uf": "MG",
        "ibge": 3162575,
        "lat": -18.723,
        "lng": -41.1628
      },
      {
        "nome": "São João do Oriente",
        "uf": "MG",
        "ibge": 3162609,
        "lat": -19.3384,
        "lng": -42.1575
      },
      {
        "nome": "São João do Pacuí",
        "uf": "MG",
        "ibge": 3162658,
        "lat": -16.5373,
        "lng": -44.5134
      },
      {
        "nome": "São João do Paraíso",
        "uf": "MG",
        "ibge": 3162708,
        "lat": -15.3168,
        "lng": -42.0213
      },
      {
        "nome": "São João Evangelista",
        "uf": "MG",
        "ibge": 3162807,
        "lat": -18.548,
        "lng": -42.7655
      },
      {
        "nome": "São João Nepomuceno",
        "uf": "MG",
        "ibge": 3162906,
        "lat": -21.5381,
        "lng": -43.0069
      },
      {
        "nome": "São Joaquim de Bicas",
        "uf": "MG",
        "ibge": 3162922,
        "lat": -20.048,
        "lng": -44.2749
      },
      {
        "nome": "São José da Barra",
        "uf": "MG",
        "ibge": 3162948,
        "lat": -20.7178,
        "lng": -46.313
      },
      {
        "nome": "São José da Lapa",
        "uf": "MG",
        "ibge": 3162955,
        "lat": -19.6971,
        "lng": -43.9586
      },
      {
        "nome": "São José da Safira",
        "uf": "MG",
        "ibge": 3163003,
        "lat": -18.3243,
        "lng": -42.1431
      },
      {
        "nome": "São José da Varginha",
        "uf": "MG",
        "ibge": 3163102,
        "lat": -19.7006,
        "lng": -44.556
      },
      {
        "nome": "São José do Alegre",
        "uf": "MG",
        "ibge": 3163201,
        "lat": -22.3243,
        "lng": -45.5258
      },
      {
        "nome": "São José do Divino",
        "uf": "MG",
        "ibge": 3163300,
        "lat": -18.4793,
        "lng": -41.3907
      },
      {
        "nome": "São José do Goiabal",
        "uf": "MG",
        "ibge": 3163409,
        "lat": -19.9214,
        "lng": -42.7035
      },
      {
        "nome": "São José do Jacuri",
        "uf": "MG",
        "ibge": 3163508,
        "lat": -18.281,
        "lng": -42.6729
      },
      {
        "nome": "São José do Mantimento",
        "uf": "MG",
        "ibge": 3163607,
        "lat": -20.0058,
        "lng": -41.7486
      },
      {
        "nome": "São Lourenço",
        "uf": "MG",
        "ibge": 3163706,
        "lat": -22.1166,
        "lng": -45.0506
      },
      {
        "nome": "São Miguel do Anta",
        "uf": "MG",
        "ibge": 3163805,
        "lat": -20.7067,
        "lng": -42.7174
      },
      {
        "nome": "São Pedro da União",
        "uf": "MG",
        "ibge": 3163904,
        "lat": -21.131,
        "lng": -46.6123
      },
      {
        "nome": "São Pedro do Suaçuí",
        "uf": "MG",
        "ibge": 3164100,
        "lat": -18.3609,
        "lng": -42.5981
      },
      {
        "nome": "São Pedro dos Ferros",
        "uf": "MG",
        "ibge": 3164001,
        "lat": -20.1732,
        "lng": -42.5251
      },
      {
        "nome": "São Romão",
        "uf": "MG",
        "ibge": 3164209,
        "lat": -16.3641,
        "lng": -45.0749
      },
      {
        "nome": "São Roque de Minas",
        "uf": "MG",
        "ibge": 3164308,
        "lat": -20.249,
        "lng": -46.3639
      },
      {
        "nome": "São Sebastião da Bela Vista",
        "uf": "MG",
        "ibge": 3164407,
        "lat": -22.1583,
        "lng": -45.7546
      },
      {
        "nome": "São Sebastião da Vargem Alegre",
        "uf": "MG",
        "ibge": 3164431,
        "lat": -19.7477,
        "lng": -43.3679
      },
      {
        "nome": "São Sebastião do Anta",
        "uf": "MG",
        "ibge": 3164472,
        "lat": -19.5064,
        "lng": -41.985
      },
      {
        "nome": "São Sebastião do Maranhão",
        "uf": "MG",
        "ibge": 3164506,
        "lat": -18.0873,
        "lng": -42.5659
      },
      {
        "nome": "São Sebastião do Oeste",
        "uf": "MG",
        "ibge": 3164605,
        "lat": -20.2758,
        "lng": -45.0063
      },
      {
        "nome": "São Sebastião do Paraíso",
        "uf": "MG",
        "ibge": 3164704,
        "lat": -20.9167,
        "lng": -46.9837
      },
      {
        "nome": "São Sebastião do Rio Preto",
        "uf": "MG",
        "ibge": 3164803,
        "lat": -19.2959,
        "lng": -43.1757
      },
      {
        "nome": "São Sebastião do Rio Verde",
        "uf": "MG",
        "ibge": 3164902,
        "lat": -22.2183,
        "lng": -44.9761
      },
      {
        "nome": "São Thomé das Letras",
        "uf": "MG",
        "ibge": 3165206,
        "lat": -21.7218,
        "lng": -44.9849
      },
      {
        "nome": "São Tiago",
        "uf": "MG",
        "ibge": 3165008,
        "lat": -20.9075,
        "lng": -44.5098
      },
      {
        "nome": "São Tomás de Aquino",
        "uf": "MG",
        "ibge": 3165107,
        "lat": -20.7791,
        "lng": -47.0962
      },
      {
        "nome": "São Vicente de Minas",
        "uf": "MG",
        "ibge": 3165305,
        "lat": -21.7042,
        "lng": -44.4431
      },
      {
        "nome": "Sapucaí-Mirim",
        "uf": "MG",
        "ibge": 3165404,
        "lat": -22.7409,
        "lng": -45.738
      },
      {
        "nome": "Sardoá",
        "uf": "MG",
        "ibge": 3165503,
        "lat": -18.7828,
        "lng": -42.3629
      },
      {
        "nome": "Sarzedo",
        "uf": "MG",
        "ibge": 3165537,
        "lat": -20.0367,
        "lng": -44.1446
      },
      {
        "nome": "Sem-Peixe",
        "uf": "MG",
        "ibge": 3165560,
        "lat": -20.1008,
        "lng": -42.8483
      },
      {
        "nome": "Senador Amaral",
        "uf": "MG",
        "ibge": 3165578,
        "lat": -22.5869,
        "lng": -46.1763
      },
      {
        "nome": "Senador Cortes",
        "uf": "MG",
        "ibge": 3165602,
        "lat": -21.7986,
        "lng": -42.9424
      },
      {
        "nome": "Senador Firmino",
        "uf": "MG",
        "ibge": 3165701,
        "lat": -20.9158,
        "lng": -43.0904
      },
      {
        "nome": "Senador José Bento",
        "uf": "MG",
        "ibge": 3165800,
        "lat": -22.1633,
        "lng": -46.1792
      },
      {
        "nome": "Senador Modestino Gonçalves",
        "uf": "MG",
        "ibge": 3165909,
        "lat": -17.9465,
        "lng": -43.2172
      },
      {
        "nome": "Senhora de Oliveira",
        "uf": "MG",
        "ibge": 3166006,
        "lat": -20.7972,
        "lng": -43.3394
      },
      {
        "nome": "Senhora do Porto",
        "uf": "MG",
        "ibge": 3166105,
        "lat": -18.8909,
        "lng": -43.0799
      },
      {
        "nome": "Senhora dos Remédios",
        "uf": "MG",
        "ibge": 3166204,
        "lat": -21.0351,
        "lng": -43.5812
      },
      {
        "nome": "Sericita",
        "uf": "MG",
        "ibge": 3166303,
        "lat": -20.4748,
        "lng": -42.4828
      },
      {
        "nome": "Seritinga",
        "uf": "MG",
        "ibge": 3166402,
        "lat": -21.9134,
        "lng": -44.518
      },
      {
        "nome": "Serra Azul de Minas",
        "uf": "MG",
        "ibge": 3166501,
        "lat": -18.3602,
        "lng": -43.1675
      },
      {
        "nome": "Serra da Saudade",
        "uf": "MG",
        "ibge": 3166600,
        "lat": -19.4447,
        "lng": -45.795
      },
      {
        "nome": "Serra do Salitre",
        "uf": "MG",
        "ibge": 3166808,
        "lat": -19.1083,
        "lng": -46.6961
      },
      {
        "nome": "Serra dos Aimorés",
        "uf": "MG",
        "ibge": 3166709,
        "lat": -17.7872,
        "lng": -40.2453
      },
      {
        "nome": "Serrania",
        "uf": "MG",
        "ibge": 3166907,
        "lat": -21.5441,
        "lng": -46.0417
      },
      {
        "nome": "Serranópolis de Minas",
        "uf": "MG",
        "ibge": 3166956,
        "lat": -15.8176,
        "lng": -42.8732
      },
      {
        "nome": "Serranos",
        "uf": "MG",
        "ibge": 3167004,
        "lat": -21.8857,
        "lng": -44.5125
      },
      {
        "nome": "Serro",
        "uf": "MG",
        "ibge": 3167103,
        "lat": -18.5991,
        "lng": -43.3744
      },
      {
        "nome": "Sete Lagoas",
        "uf": "MG",
        "ibge": 3167202,
        "lat": -19.4569,
        "lng": -44.2413
      },
      {
        "nome": "Setubinha",
        "uf": "MG",
        "ibge": 3165552,
        "lat": -17.6002,
        "lng": -42.1587
      },
      {
        "nome": "Silveirânia",
        "uf": "MG",
        "ibge": 3167301,
        "lat": -21.1615,
        "lng": -43.2128
      },
      {
        "nome": "Silvianópolis",
        "uf": "MG",
        "ibge": 3167400,
        "lat": -22.0274,
        "lng": -45.8385
      },
      {
        "nome": "Simão Pereira",
        "uf": "MG",
        "ibge": 3167509,
        "lat": -21.964,
        "lng": -43.3088
      },
      {
        "nome": "Simonésia",
        "uf": "MG",
        "ibge": 3167608,
        "lat": -20.1341,
        "lng": -42.0091
      },
      {
        "nome": "Sobrália",
        "uf": "MG",
        "ibge": 3167707,
        "lat": -19.2345,
        "lng": -42.0998
      },
      {
        "nome": "Soledade de Minas",
        "uf": "MG",
        "ibge": 3167806,
        "lat": -22.0554,
        "lng": -45.0464
      },
      {
        "nome": "Tabuleiro",
        "uf": "MG",
        "ibge": 3167905,
        "lat": -21.3632,
        "lng": -43.2381
      },
      {
        "nome": "Taiobeiras",
        "uf": "MG",
        "ibge": 3168002,
        "lat": -15.8106,
        "lng": -42.2259
      },
      {
        "nome": "Taparuba",
        "uf": "MG",
        "ibge": 3168051,
        "lat": -19.7621,
        "lng": -41.608
      },
      {
        "nome": "Tapira",
        "uf": "MG",
        "ibge": 3168101,
        "lat": -19.9166,
        "lng": -46.8264
      },
      {
        "nome": "Tapiraí",
        "uf": "MG",
        "ibge": 3168200,
        "lat": -19.8936,
        "lng": -46.0221
      },
      {
        "nome": "Taquaraçu de Minas",
        "uf": "MG",
        "ibge": 3168309,
        "lat": -19.6652,
        "lng": -43.6922
      },
      {
        "nome": "Tarumirim",
        "uf": "MG",
        "ibge": 3168408,
        "lat": -19.2835,
        "lng": -42.0097
      },
      {
        "nome": "Teixeiras",
        "uf": "MG",
        "ibge": 3168507,
        "lat": -20.6561,
        "lng": -42.8564
      },
      {
        "nome": "Teófilo Otoni",
        "uf": "MG",
        "ibge": 3168606,
        "lat": -17.8595,
        "lng": -41.5087
      },
      {
        "nome": "Timóteo",
        "uf": "MG",
        "ibge": 3168705,
        "lat": -19.5811,
        "lng": -42.6471
      },
      {
        "nome": "Tiradentes",
        "uf": "MG",
        "ibge": 3168804,
        "lat": -21.1102,
        "lng": -44.1744
      },
      {
        "nome": "Tiros",
        "uf": "MG",
        "ibge": 3168903,
        "lat": -19.0037,
        "lng": -45.9626
      },
      {
        "nome": "Tocantins",
        "uf": "MG",
        "ibge": 3169000,
        "lat": -21.1774,
        "lng": -43.0127
      },
      {
        "nome": "Tocos do Moji",
        "uf": "MG",
        "ibge": 3169059,
        "lat": -22.3698,
        "lng": -46.0971
      },
      {
        "nome": "Toledo",
        "uf": "MG",
        "ibge": 3169109,
        "lat": -22.7421,
        "lng": -46.3728
      },
      {
        "nome": "Tombos",
        "uf": "MG",
        "ibge": 3169208,
        "lat": -20.9086,
        "lng": -42.0228
      },
      {
        "nome": "Três Corações",
        "uf": "MG",
        "ibge": 3169307,
        "lat": -21.6921,
        "lng": -45.2511
      },
      {
        "nome": "Três Marias",
        "uf": "MG",
        "ibge": 3169356,
        "lat": -18.2048,
        "lng": -45.2473
      },
      {
        "nome": "Três Pontas",
        "uf": "MG",
        "ibge": 3169406,
        "lat": -21.3694,
        "lng": -45.5109
      },
      {
        "nome": "Tumiritinga",
        "uf": "MG",
        "ibge": 3169505,
        "lat": -18.9844,
        "lng": -41.6527
      },
      {
        "nome": "Tupaciguara",
        "uf": "MG",
        "ibge": 3169604,
        "lat": -18.5866,
        "lng": -48.6985
      },
      {
        "nome": "Turmalina",
        "uf": "MG",
        "ibge": 3169703,
        "lat": -17.2828,
        "lng": -42.7285
      },
      {
        "nome": "Turvolândia",
        "uf": "MG",
        "ibge": 3169802,
        "lat": -21.8733,
        "lng": -45.7859
      },
      {
        "nome": "Ubá",
        "uf": "MG",
        "ibge": 3169901,
        "lat": -21.1204,
        "lng": -42.9359
      },
      {
        "nome": "Ubaí",
        "uf": "MG",
        "ibge": 3170008,
        "lat": -16.2885,
        "lng": -44.7783
      },
      {
        "nome": "Ubaporanga",
        "uf": "MG",
        "ibge": 3170057,
        "lat": -19.6351,
        "lng": -42.1059
      },
      {
        "nome": "Uberaba",
        "uf": "MG",
        "ibge": 3170107,
        "lat": -19.7472,
        "lng": -47.9381
      },
      {
        "nome": "Uberlândia",
        "uf": "MG",
        "ibge": 3170206,
        "lat": -18.9141,
        "lng": -48.2749
      },
      {
        "nome": "Umburatiba",
        "uf": "MG",
        "ibge": 3170305,
        "lat": -17.2548,
        "lng": -40.5779
      },
      {
        "nome": "Unaí",
        "uf": "MG",
        "ibge": 3170404,
        "lat": -16.3592,
        "lng": -46.9022
      },
      {
        "nome": "União de Minas",
        "uf": "MG",
        "ibge": 3170438,
        "lat": -19.5299,
        "lng": -50.338
      },
      {
        "nome": "Uruana de Minas",
        "uf": "MG",
        "ibge": 3170479,
        "lat": -16.0634,
        "lng": -46.2443
      },
      {
        "nome": "Urucânia",
        "uf": "MG",
        "ibge": 3170503,
        "lat": -20.3521,
        "lng": -42.737
      },
      {
        "nome": "Urucuia",
        "uf": "MG",
        "ibge": 3170529,
        "lat": -16.1244,
        "lng": -45.7352
      },
      {
        "nome": "Vargem Alegre",
        "uf": "MG",
        "ibge": 3170578,
        "lat": -19.5988,
        "lng": -42.2949
      },
      {
        "nome": "Vargem Bonita",
        "uf": "MG",
        "ibge": 3170602,
        "lat": -20.3333,
        "lng": -46.3688
      },
      {
        "nome": "Vargem Grande do Rio Pardo",
        "uf": "MG",
        "ibge": 3170651,
        "lat": -15.3987,
        "lng": -42.3085
      },
      {
        "nome": "Varginha",
        "uf": "MG",
        "ibge": 3170701,
        "lat": -21.5556,
        "lng": -45.4364
      },
      {
        "nome": "Varjão de Minas",
        "uf": "MG",
        "ibge": 3170750,
        "lat": -18.3741,
        "lng": -46.0313
      },
      {
        "nome": "Várzea da Palma",
        "uf": "MG",
        "ibge": 3170800,
        "lat": -17.5944,
        "lng": -44.7226
      },
      {
        "nome": "Varzelândia",
        "uf": "MG",
        "ibge": 3170909,
        "lat": -15.6992,
        "lng": -44.0278
      },
      {
        "nome": "Vazante",
        "uf": "MG",
        "ibge": 3171006,
        "lat": -17.9827,
        "lng": -46.9088
      },
      {
        "nome": "Verdelândia",
        "uf": "MG",
        "ibge": 3171030,
        "lat": -15.5845,
        "lng": -43.6121
      },
      {
        "nome": "Veredinha",
        "uf": "MG",
        "ibge": 3171071,
        "lat": -17.3974,
        "lng": -42.7307
      },
      {
        "nome": "Veríssimo",
        "uf": "MG",
        "ibge": 3171105,
        "lat": -19.6657,
        "lng": -48.3118
      },
      {
        "nome": "Vermelho Novo",
        "uf": "MG",
        "ibge": 3171154,
        "lat": -20.0406,
        "lng": -42.2688
      },
      {
        "nome": "Vespasiano",
        "uf": "MG",
        "ibge": 3171204,
        "lat": -19.6883,
        "lng": -43.9239
      },
      {
        "nome": "Viçosa",
        "uf": "MG",
        "ibge": 3171303,
        "lat": -20.7559,
        "lng": -42.8742
      },
      {
        "nome": "Vieiras",
        "uf": "MG",
        "ibge": 3171402,
        "lat": -20.867,
        "lng": -42.2401
      },
      {
        "nome": "Virgem da Lapa",
        "uf": "MG",
        "ibge": 3171600,
        "lat": -16.807,
        "lng": -42.3431
      },
      {
        "nome": "Virgínia",
        "uf": "MG",
        "ibge": 3171709,
        "lat": -22.3264,
        "lng": -45.0965
      },
      {
        "nome": "Virginópolis",
        "uf": "MG",
        "ibge": 3171808,
        "lat": -18.8154,
        "lng": -42.7015
      },
      {
        "nome": "Virgolândia",
        "uf": "MG",
        "ibge": 3171907,
        "lat": -18.4738,
        "lng": -42.3067
      },
      {
        "nome": "Visconde do Rio Branco",
        "uf": "MG",
        "ibge": 3172004,
        "lat": -21.0127,
        "lng": -42.8361
      },
      {
        "nome": "Volta Grande",
        "uf": "MG",
        "ibge": 3172103,
        "lat": -21.7671,
        "lng": -42.5375
      },
      {
        "nome": "Wenceslau Braz",
        "uf": "MG",
        "ibge": 3172202,
        "lat": -22.5368,
        "lng": -45.3626
      }
    ],
    "capital": {
      "nome": "Belo Horizonte",
      "uf": "MG",
      "ibge": 3106200,
      "lat": -19.9102,
      "lng": -43.9266
    }
  },
  "ES": {
    "nome": "Espírito Santo",
    "ibge": 32,
    "cidades": [
      {
        "nome": "Afonso Cláudio",
        "uf": "ES",
        "ibge": 3200102,
        "lat": -20.0778,
        "lng": -41.1261
      },
      {
        "nome": "Água Doce do Norte",
        "uf": "ES",
        "ibge": 3200169,
        "lat": -18.5482,
        "lng": -40.9854
      },
      {
        "nome": "Águia Branca",
        "uf": "ES",
        "ibge": 3200136,
        "lat": -18.9846,
        "lng": -40.7437
      },
      {
        "nome": "Alegre",
        "uf": "ES",
        "ibge": 3200201,
        "lat": -20.758,
        "lng": -41.5382
      },
      {
        "nome": "Alfredo Chaves",
        "uf": "ES",
        "ibge": 3200300,
        "lat": -20.6396,
        "lng": -40.7543
      },
      {
        "nome": "Alto Rio Novo",
        "uf": "ES",
        "ibge": 3200359,
        "lat": -19.0618,
        "lng": -41.0209
      },
      {
        "nome": "Anchieta",
        "uf": "ES",
        "ibge": 3200409,
        "lat": -20.7955,
        "lng": -40.6425
      },
      {
        "nome": "Apiacá",
        "uf": "ES",
        "ibge": 3200508,
        "lat": -21.1523,
        "lng": -41.5693
      },
      {
        "nome": "Aracruz",
        "uf": "ES",
        "ibge": 3200607,
        "lat": -19.82,
        "lng": -40.2764
      },
      {
        "nome": "Atilio Vivacqua",
        "uf": "ES",
        "ibge": 3200706,
        "lat": -20.913,
        "lng": -41.1986
      },
      {
        "nome": "Baixo Guandu",
        "uf": "ES",
        "ibge": 3200805,
        "lat": -19.5213,
        "lng": -41.0109
      },
      {
        "nome": "Barra de São Francisco",
        "uf": "ES",
        "ibge": 3200904,
        "lat": -18.7548,
        "lng": -40.8965
      },
      {
        "nome": "Boa Esperança",
        "uf": "ES",
        "ibge": 3201001,
        "lat": -18.5395,
        "lng": -40.3025
      },
      {
        "nome": "Bom Jesus do Norte",
        "uf": "ES",
        "ibge": 3201100,
        "lat": -21.1173,
        "lng": -41.6731
      },
      {
        "nome": "Brejetuba",
        "uf": "ES",
        "ibge": 3201159,
        "lat": -20.1395,
        "lng": -41.2954
      },
      {
        "nome": "Cachoeiro de Itapemirim",
        "uf": "ES",
        "ibge": 3201209,
        "lat": -20.8462,
        "lng": -41.1198
      },
      {
        "nome": "Cariacica",
        "uf": "ES",
        "ibge": 3201308,
        "lat": -20.2632,
        "lng": -40.4165
      },
      {
        "nome": "Castelo",
        "uf": "ES",
        "ibge": 3201407,
        "lat": -20.6033,
        "lng": -41.2031
      },
      {
        "nome": "Colatina",
        "uf": "ES",
        "ibge": 3201506,
        "lat": -19.5493,
        "lng": -40.6269
      },
      {
        "nome": "Conceição da Barra",
        "uf": "ES",
        "ibge": 3201605,
        "lat": -18.5883,
        "lng": -39.7362
      },
      {
        "nome": "Conceição do Castelo",
        "uf": "ES",
        "ibge": 3201704,
        "lat": -20.3639,
        "lng": -41.2417
      },
      {
        "nome": "Divino de São Lourenço",
        "uf": "ES",
        "ibge": 3201803,
        "lat": -20.6229,
        "lng": -41.6937
      },
      {
        "nome": "Domingos Martins",
        "uf": "ES",
        "ibge": 3201902,
        "lat": -20.3603,
        "lng": -40.6594
      },
      {
        "nome": "Dores do Rio Preto",
        "uf": "ES",
        "ibge": 3202009,
        "lat": -20.6931,
        "lng": -41.8405
      },
      {
        "nome": "Ecoporanga",
        "uf": "ES",
        "ibge": 3202108,
        "lat": -18.3702,
        "lng": -40.836
      },
      {
        "nome": "Fundão",
        "uf": "ES",
        "ibge": 3202207,
        "lat": -19.937,
        "lng": -40.4078
      },
      {
        "nome": "Governador Lindenberg",
        "uf": "ES",
        "ibge": 3202256,
        "lat": -19.1864,
        "lng": -40.4473
      },
      {
        "nome": "Guaçuí",
        "uf": "ES",
        "ibge": 3202306,
        "lat": -20.7668,
        "lng": -41.6734
      },
      {
        "nome": "Guarapari",
        "uf": "ES",
        "ibge": 3202405,
        "lat": -20.6772,
        "lng": -40.5093
      },
      {
        "nome": "Ibatiba",
        "uf": "ES",
        "ibge": 3202454,
        "lat": -20.2347,
        "lng": -41.5087
      },
      {
        "nome": "Ibiraçu",
        "uf": "ES",
        "ibge": 3202504,
        "lat": -19.8366,
        "lng": -40.3732
      },
      {
        "nome": "Ibitirama",
        "uf": "ES",
        "ibge": 3202553,
        "lat": -20.5466,
        "lng": -41.6667
      },
      {
        "nome": "Iconha",
        "uf": "ES",
        "ibge": 3202603,
        "lat": -20.7913,
        "lng": -40.8132
      },
      {
        "nome": "Irupi",
        "uf": "ES",
        "ibge": 3202652,
        "lat": -20.3501,
        "lng": -41.6444
      },
      {
        "nome": "Itaguaçu",
        "uf": "ES",
        "ibge": 3202702,
        "lat": -19.8018,
        "lng": -40.8601
      },
      {
        "nome": "Itapemirim",
        "uf": "ES",
        "ibge": 3202801,
        "lat": -21.0095,
        "lng": -40.8307
      },
      {
        "nome": "Itarana",
        "uf": "ES",
        "ibge": 3202900,
        "lat": -19.875,
        "lng": -40.8753
      },
      {
        "nome": "Iúna",
        "uf": "ES",
        "ibge": 3203007,
        "lat": -20.3531,
        "lng": -41.5334
      },
      {
        "nome": "Jaguaré",
        "uf": "ES",
        "ibge": 3203056,
        "lat": -18.907,
        "lng": -40.0759
      },
      {
        "nome": "Jerônimo Monteiro",
        "uf": "ES",
        "ibge": 3203106,
        "lat": -20.7994,
        "lng": -41.3948
      },
      {
        "nome": "João Neiva",
        "uf": "ES",
        "ibge": 3203130,
        "lat": -19.7577,
        "lng": -40.386
      },
      {
        "nome": "Laranja da Terra",
        "uf": "ES",
        "ibge": 3203163,
        "lat": -19.8994,
        "lng": -41.0621
      },
      {
        "nome": "Linhares",
        "uf": "ES",
        "ibge": 3203205,
        "lat": -19.3946,
        "lng": -40.0643
      },
      {
        "nome": "Mantenópolis",
        "uf": "ES",
        "ibge": 3203304,
        "lat": -18.8594,
        "lng": -41.124
      },
      {
        "nome": "Marataízes",
        "uf": "ES",
        "ibge": 3203320,
        "lat": -21.0398,
        "lng": -40.8384
      },
      {
        "nome": "Marechal Floriano",
        "uf": "ES",
        "ibge": 3203346,
        "lat": -20.4159,
        "lng": -40.67
      },
      {
        "nome": "Marilândia",
        "uf": "ES",
        "ibge": 3203353,
        "lat": -19.4114,
        "lng": -40.5456
      },
      {
        "nome": "Mimoso do Sul",
        "uf": "ES",
        "ibge": 3203403,
        "lat": -21.0628,
        "lng": -41.3615
      },
      {
        "nome": "Montanha",
        "uf": "ES",
        "ibge": 3203502,
        "lat": -18.1303,
        "lng": -40.3668
      },
      {
        "nome": "Mucurici",
        "uf": "ES",
        "ibge": 3203601,
        "lat": -18.0965,
        "lng": -40.52
      },
      {
        "nome": "Muniz Freire",
        "uf": "ES",
        "ibge": 3203700,
        "lat": -20.4652,
        "lng": -41.4156
      },
      {
        "nome": "Muqui",
        "uf": "ES",
        "ibge": 3203809,
        "lat": -20.9509,
        "lng": -41.346
      },
      {
        "nome": "Nova Venécia",
        "uf": "ES",
        "ibge": 3203908,
        "lat": -18.715,
        "lng": -40.4053
      },
      {
        "nome": "Pancas",
        "uf": "ES",
        "ibge": 3204005,
        "lat": -19.2229,
        "lng": -40.8534
      },
      {
        "nome": "Pedro Canário",
        "uf": "ES",
        "ibge": 3204054,
        "lat": -18.3004,
        "lng": -39.9574
      },
      {
        "nome": "Pinheiros",
        "uf": "ES",
        "ibge": 3204104,
        "lat": -18.4141,
        "lng": -40.2171
      },
      {
        "nome": "Piúma",
        "uf": "ES",
        "ibge": 3204203,
        "lat": -20.8334,
        "lng": -40.7268
      },
      {
        "nome": "Ponto Belo",
        "uf": "ES",
        "ibge": 3204252,
        "lat": -18.1253,
        "lng": -40.5458
      },
      {
        "nome": "Presidente Kennedy",
        "uf": "ES",
        "ibge": 3204302,
        "lat": -21.0964,
        "lng": -41.0468
      },
      {
        "nome": "Rio Bananal",
        "uf": "ES",
        "ibge": 3204351,
        "lat": -19.2719,
        "lng": -40.3366
      },
      {
        "nome": "Rio Novo do Sul",
        "uf": "ES",
        "ibge": 3204401,
        "lat": -20.8556,
        "lng": -40.9388
      },
      {
        "nome": "Santa Leopoldina",
        "uf": "ES",
        "ibge": 3204500,
        "lat": -20.0999,
        "lng": -40.527
      },
      {
        "nome": "Santa Maria de Jetibá",
        "uf": "ES",
        "ibge": 3204559,
        "lat": -20.0253,
        "lng": -40.7439
      },
      {
        "nome": "Santa Teresa",
        "uf": "ES",
        "ibge": 3204609,
        "lat": -19.9363,
        "lng": -40.5979
      },
      {
        "nome": "São Domingos do Norte",
        "uf": "ES",
        "ibge": 3204658,
        "lat": -19.1452,
        "lng": -40.6281
      },
      {
        "nome": "São Gabriel da Palha",
        "uf": "ES",
        "ibge": 3204708,
        "lat": -19.0182,
        "lng": -40.5365
      },
      {
        "nome": "São José do Calçado",
        "uf": "ES",
        "ibge": 3204807,
        "lat": -21.0274,
        "lng": -41.6636
      },
      {
        "nome": "São Mateus",
        "uf": "ES",
        "ibge": 3204906,
        "lat": -18.7214,
        "lng": -39.8579
      },
      {
        "nome": "São Roque do Canaã",
        "uf": "ES",
        "ibge": 3204955,
        "lat": -19.7411,
        "lng": -40.6526
      },
      {
        "nome": "Serra",
        "uf": "ES",
        "ibge": 3205002,
        "lat": -20.121,
        "lng": -40.3074
      },
      {
        "nome": "Sooretama",
        "uf": "ES",
        "ibge": 3205010,
        "lat": -19.1897,
        "lng": -40.0974
      },
      {
        "nome": "Vargem Alta",
        "uf": "ES",
        "ibge": 3205036,
        "lat": -20.669,
        "lng": -41.0179
      },
      {
        "nome": "Venda Nova do Imigrante",
        "uf": "ES",
        "ibge": 3205069,
        "lat": -20.327,
        "lng": -41.1355
      },
      {
        "nome": "Viana",
        "uf": "ES",
        "ibge": 3205101,
        "lat": -20.3825,
        "lng": -40.4933
      },
      {
        "nome": "Vila Pavão",
        "uf": "ES",
        "ibge": 3205150,
        "lat": -18.6091,
        "lng": -40.609
      },
      {
        "nome": "Vila Valério",
        "uf": "ES",
        "ibge": 3205176,
        "lat": -18.9958,
        "lng": -40.3849
      },
      {
        "nome": "Vila Velha",
        "uf": "ES",
        "ibge": 3205200,
        "lat": -20.3417,
        "lng": -40.2875
      }
    ],
    "capital": {
      "nome": "Vitória",
      "uf": "ES",
      "ibge": 3205309,
      "lat": -20.3155,
      "lng": -40.3128
    }
  },
  "RJ": {
    "nome": "Rio de Janeiro",
    "ibge": 33,
    "cidades": [
      {
        "nome": "Angra dos Reis",
        "uf": "RJ",
        "ibge": 3300100,
        "lat": -23.0011,
        "lng": -44.3196
      },
      {
        "nome": "Aperibé",
        "uf": "RJ",
        "ibge": 3300159,
        "lat": -21.6252,
        "lng": -42.1017
      },
      {
        "nome": "Araruama",
        "uf": "RJ",
        "ibge": 3300209,
        "lat": -22.8697,
        "lng": -42.3326
      },
      {
        "nome": "Areal",
        "uf": "RJ",
        "ibge": 3300225,
        "lat": -22.2283,
        "lng": -43.1118
      },
      {
        "nome": "Armação dos Búzios",
        "uf": "RJ",
        "ibge": 3300233,
        "lat": -22.7528,
        "lng": -41.8846
      },
      {
        "nome": "Arraial do Cabo",
        "uf": "RJ",
        "ibge": 3300258,
        "lat": -22.9774,
        "lng": -42.0267
      },
      {
        "nome": "Barra do Piraí",
        "uf": "RJ",
        "ibge": 3300308,
        "lat": -22.4715,
        "lng": -43.8269
      },
      {
        "nome": "Barra Mansa",
        "uf": "RJ",
        "ibge": 3300407,
        "lat": -22.5481,
        "lng": -44.1752
      },
      {
        "nome": "Belford Roxo",
        "uf": "RJ",
        "ibge": 3300456,
        "lat": -22.764,
        "lng": -43.3992
      },
      {
        "nome": "Bom Jardim",
        "uf": "RJ",
        "ibge": 3300506,
        "lat": -22.1545,
        "lng": -42.4251
      },
      {
        "nome": "Bom Jesus do Itabapoana",
        "uf": "RJ",
        "ibge": 3300605,
        "lat": -21.1449,
        "lng": -41.6822
      },
      {
        "nome": "Cabo Frio",
        "uf": "RJ",
        "ibge": 3300704,
        "lat": -22.8894,
        "lng": -42.0286
      },
      {
        "nome": "Cachoeiras de Macacu",
        "uf": "RJ",
        "ibge": 3300803,
        "lat": -22.4658,
        "lng": -42.6523
      },
      {
        "nome": "Cambuci",
        "uf": "RJ",
        "ibge": 3300902,
        "lat": -21.5691,
        "lng": -41.9187
      },
      {
        "nome": "Campos dos Goytacazes",
        "uf": "RJ",
        "ibge": 3301009,
        "lat": -21.7622,
        "lng": -41.3181
      },
      {
        "nome": "Cantagalo",
        "uf": "RJ",
        "ibge": 3301108,
        "lat": -21.9797,
        "lng": -42.3664
      },
      {
        "nome": "Carapebus",
        "uf": "RJ",
        "ibge": 3300936,
        "lat": -22.1821,
        "lng": -41.663
      },
      {
        "nome": "Cardoso Moreira",
        "uf": "RJ",
        "ibge": 3301157,
        "lat": -21.4846,
        "lng": -41.6165
      },
      {
        "nome": "Carmo",
        "uf": "RJ",
        "ibge": 3301207,
        "lat": -21.931,
        "lng": -42.6046
      },
      {
        "nome": "Casimiro de Abreu",
        "uf": "RJ",
        "ibge": 3301306,
        "lat": -22.4812,
        "lng": -42.2066
      },
      {
        "nome": "Comendador Levy Gasparian",
        "uf": "RJ",
        "ibge": 3300951,
        "lat": -22.0404,
        "lng": -43.214
      },
      {
        "nome": "Conceição de Macabu",
        "uf": "RJ",
        "ibge": 3301405,
        "lat": -22.0834,
        "lng": -41.8719
      },
      {
        "nome": "Cordeiro",
        "uf": "RJ",
        "ibge": 3301504,
        "lat": -22.0267,
        "lng": -42.3648
      },
      {
        "nome": "Duas Barras",
        "uf": "RJ",
        "ibge": 3301603,
        "lat": -22.0536,
        "lng": -42.5232
      },
      {
        "nome": "Duque de Caxias",
        "uf": "RJ",
        "ibge": 3301702,
        "lat": -22.7858,
        "lng": -43.3049
      },
      {
        "nome": "Engenheiro Paulo de Frontin",
        "uf": "RJ",
        "ibge": 3301801,
        "lat": -22.5498,
        "lng": -43.6827
      },
      {
        "nome": "Guapimirim",
        "uf": "RJ",
        "ibge": 3301850,
        "lat": -22.5347,
        "lng": -42.9895
      },
      {
        "nome": "Iguaba Grande",
        "uf": "RJ",
        "ibge": 3301876,
        "lat": -22.8495,
        "lng": -42.2299
      },
      {
        "nome": "Itaboraí",
        "uf": "RJ",
        "ibge": 3301900,
        "lat": -22.7565,
        "lng": -42.8639
      },
      {
        "nome": "Itaguaí",
        "uf": "RJ",
        "ibge": 3302007,
        "lat": -22.8636,
        "lng": -43.7798
      },
      {
        "nome": "Italva",
        "uf": "RJ",
        "ibge": 3302056,
        "lat": -21.4296,
        "lng": -41.7014
      },
      {
        "nome": "Itaocara",
        "uf": "RJ",
        "ibge": 3302106,
        "lat": -21.6748,
        "lng": -42.0758
      },
      {
        "nome": "Itaperuna",
        "uf": "RJ",
        "ibge": 3302205,
        "lat": -21.1997,
        "lng": -41.8799
      },
      {
        "nome": "Itatiaia",
        "uf": "RJ",
        "ibge": 3302254,
        "lat": -22.4897,
        "lng": -44.5675
      },
      {
        "nome": "Japeri",
        "uf": "RJ",
        "ibge": 3302270,
        "lat": -22.6435,
        "lng": -43.6602
      },
      {
        "nome": "Laje do Muriaé",
        "uf": "RJ",
        "ibge": 3302304,
        "lat": -21.2091,
        "lng": -42.1271
      },
      {
        "nome": "Macaé",
        "uf": "RJ",
        "ibge": 3302403,
        "lat": -22.3768,
        "lng": -41.7848
      },
      {
        "nome": "Macuco",
        "uf": "RJ",
        "ibge": 3302452,
        "lat": -21.9813,
        "lng": -42.2533
      },
      {
        "nome": "Magé",
        "uf": "RJ",
        "ibge": 3302502,
        "lat": -22.6632,
        "lng": -43.0315
      },
      {
        "nome": "Mangaratiba",
        "uf": "RJ",
        "ibge": 3302601,
        "lat": -22.9594,
        "lng": -44.0409
      },
      {
        "nome": "Maricá",
        "uf": "RJ",
        "ibge": 3302700,
        "lat": -22.9354,
        "lng": -42.8246
      },
      {
        "nome": "Mendes",
        "uf": "RJ",
        "ibge": 3302809,
        "lat": -22.5245,
        "lng": -43.7312
      },
      {
        "nome": "Mesquita",
        "uf": "RJ",
        "ibge": 3302858,
        "lat": -22.8028,
        "lng": -43.4601
      },
      {
        "nome": "Miguel Pereira",
        "uf": "RJ",
        "ibge": 3302908,
        "lat": -22.4572,
        "lng": -43.4803
      },
      {
        "nome": "Miracema",
        "uf": "RJ",
        "ibge": 3303005,
        "lat": -21.4148,
        "lng": -42.1938
      },
      {
        "nome": "Natividade",
        "uf": "RJ",
        "ibge": 3303104,
        "lat": -21.039,
        "lng": -41.9697
      },
      {
        "nome": "Nilópolis",
        "uf": "RJ",
        "ibge": 3303203,
        "lat": -22.8057,
        "lng": -43.4233
      },
      {
        "nome": "Niterói",
        "uf": "RJ",
        "ibge": 3303302,
        "lat": -22.8832,
        "lng": -43.1034
      },
      {
        "nome": "Nova Friburgo",
        "uf": "RJ",
        "ibge": 3303401,
        "lat": -22.2932,
        "lng": -42.5377
      },
      {
        "nome": "Nova Iguaçu",
        "uf": "RJ",
        "ibge": 3303500,
        "lat": -22.7556,
        "lng": -43.4603
      },
      {
        "nome": "Paracambi",
        "uf": "RJ",
        "ibge": 3303609,
        "lat": -22.6078,
        "lng": -43.7108
      },
      {
        "nome": "Paraíba do Sul",
        "uf": "RJ",
        "ibge": 3303708,
        "lat": -22.1585,
        "lng": -43.304
      },
      {
        "nome": "Paraty",
        "uf": "RJ",
        "ibge": 3303807,
        "lat": -23.2221,
        "lng": -44.7175
      },
      {
        "nome": "Paty do Alferes",
        "uf": "RJ",
        "ibge": 3303856,
        "lat": -22.4309,
        "lng": -43.4285
      },
      {
        "nome": "Petrópolis",
        "uf": "RJ",
        "ibge": 3303906,
        "lat": -22.52,
        "lng": -43.1926
      },
      {
        "nome": "Pinheiral",
        "uf": "RJ",
        "ibge": 3303955,
        "lat": -22.5172,
        "lng": -44.0022
      },
      {
        "nome": "Piraí",
        "uf": "RJ",
        "ibge": 3304003,
        "lat": -22.6215,
        "lng": -43.9081
      },
      {
        "nome": "Porciúncula",
        "uf": "RJ",
        "ibge": 3304102,
        "lat": -20.9632,
        "lng": -42.0465
      },
      {
        "nome": "Porto Real",
        "uf": "RJ",
        "ibge": 3304110,
        "lat": -22.4175,
        "lng": -44.2952
      },
      {
        "nome": "Quatis",
        "uf": "RJ",
        "ibge": 3304128,
        "lat": -22.4045,
        "lng": -44.2597
      },
      {
        "nome": "Queimados",
        "uf": "RJ",
        "ibge": 3304144,
        "lat": -22.7102,
        "lng": -43.5518
      },
      {
        "nome": "Quissamã",
        "uf": "RJ",
        "ibge": 3304151,
        "lat": -22.1031,
        "lng": -41.4693
      },
      {
        "nome": "Resende",
        "uf": "RJ",
        "ibge": 3304201,
        "lat": -22.4705,
        "lng": -44.4509
      },
      {
        "nome": "Rio Bonito",
        "uf": "RJ",
        "ibge": 3304300,
        "lat": -22.7181,
        "lng": -42.6276
      },
      {
        "nome": "Rio Claro",
        "uf": "RJ",
        "ibge": 3304409,
        "lat": -22.72,
        "lng": -44.1419
      },
      {
        "nome": "Rio das Flores",
        "uf": "RJ",
        "ibge": 3304508,
        "lat": -22.1692,
        "lng": -43.5856
      },
      {
        "nome": "Rio das Ostras",
        "uf": "RJ",
        "ibge": 3304524,
        "lat": -22.5174,
        "lng": -41.9475
      },
      {
        "nome": "Santa Maria Madalena",
        "uf": "RJ",
        "ibge": 3304607,
        "lat": -21.9547,
        "lng": -42.0098
      },
      {
        "nome": "Santo Antônio de Pádua",
        "uf": "RJ",
        "ibge": 3304706,
        "lat": -21.541,
        "lng": -42.1832
      },
      {
        "nome": "São Fidélis",
        "uf": "RJ",
        "ibge": 3304805,
        "lat": -21.6551,
        "lng": -41.756
      },
      {
        "nome": "São Francisco de Itabapoana",
        "uf": "RJ",
        "ibge": 3304755,
        "lat": -21.4702,
        "lng": -41.1091
      },
      {
        "nome": "São Gonçalo",
        "uf": "RJ",
        "ibge": 3304904,
        "lat": -22.8268,
        "lng": -43.0634
      },
      {
        "nome": "São João da Barra",
        "uf": "RJ",
        "ibge": 3305000,
        "lat": -21.638,
        "lng": -41.0446
      },
      {
        "nome": "São João de Meriti",
        "uf": "RJ",
        "ibge": 3305109,
        "lat": -22.8058,
        "lng": -43.3729
      },
      {
        "nome": "São José de Ubá",
        "uf": "RJ",
        "ibge": 3305133,
        "lat": -21.3661,
        "lng": -41.9511
      },
      {
        "nome": "São José do Vale do Rio Preto",
        "uf": "RJ",
        "ibge": 3305158,
        "lat": -22.1525,
        "lng": -42.9327
      },
      {
        "nome": "São Pedro da Aldeia",
        "uf": "RJ",
        "ibge": 3305208,
        "lat": -22.8429,
        "lng": -42.1026
      },
      {
        "nome": "São Sebastião do Alto",
        "uf": "RJ",
        "ibge": 3305307,
        "lat": -21.9578,
        "lng": -42.1328
      },
      {
        "nome": "Sapucaia",
        "uf": "RJ",
        "ibge": 3305406,
        "lat": -21.9949,
        "lng": -42.9142
      },
      {
        "nome": "Saquarema",
        "uf": "RJ",
        "ibge": 3305505,
        "lat": -22.9292,
        "lng": -42.5099
      },
      {
        "nome": "Seropédica",
        "uf": "RJ",
        "ibge": 3305554,
        "lat": -22.7526,
        "lng": -43.7155
      },
      {
        "nome": "Silva Jardim",
        "uf": "RJ",
        "ibge": 3305604,
        "lat": -22.6574,
        "lng": -42.3961
      },
      {
        "nome": "Sumidouro",
        "uf": "RJ",
        "ibge": 3305703,
        "lat": -22.0485,
        "lng": -42.6761
      },
      {
        "nome": "Tanguá",
        "uf": "RJ",
        "ibge": 3305752,
        "lat": -22.7423,
        "lng": -42.7202
      },
      {
        "nome": "Teresópolis",
        "uf": "RJ",
        "ibge": 3305802,
        "lat": -22.4165,
        "lng": -42.9752
      },
      {
        "nome": "Trajano de Moraes",
        "uf": "RJ",
        "ibge": 3305901,
        "lat": -22.0638,
        "lng": -42.0643
      },
      {
        "nome": "Três Rios",
        "uf": "RJ",
        "ibge": 3306008,
        "lat": -22.1165,
        "lng": -43.2185
      },
      {
        "nome": "Valença",
        "uf": "RJ",
        "ibge": 3306107,
        "lat": -22.2445,
        "lng": -43.7129
      },
      {
        "nome": "Varre-Sai",
        "uf": "RJ",
        "ibge": 3306156,
        "lat": -20.9276,
        "lng": -41.8701
      },
      {
        "nome": "Vassouras",
        "uf": "RJ",
        "ibge": 3306206,
        "lat": -22.4059,
        "lng": -43.6686
      },
      {
        "nome": "Volta Redonda",
        "uf": "RJ",
        "ibge": 3306305,
        "lat": -22.5202,
        "lng": -44.0996
      }
    ],
    "capital": {
      "nome": "Rio de Janeiro",
      "uf": "RJ",
      "ibge": 3304557,
      "lat": -22.9129,
      "lng": -43.2003
    }
  },
  "SP": {
    "nome": "São Paulo",
    "ibge": 35,
    "cidades": [
      {
        "nome": "Adamantina",
        "uf": "SP",
        "ibge": 3500105,
        "lat": -21.682,
        "lng": -51.0737
      },
      {
        "nome": "Adolfo",
        "uf": "SP",
        "ibge": 3500204,
        "lat": -21.2325,
        "lng": -49.6451
      },
      {
        "nome": "Aguaí",
        "uf": "SP",
        "ibge": 3500303,
        "lat": -22.0572,
        "lng": -46.9735
      },
      {
        "nome": "Águas da Prata",
        "uf": "SP",
        "ibge": 3500402,
        "lat": -21.9319,
        "lng": -46.7176
      },
      {
        "nome": "Águas de Lindóia",
        "uf": "SP",
        "ibge": 3500501,
        "lat": -22.4733,
        "lng": -46.6314
      },
      {
        "nome": "Águas de Santa Bárbara",
        "uf": "SP",
        "ibge": 3500550,
        "lat": -22.8812,
        "lng": -49.2421
      },
      {
        "nome": "Águas de São Pedro",
        "uf": "SP",
        "ibge": 3500600,
        "lat": -22.5977,
        "lng": -47.8734
      },
      {
        "nome": "Agudos",
        "uf": "SP",
        "ibge": 3500709,
        "lat": -22.4694,
        "lng": -48.9863
      },
      {
        "nome": "Alambari",
        "uf": "SP",
        "ibge": 3500758,
        "lat": -23.5503,
        "lng": -47.898
      },
      {
        "nome": "Alfredo Marcondes",
        "uf": "SP",
        "ibge": 3500808,
        "lat": -21.9527,
        "lng": -51.414
      },
      {
        "nome": "Altair",
        "uf": "SP",
        "ibge": 3500907,
        "lat": -20.5242,
        "lng": -49.0571
      },
      {
        "nome": "Altinópolis",
        "uf": "SP",
        "ibge": 3501004,
        "lat": -21.0214,
        "lng": -47.3712
      },
      {
        "nome": "Alto Alegre",
        "uf": "SP",
        "ibge": 3501103,
        "lat": -21.5811,
        "lng": -50.168
      },
      {
        "nome": "Alumínio",
        "uf": "SP",
        "ibge": 3501152,
        "lat": -23.5306,
        "lng": -47.2546
      },
      {
        "nome": "Álvares Florence",
        "uf": "SP",
        "ibge": 3501202,
        "lat": -20.3203,
        "lng": -49.9141
      },
      {
        "nome": "Álvares Machado",
        "uf": "SP",
        "ibge": 3501301,
        "lat": -22.0764,
        "lng": -51.4722
      },
      {
        "nome": "Álvaro de Carvalho",
        "uf": "SP",
        "ibge": 3501400,
        "lat": -22.0841,
        "lng": -49.719
      },
      {
        "nome": "Alvinlândia",
        "uf": "SP",
        "ibge": 3501509,
        "lat": -22.4435,
        "lng": -49.7623
      },
      {
        "nome": "Americana",
        "uf": "SP",
        "ibge": 3501608,
        "lat": -22.7374,
        "lng": -47.3331
      },
      {
        "nome": "Américo Brasiliense",
        "uf": "SP",
        "ibge": 3501707,
        "lat": -21.7288,
        "lng": -48.1147
      },
      {
        "nome": "Américo de Campos",
        "uf": "SP",
        "ibge": 3501806,
        "lat": -20.2985,
        "lng": -49.7359
      },
      {
        "nome": "Amparo",
        "uf": "SP",
        "ibge": 3501905,
        "lat": -22.7088,
        "lng": -46.772
      },
      {
        "nome": "Analândia",
        "uf": "SP",
        "ibge": 3502002,
        "lat": -22.1289,
        "lng": -47.6619
      },
      {
        "nome": "Andradina",
        "uf": "SP",
        "ibge": 3502101,
        "lat": -20.8948,
        "lng": -51.3786
      },
      {
        "nome": "Angatuba",
        "uf": "SP",
        "ibge": 3502200,
        "lat": -23.4917,
        "lng": -48.4139
      },
      {
        "nome": "Anhembi",
        "uf": "SP",
        "ibge": 3502309,
        "lat": -22.793,
        "lng": -48.1336
      },
      {
        "nome": "Anhumas",
        "uf": "SP",
        "ibge": 3502408,
        "lat": -22.2934,
        "lng": -51.3895
      },
      {
        "nome": "Aparecida",
        "uf": "SP",
        "ibge": 3502507,
        "lat": -22.8495,
        "lng": -45.2325
      },
      {
        "nome": "Aparecida d'Oeste",
        "uf": "SP",
        "ibge": 3502606,
        "lat": -20.4487,
        "lng": -50.8835
      },
      {
        "nome": "Apiaí",
        "uf": "SP",
        "ibge": 3502705,
        "lat": -24.5108,
        "lng": -48.8443
      },
      {
        "nome": "Araçariguama",
        "uf": "SP",
        "ibge": 3502754,
        "lat": -23.4366,
        "lng": -47.0608
      },
      {
        "nome": "Araçatuba",
        "uf": "SP",
        "ibge": 3502804,
        "lat": -21.2076,
        "lng": -50.4401
      },
      {
        "nome": "Araçoiaba da Serra",
        "uf": "SP",
        "ibge": 3502903,
        "lat": -23.5029,
        "lng": -47.6166
      },
      {
        "nome": "Aramina",
        "uf": "SP",
        "ibge": 3503000,
        "lat": -20.0882,
        "lng": -47.7873
      },
      {
        "nome": "Arandu",
        "uf": "SP",
        "ibge": 3503109,
        "lat": -23.1386,
        "lng": -49.0487
      },
      {
        "nome": "Arapeí",
        "uf": "SP",
        "ibge": 3503158,
        "lat": -22.6717,
        "lng": -44.4441
      },
      {
        "nome": "Araraquara",
        "uf": "SP",
        "ibge": 3503208,
        "lat": -21.7845,
        "lng": -48.178
      },
      {
        "nome": "Araras",
        "uf": "SP",
        "ibge": 3503307,
        "lat": -22.3572,
        "lng": -47.3842
      },
      {
        "nome": "Arco-Íris",
        "uf": "SP",
        "ibge": 3503356,
        "lat": -21.7728,
        "lng": -50.466
      },
      {
        "nome": "Arealva",
        "uf": "SP",
        "ibge": 3503406,
        "lat": -22.031,
        "lng": -48.9135
      },
      {
        "nome": "Areias",
        "uf": "SP",
        "ibge": 3503505,
        "lat": -22.5786,
        "lng": -44.6992
      },
      {
        "nome": "Areiópolis",
        "uf": "SP",
        "ibge": 3503604,
        "lat": -22.6672,
        "lng": -48.6681
      },
      {
        "nome": "Ariranha",
        "uf": "SP",
        "ibge": 3503703,
        "lat": -21.1872,
        "lng": -48.7904
      },
      {
        "nome": "Artur Nogueira",
        "uf": "SP",
        "ibge": 3503802,
        "lat": -22.5727,
        "lng": -47.1727
      },
      {
        "nome": "Arujá",
        "uf": "SP",
        "ibge": 3503901,
        "lat": -23.3965,
        "lng": -46.32
      },
      {
        "nome": "Aspásia",
        "uf": "SP",
        "ibge": 3503950,
        "lat": -20.16,
        "lng": -50.728
      },
      {
        "nome": "Assis",
        "uf": "SP",
        "ibge": 3504008,
        "lat": -22.66,
        "lng": -50.4183
      },
      {
        "nome": "Atibaia",
        "uf": "SP",
        "ibge": 3504107,
        "lat": -23.1171,
        "lng": -46.5563
      },
      {
        "nome": "Auriflama",
        "uf": "SP",
        "ibge": 3504206,
        "lat": -20.6836,
        "lng": -50.5572
      },
      {
        "nome": "Avaí",
        "uf": "SP",
        "ibge": 3504305,
        "lat": -22.1514,
        "lng": -49.3356
      },
      {
        "nome": "Avanhandava",
        "uf": "SP",
        "ibge": 3504404,
        "lat": -21.4584,
        "lng": -49.9509
      },
      {
        "nome": "Avaré",
        "uf": "SP",
        "ibge": 3504503,
        "lat": -23.1067,
        "lng": -48.9251
      },
      {
        "nome": "Bady Bassitt",
        "uf": "SP",
        "ibge": 3504602,
        "lat": -20.9197,
        "lng": -49.4385
      },
      {
        "nome": "Balbinos",
        "uf": "SP",
        "ibge": 3504701,
        "lat": -21.8963,
        "lng": -49.3619
      },
      {
        "nome": "Bálsamo",
        "uf": "SP",
        "ibge": 3504800,
        "lat": -20.7348,
        "lng": -49.5865
      },
      {
        "nome": "Bananal",
        "uf": "SP",
        "ibge": 3504909,
        "lat": -22.6819,
        "lng": -44.3281
      },
      {
        "nome": "Barão de Antonina",
        "uf": "SP",
        "ibge": 3505005,
        "lat": -23.6284,
        "lng": -49.5634
      },
      {
        "nome": "Barbosa",
        "uf": "SP",
        "ibge": 3505104,
        "lat": -21.2657,
        "lng": -49.9518
      },
      {
        "nome": "Bariri",
        "uf": "SP",
        "ibge": 3505203,
        "lat": -22.073,
        "lng": -48.7438
      },
      {
        "nome": "Barra Bonita",
        "uf": "SP",
        "ibge": 3505302,
        "lat": -22.4909,
        "lng": -48.5583
      },
      {
        "nome": "Barra do Chapéu",
        "uf": "SP",
        "ibge": 3505351,
        "lat": -24.4722,
        "lng": -49.0238
      },
      {
        "nome": "Barra do Turvo",
        "uf": "SP",
        "ibge": 3505401,
        "lat": -24.759,
        "lng": -48.5013
      },
      {
        "nome": "Barretos",
        "uf": "SP",
        "ibge": 3505500,
        "lat": -20.5531,
        "lng": -48.5698
      },
      {
        "nome": "Barrinha",
        "uf": "SP",
        "ibge": 3505609,
        "lat": -21.1864,
        "lng": -48.1636
      },
      {
        "nome": "Barueri",
        "uf": "SP",
        "ibge": 3505708,
        "lat": -23.5057,
        "lng": -46.879
      },
      {
        "nome": "Bastos",
        "uf": "SP",
        "ibge": 3505807,
        "lat": -21.921,
        "lng": -50.7357
      },
      {
        "nome": "Batatais",
        "uf": "SP",
        "ibge": 3505906,
        "lat": -20.8929,
        "lng": -47.5921
      },
      {
        "nome": "Bauru",
        "uf": "SP",
        "ibge": 3506003,
        "lat": -22.3246,
        "lng": -49.0871
      },
      {
        "nome": "Bebedouro",
        "uf": "SP",
        "ibge": 3506102,
        "lat": -20.9491,
        "lng": -48.4791
      },
      {
        "nome": "Bento de Abreu",
        "uf": "SP",
        "ibge": 3506201,
        "lat": -21.2686,
        "lng": -50.814
      },
      {
        "nome": "Bernardino de Campos",
        "uf": "SP",
        "ibge": 3506300,
        "lat": -23.0164,
        "lng": -49.4679
      },
      {
        "nome": "Bertioga",
        "uf": "SP",
        "ibge": 3506359,
        "lat": -23.8486,
        "lng": -46.1396
      },
      {
        "nome": "Bilac",
        "uf": "SP",
        "ibge": 3506409,
        "lat": -21.404,
        "lng": -50.4746
      },
      {
        "nome": "Birigui",
        "uf": "SP",
        "ibge": 3506508,
        "lat": -21.291,
        "lng": -50.3432
      },
      {
        "nome": "Biritiba-Mirim",
        "uf": "SP",
        "ibge": 3506607,
        "lat": -23.5698,
        "lng": -46.0407
      },
      {
        "nome": "Boa Esperança do Sul",
        "uf": "SP",
        "ibge": 3506706,
        "lat": -21.9918,
        "lng": -48.3906
      },
      {
        "nome": "Bocaina",
        "uf": "SP",
        "ibge": 3506805,
        "lat": -22.1365,
        "lng": -48.523
      },
      {
        "nome": "Bofete",
        "uf": "SP",
        "ibge": 3506904,
        "lat": -23.1055,
        "lng": -48.2582
      },
      {
        "nome": "Boituva",
        "uf": "SP",
        "ibge": 3507001,
        "lat": -23.2855,
        "lng": -47.6786
      },
      {
        "nome": "Bom Jesus dos Perdões",
        "uf": "SP",
        "ibge": 3507100,
        "lat": -23.1356,
        "lng": -46.4675
      },
      {
        "nome": "Bom Sucesso de Itararé",
        "uf": "SP",
        "ibge": 3507159,
        "lat": -24.3155,
        "lng": -49.1451
      },
      {
        "nome": "Borá",
        "uf": "SP",
        "ibge": 3507209,
        "lat": -22.2696,
        "lng": -50.5409
      },
      {
        "nome": "Boracéia",
        "uf": "SP",
        "ibge": 3507308,
        "lat": -22.1926,
        "lng": -48.7808
      },
      {
        "nome": "Borborema",
        "uf": "SP",
        "ibge": 3507407,
        "lat": -21.6214,
        "lng": -49.0741
      },
      {
        "nome": "Borebi",
        "uf": "SP",
        "ibge": 3507456,
        "lat": -22.5728,
        "lng": -48.9707
      },
      {
        "nome": "Botucatu",
        "uf": "SP",
        "ibge": 3507506,
        "lat": -22.8837,
        "lng": -48.4437
      },
      {
        "nome": "Bragança Paulista",
        "uf": "SP",
        "ibge": 3507605,
        "lat": -22.9527,
        "lng": -46.5419
      },
      {
        "nome": "Braúna",
        "uf": "SP",
        "ibge": 3507704,
        "lat": -21.499,
        "lng": -50.3175
      },
      {
        "nome": "Brejo Alegre",
        "uf": "SP",
        "ibge": 3507753,
        "lat": -21.1651,
        "lng": -50.1861
      },
      {
        "nome": "Brodowski",
        "uf": "SP",
        "ibge": 3507803,
        "lat": -20.9845,
        "lng": -47.6572
      },
      {
        "nome": "Brotas",
        "uf": "SP",
        "ibge": 3507902,
        "lat": -22.2795,
        "lng": -48.1251
      },
      {
        "nome": "Buri",
        "uf": "SP",
        "ibge": 3508009,
        "lat": -23.7977,
        "lng": -48.5958
      },
      {
        "nome": "Buritama",
        "uf": "SP",
        "ibge": 3508108,
        "lat": -21.0661,
        "lng": -50.1475
      },
      {
        "nome": "Buritizal",
        "uf": "SP",
        "ibge": 3508207,
        "lat": -20.1911,
        "lng": -47.7096
      },
      {
        "nome": "Cabrália Paulista",
        "uf": "SP",
        "ibge": 3508306,
        "lat": -22.4576,
        "lng": -49.3393
      },
      {
        "nome": "Cabreúva",
        "uf": "SP",
        "ibge": 3508405,
        "lat": -23.3053,
        "lng": -47.1362
      },
      {
        "nome": "Caçapava",
        "uf": "SP",
        "ibge": 3508504,
        "lat": -23.0992,
        "lng": -45.7076
      },
      {
        "nome": "Cachoeira Paulista",
        "uf": "SP",
        "ibge": 3508603,
        "lat": -22.6665,
        "lng": -45.0154
      },
      {
        "nome": "Caconde",
        "uf": "SP",
        "ibge": 3508702,
        "lat": -21.528,
        "lng": -46.6437
      },
      {
        "nome": "Cafelândia",
        "uf": "SP",
        "ibge": 3508801,
        "lat": -21.8031,
        "lng": -49.6092
      },
      {
        "nome": "Caiabu",
        "uf": "SP",
        "ibge": 3508900,
        "lat": -22.0127,
        "lng": -51.2394
      },
      {
        "nome": "Caieiras",
        "uf": "SP",
        "ibge": 3509007,
        "lat": -23.3607,
        "lng": -46.7397
      },
      {
        "nome": "Caiuá",
        "uf": "SP",
        "ibge": 3509106,
        "lat": -21.8322,
        "lng": -51.9969
      },
      {
        "nome": "Cajamar",
        "uf": "SP",
        "ibge": 3509205,
        "lat": -23.355,
        "lng": -46.8781
      },
      {
        "nome": "Cajati",
        "uf": "SP",
        "ibge": 3509254,
        "lat": -24.7324,
        "lng": -48.1223
      },
      {
        "nome": "Cajobi",
        "uf": "SP",
        "ibge": 3509304,
        "lat": -20.8773,
        "lng": -48.8063
      },
      {
        "nome": "Cajuru",
        "uf": "SP",
        "ibge": 3509403,
        "lat": -21.2749,
        "lng": -47.303
      },
      {
        "nome": "Campina do Monte Alegre",
        "uf": "SP",
        "ibge": 3509452,
        "lat": -23.5895,
        "lng": -48.4758
      },
      {
        "nome": "Campinas",
        "uf": "SP",
        "ibge": 3509502,
        "lat": -22.9053,
        "lng": -47.0659
      },
      {
        "nome": "Campo Limpo Paulista",
        "uf": "SP",
        "ibge": 3509601,
        "lat": -23.2078,
        "lng": -46.7889
      },
      {
        "nome": "Campos do Jordão",
        "uf": "SP",
        "ibge": 3509700,
        "lat": -22.7296,
        "lng": -45.5833
      },
      {
        "nome": "Campos Novos Paulista",
        "uf": "SP",
        "ibge": 3509809,
        "lat": -22.602,
        "lng": -49.9987
      },
      {
        "nome": "Cananéia",
        "uf": "SP",
        "ibge": 3509908,
        "lat": -25.0144,
        "lng": -47.9341
      },
      {
        "nome": "Canas",
        "uf": "SP",
        "ibge": 3509957,
        "lat": -22.7003,
        "lng": -45.0521
      },
      {
        "nome": "Cândido Mota",
        "uf": "SP",
        "ibge": 3510005,
        "lat": -22.7471,
        "lng": -50.3873
      },
      {
        "nome": "Cândido Rodrigues",
        "uf": "SP",
        "ibge": 3510104,
        "lat": -21.3275,
        "lng": -48.6327
      },
      {
        "nome": "Canitar",
        "uf": "SP",
        "ibge": 3510153,
        "lat": -23.004,
        "lng": -49.7839
      },
      {
        "nome": "Capão Bonito",
        "uf": "SP",
        "ibge": 3510203,
        "lat": -24.0113,
        "lng": -48.3482
      },
      {
        "nome": "Capela do Alto",
        "uf": "SP",
        "ibge": 3510302,
        "lat": -23.4685,
        "lng": -47.7388
      },
      {
        "nome": "Capivari",
        "uf": "SP",
        "ibge": 3510401,
        "lat": -22.9951,
        "lng": -47.5071
      },
      {
        "nome": "Caraguatatuba",
        "uf": "SP",
        "ibge": 3510500,
        "lat": -23.6125,
        "lng": -45.4125
      },
      {
        "nome": "Carapicuíba",
        "uf": "SP",
        "ibge": 3510609,
        "lat": -23.5235,
        "lng": -46.8407
      },
      {
        "nome": "Cardoso",
        "uf": "SP",
        "ibge": 3510708,
        "lat": -20.08,
        "lng": -49.9183
      },
      {
        "nome": "Casa Branca",
        "uf": "SP",
        "ibge": 3510807,
        "lat": -21.7708,
        "lng": -47.0852
      },
      {
        "nome": "Cássia dos Coqueiros",
        "uf": "SP",
        "ibge": 3510906,
        "lat": -21.2801,
        "lng": -47.1643
      },
      {
        "nome": "Castilho",
        "uf": "SP",
        "ibge": 3511003,
        "lat": -20.8689,
        "lng": -51.4884
      },
      {
        "nome": "Catanduva",
        "uf": "SP",
        "ibge": 3511102,
        "lat": -21.1314,
        "lng": -48.977
      },
      {
        "nome": "Catiguá",
        "uf": "SP",
        "ibge": 3511201,
        "lat": -21.0519,
        "lng": -49.0616
      },
      {
        "nome": "Cedral",
        "uf": "SP",
        "ibge": 3511300,
        "lat": -20.9009,
        "lng": -49.2664
      },
      {
        "nome": "Cerqueira César",
        "uf": "SP",
        "ibge": 3511409,
        "lat": -23.038,
        "lng": -49.1655
      },
      {
        "nome": "Cerquilho",
        "uf": "SP",
        "ibge": 3511508,
        "lat": -23.1665,
        "lng": -47.7459
      },
      {
        "nome": "Cesário Lange",
        "uf": "SP",
        "ibge": 3511607,
        "lat": -23.226,
        "lng": -47.9545
      },
      {
        "nome": "Charqueada",
        "uf": "SP",
        "ibge": 3511706,
        "lat": -22.5096,
        "lng": -47.7755
      },
      {
        "nome": "Chavantes",
        "uf": "SP",
        "ibge": 3557204,
        "lat": -23.0366,
        "lng": -49.7096
      },
      {
        "nome": "Clementina",
        "uf": "SP",
        "ibge": 3511904,
        "lat": -21.5604,
        "lng": -50.4525
      },
      {
        "nome": "Colina",
        "uf": "SP",
        "ibge": 3512001,
        "lat": -20.7114,
        "lng": -48.5387
      },
      {
        "nome": "Colômbia",
        "uf": "SP",
        "ibge": 3512100,
        "lat": -20.1768,
        "lng": -48.6865
      },
      {
        "nome": "Conchal",
        "uf": "SP",
        "ibge": 3512209,
        "lat": -22.3375,
        "lng": -47.1729
      },
      {
        "nome": "Conchas",
        "uf": "SP",
        "ibge": 3512308,
        "lat": -23.0154,
        "lng": -48.0134
      },
      {
        "nome": "Cordeirópolis",
        "uf": "SP",
        "ibge": 3512407,
        "lat": -22.4778,
        "lng": -47.4519
      },
      {
        "nome": "Coroados",
        "uf": "SP",
        "ibge": 3512506,
        "lat": -21.3521,
        "lng": -50.2859
      },
      {
        "nome": "Coronel Macedo",
        "uf": "SP",
        "ibge": 3512605,
        "lat": -23.6261,
        "lng": -49.31
      },
      {
        "nome": "Corumbataí",
        "uf": "SP",
        "ibge": 3512704,
        "lat": -22.2213,
        "lng": -47.6215
      },
      {
        "nome": "Cosmópolis",
        "uf": "SP",
        "ibge": 3512803,
        "lat": -22.6419,
        "lng": -47.1926
      },
      {
        "nome": "Cosmorama",
        "uf": "SP",
        "ibge": 3512902,
        "lat": -20.4755,
        "lng": -49.7827
      },
      {
        "nome": "Cotia",
        "uf": "SP",
        "ibge": 3513009,
        "lat": -23.6022,
        "lng": -46.919
      },
      {
        "nome": "Cravinhos",
        "uf": "SP",
        "ibge": 3513108,
        "lat": -21.338,
        "lng": -47.7324
      },
      {
        "nome": "Cristais Paulista",
        "uf": "SP",
        "ibge": 3513207,
        "lat": -20.4036,
        "lng": -47.4209
      },
      {
        "nome": "Cruzália",
        "uf": "SP",
        "ibge": 3513306,
        "lat": -22.7373,
        "lng": -50.7909
      },
      {
        "nome": "Cruzeiro",
        "uf": "SP",
        "ibge": 3513405,
        "lat": -22.5728,
        "lng": -44.969
      },
      {
        "nome": "Cubatão",
        "uf": "SP",
        "ibge": 3513504,
        "lat": -23.8911,
        "lng": -46.424
      },
      {
        "nome": "Cunha",
        "uf": "SP",
        "ibge": 3513603,
        "lat": -23.0731,
        "lng": -44.9576
      },
      {
        "nome": "Descalvado",
        "uf": "SP",
        "ibge": 3513702,
        "lat": -21.9002,
        "lng": -47.6181
      },
      {
        "nome": "Diadema",
        "uf": "SP",
        "ibge": 3513801,
        "lat": -23.6813,
        "lng": -46.6205
      },
      {
        "nome": "Dirce Reis",
        "uf": "SP",
        "ibge": 3513850,
        "lat": -20.4642,
        "lng": -50.6073
      },
      {
        "nome": "Divinolândia",
        "uf": "SP",
        "ibge": 3513900,
        "lat": -21.6637,
        "lng": -46.7361
      },
      {
        "nome": "Dobrada",
        "uf": "SP",
        "ibge": 3514007,
        "lat": -21.5155,
        "lng": -48.3935
      },
      {
        "nome": "Dois Córregos",
        "uf": "SP",
        "ibge": 3514106,
        "lat": -22.3673,
        "lng": -48.3819
      },
      {
        "nome": "Dolcinópolis",
        "uf": "SP",
        "ibge": 3514205,
        "lat": -20.124,
        "lng": -50.5149
      },
      {
        "nome": "Dourado",
        "uf": "SP",
        "ibge": 3514304,
        "lat": -22.1044,
        "lng": -48.3178
      },
      {
        "nome": "Dracena",
        "uf": "SP",
        "ibge": 3514403,
        "lat": -21.4843,
        "lng": -51.535
      },
      {
        "nome": "Duartina",
        "uf": "SP",
        "ibge": 3514502,
        "lat": -22.4146,
        "lng": -49.4084
      },
      {
        "nome": "Dumont",
        "uf": "SP",
        "ibge": 3514601,
        "lat": -21.2324,
        "lng": -47.9756
      },
      {
        "nome": "Echaporã",
        "uf": "SP",
        "ibge": 3514700,
        "lat": -22.4326,
        "lng": -50.2038
      },
      {
        "nome": "Eldorado",
        "uf": "SP",
        "ibge": 3514809,
        "lat": -24.5281,
        "lng": -48.1141
      },
      {
        "nome": "Elias Fausto",
        "uf": "SP",
        "ibge": 3514908,
        "lat": -23.0428,
        "lng": -47.3682
      },
      {
        "nome": "Elisiário",
        "uf": "SP",
        "ibge": 3514924,
        "lat": -21.1678,
        "lng": -49.1146
      },
      {
        "nome": "Embaúba",
        "uf": "SP",
        "ibge": 3514957,
        "lat": -20.9796,
        "lng": -48.8325
      },
      {
        "nome": "Embu das Artes",
        "uf": "SP",
        "ibge": 3515004,
        "lat": -23.6437,
        "lng": -46.8579
      },
      {
        "nome": "Embu-Guaçu",
        "uf": "SP",
        "ibge": 3515103,
        "lat": -23.8297,
        "lng": -46.8136
      },
      {
        "nome": "Emilianópolis",
        "uf": "SP",
        "ibge": 3515129,
        "lat": -21.8314,
        "lng": -51.4832
      },
      {
        "nome": "Engenheiro Coelho",
        "uf": "SP",
        "ibge": 3515152,
        "lat": -22.4836,
        "lng": -47.211
      },
      {
        "nome": "Espírito Santo do Pinhal",
        "uf": "SP",
        "ibge": 3515186,
        "lat": -22.1909,
        "lng": -46.7477
      },
      {
        "nome": "Espírito Santo do Turvo",
        "uf": "SP",
        "ibge": 3515194,
        "lat": -22.6925,
        "lng": -49.4341
      },
      {
        "nome": "Estiva Gerbi",
        "uf": "SP",
        "ibge": 3557303,
        "lat": -22.2713,
        "lng": -46.9481
      },
      {
        "nome": "Estrela d'Oeste",
        "uf": "SP",
        "ibge": 3515202,
        "lat": -20.2875,
        "lng": -50.4049
      },
      {
        "nome": "Estrela do Norte",
        "uf": "SP",
        "ibge": 3515301,
        "lat": -22.4859,
        "lng": -51.6632
      },
      {
        "nome": "Euclides da Cunha Paulista",
        "uf": "SP",
        "ibge": 3515350,
        "lat": -22.5545,
        "lng": -52.5928
      },
      {
        "nome": "Fartura",
        "uf": "SP",
        "ibge": 3515400,
        "lat": -23.3916,
        "lng": -49.5124
      },
      {
        "nome": "Fernando Prestes",
        "uf": "SP",
        "ibge": 3515608,
        "lat": -21.2661,
        "lng": -48.6874
      },
      {
        "nome": "Fernandópolis",
        "uf": "SP",
        "ibge": 3515509,
        "lat": -20.2806,
        "lng": -50.2471
      },
      {
        "nome": "Fernão",
        "uf": "SP",
        "ibge": 3515657,
        "lat": -22.3607,
        "lng": -49.5187
      },
      {
        "nome": "Ferraz de Vasconcelos",
        "uf": "SP",
        "ibge": 3515707,
        "lat": -23.5411,
        "lng": -46.371
      },
      {
        "nome": "Flora Rica",
        "uf": "SP",
        "ibge": 3515806,
        "lat": -21.6727,
        "lng": -51.3821
      },
      {
        "nome": "Floreal",
        "uf": "SP",
        "ibge": 3515905,
        "lat": -20.6752,
        "lng": -50.1513
      },
      {
        "nome": "Flórida Paulista",
        "uf": "SP",
        "ibge": 3516002,
        "lat": -21.6127,
        "lng": -51.1724
      },
      {
        "nome": "Florínia",
        "uf": "SP",
        "ibge": 3516101,
        "lat": -22.868,
        "lng": -50.6814
      },
      {
        "nome": "Franca",
        "uf": "SP",
        "ibge": 3516200,
        "lat": -20.5352,
        "lng": -47.4039
      },
      {
        "nome": "Francisco Morato",
        "uf": "SP",
        "ibge": 3516309,
        "lat": -23.2792,
        "lng": -46.7448
      },
      {
        "nome": "Franco da Rocha",
        "uf": "SP",
        "ibge": 3516408,
        "lat": -23.3229,
        "lng": -46.729
      },
      {
        "nome": "Gabriel Monteiro",
        "uf": "SP",
        "ibge": 3516507,
        "lat": -21.5294,
        "lng": -50.5573
      },
      {
        "nome": "Gália",
        "uf": "SP",
        "ibge": 3516606,
        "lat": -22.2918,
        "lng": -49.5504
      },
      {
        "nome": "Garça",
        "uf": "SP",
        "ibge": 3516705,
        "lat": -22.2125,
        "lng": -49.6546
      },
      {
        "nome": "Gastão Vidigal",
        "uf": "SP",
        "ibge": 3516804,
        "lat": -20.7948,
        "lng": -50.1912
      },
      {
        "nome": "Gavião Peixoto",
        "uf": "SP",
        "ibge": 3516853,
        "lat": -21.8367,
        "lng": -48.4957
      },
      {
        "nome": "General Salgado",
        "uf": "SP",
        "ibge": 3516903,
        "lat": -20.6485,
        "lng": -50.364
      },
      {
        "nome": "Getulina",
        "uf": "SP",
        "ibge": 3517000,
        "lat": -21.7961,
        "lng": -49.9312
      },
      {
        "nome": "Glicério",
        "uf": "SP",
        "ibge": 3517109,
        "lat": -21.3812,
        "lng": -50.2123
      },
      {
        "nome": "Guaiçara",
        "uf": "SP",
        "ibge": 3517208,
        "lat": -21.6195,
        "lng": -49.8013
      },
      {
        "nome": "Guaimbê",
        "uf": "SP",
        "ibge": 3517307,
        "lat": -21.9091,
        "lng": -49.8986
      },
      {
        "nome": "Guaíra",
        "uf": "SP",
        "ibge": 3517406,
        "lat": -20.3196,
        "lng": -48.312
      },
      {
        "nome": "Guapiaçu",
        "uf": "SP",
        "ibge": 3517505,
        "lat": -20.7959,
        "lng": -49.2172
      },
      {
        "nome": "Guapiara",
        "uf": "SP",
        "ibge": 3517604,
        "lat": -24.1892,
        "lng": -48.5295
      },
      {
        "nome": "Guará",
        "uf": "SP",
        "ibge": 3517703,
        "lat": -20.4302,
        "lng": -47.8236
      },
      {
        "nome": "Guaraçaí",
        "uf": "SP",
        "ibge": 3517802,
        "lat": -21.0292,
        "lng": -51.2119
      },
      {
        "nome": "Guaraci",
        "uf": "SP",
        "ibge": 3517901,
        "lat": -20.4977,
        "lng": -48.9391
      },
      {
        "nome": "Guarani d'Oeste",
        "uf": "SP",
        "ibge": 3518008,
        "lat": -20.0746,
        "lng": -50.3411
      },
      {
        "nome": "Guarantã",
        "uf": "SP",
        "ibge": 3518107,
        "lat": -21.8942,
        "lng": -49.5914
      },
      {
        "nome": "Guararapes",
        "uf": "SP",
        "ibge": 3518206,
        "lat": -21.2544,
        "lng": -50.6453
      },
      {
        "nome": "Guararema",
        "uf": "SP",
        "ibge": 3518305,
        "lat": -23.4112,
        "lng": -46.0369
      },
      {
        "nome": "Guaratinguetá",
        "uf": "SP",
        "ibge": 3518404,
        "lat": -22.8075,
        "lng": -45.1938
      },
      {
        "nome": "Guareí",
        "uf": "SP",
        "ibge": 3518503,
        "lat": -23.3714,
        "lng": -48.1837
      },
      {
        "nome": "Guariba",
        "uf": "SP",
        "ibge": 3518602,
        "lat": -21.3594,
        "lng": -48.2316
      },
      {
        "nome": "Guarujá",
        "uf": "SP",
        "ibge": 3518701,
        "lat": -23.9888,
        "lng": -46.258
      },
      {
        "nome": "Guarulhos",
        "uf": "SP",
        "ibge": 3518800,
        "lat": -23.4538,
        "lng": -46.5333
      },
      {
        "nome": "Guatapará",
        "uf": "SP",
        "ibge": 3518859,
        "lat": -21.4944,
        "lng": -48.0356
      },
      {
        "nome": "Guzolândia",
        "uf": "SP",
        "ibge": 3518909,
        "lat": -20.6467,
        "lng": -50.6645
      },
      {
        "nome": "Herculândia",
        "uf": "SP",
        "ibge": 3519006,
        "lat": -22.0038,
        "lng": -50.3907
      },
      {
        "nome": "Holambra",
        "uf": "SP",
        "ibge": 3519055,
        "lat": -22.6405,
        "lng": -47.0487
      },
      {
        "nome": "Hortolândia",
        "uf": "SP",
        "ibge": 3519071,
        "lat": -22.8529,
        "lng": -47.2143
      },
      {
        "nome": "Iacanga",
        "uf": "SP",
        "ibge": 3519105,
        "lat": -21.8896,
        "lng": -49.031
      },
      {
        "nome": "Iacri",
        "uf": "SP",
        "ibge": 3519204,
        "lat": -21.8572,
        "lng": -50.6932
      },
      {
        "nome": "Iaras",
        "uf": "SP",
        "ibge": 3519253,
        "lat": -22.8682,
        "lng": -49.1634
      },
      {
        "nome": "Ibaté",
        "uf": "SP",
        "ibge": 3519303,
        "lat": -21.9584,
        "lng": -47.9882
      },
      {
        "nome": "Ibirá",
        "uf": "SP",
        "ibge": 3519402,
        "lat": -21.083,
        "lng": -49.2448
      },
      {
        "nome": "Ibirarema",
        "uf": "SP",
        "ibge": 3519501,
        "lat": -22.8185,
        "lng": -50.0739
      },
      {
        "nome": "Ibitinga",
        "uf": "SP",
        "ibge": 3519600,
        "lat": -21.7562,
        "lng": -48.8319
      },
      {
        "nome": "Ibiúna",
        "uf": "SP",
        "ibge": 3519709,
        "lat": -23.6596,
        "lng": -47.223
      },
      {
        "nome": "Icém",
        "uf": "SP",
        "ibge": 3519808,
        "lat": -20.3391,
        "lng": -49.1915
      },
      {
        "nome": "Iepê",
        "uf": "SP",
        "ibge": 3519907,
        "lat": -22.6602,
        "lng": -51.0779
      },
      {
        "nome": "Igaraçu do Tietê",
        "uf": "SP",
        "ibge": 3520004,
        "lat": -22.509,
        "lng": -48.5597
      },
      {
        "nome": "Igarapava",
        "uf": "SP",
        "ibge": 3520103,
        "lat": -20.0407,
        "lng": -47.7466
      },
      {
        "nome": "Igaratá",
        "uf": "SP",
        "ibge": 3520202,
        "lat": -23.2037,
        "lng": -46.157
      },
      {
        "nome": "Iguape",
        "uf": "SP",
        "ibge": 3520301,
        "lat": -24.699,
        "lng": -47.5537
      },
      {
        "nome": "Ilha Comprida",
        "uf": "SP",
        "ibge": 3520426,
        "lat": -24.7307,
        "lng": -47.5383
      },
      {
        "nome": "Ilha Solteira",
        "uf": "SP",
        "ibge": 3520442,
        "lat": -20.4326,
        "lng": -51.3426
      },
      {
        "nome": "Ilhabela",
        "uf": "SP",
        "ibge": 3520400,
        "lat": -23.7785,
        "lng": -45.3552
      },
      {
        "nome": "Indaiatuba",
        "uf": "SP",
        "ibge": 3520509,
        "lat": -23.0816,
        "lng": -47.2101
      },
      {
        "nome": "Indiana",
        "uf": "SP",
        "ibge": 3520608,
        "lat": -22.1738,
        "lng": -51.2555
      },
      {
        "nome": "Indiaporã",
        "uf": "SP",
        "ibge": 3520707,
        "lat": -19.979,
        "lng": -50.2909
      },
      {
        "nome": "Inúbia Paulista",
        "uf": "SP",
        "ibge": 3520806,
        "lat": -21.7695,
        "lng": -50.9633
      },
      {
        "nome": "Ipaussu",
        "uf": "SP",
        "ibge": 3520905,
        "lat": -23.0575,
        "lng": -49.6279
      },
      {
        "nome": "Iperó",
        "uf": "SP",
        "ibge": 3521002,
        "lat": -23.3513,
        "lng": -47.6927
      },
      {
        "nome": "Ipeúna",
        "uf": "SP",
        "ibge": 3521101,
        "lat": -22.4355,
        "lng": -47.7151
      },
      {
        "nome": "Ipiguá",
        "uf": "SP",
        "ibge": 3521150,
        "lat": -20.6557,
        "lng": -49.3842
      },
      {
        "nome": "Iporanga",
        "uf": "SP",
        "ibge": 3521200,
        "lat": -24.5847,
        "lng": -48.5971
      },
      {
        "nome": "Ipuã",
        "uf": "SP",
        "ibge": 3521309,
        "lat": -20.4438,
        "lng": -48.0129
      },
      {
        "nome": "Iracemápolis",
        "uf": "SP",
        "ibge": 3521408,
        "lat": -22.5832,
        "lng": -47.523
      },
      {
        "nome": "Irapuã",
        "uf": "SP",
        "ibge": 3521507,
        "lat": -21.2768,
        "lng": -49.4164
      },
      {
        "nome": "Irapuru",
        "uf": "SP",
        "ibge": 3521606,
        "lat": -21.5684,
        "lng": -51.3472
      },
      {
        "nome": "Itaberá",
        "uf": "SP",
        "ibge": 3521705,
        "lat": -23.8638,
        "lng": -49.14
      },
      {
        "nome": "Itaí",
        "uf": "SP",
        "ibge": 3521804,
        "lat": -23.4213,
        "lng": -49.092
      },
      {
        "nome": "Itajobi",
        "uf": "SP",
        "ibge": 3521903,
        "lat": -21.3123,
        "lng": -49.0629
      },
      {
        "nome": "Itaju",
        "uf": "SP",
        "ibge": 3522000,
        "lat": -21.9857,
        "lng": -48.8116
      },
      {
        "nome": "Itanhaém",
        "uf": "SP",
        "ibge": 3522109,
        "lat": -24.1736,
        "lng": -46.788
      },
      {
        "nome": "Itaóca",
        "uf": "SP",
        "ibge": 3522158,
        "lat": -24.6393,
        "lng": -48.8413
      },
      {
        "nome": "Itapecerica da Serra",
        "uf": "SP",
        "ibge": 3522208,
        "lat": -23.7161,
        "lng": -46.8572
      },
      {
        "nome": "Itapetininga",
        "uf": "SP",
        "ibge": 3522307,
        "lat": -23.5886,
        "lng": -48.0483
      },
      {
        "nome": "Itapeva",
        "uf": "SP",
        "ibge": 3522406,
        "lat": -23.9788,
        "lng": -48.8764
      },
      {
        "nome": "Itapevi",
        "uf": "SP",
        "ibge": 3522505,
        "lat": -23.5488,
        "lng": -46.9327
      },
      {
        "nome": "Itapira",
        "uf": "SP",
        "ibge": 3522604,
        "lat": -22.4357,
        "lng": -46.8224
      },
      {
        "nome": "Itapirapuã Paulista",
        "uf": "SP",
        "ibge": 3522653,
        "lat": -24.572,
        "lng": -49.1661
      },
      {
        "nome": "Itápolis",
        "uf": "SP",
        "ibge": 3522703,
        "lat": -21.5942,
        "lng": -48.8149
      },
      {
        "nome": "Itaporanga",
        "uf": "SP",
        "ibge": 3522802,
        "lat": -23.7043,
        "lng": -49.4819
      },
      {
        "nome": "Itapuí",
        "uf": "SP",
        "ibge": 3522901,
        "lat": -22.2324,
        "lng": -48.7197
      },
      {
        "nome": "Itapura",
        "uf": "SP",
        "ibge": 3523008,
        "lat": -20.6419,
        "lng": -51.5063
      },
      {
        "nome": "Itaquaquecetuba",
        "uf": "SP",
        "ibge": 3523107,
        "lat": -23.4835,
        "lng": -46.3457
      },
      {
        "nome": "Itararé",
        "uf": "SP",
        "ibge": 3523206,
        "lat": -24.1085,
        "lng": -49.3352
      },
      {
        "nome": "Itariri",
        "uf": "SP",
        "ibge": 3523305,
        "lat": -24.2834,
        "lng": -47.1736
      },
      {
        "nome": "Itatiba",
        "uf": "SP",
        "ibge": 3523404,
        "lat": -23.0035,
        "lng": -46.8464
      },
      {
        "nome": "Itatinga",
        "uf": "SP",
        "ibge": 3523503,
        "lat": -23.1047,
        "lng": -48.6157
      },
      {
        "nome": "Itirapina",
        "uf": "SP",
        "ibge": 3523602,
        "lat": -22.2562,
        "lng": -47.8166
      },
      {
        "nome": "Itirapuã",
        "uf": "SP",
        "ibge": 3523701,
        "lat": -20.6416,
        "lng": -47.2194
      },
      {
        "nome": "Itobi",
        "uf": "SP",
        "ibge": 3523800,
        "lat": -21.7309,
        "lng": -46.9743
      },
      {
        "nome": "Itu",
        "uf": "SP",
        "ibge": 3523909,
        "lat": -23.2544,
        "lng": -47.2927
      },
      {
        "nome": "Itupeva",
        "uf": "SP",
        "ibge": 3524006,
        "lat": -23.1526,
        "lng": -47.0593
      },
      {
        "nome": "Ituverava",
        "uf": "SP",
        "ibge": 3524105,
        "lat": -20.3355,
        "lng": -47.7902
      },
      {
        "nome": "Jaborandi",
        "uf": "SP",
        "ibge": 3524204,
        "lat": -20.6884,
        "lng": -48.4112
      },
      {
        "nome": "Jaboticabal",
        "uf": "SP",
        "ibge": 3524303,
        "lat": -21.252,
        "lng": -48.3252
      },
      {
        "nome": "Jacareí",
        "uf": "SP",
        "ibge": 3524402,
        "lat": -23.2983,
        "lng": -45.9658
      },
      {
        "nome": "Jaci",
        "uf": "SP",
        "ibge": 3524501,
        "lat": -20.8805,
        "lng": -49.5797
      },
      {
        "nome": "Jacupiranga",
        "uf": "SP",
        "ibge": 3524600,
        "lat": -24.6963,
        "lng": -48.0064
      },
      {
        "nome": "Jaguariúna",
        "uf": "SP",
        "ibge": 3524709,
        "lat": -22.7037,
        "lng": -46.9851
      },
      {
        "nome": "Jales",
        "uf": "SP",
        "ibge": 3524808,
        "lat": -20.2672,
        "lng": -50.5494
      },
      {
        "nome": "Jambeiro",
        "uf": "SP",
        "ibge": 3524907,
        "lat": -23.2522,
        "lng": -45.6942
      },
      {
        "nome": "Jandira",
        "uf": "SP",
        "ibge": 3525003,
        "lat": -23.5275,
        "lng": -46.9023
      },
      {
        "nome": "Jardinópolis",
        "uf": "SP",
        "ibge": 3525102,
        "lat": -21.0176,
        "lng": -47.7606
      },
      {
        "nome": "Jarinu",
        "uf": "SP",
        "ibge": 3525201,
        "lat": -23.1039,
        "lng": -46.728
      },
      {
        "nome": "Jaú",
        "uf": "SP",
        "ibge": 3525300,
        "lat": -22.2936,
        "lng": -48.5592
      },
      {
        "nome": "Jeriquara",
        "uf": "SP",
        "ibge": 3525409,
        "lat": -20.3116,
        "lng": -47.5918
      },
      {
        "nome": "Joanópolis",
        "uf": "SP",
        "ibge": 3525508,
        "lat": -22.927,
        "lng": -46.2741
      },
      {
        "nome": "João Ramalho",
        "uf": "SP",
        "ibge": 3525607,
        "lat": -22.2473,
        "lng": -50.7694
      },
      {
        "nome": "José Bonifácio",
        "uf": "SP",
        "ibge": 3525706,
        "lat": -21.0551,
        "lng": -49.6892
      },
      {
        "nome": "Júlio Mesquita",
        "uf": "SP",
        "ibge": 3525805,
        "lat": -22.0112,
        "lng": -49.7873
      },
      {
        "nome": "Jumirim",
        "uf": "SP",
        "ibge": 3525854,
        "lat": -23.0884,
        "lng": -47.7868
      },
      {
        "nome": "Jundiaí",
        "uf": "SP",
        "ibge": 3525904,
        "lat": -23.1852,
        "lng": -46.8974
      },
      {
        "nome": "Junqueirópolis",
        "uf": "SP",
        "ibge": 3526001,
        "lat": -21.5103,
        "lng": -51.4342
      },
      {
        "nome": "Juquiá",
        "uf": "SP",
        "ibge": 3526100,
        "lat": -24.3101,
        "lng": -47.6426
      },
      {
        "nome": "Juquitiba",
        "uf": "SP",
        "ibge": 3526209,
        "lat": -23.9244,
        "lng": -47.0653
      },
      {
        "nome": "Lagoinha",
        "uf": "SP",
        "ibge": 3526308,
        "lat": -23.0846,
        "lng": -45.1944
      },
      {
        "nome": "Laranjal Paulista",
        "uf": "SP",
        "ibge": 3526407,
        "lat": -23.0506,
        "lng": -47.8375
      },
      {
        "nome": "Lavínia",
        "uf": "SP",
        "ibge": 3526506,
        "lat": -21.1639,
        "lng": -51.0412
      },
      {
        "nome": "Lavrinhas",
        "uf": "SP",
        "ibge": 3526605,
        "lat": -22.57,
        "lng": -44.9024
      },
      {
        "nome": "Leme",
        "uf": "SP",
        "ibge": 3526704,
        "lat": -22.1809,
        "lng": -47.3841
      },
      {
        "nome": "Lençóis Paulista",
        "uf": "SP",
        "ibge": 3526803,
        "lat": -22.6027,
        "lng": -48.8037
      },
      {
        "nome": "Limeira",
        "uf": "SP",
        "ibge": 3526902,
        "lat": -22.566,
        "lng": -47.397
      },
      {
        "nome": "Lindóia",
        "uf": "SP",
        "ibge": 3527009,
        "lat": -22.5226,
        "lng": -46.65
      },
      {
        "nome": "Lins",
        "uf": "SP",
        "ibge": 3527108,
        "lat": -21.6718,
        "lng": -49.7526
      },
      {
        "nome": "Lorena",
        "uf": "SP",
        "ibge": 3527207,
        "lat": -22.7334,
        "lng": -45.1197
      },
      {
        "nome": "Lourdes",
        "uf": "SP",
        "ibge": 3527256,
        "lat": -20.966,
        "lng": -50.2263
      },
      {
        "nome": "Louveira",
        "uf": "SP",
        "ibge": 3527306,
        "lat": -23.0856,
        "lng": -46.9484
      },
      {
        "nome": "Lucélia",
        "uf": "SP",
        "ibge": 3527405,
        "lat": -21.7182,
        "lng": -51.0215
      },
      {
        "nome": "Lucianópolis",
        "uf": "SP",
        "ibge": 3527504,
        "lat": -22.4294,
        "lng": -49.522
      },
      {
        "nome": "Luís Antônio",
        "uf": "SP",
        "ibge": 3527603,
        "lat": -21.55,
        "lng": -47.7801
      },
      {
        "nome": "Luiziânia",
        "uf": "SP",
        "ibge": 3527702,
        "lat": -21.6737,
        "lng": -50.3294
      },
      {
        "nome": "Lupércio",
        "uf": "SP",
        "ibge": 3527801,
        "lat": -22.4146,
        "lng": -49.818
      },
      {
        "nome": "Lutécia",
        "uf": "SP",
        "ibge": 3527900,
        "lat": -22.3384,
        "lng": -50.394
      },
      {
        "nome": "Macatuba",
        "uf": "SP",
        "ibge": 3528007,
        "lat": -22.5002,
        "lng": -48.7102
      },
      {
        "nome": "Macaubal",
        "uf": "SP",
        "ibge": 3528106,
        "lat": -20.8022,
        "lng": -49.9687
      },
      {
        "nome": "Macedônia",
        "uf": "SP",
        "ibge": 3528205,
        "lat": -20.1444,
        "lng": -50.1973
      },
      {
        "nome": "Magda",
        "uf": "SP",
        "ibge": 3528304,
        "lat": -20.6445,
        "lng": -50.2305
      },
      {
        "nome": "Mairinque",
        "uf": "SP",
        "ibge": 3528403,
        "lat": -23.5398,
        "lng": -47.185
      },
      {
        "nome": "Mairiporã",
        "uf": "SP",
        "ibge": 3528502,
        "lat": -23.3171,
        "lng": -46.5897
      },
      {
        "nome": "Manduri",
        "uf": "SP",
        "ibge": 3528601,
        "lat": -23.0056,
        "lng": -49.3202
      },
      {
        "nome": "Marabá Paulista",
        "uf": "SP",
        "ibge": 3528700,
        "lat": -22.1068,
        "lng": -51.9617
      },
      {
        "nome": "Maracaí",
        "uf": "SP",
        "ibge": 3528809,
        "lat": -22.6149,
        "lng": -50.6713
      },
      {
        "nome": "Marapoama",
        "uf": "SP",
        "ibge": 3528858,
        "lat": -21.2587,
        "lng": -49.13
      },
      {
        "nome": "Mariápolis",
        "uf": "SP",
        "ibge": 3528908,
        "lat": -21.7959,
        "lng": -51.1824
      },
      {
        "nome": "Marília",
        "uf": "SP",
        "ibge": 3529005,
        "lat": -22.2171,
        "lng": -49.9501
      },
      {
        "nome": "Marinópolis",
        "uf": "SP",
        "ibge": 3529104,
        "lat": -20.4389,
        "lng": -50.8254
      },
      {
        "nome": "Martinópolis",
        "uf": "SP",
        "ibge": 3529203,
        "lat": -22.1462,
        "lng": -51.1709
      },
      {
        "nome": "Matão",
        "uf": "SP",
        "ibge": 3529302,
        "lat": -21.6025,
        "lng": -48.364
      },
      {
        "nome": "Mauá",
        "uf": "SP",
        "ibge": 3529401,
        "lat": -23.6677,
        "lng": -46.4613
      },
      {
        "nome": "Mendonça",
        "uf": "SP",
        "ibge": 3529500,
        "lat": -21.1757,
        "lng": -49.5791
      },
      {
        "nome": "Meridiano",
        "uf": "SP",
        "ibge": 3529609,
        "lat": -20.3579,
        "lng": -50.1811
      },
      {
        "nome": "Mesópolis",
        "uf": "SP",
        "ibge": 3529658,
        "lat": -19.9684,
        "lng": -50.6326
      },
      {
        "nome": "Miguelópolis",
        "uf": "SP",
        "ibge": 3529708,
        "lat": -20.1796,
        "lng": -48.031
      },
      {
        "nome": "Mineiros do Tietê",
        "uf": "SP",
        "ibge": 3529807,
        "lat": -22.412,
        "lng": -48.451
      },
      {
        "nome": "Mira Estrela",
        "uf": "SP",
        "ibge": 3530003,
        "lat": -19.9789,
        "lng": -50.139
      },
      {
        "nome": "Miracatu",
        "uf": "SP",
        "ibge": 3529906,
        "lat": -24.2766,
        "lng": -47.4625
      },
      {
        "nome": "Mirandópolis",
        "uf": "SP",
        "ibge": 3530102,
        "lat": -21.1313,
        "lng": -51.1035
      },
      {
        "nome": "Mirante do Paranapanema",
        "uf": "SP",
        "ibge": 3530201,
        "lat": -22.2904,
        "lng": -51.9084
      },
      {
        "nome": "Mirassol",
        "uf": "SP",
        "ibge": 3530300,
        "lat": -20.8169,
        "lng": -49.5206
      },
      {
        "nome": "Mirassolândia",
        "uf": "SP",
        "ibge": 3530409,
        "lat": -20.6179,
        "lng": -49.4617
      },
      {
        "nome": "Mococa",
        "uf": "SP",
        "ibge": 3530508,
        "lat": -21.4647,
        "lng": -47.0024
      },
      {
        "nome": "Mogi das Cruzes",
        "uf": "SP",
        "ibge": 3530607,
        "lat": -23.5208,
        "lng": -46.1854
      },
      {
        "nome": "Mogi Guaçu",
        "uf": "SP",
        "ibge": 3530706,
        "lat": -22.3675,
        "lng": -46.9428
      },
      {
        "nome": "Mogi Mirim",
        "uf": "SP",
        "ibge": 3530805,
        "lat": -22.4332,
        "lng": -46.9532
      },
      {
        "nome": "Mombuca",
        "uf": "SP",
        "ibge": 3530904,
        "lat": -22.9285,
        "lng": -47.559
      },
      {
        "nome": "Monções",
        "uf": "SP",
        "ibge": 3531001,
        "lat": -20.8509,
        "lng": -50.0975
      },
      {
        "nome": "Mongaguá",
        "uf": "SP",
        "ibge": 3531100,
        "lat": -24.0809,
        "lng": -46.6265
      },
      {
        "nome": "Monte Alegre do Sul",
        "uf": "SP",
        "ibge": 3531209,
        "lat": -22.6817,
        "lng": -46.681
      },
      {
        "nome": "Monte Alto",
        "uf": "SP",
        "ibge": 3531308,
        "lat": -21.2655,
        "lng": -48.4971
      },
      {
        "nome": "Monte Aprazível",
        "uf": "SP",
        "ibge": 3531407,
        "lat": -20.768,
        "lng": -49.7184
      },
      {
        "nome": "Monte Azul Paulista",
        "uf": "SP",
        "ibge": 3531506,
        "lat": -20.9065,
        "lng": -48.6387
      },
      {
        "nome": "Monte Castelo",
        "uf": "SP",
        "ibge": 3531605,
        "lat": -21.2981,
        "lng": -51.5679
      },
      {
        "nome": "Monte Mor",
        "uf": "SP",
        "ibge": 3531803,
        "lat": -22.945,
        "lng": -47.3122
      },
      {
        "nome": "Monteiro Lobato",
        "uf": "SP",
        "ibge": 3531704,
        "lat": -22.9544,
        "lng": -45.8407
      },
      {
        "nome": "Morro Agudo",
        "uf": "SP",
        "ibge": 3531902,
        "lat": -20.7288,
        "lng": -48.0581
      },
      {
        "nome": "Morungaba",
        "uf": "SP",
        "ibge": 3532009,
        "lat": -22.8811,
        "lng": -46.7896
      },
      {
        "nome": "Motuca",
        "uf": "SP",
        "ibge": 3532058,
        "lat": -21.5103,
        "lng": -48.1538
      },
      {
        "nome": "Murutinga do Sul",
        "uf": "SP",
        "ibge": 3532108,
        "lat": -20.9908,
        "lng": -51.2774
      },
      {
        "nome": "Nantes",
        "uf": "SP",
        "ibge": 3532157,
        "lat": -22.6156,
        "lng": -51.24
      },
      {
        "nome": "Narandiba",
        "uf": "SP",
        "ibge": 3532207,
        "lat": -22.4057,
        "lng": -51.5274
      },
      {
        "nome": "Natividade da Serra",
        "uf": "SP",
        "ibge": 3532306,
        "lat": -23.3707,
        "lng": -45.4468
      },
      {
        "nome": "Nazaré Paulista",
        "uf": "SP",
        "ibge": 3532405,
        "lat": -23.1747,
        "lng": -46.3983
      },
      {
        "nome": "Neves Paulista",
        "uf": "SP",
        "ibge": 3532504,
        "lat": -20.843,
        "lng": -49.6358
      },
      {
        "nome": "Nhandeara",
        "uf": "SP",
        "ibge": 3532603,
        "lat": -20.6945,
        "lng": -50.0436
      },
      {
        "nome": "Nipoã",
        "uf": "SP",
        "ibge": 3532702,
        "lat": -20.9114,
        "lng": -49.7833
      },
      {
        "nome": "Nova Aliança",
        "uf": "SP",
        "ibge": 3532801,
        "lat": -21.0156,
        "lng": -49.4986
      },
      {
        "nome": "Nova Campina",
        "uf": "SP",
        "ibge": 3532827,
        "lat": -24.1224,
        "lng": -48.9022
      },
      {
        "nome": "Nova Canaã Paulista",
        "uf": "SP",
        "ibge": 3532843,
        "lat": -20.3836,
        "lng": -50.9483
      },
      {
        "nome": "Nova Castilho",
        "uf": "SP",
        "ibge": 3532868,
        "lat": -20.7615,
        "lng": -50.3477
      },
      {
        "nome": "Nova Europa",
        "uf": "SP",
        "ibge": 3532900,
        "lat": -21.7765,
        "lng": -48.5705
      },
      {
        "nome": "Nova Granada",
        "uf": "SP",
        "ibge": 3533007,
        "lat": -20.5321,
        "lng": -49.3123
      },
      {
        "nome": "Nova Guataporanga",
        "uf": "SP",
        "ibge": 3533106,
        "lat": -21.332,
        "lng": -51.6447
      },
      {
        "nome": "Nova Independência",
        "uf": "SP",
        "ibge": 3533205,
        "lat": -21.1026,
        "lng": -51.4905
      },
      {
        "nome": "Nova Luzitânia",
        "uf": "SP",
        "ibge": 3533304,
        "lat": -20.856,
        "lng": -50.2617
      },
      {
        "nome": "Nova Odessa",
        "uf": "SP",
        "ibge": 3533403,
        "lat": -22.7832,
        "lng": -47.2941
      },
      {
        "nome": "Novais",
        "uf": "SP",
        "ibge": 3533254,
        "lat": -20.9893,
        "lng": -48.9141
      },
      {
        "nome": "Novo Horizonte",
        "uf": "SP",
        "ibge": 3533502,
        "lat": -21.4651,
        "lng": -49.2234
      },
      {
        "nome": "Nuporanga",
        "uf": "SP",
        "ibge": 3533601,
        "lat": -20.7296,
        "lng": -47.7429
      },
      {
        "nome": "Ocauçu",
        "uf": "SP",
        "ibge": 3533700,
        "lat": -22.438,
        "lng": -49.922
      },
      {
        "nome": "Óleo",
        "uf": "SP",
        "ibge": 3533809,
        "lat": -22.9435,
        "lng": -49.3419
      },
      {
        "nome": "Olímpia",
        "uf": "SP",
        "ibge": 3533908,
        "lat": -20.7366,
        "lng": -48.9106
      },
      {
        "nome": "Onda Verde",
        "uf": "SP",
        "ibge": 3534005,
        "lat": -20.6042,
        "lng": -49.2929
      },
      {
        "nome": "Oriente",
        "uf": "SP",
        "ibge": 3534104,
        "lat": -22.1549,
        "lng": -50.0971
      },
      {
        "nome": "Orindiúva",
        "uf": "SP",
        "ibge": 3534203,
        "lat": -20.1861,
        "lng": -49.3464
      },
      {
        "nome": "Orlândia",
        "uf": "SP",
        "ibge": 3534302,
        "lat": -20.7169,
        "lng": -47.8852
      },
      {
        "nome": "Osasco",
        "uf": "SP",
        "ibge": 3534401,
        "lat": -23.5324,
        "lng": -46.7916
      },
      {
        "nome": "Oscar Bressane",
        "uf": "SP",
        "ibge": 3534500,
        "lat": -22.3149,
        "lng": -50.2811
      },
      {
        "nome": "Osvaldo Cruz",
        "uf": "SP",
        "ibge": 3534609,
        "lat": -21.7968,
        "lng": -50.8793
      },
      {
        "nome": "Ourinhos",
        "uf": "SP",
        "ibge": 3534708,
        "lat": -22.9797,
        "lng": -49.8697
      },
      {
        "nome": "Ouro Verde",
        "uf": "SP",
        "ibge": 3534807,
        "lat": -21.4872,
        "lng": -51.7024
      },
      {
        "nome": "Ouroeste",
        "uf": "SP",
        "ibge": 3534757,
        "lat": -20.0061,
        "lng": -50.3768
      },
      {
        "nome": "Pacaembu",
        "uf": "SP",
        "ibge": 3534906,
        "lat": -21.5627,
        "lng": -51.2654
      },
      {
        "nome": "Palestina",
        "uf": "SP",
        "ibge": 3535002,
        "lat": -20.39,
        "lng": -49.4309
      },
      {
        "nome": "Palmares Paulista",
        "uf": "SP",
        "ibge": 3535101,
        "lat": -21.0854,
        "lng": -48.8037
      },
      {
        "nome": "Palmeira d'Oeste",
        "uf": "SP",
        "ibge": 3535200,
        "lat": -20.4148,
        "lng": -50.7632
      },
      {
        "nome": "Palmital",
        "uf": "SP",
        "ibge": 3535309,
        "lat": -22.7858,
        "lng": -50.218
      },
      {
        "nome": "Panorama",
        "uf": "SP",
        "ibge": 3535408,
        "lat": -21.354,
        "lng": -51.8562
      },
      {
        "nome": "Paraguaçu Paulista",
        "uf": "SP",
        "ibge": 3535507,
        "lat": -22.4114,
        "lng": -50.5732
      },
      {
        "nome": "Paraibuna",
        "uf": "SP",
        "ibge": 3535606,
        "lat": -23.3872,
        "lng": -45.6639
      },
      {
        "nome": "Paraíso",
        "uf": "SP",
        "ibge": 3535705,
        "lat": -21.0159,
        "lng": -48.7761
      },
      {
        "nome": "Paranapanema",
        "uf": "SP",
        "ibge": 3535804,
        "lat": -23.3862,
        "lng": -48.7214
      },
      {
        "nome": "Paranapuã",
        "uf": "SP",
        "ibge": 3535903,
        "lat": -20.1048,
        "lng": -50.5886
      },
      {
        "nome": "Parapuã",
        "uf": "SP",
        "ibge": 3536000,
        "lat": -21.7792,
        "lng": -50.7949
      },
      {
        "nome": "Pardinho",
        "uf": "SP",
        "ibge": 3536109,
        "lat": -23.0841,
        "lng": -48.3679
      },
      {
        "nome": "Pariquera-Açu",
        "uf": "SP",
        "ibge": 3536208,
        "lat": -24.7147,
        "lng": -47.8742
      },
      {
        "nome": "Parisi",
        "uf": "SP",
        "ibge": 3536257,
        "lat": -20.3034,
        "lng": -50.0163
      },
      {
        "nome": "Patrocínio Paulista",
        "uf": "SP",
        "ibge": 3536307,
        "lat": -20.6384,
        "lng": -47.2801
      },
      {
        "nome": "Paulicéia",
        "uf": "SP",
        "ibge": 3536406,
        "lat": -21.3153,
        "lng": -51.8321
      },
      {
        "nome": "Paulínia",
        "uf": "SP",
        "ibge": 3536505,
        "lat": -22.7542,
        "lng": -47.1488
      },
      {
        "nome": "Paulistânia",
        "uf": "SP",
        "ibge": 3536570,
        "lat": -22.5768,
        "lng": -49.4008
      },
      {
        "nome": "Paulo de Faria",
        "uf": "SP",
        "ibge": 3536604,
        "lat": -20.0296,
        "lng": -49.4
      },
      {
        "nome": "Pederneiras",
        "uf": "SP",
        "ibge": 3536703,
        "lat": -22.3511,
        "lng": -48.7781
      },
      {
        "nome": "Pedra Bela",
        "uf": "SP",
        "ibge": 3536802,
        "lat": -22.7902,
        "lng": -46.4455
      },
      {
        "nome": "Pedranópolis",
        "uf": "SP",
        "ibge": 3536901,
        "lat": -20.2474,
        "lng": -50.1129
      },
      {
        "nome": "Pedregulho",
        "uf": "SP",
        "ibge": 3537008,
        "lat": -20.2535,
        "lng": -47.4775
      },
      {
        "nome": "Pedreira",
        "uf": "SP",
        "ibge": 3537107,
        "lat": -22.7413,
        "lng": -46.8948
      },
      {
        "nome": "Pedrinhas Paulista",
        "uf": "SP",
        "ibge": 3537156,
        "lat": -22.8174,
        "lng": -50.7933
      },
      {
        "nome": "Pedro de Toledo",
        "uf": "SP",
        "ibge": 3537206,
        "lat": -24.2764,
        "lng": -47.2354
      },
      {
        "nome": "Penápolis",
        "uf": "SP",
        "ibge": 3537305,
        "lat": -21.4148,
        "lng": -50.0769
      },
      {
        "nome": "Pereira Barreto",
        "uf": "SP",
        "ibge": 3537404,
        "lat": -20.6368,
        "lng": -51.1123
      },
      {
        "nome": "Pereiras",
        "uf": "SP",
        "ibge": 3537503,
        "lat": -23.0804,
        "lng": -47.972
      },
      {
        "nome": "Peruíbe",
        "uf": "SP",
        "ibge": 3537602,
        "lat": -24.312,
        "lng": -47.0012
      },
      {
        "nome": "Piacatu",
        "uf": "SP",
        "ibge": 3537701,
        "lat": -21.5921,
        "lng": -50.6003
      },
      {
        "nome": "Piedade",
        "uf": "SP",
        "ibge": 3537800,
        "lat": -23.7139,
        "lng": -47.4256
      },
      {
        "nome": "Pilar do Sul",
        "uf": "SP",
        "ibge": 3537909,
        "lat": -23.8077,
        "lng": -47.7222
      },
      {
        "nome": "Pindamonhangaba",
        "uf": "SP",
        "ibge": 3538006,
        "lat": -22.9246,
        "lng": -45.4613
      },
      {
        "nome": "Pindorama",
        "uf": "SP",
        "ibge": 3538105,
        "lat": -21.1853,
        "lng": -48.9086
      },
      {
        "nome": "Pinhalzinho",
        "uf": "SP",
        "ibge": 3538204,
        "lat": -22.7811,
        "lng": -46.5897
      },
      {
        "nome": "Piquerobi",
        "uf": "SP",
        "ibge": 3538303,
        "lat": -21.8747,
        "lng": -51.7282
      },
      {
        "nome": "Piquete",
        "uf": "SP",
        "ibge": 3538501,
        "lat": -22.6069,
        "lng": -45.1869
      },
      {
        "nome": "Piracaia",
        "uf": "SP",
        "ibge": 3538600,
        "lat": -23.0525,
        "lng": -46.3594
      },
      {
        "nome": "Piracicaba",
        "uf": "SP",
        "ibge": 3538709,
        "lat": -22.7338,
        "lng": -47.6476
      },
      {
        "nome": "Piraju",
        "uf": "SP",
        "ibge": 3538808,
        "lat": -23.1981,
        "lng": -49.3803
      },
      {
        "nome": "Pirajuí",
        "uf": "SP",
        "ibge": 3538907,
        "lat": -21.999,
        "lng": -49.4608
      },
      {
        "nome": "Pirangi",
        "uf": "SP",
        "ibge": 3539004,
        "lat": -21.0886,
        "lng": -48.6607
      },
      {
        "nome": "Pirapora do Bom Jesus",
        "uf": "SP",
        "ibge": 3539103,
        "lat": -23.3965,
        "lng": -46.9991
      },
      {
        "nome": "Pirapozinho",
        "uf": "SP",
        "ibge": 3539202,
        "lat": -22.2711,
        "lng": -51.4976
      },
      {
        "nome": "Pirassununga",
        "uf": "SP",
        "ibge": 3539301,
        "lat": -21.996,
        "lng": -47.4257
      },
      {
        "nome": "Piratininga",
        "uf": "SP",
        "ibge": 3539400,
        "lat": -22.4142,
        "lng": -49.1339
      },
      {
        "nome": "Pitangueiras",
        "uf": "SP",
        "ibge": 3539509,
        "lat": -21.0132,
        "lng": -48.221
      },
      {
        "nome": "Planalto",
        "uf": "SP",
        "ibge": 3539608,
        "lat": -21.0342,
        "lng": -49.933
      },
      {
        "nome": "Platina",
        "uf": "SP",
        "ibge": 3539707,
        "lat": -22.6371,
        "lng": -50.2104
      },
      {
        "nome": "Poá",
        "uf": "SP",
        "ibge": 3539806,
        "lat": -23.5333,
        "lng": -46.3473
      },
      {
        "nome": "Poloni",
        "uf": "SP",
        "ibge": 3539905,
        "lat": -20.7829,
        "lng": -49.8258
      },
      {
        "nome": "Pompéia",
        "uf": "SP",
        "ibge": 3540002,
        "lat": -22.107,
        "lng": -50.176
      },
      {
        "nome": "Pongaí",
        "uf": "SP",
        "ibge": 3540101,
        "lat": -21.7396,
        "lng": -49.3604
      },
      {
        "nome": "Pontal",
        "uf": "SP",
        "ibge": 3540200,
        "lat": -21.0216,
        "lng": -48.0423
      },
      {
        "nome": "Pontalinda",
        "uf": "SP",
        "ibge": 3540259,
        "lat": -20.4396,
        "lng": -50.5258
      },
      {
        "nome": "Pontes Gestal",
        "uf": "SP",
        "ibge": 3540309,
        "lat": -20.1727,
        "lng": -49.7064
      },
      {
        "nome": "Populina",
        "uf": "SP",
        "ibge": 3540408,
        "lat": -19.9453,
        "lng": -50.538
      },
      {
        "nome": "Porangaba",
        "uf": "SP",
        "ibge": 3540507,
        "lat": -23.1761,
        "lng": -48.1195
      },
      {
        "nome": "Porto Feliz",
        "uf": "SP",
        "ibge": 3540606,
        "lat": -23.2093,
        "lng": -47.5251
      },
      {
        "nome": "Porto Ferreira",
        "uf": "SP",
        "ibge": 3540705,
        "lat": -21.8498,
        "lng": -47.487
      },
      {
        "nome": "Potim",
        "uf": "SP",
        "ibge": 3540754,
        "lat": -22.8343,
        "lng": -45.2552
      },
      {
        "nome": "Potirendaba",
        "uf": "SP",
        "ibge": 3540804,
        "lat": -21.0428,
        "lng": -49.3815
      },
      {
        "nome": "Pracinha",
        "uf": "SP",
        "ibge": 3540853,
        "lat": -21.8496,
        "lng": -51.0868
      },
      {
        "nome": "Pradópolis",
        "uf": "SP",
        "ibge": 3540903,
        "lat": -21.3626,
        "lng": -48.0679
      },
      {
        "nome": "Praia Grande",
        "uf": "SP",
        "ibge": 3541000,
        "lat": -24.0084,
        "lng": -46.4121
      },
      {
        "nome": "Pratânia",
        "uf": "SP",
        "ibge": 3541059,
        "lat": -22.8112,
        "lng": -48.6636
      },
      {
        "nome": "Presidente Alves",
        "uf": "SP",
        "ibge": 3541109,
        "lat": -22.0999,
        "lng": -49.4381
      },
      {
        "nome": "Presidente Bernardes",
        "uf": "SP",
        "ibge": 3541208,
        "lat": -22.0082,
        "lng": -51.5565
      },
      {
        "nome": "Presidente Epitácio",
        "uf": "SP",
        "ibge": 3541307,
        "lat": -21.7651,
        "lng": -52.1111
      },
      {
        "nome": "Presidente Prudente",
        "uf": "SP",
        "ibge": 3541406,
        "lat": -22.1207,
        "lng": -51.3925
      },
      {
        "nome": "Presidente Venceslau",
        "uf": "SP",
        "ibge": 3541505,
        "lat": -21.8732,
        "lng": -51.8447
      },
      {
        "nome": "Promissão",
        "uf": "SP",
        "ibge": 3541604,
        "lat": -21.5356,
        "lng": -49.8599
      },
      {
        "nome": "Quadra",
        "uf": "SP",
        "ibge": 3541653,
        "lat": -23.2993,
        "lng": -48.0547
      },
      {
        "nome": "Quatá",
        "uf": "SP",
        "ibge": 3541703,
        "lat": -22.2456,
        "lng": -50.6966
      },
      {
        "nome": "Queiroz",
        "uf": "SP",
        "ibge": 3541802,
        "lat": -21.7969,
        "lng": -50.2415
      },
      {
        "nome": "Queluz",
        "uf": "SP",
        "ibge": 3541901,
        "lat": -22.5312,
        "lng": -44.7781
      },
      {
        "nome": "Quintana",
        "uf": "SP",
        "ibge": 3542008,
        "lat": -22.0692,
        "lng": -50.307
      },
      {
        "nome": "Rafard",
        "uf": "SP",
        "ibge": 3542107,
        "lat": -23.0105,
        "lng": -47.5318
      },
      {
        "nome": "Rancharia",
        "uf": "SP",
        "ibge": 3542206,
        "lat": -22.2269,
        "lng": -50.893
      },
      {
        "nome": "Redenção da Serra",
        "uf": "SP",
        "ibge": 3542305,
        "lat": -23.2638,
        "lng": -45.5422
      },
      {
        "nome": "Regente Feijó",
        "uf": "SP",
        "ibge": 3542404,
        "lat": -22.2181,
        "lng": -51.3055
      },
      {
        "nome": "Reginópolis",
        "uf": "SP",
        "ibge": 3542503,
        "lat": -21.8914,
        "lng": -49.2268
      },
      {
        "nome": "Registro",
        "uf": "SP",
        "ibge": 3542602,
        "lat": -24.4979,
        "lng": -47.8449
      },
      {
        "nome": "Restinga",
        "uf": "SP",
        "ibge": 3542701,
        "lat": -20.6056,
        "lng": -47.4833
      },
      {
        "nome": "Ribeira",
        "uf": "SP",
        "ibge": 3542800,
        "lat": -24.6517,
        "lng": -49.0044
      },
      {
        "nome": "Ribeirão Bonito",
        "uf": "SP",
        "ibge": 3542909,
        "lat": -22.0685,
        "lng": -48.182
      },
      {
        "nome": "Ribeirão Branco",
        "uf": "SP",
        "ibge": 3543006,
        "lat": -24.2206,
        "lng": -48.7635
      },
      {
        "nome": "Ribeirão Corrente",
        "uf": "SP",
        "ibge": 3543105,
        "lat": -20.4579,
        "lng": -47.5904
      },
      {
        "nome": "Ribeirão do Sul",
        "uf": "SP",
        "ibge": 3543204,
        "lat": -22.789,
        "lng": -49.933
      },
      {
        "nome": "Ribeirão dos Índios",
        "uf": "SP",
        "ibge": 3543238,
        "lat": -21.8382,
        "lng": -51.6103
      },
      {
        "nome": "Ribeirão Grande",
        "uf": "SP",
        "ibge": 3543253,
        "lat": -24.1011,
        "lng": -48.3679
      },
      {
        "nome": "Ribeirão Pires",
        "uf": "SP",
        "ibge": 3543303,
        "lat": -23.7067,
        "lng": -46.4058
      },
      {
        "nome": "Ribeirão Preto",
        "uf": "SP",
        "ibge": 3543402,
        "lat": -21.1699,
        "lng": -47.8099
      },
      {
        "nome": "Rifaina",
        "uf": "SP",
        "ibge": 3543600,
        "lat": -20.0803,
        "lng": -47.4291
      },
      {
        "nome": "Rincão",
        "uf": "SP",
        "ibge": 3543709,
        "lat": -21.5894,
        "lng": -48.0728
      },
      {
        "nome": "Rinópolis",
        "uf": "SP",
        "ibge": 3543808,
        "lat": -21.7284,
        "lng": -50.7239
      },
      {
        "nome": "Rio Claro",
        "uf": "SP",
        "ibge": 3543907,
        "lat": -22.3984,
        "lng": -47.5546
      },
      {
        "nome": "Rio das Pedras",
        "uf": "SP",
        "ibge": 3544004,
        "lat": -22.8417,
        "lng": -47.6047
      },
      {
        "nome": "Rio Grande da Serra",
        "uf": "SP",
        "ibge": 3544103,
        "lat": -23.7437,
        "lng": -46.3971
      },
      {
        "nome": "Riolândia",
        "uf": "SP",
        "ibge": 3544202,
        "lat": -19.9868,
        "lng": -49.6836
      },
      {
        "nome": "Riversul",
        "uf": "SP",
        "ibge": 3543501,
        "lat": -23.829,
        "lng": -49.429
      },
      {
        "nome": "Rosana",
        "uf": "SP",
        "ibge": 3544251,
        "lat": -22.5782,
        "lng": -53.0603
      },
      {
        "nome": "Roseira",
        "uf": "SP",
        "ibge": 3544301,
        "lat": -22.8938,
        "lng": -45.307
      },
      {
        "nome": "Rubiácea",
        "uf": "SP",
        "ibge": 3544400,
        "lat": -21.3006,
        "lng": -50.7296
      },
      {
        "nome": "Rubinéia",
        "uf": "SP",
        "ibge": 3544509,
        "lat": -20.1759,
        "lng": -51.007
      },
      {
        "nome": "Sabino",
        "uf": "SP",
        "ibge": 3544608,
        "lat": -21.4593,
        "lng": -49.5755
      },
      {
        "nome": "Sagres",
        "uf": "SP",
        "ibge": 3544707,
        "lat": -21.8823,
        "lng": -50.9594
      },
      {
        "nome": "Sales",
        "uf": "SP",
        "ibge": 3544806,
        "lat": -21.3427,
        "lng": -49.4897
      },
      {
        "nome": "Sales Oliveira",
        "uf": "SP",
        "ibge": 3544905,
        "lat": -20.7696,
        "lng": -47.8369
      },
      {
        "nome": "Salesópolis",
        "uf": "SP",
        "ibge": 3545001,
        "lat": -23.5288,
        "lng": -45.8465
      },
      {
        "nome": "Salmourão",
        "uf": "SP",
        "ibge": 3545100,
        "lat": -21.6267,
        "lng": -50.8614
      },
      {
        "nome": "Saltinho",
        "uf": "SP",
        "ibge": 3545159,
        "lat": -22.8442,
        "lng": -47.6754
      },
      {
        "nome": "Salto",
        "uf": "SP",
        "ibge": 3545209,
        "lat": -23.1996,
        "lng": -47.2931
      },
      {
        "nome": "Salto de Pirapora",
        "uf": "SP",
        "ibge": 3545308,
        "lat": -23.6474,
        "lng": -47.5743
      },
      {
        "nome": "Salto Grande",
        "uf": "SP",
        "ibge": 3545407,
        "lat": -22.8894,
        "lng": -49.9831
      },
      {
        "nome": "Sandovalina",
        "uf": "SP",
        "ibge": 3545506,
        "lat": -22.4551,
        "lng": -51.7648
      },
      {
        "nome": "Santa Adélia",
        "uf": "SP",
        "ibge": 3545605,
        "lat": -21.2427,
        "lng": -48.8063
      },
      {
        "nome": "Santa Albertina",
        "uf": "SP",
        "ibge": 3545704,
        "lat": -20.0311,
        "lng": -50.7297
      },
      {
        "nome": "Santa Bárbara d'Oeste",
        "uf": "SP",
        "ibge": 3545803,
        "lat": -22.7553,
        "lng": -47.4143
      },
      {
        "nome": "Santa Branca",
        "uf": "SP",
        "ibge": 3546009,
        "lat": -23.3933,
        "lng": -45.8875
      },
      {
        "nome": "Santa Clara d'Oeste",
        "uf": "SP",
        "ibge": 3546108,
        "lat": -20.09,
        "lng": -50.9491
      },
      {
        "nome": "Santa Cruz da Conceição",
        "uf": "SP",
        "ibge": 3546207,
        "lat": -22.1405,
        "lng": -47.4512
      },
      {
        "nome": "Santa Cruz da Esperança",
        "uf": "SP",
        "ibge": 3546256,
        "lat": -21.2951,
        "lng": -47.4304
      },
      {
        "nome": "Santa Cruz das Palmeiras",
        "uf": "SP",
        "ibge": 3546306,
        "lat": -21.8235,
        "lng": -47.248
      },
      {
        "nome": "Santa Cruz do Rio Pardo",
        "uf": "SP",
        "ibge": 3546405,
        "lat": -22.8988,
        "lng": -49.6354
      },
      {
        "nome": "Santa Ernestina",
        "uf": "SP",
        "ibge": 3546504,
        "lat": -21.4618,
        "lng": -48.3953
      },
      {
        "nome": "Santa Fé do Sul",
        "uf": "SP",
        "ibge": 3546603,
        "lat": -20.2083,
        "lng": -50.932
      },
      {
        "nome": "Santa Gertrudes",
        "uf": "SP",
        "ibge": 3546702,
        "lat": -22.4572,
        "lng": -47.5272
      },
      {
        "nome": "Santa Isabel",
        "uf": "SP",
        "ibge": 3546801,
        "lat": -23.3172,
        "lng": -46.2237
      },
      {
        "nome": "Santa Lúcia",
        "uf": "SP",
        "ibge": 3546900,
        "lat": -21.685,
        "lng": -48.0885
      },
      {
        "nome": "Santa Maria da Serra",
        "uf": "SP",
        "ibge": 3547007,
        "lat": -22.5661,
        "lng": -48.1593
      },
      {
        "nome": "Santa Mercedes",
        "uf": "SP",
        "ibge": 3547106,
        "lat": -21.3495,
        "lng": -51.7564
      },
      {
        "nome": "Santa Rita d'Oeste",
        "uf": "SP",
        "ibge": 3547403,
        "lat": -20.1414,
        "lng": -50.8358
      },
      {
        "nome": "Santa Rita do Passa Quatro",
        "uf": "SP",
        "ibge": 3547502,
        "lat": -21.7083,
        "lng": -47.478
      },
      {
        "nome": "Santa Rosa de Viterbo",
        "uf": "SP",
        "ibge": 3547601,
        "lat": -21.4776,
        "lng": -47.3622
      },
      {
        "nome": "Santa Salete",
        "uf": "SP",
        "ibge": 3547650,
        "lat": -20.2429,
        "lng": -50.6887
      },
      {
        "nome": "Santana da Ponte Pensa",
        "uf": "SP",
        "ibge": 3547205,
        "lat": -20.2523,
        "lng": -50.8014
      },
      {
        "nome": "Santana de Parnaíba",
        "uf": "SP",
        "ibge": 3547304,
        "lat": -23.4439,
        "lng": -46.9178
      },
      {
        "nome": "Santo Anastácio",
        "uf": "SP",
        "ibge": 3547700,
        "lat": -21.9747,
        "lng": -51.6527
      },
      {
        "nome": "Santo André",
        "uf": "SP",
        "ibge": 3547809,
        "lat": -23.6737,
        "lng": -46.5432
      },
      {
        "nome": "Santo Antônio da Alegria",
        "uf": "SP",
        "ibge": 3547908,
        "lat": -21.0864,
        "lng": -47.1464
      },
      {
        "nome": "Santo Antônio de Posse",
        "uf": "SP",
        "ibge": 3548005,
        "lat": -22.6029,
        "lng": -46.9192
      },
      {
        "nome": "Santo Antônio do Aracanguá",
        "uf": "SP",
        "ibge": 3548054,
        "lat": -20.9331,
        "lng": -50.498
      },
      {
        "nome": "Santo Antônio do Jardim",
        "uf": "SP",
        "ibge": 3548104,
        "lat": -22.1121,
        "lng": -46.6845
      },
      {
        "nome": "Santo Antônio do Pinhal",
        "uf": "SP",
        "ibge": 3548203,
        "lat": -22.827,
        "lng": -45.663
      },
      {
        "nome": "Santo Expedito",
        "uf": "SP",
        "ibge": 3548302,
        "lat": -21.8467,
        "lng": -51.3929
      },
      {
        "nome": "Santópolis do Aguapeí",
        "uf": "SP",
        "ibge": 3548401,
        "lat": -21.6376,
        "lng": -50.5044
      },
      {
        "nome": "Santos",
        "uf": "SP",
        "ibge": 3548500,
        "lat": -23.9535,
        "lng": -46.335
      },
      {
        "nome": "São Bento do Sapucaí",
        "uf": "SP",
        "ibge": 3548609,
        "lat": -22.6837,
        "lng": -45.7287
      },
      {
        "nome": "São Bernardo do Campo",
        "uf": "SP",
        "ibge": 3548708,
        "lat": -23.6914,
        "lng": -46.5646
      },
      {
        "nome": "São Caetano do Sul",
        "uf": "SP",
        "ibge": 3548807,
        "lat": -23.6229,
        "lng": -46.5548
      },
      {
        "nome": "São Carlos",
        "uf": "SP",
        "ibge": 3548906,
        "lat": -22.0174,
        "lng": -47.886
      },
      {
        "nome": "São Francisco",
        "uf": "SP",
        "ibge": 3549003,
        "lat": -20.3623,
        "lng": -50.6952
      },
      {
        "nome": "São João da Boa Vista",
        "uf": "SP",
        "ibge": 3549102,
        "lat": -21.9707,
        "lng": -46.7944
      },
      {
        "nome": "São João das Duas Pontes",
        "uf": "SP",
        "ibge": 3549201,
        "lat": -20.3879,
        "lng": -50.3792
      },
      {
        "nome": "São João de Iracema",
        "uf": "SP",
        "ibge": 3549250,
        "lat": -20.5111,
        "lng": -50.3561
      },
      {
        "nome": "São João do Pau d'Alho",
        "uf": "SP",
        "ibge": 3549300,
        "lat": -21.2662,
        "lng": -51.6672
      },
      {
        "nome": "São Joaquim da Barra",
        "uf": "SP",
        "ibge": 3549409,
        "lat": -20.5812,
        "lng": -47.8593
      },
      {
        "nome": "São José da Bela Vista",
        "uf": "SP",
        "ibge": 3549508,
        "lat": -20.5935,
        "lng": -47.6424
      },
      {
        "nome": "São José do Barreiro",
        "uf": "SP",
        "ibge": 3549607,
        "lat": -22.6414,
        "lng": -44.5774
      },
      {
        "nome": "São José do Rio Pardo",
        "uf": "SP",
        "ibge": 3549706,
        "lat": -21.5953,
        "lng": -46.8873
      },
      {
        "nome": "São José do Rio Preto",
        "uf": "SP",
        "ibge": 3549805,
        "lat": -20.8113,
        "lng": -49.3758
      },
      {
        "nome": "São José dos Campos",
        "uf": "SP",
        "ibge": 3549904,
        "lat": -23.1896,
        "lng": -45.8841
      },
      {
        "nome": "São Lourenço da Serra",
        "uf": "SP",
        "ibge": 3549953,
        "lat": -23.8491,
        "lng": -46.9432
      },
      {
        "nome": "São Luiz do Paraitinga",
        "uf": "SP",
        "ibge": 3550001,
        "lat": -23.222,
        "lng": -45.3109
      },
      {
        "nome": "São Manuel",
        "uf": "SP",
        "ibge": 3550100,
        "lat": -22.7321,
        "lng": -48.5723
      },
      {
        "nome": "São Miguel Arcanjo",
        "uf": "SP",
        "ibge": 3550209,
        "lat": -23.8782,
        "lng": -47.9935
      },
      {
        "nome": "São Pedro",
        "uf": "SP",
        "ibge": 3550407,
        "lat": -22.5483,
        "lng": -47.9096
      },
      {
        "nome": "São Pedro do Turvo",
        "uf": "SP",
        "ibge": 3550506,
        "lat": -22.7453,
        "lng": -49.7428
      },
      {
        "nome": "São Roque",
        "uf": "SP",
        "ibge": 3550605,
        "lat": -23.5226,
        "lng": -47.1357
      },
      {
        "nome": "São Sebastião",
        "uf": "SP",
        "ibge": 3550704,
        "lat": -23.7951,
        "lng": -45.4143
      },
      {
        "nome": "São Sebastião da Grama",
        "uf": "SP",
        "ibge": 3550803,
        "lat": -21.7041,
        "lng": -46.8208
      },
      {
        "nome": "São Simão",
        "uf": "SP",
        "ibge": 3550902,
        "lat": -21.4732,
        "lng": -47.5518
      },
      {
        "nome": "São Vicente",
        "uf": "SP",
        "ibge": 3551009,
        "lat": -23.9574,
        "lng": -46.3883
      },
      {
        "nome": "Sarapuí",
        "uf": "SP",
        "ibge": 3551108,
        "lat": -23.6397,
        "lng": -47.8249
      },
      {
        "nome": "Sarutaiá",
        "uf": "SP",
        "ibge": 3551207,
        "lat": -23.2721,
        "lng": -49.4763
      },
      {
        "nome": "Sebastianópolis do Sul",
        "uf": "SP",
        "ibge": 3551306,
        "lat": -20.6523,
        "lng": -49.925
      },
      {
        "nome": "Serra Azul",
        "uf": "SP",
        "ibge": 3551405,
        "lat": -21.3074,
        "lng": -47.5602
      },
      {
        "nome": "Serra Negra",
        "uf": "SP",
        "ibge": 3551603,
        "lat": -22.6139,
        "lng": -46.7033
      },
      {
        "nome": "Serrana",
        "uf": "SP",
        "ibge": 3551504,
        "lat": -21.2043,
        "lng": -47.5952
      },
      {
        "nome": "Sertãozinho",
        "uf": "SP",
        "ibge": 3551702,
        "lat": -21.1316,
        "lng": -47.9875
      },
      {
        "nome": "Sete Barras",
        "uf": "SP",
        "ibge": 3551801,
        "lat": -24.382,
        "lng": -47.9279
      },
      {
        "nome": "Severínia",
        "uf": "SP",
        "ibge": 3551900,
        "lat": -20.8108,
        "lng": -48.8054
      },
      {
        "nome": "Silveiras",
        "uf": "SP",
        "ibge": 3552007,
        "lat": -22.6638,
        "lng": -44.8522
      },
      {
        "nome": "Socorro",
        "uf": "SP",
        "ibge": 3552106,
        "lat": -22.5903,
        "lng": -46.5251
      },
      {
        "nome": "Sorocaba",
        "uf": "SP",
        "ibge": 3552205,
        "lat": -23.4969,
        "lng": -47.4451
      },
      {
        "nome": "Sud Mennucci",
        "uf": "SP",
        "ibge": 3552304,
        "lat": -20.6872,
        "lng": -50.9238
      },
      {
        "nome": "Sumaré",
        "uf": "SP",
        "ibge": 3552403,
        "lat": -22.8204,
        "lng": -47.2728
      },
      {
        "nome": "Suzanápolis",
        "uf": "SP",
        "ibge": 3552551,
        "lat": -20.4981,
        "lng": -51.0268
      },
      {
        "nome": "Suzano",
        "uf": "SP",
        "ibge": 3552502,
        "lat": -23.5448,
        "lng": -46.3112
      },
      {
        "nome": "Tabapuã",
        "uf": "SP",
        "ibge": 3552601,
        "lat": -20.9602,
        "lng": -49.0307
      },
      {
        "nome": "Tabatinga",
        "uf": "SP",
        "ibge": 3552700,
        "lat": -21.7239,
        "lng": -48.6896
      },
      {
        "nome": "Taboão da Serra",
        "uf": "SP",
        "ibge": 3552809,
        "lat": -23.6019,
        "lng": -46.7526
      },
      {
        "nome": "Taciba",
        "uf": "SP",
        "ibge": 3552908,
        "lat": -22.3866,
        "lng": -51.2882
      },
      {
        "nome": "Taguaí",
        "uf": "SP",
        "ibge": 3553005,
        "lat": -23.4452,
        "lng": -49.4024
      },
      {
        "nome": "Taiaçu",
        "uf": "SP",
        "ibge": 3553104,
        "lat": -21.1431,
        "lng": -48.5112
      },
      {
        "nome": "Taiúva",
        "uf": "SP",
        "ibge": 3553203,
        "lat": -21.1223,
        "lng": -48.4528
      },
      {
        "nome": "Tambaú",
        "uf": "SP",
        "ibge": 3553302,
        "lat": -21.7029,
        "lng": -47.2703
      },
      {
        "nome": "Tanabi",
        "uf": "SP",
        "ibge": 3553401,
        "lat": -20.6228,
        "lng": -49.6563
      },
      {
        "nome": "Tapiraí",
        "uf": "SP",
        "ibge": 3553500,
        "lat": -23.9612,
        "lng": -47.5062
      },
      {
        "nome": "Tapiratiba",
        "uf": "SP",
        "ibge": 3553609,
        "lat": -21.4713,
        "lng": -46.7448
      },
      {
        "nome": "Taquaral",
        "uf": "SP",
        "ibge": 3553658,
        "lat": -21.0737,
        "lng": -48.4126
      },
      {
        "nome": "Taquaritinga",
        "uf": "SP",
        "ibge": 3553708,
        "lat": -21.4049,
        "lng": -48.5103
      },
      {
        "nome": "Taquarituba",
        "uf": "SP",
        "ibge": 3553807,
        "lat": -23.5307,
        "lng": -49.241
      },
      {
        "nome": "Taquarivaí",
        "uf": "SP",
        "ibge": 3553856,
        "lat": -23.9211,
        "lng": -48.6948
      },
      {
        "nome": "Tarabai",
        "uf": "SP",
        "ibge": 3553906,
        "lat": -22.3016,
        "lng": -51.5621
      },
      {
        "nome": "Tarumã",
        "uf": "SP",
        "ibge": 3553955,
        "lat": -22.7429,
        "lng": -50.5786
      },
      {
        "nome": "Tatuí",
        "uf": "SP",
        "ibge": 3554003,
        "lat": -23.3487,
        "lng": -47.8461
      },
      {
        "nome": "Taubaté",
        "uf": "SP",
        "ibge": 3554102,
        "lat": -23.0104,
        "lng": -45.5593
      },
      {
        "nome": "Tejupá",
        "uf": "SP",
        "ibge": 3554201,
        "lat": -23.3425,
        "lng": -49.3722
      },
      {
        "nome": "Teodoro Sampaio",
        "uf": "SP",
        "ibge": 3554300,
        "lat": -22.5299,
        "lng": -52.1682
      },
      {
        "nome": "Terra Roxa",
        "uf": "SP",
        "ibge": 3554409,
        "lat": -20.787,
        "lng": -48.3314
      },
      {
        "nome": "Tietê",
        "uf": "SP",
        "ibge": 3554508,
        "lat": -23.1101,
        "lng": -47.7164
      },
      {
        "nome": "Timburi",
        "uf": "SP",
        "ibge": 3554607,
        "lat": -23.2057,
        "lng": -49.6096
      },
      {
        "nome": "Torre de Pedra",
        "uf": "SP",
        "ibge": 3554656,
        "lat": -23.2462,
        "lng": -48.1955
      },
      {
        "nome": "Torrinha",
        "uf": "SP",
        "ibge": 3554706,
        "lat": -22.4237,
        "lng": -48.1731
      },
      {
        "nome": "Trabiju",
        "uf": "SP",
        "ibge": 3554755,
        "lat": -22.0388,
        "lng": -48.3342
      },
      {
        "nome": "Tremembé",
        "uf": "SP",
        "ibge": 3554805,
        "lat": -22.9571,
        "lng": -45.5475
      },
      {
        "nome": "Três Fronteiras",
        "uf": "SP",
        "ibge": 3554904,
        "lat": -20.2344,
        "lng": -50.8905
      },
      {
        "nome": "Tuiuti",
        "uf": "SP",
        "ibge": 3554953,
        "lat": -22.8193,
        "lng": -46.6937
      },
      {
        "nome": "Tupã",
        "uf": "SP",
        "ibge": 3555000,
        "lat": -21.9335,
        "lng": -50.5191
      },
      {
        "nome": "Tupi Paulista",
        "uf": "SP",
        "ibge": 3555109,
        "lat": -21.3825,
        "lng": -51.575
      },
      {
        "nome": "Turiúba",
        "uf": "SP",
        "ibge": 3555208,
        "lat": -20.9428,
        "lng": -50.1135
      },
      {
        "nome": "Turmalina",
        "uf": "SP",
        "ibge": 3555307,
        "lat": -20.0486,
        "lng": -50.4792
      },
      {
        "nome": "Ubarana",
        "uf": "SP",
        "ibge": 3555356,
        "lat": -21.165,
        "lng": -49.7198
      },
      {
        "nome": "Ubatuba",
        "uf": "SP",
        "ibge": 3555406,
        "lat": -23.4332,
        "lng": -45.0834
      },
      {
        "nome": "Ubirajara",
        "uf": "SP",
        "ibge": 3555505,
        "lat": -22.5272,
        "lng": -49.6613
      },
      {
        "nome": "Uchoa",
        "uf": "SP",
        "ibge": 3555604,
        "lat": -20.9511,
        "lng": -49.1713
      },
      {
        "nome": "União Paulista",
        "uf": "SP",
        "ibge": 3555703,
        "lat": -20.8862,
        "lng": -49.9025
      },
      {
        "nome": "Urânia",
        "uf": "SP",
        "ibge": 3555802,
        "lat": -20.2455,
        "lng": -50.6455
      },
      {
        "nome": "Uru",
        "uf": "SP",
        "ibge": 3555901,
        "lat": -21.7866,
        "lng": -49.2848
      },
      {
        "nome": "Urupês",
        "uf": "SP",
        "ibge": 3556008,
        "lat": -21.2032,
        "lng": -49.2931
      },
      {
        "nome": "Valentim Gentil",
        "uf": "SP",
        "ibge": 3556107,
        "lat": -20.4217,
        "lng": -50.0889
      },
      {
        "nome": "Valinhos",
        "uf": "SP",
        "ibge": 3556206,
        "lat": -22.9698,
        "lng": -46.9974
      },
      {
        "nome": "Valparaíso",
        "uf": "SP",
        "ibge": 3556305,
        "lat": -21.2229,
        "lng": -50.8699
      },
      {
        "nome": "Vargem",
        "uf": "SP",
        "ibge": 3556354,
        "lat": -22.887,
        "lng": -46.4124
      },
      {
        "nome": "Vargem Grande do Sul",
        "uf": "SP",
        "ibge": 3556404,
        "lat": -21.8322,
        "lng": -46.8913
      },
      {
        "nome": "Vargem Grande Paulista",
        "uf": "SP",
        "ibge": 3556453,
        "lat": -23.5993,
        "lng": -47.022
      },
      {
        "nome": "Várzea Paulista",
        "uf": "SP",
        "ibge": 3556503,
        "lat": -23.2136,
        "lng": -46.8234
      },
      {
        "nome": "Vera Cruz",
        "uf": "SP",
        "ibge": 3556602,
        "lat": -22.2183,
        "lng": -49.8207
      },
      {
        "nome": "Vinhedo",
        "uf": "SP",
        "ibge": 3556701,
        "lat": -23.0302,
        "lng": -46.9833
      },
      {
        "nome": "Viradouro",
        "uf": "SP",
        "ibge": 3556800,
        "lat": -20.8734,
        "lng": -48.293
      },
      {
        "nome": "Vista Alegre do Alto",
        "uf": "SP",
        "ibge": 3556909,
        "lat": -21.1692,
        "lng": -48.6284
      },
      {
        "nome": "Vitória Brasil",
        "uf": "SP",
        "ibge": 3556958,
        "lat": -20.1956,
        "lng": -50.4875
      },
      {
        "nome": "Votorantim",
        "uf": "SP",
        "ibge": 3557006,
        "lat": -23.5446,
        "lng": -47.4388
      },
      {
        "nome": "Votuporanga",
        "uf": "SP",
        "ibge": 3557105,
        "lat": -20.4237,
        "lng": -49.9781
      },
      {
        "nome": "Zacarias",
        "uf": "SP",
        "ibge": 3557154,
        "lat": -21.0506,
        "lng": -50.0552
      }
    ],
    "capital": {
      "nome": "São Paulo",
      "uf": "SP",
      "ibge": 3550308,
      "lat": -23.5329,
      "lng": -46.6395
    }
  },
  "PR": {
    "nome": "Paraná",
    "ibge": 41,
    "cidades": [
      {
        "nome": "Abatiá",
        "uf": "PR",
        "ibge": 4100103,
        "lat": -23.3049,
        "lng": -50.3133
      },
      {
        "nome": "Adrianópolis",
        "uf": "PR",
        "ibge": 4100202,
        "lat": -24.6606,
        "lng": -48.9922
      },
      {
        "nome": "Agudos do Sul",
        "uf": "PR",
        "ibge": 4100301,
        "lat": -25.9899,
        "lng": -49.3343
      },
      {
        "nome": "Almirante Tamandaré",
        "uf": "PR",
        "ibge": 4100400,
        "lat": -25.3188,
        "lng": -49.3037
      },
      {
        "nome": "Altamira do Paraná",
        "uf": "PR",
        "ibge": 4100459,
        "lat": -24.7983,
        "lng": -52.7128
      },
      {
        "nome": "Alto Paraíso",
        "uf": "PR",
        "ibge": 4128625,
        "lat": -26.1146,
        "lng": -52.7469
      },
      {
        "nome": "Alto Paraná",
        "uf": "PR",
        "ibge": 4100608,
        "lat": -23.1312,
        "lng": -52.3189
      },
      {
        "nome": "Alto Piquiri",
        "uf": "PR",
        "ibge": 4100707,
        "lat": -24.0224,
        "lng": -53.44
      },
      {
        "nome": "Altônia",
        "uf": "PR",
        "ibge": 4100509,
        "lat": -23.8759,
        "lng": -53.8958
      },
      {
        "nome": "Alvorada do Sul",
        "uf": "PR",
        "ibge": 4100806,
        "lat": -22.7813,
        "lng": -51.2297
      },
      {
        "nome": "Amaporã",
        "uf": "PR",
        "ibge": 4100905,
        "lat": -23.0943,
        "lng": -52.7866
      },
      {
        "nome": "Ampére",
        "uf": "PR",
        "ibge": 4101002,
        "lat": -25.9168,
        "lng": -53.4686
      },
      {
        "nome": "Anahy",
        "uf": "PR",
        "ibge": 4101051,
        "lat": -24.6449,
        "lng": -53.1332
      },
      {
        "nome": "Andirá",
        "uf": "PR",
        "ibge": 4101101,
        "lat": -23.0533,
        "lng": -50.2304
      },
      {
        "nome": "Ângulo",
        "uf": "PR",
        "ibge": 4101150,
        "lat": -23.1946,
        "lng": -51.9154
      },
      {
        "nome": "Antonina",
        "uf": "PR",
        "ibge": 4101200,
        "lat": -25.4386,
        "lng": -48.7191
      },
      {
        "nome": "Antônio Olinto",
        "uf": "PR",
        "ibge": 4101309,
        "lat": -25.9804,
        "lng": -50.1972
      },
      {
        "nome": "Apucarana",
        "uf": "PR",
        "ibge": 4101408,
        "lat": -23.55,
        "lng": -51.4635
      },
      {
        "nome": "Arapongas",
        "uf": "PR",
        "ibge": 4101507,
        "lat": -23.4153,
        "lng": -51.4259
      },
      {
        "nome": "Arapoti",
        "uf": "PR",
        "ibge": 4101606,
        "lat": -24.1548,
        "lng": -49.8285
      },
      {
        "nome": "Arapuã",
        "uf": "PR",
        "ibge": 4101655,
        "lat": -24.3132,
        "lng": -51.7856
      },
      {
        "nome": "Araruna",
        "uf": "PR",
        "ibge": 4101705,
        "lat": -23.9315,
        "lng": -52.5021
      },
      {
        "nome": "Araucária",
        "uf": "PR",
        "ibge": 4101804,
        "lat": -25.5859,
        "lng": -49.4047
      },
      {
        "nome": "Ariranha do Ivaí",
        "uf": "PR",
        "ibge": 4101853,
        "lat": -24.3857,
        "lng": -51.5839
      },
      {
        "nome": "Assaí",
        "uf": "PR",
        "ibge": 4101903,
        "lat": -23.3697,
        "lng": -50.8459
      },
      {
        "nome": "Assis Chateaubriand",
        "uf": "PR",
        "ibge": 4102000,
        "lat": -24.4168,
        "lng": -53.5213
      },
      {
        "nome": "Astorga",
        "uf": "PR",
        "ibge": 4102109,
        "lat": -23.2318,
        "lng": -51.6668
      },
      {
        "nome": "Atalaia",
        "uf": "PR",
        "ibge": 4102208,
        "lat": -23.1517,
        "lng": -52.0551
      },
      {
        "nome": "Balsa Nova",
        "uf": "PR",
        "ibge": 4102307,
        "lat": -25.5804,
        "lng": -49.6291
      },
      {
        "nome": "Bandeirantes",
        "uf": "PR",
        "ibge": 4102406,
        "lat": -23.1078,
        "lng": -50.3704
      },
      {
        "nome": "Barbosa Ferraz",
        "uf": "PR",
        "ibge": 4102505,
        "lat": -24.0334,
        "lng": -52.004
      },
      {
        "nome": "Barra do Jacaré",
        "uf": "PR",
        "ibge": 4102703,
        "lat": -23.116,
        "lng": -50.1842
      },
      {
        "nome": "Barracão",
        "uf": "PR",
        "ibge": 4102604,
        "lat": -26.2502,
        "lng": -53.6324
      },
      {
        "nome": "Bela Vista da Caroba",
        "uf": "PR",
        "ibge": 4102752,
        "lat": -25.8842,
        "lng": -53.6725
      },
      {
        "nome": "Bela Vista do Paraíso",
        "uf": "PR",
        "ibge": 4102802,
        "lat": -22.9937,
        "lng": -51.1927
      },
      {
        "nome": "Bituruna",
        "uf": "PR",
        "ibge": 4102901,
        "lat": -26.1607,
        "lng": -51.5518
      },
      {
        "nome": "Boa Esperança",
        "uf": "PR",
        "ibge": 4103008,
        "lat": -24.2467,
        "lng": -52.7876
      },
      {
        "nome": "Boa Esperança do Iguaçu",
        "uf": "PR",
        "ibge": 4103024,
        "lat": -25.6324,
        "lng": -53.2108
      },
      {
        "nome": "Boa Ventura de São Roque",
        "uf": "PR",
        "ibge": 4103040,
        "lat": -24.8688,
        "lng": -51.6276
      },
      {
        "nome": "Boa Vista da Aparecida",
        "uf": "PR",
        "ibge": 4103057,
        "lat": -25.4308,
        "lng": -53.4117
      },
      {
        "nome": "Bocaiúva do Sul",
        "uf": "PR",
        "ibge": 4103107,
        "lat": -25.2066,
        "lng": -49.1141
      },
      {
        "nome": "Bom Jesus do Sul",
        "uf": "PR",
        "ibge": 4103156,
        "lat": -26.1958,
        "lng": -53.5955
      },
      {
        "nome": "Bom Sucesso",
        "uf": "PR",
        "ibge": 4103206,
        "lat": -23.7063,
        "lng": -51.7671
      },
      {
        "nome": "Bom Sucesso do Sul",
        "uf": "PR",
        "ibge": 4103222,
        "lat": -26.0731,
        "lng": -52.8353
      },
      {
        "nome": "Borrazópolis",
        "uf": "PR",
        "ibge": 4103305,
        "lat": -23.9366,
        "lng": -51.5875
      },
      {
        "nome": "Braganey",
        "uf": "PR",
        "ibge": 4103354,
        "lat": -24.8173,
        "lng": -53.1218
      },
      {
        "nome": "Brasilândia do Sul",
        "uf": "PR",
        "ibge": 4103370,
        "lat": -24.1978,
        "lng": -53.5275
      },
      {
        "nome": "Cafeara",
        "uf": "PR",
        "ibge": 4103404,
        "lat": -22.789,
        "lng": -51.7142
      },
      {
        "nome": "Cafelândia",
        "uf": "PR",
        "ibge": 4103453,
        "lat": -24.6189,
        "lng": -53.3207
      },
      {
        "nome": "Cafezal do Sul",
        "uf": "PR",
        "ibge": 4103479,
        "lat": -23.9005,
        "lng": -53.5124
      },
      {
        "nome": "Califórnia",
        "uf": "PR",
        "ibge": 4103503,
        "lat": -23.6566,
        "lng": -51.3574
      },
      {
        "nome": "Cambará",
        "uf": "PR",
        "ibge": 4103602,
        "lat": -23.0423,
        "lng": -50.0753
      },
      {
        "nome": "Cambé",
        "uf": "PR",
        "ibge": 4103701,
        "lat": -23.2766,
        "lng": -51.2798
      },
      {
        "nome": "Cambira",
        "uf": "PR",
        "ibge": 4103800,
        "lat": -23.589,
        "lng": -51.5792
      },
      {
        "nome": "Campina da Lagoa",
        "uf": "PR",
        "ibge": 4103909,
        "lat": -24.5893,
        "lng": -52.7976
      },
      {
        "nome": "Campina do Simão",
        "uf": "PR",
        "ibge": 4103958,
        "lat": -25.0802,
        "lng": -51.8237
      },
      {
        "nome": "Campina Grande do Sul",
        "uf": "PR",
        "ibge": 4104006,
        "lat": -25.3044,
        "lng": -49.0551
      },
      {
        "nome": "Campo Bonito",
        "uf": "PR",
        "ibge": 4104055,
        "lat": -25.0294,
        "lng": -52.9939
      },
      {
        "nome": "Campo do Tenente",
        "uf": "PR",
        "ibge": 4104105,
        "lat": -25.98,
        "lng": -49.6844
      },
      {
        "nome": "Campo Largo",
        "uf": "PR",
        "ibge": 4104204,
        "lat": -25.4525,
        "lng": -49.529
      },
      {
        "nome": "Campo Magro",
        "uf": "PR",
        "ibge": 4104253,
        "lat": -25.3687,
        "lng": -49.4501
      },
      {
        "nome": "Campo Mourão",
        "uf": "PR",
        "ibge": 4104303,
        "lat": -24.0463,
        "lng": -52.378
      },
      {
        "nome": "Cândido de Abreu",
        "uf": "PR",
        "ibge": 4104402,
        "lat": -24.5649,
        "lng": -51.3372
      },
      {
        "nome": "Candói",
        "uf": "PR",
        "ibge": 4104428,
        "lat": -25.5758,
        "lng": -52.0409
      },
      {
        "nome": "Cantagalo",
        "uf": "PR",
        "ibge": 4104451,
        "lat": -25.3734,
        "lng": -52.1198
      },
      {
        "nome": "Capanema",
        "uf": "PR",
        "ibge": 4104501,
        "lat": -25.6691,
        "lng": -53.8055
      },
      {
        "nome": "Capitão Leônidas Marques",
        "uf": "PR",
        "ibge": 4104600,
        "lat": -25.4816,
        "lng": -53.6112
      },
      {
        "nome": "Carambeí",
        "uf": "PR",
        "ibge": 4104659,
        "lat": -24.9152,
        "lng": -50.0986
      },
      {
        "nome": "Carlópolis",
        "uf": "PR",
        "ibge": 4104709,
        "lat": -23.4269,
        "lng": -49.7235
      },
      {
        "nome": "Cascavel",
        "uf": "PR",
        "ibge": 4104808,
        "lat": -24.9573,
        "lng": -53.459
      },
      {
        "nome": "Castro",
        "uf": "PR",
        "ibge": 4104907,
        "lat": -24.7891,
        "lng": -50.0108
      },
      {
        "nome": "Catanduvas",
        "uf": "PR",
        "ibge": 4105003,
        "lat": -25.2044,
        "lng": -53.1548
      },
      {
        "nome": "Centenário do Sul",
        "uf": "PR",
        "ibge": 4105102,
        "lat": -22.8188,
        "lng": -51.5973
      },
      {
        "nome": "Cerro Azul",
        "uf": "PR",
        "ibge": 4105201,
        "lat": -26.0891,
        "lng": -52.8691
      },
      {
        "nome": "Céu Azul",
        "uf": "PR",
        "ibge": 4105300,
        "lat": -25.1489,
        "lng": -53.8415
      },
      {
        "nome": "Chopinzinho",
        "uf": "PR",
        "ibge": 4105409,
        "lat": -25.8515,
        "lng": -52.5173
      },
      {
        "nome": "Cianorte",
        "uf": "PR",
        "ibge": 4105508,
        "lat": -23.6599,
        "lng": -52.6054
      },
      {
        "nome": "Cidade Gaúcha",
        "uf": "PR",
        "ibge": 4105607,
        "lat": -23.3772,
        "lng": -52.9436
      },
      {
        "nome": "Clevelândia",
        "uf": "PR",
        "ibge": 4105706,
        "lat": -26.4043,
        "lng": -52.3508
      },
      {
        "nome": "Colombo",
        "uf": "PR",
        "ibge": 4105805,
        "lat": -25.2925,
        "lng": -49.2262
      },
      {
        "nome": "Colorado",
        "uf": "PR",
        "ibge": 4105904,
        "lat": -22.8374,
        "lng": -51.9743
      },
      {
        "nome": "Congonhinhas",
        "uf": "PR",
        "ibge": 4106001,
        "lat": -23.5493,
        "lng": -50.5569
      },
      {
        "nome": "Conselheiro Mairinck",
        "uf": "PR",
        "ibge": 4106100,
        "lat": -23.623,
        "lng": -50.1707
      },
      {
        "nome": "Contenda",
        "uf": "PR",
        "ibge": 4106209,
        "lat": -25.6788,
        "lng": -49.535
      },
      {
        "nome": "Corbélia",
        "uf": "PR",
        "ibge": 4106308,
        "lat": -24.7971,
        "lng": -53.3006
      },
      {
        "nome": "Cornélio Procópio",
        "uf": "PR",
        "ibge": 4106407,
        "lat": -23.1829,
        "lng": -50.6498
      },
      {
        "nome": "Coronel Domingos Soares",
        "uf": "PR",
        "ibge": 4106456,
        "lat": -26.2277,
        "lng": -52.0356
      },
      {
        "nome": "Coronel Vivida",
        "uf": "PR",
        "ibge": 4106506,
        "lat": -25.9767,
        "lng": -52.5641
      },
      {
        "nome": "Corumbataí do Sul",
        "uf": "PR",
        "ibge": 4106555,
        "lat": -24.101,
        "lng": -52.1177
      },
      {
        "nome": "Cruz Machado",
        "uf": "PR",
        "ibge": 4106803,
        "lat": -26.0166,
        "lng": -51.343
      },
      {
        "nome": "Cruzeiro do Iguaçu",
        "uf": "PR",
        "ibge": 4106571,
        "lat": -25.6192,
        "lng": -53.1285
      },
      {
        "nome": "Cruzeiro do Oeste",
        "uf": "PR",
        "ibge": 4106605,
        "lat": -23.7799,
        "lng": -53.0774
      },
      {
        "nome": "Cruzeiro do Sul",
        "uf": "PR",
        "ibge": 4106704,
        "lat": -22.9624,
        "lng": -52.1622
      },
      {
        "nome": "Cruzmaltina",
        "uf": "PR",
        "ibge": 4106852,
        "lat": -24.0132,
        "lng": -51.4563
      },
      {
        "nome": "Curiúva",
        "uf": "PR",
        "ibge": 4107009,
        "lat": -24.0362,
        "lng": -50.4576
      },
      {
        "nome": "Diamante D'Oeste",
        "uf": "PR",
        "ibge": 4107157,
        "lat": -24.9419,
        "lng": -54.1052
      },
      {
        "nome": "Diamante do Norte",
        "uf": "PR",
        "ibge": 4107108,
        "lat": -22.655,
        "lng": -52.8617
      },
      {
        "nome": "Diamante do Sul",
        "uf": "PR",
        "ibge": 4107124,
        "lat": -25.035,
        "lng": -52.6768
      },
      {
        "nome": "Dois Vizinhos",
        "uf": "PR",
        "ibge": 4107207,
        "lat": -25.7407,
        "lng": -53.057
      },
      {
        "nome": "Douradina",
        "uf": "PR",
        "ibge": 4107256,
        "lat": -23.3807,
        "lng": -53.2918
      },
      {
        "nome": "Doutor Camargo",
        "uf": "PR",
        "ibge": 4107306,
        "lat": -23.5582,
        "lng": -52.2178
      },
      {
        "nome": "Doutor Ulysses",
        "uf": "PR",
        "ibge": 4128633,
        "lat": -24.5665,
        "lng": -49.4219
      },
      {
        "nome": "Enéas Marques",
        "uf": "PR",
        "ibge": 4107405,
        "lat": -25.9445,
        "lng": -53.1659
      },
      {
        "nome": "Engenheiro Beltrão",
        "uf": "PR",
        "ibge": 4107504,
        "lat": -23.797,
        "lng": -52.2659
      },
      {
        "nome": "Entre Rios do Oeste",
        "uf": "PR",
        "ibge": 4107538,
        "lat": -24.7042,
        "lng": -54.2385
      },
      {
        "nome": "Esperança Nova",
        "uf": "PR",
        "ibge": 4107520,
        "lat": -23.7238,
        "lng": -53.811
      },
      {
        "nome": "Espigão Alto do Iguaçu",
        "uf": "PR",
        "ibge": 4107546,
        "lat": -25.4216,
        "lng": -52.8348
      },
      {
        "nome": "Farol",
        "uf": "PR",
        "ibge": 4107553,
        "lat": -24.0958,
        "lng": -52.6217
      },
      {
        "nome": "Faxinal",
        "uf": "PR",
        "ibge": 4107603,
        "lat": -24.0077,
        "lng": -51.3227
      },
      {
        "nome": "Fazenda Rio Grande",
        "uf": "PR",
        "ibge": 4107652,
        "lat": -25.6624,
        "lng": -49.3073
      },
      {
        "nome": "Fênix",
        "uf": "PR",
        "ibge": 4107702,
        "lat": -23.9135,
        "lng": -51.9805
      },
      {
        "nome": "Fernandes Pinheiro",
        "uf": "PR",
        "ibge": 4107736,
        "lat": -25.4107,
        "lng": -50.5456
      },
      {
        "nome": "Figueira",
        "uf": "PR",
        "ibge": 4107751,
        "lat": -23.8455,
        "lng": -50.4031
      },
      {
        "nome": "Flor da Serra do Sul",
        "uf": "PR",
        "ibge": 4107850,
        "lat": -26.2523,
        "lng": -53.3092
      },
      {
        "nome": "Floraí",
        "uf": "PR",
        "ibge": 4107801,
        "lat": -23.3178,
        "lng": -52.3029
      },
      {
        "nome": "Floresta",
        "uf": "PR",
        "ibge": 4107900,
        "lat": -23.6031,
        "lng": -52.0807
      },
      {
        "nome": "Florestópolis",
        "uf": "PR",
        "ibge": 4108007,
        "lat": -22.8623,
        "lng": -51.3882
      },
      {
        "nome": "Flórida",
        "uf": "PR",
        "ibge": 4108106,
        "lat": -23.0847,
        "lng": -51.9546
      },
      {
        "nome": "Formosa do Oeste",
        "uf": "PR",
        "ibge": 4108205,
        "lat": -24.2951,
        "lng": -53.3114
      },
      {
        "nome": "Foz do Iguaçu",
        "uf": "PR",
        "ibge": 4108304,
        "lat": -25.5427,
        "lng": -54.5827
      },
      {
        "nome": "Foz do Jordão",
        "uf": "PR",
        "ibge": 4108452,
        "lat": -25.7371,
        "lng": -52.1188
      },
      {
        "nome": "Francisco Alves",
        "uf": "PR",
        "ibge": 4108320,
        "lat": -24.0667,
        "lng": -53.8461
      },
      {
        "nome": "Francisco Beltrão",
        "uf": "PR",
        "ibge": 4108403,
        "lat": -26.0817,
        "lng": -53.0535
      },
      {
        "nome": "General Carneiro",
        "uf": "PR",
        "ibge": 4108502,
        "lat": -26.425,
        "lng": -51.3172
      },
      {
        "nome": "Godoy Moreira",
        "uf": "PR",
        "ibge": 4108551,
        "lat": -24.173,
        "lng": -51.9246
      },
      {
        "nome": "Goioerê",
        "uf": "PR",
        "ibge": 4108601,
        "lat": -24.1835,
        "lng": -53.0248
      },
      {
        "nome": "Goioxim",
        "uf": "PR",
        "ibge": 4108650,
        "lat": -25.1927,
        "lng": -51.9911
      },
      {
        "nome": "Grandes Rios",
        "uf": "PR",
        "ibge": 4108700,
        "lat": -24.1466,
        "lng": -51.5094
      },
      {
        "nome": "Guaíra",
        "uf": "PR",
        "ibge": 4108809,
        "lat": -24.085,
        "lng": -54.2573
      },
      {
        "nome": "Guairaçá",
        "uf": "PR",
        "ibge": 4108908,
        "lat": -22.932,
        "lng": -52.6906
      },
      {
        "nome": "Guamiranga",
        "uf": "PR",
        "ibge": 4108957,
        "lat": -25.1912,
        "lng": -50.8021
      },
      {
        "nome": "Guapirama",
        "uf": "PR",
        "ibge": 4109005,
        "lat": -23.5203,
        "lng": -50.0407
      },
      {
        "nome": "Guaporema",
        "uf": "PR",
        "ibge": 4109104,
        "lat": -23.3402,
        "lng": -52.7786
      },
      {
        "nome": "Guaraci",
        "uf": "PR",
        "ibge": 4109203,
        "lat": -22.9694,
        "lng": -51.6504
      },
      {
        "nome": "Guaraniaçu",
        "uf": "PR",
        "ibge": 4109302,
        "lat": -25.0968,
        "lng": -52.8755
      },
      {
        "nome": "Guarapuava",
        "uf": "PR",
        "ibge": 4109401,
        "lat": -25.3902,
        "lng": -51.4623
      },
      {
        "nome": "Guaraqueçaba",
        "uf": "PR",
        "ibge": 4109500,
        "lat": -25.3071,
        "lng": -48.3204
      },
      {
        "nome": "Guaratuba",
        "uf": "PR",
        "ibge": 4109609,
        "lat": -25.8817,
        "lng": -48.5752
      },
      {
        "nome": "Honório Serpa",
        "uf": "PR",
        "ibge": 4109658,
        "lat": -26.139,
        "lng": -52.3848
      },
      {
        "nome": "Ibaiti",
        "uf": "PR",
        "ibge": 4109708,
        "lat": -23.8478,
        "lng": -50.1932
      },
      {
        "nome": "Ibema",
        "uf": "PR",
        "ibge": 4109757,
        "lat": -25.1193,
        "lng": -53.0072
      },
      {
        "nome": "Ibiporã",
        "uf": "PR",
        "ibge": 4109807,
        "lat": -23.2659,
        "lng": -51.0522
      },
      {
        "nome": "Icaraíma",
        "uf": "PR",
        "ibge": 4109906,
        "lat": -23.3944,
        "lng": -53.615
      },
      {
        "nome": "Iguaraçu",
        "uf": "PR",
        "ibge": 4110003,
        "lat": -23.1949,
        "lng": -51.8256
      },
      {
        "nome": "Iguatu",
        "uf": "PR",
        "ibge": 4110052,
        "lat": -24.7153,
        "lng": -53.0827
      },
      {
        "nome": "Imbaú",
        "uf": "PR",
        "ibge": 4110078,
        "lat": -24.448,
        "lng": -50.7533
      },
      {
        "nome": "Imbituva",
        "uf": "PR",
        "ibge": 4110102,
        "lat": -25.2285,
        "lng": -50.5989
      },
      {
        "nome": "Inácio Martins",
        "uf": "PR",
        "ibge": 4110201,
        "lat": -25.5704,
        "lng": -51.0769
      },
      {
        "nome": "Inajá",
        "uf": "PR",
        "ibge": 4110300,
        "lat": -22.7509,
        "lng": -52.1995
      },
      {
        "nome": "Indianópolis",
        "uf": "PR",
        "ibge": 4110409,
        "lat": -23.4762,
        "lng": -52.6989
      },
      {
        "nome": "Ipiranga",
        "uf": "PR",
        "ibge": 4110508,
        "lat": -25.0238,
        "lng": -50.5794
      },
      {
        "nome": "Iporã",
        "uf": "PR",
        "ibge": 4110607,
        "lat": -24.0083,
        "lng": -53.706
      },
      {
        "nome": "Iracema do Oeste",
        "uf": "PR",
        "ibge": 4110656,
        "lat": -24.4262,
        "lng": -53.3528
      },
      {
        "nome": "Irati",
        "uf": "PR",
        "ibge": 4110706,
        "lat": -25.4697,
        "lng": -50.6493
      },
      {
        "nome": "Iretama",
        "uf": "PR",
        "ibge": 4110805,
        "lat": -24.4253,
        "lng": -52.1012
      },
      {
        "nome": "Itaguajé",
        "uf": "PR",
        "ibge": 4110904,
        "lat": -22.6183,
        "lng": -51.9674
      },
      {
        "nome": "Itaipulândia",
        "uf": "PR",
        "ibge": 4110953,
        "lat": -25.1366,
        "lng": -54.3001
      },
      {
        "nome": "Itambaracá",
        "uf": "PR",
        "ibge": 4111001,
        "lat": -23.0181,
        "lng": -50.4097
      },
      {
        "nome": "Itambé",
        "uf": "PR",
        "ibge": 4111100,
        "lat": -23.6601,
        "lng": -51.9912
      },
      {
        "nome": "Itapejara d'Oeste",
        "uf": "PR",
        "ibge": 4111209,
        "lat": -25.9619,
        "lng": -52.8152
      },
      {
        "nome": "Itaperuçu",
        "uf": "PR",
        "ibge": 4111258,
        "lat": -25.2193,
        "lng": -49.3454
      },
      {
        "nome": "Itaúna do Sul",
        "uf": "PR",
        "ibge": 4111308,
        "lat": -22.7289,
        "lng": -52.8874
      },
      {
        "nome": "Ivaí",
        "uf": "PR",
        "ibge": 4111407,
        "lat": -25.0067,
        "lng": -50.857
      },
      {
        "nome": "Ivaiporã",
        "uf": "PR",
        "ibge": 4111506,
        "lat": -24.2485,
        "lng": -51.6754
      },
      {
        "nome": "Ivaté",
        "uf": "PR",
        "ibge": 4111555,
        "lat": -23.4072,
        "lng": -53.3687
      },
      {
        "nome": "Ivatuba",
        "uf": "PR",
        "ibge": 4111605,
        "lat": -23.6187,
        "lng": -52.2203
      },
      {
        "nome": "Jaboti",
        "uf": "PR",
        "ibge": 4111704,
        "lat": -23.7435,
        "lng": -50.0729
      },
      {
        "nome": "Jacarezinho",
        "uf": "PR",
        "ibge": 4111803,
        "lat": -23.1591,
        "lng": -49.9739
      },
      {
        "nome": "Jaguapitã",
        "uf": "PR",
        "ibge": 4111902,
        "lat": -23.1104,
        "lng": -51.5342
      },
      {
        "nome": "Jaguariaíva",
        "uf": "PR",
        "ibge": 4112009,
        "lat": -24.2439,
        "lng": -49.7066
      },
      {
        "nome": "Jandaia do Sul",
        "uf": "PR",
        "ibge": 4112108,
        "lat": -23.6011,
        "lng": -51.6448
      },
      {
        "nome": "Janiópolis",
        "uf": "PR",
        "ibge": 4112207,
        "lat": -24.1401,
        "lng": -52.7784
      },
      {
        "nome": "Japira",
        "uf": "PR",
        "ibge": 4112306,
        "lat": -23.8142,
        "lng": -50.1422
      },
      {
        "nome": "Japurá",
        "uf": "PR",
        "ibge": 4112405,
        "lat": -23.4693,
        "lng": -52.5557
      },
      {
        "nome": "Jardim Alegre",
        "uf": "PR",
        "ibge": 4112504,
        "lat": -24.1809,
        "lng": -51.6902
      },
      {
        "nome": "Jardim Olinda",
        "uf": "PR",
        "ibge": 4112603,
        "lat": -22.5523,
        "lng": -52.0503
      },
      {
        "nome": "Jataizinho",
        "uf": "PR",
        "ibge": 4112702,
        "lat": -23.2578,
        "lng": -50.9777
      },
      {
        "nome": "Jesuítas",
        "uf": "PR",
        "ibge": 4112751,
        "lat": -24.3839,
        "lng": -53.3849
      },
      {
        "nome": "Joaquim Távora",
        "uf": "PR",
        "ibge": 4112801,
        "lat": -23.4987,
        "lng": -49.909
      },
      {
        "nome": "Jundiaí do Sul",
        "uf": "PR",
        "ibge": 4112900,
        "lat": -23.4357,
        "lng": -50.2496
      },
      {
        "nome": "Juranda",
        "uf": "PR",
        "ibge": 4112959,
        "lat": -24.4209,
        "lng": -52.8413
      },
      {
        "nome": "Jussara",
        "uf": "PR",
        "ibge": 4113007,
        "lat": -23.6219,
        "lng": -52.4693
      },
      {
        "nome": "Kaloré",
        "uf": "PR",
        "ibge": 4113106,
        "lat": -23.8188,
        "lng": -51.6687
      },
      {
        "nome": "Lapa",
        "uf": "PR",
        "ibge": 4113205,
        "lat": -25.7671,
        "lng": -49.7168
      },
      {
        "nome": "Laranjal",
        "uf": "PR",
        "ibge": 4113254,
        "lat": -24.8862,
        "lng": -52.47
      },
      {
        "nome": "Laranjeiras do Sul",
        "uf": "PR",
        "ibge": 4113304,
        "lat": -25.4077,
        "lng": -52.4109
      },
      {
        "nome": "Leópolis",
        "uf": "PR",
        "ibge": 4113403,
        "lat": -23.0818,
        "lng": -50.7511
      },
      {
        "nome": "Lidianópolis",
        "uf": "PR",
        "ibge": 4113429,
        "lat": -24.11,
        "lng": -51.6506
      },
      {
        "nome": "Lindoeste",
        "uf": "PR",
        "ibge": 4113452,
        "lat": -25.2596,
        "lng": -53.5733
      },
      {
        "nome": "Loanda",
        "uf": "PR",
        "ibge": 4113502,
        "lat": -22.9232,
        "lng": -53.1362
      },
      {
        "nome": "Lobato",
        "uf": "PR",
        "ibge": 4113601,
        "lat": -23.0058,
        "lng": -51.9524
      },
      {
        "nome": "Londrina",
        "uf": "PR",
        "ibge": 4113700,
        "lat": -23.304,
        "lng": -51.1691
      },
      {
        "nome": "Luiziana",
        "uf": "PR",
        "ibge": 4113734,
        "lat": -24.2853,
        "lng": -52.269
      },
      {
        "nome": "Lunardelli",
        "uf": "PR",
        "ibge": 4113759,
        "lat": -24.0821,
        "lng": -51.7368
      },
      {
        "nome": "Lupionópolis",
        "uf": "PR",
        "ibge": 4113809,
        "lat": -22.755,
        "lng": -51.6601
      },
      {
        "nome": "Mallet",
        "uf": "PR",
        "ibge": 4113908,
        "lat": -25.8806,
        "lng": -50.8173
      },
      {
        "nome": "Mamborê",
        "uf": "PR",
        "ibge": 4114005,
        "lat": -24.317,
        "lng": -52.5271
      },
      {
        "nome": "Mandaguaçu",
        "uf": "PR",
        "ibge": 4114104,
        "lat": -23.3458,
        "lng": -52.0944
      },
      {
        "nome": "Mandaguari",
        "uf": "PR",
        "ibge": 4114203,
        "lat": -23.5446,
        "lng": -51.671
      },
      {
        "nome": "Mandirituba",
        "uf": "PR",
        "ibge": 4114302,
        "lat": -25.777,
        "lng": -49.3282
      },
      {
        "nome": "Manfrinópolis",
        "uf": "PR",
        "ibge": 4114351,
        "lat": -26.1441,
        "lng": -53.3113
      },
      {
        "nome": "Mangueirinha",
        "uf": "PR",
        "ibge": 4114401,
        "lat": -25.9421,
        "lng": -52.1743
      },
      {
        "nome": "Manoel Ribas",
        "uf": "PR",
        "ibge": 4114500,
        "lat": -24.5144,
        "lng": -51.6658
      },
      {
        "nome": "Marechal Cândido Rondon",
        "uf": "PR",
        "ibge": 4114609,
        "lat": -24.557,
        "lng": -54.0571
      },
      {
        "nome": "Maria Helena",
        "uf": "PR",
        "ibge": 4114708,
        "lat": -23.6158,
        "lng": -53.2053
      },
      {
        "nome": "Marialva",
        "uf": "PR",
        "ibge": 4114807,
        "lat": -23.4843,
        "lng": -51.7928
      },
      {
        "nome": "Marilândia do Sul",
        "uf": "PR",
        "ibge": 4114906,
        "lat": -23.7425,
        "lng": -51.3137
      },
      {
        "nome": "Marilena",
        "uf": "PR",
        "ibge": 4115002,
        "lat": -22.7336,
        "lng": -53.0402
      },
      {
        "nome": "Mariluz",
        "uf": "PR",
        "ibge": 4115101,
        "lat": -24.0089,
        "lng": -53.1432
      },
      {
        "nome": "Maringá",
        "uf": "PR",
        "ibge": 4115200,
        "lat": -23.4205,
        "lng": -51.9333
      },
      {
        "nome": "Mariópolis",
        "uf": "PR",
        "ibge": 4115309,
        "lat": -26.355,
        "lng": -52.5532
      },
      {
        "nome": "Maripá",
        "uf": "PR",
        "ibge": 4115358,
        "lat": -24.42,
        "lng": -53.8286
      },
      {
        "nome": "Marmeleiro",
        "uf": "PR",
        "ibge": 4115408,
        "lat": -26.1472,
        "lng": -53.0267
      },
      {
        "nome": "Marquinho",
        "uf": "PR",
        "ibge": 4115457,
        "lat": -25.112,
        "lng": -52.2497
      },
      {
        "nome": "Marumbi",
        "uf": "PR",
        "ibge": 4115507,
        "lat": -23.7058,
        "lng": -51.6404
      },
      {
        "nome": "Matelândia",
        "uf": "PR",
        "ibge": 4115606,
        "lat": -25.2496,
        "lng": -53.9935
      },
      {
        "nome": "Matinhos",
        "uf": "PR",
        "ibge": 4115705,
        "lat": -25.8237,
        "lng": -48.549
      },
      {
        "nome": "Mato Rico",
        "uf": "PR",
        "ibge": 4115739,
        "lat": -24.6995,
        "lng": -52.1454
      },
      {
        "nome": "Mauá da Serra",
        "uf": "PR",
        "ibge": 4115754,
        "lat": -23.8988,
        "lng": -51.2277
      },
      {
        "nome": "Medianeira",
        "uf": "PR",
        "ibge": 4115804,
        "lat": -25.2977,
        "lng": -54.0943
      },
      {
        "nome": "Mercedes",
        "uf": "PR",
        "ibge": 4115853,
        "lat": -24.4538,
        "lng": -54.1618
      },
      {
        "nome": "Mirador",
        "uf": "PR",
        "ibge": 4115903,
        "lat": -23.255,
        "lng": -52.7761
      },
      {
        "nome": "Miraselva",
        "uf": "PR",
        "ibge": 4116000,
        "lat": -22.9657,
        "lng": -51.4846
      },
      {
        "nome": "Missal",
        "uf": "PR",
        "ibge": 4116059,
        "lat": -25.0919,
        "lng": -54.2477
      },
      {
        "nome": "Moreira Sales",
        "uf": "PR",
        "ibge": 4116109,
        "lat": -24.0509,
        "lng": -53.0102
      },
      {
        "nome": "Morretes",
        "uf": "PR",
        "ibge": 4116208,
        "lat": -25.4744,
        "lng": -48.8345
      },
      {
        "nome": "Munhoz de Melo",
        "uf": "PR",
        "ibge": 4116307,
        "lat": -23.1487,
        "lng": -51.7737
      },
      {
        "nome": "Nossa Senhora das Graças",
        "uf": "PR",
        "ibge": 4116406,
        "lat": -22.9129,
        "lng": -51.7978
      },
      {
        "nome": "Nova Aliança do Ivaí",
        "uf": "PR",
        "ibge": 4116505,
        "lat": -23.1763,
        "lng": -52.6032
      },
      {
        "nome": "Nova América da Colina",
        "uf": "PR",
        "ibge": 4116604,
        "lat": -23.3308,
        "lng": -50.7168
      },
      {
        "nome": "Nova Aurora",
        "uf": "PR",
        "ibge": 4116703,
        "lat": -24.5289,
        "lng": -53.2575
      },
      {
        "nome": "Nova Cantu",
        "uf": "PR",
        "ibge": 4116802,
        "lat": -24.6723,
        "lng": -52.5661
      },
      {
        "nome": "Nova Esperança",
        "uf": "PR",
        "ibge": 4116901,
        "lat": -23.182,
        "lng": -52.2031
      },
      {
        "nome": "Nova Esperança do Sudoeste",
        "uf": "PR",
        "ibge": 4116950,
        "lat": -25.9004,
        "lng": -53.2618
      },
      {
        "nome": "Nova Fátima",
        "uf": "PR",
        "ibge": 4117008,
        "lat": -23.4324,
        "lng": -50.5665
      },
      {
        "nome": "Nova Laranjeiras",
        "uf": "PR",
        "ibge": 4117057,
        "lat": -25.3054,
        "lng": -52.5447
      },
      {
        "nome": "Nova Londrina",
        "uf": "PR",
        "ibge": 4117107,
        "lat": -22.7639,
        "lng": -52.9868
      },
      {
        "nome": "Nova Olímpia",
        "uf": "PR",
        "ibge": 4117206,
        "lat": -23.4703,
        "lng": -53.0898
      },
      {
        "nome": "Nova Prata do Iguaçu",
        "uf": "PR",
        "ibge": 4117255,
        "lat": -25.6309,
        "lng": -53.3469
      },
      {
        "nome": "Nova Santa Bárbara",
        "uf": "PR",
        "ibge": 4117214,
        "lat": -23.5865,
        "lng": -50.7598
      },
      {
        "nome": "Nova Santa Rosa",
        "uf": "PR",
        "ibge": 4117222,
        "lat": -24.4693,
        "lng": -53.9552
      },
      {
        "nome": "Nova Tebas",
        "uf": "PR",
        "ibge": 4117271,
        "lat": -24.438,
        "lng": -51.9454
      },
      {
        "nome": "Novo Itacolomi",
        "uf": "PR",
        "ibge": 4117297,
        "lat": -23.7631,
        "lng": -51.5079
      },
      {
        "nome": "Ortigueira",
        "uf": "PR",
        "ibge": 4117305,
        "lat": -24.2058,
        "lng": -50.9185
      },
      {
        "nome": "Ourizona",
        "uf": "PR",
        "ibge": 4117404,
        "lat": -23.4053,
        "lng": -52.1964
      },
      {
        "nome": "Ouro Verde do Oeste",
        "uf": "PR",
        "ibge": 4117453,
        "lat": -24.7933,
        "lng": -53.9043
      },
      {
        "nome": "Paiçandu",
        "uf": "PR",
        "ibge": 4117503,
        "lat": -23.4555,
        "lng": -52.046
      },
      {
        "nome": "Palmas",
        "uf": "PR",
        "ibge": 4117602,
        "lat": -26.4839,
        "lng": -51.9888
      },
      {
        "nome": "Palmeira",
        "uf": "PR",
        "ibge": 4117701,
        "lat": -25.4257,
        "lng": -50.007
      },
      {
        "nome": "Palmital",
        "uf": "PR",
        "ibge": 4117800,
        "lat": -24.8853,
        "lng": -52.2029
      },
      {
        "nome": "Palotina",
        "uf": "PR",
        "ibge": 4117909,
        "lat": -24.2868,
        "lng": -53.8404
      },
      {
        "nome": "Paraíso do Norte",
        "uf": "PR",
        "ibge": 4118006,
        "lat": -23.2824,
        "lng": -52.6054
      },
      {
        "nome": "Paranacity",
        "uf": "PR",
        "ibge": 4118105,
        "lat": -22.9297,
        "lng": -52.1549
      },
      {
        "nome": "Paranaguá",
        "uf": "PR",
        "ibge": 4118204,
        "lat": -25.5161,
        "lng": -48.5225
      },
      {
        "nome": "Paranapoema",
        "uf": "PR",
        "ibge": 4118303,
        "lat": -22.6412,
        "lng": -52.0905
      },
      {
        "nome": "Paranavaí",
        "uf": "PR",
        "ibge": 4118402,
        "lat": -23.0816,
        "lng": -52.4617
      },
      {
        "nome": "Pato Bragado",
        "uf": "PR",
        "ibge": 4118451,
        "lat": -24.6271,
        "lng": -54.2265
      },
      {
        "nome": "Pato Branco",
        "uf": "PR",
        "ibge": 4118501,
        "lat": -26.2292,
        "lng": -52.6706
      },
      {
        "nome": "Paula Freitas",
        "uf": "PR",
        "ibge": 4118600,
        "lat": -26.2105,
        "lng": -50.931
      },
      {
        "nome": "Paulo Frontin",
        "uf": "PR",
        "ibge": 4118709,
        "lat": -26.0466,
        "lng": -50.8304
      },
      {
        "nome": "Peabiru",
        "uf": "PR",
        "ibge": 4118808,
        "lat": -23.914,
        "lng": -52.3431
      },
      {
        "nome": "Perobal",
        "uf": "PR",
        "ibge": 4118857,
        "lat": -23.8949,
        "lng": -53.4098
      },
      {
        "nome": "Pérola",
        "uf": "PR",
        "ibge": 4118907,
        "lat": -23.8039,
        "lng": -53.6834
      },
      {
        "nome": "Pérola d'Oeste",
        "uf": "PR",
        "ibge": 4119004,
        "lat": -25.8278,
        "lng": -53.7433
      },
      {
        "nome": "Piên",
        "uf": "PR",
        "ibge": 4119103,
        "lat": -26.0965,
        "lng": -49.4336
      },
      {
        "nome": "Pinhais",
        "uf": "PR",
        "ibge": 4119152,
        "lat": -25.4429,
        "lng": -49.1927
      },
      {
        "nome": "Pinhal de São Bento",
        "uf": "PR",
        "ibge": 4119251,
        "lat": -26.0324,
        "lng": -53.482
      },
      {
        "nome": "Pinhalão",
        "uf": "PR",
        "ibge": 4119202,
        "lat": -23.7982,
        "lng": -50.0536
      },
      {
        "nome": "Pinhão",
        "uf": "PR",
        "ibge": 4119301,
        "lat": -25.6944,
        "lng": -51.6536
      },
      {
        "nome": "Piraí do Sul",
        "uf": "PR",
        "ibge": 4119400,
        "lat": -24.5306,
        "lng": -49.9433
      },
      {
        "nome": "Piraquara",
        "uf": "PR",
        "ibge": 4119509,
        "lat": -25.4422,
        "lng": -49.0624
      },
      {
        "nome": "Pitanga",
        "uf": "PR",
        "ibge": 4119608,
        "lat": -24.7588,
        "lng": -51.7596
      },
      {
        "nome": "Pitangueiras",
        "uf": "PR",
        "ibge": 4119657,
        "lat": -23.2281,
        "lng": -51.5873
      },
      {
        "nome": "Planaltina do Paraná",
        "uf": "PR",
        "ibge": 4119707,
        "lat": -23.0101,
        "lng": -52.9162
      },
      {
        "nome": "Planalto",
        "uf": "PR",
        "ibge": 4119806,
        "lat": -25.7211,
        "lng": -53.7642
      },
      {
        "nome": "Ponta Grossa",
        "uf": "PR",
        "ibge": 4119905,
        "lat": -25.0916,
        "lng": -50.1668
      },
      {
        "nome": "Pontal do Paraná",
        "uf": "PR",
        "ibge": 4119954,
        "lat": -25.6735,
        "lng": -48.5111
      },
      {
        "nome": "Porecatu",
        "uf": "PR",
        "ibge": 4120002,
        "lat": -22.7537,
        "lng": -51.3795
      },
      {
        "nome": "Porto Amazonas",
        "uf": "PR",
        "ibge": 4120101,
        "lat": -25.54,
        "lng": -49.8946
      },
      {
        "nome": "Porto Barreiro",
        "uf": "PR",
        "ibge": 4120150,
        "lat": -25.5477,
        "lng": -52.4067
      },
      {
        "nome": "Porto Rico",
        "uf": "PR",
        "ibge": 4120200,
        "lat": -22.7747,
        "lng": -53.2677
      },
      {
        "nome": "Porto Vitória",
        "uf": "PR",
        "ibge": 4120309,
        "lat": -26.1674,
        "lng": -51.231
      },
      {
        "nome": "Prado Ferreira",
        "uf": "PR",
        "ibge": 4120333,
        "lat": -23.0357,
        "lng": -51.4429
      },
      {
        "nome": "Pranchita",
        "uf": "PR",
        "ibge": 4120358,
        "lat": -26.0209,
        "lng": -53.7397
      },
      {
        "nome": "Presidente Castelo Branco",
        "uf": "PR",
        "ibge": 4120408,
        "lat": -23.2782,
        "lng": -52.1536
      },
      {
        "nome": "Primeiro de Maio",
        "uf": "PR",
        "ibge": 4120507,
        "lat": -22.8517,
        "lng": -51.0293
      },
      {
        "nome": "Prudentópolis",
        "uf": "PR",
        "ibge": 4120606,
        "lat": -25.2111,
        "lng": -50.9754
      },
      {
        "nome": "Quarto Centenário",
        "uf": "PR",
        "ibge": 4120655,
        "lat": -24.2775,
        "lng": -53.0759
      },
      {
        "nome": "Quatiguá",
        "uf": "PR",
        "ibge": 4120705,
        "lat": -23.5671,
        "lng": -49.916
      },
      {
        "nome": "Quatro Barras",
        "uf": "PR",
        "ibge": 4120804,
        "lat": -25.3673,
        "lng": -49.0763
      },
      {
        "nome": "Quatro Pontes",
        "uf": "PR",
        "ibge": 4120853,
        "lat": -24.5752,
        "lng": -53.9759
      },
      {
        "nome": "Quedas do Iguaçu",
        "uf": "PR",
        "ibge": 4120903,
        "lat": -25.4492,
        "lng": -52.9102
      },
      {
        "nome": "Querência do Norte",
        "uf": "PR",
        "ibge": 4121000,
        "lat": -23.0838,
        "lng": -53.483
      },
      {
        "nome": "Quinta do Sol",
        "uf": "PR",
        "ibge": 4121109,
        "lat": -23.8533,
        "lng": -52.1309
      },
      {
        "nome": "Quitandinha",
        "uf": "PR",
        "ibge": 4121208,
        "lat": -25.8734,
        "lng": -49.4973
      },
      {
        "nome": "Ramilândia",
        "uf": "PR",
        "ibge": 4121257,
        "lat": -25.1195,
        "lng": -54.023
      },
      {
        "nome": "Rancho Alegre",
        "uf": "PR",
        "ibge": 4121307,
        "lat": -23.0676,
        "lng": -50.9145
      },
      {
        "nome": "Rancho Alegre D'Oeste",
        "uf": "PR",
        "ibge": 4121356,
        "lat": -24.3065,
        "lng": -52.9552
      },
      {
        "nome": "Realeza",
        "uf": "PR",
        "ibge": 4121406,
        "lat": -25.7711,
        "lng": -53.526
      },
      {
        "nome": "Rebouças",
        "uf": "PR",
        "ibge": 4121505,
        "lat": -25.6232,
        "lng": -50.6877
      },
      {
        "nome": "Renascença",
        "uf": "PR",
        "ibge": 4121604,
        "lat": -26.1588,
        "lng": -52.9703
      },
      {
        "nome": "Reserva",
        "uf": "PR",
        "ibge": 4121703,
        "lat": -24.6492,
        "lng": -50.8466
      },
      {
        "nome": "Reserva do Iguaçu",
        "uf": "PR",
        "ibge": 4121752,
        "lat": -25.8319,
        "lng": -52.0272
      },
      {
        "nome": "Ribeirão Claro",
        "uf": "PR",
        "ibge": 4121802,
        "lat": -23.1941,
        "lng": -49.7597
      },
      {
        "nome": "Ribeirão do Pinhal",
        "uf": "PR",
        "ibge": 4121901,
        "lat": -23.4091,
        "lng": -50.3601
      },
      {
        "nome": "Rio Azul",
        "uf": "PR",
        "ibge": 4122008,
        "lat": -25.7306,
        "lng": -50.7985
      },
      {
        "nome": "Rio Bom",
        "uf": "PR",
        "ibge": 4122107,
        "lat": -23.7606,
        "lng": -51.4122
      },
      {
        "nome": "Rio Bonito do Iguaçu",
        "uf": "PR",
        "ibge": 4122156,
        "lat": -25.4874,
        "lng": -52.5292
      },
      {
        "nome": "Rio Branco do Ivaí",
        "uf": "PR",
        "ibge": 4122172,
        "lat": -24.3244,
        "lng": -51.3187
      },
      {
        "nome": "Rio Branco do Sul",
        "uf": "PR",
        "ibge": 4122206,
        "lat": -25.1892,
        "lng": -49.3115
      },
      {
        "nome": "Rio Negro",
        "uf": "PR",
        "ibge": 4122305,
        "lat": -26.095,
        "lng": -49.7982
      },
      {
        "nome": "Rolândia",
        "uf": "PR",
        "ibge": 4122404,
        "lat": -23.3101,
        "lng": -51.3659
      },
      {
        "nome": "Roncador",
        "uf": "PR",
        "ibge": 4122503,
        "lat": -24.5958,
        "lng": -52.2716
      },
      {
        "nome": "Rondon",
        "uf": "PR",
        "ibge": 4122602,
        "lat": -23.412,
        "lng": -52.7659
      },
      {
        "nome": "Rosário do Ivaí",
        "uf": "PR",
        "ibge": 4122651,
        "lat": -24.2682,
        "lng": -51.272
      },
      {
        "nome": "Sabáudia",
        "uf": "PR",
        "ibge": 4122701,
        "lat": -23.3155,
        "lng": -51.555
      },
      {
        "nome": "Salgado Filho",
        "uf": "PR",
        "ibge": 4122800,
        "lat": -26.1777,
        "lng": -53.3631
      },
      {
        "nome": "Salto do Itararé",
        "uf": "PR",
        "ibge": 4122909,
        "lat": -23.6074,
        "lng": -49.6354
      },
      {
        "nome": "Salto do Lontra",
        "uf": "PR",
        "ibge": 4123006,
        "lat": -25.7813,
        "lng": -53.3135
      },
      {
        "nome": "Santa Amélia",
        "uf": "PR",
        "ibge": 4123105,
        "lat": -23.2654,
        "lng": -50.4288
      },
      {
        "nome": "Santa Cecília do Pavão",
        "uf": "PR",
        "ibge": 4123204,
        "lat": -23.5201,
        "lng": -50.7835
      },
      {
        "nome": "Santa Cruz de Monte Castelo",
        "uf": "PR",
        "ibge": 4123303,
        "lat": -22.9582,
        "lng": -53.2949
      },
      {
        "nome": "Santa Fé",
        "uf": "PR",
        "ibge": 4123402,
        "lat": -23.04,
        "lng": -51.808
      },
      {
        "nome": "Santa Helena",
        "uf": "PR",
        "ibge": 4123501,
        "lat": -24.8585,
        "lng": -54.336
      },
      {
        "nome": "Santa Inês",
        "uf": "PR",
        "ibge": 4123600,
        "lat": -22.6376,
        "lng": -51.9024
      },
      {
        "nome": "Santa Isabel do Ivaí",
        "uf": "PR",
        "ibge": 4123709,
        "lat": -23.0025,
        "lng": -53.1989
      },
      {
        "nome": "Santa Izabel do Oeste",
        "uf": "PR",
        "ibge": 4123808,
        "lat": -25.8217,
        "lng": -53.4801
      },
      {
        "nome": "Santa Lúcia",
        "uf": "PR",
        "ibge": 4123824,
        "lat": -25.4104,
        "lng": -53.5638
      },
      {
        "nome": "Santa Maria do Oeste",
        "uf": "PR",
        "ibge": 4123857,
        "lat": -24.9377,
        "lng": -51.8696
      },
      {
        "nome": "Santa Mariana",
        "uf": "PR",
        "ibge": 4123907,
        "lat": -23.1465,
        "lng": -50.5167
      },
      {
        "nome": "Santa Mônica",
        "uf": "PR",
        "ibge": 4123956,
        "lat": -23.108,
        "lng": -53.1103
      },
      {
        "nome": "Santa Tereza do Oeste",
        "uf": "PR",
        "ibge": 4124020,
        "lat": -25.0543,
        "lng": -53.6274
      },
      {
        "nome": "Santa Terezinha de Itaipu",
        "uf": "PR",
        "ibge": 4124053,
        "lat": -25.4391,
        "lng": -54.402
      },
      {
        "nome": "Santana do Itararé",
        "uf": "PR",
        "ibge": 4124004,
        "lat": -23.7587,
        "lng": -49.6293
      },
      {
        "nome": "Santo Antônio da Platina",
        "uf": "PR",
        "ibge": 4124103,
        "lat": -23.2959,
        "lng": -50.0815
      },
      {
        "nome": "Santo Antônio do Caiuá",
        "uf": "PR",
        "ibge": 4124202,
        "lat": -22.7351,
        "lng": -52.344
      },
      {
        "nome": "Santo Antônio do Paraíso",
        "uf": "PR",
        "ibge": 4124301,
        "lat": -23.4969,
        "lng": -50.6455
      },
      {
        "nome": "Santo Antônio do Sudoeste",
        "uf": "PR",
        "ibge": 4124400,
        "lat": -26.0737,
        "lng": -53.7251
      },
      {
        "nome": "Santo Inácio",
        "uf": "PR",
        "ibge": 4124509,
        "lat": -22.6957,
        "lng": -51.7969
      },
      {
        "nome": "São Carlos do Ivaí",
        "uf": "PR",
        "ibge": 4124608,
        "lat": -23.3158,
        "lng": -52.4761
      },
      {
        "nome": "São Jerônimo da Serra",
        "uf": "PR",
        "ibge": 4124707,
        "lat": -23.7218,
        "lng": -50.7475
      },
      {
        "nome": "São João",
        "uf": "PR",
        "ibge": 4124806,
        "lat": -25.8214,
        "lng": -52.7252
      },
      {
        "nome": "São João do Caiuá",
        "uf": "PR",
        "ibge": 4124905,
        "lat": -22.8535,
        "lng": -52.3411
      },
      {
        "nome": "São João do Ivaí",
        "uf": "PR",
        "ibge": 4125001,
        "lat": -23.9833,
        "lng": -51.8215
      },
      {
        "nome": "São João do Triunfo",
        "uf": "PR",
        "ibge": 4125100,
        "lat": -25.683,
        "lng": -50.2949
      },
      {
        "nome": "São Jorge d'Oeste",
        "uf": "PR",
        "ibge": 4125209,
        "lat": -25.7085,
        "lng": -52.9204
      },
      {
        "nome": "São Jorge do Ivaí",
        "uf": "PR",
        "ibge": 4125308,
        "lat": -23.4336,
        "lng": -52.2929
      },
      {
        "nome": "São Jorge do Patrocínio",
        "uf": "PR",
        "ibge": 4125357,
        "lat": -23.7647,
        "lng": -53.8823
      },
      {
        "nome": "São José da Boa Vista",
        "uf": "PR",
        "ibge": 4125407,
        "lat": -23.9122,
        "lng": -49.6577
      },
      {
        "nome": "São José das Palmeiras",
        "uf": "PR",
        "ibge": 4125456,
        "lat": -24.8369,
        "lng": -54.0572
      },
      {
        "nome": "São José dos Pinhais",
        "uf": "PR",
        "ibge": 4125506,
        "lat": -25.5313,
        "lng": -49.2031
      },
      {
        "nome": "São Manoel do Paraná",
        "uf": "PR",
        "ibge": 4125555,
        "lat": -23.3941,
        "lng": -52.6454
      },
      {
        "nome": "São Mateus do Sul",
        "uf": "PR",
        "ibge": 4125605,
        "lat": -25.8677,
        "lng": -50.384
      },
      {
        "nome": "São Miguel do Iguaçu",
        "uf": "PR",
        "ibge": 4125704,
        "lat": -25.3492,
        "lng": -54.2405
      },
      {
        "nome": "São Pedro do Iguaçu",
        "uf": "PR",
        "ibge": 4125753,
        "lat": -24.9373,
        "lng": -53.8521
      },
      {
        "nome": "São Pedro do Ivaí",
        "uf": "PR",
        "ibge": 4125803,
        "lat": -23.8634,
        "lng": -51.8568
      },
      {
        "nome": "São Pedro do Paraná",
        "uf": "PR",
        "ibge": 4125902,
        "lat": -22.8239,
        "lng": -53.2241
      },
      {
        "nome": "São Sebastião da Amoreira",
        "uf": "PR",
        "ibge": 4126009,
        "lat": -23.4656,
        "lng": -50.7625
      },
      {
        "nome": "São Tomé",
        "uf": "PR",
        "ibge": 4126108,
        "lat": -23.5349,
        "lng": -52.5901
      },
      {
        "nome": "Sapopema",
        "uf": "PR",
        "ibge": 4126207,
        "lat": -23.9078,
        "lng": -50.5801
      },
      {
        "nome": "Sarandi",
        "uf": "PR",
        "ibge": 4126256,
        "lat": -23.4441,
        "lng": -51.876
      },
      {
        "nome": "Saudade do Iguaçu",
        "uf": "PR",
        "ibge": 4126272,
        "lat": -25.6917,
        "lng": -52.6184
      },
      {
        "nome": "Sengés",
        "uf": "PR",
        "ibge": 4126306,
        "lat": -24.1129,
        "lng": -49.4616
      },
      {
        "nome": "Serranópolis do Iguaçu",
        "uf": "PR",
        "ibge": 4126355,
        "lat": -25.3799,
        "lng": -54.0518
      },
      {
        "nome": "Sertaneja",
        "uf": "PR",
        "ibge": 4126405,
        "lat": -23.0361,
        "lng": -50.8317
      },
      {
        "nome": "Sertanópolis",
        "uf": "PR",
        "ibge": 4126504,
        "lat": -23.0571,
        "lng": -51.0399
      },
      {
        "nome": "Siqueira Campos",
        "uf": "PR",
        "ibge": 4126603,
        "lat": -23.6875,
        "lng": -49.8304
      },
      {
        "nome": "Sulina",
        "uf": "PR",
        "ibge": 4126652,
        "lat": -25.7066,
        "lng": -52.7299
      },
      {
        "nome": "Tamarana",
        "uf": "PR",
        "ibge": 4126678,
        "lat": -23.7204,
        "lng": -51.0991
      },
      {
        "nome": "Tamboara",
        "uf": "PR",
        "ibge": 4126702,
        "lat": -23.2036,
        "lng": -52.4743
      },
      {
        "nome": "Tapejara",
        "uf": "PR",
        "ibge": 4126801,
        "lat": -23.7315,
        "lng": -52.8735
      },
      {
        "nome": "Tapira",
        "uf": "PR",
        "ibge": 4126900,
        "lat": -23.3193,
        "lng": -53.0684
      },
      {
        "nome": "Teixeira Soares",
        "uf": "PR",
        "ibge": 4127007,
        "lat": -25.3701,
        "lng": -50.4571
      },
      {
        "nome": "Telêmaco Borba",
        "uf": "PR",
        "ibge": 4127106,
        "lat": -24.3245,
        "lng": -50.6176
      },
      {
        "nome": "Terra Boa",
        "uf": "PR",
        "ibge": 4127205,
        "lat": -23.7683,
        "lng": -52.447
      },
      {
        "nome": "Terra Rica",
        "uf": "PR",
        "ibge": 4127304,
        "lat": -22.7111,
        "lng": -52.6188
      },
      {
        "nome": "Terra Roxa",
        "uf": "PR",
        "ibge": 4127403,
        "lat": -24.1575,
        "lng": -54.0988
      },
      {
        "nome": "Tibagi",
        "uf": "PR",
        "ibge": 4127502,
        "lat": -24.5153,
        "lng": -50.4176
      },
      {
        "nome": "Tijucas do Sul",
        "uf": "PR",
        "ibge": 4127601,
        "lat": -25.9311,
        "lng": -49.195
      },
      {
        "nome": "Toledo",
        "uf": "PR",
        "ibge": 4127700,
        "lat": -24.7246,
        "lng": -53.7412
      },
      {
        "nome": "Tomazina",
        "uf": "PR",
        "ibge": 4127809,
        "lat": -23.7796,
        "lng": -49.9499
      },
      {
        "nome": "Três Barras do Paraná",
        "uf": "PR",
        "ibge": 4127858,
        "lat": -25.4185,
        "lng": -53.1833
      },
      {
        "nome": "Tunas do Paraná",
        "uf": "PR",
        "ibge": 4127882,
        "lat": -24.9731,
        "lng": -49.0879
      },
      {
        "nome": "Tuneiras do Oeste",
        "uf": "PR",
        "ibge": 4127908,
        "lat": -23.8648,
        "lng": -52.8769
      },
      {
        "nome": "Tupãssi",
        "uf": "PR",
        "ibge": 4127957,
        "lat": -24.5879,
        "lng": -53.5105
      },
      {
        "nome": "Turvo",
        "uf": "PR",
        "ibge": 4127965,
        "lat": -25.0437,
        "lng": -51.5282
      },
      {
        "nome": "Ubiratã",
        "uf": "PR",
        "ibge": 4128005,
        "lat": -24.5393,
        "lng": -52.9865
      },
      {
        "nome": "Umuarama",
        "uf": "PR",
        "ibge": 4128104,
        "lat": -23.7656,
        "lng": -53.3201
      },
      {
        "nome": "União da Vitória",
        "uf": "PR",
        "ibge": 4128203,
        "lat": -26.2273,
        "lng": -51.0873
      },
      {
        "nome": "Uniflor",
        "uf": "PR",
        "ibge": 4128302,
        "lat": -23.0868,
        "lng": -52.1573
      },
      {
        "nome": "Uraí",
        "uf": "PR",
        "ibge": 4128401,
        "lat": -23.2,
        "lng": -50.7939
      },
      {
        "nome": "Ventania",
        "uf": "PR",
        "ibge": 4128534,
        "lat": -24.2458,
        "lng": -50.2376
      },
      {
        "nome": "Vera Cruz do Oeste",
        "uf": "PR",
        "ibge": 4128559,
        "lat": -25.0577,
        "lng": -53.8771
      },
      {
        "nome": "Verê",
        "uf": "PR",
        "ibge": 4128609,
        "lat": -25.8772,
        "lng": -52.9051
      },
      {
        "nome": "Virmond",
        "uf": "PR",
        "ibge": 4128658,
        "lat": -25.3829,
        "lng": -52.1987
      },
      {
        "nome": "Vitorino",
        "uf": "PR",
        "ibge": 4128708,
        "lat": -26.2683,
        "lng": -52.7843
      },
      {
        "nome": "Wenceslau Braz",
        "uf": "PR",
        "ibge": 4128500,
        "lat": -23.8742,
        "lng": -49.8032
      },
      {
        "nome": "Xambrê",
        "uf": "PR",
        "ibge": 4128807,
        "lat": -23.7364,
        "lng": -53.4884
      }
    ],
    "capital": {
      "nome": "Curitiba",
      "uf": "PR",
      "ibge": 4106902,
      "lat": -25.4195,
      "lng": -49.2646
    }
  },
  "SC": {
    "nome": "Santa Catarina",
    "ibge": 42,
    "cidades": [
      {
        "nome": "Abdon Batista",
        "uf": "SC",
        "ibge": 4200051,
        "lat": -27.6126,
        "lng": -51.0233
      },
      {
        "nome": "Abelardo Luz",
        "uf": "SC",
        "ibge": 4200101,
        "lat": -26.5716,
        "lng": -52.3229
      },
      {
        "nome": "Agrolândia",
        "uf": "SC",
        "ibge": 4200200,
        "lat": -27.4087,
        "lng": -49.822
      },
      {
        "nome": "Agronômica",
        "uf": "SC",
        "ibge": 4200309,
        "lat": -27.2662,
        "lng": -49.708
      },
      {
        "nome": "Água Doce",
        "uf": "SC",
        "ibge": 4200408,
        "lat": -26.9985,
        "lng": -51.5528
      },
      {
        "nome": "Águas de Chapecó",
        "uf": "SC",
        "ibge": 4200507,
        "lat": -27.0754,
        "lng": -52.9808
      },
      {
        "nome": "Águas Frias",
        "uf": "SC",
        "ibge": 4200556,
        "lat": -26.8794,
        "lng": -52.8568
      },
      {
        "nome": "Águas Mornas",
        "uf": "SC",
        "ibge": 4200606,
        "lat": -27.6963,
        "lng": -48.8243
      },
      {
        "nome": "Alfredo Wagner",
        "uf": "SC",
        "ibge": 4200705,
        "lat": -27.7001,
        "lng": -49.3273
      },
      {
        "nome": "Alto Bela Vista",
        "uf": "SC",
        "ibge": 4200754,
        "lat": -27.4333,
        "lng": -51.9044
      },
      {
        "nome": "Anchieta",
        "uf": "SC",
        "ibge": 4200804,
        "lat": -26.5382,
        "lng": -53.3319
      },
      {
        "nome": "Angelina",
        "uf": "SC",
        "ibge": 4200903,
        "lat": -27.5704,
        "lng": -48.9879
      },
      {
        "nome": "Anita Garibaldi",
        "uf": "SC",
        "ibge": 4201000,
        "lat": -27.6897,
        "lng": -51.1271
      },
      {
        "nome": "Anitápolis",
        "uf": "SC",
        "ibge": 4201109,
        "lat": -27.9012,
        "lng": -49.1316
      },
      {
        "nome": "Antônio Carlos",
        "uf": "SC",
        "ibge": 4201208,
        "lat": -27.5191,
        "lng": -48.766
      },
      {
        "nome": "Apiúna",
        "uf": "SC",
        "ibge": 4201257,
        "lat": -27.0375,
        "lng": -49.3885
      },
      {
        "nome": "Arabutã",
        "uf": "SC",
        "ibge": 4201273,
        "lat": -27.1587,
        "lng": -52.1423
      },
      {
        "nome": "Araquari",
        "uf": "SC",
        "ibge": 4201307,
        "lat": -26.3754,
        "lng": -48.7188
      },
      {
        "nome": "Araranguá",
        "uf": "SC",
        "ibge": 4201406,
        "lat": -28.9356,
        "lng": -49.4918
      },
      {
        "nome": "Armazém",
        "uf": "SC",
        "ibge": 4201505,
        "lat": -28.2448,
        "lng": -49.0215
      },
      {
        "nome": "Arroio Trinta",
        "uf": "SC",
        "ibge": 4201604,
        "lat": -26.9257,
        "lng": -51.3407
      },
      {
        "nome": "Arvoredo",
        "uf": "SC",
        "ibge": 4201653,
        "lat": -27.0748,
        "lng": -52.4543
      },
      {
        "nome": "Ascurra",
        "uf": "SC",
        "ibge": 4201703,
        "lat": -26.9548,
        "lng": -49.3783
      },
      {
        "nome": "Atalanta",
        "uf": "SC",
        "ibge": 4201802,
        "lat": -27.4219,
        "lng": -49.7789
      },
      {
        "nome": "Aurora",
        "uf": "SC",
        "ibge": 4201901,
        "lat": -27.3098,
        "lng": -49.6295
      },
      {
        "nome": "Balneário Arroio do Silva",
        "uf": "SC",
        "ibge": 4201950,
        "lat": -28.9806,
        "lng": -49.4237
      },
      {
        "nome": "Balneário Barra do Sul",
        "uf": "SC",
        "ibge": 4202057,
        "lat": -26.4597,
        "lng": -48.6123
      },
      {
        "nome": "Balneário Camboriú",
        "uf": "SC",
        "ibge": 4202008,
        "lat": -26.9926,
        "lng": -48.6352
      },
      {
        "nome": "Balneário Gaivota",
        "uf": "SC",
        "ibge": 4202073,
        "lat": -29.1527,
        "lng": -49.5841
      },
      {
        "nome": "Balneário Piçarras",
        "uf": "SC",
        "ibge": 4212809,
        "lat": -26.7639,
        "lng": -48.6717
      },
      {
        "nome": "Balneário Rincão",
        "uf": "SC",
        "ibge": 4220000,
        "lat": -28.8314,
        "lng": -49.2352
      },
      {
        "nome": "Bandeirante",
        "uf": "SC",
        "ibge": 4202081,
        "lat": -26.7705,
        "lng": -53.6413
      },
      {
        "nome": "Barra Bonita",
        "uf": "SC",
        "ibge": 4202099,
        "lat": -26.654,
        "lng": -53.44
      },
      {
        "nome": "Barra Velha",
        "uf": "SC",
        "ibge": 4202107,
        "lat": -26.637,
        "lng": -48.6933
      },
      {
        "nome": "Bela Vista do Toldo",
        "uf": "SC",
        "ibge": 4202131,
        "lat": -26.2746,
        "lng": -50.4664
      },
      {
        "nome": "Belmonte",
        "uf": "SC",
        "ibge": 4202156,
        "lat": -26.843,
        "lng": -53.5758
      },
      {
        "nome": "Benedito Novo",
        "uf": "SC",
        "ibge": 4202206,
        "lat": -26.781,
        "lng": -49.3593
      },
      {
        "nome": "Biguaçu",
        "uf": "SC",
        "ibge": 4202305,
        "lat": -27.496,
        "lng": -48.6598
      },
      {
        "nome": "Blumenau",
        "uf": "SC",
        "ibge": 4202404,
        "lat": -26.9155,
        "lng": -49.0709
      },
      {
        "nome": "Bocaina do Sul",
        "uf": "SC",
        "ibge": 4202438,
        "lat": -27.7455,
        "lng": -49.9423
      },
      {
        "nome": "Bom Jardim da Serra",
        "uf": "SC",
        "ibge": 4202503,
        "lat": -28.3377,
        "lng": -49.6373
      },
      {
        "nome": "Bom Jesus",
        "uf": "SC",
        "ibge": 4202537,
        "lat": -26.7326,
        "lng": -52.3919
      },
      {
        "nome": "Bom Jesus do Oeste",
        "uf": "SC",
        "ibge": 4202578,
        "lat": -26.6927,
        "lng": -53.0967
      },
      {
        "nome": "Bom Retiro",
        "uf": "SC",
        "ibge": 4202602,
        "lat": -27.799,
        "lng": -49.487
      },
      {
        "nome": "Bombinhas",
        "uf": "SC",
        "ibge": 4202453,
        "lat": -27.1382,
        "lng": -48.5146
      },
      {
        "nome": "Botuverá",
        "uf": "SC",
        "ibge": 4202701,
        "lat": -27.2007,
        "lng": -49.0689
      },
      {
        "nome": "Braço do Norte",
        "uf": "SC",
        "ibge": 4202800,
        "lat": -28.2681,
        "lng": -49.1701
      },
      {
        "nome": "Braço do Trombudo",
        "uf": "SC",
        "ibge": 4202859,
        "lat": -27.3586,
        "lng": -49.8821
      },
      {
        "nome": "Brunópolis",
        "uf": "SC",
        "ibge": 4202875,
        "lat": -27.3058,
        "lng": -50.8684
      },
      {
        "nome": "Brusque",
        "uf": "SC",
        "ibge": 4202909,
        "lat": -27.0977,
        "lng": -48.9107
      },
      {
        "nome": "Caçador",
        "uf": "SC",
        "ibge": 4203006,
        "lat": -26.7757,
        "lng": -51.012
      },
      {
        "nome": "Caibi",
        "uf": "SC",
        "ibge": 4203105,
        "lat": -27.0741,
        "lng": -53.2458
      },
      {
        "nome": "Calmon",
        "uf": "SC",
        "ibge": 4203154,
        "lat": -26.5942,
        "lng": -51.095
      },
      {
        "nome": "Camboriú",
        "uf": "SC",
        "ibge": 4203204,
        "lat": -27.0241,
        "lng": -48.6503
      },
      {
        "nome": "Campo Alegre",
        "uf": "SC",
        "ibge": 4203303,
        "lat": -26.195,
        "lng": -49.2676
      },
      {
        "nome": "Campo Belo do Sul",
        "uf": "SC",
        "ibge": 4203402,
        "lat": -27.8975,
        "lng": -50.7595
      },
      {
        "nome": "Campo Erê",
        "uf": "SC",
        "ibge": 4203501,
        "lat": -26.3931,
        "lng": -53.0856
      },
      {
        "nome": "Campos Novos",
        "uf": "SC",
        "ibge": 4203600,
        "lat": -27.4002,
        "lng": -51.2276
      },
      {
        "nome": "Canelinha",
        "uf": "SC",
        "ibge": 4203709,
        "lat": -27.2616,
        "lng": -48.7658
      },
      {
        "nome": "Canoinhas",
        "uf": "SC",
        "ibge": 4203808,
        "lat": -26.1766,
        "lng": -50.395
      },
      {
        "nome": "Capão Alto",
        "uf": "SC",
        "ibge": 4203253,
        "lat": -27.9389,
        "lng": -50.5098
      },
      {
        "nome": "Capinzal",
        "uf": "SC",
        "ibge": 4203907,
        "lat": -27.3473,
        "lng": -51.6057
      },
      {
        "nome": "Capivari de Baixo",
        "uf": "SC",
        "ibge": 4203956,
        "lat": -28.4498,
        "lng": -48.9631
      },
      {
        "nome": "Catanduvas",
        "uf": "SC",
        "ibge": 4204004,
        "lat": -27.069,
        "lng": -51.6602
      },
      {
        "nome": "Caxambu do Sul",
        "uf": "SC",
        "ibge": 4204103,
        "lat": -27.1624,
        "lng": -52.8807
      },
      {
        "nome": "Celso Ramos",
        "uf": "SC",
        "ibge": 4204152,
        "lat": -27.6327,
        "lng": -51.335
      },
      {
        "nome": "Cerro Negro",
        "uf": "SC",
        "ibge": 4204178,
        "lat": -27.7942,
        "lng": -50.8673
      },
      {
        "nome": "Chapadão do Lageado",
        "uf": "SC",
        "ibge": 4204194,
        "lat": -27.5905,
        "lng": -49.5539
      },
      {
        "nome": "Chapecó",
        "uf": "SC",
        "ibge": 4204202,
        "lat": -27.1004,
        "lng": -52.6152
      },
      {
        "nome": "Cocal do Sul",
        "uf": "SC",
        "ibge": 4204251,
        "lat": -28.5986,
        "lng": -49.3335
      },
      {
        "nome": "Concórdia",
        "uf": "SC",
        "ibge": 4204301,
        "lat": -27.2335,
        "lng": -52.026
      },
      {
        "nome": "Cordilheira Alta",
        "uf": "SC",
        "ibge": 4204350,
        "lat": -26.9844,
        "lng": -52.6056
      },
      {
        "nome": "Coronel Freitas",
        "uf": "SC",
        "ibge": 4204400,
        "lat": -26.9057,
        "lng": -52.7011
      },
      {
        "nome": "Coronel Martins",
        "uf": "SC",
        "ibge": 4204459,
        "lat": -26.511,
        "lng": -52.6694
      },
      {
        "nome": "Correia Pinto",
        "uf": "SC",
        "ibge": 4204558,
        "lat": -27.5877,
        "lng": -50.3614
      },
      {
        "nome": "Corupá",
        "uf": "SC",
        "ibge": 4204509,
        "lat": -26.4246,
        "lng": -49.246
      },
      {
        "nome": "Criciúma",
        "uf": "SC",
        "ibge": 4204608,
        "lat": -28.6723,
        "lng": -49.3729
      },
      {
        "nome": "Cunha Porã",
        "uf": "SC",
        "ibge": 4204707,
        "lat": -26.895,
        "lng": -53.1662
      },
      {
        "nome": "Cunhataí",
        "uf": "SC",
        "ibge": 4204756,
        "lat": -26.9709,
        "lng": -53.0895
      },
      {
        "nome": "Curitibanos",
        "uf": "SC",
        "ibge": 4204806,
        "lat": -27.2824,
        "lng": -50.5816
      },
      {
        "nome": "Descanso",
        "uf": "SC",
        "ibge": 4204905,
        "lat": -26.827,
        "lng": -53.5034
      },
      {
        "nome": "Dionísio Cerqueira",
        "uf": "SC",
        "ibge": 4205001,
        "lat": -26.2648,
        "lng": -53.6351
      },
      {
        "nome": "Dona Emma",
        "uf": "SC",
        "ibge": 4205100,
        "lat": -26.981,
        "lng": -49.7261
      },
      {
        "nome": "Doutor Pedrinho",
        "uf": "SC",
        "ibge": 4205159,
        "lat": -26.7174,
        "lng": -49.4795
      },
      {
        "nome": "Entre Rios",
        "uf": "SC",
        "ibge": 4205175,
        "lat": -26.7225,
        "lng": -52.5585
      },
      {
        "nome": "Ermo",
        "uf": "SC",
        "ibge": 4205191,
        "lat": -28.9869,
        "lng": -49.643
      },
      {
        "nome": "Erval Velho",
        "uf": "SC",
        "ibge": 4205209,
        "lat": -27.2743,
        "lng": -51.443
      },
      {
        "nome": "Faxinal dos Guedes",
        "uf": "SC",
        "ibge": 4205308,
        "lat": -26.8451,
        "lng": -52.2596
      },
      {
        "nome": "Flor do Sertão",
        "uf": "SC",
        "ibge": 4205357,
        "lat": -26.7811,
        "lng": -53.3505
      },
      {
        "nome": "Formosa do Sul",
        "uf": "SC",
        "ibge": 4205431,
        "lat": -26.6453,
        "lng": -52.7946
      },
      {
        "nome": "Forquilhinha",
        "uf": "SC",
        "ibge": 4205456,
        "lat": -28.7454,
        "lng": -49.4785
      },
      {
        "nome": "Fraiburgo",
        "uf": "SC",
        "ibge": 4205506,
        "lat": -27.0233,
        "lng": -50.92
      },
      {
        "nome": "Frei Rogério",
        "uf": "SC",
        "ibge": 4205555,
        "lat": -27.175,
        "lng": -50.8076
      },
      {
        "nome": "Galvão",
        "uf": "SC",
        "ibge": 4205605,
        "lat": -26.4549,
        "lng": -52.6875
      },
      {
        "nome": "Garopaba",
        "uf": "SC",
        "ibge": 4205704,
        "lat": -28.0275,
        "lng": -48.6192
      },
      {
        "nome": "Garuva",
        "uf": "SC",
        "ibge": 4205803,
        "lat": -26.0292,
        "lng": -48.852
      },
      {
        "nome": "Gaspar",
        "uf": "SC",
        "ibge": 4205902,
        "lat": -26.9336,
        "lng": -48.9534
      },
      {
        "nome": "Governador Celso Ramos",
        "uf": "SC",
        "ibge": 4206009,
        "lat": -27.3172,
        "lng": -48.5576
      },
      {
        "nome": "Grão Pará",
        "uf": "SC",
        "ibge": 4206108,
        "lat": -28.1809,
        "lng": -49.2252
      },
      {
        "nome": "Gravatal",
        "uf": "SC",
        "ibge": 4206207,
        "lat": -28.3208,
        "lng": -49.0427
      },
      {
        "nome": "Guabiruba",
        "uf": "SC",
        "ibge": 4206306,
        "lat": -27.0808,
        "lng": -48.9804
      },
      {
        "nome": "Guaraciaba",
        "uf": "SC",
        "ibge": 4206405,
        "lat": -26.6042,
        "lng": -53.5243
      },
      {
        "nome": "Guaramirim",
        "uf": "SC",
        "ibge": 4206504,
        "lat": -26.4688,
        "lng": -49.0026
      },
      {
        "nome": "Guarujá do Sul",
        "uf": "SC",
        "ibge": 4206603,
        "lat": -26.3858,
        "lng": -53.5296
      },
      {
        "nome": "Guatambú",
        "uf": "SC",
        "ibge": 4206652,
        "lat": -27.1341,
        "lng": -52.7887
      },
      {
        "nome": "Herval d'Oeste",
        "uf": "SC",
        "ibge": 4206702,
        "lat": -27.1903,
        "lng": -51.4917
      },
      {
        "nome": "Ibiam",
        "uf": "SC",
        "ibge": 4206751,
        "lat": -27.1847,
        "lng": -51.2352
      },
      {
        "nome": "Ibicaré",
        "uf": "SC",
        "ibge": 4206801,
        "lat": -27.0881,
        "lng": -51.3681
      },
      {
        "nome": "Ibirama",
        "uf": "SC",
        "ibge": 4206900,
        "lat": -27.0547,
        "lng": -49.5193
      },
      {
        "nome": "Içara",
        "uf": "SC",
        "ibge": 4207007,
        "lat": -28.7132,
        "lng": -49.3087
      },
      {
        "nome": "Ilhota",
        "uf": "SC",
        "ibge": 4207106,
        "lat": -26.9023,
        "lng": -48.8251
      },
      {
        "nome": "Imaruí",
        "uf": "SC",
        "ibge": 4207205,
        "lat": -28.3339,
        "lng": -48.817
      },
      {
        "nome": "Imbituba",
        "uf": "SC",
        "ibge": 4207304,
        "lat": -28.2284,
        "lng": -48.6659
      },
      {
        "nome": "Imbuia",
        "uf": "SC",
        "ibge": 4207403,
        "lat": -27.4908,
        "lng": -49.4218
      },
      {
        "nome": "Indaial",
        "uf": "SC",
        "ibge": 4207502,
        "lat": -26.8992,
        "lng": -49.2354
      },
      {
        "nome": "Iomerê",
        "uf": "SC",
        "ibge": 4207577,
        "lat": -27.0019,
        "lng": -51.2442
      },
      {
        "nome": "Ipira",
        "uf": "SC",
        "ibge": 4207601,
        "lat": -27.4038,
        "lng": -51.7758
      },
      {
        "nome": "Iporã do Oeste",
        "uf": "SC",
        "ibge": 4207650,
        "lat": -26.9854,
        "lng": -53.5355
      },
      {
        "nome": "Ipuaçu",
        "uf": "SC",
        "ibge": 4207684,
        "lat": -26.635,
        "lng": -52.4556
      },
      {
        "nome": "Ipumirim",
        "uf": "SC",
        "ibge": 4207700,
        "lat": -27.0772,
        "lng": -52.1289
      },
      {
        "nome": "Iraceminha",
        "uf": "SC",
        "ibge": 4207759,
        "lat": -26.8215,
        "lng": -53.2767
      },
      {
        "nome": "Irani",
        "uf": "SC",
        "ibge": 4207809,
        "lat": -27.0287,
        "lng": -51.9012
      },
      {
        "nome": "Irati",
        "uf": "SC",
        "ibge": 4207858,
        "lat": -26.6539,
        "lng": -52.8955
      },
      {
        "nome": "Irineópolis",
        "uf": "SC",
        "ibge": 4207908,
        "lat": -26.242,
        "lng": -50.7957
      },
      {
        "nome": "Itá",
        "uf": "SC",
        "ibge": 4208005,
        "lat": -27.2907,
        "lng": -52.3212
      },
      {
        "nome": "Itaiópolis",
        "uf": "SC",
        "ibge": 4208104,
        "lat": -26.339,
        "lng": -49.9092
      },
      {
        "nome": "Itajaí",
        "uf": "SC",
        "ibge": 4208203,
        "lat": -26.9101,
        "lng": -48.6705
      },
      {
        "nome": "Itapema",
        "uf": "SC",
        "ibge": 4208302,
        "lat": -27.0861,
        "lng": -48.616
      },
      {
        "nome": "Itapiranga",
        "uf": "SC",
        "ibge": 4208401,
        "lat": -27.1659,
        "lng": -53.7166
      },
      {
        "nome": "Itapoá",
        "uf": "SC",
        "ibge": 4208450,
        "lat": -26.1158,
        "lng": -48.6182
      },
      {
        "nome": "Ituporanga",
        "uf": "SC",
        "ibge": 4208500,
        "lat": -27.4101,
        "lng": -49.5963
      },
      {
        "nome": "Jaborá",
        "uf": "SC",
        "ibge": 4208609,
        "lat": -27.1782,
        "lng": -51.7279
      },
      {
        "nome": "Jacinto Machado",
        "uf": "SC",
        "ibge": 4208708,
        "lat": -28.9961,
        "lng": -49.7623
      },
      {
        "nome": "Jaguaruna",
        "uf": "SC",
        "ibge": 4208807,
        "lat": -28.6146,
        "lng": -49.0296
      },
      {
        "nome": "Jaraguá do Sul",
        "uf": "SC",
        "ibge": 4208906,
        "lat": -26.4851,
        "lng": -49.0713
      },
      {
        "nome": "Jardinópolis",
        "uf": "SC",
        "ibge": 4208955,
        "lat": -26.7191,
        "lng": -52.8625
      },
      {
        "nome": "Joaçaba",
        "uf": "SC",
        "ibge": 4209003,
        "lat": -27.1721,
        "lng": -51.5108
      },
      {
        "nome": "Joinville",
        "uf": "SC",
        "ibge": 4209102,
        "lat": -26.3045,
        "lng": -48.8487
      },
      {
        "nome": "José Boiteux",
        "uf": "SC",
        "ibge": 4209151,
        "lat": -26.9566,
        "lng": -49.6286
      },
      {
        "nome": "Jupiá",
        "uf": "SC",
        "ibge": 4209177,
        "lat": -26.395,
        "lng": -52.7298
      },
      {
        "nome": "Lacerdópolis",
        "uf": "SC",
        "ibge": 4209201,
        "lat": -27.2579,
        "lng": -51.5577
      },
      {
        "nome": "Lages",
        "uf": "SC",
        "ibge": 4209300,
        "lat": -27.815,
        "lng": -50.3259
      },
      {
        "nome": "Laguna",
        "uf": "SC",
        "ibge": 4209409,
        "lat": -28.4843,
        "lng": -48.7772
      },
      {
        "nome": "Lajeado Grande",
        "uf": "SC",
        "ibge": 4209458,
        "lat": -26.8576,
        "lng": -52.5648
      },
      {
        "nome": "Laurentino",
        "uf": "SC",
        "ibge": 4209508,
        "lat": -27.2173,
        "lng": -49.7331
      },
      {
        "nome": "Lauro Muller",
        "uf": "SC",
        "ibge": 4209607,
        "lat": -28.3859,
        "lng": -49.4035
      },
      {
        "nome": "Lebon Régis",
        "uf": "SC",
        "ibge": 4209706,
        "lat": -26.928,
        "lng": -50.6921
      },
      {
        "nome": "Leoberto Leal",
        "uf": "SC",
        "ibge": 4209805,
        "lat": -27.5081,
        "lng": -49.2789
      },
      {
        "nome": "Lindóia do Sul",
        "uf": "SC",
        "ibge": 4209854,
        "lat": -27.0545,
        "lng": -52.069
      },
      {
        "nome": "Lontras",
        "uf": "SC",
        "ibge": 4209904,
        "lat": -27.1684,
        "lng": -49.535
      },
      {
        "nome": "Luiz Alves",
        "uf": "SC",
        "ibge": 4210001,
        "lat": -26.7151,
        "lng": -48.9322
      },
      {
        "nome": "Luzerna",
        "uf": "SC",
        "ibge": 4210035,
        "lat": -27.1304,
        "lng": -51.4682
      },
      {
        "nome": "Macieira",
        "uf": "SC",
        "ibge": 4210050,
        "lat": -26.8552,
        "lng": -51.3705
      },
      {
        "nome": "Mafra",
        "uf": "SC",
        "ibge": 4210100,
        "lat": -26.1159,
        "lng": -49.8086
      },
      {
        "nome": "Major Gercino",
        "uf": "SC",
        "ibge": 4210209,
        "lat": -27.4192,
        "lng": -48.9488
      },
      {
        "nome": "Major Vieira",
        "uf": "SC",
        "ibge": 4210308,
        "lat": -26.3709,
        "lng": -50.3266
      },
      {
        "nome": "Maracajá",
        "uf": "SC",
        "ibge": 4210407,
        "lat": -28.8463,
        "lng": -49.4605
      },
      {
        "nome": "Maravilha",
        "uf": "SC",
        "ibge": 4210506,
        "lat": -26.7665,
        "lng": -53.1737
      },
      {
        "nome": "Marema",
        "uf": "SC",
        "ibge": 4210555,
        "lat": -26.8024,
        "lng": -52.6264
      },
      {
        "nome": "Massaranduba",
        "uf": "SC",
        "ibge": 4210605,
        "lat": -26.6109,
        "lng": -49.0054
      },
      {
        "nome": "Matos Costa",
        "uf": "SC",
        "ibge": 4210704,
        "lat": -26.4709,
        "lng": -51.1501
      },
      {
        "nome": "Meleiro",
        "uf": "SC",
        "ibge": 4210803,
        "lat": -28.8244,
        "lng": -49.6378
      },
      {
        "nome": "Mirim Doce",
        "uf": "SC",
        "ibge": 4210852,
        "lat": -27.197,
        "lng": -50.0786
      },
      {
        "nome": "Modelo",
        "uf": "SC",
        "ibge": 4210902,
        "lat": -26.7729,
        "lng": -53.04
      },
      {
        "nome": "Mondaí",
        "uf": "SC",
        "ibge": 4211009,
        "lat": -27.1008,
        "lng": -53.4032
      },
      {
        "nome": "Monte Carlo",
        "uf": "SC",
        "ibge": 4211058,
        "lat": -27.2239,
        "lng": -50.9808
      },
      {
        "nome": "Monte Castelo",
        "uf": "SC",
        "ibge": 4211108,
        "lat": -26.461,
        "lng": -50.2327
      },
      {
        "nome": "Morro da Fumaça",
        "uf": "SC",
        "ibge": 4211207,
        "lat": -28.6511,
        "lng": -49.2169
      },
      {
        "nome": "Morro Grande",
        "uf": "SC",
        "ibge": 4211256,
        "lat": -28.8006,
        "lng": -49.7214
      },
      {
        "nome": "Navegantes",
        "uf": "SC",
        "ibge": 4211306,
        "lat": -26.8943,
        "lng": -48.6546
      },
      {
        "nome": "Nova Erechim",
        "uf": "SC",
        "ibge": 4211405,
        "lat": -26.8982,
        "lng": -52.9066
      },
      {
        "nome": "Nova Itaberaba",
        "uf": "SC",
        "ibge": 4211454,
        "lat": -26.9428,
        "lng": -52.8141
      },
      {
        "nome": "Nova Trento",
        "uf": "SC",
        "ibge": 4211504,
        "lat": -27.278,
        "lng": -48.9298
      },
      {
        "nome": "Nova Veneza",
        "uf": "SC",
        "ibge": 4211603,
        "lat": -28.6338,
        "lng": -49.5055
      },
      {
        "nome": "Novo Horizonte",
        "uf": "SC",
        "ibge": 4211652,
        "lat": -26.4442,
        "lng": -52.8281
      },
      {
        "nome": "Orleans",
        "uf": "SC",
        "ibge": 4211702,
        "lat": -28.3487,
        "lng": -49.2986
      },
      {
        "nome": "Otacílio Costa",
        "uf": "SC",
        "ibge": 4211751,
        "lat": -27.4789,
        "lng": -50.1231
      },
      {
        "nome": "Ouro",
        "uf": "SC",
        "ibge": 4211801,
        "lat": -27.3379,
        "lng": -51.6194
      },
      {
        "nome": "Ouro Verde",
        "uf": "SC",
        "ibge": 4211850,
        "lat": -26.692,
        "lng": -52.3108
      },
      {
        "nome": "Paial",
        "uf": "SC",
        "ibge": 4211876,
        "lat": -27.2541,
        "lng": -52.4975
      },
      {
        "nome": "Painel",
        "uf": "SC",
        "ibge": 4211892,
        "lat": -27.9234,
        "lng": -50.0972
      },
      {
        "nome": "Palhoça",
        "uf": "SC",
        "ibge": 4211900,
        "lat": -27.6455,
        "lng": -48.6697
      },
      {
        "nome": "Palma Sola",
        "uf": "SC",
        "ibge": 4212007,
        "lat": -26.3471,
        "lng": -53.2771
      },
      {
        "nome": "Palmeira",
        "uf": "SC",
        "ibge": 4212056,
        "lat": -27.583,
        "lng": -50.1577
      },
      {
        "nome": "Palmitos",
        "uf": "SC",
        "ibge": 4212106,
        "lat": -27.0702,
        "lng": -53.1586
      },
      {
        "nome": "Papanduva",
        "uf": "SC",
        "ibge": 4212205,
        "lat": -26.3777,
        "lng": -50.1419
      },
      {
        "nome": "Paraíso",
        "uf": "SC",
        "ibge": 4212239,
        "lat": -26.62,
        "lng": -53.6716
      },
      {
        "nome": "Passo de Torres",
        "uf": "SC",
        "ibge": 4212254,
        "lat": -29.3099,
        "lng": -49.722
      },
      {
        "nome": "Passos Maia",
        "uf": "SC",
        "ibge": 4212270,
        "lat": -26.7829,
        "lng": -52.0568
      },
      {
        "nome": "Paulo Lopes",
        "uf": "SC",
        "ibge": 4212304,
        "lat": -27.9607,
        "lng": -48.6864
      },
      {
        "nome": "Pedras Grandes",
        "uf": "SC",
        "ibge": 4212403,
        "lat": -28.4339,
        "lng": -49.1949
      },
      {
        "nome": "Penha",
        "uf": "SC",
        "ibge": 4212502,
        "lat": -26.7754,
        "lng": -48.6465
      },
      {
        "nome": "Peritiba",
        "uf": "SC",
        "ibge": 4212601,
        "lat": -27.3754,
        "lng": -51.9018
      },
      {
        "nome": "Pescaria Brava",
        "uf": "SC",
        "ibge": 4212650,
        "lat": -28.3966,
        "lng": -48.8864
      },
      {
        "nome": "Petrolândia",
        "uf": "SC",
        "ibge": 4212700,
        "lat": -27.5346,
        "lng": -49.6937
      },
      {
        "nome": "Pinhalzinho",
        "uf": "SC",
        "ibge": 4212908,
        "lat": -26.8495,
        "lng": -52.9913
      },
      {
        "nome": "Pinheiro Preto",
        "uf": "SC",
        "ibge": 4213005,
        "lat": -27.0483,
        "lng": -51.2243
      },
      {
        "nome": "Piratuba",
        "uf": "SC",
        "ibge": 4213104,
        "lat": -27.4242,
        "lng": -51.7668
      },
      {
        "nome": "Planalto Alegre",
        "uf": "SC",
        "ibge": 4213153,
        "lat": -27.0704,
        "lng": -52.867
      },
      {
        "nome": "Pomerode",
        "uf": "SC",
        "ibge": 4213203,
        "lat": -26.7384,
        "lng": -49.1785
      },
      {
        "nome": "Ponte Alta",
        "uf": "SC",
        "ibge": 4213302,
        "lat": -27.4835,
        "lng": -50.3764
      },
      {
        "nome": "Ponte Alta do Norte",
        "uf": "SC",
        "ibge": 4213351,
        "lat": -27.1591,
        "lng": -50.4659
      },
      {
        "nome": "Ponte Serrada",
        "uf": "SC",
        "ibge": 4213401,
        "lat": -26.8733,
        "lng": -52.0112
      },
      {
        "nome": "Porto Belo",
        "uf": "SC",
        "ibge": 4213500,
        "lat": -27.1586,
        "lng": -48.5469
      },
      {
        "nome": "Porto União",
        "uf": "SC",
        "ibge": 4213609,
        "lat": -26.2451,
        "lng": -51.0759
      },
      {
        "nome": "Pouso Redondo",
        "uf": "SC",
        "ibge": 4213708,
        "lat": -27.2567,
        "lng": -49.9301
      },
      {
        "nome": "Praia Grande",
        "uf": "SC",
        "ibge": 4213807,
        "lat": -29.1918,
        "lng": -49.9525
      },
      {
        "nome": "Presidente Castello Branco",
        "uf": "SC",
        "ibge": 4213906,
        "lat": -27.2218,
        "lng": -51.8089
      },
      {
        "nome": "Presidente Getúlio",
        "uf": "SC",
        "ibge": 4214003,
        "lat": -27.0474,
        "lng": -49.6246
      },
      {
        "nome": "Presidente Nereu",
        "uf": "SC",
        "ibge": 4214102,
        "lat": -27.2768,
        "lng": -49.3889
      },
      {
        "nome": "Princesa",
        "uf": "SC",
        "ibge": 4214151,
        "lat": -26.4441,
        "lng": -53.5994
      },
      {
        "nome": "Quilombo",
        "uf": "SC",
        "ibge": 4214201,
        "lat": -26.7264,
        "lng": -52.724
      },
      {
        "nome": "Rancho Queimado",
        "uf": "SC",
        "ibge": 4214300,
        "lat": -27.6727,
        "lng": -49.0191
      },
      {
        "nome": "Rio das Antas",
        "uf": "SC",
        "ibge": 4214409,
        "lat": -26.8946,
        "lng": -51.0674
      },
      {
        "nome": "Rio do Campo",
        "uf": "SC",
        "ibge": 4214508,
        "lat": -26.9452,
        "lng": -50.136
      },
      {
        "nome": "Rio do Oeste",
        "uf": "SC",
        "ibge": 4214607,
        "lat": -27.1952,
        "lng": -49.7989
      },
      {
        "nome": "Rio do Sul",
        "uf": "SC",
        "ibge": 4214805,
        "lat": -27.2156,
        "lng": -49.643
      },
      {
        "nome": "Rio dos Cedros",
        "uf": "SC",
        "ibge": 4214706,
        "lat": -26.7398,
        "lng": -49.2718
      },
      {
        "nome": "Rio Fortuna",
        "uf": "SC",
        "ibge": 4214904,
        "lat": -28.1244,
        "lng": -49.1068
      },
      {
        "nome": "Rio Negrinho",
        "uf": "SC",
        "ibge": 4215000,
        "lat": -26.2591,
        "lng": -49.5177
      },
      {
        "nome": "Rio Rufino",
        "uf": "SC",
        "ibge": 4215059,
        "lat": -27.8592,
        "lng": -49.7754
      },
      {
        "nome": "Riqueza",
        "uf": "SC",
        "ibge": 4215075,
        "lat": -27.0653,
        "lng": -53.3265
      },
      {
        "nome": "Rodeio",
        "uf": "SC",
        "ibge": 4215109,
        "lat": -26.9243,
        "lng": -49.3649
      },
      {
        "nome": "Romelândia",
        "uf": "SC",
        "ibge": 4215208,
        "lat": -26.6809,
        "lng": -53.3172
      },
      {
        "nome": "Salete",
        "uf": "SC",
        "ibge": 4215307,
        "lat": -26.9798,
        "lng": -49.9988
      },
      {
        "nome": "Saltinho",
        "uf": "SC",
        "ibge": 4215356,
        "lat": -26.6049,
        "lng": -53.0578
      },
      {
        "nome": "Salto Veloso",
        "uf": "SC",
        "ibge": 4215406,
        "lat": -26.903,
        "lng": -51.4043
      },
      {
        "nome": "Sangão",
        "uf": "SC",
        "ibge": 4215455,
        "lat": -28.6326,
        "lng": -49.1322
      },
      {
        "nome": "Santa Cecília",
        "uf": "SC",
        "ibge": 4215505,
        "lat": -26.9592,
        "lng": -50.4252
      },
      {
        "nome": "Santa Helena",
        "uf": "SC",
        "ibge": 4215554,
        "lat": -26.937,
        "lng": -53.6214
      },
      {
        "nome": "Santa Rosa de Lima",
        "uf": "SC",
        "ibge": 4215604,
        "lat": -28.0331,
        "lng": -49.133
      },
      {
        "nome": "Santa Rosa do Sul",
        "uf": "SC",
        "ibge": 4215653,
        "lat": -29.1313,
        "lng": -49.7109
      },
      {
        "nome": "Santa Terezinha",
        "uf": "SC",
        "ibge": 4215679,
        "lat": -26.7813,
        "lng": -50.009
      },
      {
        "nome": "Santa Terezinha do Progresso",
        "uf": "SC",
        "ibge": 4215695,
        "lat": -26.624,
        "lng": -53.1997
      },
      {
        "nome": "Santiago do Sul",
        "uf": "SC",
        "ibge": 4215687,
        "lat": -26.6388,
        "lng": -52.6799
      },
      {
        "nome": "Santo Amaro da Imperatriz",
        "uf": "SC",
        "ibge": 4215703,
        "lat": -27.6852,
        "lng": -48.7813
      },
      {
        "nome": "São Bento do Sul",
        "uf": "SC",
        "ibge": 4215802,
        "lat": -26.2495,
        "lng": -49.3831
      },
      {
        "nome": "São Bernardino",
        "uf": "SC",
        "ibge": 4215752,
        "lat": -26.4739,
        "lng": -52.9687
      },
      {
        "nome": "São Bonifácio",
        "uf": "SC",
        "ibge": 4215901,
        "lat": -27.9009,
        "lng": -48.9326
      },
      {
        "nome": "São Carlos",
        "uf": "SC",
        "ibge": 4216008,
        "lat": -27.0798,
        "lng": -53.0037
      },
      {
        "nome": "São Cristovão do Sul",
        "uf": "SC",
        "ibge": 4216057,
        "lat": -27.2666,
        "lng": -50.4388
      },
      {
        "nome": "São Domingos",
        "uf": "SC",
        "ibge": 4216107,
        "lat": -26.5548,
        "lng": -52.5313
      },
      {
        "nome": "São Francisco do Sul",
        "uf": "SC",
        "ibge": 4216206,
        "lat": -26.2579,
        "lng": -48.6344
      },
      {
        "nome": "São João Batista",
        "uf": "SC",
        "ibge": 4216305,
        "lat": -27.2772,
        "lng": -48.8474
      },
      {
        "nome": "São João do Itaperiú",
        "uf": "SC",
        "ibge": 4216354,
        "lat": -26.6213,
        "lng": -48.7683
      },
      {
        "nome": "São João do Oeste",
        "uf": "SC",
        "ibge": 4216255,
        "lat": -27.0984,
        "lng": -53.5977
      },
      {
        "nome": "São João do Sul",
        "uf": "SC",
        "ibge": 4216404,
        "lat": -29.2154,
        "lng": -49.8094
      },
      {
        "nome": "São Joaquim",
        "uf": "SC",
        "ibge": 4216503,
        "lat": -28.2887,
        "lng": -49.9457
      },
      {
        "nome": "São José",
        "uf": "SC",
        "ibge": 4216602,
        "lat": -27.6136,
        "lng": -48.6366
      },
      {
        "nome": "São José do Cedro",
        "uf": "SC",
        "ibge": 4216701,
        "lat": -26.4561,
        "lng": -53.4955
      },
      {
        "nome": "São José do Cerrito",
        "uf": "SC",
        "ibge": 4216800,
        "lat": -27.6602,
        "lng": -50.5733
      },
      {
        "nome": "São Lourenço do Oeste",
        "uf": "SC",
        "ibge": 4216909,
        "lat": -26.3557,
        "lng": -52.8498
      },
      {
        "nome": "São Ludgero",
        "uf": "SC",
        "ibge": 4217006,
        "lat": -28.3144,
        "lng": -49.1806
      },
      {
        "nome": "São Martinho",
        "uf": "SC",
        "ibge": 4217105,
        "lat": -28.1609,
        "lng": -48.9867
      },
      {
        "nome": "São Miguel da Boa Vista",
        "uf": "SC",
        "ibge": 4217154,
        "lat": -26.687,
        "lng": -53.2511
      },
      {
        "nome": "São Miguel do Oeste",
        "uf": "SC",
        "ibge": 4217204,
        "lat": -26.7242,
        "lng": -53.5163
      },
      {
        "nome": "São Pedro de Alcântara",
        "uf": "SC",
        "ibge": 4217253,
        "lat": -27.5665,
        "lng": -48.8048
      },
      {
        "nome": "Saudades",
        "uf": "SC",
        "ibge": 4217303,
        "lat": -26.9317,
        "lng": -53.0021
      },
      {
        "nome": "Schroeder",
        "uf": "SC",
        "ibge": 4217402,
        "lat": -26.4116,
        "lng": -49.074
      },
      {
        "nome": "Seara",
        "uf": "SC",
        "ibge": 4217501,
        "lat": -27.1564,
        "lng": -52.299
      },
      {
        "nome": "Serra Alta",
        "uf": "SC",
        "ibge": 4217550,
        "lat": -26.7229,
        "lng": -53.0409
      },
      {
        "nome": "Siderópolis",
        "uf": "SC",
        "ibge": 4217600,
        "lat": -28.5955,
        "lng": -49.4314
      },
      {
        "nome": "Sombrio",
        "uf": "SC",
        "ibge": 4217709,
        "lat": -29.108,
        "lng": -49.6328
      },
      {
        "nome": "Sul Brasil",
        "uf": "SC",
        "ibge": 4217758,
        "lat": -26.7351,
        "lng": -52.964
      },
      {
        "nome": "Taió",
        "uf": "SC",
        "ibge": 4217808,
        "lat": -27.121,
        "lng": -49.9942
      },
      {
        "nome": "Tangará",
        "uf": "SC",
        "ibge": 4217907,
        "lat": -27.0996,
        "lng": -51.2473
      },
      {
        "nome": "Tigrinhos",
        "uf": "SC",
        "ibge": 4217956,
        "lat": -26.6876,
        "lng": -53.1545
      },
      {
        "nome": "Tijucas",
        "uf": "SC",
        "ibge": 4218004,
        "lat": -27.2354,
        "lng": -48.6322
      },
      {
        "nome": "Timbé do Sul",
        "uf": "SC",
        "ibge": 4218103,
        "lat": -28.8287,
        "lng": -49.842
      },
      {
        "nome": "Timbó",
        "uf": "SC",
        "ibge": 4218202,
        "lat": -26.8246,
        "lng": -49.269
      },
      {
        "nome": "Timbó Grande",
        "uf": "SC",
        "ibge": 4218251,
        "lat": -26.6127,
        "lng": -50.6607
      },
      {
        "nome": "Três Barras",
        "uf": "SC",
        "ibge": 4218301,
        "lat": -26.1056,
        "lng": -50.3197
      },
      {
        "nome": "Treviso",
        "uf": "SC",
        "ibge": 4218350,
        "lat": -28.5097,
        "lng": -49.4634
      },
      {
        "nome": "Treze de Maio",
        "uf": "SC",
        "ibge": 4218400,
        "lat": -28.5537,
        "lng": -49.1565
      },
      {
        "nome": "Treze Tílias",
        "uf": "SC",
        "ibge": 4218509,
        "lat": -27.0026,
        "lng": -51.4084
      },
      {
        "nome": "Trombudo Central",
        "uf": "SC",
        "ibge": 4218608,
        "lat": -27.3033,
        "lng": -49.793
      },
      {
        "nome": "Tubarão",
        "uf": "SC",
        "ibge": 4218707,
        "lat": -28.4713,
        "lng": -49.0144
      },
      {
        "nome": "Tunápolis",
        "uf": "SC",
        "ibge": 4218756,
        "lat": -26.9681,
        "lng": -53.6417
      },
      {
        "nome": "Turvo",
        "uf": "SC",
        "ibge": 4218806,
        "lat": -28.9272,
        "lng": -49.6831
      },
      {
        "nome": "União do Oeste",
        "uf": "SC",
        "ibge": 4218855,
        "lat": -26.762,
        "lng": -52.8541
      },
      {
        "nome": "Urubici",
        "uf": "SC",
        "ibge": 4218905,
        "lat": -28.0157,
        "lng": -49.5925
      },
      {
        "nome": "Urupema",
        "uf": "SC",
        "ibge": 4218954,
        "lat": -27.9557,
        "lng": -49.8729
      },
      {
        "nome": "Urussanga",
        "uf": "SC",
        "ibge": 4219002,
        "lat": -28.518,
        "lng": -49.3238
      },
      {
        "nome": "Vargeão",
        "uf": "SC",
        "ibge": 4219101,
        "lat": -26.8621,
        "lng": -52.1549
      },
      {
        "nome": "Vargem",
        "uf": "SC",
        "ibge": 4219150,
        "lat": -27.4867,
        "lng": -50.9724
      },
      {
        "nome": "Vargem Bonita",
        "uf": "SC",
        "ibge": 4219176,
        "lat": -27.0055,
        "lng": -51.7402
      },
      {
        "nome": "Vidal Ramos",
        "uf": "SC",
        "ibge": 4219200,
        "lat": -27.3886,
        "lng": -49.3593
      },
      {
        "nome": "Videira",
        "uf": "SC",
        "ibge": 4219309,
        "lat": -27.0086,
        "lng": -51.1543
      },
      {
        "nome": "Vitor Meireles",
        "uf": "SC",
        "ibge": 4219358,
        "lat": -26.8782,
        "lng": -49.8328
      },
      {
        "nome": "Witmarsum",
        "uf": "SC",
        "ibge": 4219408,
        "lat": -26.9275,
        "lng": -49.7947
      },
      {
        "nome": "Xanxerê",
        "uf": "SC",
        "ibge": 4219507,
        "lat": -26.8747,
        "lng": -52.4036
      },
      {
        "nome": "Xavantina",
        "uf": "SC",
        "ibge": 4219606,
        "lat": -27.0667,
        "lng": -52.343
      },
      {
        "nome": "Xaxim",
        "uf": "SC",
        "ibge": 4219705,
        "lat": -26.9596,
        "lng": -52.5374
      },
      {
        "nome": "Zortéa",
        "uf": "SC",
        "ibge": 4219853,
        "lat": -27.4521,
        "lng": -51.552
      }
    ],
    "capital": {
      "nome": "Florianópolis",
      "uf": "SC",
      "ibge": 4205407,
      "lat": -27.5945,
      "lng": -48.5477
    }
  },
  "RS": {
    "nome": "Rio Grande do Sul",
    "ibge": 43,
    "cidades": [
      {
        "nome": "Aceguá",
        "uf": "RS",
        "ibge": 4300034,
        "lat": -31.8665,
        "lng": -54.1615
      },
      {
        "nome": "Água Santa",
        "uf": "RS",
        "ibge": 4300059,
        "lat": -28.1672,
        "lng": -52.031
      },
      {
        "nome": "Agudo",
        "uf": "RS",
        "ibge": 4300109,
        "lat": -29.6447,
        "lng": -53.2515
      },
      {
        "nome": "Ajuricaba",
        "uf": "RS",
        "ibge": 4300208,
        "lat": -28.2342,
        "lng": -53.7757
      },
      {
        "nome": "Alecrim",
        "uf": "RS",
        "ibge": 4300307,
        "lat": -27.6579,
        "lng": -54.7649
      },
      {
        "nome": "Alegrete",
        "uf": "RS",
        "ibge": 4300406,
        "lat": -29.7902,
        "lng": -55.7949
      },
      {
        "nome": "Alegria",
        "uf": "RS",
        "ibge": 4300455,
        "lat": -27.8345,
        "lng": -54.0557
      },
      {
        "nome": "Almirante Tamandaré do Sul",
        "uf": "RS",
        "ibge": 4300471,
        "lat": -28.1149,
        "lng": -52.9142
      },
      {
        "nome": "Alpestre",
        "uf": "RS",
        "ibge": 4300505,
        "lat": -27.2502,
        "lng": -53.0341
      },
      {
        "nome": "Alto Alegre",
        "uf": "RS",
        "ibge": 4300554,
        "lat": -28.7769,
        "lng": -52.9893
      },
      {
        "nome": "Alto Feliz",
        "uf": "RS",
        "ibge": 4300570,
        "lat": -29.3919,
        "lng": -51.3123
      },
      {
        "nome": "Alvorada",
        "uf": "RS",
        "ibge": 4300604,
        "lat": -29.9914,
        "lng": -51.0809
      },
      {
        "nome": "Amaral Ferrador",
        "uf": "RS",
        "ibge": 4300638,
        "lat": -30.8756,
        "lng": -52.2509
      },
      {
        "nome": "Ametista do Sul",
        "uf": "RS",
        "ibge": 4300646,
        "lat": -27.3607,
        "lng": -53.183
      },
      {
        "nome": "André da Rocha",
        "uf": "RS",
        "ibge": 4300661,
        "lat": -28.6283,
        "lng": -51.5797
      },
      {
        "nome": "Anta Gorda",
        "uf": "RS",
        "ibge": 4300703,
        "lat": -28.9698,
        "lng": -52.0102
      },
      {
        "nome": "Antônio Prado",
        "uf": "RS",
        "ibge": 4300802,
        "lat": -28.8565,
        "lng": -51.2883
      },
      {
        "nome": "Arambaré",
        "uf": "RS",
        "ibge": 4300851,
        "lat": -30.9092,
        "lng": -51.5046
      },
      {
        "nome": "Araricá",
        "uf": "RS",
        "ibge": 4300877,
        "lat": -29.6168,
        "lng": -50.9291
      },
      {
        "nome": "Aratiba",
        "uf": "RS",
        "ibge": 4300901,
        "lat": -27.3978,
        "lng": -52.2975
      },
      {
        "nome": "Arroio do Meio",
        "uf": "RS",
        "ibge": 4301008,
        "lat": -29.4014,
        "lng": -51.9557
      },
      {
        "nome": "Arroio do Padre",
        "uf": "RS",
        "ibge": 4301073,
        "lat": -31.4389,
        "lng": -52.4246
      },
      {
        "nome": "Arroio do Sal",
        "uf": "RS",
        "ibge": 4301057,
        "lat": -29.5439,
        "lng": -49.8895
      },
      {
        "nome": "Arroio do Tigre",
        "uf": "RS",
        "ibge": 4301206,
        "lat": -29.3348,
        "lng": -53.0966
      },
      {
        "nome": "Arroio dos Ratos",
        "uf": "RS",
        "ibge": 4301107,
        "lat": -30.0875,
        "lng": -51.7275
      },
      {
        "nome": "Arroio Grande",
        "uf": "RS",
        "ibge": 4301305,
        "lat": -32.2327,
        "lng": -53.0862
      },
      {
        "nome": "Arvorezinha",
        "uf": "RS",
        "ibge": 4301404,
        "lat": -28.8737,
        "lng": -52.1781
      },
      {
        "nome": "Augusto Pestana",
        "uf": "RS",
        "ibge": 4301503,
        "lat": -28.5172,
        "lng": -53.9883
      },
      {
        "nome": "Áurea",
        "uf": "RS",
        "ibge": 4301552,
        "lat": -27.6936,
        "lng": -52.0505
      },
      {
        "nome": "Bagé",
        "uf": "RS",
        "ibge": 4301602,
        "lat": -31.3297,
        "lng": -54.0999
      },
      {
        "nome": "Balneário Pinhal",
        "uf": "RS",
        "ibge": 4301636,
        "lat": -30.2419,
        "lng": -50.2337
      },
      {
        "nome": "Barão",
        "uf": "RS",
        "ibge": 4301651,
        "lat": -29.3725,
        "lng": -51.4949
      },
      {
        "nome": "Barão de Cotegipe",
        "uf": "RS",
        "ibge": 4301701,
        "lat": -27.6208,
        "lng": -52.3798
      },
      {
        "nome": "Barão do Triunfo",
        "uf": "RS",
        "ibge": 4301750,
        "lat": -30.3891,
        "lng": -51.7384
      },
      {
        "nome": "Barra do Guarita",
        "uf": "RS",
        "ibge": 4301859,
        "lat": -27.1927,
        "lng": -53.7109
      },
      {
        "nome": "Barra do Quaraí",
        "uf": "RS",
        "ibge": 4301875,
        "lat": -30.2029,
        "lng": -57.5497
      },
      {
        "nome": "Barra do Ribeiro",
        "uf": "RS",
        "ibge": 4301909,
        "lat": -30.2939,
        "lng": -51.3014
      },
      {
        "nome": "Barra do Rio Azul",
        "uf": "RS",
        "ibge": 4301925,
        "lat": -27.4069,
        "lng": -52.4084
      },
      {
        "nome": "Barra Funda",
        "uf": "RS",
        "ibge": 4301958,
        "lat": -27.9205,
        "lng": -53.0391
      },
      {
        "nome": "Barracão",
        "uf": "RS",
        "ibge": 4301800,
        "lat": -27.6739,
        "lng": -51.4585
      },
      {
        "nome": "Barros Cassal",
        "uf": "RS",
        "ibge": 4302006,
        "lat": -29.0947,
        "lng": -52.5836
      },
      {
        "nome": "Benjamin Constant do Sul",
        "uf": "RS",
        "ibge": 4302055,
        "lat": -27.5086,
        "lng": -52.5995
      },
      {
        "nome": "Bento Gonçalves",
        "uf": "RS",
        "ibge": 4302105,
        "lat": -29.1662,
        "lng": -51.5165
      },
      {
        "nome": "Boa Vista das Missões",
        "uf": "RS",
        "ibge": 4302154,
        "lat": -27.6671,
        "lng": -53.3102
      },
      {
        "nome": "Boa Vista do Buricá",
        "uf": "RS",
        "ibge": 4302204,
        "lat": -27.6693,
        "lng": -54.1082
      },
      {
        "nome": "Boa Vista do Cadeado",
        "uf": "RS",
        "ibge": 4302220,
        "lat": -28.5791,
        "lng": -53.8108
      },
      {
        "nome": "Boa Vista do Incra",
        "uf": "RS",
        "ibge": 4302238,
        "lat": -28.8185,
        "lng": -53.391
      },
      {
        "nome": "Boa Vista do Sul",
        "uf": "RS",
        "ibge": 4302253,
        "lat": -29.3544,
        "lng": -51.6687
      },
      {
        "nome": "Bom Jesus",
        "uf": "RS",
        "ibge": 4302303,
        "lat": -28.6697,
        "lng": -50.4295
      },
      {
        "nome": "Bom Princípio",
        "uf": "RS",
        "ibge": 4302352,
        "lat": -29.4856,
        "lng": -51.3548
      },
      {
        "nome": "Bom Progresso",
        "uf": "RS",
        "ibge": 4302378,
        "lat": -27.5399,
        "lng": -53.8716
      },
      {
        "nome": "Bom Retiro do Sul",
        "uf": "RS",
        "ibge": 4302402,
        "lat": -29.6071,
        "lng": -51.9456
      },
      {
        "nome": "Boqueirão do Leão",
        "uf": "RS",
        "ibge": 4302451,
        "lat": -29.3046,
        "lng": -52.4284
      },
      {
        "nome": "Bossoroca",
        "uf": "RS",
        "ibge": 4302501,
        "lat": -28.7291,
        "lng": -54.9035
      },
      {
        "nome": "Bozano",
        "uf": "RS",
        "ibge": 4302584,
        "lat": -28.3659,
        "lng": -53.772
      },
      {
        "nome": "Braga",
        "uf": "RS",
        "ibge": 4302600,
        "lat": -27.6173,
        "lng": -53.7405
      },
      {
        "nome": "Brochier",
        "uf": "RS",
        "ibge": 4302659,
        "lat": -29.5501,
        "lng": -51.5945
      },
      {
        "nome": "Butiá",
        "uf": "RS",
        "ibge": 4302709,
        "lat": -30.1179,
        "lng": -51.9601
      },
      {
        "nome": "Caçapava do Sul",
        "uf": "RS",
        "ibge": 4302808,
        "lat": -30.5144,
        "lng": -53.4827
      },
      {
        "nome": "Cacequi",
        "uf": "RS",
        "ibge": 4302907,
        "lat": -29.8883,
        "lng": -54.822
      },
      {
        "nome": "Cachoeira do Sul",
        "uf": "RS",
        "ibge": 4303004,
        "lat": -30.033,
        "lng": -52.8928
      },
      {
        "nome": "Cachoeirinha",
        "uf": "RS",
        "ibge": 4303103,
        "lat": -29.9472,
        "lng": -51.1016
      },
      {
        "nome": "Cacique Doble",
        "uf": "RS",
        "ibge": 4303202,
        "lat": -27.767,
        "lng": -51.6597
      },
      {
        "nome": "Caibaté",
        "uf": "RS",
        "ibge": 4303301,
        "lat": -28.2905,
        "lng": -54.6454
      },
      {
        "nome": "Caiçara",
        "uf": "RS",
        "ibge": 4303400,
        "lat": -27.2791,
        "lng": -53.4257
      },
      {
        "nome": "Camaquã",
        "uf": "RS",
        "ibge": 4303509,
        "lat": -30.8489,
        "lng": -51.8043
      },
      {
        "nome": "Camargo",
        "uf": "RS",
        "ibge": 4303558,
        "lat": -28.588,
        "lng": -52.2003
      },
      {
        "nome": "Cambará do Sul",
        "uf": "RS",
        "ibge": 4303608,
        "lat": -29.0474,
        "lng": -50.1465
      },
      {
        "nome": "Campestre da Serra",
        "uf": "RS",
        "ibge": 4303673,
        "lat": -28.7926,
        "lng": -51.0941
      },
      {
        "nome": "Campina das Missões",
        "uf": "RS",
        "ibge": 4303707,
        "lat": -27.9888,
        "lng": -54.8416
      },
      {
        "nome": "Campinas do Sul",
        "uf": "RS",
        "ibge": 4303806,
        "lat": -27.7174,
        "lng": -52.6248
      },
      {
        "nome": "Campo Bom",
        "uf": "RS",
        "ibge": 4303905,
        "lat": -29.6747,
        "lng": -51.0606
      },
      {
        "nome": "Campo Novo",
        "uf": "RS",
        "ibge": 4304002,
        "lat": -27.6792,
        "lng": -53.8052
      },
      {
        "nome": "Campos Borges",
        "uf": "RS",
        "ibge": 4304101,
        "lat": -28.8871,
        "lng": -53.0008
      },
      {
        "nome": "Candelária",
        "uf": "RS",
        "ibge": 4304200,
        "lat": -29.6684,
        "lng": -52.7895
      },
      {
        "nome": "Cândido Godói",
        "uf": "RS",
        "ibge": 4304309,
        "lat": -27.9515,
        "lng": -54.7517
      },
      {
        "nome": "Candiota",
        "uf": "RS",
        "ibge": 4304358,
        "lat": -31.5516,
        "lng": -53.6773
      },
      {
        "nome": "Canela",
        "uf": "RS",
        "ibge": 4304408,
        "lat": -29.356,
        "lng": -50.8119
      },
      {
        "nome": "Canguçu",
        "uf": "RS",
        "ibge": 4304507,
        "lat": -31.396,
        "lng": -52.6783
      },
      {
        "nome": "Canoas",
        "uf": "RS",
        "ibge": 4304606,
        "lat": -29.9128,
        "lng": -51.1857
      },
      {
        "nome": "Canudos do Vale",
        "uf": "RS",
        "ibge": 4304614,
        "lat": -29.3271,
        "lng": -52.2374
      },
      {
        "nome": "Capão Bonito do Sul",
        "uf": "RS",
        "ibge": 4304622,
        "lat": -28.1254,
        "lng": -51.3961
      },
      {
        "nome": "Capão da Canoa",
        "uf": "RS",
        "ibge": 4304630,
        "lat": -29.7642,
        "lng": -50.0282
      },
      {
        "nome": "Capão do Cipó",
        "uf": "RS",
        "ibge": 4304655,
        "lat": -28.9312,
        "lng": -54.5558
      },
      {
        "nome": "Capão do Leão",
        "uf": "RS",
        "ibge": 4304663,
        "lat": -31.7565,
        "lng": -52.4889
      },
      {
        "nome": "Capela de Santana",
        "uf": "RS",
        "ibge": 4304689,
        "lat": -29.6961,
        "lng": -51.328
      },
      {
        "nome": "Capitão",
        "uf": "RS",
        "ibge": 4304697,
        "lat": -29.2674,
        "lng": -51.9853
      },
      {
        "nome": "Capivari do Sul",
        "uf": "RS",
        "ibge": 4304671,
        "lat": -30.1383,
        "lng": -50.5152
      },
      {
        "nome": "Caraá",
        "uf": "RS",
        "ibge": 4304713,
        "lat": -29.7869,
        "lng": -50.4316
      },
      {
        "nome": "Carazinho",
        "uf": "RS",
        "ibge": 4304705,
        "lat": -28.2958,
        "lng": -52.7933
      },
      {
        "nome": "Carlos Barbosa",
        "uf": "RS",
        "ibge": 4304804,
        "lat": -29.2969,
        "lng": -51.5028
      },
      {
        "nome": "Carlos Gomes",
        "uf": "RS",
        "ibge": 4304853,
        "lat": -27.7167,
        "lng": -51.9121
      },
      {
        "nome": "Casca",
        "uf": "RS",
        "ibge": 4304903,
        "lat": -28.5605,
        "lng": -51.9815
      },
      {
        "nome": "Caseiros",
        "uf": "RS",
        "ibge": 4304952,
        "lat": -28.2582,
        "lng": -51.6861
      },
      {
        "nome": "Catuípe",
        "uf": "RS",
        "ibge": 4305009,
        "lat": -28.2554,
        "lng": -54.0132
      },
      {
        "nome": "Caxias do Sul",
        "uf": "RS",
        "ibge": 4305108,
        "lat": -29.1629,
        "lng": -51.1792
      },
      {
        "nome": "Centenário",
        "uf": "RS",
        "ibge": 4305116,
        "lat": -27.7615,
        "lng": -51.9984
      },
      {
        "nome": "Cerrito",
        "uf": "RS",
        "ibge": 4305124,
        "lat": -31.8419,
        "lng": -52.8004
      },
      {
        "nome": "Cerro Branco",
        "uf": "RS",
        "ibge": 4305132,
        "lat": -29.657,
        "lng": -52.9406
      },
      {
        "nome": "Cerro Grande",
        "uf": "RS",
        "ibge": 4305157,
        "lat": -27.6106,
        "lng": -53.1672
      },
      {
        "nome": "Cerro Grande do Sul",
        "uf": "RS",
        "ibge": 4305173,
        "lat": -30.5905,
        "lng": -51.7418
      },
      {
        "nome": "Cerro Largo",
        "uf": "RS",
        "ibge": 4305207,
        "lat": -28.1463,
        "lng": -54.7428
      },
      {
        "nome": "Chapada",
        "uf": "RS",
        "ibge": 4305306,
        "lat": -28.0559,
        "lng": -53.0665
      },
      {
        "nome": "Charqueadas",
        "uf": "RS",
        "ibge": 4305355,
        "lat": -29.9625,
        "lng": -51.6289
      },
      {
        "nome": "Charrua",
        "uf": "RS",
        "ibge": 4305371,
        "lat": -27.9493,
        "lng": -52.015
      },
      {
        "nome": "Chiapetta",
        "uf": "RS",
        "ibge": 4305405,
        "lat": -27.923,
        "lng": -53.9419
      },
      {
        "nome": "Chuí",
        "uf": "RS",
        "ibge": 4305439,
        "lat": -33.6866,
        "lng": -53.4594
      },
      {
        "nome": "Chuvisca",
        "uf": "RS",
        "ibge": 4305447,
        "lat": -30.7504,
        "lng": -51.9737
      },
      {
        "nome": "Cidreira",
        "uf": "RS",
        "ibge": 4305454,
        "lat": -30.1604,
        "lng": -50.2337
      },
      {
        "nome": "Ciríaco",
        "uf": "RS",
        "ibge": 4305504,
        "lat": -28.3419,
        "lng": -51.8741
      },
      {
        "nome": "Colinas",
        "uf": "RS",
        "ibge": 4305587,
        "lat": -29.3948,
        "lng": -51.8556
      },
      {
        "nome": "Colorado",
        "uf": "RS",
        "ibge": 4305603,
        "lat": -28.5258,
        "lng": -52.9928
      },
      {
        "nome": "Condor",
        "uf": "RS",
        "ibge": 4305702,
        "lat": -28.2075,
        "lng": -53.4905
      },
      {
        "nome": "Constantina",
        "uf": "RS",
        "ibge": 4305801,
        "lat": -27.732,
        "lng": -52.9938
      },
      {
        "nome": "Coqueiro Baixo",
        "uf": "RS",
        "ibge": 4305835,
        "lat": -29.1802,
        "lng": -52.0942
      },
      {
        "nome": "Coqueiros do Sul",
        "uf": "RS",
        "ibge": 4305850,
        "lat": -28.1194,
        "lng": -52.7842
      },
      {
        "nome": "Coronel Barros",
        "uf": "RS",
        "ibge": 4305871,
        "lat": -28.3921,
        "lng": -54.0686
      },
      {
        "nome": "Coronel Bicaco",
        "uf": "RS",
        "ibge": 4305900,
        "lat": -27.7197,
        "lng": -53.7022
      },
      {
        "nome": "Coronel Pilar",
        "uf": "RS",
        "ibge": 4305934,
        "lat": -29.2695,
        "lng": -51.6847
      },
      {
        "nome": "Cotiporã",
        "uf": "RS",
        "ibge": 4305959,
        "lat": -28.9891,
        "lng": -51.6971
      },
      {
        "nome": "Coxilha",
        "uf": "RS",
        "ibge": 4305975,
        "lat": -28.128,
        "lng": -52.3023
      },
      {
        "nome": "Crissiumal",
        "uf": "RS",
        "ibge": 4306007,
        "lat": -27.4999,
        "lng": -54.0994
      },
      {
        "nome": "Cristal",
        "uf": "RS",
        "ibge": 4306056,
        "lat": -31.0046,
        "lng": -52.0436
      },
      {
        "nome": "Cristal do Sul",
        "uf": "RS",
        "ibge": 4306072,
        "lat": -27.452,
        "lng": -53.2422
      },
      {
        "nome": "Cruz Alta",
        "uf": "RS",
        "ibge": 4306106,
        "lat": -28.645,
        "lng": -53.6048
      },
      {
        "nome": "Cruzaltense",
        "uf": "RS",
        "ibge": 4306130,
        "lat": -27.6672,
        "lng": -52.6522
      },
      {
        "nome": "Cruzeiro do Sul",
        "uf": "RS",
        "ibge": 4306205,
        "lat": -29.5148,
        "lng": -51.9928
      },
      {
        "nome": "David Canabarro",
        "uf": "RS",
        "ibge": 4306304,
        "lat": -28.3849,
        "lng": -51.8482
      },
      {
        "nome": "Derrubadas",
        "uf": "RS",
        "ibge": 4306320,
        "lat": -27.2642,
        "lng": -53.8645
      },
      {
        "nome": "Dezesseis de Novembro",
        "uf": "RS",
        "ibge": 4306353,
        "lat": -28.219,
        "lng": -55.0617
      },
      {
        "nome": "Dilermando de Aguiar",
        "uf": "RS",
        "ibge": 4306379,
        "lat": -29.7054,
        "lng": -54.2122
      },
      {
        "nome": "Dois Irmãos",
        "uf": "RS",
        "ibge": 4306403,
        "lat": -29.5836,
        "lng": -51.0898
      },
      {
        "nome": "Dois Irmãos das Missões",
        "uf": "RS",
        "ibge": 4306429,
        "lat": -27.6621,
        "lng": -53.5304
      },
      {
        "nome": "Dois Lajeados",
        "uf": "RS",
        "ibge": 4306452,
        "lat": -28.983,
        "lng": -51.8396
      },
      {
        "nome": "Dom Feliciano",
        "uf": "RS",
        "ibge": 4306502,
        "lat": -30.7004,
        "lng": -52.1026
      },
      {
        "nome": "Dom Pedrito",
        "uf": "RS",
        "ibge": 4306601,
        "lat": -30.9756,
        "lng": -54.6694
      },
      {
        "nome": "Dom Pedro de Alcântara",
        "uf": "RS",
        "ibge": 4306551,
        "lat": -29.3639,
        "lng": -49.853
      },
      {
        "nome": "Dona Francisca",
        "uf": "RS",
        "ibge": 4306700,
        "lat": -29.6195,
        "lng": -53.3617
      },
      {
        "nome": "Doutor Maurício Cardoso",
        "uf": "RS",
        "ibge": 4306734,
        "lat": -27.5103,
        "lng": -54.3577
      },
      {
        "nome": "Doutor Ricardo",
        "uf": "RS",
        "ibge": 4306759,
        "lat": -29.084,
        "lng": -51.9972
      },
      {
        "nome": "Eldorado do Sul",
        "uf": "RS",
        "ibge": 4306767,
        "lat": -30.0847,
        "lng": -51.6187
      },
      {
        "nome": "Encantado",
        "uf": "RS",
        "ibge": 4306809,
        "lat": -29.2351,
        "lng": -51.8703
      },
      {
        "nome": "Encruzilhada do Sul",
        "uf": "RS",
        "ibge": 4306908,
        "lat": -30.543,
        "lng": -52.5204
      },
      {
        "nome": "Engenho Velho",
        "uf": "RS",
        "ibge": 4306924,
        "lat": -27.706,
        "lng": -52.9145
      },
      {
        "nome": "Entre Rios do Sul",
        "uf": "RS",
        "ibge": 4306957,
        "lat": -27.5298,
        "lng": -52.7347
      },
      {
        "nome": "Entre-Ijuís",
        "uf": "RS",
        "ibge": 4306932,
        "lat": -28.3686,
        "lng": -54.2686
      },
      {
        "nome": "Erebango",
        "uf": "RS",
        "ibge": 4306973,
        "lat": -27.8544,
        "lng": -52.3005
      },
      {
        "nome": "Erechim",
        "uf": "RS",
        "ibge": 4307005,
        "lat": -27.6364,
        "lng": -52.2697
      },
      {
        "nome": "Ernestina",
        "uf": "RS",
        "ibge": 4307054,
        "lat": -28.4977,
        "lng": -52.5836
      },
      {
        "nome": "Erval Grande",
        "uf": "RS",
        "ibge": 4307203,
        "lat": -27.3926,
        "lng": -52.574
      },
      {
        "nome": "Erval Seco",
        "uf": "RS",
        "ibge": 4307302,
        "lat": -27.5443,
        "lng": -53.5005
      },
      {
        "nome": "Esmeralda",
        "uf": "RS",
        "ibge": 4307401,
        "lat": -28.0518,
        "lng": -51.1933
      },
      {
        "nome": "Esperança do Sul",
        "uf": "RS",
        "ibge": 4307450,
        "lat": -27.3603,
        "lng": -53.9891
      },
      {
        "nome": "Espumoso",
        "uf": "RS",
        "ibge": 4307500,
        "lat": -28.7286,
        "lng": -52.8461
      },
      {
        "nome": "Estação",
        "uf": "RS",
        "ibge": 4307559,
        "lat": -27.9135,
        "lng": -52.2635
      },
      {
        "nome": "Estância Velha",
        "uf": "RS",
        "ibge": 4307609,
        "lat": -29.6535,
        "lng": -51.1843
      },
      {
        "nome": "Esteio",
        "uf": "RS",
        "ibge": 4307708,
        "lat": -29.852,
        "lng": -51.1841
      },
      {
        "nome": "Estrela",
        "uf": "RS",
        "ibge": 4307807,
        "lat": -29.5002,
        "lng": -51.9495
      },
      {
        "nome": "Estrela Velha",
        "uf": "RS",
        "ibge": 4307815,
        "lat": -29.1713,
        "lng": -53.1639
      },
      {
        "nome": "Eugênio de Castro",
        "uf": "RS",
        "ibge": 4307831,
        "lat": -28.5315,
        "lng": -54.1506
      },
      {
        "nome": "Fagundes Varela",
        "uf": "RS",
        "ibge": 4307864,
        "lat": -28.8794,
        "lng": -51.7014
      },
      {
        "nome": "Farroupilha",
        "uf": "RS",
        "ibge": 4307906,
        "lat": -29.2227,
        "lng": -51.3419
      },
      {
        "nome": "Faxinal do Soturno",
        "uf": "RS",
        "ibge": 4308003,
        "lat": -29.5788,
        "lng": -53.4484
      },
      {
        "nome": "Faxinalzinho",
        "uf": "RS",
        "ibge": 4308052,
        "lat": -27.4238,
        "lng": -52.6789
      },
      {
        "nome": "Fazenda Vilanova",
        "uf": "RS",
        "ibge": 4308078,
        "lat": -29.5885,
        "lng": -51.8217
      },
      {
        "nome": "Feliz",
        "uf": "RS",
        "ibge": 4308102,
        "lat": -29.4527,
        "lng": -51.3032
      },
      {
        "nome": "Flores da Cunha",
        "uf": "RS",
        "ibge": 4308201,
        "lat": -29.0261,
        "lng": -51.1875
      },
      {
        "nome": "Floriano Peixoto",
        "uf": "RS",
        "ibge": 4308250,
        "lat": -27.8614,
        "lng": -52.0838
      },
      {
        "nome": "Fontoura Xavier",
        "uf": "RS",
        "ibge": 4308300,
        "lat": -28.9817,
        "lng": -52.3445
      },
      {
        "nome": "Formigueiro",
        "uf": "RS",
        "ibge": 4308409,
        "lat": -30.0035,
        "lng": -53.4959
      },
      {
        "nome": "Forquetinha",
        "uf": "RS",
        "ibge": 4308433,
        "lat": -29.3828,
        "lng": -52.0981
      },
      {
        "nome": "Fortaleza dos Valos",
        "uf": "RS",
        "ibge": 4308458,
        "lat": -28.7986,
        "lng": -53.2249
      },
      {
        "nome": "Frederico Westphalen",
        "uf": "RS",
        "ibge": 4308508,
        "lat": -27.3586,
        "lng": -53.3958
      },
      {
        "nome": "Garibaldi",
        "uf": "RS",
        "ibge": 4308607,
        "lat": -29.259,
        "lng": -51.5352
      },
      {
        "nome": "Garruchos",
        "uf": "RS",
        "ibge": 4308656,
        "lat": -28.1944,
        "lng": -55.6383
      },
      {
        "nome": "Gaurama",
        "uf": "RS",
        "ibge": 4308706,
        "lat": -27.5856,
        "lng": -52.0915
      },
      {
        "nome": "General Câmara",
        "uf": "RS",
        "ibge": 4308805,
        "lat": -29.9032,
        "lng": -51.7612
      },
      {
        "nome": "Gentil",
        "uf": "RS",
        "ibge": 4308854,
        "lat": -28.4316,
        "lng": -52.0337
      },
      {
        "nome": "Getúlio Vargas",
        "uf": "RS",
        "ibge": 4308904,
        "lat": -27.8911,
        "lng": -52.2294
      },
      {
        "nome": "Giruá",
        "uf": "RS",
        "ibge": 4309001,
        "lat": -28.0297,
        "lng": -54.3517
      },
      {
        "nome": "Glorinha",
        "uf": "RS",
        "ibge": 4309050,
        "lat": -29.8798,
        "lng": -50.7734
      },
      {
        "nome": "Gramado",
        "uf": "RS",
        "ibge": 4309100,
        "lat": -29.3734,
        "lng": -50.8762
      },
      {
        "nome": "Gramado dos Loureiros",
        "uf": "RS",
        "ibge": 4309126,
        "lat": -27.4429,
        "lng": -52.9149
      },
      {
        "nome": "Gramado Xavier",
        "uf": "RS",
        "ibge": 4309159,
        "lat": -29.2706,
        "lng": -52.5795
      },
      {
        "nome": "Gravataí",
        "uf": "RS",
        "ibge": 4309209,
        "lat": -29.9413,
        "lng": -50.9869
      },
      {
        "nome": "Guabiju",
        "uf": "RS",
        "ibge": 4309258,
        "lat": -28.5421,
        "lng": -51.6948
      },
      {
        "nome": "Guaíba",
        "uf": "RS",
        "ibge": 4309308,
        "lat": -30.1086,
        "lng": -51.3233
      },
      {
        "nome": "Guaporé",
        "uf": "RS",
        "ibge": 4309407,
        "lat": -28.8399,
        "lng": -51.8895
      },
      {
        "nome": "Guarani das Missões",
        "uf": "RS",
        "ibge": 4309506,
        "lat": -28.1491,
        "lng": -54.5629
      },
      {
        "nome": "Harmonia",
        "uf": "RS",
        "ibge": 4309555,
        "lat": -29.5456,
        "lng": -51.4185
      },
      {
        "nome": "Herval",
        "uf": "RS",
        "ibge": 4307104,
        "lat": -32.024,
        "lng": -53.3944
      },
      {
        "nome": "Herveiras",
        "uf": "RS",
        "ibge": 4309571,
        "lat": -29.4552,
        "lng": -52.6553
      },
      {
        "nome": "Horizontina",
        "uf": "RS",
        "ibge": 4309605,
        "lat": -27.6282,
        "lng": -54.3053
      },
      {
        "nome": "Hulha Negra",
        "uf": "RS",
        "ibge": 4309654,
        "lat": -31.4067,
        "lng": -53.8667
      },
      {
        "nome": "Humaitá",
        "uf": "RS",
        "ibge": 4309704,
        "lat": -27.5691,
        "lng": -53.9695
      },
      {
        "nome": "Ibarama",
        "uf": "RS",
        "ibge": 4309753,
        "lat": -29.4203,
        "lng": -53.1295
      },
      {
        "nome": "Ibiaçá",
        "uf": "RS",
        "ibge": 4309803,
        "lat": -28.0566,
        "lng": -51.8599
      },
      {
        "nome": "Ibiraiaras",
        "uf": "RS",
        "ibge": 4309902,
        "lat": -28.3741,
        "lng": -51.6377
      },
      {
        "nome": "Ibirapuitã",
        "uf": "RS",
        "ibge": 4309951,
        "lat": -28.6247,
        "lng": -52.5158
      },
      {
        "nome": "Ibirubá",
        "uf": "RS",
        "ibge": 4310009,
        "lat": -28.6302,
        "lng": -53.0961
      },
      {
        "nome": "Igrejinha",
        "uf": "RS",
        "ibge": 4310108,
        "lat": -29.5693,
        "lng": -50.7919
      },
      {
        "nome": "Ijuí",
        "uf": "RS",
        "ibge": 4310207,
        "lat": -28.388,
        "lng": -53.92
      },
      {
        "nome": "Ilópolis",
        "uf": "RS",
        "ibge": 4310306,
        "lat": -28.9282,
        "lng": -52.1258
      },
      {
        "nome": "Imbé",
        "uf": "RS",
        "ibge": 4310330,
        "lat": -29.9753,
        "lng": -50.1281
      },
      {
        "nome": "Imigrante",
        "uf": "RS",
        "ibge": 4310363,
        "lat": -29.3508,
        "lng": -51.7748
      },
      {
        "nome": "Independência",
        "uf": "RS",
        "ibge": 4310405,
        "lat": -27.8354,
        "lng": -54.1886
      },
      {
        "nome": "Inhacorá",
        "uf": "RS",
        "ibge": 4310413,
        "lat": -27.8752,
        "lng": -54.015
      },
      {
        "nome": "Ipê",
        "uf": "RS",
        "ibge": 4310439,
        "lat": -28.8171,
        "lng": -51.2859
      },
      {
        "nome": "Ipiranga do Sul",
        "uf": "RS",
        "ibge": 4310462,
        "lat": -27.9404,
        "lng": -52.4271
      },
      {
        "nome": "Iraí",
        "uf": "RS",
        "ibge": 4310504,
        "lat": -27.1951,
        "lng": -53.2543
      },
      {
        "nome": "Itaara",
        "uf": "RS",
        "ibge": 4310538,
        "lat": -29.6013,
        "lng": -53.7725
      },
      {
        "nome": "Itacurubi",
        "uf": "RS",
        "ibge": 4310553,
        "lat": -28.7913,
        "lng": -55.2447
      },
      {
        "nome": "Itapuca",
        "uf": "RS",
        "ibge": 4310579,
        "lat": -28.7768,
        "lng": -52.1693
      },
      {
        "nome": "Itaqui",
        "uf": "RS",
        "ibge": 4310603,
        "lat": -29.1311,
        "lng": -56.5515
      },
      {
        "nome": "Itati",
        "uf": "RS",
        "ibge": 4310652,
        "lat": -29.4974,
        "lng": -50.1016
      },
      {
        "nome": "Itatiba do Sul",
        "uf": "RS",
        "ibge": 4310702,
        "lat": -27.3846,
        "lng": -52.4538
      },
      {
        "nome": "Ivorá",
        "uf": "RS",
        "ibge": 4310751,
        "lat": -29.5232,
        "lng": -53.5842
      },
      {
        "nome": "Ivoti",
        "uf": "RS",
        "ibge": 4310801,
        "lat": -29.5995,
        "lng": -51.1533
      },
      {
        "nome": "Jaboticaba",
        "uf": "RS",
        "ibge": 4310850,
        "lat": -27.6347,
        "lng": -53.2762
      },
      {
        "nome": "Jacuizinho",
        "uf": "RS",
        "ibge": 4310876,
        "lat": -29.0401,
        "lng": -53.0657
      },
      {
        "nome": "Jacutinga",
        "uf": "RS",
        "ibge": 4310900,
        "lat": -27.7291,
        "lng": -52.5372
      },
      {
        "nome": "Jaguarão",
        "uf": "RS",
        "ibge": 4311007,
        "lat": -32.5604,
        "lng": -53.377
      },
      {
        "nome": "Jaguari",
        "uf": "RS",
        "ibge": 4311106,
        "lat": -29.4936,
        "lng": -54.703
      },
      {
        "nome": "Jaquirana",
        "uf": "RS",
        "ibge": 4311122,
        "lat": -28.8811,
        "lng": -50.3637
      },
      {
        "nome": "Jari",
        "uf": "RS",
        "ibge": 4311130,
        "lat": -29.2922,
        "lng": -54.2237
      },
      {
        "nome": "Jóia",
        "uf": "RS",
        "ibge": 4311155,
        "lat": -28.6435,
        "lng": -54.1141
      },
      {
        "nome": "Júlio de Castilhos",
        "uf": "RS",
        "ibge": 4311205,
        "lat": -29.2299,
        "lng": -53.6772
      },
      {
        "nome": "Lagoa Bonita do Sul",
        "uf": "RS",
        "ibge": 4311239,
        "lat": -29.4939,
        "lng": -53.017
      },
      {
        "nome": "Lagoa dos Três Cantos",
        "uf": "RS",
        "ibge": 4311270,
        "lat": -28.5676,
        "lng": -52.8618
      },
      {
        "nome": "Lagoa Vermelha",
        "uf": "RS",
        "ibge": 4311304,
        "lat": -28.2093,
        "lng": -51.5248
      },
      {
        "nome": "Lagoão",
        "uf": "RS",
        "ibge": 4311254,
        "lat": -29.2348,
        "lng": -52.7997
      },
      {
        "nome": "Lajeado",
        "uf": "RS",
        "ibge": 4311403,
        "lat": -29.4591,
        "lng": -51.9644
      },
      {
        "nome": "Lajeado do Bugre",
        "uf": "RS",
        "ibge": 4311429,
        "lat": -27.6913,
        "lng": -53.1818
      },
      {
        "nome": "Lavras do Sul",
        "uf": "RS",
        "ibge": 4311502,
        "lat": -30.8071,
        "lng": -53.8931
      },
      {
        "nome": "Liberato Salzano",
        "uf": "RS",
        "ibge": 4311601,
        "lat": -27.601,
        "lng": -53.0753
      },
      {
        "nome": "Lindolfo Collor",
        "uf": "RS",
        "ibge": 4311627,
        "lat": -29.5859,
        "lng": -51.2141
      },
      {
        "nome": "Linha Nova",
        "uf": "RS",
        "ibge": 4311643,
        "lat": -29.4679,
        "lng": -51.2003
      },
      {
        "nome": "Maçambará",
        "uf": "RS",
        "ibge": 4311718,
        "lat": -29.1445,
        "lng": -56.0674
      },
      {
        "nome": "Machadinho",
        "uf": "RS",
        "ibge": 4311700,
        "lat": -27.5667,
        "lng": -51.6668
      },
      {
        "nome": "Mampituba",
        "uf": "RS",
        "ibge": 4311734,
        "lat": -29.2136,
        "lng": -49.9311
      },
      {
        "nome": "Manoel Viana",
        "uf": "RS",
        "ibge": 4311759,
        "lat": -29.5859,
        "lng": -55.4841
      },
      {
        "nome": "Maquiné",
        "uf": "RS",
        "ibge": 4311775,
        "lat": -29.6798,
        "lng": -50.2079
      },
      {
        "nome": "Maratá",
        "uf": "RS",
        "ibge": 4311791,
        "lat": -29.5457,
        "lng": -51.5573
      },
      {
        "nome": "Marau",
        "uf": "RS",
        "ibge": 4311809,
        "lat": -28.4498,
        "lng": -52.1986
      },
      {
        "nome": "Marcelino Ramos",
        "uf": "RS",
        "ibge": 4311908,
        "lat": -27.4676,
        "lng": -51.9095
      },
      {
        "nome": "Mariana Pimentel",
        "uf": "RS",
        "ibge": 4311981,
        "lat": -30.353,
        "lng": -51.5803
      },
      {
        "nome": "Mariano Moro",
        "uf": "RS",
        "ibge": 4312005,
        "lat": -27.3568,
        "lng": -52.1467
      },
      {
        "nome": "Marques de Souza",
        "uf": "RS",
        "ibge": 4312054,
        "lat": -29.3311,
        "lng": -52.0973
      },
      {
        "nome": "Mata",
        "uf": "RS",
        "ibge": 4312104,
        "lat": -29.5649,
        "lng": -54.4641
      },
      {
        "nome": "Mato Castelhano",
        "uf": "RS",
        "ibge": 4312138,
        "lat": -28.28,
        "lng": -52.1932
      },
      {
        "nome": "Mato Leitão",
        "uf": "RS",
        "ibge": 4312153,
        "lat": -29.5285,
        "lng": -52.1278
      },
      {
        "nome": "Mato Queimado",
        "uf": "RS",
        "ibge": 4312179,
        "lat": -28.252,
        "lng": -54.6159
      },
      {
        "nome": "Maximiliano de Almeida",
        "uf": "RS",
        "ibge": 4312203,
        "lat": -27.6325,
        "lng": -51.802
      },
      {
        "nome": "Minas do Leão",
        "uf": "RS",
        "ibge": 4312252,
        "lat": -30.1346,
        "lng": -52.0423
      },
      {
        "nome": "Miraguaí",
        "uf": "RS",
        "ibge": 4312302,
        "lat": -27.497,
        "lng": -53.6891
      },
      {
        "nome": "Montauri",
        "uf": "RS",
        "ibge": 4312351,
        "lat": -28.6462,
        "lng": -52.0767
      },
      {
        "nome": "Monte Alegre dos Campos",
        "uf": "RS",
        "ibge": 4312377,
        "lat": -28.6805,
        "lng": -50.7834
      },
      {
        "nome": "Monte Belo do Sul",
        "uf": "RS",
        "ibge": 4312385,
        "lat": -29.1607,
        "lng": -51.6333
      },
      {
        "nome": "Montenegro",
        "uf": "RS",
        "ibge": 4312401,
        "lat": -29.6824,
        "lng": -51.4679
      },
      {
        "nome": "Mormaço",
        "uf": "RS",
        "ibge": 4312427,
        "lat": -28.6968,
        "lng": -52.6999
      },
      {
        "nome": "Morrinhos do Sul",
        "uf": "RS",
        "ibge": 4312443,
        "lat": -29.3578,
        "lng": -49.9328
      },
      {
        "nome": "Morro Redondo",
        "uf": "RS",
        "ibge": 4312450,
        "lat": -31.5887,
        "lng": -52.6261
      },
      {
        "nome": "Morro Reuter",
        "uf": "RS",
        "ibge": 4312476,
        "lat": -29.5379,
        "lng": -51.0811
      },
      {
        "nome": "Mostardas",
        "uf": "RS",
        "ibge": 4312500,
        "lat": -31.1054,
        "lng": -50.9167
      },
      {
        "nome": "Muçum",
        "uf": "RS",
        "ibge": 4312609,
        "lat": -29.163,
        "lng": -51.8714
      },
      {
        "nome": "Muitos Capões",
        "uf": "RS",
        "ibge": 4312617,
        "lat": -28.3132,
        "lng": -51.1836
      },
      {
        "nome": "Muliterno",
        "uf": "RS",
        "ibge": 4312625,
        "lat": -28.3253,
        "lng": -51.7697
      },
      {
        "nome": "Não-Me-Toque",
        "uf": "RS",
        "ibge": 4312658,
        "lat": -28.4548,
        "lng": -52.8182
      },
      {
        "nome": "Nicolau Vergueiro",
        "uf": "RS",
        "ibge": 4312674,
        "lat": -28.5298,
        "lng": -52.4676
      },
      {
        "nome": "Nonoai",
        "uf": "RS",
        "ibge": 4312708,
        "lat": -27.3689,
        "lng": -52.7756
      },
      {
        "nome": "Nova Alvorada",
        "uf": "RS",
        "ibge": 4312757,
        "lat": -28.6822,
        "lng": -52.1631
      },
      {
        "nome": "Nova Araçá",
        "uf": "RS",
        "ibge": 4312807,
        "lat": -28.6537,
        "lng": -51.7458
      },
      {
        "nome": "Nova Bassano",
        "uf": "RS",
        "ibge": 4312906,
        "lat": -28.7291,
        "lng": -51.7072
      },
      {
        "nome": "Nova Boa Vista",
        "uf": "RS",
        "ibge": 4312955,
        "lat": -27.9926,
        "lng": -52.9784
      },
      {
        "nome": "Nova Bréscia",
        "uf": "RS",
        "ibge": 4313003,
        "lat": -29.2182,
        "lng": -52.0319
      },
      {
        "nome": "Nova Candelária",
        "uf": "RS",
        "ibge": 4313011,
        "lat": -27.6137,
        "lng": -54.1074
      },
      {
        "nome": "Nova Esperança do Sul",
        "uf": "RS",
        "ibge": 4313037,
        "lat": -29.4066,
        "lng": -54.8293
      },
      {
        "nome": "Nova Hartz",
        "uf": "RS",
        "ibge": 4313060,
        "lat": -29.5808,
        "lng": -50.9051
      },
      {
        "nome": "Nova Pádua",
        "uf": "RS",
        "ibge": 4313086,
        "lat": -29.0275,
        "lng": -51.3098
      },
      {
        "nome": "Nova Palma",
        "uf": "RS",
        "ibge": 4313102,
        "lat": -29.471,
        "lng": -53.4689
      },
      {
        "nome": "Nova Petrópolis",
        "uf": "RS",
        "ibge": 4313201,
        "lat": -29.3741,
        "lng": -51.1136
      },
      {
        "nome": "Nova Prata",
        "uf": "RS",
        "ibge": 4313300,
        "lat": -28.7799,
        "lng": -51.6113
      },
      {
        "nome": "Nova Ramada",
        "uf": "RS",
        "ibge": 4313334,
        "lat": -28.0667,
        "lng": -53.6992
      },
      {
        "nome": "Nova Roma do Sul",
        "uf": "RS",
        "ibge": 4313359,
        "lat": -28.9882,
        "lng": -51.4095
      },
      {
        "nome": "Nova Santa Rita",
        "uf": "RS",
        "ibge": 4313375,
        "lat": -29.8525,
        "lng": -51.2837
      },
      {
        "nome": "Novo Barreiro",
        "uf": "RS",
        "ibge": 4313490,
        "lat": -27.9077,
        "lng": -53.1103
      },
      {
        "nome": "Novo Cabrais",
        "uf": "RS",
        "ibge": 4313391,
        "lat": -29.7338,
        "lng": -52.9489
      },
      {
        "nome": "Novo Hamburgo",
        "uf": "RS",
        "ibge": 4313409,
        "lat": -29.6875,
        "lng": -51.1328
      },
      {
        "nome": "Novo Machado",
        "uf": "RS",
        "ibge": 4313425,
        "lat": -27.5765,
        "lng": -54.5036
      },
      {
        "nome": "Novo Tiradentes",
        "uf": "RS",
        "ibge": 4313441,
        "lat": -27.5649,
        "lng": -53.1837
      },
      {
        "nome": "Novo Xingu",
        "uf": "RS",
        "ibge": 4313466,
        "lat": -27.749,
        "lng": -53.0639
      },
      {
        "nome": "Osório",
        "uf": "RS",
        "ibge": 4313508,
        "lat": -29.8881,
        "lng": -50.2667
      },
      {
        "nome": "Paim Filho",
        "uf": "RS",
        "ibge": 4313607,
        "lat": -27.7075,
        "lng": -51.763
      },
      {
        "nome": "Palmares do Sul",
        "uf": "RS",
        "ibge": 4313656,
        "lat": -30.2535,
        "lng": -50.5103
      },
      {
        "nome": "Palmeira das Missões",
        "uf": "RS",
        "ibge": 4313706,
        "lat": -27.9007,
        "lng": -53.3134
      },
      {
        "nome": "Palmitinho",
        "uf": "RS",
        "ibge": 4313805,
        "lat": -27.3596,
        "lng": -53.558
      },
      {
        "nome": "Panambi",
        "uf": "RS",
        "ibge": 4313904,
        "lat": -28.2833,
        "lng": -53.5023
      },
      {
        "nome": "Pantano Grande",
        "uf": "RS",
        "ibge": 4313953,
        "lat": -30.1902,
        "lng": -52.3729
      },
      {
        "nome": "Paraí",
        "uf": "RS",
        "ibge": 4314001,
        "lat": -28.5964,
        "lng": -51.7896
      },
      {
        "nome": "Paraíso do Sul",
        "uf": "RS",
        "ibge": 4314027,
        "lat": -29.6717,
        "lng": -53.144
      },
      {
        "nome": "Pareci Novo",
        "uf": "RS",
        "ibge": 4314035,
        "lat": -29.6365,
        "lng": -51.3974
      },
      {
        "nome": "Parobé",
        "uf": "RS",
        "ibge": 4314050,
        "lat": -29.6243,
        "lng": -50.8312
      },
      {
        "nome": "Passa Sete",
        "uf": "RS",
        "ibge": 4314068,
        "lat": -29.4577,
        "lng": -52.9599
      },
      {
        "nome": "Passo do Sobrado",
        "uf": "RS",
        "ibge": 4314076,
        "lat": -29.748,
        "lng": -52.2748
      },
      {
        "nome": "Passo Fundo",
        "uf": "RS",
        "ibge": 4314100,
        "lat": -28.2576,
        "lng": -52.4091
      },
      {
        "nome": "Paulo Bento",
        "uf": "RS",
        "ibge": 4314134,
        "lat": -27.7051,
        "lng": -52.4169
      },
      {
        "nome": "Paverama",
        "uf": "RS",
        "ibge": 4314159,
        "lat": -29.5486,
        "lng": -51.7339
      },
      {
        "nome": "Pedras Altas",
        "uf": "RS",
        "ibge": 4314175,
        "lat": -31.7365,
        "lng": -53.5814
      },
      {
        "nome": "Pedro Osório",
        "uf": "RS",
        "ibge": 4314209,
        "lat": -31.8642,
        "lng": -52.8184
      },
      {
        "nome": "Pejuçara",
        "uf": "RS",
        "ibge": 4314308,
        "lat": -28.4283,
        "lng": -53.6579
      },
      {
        "nome": "Pelotas",
        "uf": "RS",
        "ibge": 4314407,
        "lat": -31.7649,
        "lng": -52.3371
      },
      {
        "nome": "Picada Café",
        "uf": "RS",
        "ibge": 4314423,
        "lat": -29.4464,
        "lng": -51.1367
      },
      {
        "nome": "Pinhal",
        "uf": "RS",
        "ibge": 4314456,
        "lat": -27.508,
        "lng": -53.2082
      },
      {
        "nome": "Pinhal da Serra",
        "uf": "RS",
        "ibge": 4314464,
        "lat": -27.8751,
        "lng": -51.1673
      },
      {
        "nome": "Pinhal Grande",
        "uf": "RS",
        "ibge": 4314472,
        "lat": -29.345,
        "lng": -53.3206
      },
      {
        "nome": "Pinheirinho do Vale",
        "uf": "RS",
        "ibge": 4314498,
        "lat": -27.2109,
        "lng": -53.608
      },
      {
        "nome": "Pinheiro Machado",
        "uf": "RS",
        "ibge": 4314506,
        "lat": -31.5794,
        "lng": -53.3798
      },
      {
        "nome": "Pinto Bandeira",
        "uf": "RS",
        "ibge": 4314548,
        "lat": -29.0975,
        "lng": -51.4503
      },
      {
        "nome": "Pirapó",
        "uf": "RS",
        "ibge": 4314555,
        "lat": -28.0439,
        "lng": -55.2001
      },
      {
        "nome": "Piratini",
        "uf": "RS",
        "ibge": 4314605,
        "lat": -31.4473,
        "lng": -53.0973
      },
      {
        "nome": "Planalto",
        "uf": "RS",
        "ibge": 4314704,
        "lat": -27.3297,
        "lng": -53.0575
      },
      {
        "nome": "Poço das Antas",
        "uf": "RS",
        "ibge": 4314753,
        "lat": -29.4481,
        "lng": -51.6719
      },
      {
        "nome": "Pontão",
        "uf": "RS",
        "ibge": 4314779,
        "lat": -28.0585,
        "lng": -52.6791
      },
      {
        "nome": "Ponte Preta",
        "uf": "RS",
        "ibge": 4314787,
        "lat": -27.6587,
        "lng": -52.4848
      },
      {
        "nome": "Portão",
        "uf": "RS",
        "ibge": 4314803,
        "lat": -29.7015,
        "lng": -51.2429
      },
      {
        "nome": "Porto Lucena",
        "uf": "RS",
        "ibge": 4315008,
        "lat": -27.8569,
        "lng": -55.01
      },
      {
        "nome": "Porto Mauá",
        "uf": "RS",
        "ibge": 4315057,
        "lat": -27.5796,
        "lng": -54.6657
      },
      {
        "nome": "Porto Vera Cruz",
        "uf": "RS",
        "ibge": 4315073,
        "lat": -27.7405,
        "lng": -54.8994
      },
      {
        "nome": "Porto Xavier",
        "uf": "RS",
        "ibge": 4315107,
        "lat": -27.9082,
        "lng": -55.1379
      },
      {
        "nome": "Pouso Novo",
        "uf": "RS",
        "ibge": 4315131,
        "lat": -29.1738,
        "lng": -52.2136
      },
      {
        "nome": "Presidente Lucena",
        "uf": "RS",
        "ibge": 4315149,
        "lat": -29.5175,
        "lng": -51.1798
      },
      {
        "nome": "Progresso",
        "uf": "RS",
        "ibge": 4315156,
        "lat": -29.2441,
        "lng": -52.3197
      },
      {
        "nome": "Protásio Alves",
        "uf": "RS",
        "ibge": 4315172,
        "lat": -28.7572,
        "lng": -51.4757
      },
      {
        "nome": "Putinga",
        "uf": "RS",
        "ibge": 4315206,
        "lat": -29.0045,
        "lng": -52.1569
      },
      {
        "nome": "Quaraí",
        "uf": "RS",
        "ibge": 4315305,
        "lat": -30.384,
        "lng": -56.4483
      },
      {
        "nome": "Quatro Irmãos",
        "uf": "RS",
        "ibge": 4315313,
        "lat": -27.8257,
        "lng": -52.4424
      },
      {
        "nome": "Quevedos",
        "uf": "RS",
        "ibge": 4315321,
        "lat": -29.3504,
        "lng": -54.0789
      },
      {
        "nome": "Quinze de Novembro",
        "uf": "RS",
        "ibge": 4315354,
        "lat": -28.7466,
        "lng": -53.1011
      },
      {
        "nome": "Redentora",
        "uf": "RS",
        "ibge": 4315404,
        "lat": -27.664,
        "lng": -53.6407
      },
      {
        "nome": "Relvado",
        "uf": "RS",
        "ibge": 4315453,
        "lat": -29.1164,
        "lng": -52.0778
      },
      {
        "nome": "Restinga Sêca",
        "uf": "RS",
        "ibge": 4315503,
        "lat": -29.8188,
        "lng": -53.3807
      },
      {
        "nome": "Rio dos Índios",
        "uf": "RS",
        "ibge": 4315552,
        "lat": -27.2973,
        "lng": -52.8417
      },
      {
        "nome": "Rio Grande",
        "uf": "RS",
        "ibge": 4315602,
        "lat": -32.0349,
        "lng": -52.1071
      },
      {
        "nome": "Rio Pardo",
        "uf": "RS",
        "ibge": 4315701,
        "lat": -29.988,
        "lng": -52.3711
      },
      {
        "nome": "Riozinho",
        "uf": "RS",
        "ibge": 4315750,
        "lat": -29.639,
        "lng": -50.4488
      },
      {
        "nome": "Roca Sales",
        "uf": "RS",
        "ibge": 4315800,
        "lat": -29.2884,
        "lng": -51.8658
      },
      {
        "nome": "Rodeio Bonito",
        "uf": "RS",
        "ibge": 4315909,
        "lat": -27.4742,
        "lng": -53.1706
      },
      {
        "nome": "Rolador",
        "uf": "RS",
        "ibge": 4315958,
        "lat": -28.2566,
        "lng": -54.8186
      },
      {
        "nome": "Rolante",
        "uf": "RS",
        "ibge": 4316006,
        "lat": -29.6462,
        "lng": -50.5819
      },
      {
        "nome": "Ronda Alta",
        "uf": "RS",
        "ibge": 4316105,
        "lat": -27.7758,
        "lng": -52.8056
      },
      {
        "nome": "Rondinha",
        "uf": "RS",
        "ibge": 4316204,
        "lat": -27.8315,
        "lng": -52.9081
      },
      {
        "nome": "Roque Gonzales",
        "uf": "RS",
        "ibge": 4316303,
        "lat": -28.1297,
        "lng": -55.0266
      },
      {
        "nome": "Rosário do Sul",
        "uf": "RS",
        "ibge": 4316402,
        "lat": -30.2515,
        "lng": -54.9221
      },
      {
        "nome": "Sagrada Família",
        "uf": "RS",
        "ibge": 4316428,
        "lat": -27.7085,
        "lng": -53.1351
      },
      {
        "nome": "Saldanha Marinho",
        "uf": "RS",
        "ibge": 4316436,
        "lat": -28.3941,
        "lng": -53.097
      },
      {
        "nome": "Salto do Jacuí",
        "uf": "RS",
        "ibge": 4316451,
        "lat": -29.0951,
        "lng": -53.2133
      },
      {
        "nome": "Salvador das Missões",
        "uf": "RS",
        "ibge": 4316477,
        "lat": -28.1233,
        "lng": -54.8373
      },
      {
        "nome": "Salvador do Sul",
        "uf": "RS",
        "ibge": 4316501,
        "lat": -29.4386,
        "lng": -51.5077
      },
      {
        "nome": "Sananduva",
        "uf": "RS",
        "ibge": 4316600,
        "lat": -27.947,
        "lng": -51.8079
      },
      {
        "nome": "Sant'Ana do Livramento",
        "uf": "RS",
        "ibge": 4317103,
        "lat": -30.8773,
        "lng": -55.5392
      },
      {
        "nome": "Santa Bárbara do Sul",
        "uf": "RS",
        "ibge": 4316709,
        "lat": -28.3653,
        "lng": -53.251
      },
      {
        "nome": "Santa Cecília do Sul",
        "uf": "RS",
        "ibge": 4316733,
        "lat": -28.1609,
        "lng": -51.9279
      },
      {
        "nome": "Santa Clara do Sul",
        "uf": "RS",
        "ibge": 4316758,
        "lat": -29.4747,
        "lng": -52.0843
      },
      {
        "nome": "Santa Cruz do Sul",
        "uf": "RS",
        "ibge": 4316808,
        "lat": -29.722,
        "lng": -52.4343
      },
      {
        "nome": "Santa Margarida do Sul",
        "uf": "RS",
        "ibge": 4316972,
        "lat": -30.3393,
        "lng": -54.0817
      },
      {
        "nome": "Santa Maria",
        "uf": "RS",
        "ibge": 4316907,
        "lat": -29.6868,
        "lng": -53.8149
      },
      {
        "nome": "Santa Maria do Herval",
        "uf": "RS",
        "ibge": 4316956,
        "lat": -29.4902,
        "lng": -50.9919
      },
      {
        "nome": "Santa Rosa",
        "uf": "RS",
        "ibge": 4317202,
        "lat": -27.8702,
        "lng": -54.4796
      },
      {
        "nome": "Santa Tereza",
        "uf": "RS",
        "ibge": 4317251,
        "lat": -29.1655,
        "lng": -51.7351
      },
      {
        "nome": "Santa Vitória do Palmar",
        "uf": "RS",
        "ibge": 4317301,
        "lat": -33.525,
        "lng": -53.3717
      },
      {
        "nome": "Santana da Boa Vista",
        "uf": "RS",
        "ibge": 4317004,
        "lat": -30.8697,
        "lng": -53.11
      },
      {
        "nome": "Santiago",
        "uf": "RS",
        "ibge": 4317400,
        "lat": -29.1897,
        "lng": -54.8666
      },
      {
        "nome": "Santo Ângelo",
        "uf": "RS",
        "ibge": 4317509,
        "lat": -28.3001,
        "lng": -54.2668
      },
      {
        "nome": "Santo Antônio da Patrulha",
        "uf": "RS",
        "ibge": 4317608,
        "lat": -29.8268,
        "lng": -50.5175
      },
      {
        "nome": "Santo Antônio das Missões",
        "uf": "RS",
        "ibge": 4317707,
        "lat": -28.514,
        "lng": -55.2251
      },
      {
        "nome": "Santo Antônio do Palma",
        "uf": "RS",
        "ibge": 4317558,
        "lat": -28.4956,
        "lng": -52.0267
      },
      {
        "nome": "Santo Antônio do Planalto",
        "uf": "RS",
        "ibge": 4317756,
        "lat": -28.403,
        "lng": -52.6992
      },
      {
        "nome": "Santo Augusto",
        "uf": "RS",
        "ibge": 4317806,
        "lat": -27.8526,
        "lng": -53.7776
      },
      {
        "nome": "Santo Cristo",
        "uf": "RS",
        "ibge": 4317905,
        "lat": -27.8263,
        "lng": -54.662
      },
      {
        "nome": "Santo Expedito do Sul",
        "uf": "RS",
        "ibge": 4317954,
        "lat": -27.9074,
        "lng": -51.6434
      },
      {
        "nome": "São Borja",
        "uf": "RS",
        "ibge": 4318002,
        "lat": -28.6578,
        "lng": -56.0036
      },
      {
        "nome": "São Domingos do Sul",
        "uf": "RS",
        "ibge": 4318051,
        "lat": -28.5312,
        "lng": -51.886
      },
      {
        "nome": "São Francisco de Assis",
        "uf": "RS",
        "ibge": 4318101,
        "lat": -29.5547,
        "lng": -55.1253
      },
      {
        "nome": "São Francisco de Paula",
        "uf": "RS",
        "ibge": 4318200,
        "lat": -29.4404,
        "lng": -50.5828
      },
      {
        "nome": "São Gabriel",
        "uf": "RS",
        "ibge": 4318309,
        "lat": -30.3337,
        "lng": -54.3217
      },
      {
        "nome": "São Jerônimo",
        "uf": "RS",
        "ibge": 4318408,
        "lat": -29.9716,
        "lng": -51.7251
      },
      {
        "nome": "São João da Urtiga",
        "uf": "RS",
        "ibge": 4318424,
        "lat": -27.8195,
        "lng": -51.8257
      },
      {
        "nome": "São João do Polêsine",
        "uf": "RS",
        "ibge": 4318432,
        "lat": -29.6194,
        "lng": -53.4439
      },
      {
        "nome": "São Jorge",
        "uf": "RS",
        "ibge": 4318440,
        "lat": -28.4984,
        "lng": -51.7064
      },
      {
        "nome": "São José das Missões",
        "uf": "RS",
        "ibge": 4318457,
        "lat": -27.7789,
        "lng": -53.1226
      },
      {
        "nome": "São José do Herval",
        "uf": "RS",
        "ibge": 4318465,
        "lat": -29.052,
        "lng": -52.295
      },
      {
        "nome": "São José do Hortêncio",
        "uf": "RS",
        "ibge": 4318481,
        "lat": -29.528,
        "lng": -51.245
      },
      {
        "nome": "São José do Inhacorá",
        "uf": "RS",
        "ibge": 4318499,
        "lat": -27.7251,
        "lng": -54.1275
      },
      {
        "nome": "São José do Norte",
        "uf": "RS",
        "ibge": 4318507,
        "lat": -32.0151,
        "lng": -52.0331
      },
      {
        "nome": "São José do Ouro",
        "uf": "RS",
        "ibge": 4318606,
        "lat": -27.7707,
        "lng": -51.5966
      },
      {
        "nome": "São José do Sul",
        "uf": "RS",
        "ibge": 4318614,
        "lat": -29.5448,
        "lng": -51.4821
      },
      {
        "nome": "São José dos Ausentes",
        "uf": "RS",
        "ibge": 4318622,
        "lat": -28.7476,
        "lng": -50.0677
      },
      {
        "nome": "São Leopoldo",
        "uf": "RS",
        "ibge": 4318705,
        "lat": -29.7545,
        "lng": -51.1498
      },
      {
        "nome": "São Lourenço do Sul",
        "uf": "RS",
        "ibge": 4318804,
        "lat": -31.3564,
        "lng": -51.9715
      },
      {
        "nome": "São Luiz Gonzaga",
        "uf": "RS",
        "ibge": 4318903,
        "lat": -28.412,
        "lng": -54.9559
      },
      {
        "nome": "São Marcos",
        "uf": "RS",
        "ibge": 4319000,
        "lat": -28.9677,
        "lng": -51.0696
      },
      {
        "nome": "São Martinho",
        "uf": "RS",
        "ibge": 4319109,
        "lat": -27.7112,
        "lng": -53.9699
      },
      {
        "nome": "São Martinho da Serra",
        "uf": "RS",
        "ibge": 4319125,
        "lat": -29.5397,
        "lng": -53.859
      },
      {
        "nome": "São Miguel das Missões",
        "uf": "RS",
        "ibge": 4319158,
        "lat": -28.556,
        "lng": -54.5559
      },
      {
        "nome": "São Nicolau",
        "uf": "RS",
        "ibge": 4319208,
        "lat": -28.1834,
        "lng": -55.2654
      },
      {
        "nome": "São Paulo das Missões",
        "uf": "RS",
        "ibge": 4319307,
        "lat": -28.0195,
        "lng": -54.9404
      },
      {
        "nome": "São Pedro da Serra",
        "uf": "RS",
        "ibge": 4319356,
        "lat": -29.4193,
        "lng": -51.5134
      },
      {
        "nome": "São Pedro das Missões",
        "uf": "RS",
        "ibge": 4319364,
        "lat": -27.7706,
        "lng": -53.2513
      },
      {
        "nome": "São Pedro do Butiá",
        "uf": "RS",
        "ibge": 4319372,
        "lat": -28.1243,
        "lng": -54.8926
      },
      {
        "nome": "São Pedro do Sul",
        "uf": "RS",
        "ibge": 4319406,
        "lat": -29.6202,
        "lng": -54.1855
      },
      {
        "nome": "São Sebastião do Caí",
        "uf": "RS",
        "ibge": 4319505,
        "lat": -29.5885,
        "lng": -51.3749
      },
      {
        "nome": "São Sepé",
        "uf": "RS",
        "ibge": 4319604,
        "lat": -30.1643,
        "lng": -53.5603
      },
      {
        "nome": "São Valentim",
        "uf": "RS",
        "ibge": 4319703,
        "lat": -27.5583,
        "lng": -52.5237
      },
      {
        "nome": "São Valentim do Sul",
        "uf": "RS",
        "ibge": 4319711,
        "lat": -29.0451,
        "lng": -51.7684
      },
      {
        "nome": "São Valério do Sul",
        "uf": "RS",
        "ibge": 4319737,
        "lat": -27.7906,
        "lng": -53.9368
      },
      {
        "nome": "São Vendelino",
        "uf": "RS",
        "ibge": 4319752,
        "lat": -29.3729,
        "lng": -51.3675
      },
      {
        "nome": "São Vicente do Sul",
        "uf": "RS",
        "ibge": 4319802,
        "lat": -29.6882,
        "lng": -54.6826
      },
      {
        "nome": "Sapiranga",
        "uf": "RS",
        "ibge": 4319901,
        "lat": -29.6349,
        "lng": -51.0064
      },
      {
        "nome": "Sapucaia do Sul",
        "uf": "RS",
        "ibge": 4320008,
        "lat": -29.8276,
        "lng": -51.145
      },
      {
        "nome": "Sarandi",
        "uf": "RS",
        "ibge": 4320107,
        "lat": -27.942,
        "lng": -52.9231
      },
      {
        "nome": "Seberi",
        "uf": "RS",
        "ibge": 4320206,
        "lat": -27.4829,
        "lng": -53.4026
      },
      {
        "nome": "Sede Nova",
        "uf": "RS",
        "ibge": 4320230,
        "lat": -27.6367,
        "lng": -53.9493
      },
      {
        "nome": "Segredo",
        "uf": "RS",
        "ibge": 4320263,
        "lat": -29.3523,
        "lng": -52.9767
      },
      {
        "nome": "Selbach",
        "uf": "RS",
        "ibge": 4320305,
        "lat": -28.6294,
        "lng": -52.9498
      },
      {
        "nome": "Senador Salgado Filho",
        "uf": "RS",
        "ibge": 4320321,
        "lat": -28.025,
        "lng": -54.5507
      },
      {
        "nome": "Sentinela do Sul",
        "uf": "RS",
        "ibge": 4320354,
        "lat": -30.6107,
        "lng": -51.5862
      },
      {
        "nome": "Serafina Corrêa",
        "uf": "RS",
        "ibge": 4320404,
        "lat": -28.7126,
        "lng": -51.9352
      },
      {
        "nome": "Sério",
        "uf": "RS",
        "ibge": 4320453,
        "lat": -29.3904,
        "lng": -52.2685
      },
      {
        "nome": "Sertão",
        "uf": "RS",
        "ibge": 4320503,
        "lat": -27.9798,
        "lng": -52.2588
      },
      {
        "nome": "Sertão Santana",
        "uf": "RS",
        "ibge": 4320552,
        "lat": -30.4562,
        "lng": -51.6017
      },
      {
        "nome": "Sete de Setembro",
        "uf": "RS",
        "ibge": 4320578,
        "lat": -28.1362,
        "lng": -54.4637
      },
      {
        "nome": "Severiano de Almeida",
        "uf": "RS",
        "ibge": 4320602,
        "lat": -27.4362,
        "lng": -52.1217
      },
      {
        "nome": "Silveira Martins",
        "uf": "RS",
        "ibge": 4320651,
        "lat": -29.6467,
        "lng": -53.591
      },
      {
        "nome": "Sinimbu",
        "uf": "RS",
        "ibge": 4320677,
        "lat": -29.5357,
        "lng": -52.5304
      },
      {
        "nome": "Sobradinho",
        "uf": "RS",
        "ibge": 4320701,
        "lat": -29.4194,
        "lng": -53.0326
      },
      {
        "nome": "Soledade",
        "uf": "RS",
        "ibge": 4320800,
        "lat": -28.8306,
        "lng": -52.5131
      },
      {
        "nome": "Tabaí",
        "uf": "RS",
        "ibge": 4320859,
        "lat": -29.643,
        "lng": -51.6823
      },
      {
        "nome": "Tapejara",
        "uf": "RS",
        "ibge": 4320909,
        "lat": -28.0652,
        "lng": -52.0097
      },
      {
        "nome": "Tapera",
        "uf": "RS",
        "ibge": 4321006,
        "lat": -28.6277,
        "lng": -52.8613
      },
      {
        "nome": "Tapes",
        "uf": "RS",
        "ibge": 4321105,
        "lat": -30.6683,
        "lng": -51.3991
      },
      {
        "nome": "Taquara",
        "uf": "RS",
        "ibge": 4321204,
        "lat": -29.6505,
        "lng": -50.7753
      },
      {
        "nome": "Taquari",
        "uf": "RS",
        "ibge": 4321303,
        "lat": -29.7943,
        "lng": -51.8653
      },
      {
        "nome": "Taquaruçu do Sul",
        "uf": "RS",
        "ibge": 4321329,
        "lat": -27.4005,
        "lng": -53.4702
      },
      {
        "nome": "Tavares",
        "uf": "RS",
        "ibge": 4321352,
        "lat": -31.2843,
        "lng": -51.088
      },
      {
        "nome": "Tenente Portela",
        "uf": "RS",
        "ibge": 4321402,
        "lat": -27.3711,
        "lng": -53.7585
      },
      {
        "nome": "Terra de Areia",
        "uf": "RS",
        "ibge": 4321436,
        "lat": -29.5782,
        "lng": -50.0644
      },
      {
        "nome": "Teutônia",
        "uf": "RS",
        "ibge": 4321451,
        "lat": -29.4482,
        "lng": -51.8044
      },
      {
        "nome": "Tio Hugo",
        "uf": "RS",
        "ibge": 4321469,
        "lat": -28.5712,
        "lng": -52.5955
      },
      {
        "nome": "Tiradentes do Sul",
        "uf": "RS",
        "ibge": 4321477,
        "lat": -27.4022,
        "lng": -54.0814
      },
      {
        "nome": "Toropi",
        "uf": "RS",
        "ibge": 4321493,
        "lat": -29.4782,
        "lng": -54.2244
      },
      {
        "nome": "Torres",
        "uf": "RS",
        "ibge": 4321501,
        "lat": -29.3334,
        "lng": -49.7333
      },
      {
        "nome": "Tramandaí",
        "uf": "RS",
        "ibge": 4321600,
        "lat": -29.9841,
        "lng": -50.1322
      },
      {
        "nome": "Travesseiro",
        "uf": "RS",
        "ibge": 4321626,
        "lat": -29.2977,
        "lng": -52.0532
      },
      {
        "nome": "Três Arroios",
        "uf": "RS",
        "ibge": 4321634,
        "lat": -27.5003,
        "lng": -52.1448
      },
      {
        "nome": "Três Cachoeiras",
        "uf": "RS",
        "ibge": 4321667,
        "lat": -29.4487,
        "lng": -49.9275
      },
      {
        "nome": "Três Coroas",
        "uf": "RS",
        "ibge": 4321709,
        "lat": -29.5137,
        "lng": -50.7739
      },
      {
        "nome": "Três de Maio",
        "uf": "RS",
        "ibge": 4321808,
        "lat": -27.78,
        "lng": -54.2357
      },
      {
        "nome": "Três Forquilhas",
        "uf": "RS",
        "ibge": 4321832,
        "lat": -29.5384,
        "lng": -50.0708
      },
      {
        "nome": "Três Palmeiras",
        "uf": "RS",
        "ibge": 4321857,
        "lat": -27.6139,
        "lng": -52.8437
      },
      {
        "nome": "Três Passos",
        "uf": "RS",
        "ibge": 4321907,
        "lat": -27.4555,
        "lng": -53.9296
      },
      {
        "nome": "Trindade do Sul",
        "uf": "RS",
        "ibge": 4321956,
        "lat": -27.5239,
        "lng": -52.8956
      },
      {
        "nome": "Triunfo",
        "uf": "RS",
        "ibge": 4322004,
        "lat": -29.9291,
        "lng": -51.7075
      },
      {
        "nome": "Tucunduva",
        "uf": "RS",
        "ibge": 4322103,
        "lat": -27.6573,
        "lng": -54.4439
      },
      {
        "nome": "Tunas",
        "uf": "RS",
        "ibge": 4322152,
        "lat": -29.1039,
        "lng": -52.9538
      },
      {
        "nome": "Tupanci do Sul",
        "uf": "RS",
        "ibge": 4322186,
        "lat": -27.9241,
        "lng": -51.5383
      },
      {
        "nome": "Tupanciretã",
        "uf": "RS",
        "ibge": 4322202,
        "lat": -29.0858,
        "lng": -53.8445
      },
      {
        "nome": "Tupandi",
        "uf": "RS",
        "ibge": 4322251,
        "lat": -29.4772,
        "lng": -51.4174
      },
      {
        "nome": "Tuparendi",
        "uf": "RS",
        "ibge": 4322301,
        "lat": -27.7598,
        "lng": -54.4814
      },
      {
        "nome": "Turuçu",
        "uf": "RS",
        "ibge": 4322327,
        "lat": -31.4173,
        "lng": -52.1706
      },
      {
        "nome": "Ubiretama",
        "uf": "RS",
        "ibge": 4322343,
        "lat": -28.0404,
        "lng": -54.686
      },
      {
        "nome": "União da Serra",
        "uf": "RS",
        "ibge": 4322350,
        "lat": -28.7833,
        "lng": -52.0238
      },
      {
        "nome": "Unistalda",
        "uf": "RS",
        "ibge": 4322376,
        "lat": -29.04,
        "lng": -55.1517
      },
      {
        "nome": "Uruguaiana",
        "uf": "RS",
        "ibge": 4322400,
        "lat": -29.7614,
        "lng": -57.0853
      },
      {
        "nome": "Vacaria",
        "uf": "RS",
        "ibge": 4322509,
        "lat": -28.5079,
        "lng": -50.9418
      },
      {
        "nome": "Vale do Sol",
        "uf": "RS",
        "ibge": 4322533,
        "lat": -29.5967,
        "lng": -52.6839
      },
      {
        "nome": "Vale Real",
        "uf": "RS",
        "ibge": 4322541,
        "lat": -29.3919,
        "lng": -51.2559
      },
      {
        "nome": "Vale Verde",
        "uf": "RS",
        "ibge": 4322525,
        "lat": -29.7864,
        "lng": -52.1857
      },
      {
        "nome": "Vanini",
        "uf": "RS",
        "ibge": 4322558,
        "lat": -28.4758,
        "lng": -51.8447
      },
      {
        "nome": "Venâncio Aires",
        "uf": "RS",
        "ibge": 4322608,
        "lat": -29.6143,
        "lng": -52.1932
      },
      {
        "nome": "Vera Cruz",
        "uf": "RS",
        "ibge": 4322707,
        "lat": -29.7184,
        "lng": -52.5152
      },
      {
        "nome": "Veranópolis",
        "uf": "RS",
        "ibge": 4322806,
        "lat": -28.9312,
        "lng": -51.5516
      },
      {
        "nome": "Vespasiano Corrêa",
        "uf": "RS",
        "ibge": 4322855,
        "lat": -29.0655,
        "lng": -51.8625
      },
      {
        "nome": "Viadutos",
        "uf": "RS",
        "ibge": 4322905,
        "lat": -27.5716,
        "lng": -52.0211
      },
      {
        "nome": "Viamão",
        "uf": "RS",
        "ibge": 4323002,
        "lat": -30.0819,
        "lng": -51.0194
      },
      {
        "nome": "Vicente Dutra",
        "uf": "RS",
        "ibge": 4323101,
        "lat": -27.1607,
        "lng": -53.4022
      },
      {
        "nome": "Victor Graeff",
        "uf": "RS",
        "ibge": 4323200,
        "lat": -28.5632,
        "lng": -52.7495
      },
      {
        "nome": "Vila Flores",
        "uf": "RS",
        "ibge": 4323309,
        "lat": -28.8598,
        "lng": -51.5504
      },
      {
        "nome": "Vila Lângaro",
        "uf": "RS",
        "ibge": 4323358,
        "lat": -28.1062,
        "lng": -52.1438
      },
      {
        "nome": "Vila Maria",
        "uf": "RS",
        "ibge": 4323408,
        "lat": -28.5359,
        "lng": -52.1486
      },
      {
        "nome": "Vila Nova do Sul",
        "uf": "RS",
        "ibge": 4323457,
        "lat": -30.3461,
        "lng": -53.876
      },
      {
        "nome": "Vista Alegre",
        "uf": "RS",
        "ibge": 4323507,
        "lat": -27.3686,
        "lng": -53.4919
      },
      {
        "nome": "Vista Alegre do Prata",
        "uf": "RS",
        "ibge": 4323606,
        "lat": -28.8052,
        "lng": -51.7947
      },
      {
        "nome": "Vista Gaúcha",
        "uf": "RS",
        "ibge": 4323705,
        "lat": -27.2902,
        "lng": -53.6974
      },
      {
        "nome": "Vitória das Missões",
        "uf": "RS",
        "ibge": 4323754,
        "lat": -28.3516,
        "lng": -54.504
      },
      {
        "nome": "Westfália",
        "uf": "RS",
        "ibge": 4323770,
        "lat": -29.4263,
        "lng": -51.7645
      },
      {
        "nome": "Xangri-lá",
        "uf": "RS",
        "ibge": 4323804,
        "lat": -29.8065,
        "lng": -50.0519
      }
    ],
    "capital": {
      "nome": "Porto Alegre",
      "uf": "RS",
      "ibge": 4314902,
      "lat": -30.0318,
      "lng": -51.2065
    }
  },
  "MS": {
    "nome": "Mato Grosso do Sul",
    "ibge": 50,
    "cidades": [
      {
        "nome": "Água Clara",
        "uf": "MS",
        "ibge": 5000203,
        "lat": -20.4452,
        "lng": -52.879
      },
      {
        "nome": "Alcinópolis",
        "uf": "MS",
        "ibge": 5000252,
        "lat": -18.3255,
        "lng": -53.7042
      },
      {
        "nome": "Amambai",
        "uf": "MS",
        "ibge": 5000609,
        "lat": -23.1058,
        "lng": -55.2253
      },
      {
        "nome": "Anastácio",
        "uf": "MS",
        "ibge": 5000708,
        "lat": -20.4823,
        "lng": -55.8104
      },
      {
        "nome": "Anaurilândia",
        "uf": "MS",
        "ibge": 5000807,
        "lat": -22.1852,
        "lng": -52.7191
      },
      {
        "nome": "Angélica",
        "uf": "MS",
        "ibge": 5000856,
        "lat": -22.1527,
        "lng": -53.7708
      },
      {
        "nome": "Antônio João",
        "uf": "MS",
        "ibge": 5000906,
        "lat": -22.1927,
        "lng": -55.9517
      },
      {
        "nome": "Aparecida do Taboado",
        "uf": "MS",
        "ibge": 5001003,
        "lat": -20.0873,
        "lng": -51.0961
      },
      {
        "nome": "Aquidauana",
        "uf": "MS",
        "ibge": 5001102,
        "lat": -20.4666,
        "lng": -55.7868
      },
      {
        "nome": "Aral Moreira",
        "uf": "MS",
        "ibge": 5001243,
        "lat": -22.9385,
        "lng": -55.6334
      },
      {
        "nome": "Bandeirantes",
        "uf": "MS",
        "ibge": 5001508,
        "lat": -19.9275,
        "lng": -54.3585
      },
      {
        "nome": "Bataguassu",
        "uf": "MS",
        "ibge": 5001904,
        "lat": -21.7159,
        "lng": -52.4221
      },
      {
        "nome": "Batayporã",
        "uf": "MS",
        "ibge": 5002001,
        "lat": -22.2944,
        "lng": -53.2705
      },
      {
        "nome": "Bela Vista",
        "uf": "MS",
        "ibge": 5002100,
        "lat": -22.1073,
        "lng": -56.5263
      },
      {
        "nome": "Bodoquena",
        "uf": "MS",
        "ibge": 5002159,
        "lat": -20.537,
        "lng": -56.7127
      },
      {
        "nome": "Bonito",
        "uf": "MS",
        "ibge": 5002209,
        "lat": -21.1261,
        "lng": -56.4836
      },
      {
        "nome": "Brasilândia",
        "uf": "MS",
        "ibge": 5002308,
        "lat": -21.2544,
        "lng": -52.0365
      },
      {
        "nome": "Caarapó",
        "uf": "MS",
        "ibge": 5002407,
        "lat": -22.6368,
        "lng": -54.8209
      },
      {
        "nome": "Camapuã",
        "uf": "MS",
        "ibge": 5002605,
        "lat": -19.5347,
        "lng": -54.0431
      },
      {
        "nome": "Caracol",
        "uf": "MS",
        "ibge": 5002803,
        "lat": -22.011,
        "lng": -57.0277
      },
      {
        "nome": "Cassilândia",
        "uf": "MS",
        "ibge": 5002902,
        "lat": -19.1179,
        "lng": -51.7313
      },
      {
        "nome": "Chapadão do Sul",
        "uf": "MS",
        "ibge": 5002951,
        "lat": -18.788,
        "lng": -52.6263
      },
      {
        "nome": "Corguinho",
        "uf": "MS",
        "ibge": 5003108,
        "lat": -19.8243,
        "lng": -54.8281
      },
      {
        "nome": "Coronel Sapucaia",
        "uf": "MS",
        "ibge": 5003157,
        "lat": -23.2724,
        "lng": -55.5278
      },
      {
        "nome": "Corumbá",
        "uf": "MS",
        "ibge": 5003207,
        "lat": -19.0077,
        "lng": -57.651
      },
      {
        "nome": "Costa Rica",
        "uf": "MS",
        "ibge": 5003256,
        "lat": -18.5432,
        "lng": -53.1287
      },
      {
        "nome": "Coxim",
        "uf": "MS",
        "ibge": 5003306,
        "lat": -18.5013,
        "lng": -54.751
      },
      {
        "nome": "Deodápolis",
        "uf": "MS",
        "ibge": 5003454,
        "lat": -22.2763,
        "lng": -54.1682
      },
      {
        "nome": "Dois Irmãos do Buriti",
        "uf": "MS",
        "ibge": 5003488,
        "lat": -20.6848,
        "lng": -55.2915
      },
      {
        "nome": "Douradina",
        "uf": "MS",
        "ibge": 5003504,
        "lat": -22.0405,
        "lng": -54.6158
      },
      {
        "nome": "Dourados",
        "uf": "MS",
        "ibge": 5003702,
        "lat": -22.2231,
        "lng": -54.812
      },
      {
        "nome": "Eldorado",
        "uf": "MS",
        "ibge": 5003751,
        "lat": -23.7868,
        "lng": -54.2838
      },
      {
        "nome": "Fátima do Sul",
        "uf": "MS",
        "ibge": 5003801,
        "lat": -22.3789,
        "lng": -54.5131
      },
      {
        "nome": "Figueirão",
        "uf": "MS",
        "ibge": 5003900,
        "lat": -18.6782,
        "lng": -53.638
      },
      {
        "nome": "Glória de Dourados",
        "uf": "MS",
        "ibge": 5004007,
        "lat": -22.4136,
        "lng": -54.2335
      },
      {
        "nome": "Guia Lopes da Laguna",
        "uf": "MS",
        "ibge": 5004106,
        "lat": -21.4583,
        "lng": -56.1117
      },
      {
        "nome": "Iguatemi",
        "uf": "MS",
        "ibge": 5004304,
        "lat": -23.6736,
        "lng": -54.5637
      },
      {
        "nome": "Inocência",
        "uf": "MS",
        "ibge": 5004403,
        "lat": -19.7277,
        "lng": -51.9281
      },
      {
        "nome": "Itaporã",
        "uf": "MS",
        "ibge": 5004502,
        "lat": -22.08,
        "lng": -54.7934
      },
      {
        "nome": "Itaquiraí",
        "uf": "MS",
        "ibge": 5004601,
        "lat": -23.4779,
        "lng": -54.187
      },
      {
        "nome": "Ivinhema",
        "uf": "MS",
        "ibge": 5004700,
        "lat": -22.3046,
        "lng": -53.8184
      },
      {
        "nome": "Japorã",
        "uf": "MS",
        "ibge": 5004809,
        "lat": -23.8903,
        "lng": -54.4059
      },
      {
        "nome": "Jaraguari",
        "uf": "MS",
        "ibge": 5004908,
        "lat": -20.1386,
        "lng": -54.3996
      },
      {
        "nome": "Jardim",
        "uf": "MS",
        "ibge": 5005004,
        "lat": -21.4799,
        "lng": -56.1489
      },
      {
        "nome": "Jateí",
        "uf": "MS",
        "ibge": 5005103,
        "lat": -22.4806,
        "lng": -54.3079
      },
      {
        "nome": "Juti",
        "uf": "MS",
        "ibge": 5005152,
        "lat": -22.8596,
        "lng": -54.6061
      },
      {
        "nome": "Ladário",
        "uf": "MS",
        "ibge": 5005202,
        "lat": -19.0089,
        "lng": -57.5973
      },
      {
        "nome": "Laguna Carapã",
        "uf": "MS",
        "ibge": 5005251,
        "lat": -22.5448,
        "lng": -55.1502
      },
      {
        "nome": "Maracaju",
        "uf": "MS",
        "ibge": 5005400,
        "lat": -21.6105,
        "lng": -55.1678
      },
      {
        "nome": "Miranda",
        "uf": "MS",
        "ibge": 5005608,
        "lat": -20.2355,
        "lng": -56.3746
      },
      {
        "nome": "Mundo Novo",
        "uf": "MS",
        "ibge": 5005681,
        "lat": -23.9355,
        "lng": -54.281
      },
      {
        "nome": "Naviraí",
        "uf": "MS",
        "ibge": 5005707,
        "lat": -23.0618,
        "lng": -54.1995
      },
      {
        "nome": "Nioaque",
        "uf": "MS",
        "ibge": 5005806,
        "lat": -21.1419,
        "lng": -55.8296
      },
      {
        "nome": "Nova Alvorada do Sul",
        "uf": "MS",
        "ibge": 5006002,
        "lat": -21.4657,
        "lng": -54.3825
      },
      {
        "nome": "Nova Andradina",
        "uf": "MS",
        "ibge": 5006200,
        "lat": -22.238,
        "lng": -53.3437
      },
      {
        "nome": "Novo Horizonte do Sul",
        "uf": "MS",
        "ibge": 5006259,
        "lat": -22.6693,
        "lng": -53.8601
      },
      {
        "nome": "Paraíso das Águas",
        "uf": "MS",
        "ibge": 5006275,
        "lat": -19.0216,
        "lng": -53.0116
      },
      {
        "nome": "Paranaíba",
        "uf": "MS",
        "ibge": 5006309,
        "lat": -19.6746,
        "lng": -51.1909
      },
      {
        "nome": "Paranhos",
        "uf": "MS",
        "ibge": 5006358,
        "lat": -23.8911,
        "lng": -55.429
      },
      {
        "nome": "Pedro Gomes",
        "uf": "MS",
        "ibge": 5006408,
        "lat": -18.0996,
        "lng": -54.5507
      },
      {
        "nome": "Ponta Porã",
        "uf": "MS",
        "ibge": 5006606,
        "lat": -22.5296,
        "lng": -55.7203
      },
      {
        "nome": "Porto Murtinho",
        "uf": "MS",
        "ibge": 5006903,
        "lat": -21.6981,
        "lng": -57.8836
      },
      {
        "nome": "Ribas do Rio Pardo",
        "uf": "MS",
        "ibge": 5007109,
        "lat": -20.4445,
        "lng": -53.7588
      },
      {
        "nome": "Rio Brilhante",
        "uf": "MS",
        "ibge": 5007208,
        "lat": -21.8033,
        "lng": -54.5427
      },
      {
        "nome": "Rio Negro",
        "uf": "MS",
        "ibge": 5007307,
        "lat": -19.447,
        "lng": -54.9859
      },
      {
        "nome": "Rio Verde de Mato Grosso",
        "uf": "MS",
        "ibge": 5007406,
        "lat": -18.9249,
        "lng": -54.8434
      },
      {
        "nome": "Rochedo",
        "uf": "MS",
        "ibge": 5007505,
        "lat": -19.9565,
        "lng": -54.8848
      },
      {
        "nome": "Santa Rita do Pardo",
        "uf": "MS",
        "ibge": 5007554,
        "lat": -21.3016,
        "lng": -52.8333
      },
      {
        "nome": "São Gabriel do Oeste",
        "uf": "MS",
        "ibge": 5007695,
        "lat": -19.3889,
        "lng": -54.5507
      },
      {
        "nome": "Selvíria",
        "uf": "MS",
        "ibge": 5007802,
        "lat": -20.3637,
        "lng": -51.4192
      },
      {
        "nome": "Sete Quedas",
        "uf": "MS",
        "ibge": 5007703,
        "lat": -23.9705,
        "lng": -55.0398
      },
      {
        "nome": "Sidrolândia",
        "uf": "MS",
        "ibge": 5007901,
        "lat": -20.9302,
        "lng": -54.9692
      },
      {
        "nome": "Sonora",
        "uf": "MS",
        "ibge": 5007935,
        "lat": -17.5698,
        "lng": -54.7551
      },
      {
        "nome": "Tacuru",
        "uf": "MS",
        "ibge": 5007950,
        "lat": -23.636,
        "lng": -55.0141
      },
      {
        "nome": "Taquarussu",
        "uf": "MS",
        "ibge": 5007976,
        "lat": -22.4898,
        "lng": -53.3519
      },
      {
        "nome": "Terenos",
        "uf": "MS",
        "ibge": 5008008,
        "lat": -20.4378,
        "lng": -54.8647
      },
      {
        "nome": "Três Lagoas",
        "uf": "MS",
        "ibge": 5008305,
        "lat": -20.7849,
        "lng": -51.7007
      },
      {
        "nome": "Vicentina",
        "uf": "MS",
        "ibge": 5008404,
        "lat": -22.4098,
        "lng": -54.4415
      }
    ],
    "capital": {
      "nome": "Campo Grande",
      "uf": "MS",
      "ibge": 5002704,
      "lat": -20.4486,
      "lng": -54.6295
    }
  },
  "MT": {
    "nome": "Mato Grosso",
    "ibge": 51,
    "cidades": [
      {
        "nome": "Acorizal",
        "uf": "MT",
        "ibge": 5100102,
        "lat": -15.194,
        "lng": -56.3632
      },
      {
        "nome": "Água Boa",
        "uf": "MT",
        "ibge": 5100201,
        "lat": -14.051,
        "lng": -52.1601
      },
      {
        "nome": "Alta Floresta",
        "uf": "MT",
        "ibge": 5100250,
        "lat": -9.86674,
        "lng": -56.0867
      },
      {
        "nome": "Alto Araguaia",
        "uf": "MT",
        "ibge": 5100300,
        "lat": -17.3153,
        "lng": -53.2181
      },
      {
        "nome": "Alto Boa Vista",
        "uf": "MT",
        "ibge": 5100359,
        "lat": -11.6732,
        "lng": -51.3883
      },
      {
        "nome": "Alto Garças",
        "uf": "MT",
        "ibge": 5100409,
        "lat": -16.9462,
        "lng": -53.5272
      },
      {
        "nome": "Alto Paraguai",
        "uf": "MT",
        "ibge": 5100508,
        "lat": -14.5137,
        "lng": -56.4776
      },
      {
        "nome": "Alto Taquari",
        "uf": "MT",
        "ibge": 5100607,
        "lat": -17.8241,
        "lng": -53.2792
      },
      {
        "nome": "Apiacás",
        "uf": "MT",
        "ibge": 5100805,
        "lat": -9.53981,
        "lng": -57.4587
      },
      {
        "nome": "Araguaiana",
        "uf": "MT",
        "ibge": 5101001,
        "lat": -15.7291,
        "lng": -51.8341
      },
      {
        "nome": "Araguainha",
        "uf": "MT",
        "ibge": 5101209,
        "lat": -16.857,
        "lng": -53.0318
      },
      {
        "nome": "Araputanga",
        "uf": "MT",
        "ibge": 5101258,
        "lat": -15.4641,
        "lng": -58.3425
      },
      {
        "nome": "Arenápolis",
        "uf": "MT",
        "ibge": 5101308,
        "lat": -14.4472,
        "lng": -56.8437
      },
      {
        "nome": "Aripuanã",
        "uf": "MT",
        "ibge": 5101407,
        "lat": -10.1723,
        "lng": -59.4568
      },
      {
        "nome": "Barão de Melgaço",
        "uf": "MT",
        "ibge": 5101605,
        "lat": -16.2067,
        "lng": -55.9623
      },
      {
        "nome": "Barra do Bugres",
        "uf": "MT",
        "ibge": 5101704,
        "lat": -15.0702,
        "lng": -57.1878
      },
      {
        "nome": "Barra do Garças",
        "uf": "MT",
        "ibge": 5101803,
        "lat": -15.8804,
        "lng": -52.264
      },
      {
        "nome": "Bom Jesus do Araguaia",
        "uf": "MT",
        "ibge": 5101852,
        "lat": -12.1706,
        "lng": -51.5032
      },
      {
        "nome": "Brasnorte",
        "uf": "MT",
        "ibge": 5101902,
        "lat": -12.1474,
        "lng": -57.9833
      },
      {
        "nome": "Cáceres",
        "uf": "MT",
        "ibge": 5102504,
        "lat": -16.0764,
        "lng": -57.6818
      },
      {
        "nome": "Campinápolis",
        "uf": "MT",
        "ibge": 5102603,
        "lat": -14.5162,
        "lng": -52.893
      },
      {
        "nome": "Campo Novo do Parecis",
        "uf": "MT",
        "ibge": 5102637,
        "lat": -13.6587,
        "lng": -57.8907
      },
      {
        "nome": "Campo Verde",
        "uf": "MT",
        "ibge": 5102678,
        "lat": -15.545,
        "lng": -55.1626
      },
      {
        "nome": "Campos de Júlio",
        "uf": "MT",
        "ibge": 5102686,
        "lat": -13.7242,
        "lng": -59.2858
      },
      {
        "nome": "Canabrava do Norte",
        "uf": "MT",
        "ibge": 5102694,
        "lat": -11.0556,
        "lng": -51.8209
      },
      {
        "nome": "Canarana",
        "uf": "MT",
        "ibge": 5102702,
        "lat": -13.5515,
        "lng": -52.2705
      },
      {
        "nome": "Carlinda",
        "uf": "MT",
        "ibge": 5102793,
        "lat": -9.94912,
        "lng": -55.8417
      },
      {
        "nome": "Castanheira",
        "uf": "MT",
        "ibge": 5102850,
        "lat": -11.1251,
        "lng": -58.6081
      },
      {
        "nome": "Chapada dos Guimarães",
        "uf": "MT",
        "ibge": 5103007,
        "lat": -15.4643,
        "lng": -55.7499
      },
      {
        "nome": "Cláudia",
        "uf": "MT",
        "ibge": 5103056,
        "lat": -11.5075,
        "lng": -54.8835
      },
      {
        "nome": "Cocalinho",
        "uf": "MT",
        "ibge": 5103106,
        "lat": -14.3903,
        "lng": -51.0001
      },
      {
        "nome": "Colíder",
        "uf": "MT",
        "ibge": 5103205,
        "lat": -10.8135,
        "lng": -55.461
      },
      {
        "nome": "Colniza",
        "uf": "MT",
        "ibge": 5103254,
        "lat": -9.46121,
        "lng": -59.2252
      },
      {
        "nome": "Comodoro",
        "uf": "MT",
        "ibge": 5103304,
        "lat": -13.6614,
        "lng": -59.7848
      },
      {
        "nome": "Confresa",
        "uf": "MT",
        "ibge": 5103353,
        "lat": -10.6437,
        "lng": -51.5699
      },
      {
        "nome": "Conquista D'Oeste",
        "uf": "MT",
        "ibge": 5103361,
        "lat": -14.5381,
        "lng": -59.5444
      },
      {
        "nome": "Cotriguaçu",
        "uf": "MT",
        "ibge": 5103379,
        "lat": -9.85656,
        "lng": -58.4192
      },
      {
        "nome": "Curvelândia",
        "uf": "MT",
        "ibge": 5103437,
        "lat": -15.6084,
        "lng": -57.9133
      },
      {
        "nome": "Denise",
        "uf": "MT",
        "ibge": 5103452,
        "lat": -14.7324,
        "lng": -57.0583
      },
      {
        "nome": "Diamantino",
        "uf": "MT",
        "ibge": 5103502,
        "lat": -14.4037,
        "lng": -56.4366
      },
      {
        "nome": "Dom Aquino",
        "uf": "MT",
        "ibge": 5103601,
        "lat": -15.8099,
        "lng": -54.9223
      },
      {
        "nome": "Feliz Natal",
        "uf": "MT",
        "ibge": 5103700,
        "lat": -12.385,
        "lng": -54.9227
      },
      {
        "nome": "Figueirópolis D'Oeste",
        "uf": "MT",
        "ibge": 5103809,
        "lat": -15.4439,
        "lng": -58.7391
      },
      {
        "nome": "Gaúcha do Norte",
        "uf": "MT",
        "ibge": 5103858,
        "lat": -13.2443,
        "lng": -53.0809
      },
      {
        "nome": "General Carneiro",
        "uf": "MT",
        "ibge": 5103908,
        "lat": -15.7094,
        "lng": -52.7574
      },
      {
        "nome": "Glória D'Oeste",
        "uf": "MT",
        "ibge": 5103957,
        "lat": -15.768,
        "lng": -58.3108
      },
      {
        "nome": "Guarantã do Norte",
        "uf": "MT",
        "ibge": 5104104,
        "lat": -9.96218,
        "lng": -54.9121
      },
      {
        "nome": "Guiratinga",
        "uf": "MT",
        "ibge": 5104203,
        "lat": -16.346,
        "lng": -53.7575
      },
      {
        "nome": "Indiavaí",
        "uf": "MT",
        "ibge": 5104500,
        "lat": -15.4921,
        "lng": -58.5802
      },
      {
        "nome": "Ipiranga do Norte",
        "uf": "MT",
        "ibge": 5104526,
        "lat": -12.2408,
        "lng": -56.1531
      },
      {
        "nome": "Itanhangá",
        "uf": "MT",
        "ibge": 5104542,
        "lat": -12.2259,
        "lng": -56.6463
      },
      {
        "nome": "Itaúba",
        "uf": "MT",
        "ibge": 5104559,
        "lat": -11.0614,
        "lng": -55.2766
      },
      {
        "nome": "Itiquira",
        "uf": "MT",
        "ibge": 5104609,
        "lat": -17.2147,
        "lng": -54.1422
      },
      {
        "nome": "Jaciara",
        "uf": "MT",
        "ibge": 5104807,
        "lat": -15.9548,
        "lng": -54.9733
      },
      {
        "nome": "Jangada",
        "uf": "MT",
        "ibge": 5104906,
        "lat": -15.235,
        "lng": -56.4917
      },
      {
        "nome": "Jauru",
        "uf": "MT",
        "ibge": 5105002,
        "lat": -15.3342,
        "lng": -58.8723
      },
      {
        "nome": "Juara",
        "uf": "MT",
        "ibge": 5105101,
        "lat": -11.2639,
        "lng": -57.5244
      },
      {
        "nome": "Juína",
        "uf": "MT",
        "ibge": 5105150,
        "lat": -11.3728,
        "lng": -58.7483
      },
      {
        "nome": "Juruena",
        "uf": "MT",
        "ibge": 5105176,
        "lat": -10.3178,
        "lng": -58.3592
      },
      {
        "nome": "Juscimeira",
        "uf": "MT",
        "ibge": 5105200,
        "lat": -16.0633,
        "lng": -54.8859
      },
      {
        "nome": "Lambari D'Oeste",
        "uf": "MT",
        "ibge": 5105234,
        "lat": -15.3188,
        "lng": -58.0046
      },
      {
        "nome": "Lucas do Rio Verde",
        "uf": "MT",
        "ibge": 5105259,
        "lat": -13.0588,
        "lng": -55.9042
      },
      {
        "nome": "Luciara",
        "uf": "MT",
        "ibge": 5105309,
        "lat": -11.2219,
        "lng": -50.6676
      },
      {
        "nome": "Marcelândia",
        "uf": "MT",
        "ibge": 5105580,
        "lat": -11.0463,
        "lng": -54.4377
      },
      {
        "nome": "Matupá",
        "uf": "MT",
        "ibge": 5105606,
        "lat": -10.1821,
        "lng": -54.9467
      },
      {
        "nome": "Mirassol d'Oeste",
        "uf": "MT",
        "ibge": 5105622,
        "lat": -15.6759,
        "lng": -58.0951
      },
      {
        "nome": "Nobres",
        "uf": "MT",
        "ibge": 5105903,
        "lat": -14.7192,
        "lng": -56.3284
      },
      {
        "nome": "Nortelândia",
        "uf": "MT",
        "ibge": 5106000,
        "lat": -14.454,
        "lng": -56.7945
      },
      {
        "nome": "Nossa Senhora do Livramento",
        "uf": "MT",
        "ibge": 5106109,
        "lat": -15.772,
        "lng": -56.3432
      },
      {
        "nome": "Nova Bandeirantes",
        "uf": "MT",
        "ibge": 5106158,
        "lat": -9.84977,
        "lng": -57.8139
      },
      {
        "nome": "Nova Brasilândia",
        "uf": "MT",
        "ibge": 5106208,
        "lat": -14.9612,
        "lng": -54.9685
      },
      {
        "nome": "Nova Canaã do Norte",
        "uf": "MT",
        "ibge": 5106216,
        "lat": -10.558,
        "lng": -55.953
      },
      {
        "nome": "Nova Guarita",
        "uf": "MT",
        "ibge": 5108808,
        "lat": -10.312,
        "lng": -55.4061
      },
      {
        "nome": "Nova Lacerda",
        "uf": "MT",
        "ibge": 5106182,
        "lat": -14.4727,
        "lng": -59.6001
      },
      {
        "nome": "Nova Marilândia",
        "uf": "MT",
        "ibge": 5108857,
        "lat": -14.3568,
        "lng": -56.9696
      },
      {
        "nome": "Nova Maringá",
        "uf": "MT",
        "ibge": 5108907,
        "lat": -13.0136,
        "lng": -57.0908
      },
      {
        "nome": "Nova Monte Verde",
        "uf": "MT",
        "ibge": 5108956,
        "lat": -9.99998,
        "lng": -57.5261
      },
      {
        "nome": "Nova Mutum",
        "uf": "MT",
        "ibge": 5106224,
        "lat": -13.8374,
        "lng": -56.0743
      },
      {
        "nome": "Nova Nazaré",
        "uf": "MT",
        "ibge": 5106174,
        "lat": -13.9486,
        "lng": -51.8002
      },
      {
        "nome": "Nova Olímpia",
        "uf": "MT",
        "ibge": 5106232,
        "lat": -14.7889,
        "lng": -57.2886
      },
      {
        "nome": "Nova Santa Helena",
        "uf": "MT",
        "ibge": 5106190,
        "lat": -10.8651,
        "lng": -55.1872
      },
      {
        "nome": "Nova Ubiratã",
        "uf": "MT",
        "ibge": 5106240,
        "lat": -12.9834,
        "lng": -55.2556
      },
      {
        "nome": "Nova Xavantina",
        "uf": "MT",
        "ibge": 5106257,
        "lat": -14.6771,
        "lng": -52.3502
      },
      {
        "nome": "Novo Horizonte do Norte",
        "uf": "MT",
        "ibge": 5106273,
        "lat": -11.4089,
        "lng": -57.3488
      },
      {
        "nome": "Novo Mundo",
        "uf": "MT",
        "ibge": 5106265,
        "lat": -9.95616,
        "lng": -55.2029
      },
      {
        "nome": "Novo Santo Antônio",
        "uf": "MT",
        "ibge": 5106315,
        "lat": -12.2875,
        "lng": -50.9686
      },
      {
        "nome": "Novo São Joaquim",
        "uf": "MT",
        "ibge": 5106281,
        "lat": -14.9054,
        "lng": -53.0194
      },
      {
        "nome": "Paranaíta",
        "uf": "MT",
        "ibge": 5106299,
        "lat": -9.65835,
        "lng": -56.4786
      },
      {
        "nome": "Paranatinga",
        "uf": "MT",
        "ibge": 5106307,
        "lat": -14.4265,
        "lng": -54.0524
      },
      {
        "nome": "Pedra Preta",
        "uf": "MT",
        "ibge": 5106372,
        "lat": -16.6245,
        "lng": -54.4722
      },
      {
        "nome": "Peixoto de Azevedo",
        "uf": "MT",
        "ibge": 5106422,
        "lat": -10.2262,
        "lng": -54.9794
      },
      {
        "nome": "Planalto da Serra",
        "uf": "MT",
        "ibge": 5106455,
        "lat": -14.6518,
        "lng": -54.7819
      },
      {
        "nome": "Poconé",
        "uf": "MT",
        "ibge": 5106505,
        "lat": -16.266,
        "lng": -56.6261
      },
      {
        "nome": "Pontal do Araguaia",
        "uf": "MT",
        "ibge": 5106653,
        "lat": -15.9274,
        "lng": -52.3273
      },
      {
        "nome": "Ponte Branca",
        "uf": "MT",
        "ibge": 5106703,
        "lat": -16.7584,
        "lng": -52.8369
      },
      {
        "nome": "Pontes e Lacerda",
        "uf": "MT",
        "ibge": 5106752,
        "lat": -15.2219,
        "lng": -59.3435
      },
      {
        "nome": "Porto Alegre do Norte",
        "uf": "MT",
        "ibge": 5106778,
        "lat": -10.8761,
        "lng": -51.6357
      },
      {
        "nome": "Porto dos Gaúchos",
        "uf": "MT",
        "ibge": 5106802,
        "lat": -11.533,
        "lng": -57.4132
      },
      {
        "nome": "Porto Esperidião",
        "uf": "MT",
        "ibge": 5106828,
        "lat": -15.857,
        "lng": -58.4619
      },
      {
        "nome": "Porto Estrela",
        "uf": "MT",
        "ibge": 5106851,
        "lat": -15.3235,
        "lng": -57.2204
      },
      {
        "nome": "Poxoréu",
        "uf": "MT",
        "ibge": 5107008,
        "lat": -15.8299,
        "lng": -54.4208
      },
      {
        "nome": "Primavera do Leste",
        "uf": "MT",
        "ibge": 5107040,
        "lat": -15.544,
        "lng": -54.2811
      },
      {
        "nome": "Querência",
        "uf": "MT",
        "ibge": 5107065,
        "lat": -12.6093,
        "lng": -52.1821
      },
      {
        "nome": "Reserva do Cabaçal",
        "uf": "MT",
        "ibge": 5107156,
        "lat": -15.0743,
        "lng": -58.4585
      },
      {
        "nome": "Ribeirão Cascalheira",
        "uf": "MT",
        "ibge": 5107180,
        "lat": -12.9367,
        "lng": -51.8244
      },
      {
        "nome": "Ribeirãozinho",
        "uf": "MT",
        "ibge": 5107198,
        "lat": -16.4856,
        "lng": -52.6924
      },
      {
        "nome": "Rio Branco",
        "uf": "MT",
        "ibge": 5107206,
        "lat": -15.2483,
        "lng": -58.1259
      },
      {
        "nome": "Rondolândia",
        "uf": "MT",
        "ibge": 5107578,
        "lat": -10.8376,
        "lng": -61.4697
      },
      {
        "nome": "Rondonópolis",
        "uf": "MT",
        "ibge": 5107602,
        "lat": -16.4673,
        "lng": -54.6372
      },
      {
        "nome": "Rosário Oeste",
        "uf": "MT",
        "ibge": 5107701,
        "lat": -14.8259,
        "lng": -56.4236
      },
      {
        "nome": "Salto do Céu",
        "uf": "MT",
        "ibge": 5107750,
        "lat": -15.1303,
        "lng": -58.1317
      },
      {
        "nome": "Santa Carmem",
        "uf": "MT",
        "ibge": 5107248,
        "lat": -11.9125,
        "lng": -55.2263
      },
      {
        "nome": "Santa Cruz do Xingu",
        "uf": "MT",
        "ibge": 5107743,
        "lat": -10.1532,
        "lng": -52.3953
      },
      {
        "nome": "Santa Rita do Trivelato",
        "uf": "MT",
        "ibge": 5107768,
        "lat": -13.8146,
        "lng": -55.2706
      },
      {
        "nome": "Santa Terezinha",
        "uf": "MT",
        "ibge": 5107776,
        "lat": -10.4704,
        "lng": -50.514
      },
      {
        "nome": "Santo Afonso",
        "uf": "MT",
        "ibge": 5107263,
        "lat": -14.4945,
        "lng": -57.0091
      },
      {
        "nome": "Santo Antônio do Leste",
        "uf": "MT",
        "ibge": 5107792,
        "lat": -14.805,
        "lng": -53.6075
      },
      {
        "nome": "Santo Antônio do Leverger",
        "uf": "MT",
        "ibge": 5107800,
        "lat": -15.8632,
        "lng": -56.0788
      },
      {
        "nome": "São Félix do Araguaia",
        "uf": "MT",
        "ibge": 5107859,
        "lat": -11.615,
        "lng": -50.6706
      },
      {
        "nome": "São José do Povo",
        "uf": "MT",
        "ibge": 5107297,
        "lat": -16.4549,
        "lng": -54.2487
      },
      {
        "nome": "São José do Rio Claro",
        "uf": "MT",
        "ibge": 5107305,
        "lat": -13.4398,
        "lng": -56.7218
      },
      {
        "nome": "São José do Xingu",
        "uf": "MT",
        "ibge": 5107354,
        "lat": -10.7982,
        "lng": -52.7486
      },
      {
        "nome": "São José dos Quatro Marcos",
        "uf": "MT",
        "ibge": 5107107,
        "lat": -15.6276,
        "lng": -58.1772
      },
      {
        "nome": "São Pedro da Cipa",
        "uf": "MT",
        "ibge": 5107404,
        "lat": -16.0109,
        "lng": -54.9176
      },
      {
        "nome": "Sapezal",
        "uf": "MT",
        "ibge": 5107875,
        "lat": -12.9892,
        "lng": -58.7645
      },
      {
        "nome": "Serra Nova Dourada",
        "uf": "MT",
        "ibge": 5107883,
        "lat": -12.0896,
        "lng": -51.4025
      },
      {
        "nome": "Sinop",
        "uf": "MT",
        "ibge": 5107909,
        "lat": -11.8604,
        "lng": -55.5091
      },
      {
        "nome": "Sorriso",
        "uf": "MT",
        "ibge": 5107925,
        "lat": -12.5425,
        "lng": -55.7211
      },
      {
        "nome": "Tabaporã",
        "uf": "MT",
        "ibge": 5107941,
        "lat": -11.3007,
        "lng": -56.8312
      },
      {
        "nome": "Tangará da Serra",
        "uf": "MT",
        "ibge": 5107958,
        "lat": -14.6229,
        "lng": -57.4933
      },
      {
        "nome": "Tapurah",
        "uf": "MT",
        "ibge": 5108006,
        "lat": -12.695,
        "lng": -56.5178
      },
      {
        "nome": "Terra Nova do Norte",
        "uf": "MT",
        "ibge": 5108055,
        "lat": -10.517,
        "lng": -55.231
      },
      {
        "nome": "Tesouro",
        "uf": "MT",
        "ibge": 5108105,
        "lat": -16.0809,
        "lng": -53.559
      },
      {
        "nome": "Torixoréu",
        "uf": "MT",
        "ibge": 5108204,
        "lat": -16.2006,
        "lng": -52.5571
      },
      {
        "nome": "União do Sul",
        "uf": "MT",
        "ibge": 5108303,
        "lat": -11.5308,
        "lng": -54.3616
      },
      {
        "nome": "Vale de São Domingos",
        "uf": "MT",
        "ibge": 5108352,
        "lat": -15.286,
        "lng": -59.0683
      },
      {
        "nome": "Várzea Grande",
        "uf": "MT",
        "ibge": 5108402,
        "lat": -15.6458,
        "lng": -56.1322
      },
      {
        "nome": "Vera",
        "uf": "MT",
        "ibge": 5108501,
        "lat": -12.3017,
        "lng": -55.3045
      },
      {
        "nome": "Vila Bela da Santíssima Trindade",
        "uf": "MT",
        "ibge": 5105507,
        "lat": -15.0068,
        "lng": -59.9504
      },
      {
        "nome": "Vila Rica",
        "uf": "MT",
        "ibge": 5108600,
        "lat": -10.0137,
        "lng": -51.1186
      }
    ],
    "capital": {
      "nome": "Cuiabá",
      "uf": "MT",
      "ibge": 5103403,
      "lat": -15.601,
      "lng": -56.0974
    }
  },
  "GO": {
    "nome": "Goiás",
    "ibge": 52,
    "cidades": [
      {
        "nome": "Abadia de Goiás",
        "uf": "GO",
        "ibge": 5200050,
        "lat": -16.7573,
        "lng": -49.4412
      },
      {
        "nome": "Abadiânia",
        "uf": "GO",
        "ibge": 5200100,
        "lat": -16.197,
        "lng": -48.7057
      },
      {
        "nome": "Acreúna",
        "uf": "GO",
        "ibge": 5200134,
        "lat": -17.396,
        "lng": -50.3749
      },
      {
        "nome": "Adelândia",
        "uf": "GO",
        "ibge": 5200159,
        "lat": -16.4127,
        "lng": -50.1657
      },
      {
        "nome": "Água Fria de Goiás",
        "uf": "GO",
        "ibge": 5200175,
        "lat": -14.9778,
        "lng": -47.7823
      },
      {
        "nome": "Água Limpa",
        "uf": "GO",
        "ibge": 5200209,
        "lat": -18.0771,
        "lng": -48.7603
      },
      {
        "nome": "Águas Lindas de Goiás",
        "uf": "GO",
        "ibge": 5200258,
        "lat": -15.7617,
        "lng": -48.2816
      },
      {
        "nome": "Alexânia",
        "uf": "GO",
        "ibge": 5200308,
        "lat": -16.0834,
        "lng": -48.5076
      },
      {
        "nome": "Aloândia",
        "uf": "GO",
        "ibge": 5200506,
        "lat": -17.7292,
        "lng": -49.4769
      },
      {
        "nome": "Alto Horizonte",
        "uf": "GO",
        "ibge": 5200555,
        "lat": -14.1978,
        "lng": -49.3378
      },
      {
        "nome": "Alto Paraíso de Goiás",
        "uf": "GO",
        "ibge": 5200605,
        "lat": -14.1305,
        "lng": -47.51
      },
      {
        "nome": "Alvorada do Norte",
        "uf": "GO",
        "ibge": 5200803,
        "lat": -14.4797,
        "lng": -46.491
      },
      {
        "nome": "Amaralina",
        "uf": "GO",
        "ibge": 5200829,
        "lat": -13.9236,
        "lng": -49.2962
      },
      {
        "nome": "Americano do Brasil",
        "uf": "GO",
        "ibge": 5200852,
        "lat": -16.2514,
        "lng": -49.9831
      },
      {
        "nome": "Amorinópolis",
        "uf": "GO",
        "ibge": 5200902,
        "lat": -16.6151,
        "lng": -51.0919
      },
      {
        "nome": "Anápolis",
        "uf": "GO",
        "ibge": 5201108,
        "lat": -16.3281,
        "lng": -48.953
      },
      {
        "nome": "Anhanguera",
        "uf": "GO",
        "ibge": 5201207,
        "lat": -18.3339,
        "lng": -48.2204
      },
      {
        "nome": "Anicuns",
        "uf": "GO",
        "ibge": 5201306,
        "lat": -16.4642,
        "lng": -49.9617
      },
      {
        "nome": "Aparecida de Goiânia",
        "uf": "GO",
        "ibge": 5201405,
        "lat": -16.8198,
        "lng": -49.2469
      },
      {
        "nome": "Aparecida do Rio Doce",
        "uf": "GO",
        "ibge": 5201454,
        "lat": -18.2941,
        "lng": -51.1516
      },
      {
        "nome": "Aporé",
        "uf": "GO",
        "ibge": 5201504,
        "lat": -18.9607,
        "lng": -51.9232
      },
      {
        "nome": "Araçu",
        "uf": "GO",
        "ibge": 5201603,
        "lat": -16.3563,
        "lng": -49.6804
      },
      {
        "nome": "Aragarças",
        "uf": "GO",
        "ibge": 5201702,
        "lat": -15.8955,
        "lng": -52.2372
      },
      {
        "nome": "Aragoiânia",
        "uf": "GO",
        "ibge": 5201801,
        "lat": -16.9087,
        "lng": -49.4476
      },
      {
        "nome": "Araguapaz",
        "uf": "GO",
        "ibge": 5202155,
        "lat": -15.0909,
        "lng": -50.6315
      },
      {
        "nome": "Arenópolis",
        "uf": "GO",
        "ibge": 5202353,
        "lat": -16.3837,
        "lng": -51.5563
      },
      {
        "nome": "Aruanã",
        "uf": "GO",
        "ibge": 5202502,
        "lat": -14.9166,
        "lng": -51.075
      },
      {
        "nome": "Aurilândia",
        "uf": "GO",
        "ibge": 5202601,
        "lat": -16.6773,
        "lng": -50.4641
      },
      {
        "nome": "Avelinópolis",
        "uf": "GO",
        "ibge": 5202809,
        "lat": -16.4672,
        "lng": -49.7579
      },
      {
        "nome": "Baliza",
        "uf": "GO",
        "ibge": 5203104,
        "lat": -16.1966,
        "lng": -52.5393
      },
      {
        "nome": "Barro Alto",
        "uf": "GO",
        "ibge": 5203203,
        "lat": -14.9658,
        "lng": -48.9086
      },
      {
        "nome": "Bela Vista de Goiás",
        "uf": "GO",
        "ibge": 5203302,
        "lat": -16.9693,
        "lng": -48.9513
      },
      {
        "nome": "Bom Jardim de Goiás",
        "uf": "GO",
        "ibge": 5203401,
        "lat": -16.2063,
        "lng": -52.1728
      },
      {
        "nome": "Bom Jesus de Goiás",
        "uf": "GO",
        "ibge": 5203500,
        "lat": -18.2173,
        "lng": -49.74
      },
      {
        "nome": "Bonfinópolis",
        "uf": "GO",
        "ibge": 5203559,
        "lat": -16.6173,
        "lng": -48.9616
      },
      {
        "nome": "Bonópolis",
        "uf": "GO",
        "ibge": 5203575,
        "lat": -13.6329,
        "lng": -49.8106
      },
      {
        "nome": "Brazabrantes",
        "uf": "GO",
        "ibge": 5203609,
        "lat": -16.4281,
        "lng": -49.3863
      },
      {
        "nome": "Britânia",
        "uf": "GO",
        "ibge": 5203807,
        "lat": -15.2428,
        "lng": -51.1602
      },
      {
        "nome": "Buriti Alegre",
        "uf": "GO",
        "ibge": 5203906,
        "lat": -18.1378,
        "lng": -49.0404
      },
      {
        "nome": "Buriti de Goiás",
        "uf": "GO",
        "ibge": 5203939,
        "lat": -16.1792,
        "lng": -50.4302
      },
      {
        "nome": "Buritinópolis",
        "uf": "GO",
        "ibge": 5203962,
        "lat": -14.4772,
        "lng": -46.4076
      },
      {
        "nome": "Cabeceiras",
        "uf": "GO",
        "ibge": 5204003,
        "lat": -15.7995,
        "lng": -46.9265
      },
      {
        "nome": "Cachoeira Alta",
        "uf": "GO",
        "ibge": 5204102,
        "lat": -18.7618,
        "lng": -50.9432
      },
      {
        "nome": "Cachoeira de Goiás",
        "uf": "GO",
        "ibge": 5204201,
        "lat": -16.6635,
        "lng": -50.646
      },
      {
        "nome": "Cachoeira Dourada",
        "uf": "GO",
        "ibge": 5204250,
        "lat": -18.4859,
        "lng": -49.4766
      },
      {
        "nome": "Caçu",
        "uf": "GO",
        "ibge": 5204300,
        "lat": -18.5594,
        "lng": -51.1328
      },
      {
        "nome": "Caiapônia",
        "uf": "GO",
        "ibge": 5204409,
        "lat": -16.9539,
        "lng": -51.8091
      },
      {
        "nome": "Caldas Novas",
        "uf": "GO",
        "ibge": 5204508,
        "lat": -17.7441,
        "lng": -48.6246
      },
      {
        "nome": "Caldazinha",
        "uf": "GO",
        "ibge": 5204557,
        "lat": -16.7117,
        "lng": -49.0013
      },
      {
        "nome": "Campestre de Goiás",
        "uf": "GO",
        "ibge": 5204607,
        "lat": -16.7624,
        "lng": -49.695
      },
      {
        "nome": "Campinaçu",
        "uf": "GO",
        "ibge": 5204656,
        "lat": -13.787,
        "lng": -48.5704
      },
      {
        "nome": "Campinorte",
        "uf": "GO",
        "ibge": 5204706,
        "lat": -14.3137,
        "lng": -49.1511
      },
      {
        "nome": "Campo Alegre de Goiás",
        "uf": "GO",
        "ibge": 5204805,
        "lat": -17.6363,
        "lng": -47.7768
      },
      {
        "nome": "Campo Limpo de Goiás",
        "uf": "GO",
        "ibge": 5204854,
        "lat": -16.2971,
        "lng": -49.0895
      },
      {
        "nome": "Campos Belos",
        "uf": "GO",
        "ibge": 5204904,
        "lat": -13.035,
        "lng": -46.7681
      },
      {
        "nome": "Campos Verdes",
        "uf": "GO",
        "ibge": 5204953,
        "lat": -14.2442,
        "lng": -49.6528
      },
      {
        "nome": "Carmo do Rio Verde",
        "uf": "GO",
        "ibge": 5205000,
        "lat": -15.3549,
        "lng": -49.708
      },
      {
        "nome": "Castelândia",
        "uf": "GO",
        "ibge": 5205059,
        "lat": -18.0921,
        "lng": -50.203
      },
      {
        "nome": "Catalão",
        "uf": "GO",
        "ibge": 5205109,
        "lat": -18.1656,
        "lng": -47.944
      },
      {
        "nome": "Caturaí",
        "uf": "GO",
        "ibge": 5205208,
        "lat": -16.4447,
        "lng": -49.4936
      },
      {
        "nome": "Cavalcante",
        "uf": "GO",
        "ibge": 5205307,
        "lat": -13.7976,
        "lng": -47.4566
      },
      {
        "nome": "Ceres",
        "uf": "GO",
        "ibge": 5205406,
        "lat": -15.3061,
        "lng": -49.6
      },
      {
        "nome": "Cezarina",
        "uf": "GO",
        "ibge": 5205455,
        "lat": -16.9718,
        "lng": -49.7758
      },
      {
        "nome": "Chapadão do Céu",
        "uf": "GO",
        "ibge": 5205471,
        "lat": -18.4073,
        "lng": -52.549
      },
      {
        "nome": "Cidade Ocidental",
        "uf": "GO",
        "ibge": 5205497,
        "lat": -16.0765,
        "lng": -47.9252
      },
      {
        "nome": "Cocalzinho de Goiás",
        "uf": "GO",
        "ibge": 5205513,
        "lat": -15.7914,
        "lng": -48.7747
      },
      {
        "nome": "Colinas do Sul",
        "uf": "GO",
        "ibge": 5205521,
        "lat": -14.1528,
        "lng": -48.076
      },
      {
        "nome": "Córrego do Ouro",
        "uf": "GO",
        "ibge": 5205703,
        "lat": -16.2918,
        "lng": -50.5503
      },
      {
        "nome": "Corumbá de Goiás",
        "uf": "GO",
        "ibge": 5205802,
        "lat": -15.9245,
        "lng": -48.8117
      },
      {
        "nome": "Corumbaíba",
        "uf": "GO",
        "ibge": 5205901,
        "lat": -18.1415,
        "lng": -48.5626
      },
      {
        "nome": "Cristalina",
        "uf": "GO",
        "ibge": 5206206,
        "lat": -16.7676,
        "lng": -47.6131
      },
      {
        "nome": "Cristianópolis",
        "uf": "GO",
        "ibge": 5206305,
        "lat": -17.1987,
        "lng": -48.7034
      },
      {
        "nome": "Crixás",
        "uf": "GO",
        "ibge": 5206404,
        "lat": -14.5412,
        "lng": -49.974
      },
      {
        "nome": "Cromínia",
        "uf": "GO",
        "ibge": 5206503,
        "lat": -17.2883,
        "lng": -49.3798
      },
      {
        "nome": "Cumari",
        "uf": "GO",
        "ibge": 5206602,
        "lat": -18.2644,
        "lng": -48.1511
      },
      {
        "nome": "Damianópolis",
        "uf": "GO",
        "ibge": 5206701,
        "lat": -14.5604,
        "lng": -46.178
      },
      {
        "nome": "Damolândia",
        "uf": "GO",
        "ibge": 5206800,
        "lat": -16.2544,
        "lng": -49.3631
      },
      {
        "nome": "Davinópolis",
        "uf": "GO",
        "ibge": 5206909,
        "lat": -18.1501,
        "lng": -47.5568
      },
      {
        "nome": "Diorama",
        "uf": "GO",
        "ibge": 5207105,
        "lat": -16.2329,
        "lng": -51.2543
      },
      {
        "nome": "Divinópolis de Goiás",
        "uf": "GO",
        "ibge": 5208301,
        "lat": -13.2853,
        "lng": -46.3999
      },
      {
        "nome": "Doverlândia",
        "uf": "GO",
        "ibge": 5207253,
        "lat": -16.7188,
        "lng": -52.3189
      },
      {
        "nome": "Edealina",
        "uf": "GO",
        "ibge": 5207352,
        "lat": -17.4239,
        "lng": -49.6644
      },
      {
        "nome": "Edéia",
        "uf": "GO",
        "ibge": 5207402,
        "lat": -17.3406,
        "lng": -49.9295
      },
      {
        "nome": "Estrela do Norte",
        "uf": "GO",
        "ibge": 5207501,
        "lat": -13.8665,
        "lng": -49.0716
      },
      {
        "nome": "Faina",
        "uf": "GO",
        "ibge": 5207535,
        "lat": -15.4473,
        "lng": -50.3622
      },
      {
        "nome": "Fazenda Nova",
        "uf": "GO",
        "ibge": 5207600,
        "lat": -16.1834,
        "lng": -50.7781
      },
      {
        "nome": "Firminópolis",
        "uf": "GO",
        "ibge": 5207808,
        "lat": -16.5778,
        "lng": -50.304
      },
      {
        "nome": "Flores de Goiás",
        "uf": "GO",
        "ibge": 5207907,
        "lat": -14.4451,
        "lng": -47.0417
      },
      {
        "nome": "Formosa",
        "uf": "GO",
        "ibge": 5208004,
        "lat": -15.54,
        "lng": -47.337
      },
      {
        "nome": "Formoso",
        "uf": "GO",
        "ibge": 5208103,
        "lat": -13.6499,
        "lng": -48.8775
      },
      {
        "nome": "Gameleira de Goiás",
        "uf": "GO",
        "ibge": 5208152,
        "lat": -16.4854,
        "lng": -48.6454
      },
      {
        "nome": "Goianápolis",
        "uf": "GO",
        "ibge": 5208400,
        "lat": -16.5098,
        "lng": -49.0234
      },
      {
        "nome": "Goiandira",
        "uf": "GO",
        "ibge": 5208509,
        "lat": -18.1352,
        "lng": -48.0875
      },
      {
        "nome": "Goianésia",
        "uf": "GO",
        "ibge": 5208608,
        "lat": -15.3118,
        "lng": -49.1162
      },
      {
        "nome": "Goianira",
        "uf": "GO",
        "ibge": 5208806,
        "lat": -16.4947,
        "lng": -49.427
      },
      {
        "nome": "Goiás",
        "uf": "GO",
        "ibge": 5208905,
        "lat": -15.9333,
        "lng": -50.14
      },
      {
        "nome": "Goiatuba",
        "uf": "GO",
        "ibge": 5209101,
        "lat": -18.0105,
        "lng": -49.3658
      },
      {
        "nome": "Gouvelândia",
        "uf": "GO",
        "ibge": 5209150,
        "lat": -18.6238,
        "lng": -50.0805
      },
      {
        "nome": "Guapó",
        "uf": "GO",
        "ibge": 5209200,
        "lat": -16.8297,
        "lng": -49.5345
      },
      {
        "nome": "Guaraíta",
        "uf": "GO",
        "ibge": 5209291,
        "lat": -15.6121,
        "lng": -50.0265
      },
      {
        "nome": "Guarani de Goiás",
        "uf": "GO",
        "ibge": 5209408,
        "lat": -13.9421,
        "lng": -46.4868
      },
      {
        "nome": "Guarinos",
        "uf": "GO",
        "ibge": 5209457,
        "lat": -14.7292,
        "lng": -49.7006
      },
      {
        "nome": "Heitoraí",
        "uf": "GO",
        "ibge": 5209606,
        "lat": -15.719,
        "lng": -49.8268
      },
      {
        "nome": "Hidrolândia",
        "uf": "GO",
        "ibge": 5209705,
        "lat": -16.9626,
        "lng": -49.2265
      },
      {
        "nome": "Hidrolina",
        "uf": "GO",
        "ibge": 5209804,
        "lat": -14.7261,
        "lng": -49.4634
      },
      {
        "nome": "Iaciara",
        "uf": "GO",
        "ibge": 5209903,
        "lat": -14.1011,
        "lng": -46.6335
      },
      {
        "nome": "Inaciolândia",
        "uf": "GO",
        "ibge": 5209937,
        "lat": -18.4869,
        "lng": -49.9888
      },
      {
        "nome": "Indiara",
        "uf": "GO",
        "ibge": 5209952,
        "lat": -17.1387,
        "lng": -49.9862
      },
      {
        "nome": "Inhumas",
        "uf": "GO",
        "ibge": 5210000,
        "lat": -16.3611,
        "lng": -49.5001
      },
      {
        "nome": "Ipameri",
        "uf": "GO",
        "ibge": 5210109,
        "lat": -17.7215,
        "lng": -48.1581
      },
      {
        "nome": "Ipiranga de Goiás",
        "uf": "GO",
        "ibge": 5210158,
        "lat": -15.1689,
        "lng": -49.6695
      },
      {
        "nome": "Iporá",
        "uf": "GO",
        "ibge": 5210208,
        "lat": -16.4398,
        "lng": -51.118
      },
      {
        "nome": "Israelândia",
        "uf": "GO",
        "ibge": 5210307,
        "lat": -16.3144,
        "lng": -50.9087
      },
      {
        "nome": "Itaberaí",
        "uf": "GO",
        "ibge": 5210406,
        "lat": -16.0206,
        "lng": -49.806
      },
      {
        "nome": "Itaguari",
        "uf": "GO",
        "ibge": 5210562,
        "lat": -15.918,
        "lng": -49.6071
      },
      {
        "nome": "Itaguaru",
        "uf": "GO",
        "ibge": 5210604,
        "lat": -15.7565,
        "lng": -49.6354
      },
      {
        "nome": "Itajá",
        "uf": "GO",
        "ibge": 5210802,
        "lat": -19.0673,
        "lng": -51.5495
      },
      {
        "nome": "Itapaci",
        "uf": "GO",
        "ibge": 5210901,
        "lat": -14.9522,
        "lng": -49.5511
      },
      {
        "nome": "Itapirapuã",
        "uf": "GO",
        "ibge": 5211008,
        "lat": -15.8205,
        "lng": -50.6094
      },
      {
        "nome": "Itapuranga",
        "uf": "GO",
        "ibge": 5211206,
        "lat": -15.5606,
        "lng": -49.949
      },
      {
        "nome": "Itarumã",
        "uf": "GO",
        "ibge": 5211305,
        "lat": -18.7646,
        "lng": -51.3485
      },
      {
        "nome": "Itauçu",
        "uf": "GO",
        "ibge": 5211404,
        "lat": -16.2029,
        "lng": -49.6109
      },
      {
        "nome": "Itumbiara",
        "uf": "GO",
        "ibge": 5211503,
        "lat": -18.4093,
        "lng": -49.2158
      },
      {
        "nome": "Ivolândia",
        "uf": "GO",
        "ibge": 5211602,
        "lat": -16.5995,
        "lng": -50.7921
      },
      {
        "nome": "Jandaia",
        "uf": "GO",
        "ibge": 5211701,
        "lat": -17.0481,
        "lng": -50.1453
      },
      {
        "nome": "Jaraguá",
        "uf": "GO",
        "ibge": 5211800,
        "lat": -15.7529,
        "lng": -49.3344
      },
      {
        "nome": "Jataí",
        "uf": "GO",
        "ibge": 5211909,
        "lat": -17.8784,
        "lng": -51.7204
      },
      {
        "nome": "Jaupaci",
        "uf": "GO",
        "ibge": 5212006,
        "lat": -16.1773,
        "lng": -50.9508
      },
      {
        "nome": "Jesúpolis",
        "uf": "GO",
        "ibge": 5212055,
        "lat": -15.9484,
        "lng": -49.3739
      },
      {
        "nome": "Joviânia",
        "uf": "GO",
        "ibge": 5212105,
        "lat": -17.802,
        "lng": -49.6197
      },
      {
        "nome": "Jussara",
        "uf": "GO",
        "ibge": 5212204,
        "lat": -15.8659,
        "lng": -50.8668
      },
      {
        "nome": "Lagoa Santa",
        "uf": "GO",
        "ibge": 5212253,
        "lat": -19.1832,
        "lng": -51.3998
      },
      {
        "nome": "Leopoldo de Bulhões",
        "uf": "GO",
        "ibge": 5212303,
        "lat": -16.619,
        "lng": -48.7428
      },
      {
        "nome": "Luziânia",
        "uf": "GO",
        "ibge": 5212501,
        "lat": -16.253,
        "lng": -47.95
      },
      {
        "nome": "Mairipotaba",
        "uf": "GO",
        "ibge": 5212600,
        "lat": -17.2975,
        "lng": -49.4898
      },
      {
        "nome": "Mambaí",
        "uf": "GO",
        "ibge": 5212709,
        "lat": -14.4823,
        "lng": -46.1165
      },
      {
        "nome": "Mara Rosa",
        "uf": "GO",
        "ibge": 5212808,
        "lat": -14.0148,
        "lng": -49.1777
      },
      {
        "nome": "Marzagão",
        "uf": "GO",
        "ibge": 5212907,
        "lat": -17.983,
        "lng": -48.6415
      },
      {
        "nome": "Matrinchã",
        "uf": "GO",
        "ibge": 5212956,
        "lat": -15.4342,
        "lng": -50.7456
      },
      {
        "nome": "Maurilândia",
        "uf": "GO",
        "ibge": 5213004,
        "lat": -17.9719,
        "lng": -50.3388
      },
      {
        "nome": "Mimoso de Goiás",
        "uf": "GO",
        "ibge": 5213053,
        "lat": -15.0515,
        "lng": -48.1611
      },
      {
        "nome": "Minaçu",
        "uf": "GO",
        "ibge": 5213087,
        "lat": -13.5304,
        "lng": -48.2206
      },
      {
        "nome": "Mineiros",
        "uf": "GO",
        "ibge": 5213103,
        "lat": -17.5654,
        "lng": -52.5537
      },
      {
        "nome": "Moiporá",
        "uf": "GO",
        "ibge": 5213400,
        "lat": -16.5434,
        "lng": -50.739
      },
      {
        "nome": "Monte Alegre de Goiás",
        "uf": "GO",
        "ibge": 5213509,
        "lat": -13.2552,
        "lng": -46.8928
      },
      {
        "nome": "Montes Claros de Goiás",
        "uf": "GO",
        "ibge": 5213707,
        "lat": -16.0059,
        "lng": -51.3979
      },
      {
        "nome": "Montividiu",
        "uf": "GO",
        "ibge": 5213756,
        "lat": -17.4439,
        "lng": -51.1728
      },
      {
        "nome": "Montividiu do Norte",
        "uf": "GO",
        "ibge": 5213772,
        "lat": -13.3485,
        "lng": -48.6853
      },
      {
        "nome": "Morrinhos",
        "uf": "GO",
        "ibge": 5213806,
        "lat": -17.7334,
        "lng": -49.1059
      },
      {
        "nome": "Morro Agudo de Goiás",
        "uf": "GO",
        "ibge": 5213855,
        "lat": -15.3184,
        "lng": -50.0553
      },
      {
        "nome": "Mossâmedes",
        "uf": "GO",
        "ibge": 5213905,
        "lat": -16.124,
        "lng": -50.2136
      },
      {
        "nome": "Mozarlândia",
        "uf": "GO",
        "ibge": 5214002,
        "lat": -14.7457,
        "lng": -50.5713
      },
      {
        "nome": "Mundo Novo",
        "uf": "GO",
        "ibge": 5214051,
        "lat": -13.7729,
        "lng": -50.2814
      },
      {
        "nome": "Mutunópolis",
        "uf": "GO",
        "ibge": 5214101,
        "lat": -13.7303,
        "lng": -49.2745
      },
      {
        "nome": "Nazário",
        "uf": "GO",
        "ibge": 5214408,
        "lat": -16.5808,
        "lng": -49.8817
      },
      {
        "nome": "Nerópolis",
        "uf": "GO",
        "ibge": 5214507,
        "lat": -16.4047,
        "lng": -49.2227
      },
      {
        "nome": "Niquelândia",
        "uf": "GO",
        "ibge": 5214606,
        "lat": -14.4662,
        "lng": -48.4599
      },
      {
        "nome": "Nova América",
        "uf": "GO",
        "ibge": 5214705,
        "lat": -15.0206,
        "lng": -49.8953
      },
      {
        "nome": "Nova Aurora",
        "uf": "GO",
        "ibge": 5214804,
        "lat": -18.0597,
        "lng": -48.2552
      },
      {
        "nome": "Nova Crixás",
        "uf": "GO",
        "ibge": 5214838,
        "lat": -14.0957,
        "lng": -50.33
      },
      {
        "nome": "Nova Glória",
        "uf": "GO",
        "ibge": 5214861,
        "lat": -15.145,
        "lng": -49.5737
      },
      {
        "nome": "Nova Iguaçu de Goiás",
        "uf": "GO",
        "ibge": 5214879,
        "lat": -14.2868,
        "lng": -49.3872
      },
      {
        "nome": "Nova Roma",
        "uf": "GO",
        "ibge": 5214903,
        "lat": -13.7388,
        "lng": -46.8734
      },
      {
        "nome": "Nova Veneza",
        "uf": "GO",
        "ibge": 5215009,
        "lat": -16.3695,
        "lng": -49.3168
      },
      {
        "nome": "Novo Brasil",
        "uf": "GO",
        "ibge": 5215207,
        "lat": -16.0313,
        "lng": -50.7113
      },
      {
        "nome": "Novo Gama",
        "uf": "GO",
        "ibge": 5215231,
        "lat": -16.0592,
        "lng": -48.0417
      },
      {
        "nome": "Novo Planalto",
        "uf": "GO",
        "ibge": 5215256,
        "lat": -13.2424,
        "lng": -49.506
      },
      {
        "nome": "Orizona",
        "uf": "GO",
        "ibge": 5215306,
        "lat": -17.0334,
        "lng": -48.2964
      },
      {
        "nome": "Ouro Verde de Goiás",
        "uf": "GO",
        "ibge": 5215405,
        "lat": -16.2181,
        "lng": -49.1942
      },
      {
        "nome": "Ouvidor",
        "uf": "GO",
        "ibge": 5215504,
        "lat": -18.2277,
        "lng": -47.8355
      },
      {
        "nome": "Padre Bernardo",
        "uf": "GO",
        "ibge": 5215603,
        "lat": -15.1605,
        "lng": -48.2833
      },
      {
        "nome": "Palestina de Goiás",
        "uf": "GO",
        "ibge": 5215652,
        "lat": -16.7392,
        "lng": -51.5309
      },
      {
        "nome": "Palmeiras de Goiás",
        "uf": "GO",
        "ibge": 5215702,
        "lat": -16.8044,
        "lng": -49.924
      },
      {
        "nome": "Palmelo",
        "uf": "GO",
        "ibge": 5215801,
        "lat": -17.3258,
        "lng": -48.426
      },
      {
        "nome": "Palminópolis",
        "uf": "GO",
        "ibge": 5215900,
        "lat": -16.7924,
        "lng": -50.1652
      },
      {
        "nome": "Panamá",
        "uf": "GO",
        "ibge": 5216007,
        "lat": -18.1783,
        "lng": -49.355
      },
      {
        "nome": "Paranaiguara",
        "uf": "GO",
        "ibge": 5216304,
        "lat": -18.9141,
        "lng": -50.6539
      },
      {
        "nome": "Paraúna",
        "uf": "GO",
        "ibge": 5216403,
        "lat": -16.9463,
        "lng": -50.4484
      },
      {
        "nome": "Perolândia",
        "uf": "GO",
        "ibge": 5216452,
        "lat": -17.5258,
        "lng": -52.065
      },
      {
        "nome": "Petrolina de Goiás",
        "uf": "GO",
        "ibge": 5216809,
        "lat": -16.0968,
        "lng": -49.3364
      },
      {
        "nome": "Pilar de Goiás",
        "uf": "GO",
        "ibge": 5216908,
        "lat": -14.7608,
        "lng": -49.5784
      },
      {
        "nome": "Piracanjuba",
        "uf": "GO",
        "ibge": 5217104,
        "lat": -17.302,
        "lng": -49.017
      },
      {
        "nome": "Piranhas",
        "uf": "GO",
        "ibge": 5217203,
        "lat": -16.4258,
        "lng": -51.8235
      },
      {
        "nome": "Pirenópolis",
        "uf": "GO",
        "ibge": 5217302,
        "lat": -15.8507,
        "lng": -48.9584
      },
      {
        "nome": "Pires do Rio",
        "uf": "GO",
        "ibge": 5217401,
        "lat": -17.3019,
        "lng": -48.2768
      },
      {
        "nome": "Planaltina",
        "uf": "GO",
        "ibge": 5217609,
        "lat": -15.452,
        "lng": -47.6089
      },
      {
        "nome": "Pontalina",
        "uf": "GO",
        "ibge": 5217708,
        "lat": -17.5225,
        "lng": -49.4489
      },
      {
        "nome": "Porangatu",
        "uf": "GO",
        "ibge": 5218003,
        "lat": -13.4391,
        "lng": -49.1503
      },
      {
        "nome": "Porteirão",
        "uf": "GO",
        "ibge": 5218052,
        "lat": -17.8143,
        "lng": -50.1653
      },
      {
        "nome": "Portelândia",
        "uf": "GO",
        "ibge": 5218102,
        "lat": -17.3554,
        "lng": -52.6799
      },
      {
        "nome": "Posse",
        "uf": "GO",
        "ibge": 5218300,
        "lat": -14.0859,
        "lng": -46.3704
      },
      {
        "nome": "Professor Jamil",
        "uf": "GO",
        "ibge": 5218391,
        "lat": -17.2497,
        "lng": -49.244
      },
      {
        "nome": "Quirinópolis",
        "uf": "GO",
        "ibge": 5218508,
        "lat": -18.4472,
        "lng": -50.4547
      },
      {
        "nome": "Rialma",
        "uf": "GO",
        "ibge": 5218607,
        "lat": -15.3145,
        "lng": -49.5814
      },
      {
        "nome": "Rianápolis",
        "uf": "GO",
        "ibge": 5218706,
        "lat": -15.4456,
        "lng": -49.5114
      },
      {
        "nome": "Rio Quente",
        "uf": "GO",
        "ibge": 5218789,
        "lat": -17.774,
        "lng": -48.7725
      },
      {
        "nome": "Rio Verde",
        "uf": "GO",
        "ibge": 5218805,
        "lat": -17.7923,
        "lng": -50.9192
      },
      {
        "nome": "Rubiataba",
        "uf": "GO",
        "ibge": 5218904,
        "lat": -15.1617,
        "lng": -49.8048
      },
      {
        "nome": "Sanclerlândia",
        "uf": "GO",
        "ibge": 5219001,
        "lat": -16.197,
        "lng": -50.3124
      },
      {
        "nome": "Santa Bárbara de Goiás",
        "uf": "GO",
        "ibge": 5219100,
        "lat": -16.5714,
        "lng": -49.6954
      },
      {
        "nome": "Santa Cruz de Goiás",
        "uf": "GO",
        "ibge": 5219209,
        "lat": -17.3155,
        "lng": -48.4809
      },
      {
        "nome": "Santa Fé de Goiás",
        "uf": "GO",
        "ibge": 5219258,
        "lat": -15.7664,
        "lng": -51.1037
      },
      {
        "nome": "Santa Helena de Goiás",
        "uf": "GO",
        "ibge": 5219308,
        "lat": -17.8115,
        "lng": -50.5977
      },
      {
        "nome": "Santa Isabel",
        "uf": "GO",
        "ibge": 5219357,
        "lat": -15.2958,
        "lng": -49.4259
      },
      {
        "nome": "Santa Rita do Araguaia",
        "uf": "GO",
        "ibge": 5219407,
        "lat": -17.3269,
        "lng": -53.2012
      },
      {
        "nome": "Santa Rita do Novo Destino",
        "uf": "GO",
        "ibge": 5219456,
        "lat": -15.1351,
        "lng": -49.1203
      },
      {
        "nome": "Santa Rosa de Goiás",
        "uf": "GO",
        "ibge": 5219506,
        "lat": -16.084,
        "lng": -49.4953
      },
      {
        "nome": "Santa Tereza de Goiás",
        "uf": "GO",
        "ibge": 5219605,
        "lat": -13.7138,
        "lng": -49.0144
      },
      {
        "nome": "Santa Terezinha de Goiás",
        "uf": "GO",
        "ibge": 5219704,
        "lat": -14.4326,
        "lng": -49.7091
      },
      {
        "nome": "Santo Antônio da Barra",
        "uf": "GO",
        "ibge": 5219712,
        "lat": -17.5585,
        "lng": -50.6345
      },
      {
        "nome": "Santo Antônio de Goiás",
        "uf": "GO",
        "ibge": 5219738,
        "lat": -16.4815,
        "lng": -49.3096
      },
      {
        "nome": "Santo Antônio do Descoberto",
        "uf": "GO",
        "ibge": 5219753,
        "lat": -15.9412,
        "lng": -48.2578
      },
      {
        "nome": "São Domingos",
        "uf": "GO",
        "ibge": 5219803,
        "lat": -13.621,
        "lng": -46.7415
      },
      {
        "nome": "São Francisco de Goiás",
        "uf": "GO",
        "ibge": 5219902,
        "lat": -15.9256,
        "lng": -49.2605
      },
      {
        "nome": "São João d'Aliança",
        "uf": "GO",
        "ibge": 5220009,
        "lat": -14.7048,
        "lng": -47.5228
      },
      {
        "nome": "São João da Paraúna",
        "uf": "GO",
        "ibge": 5220058,
        "lat": -16.8126,
        "lng": -50.4092
      },
      {
        "nome": "São Luís de Montes Belos",
        "uf": "GO",
        "ibge": 5220108,
        "lat": -16.5211,
        "lng": -50.3726
      },
      {
        "nome": "São Luiz do Norte",
        "uf": "GO",
        "ibge": 5220157,
        "lat": -14.8608,
        "lng": -49.3285
      },
      {
        "nome": "São Miguel do Araguaia",
        "uf": "GO",
        "ibge": 5220207,
        "lat": -13.2731,
        "lng": -50.1634
      },
      {
        "nome": "São Miguel do Passa Quatro",
        "uf": "GO",
        "ibge": 5220264,
        "lat": -17.0582,
        "lng": -48.662
      },
      {
        "nome": "São Patrício",
        "uf": "GO",
        "ibge": 5220280,
        "lat": -15.35,
        "lng": -49.818
      },
      {
        "nome": "São Simão",
        "uf": "GO",
        "ibge": 5220405,
        "lat": -18.996,
        "lng": -50.547
      },
      {
        "nome": "Senador Canedo",
        "uf": "GO",
        "ibge": 5220454,
        "lat": -16.7084,
        "lng": -49.0914
      },
      {
        "nome": "Serranópolis",
        "uf": "GO",
        "ibge": 5220504,
        "lat": -18.3067,
        "lng": -51.9586
      },
      {
        "nome": "Silvânia",
        "uf": "GO",
        "ibge": 5220603,
        "lat": -16.66,
        "lng": -48.6083
      },
      {
        "nome": "Simolândia",
        "uf": "GO",
        "ibge": 5220686,
        "lat": -14.4644,
        "lng": -46.4847
      },
      {
        "nome": "Sítio d'Abadia",
        "uf": "GO",
        "ibge": 5220702,
        "lat": -14.7992,
        "lng": -46.2506
      },
      {
        "nome": "Taquaral de Goiás",
        "uf": "GO",
        "ibge": 5221007,
        "lat": -16.0521,
        "lng": -49.6039
      },
      {
        "nome": "Teresina de Goiás",
        "uf": "GO",
        "ibge": 5221080,
        "lat": -13.7801,
        "lng": -47.2659
      },
      {
        "nome": "Terezópolis de Goiás",
        "uf": "GO",
        "ibge": 5221197,
        "lat": -16.3945,
        "lng": -49.0797
      },
      {
        "nome": "Três Ranchos",
        "uf": "GO",
        "ibge": 5221304,
        "lat": -18.3539,
        "lng": -47.776
      },
      {
        "nome": "Trindade",
        "uf": "GO",
        "ibge": 5221403,
        "lat": -16.6517,
        "lng": -49.4927
      },
      {
        "nome": "Trombas",
        "uf": "GO",
        "ibge": 5221452,
        "lat": -13.5079,
        "lng": -48.7417
      },
      {
        "nome": "Turvânia",
        "uf": "GO",
        "ibge": 5221502,
        "lat": -16.6125,
        "lng": -50.1369
      },
      {
        "nome": "Turvelândia",
        "uf": "GO",
        "ibge": 5221551,
        "lat": -17.8502,
        "lng": -50.3024
      },
      {
        "nome": "Uirapuru",
        "uf": "GO",
        "ibge": 5221577,
        "lat": -14.2835,
        "lng": -49.9201
      },
      {
        "nome": "Uruaçu",
        "uf": "GO",
        "ibge": 5221601,
        "lat": -14.5238,
        "lng": -49.1396
      },
      {
        "nome": "Uruana",
        "uf": "GO",
        "ibge": 5221700,
        "lat": -15.4993,
        "lng": -49.6861
      },
      {
        "nome": "Urutaí",
        "uf": "GO",
        "ibge": 5221809,
        "lat": -17.4651,
        "lng": -48.2015
      },
      {
        "nome": "Valparaíso de Goiás",
        "uf": "GO",
        "ibge": 5221858,
        "lat": -16.0651,
        "lng": -47.9757
      },
      {
        "nome": "Varjão",
        "uf": "GO",
        "ibge": 5221908,
        "lat": -17.0471,
        "lng": -49.6312
      },
      {
        "nome": "Vianópolis",
        "uf": "GO",
        "ibge": 5222005,
        "lat": -16.7405,
        "lng": -48.5159
      },
      {
        "nome": "Vicentinópolis",
        "uf": "GO",
        "ibge": 5222054,
        "lat": -17.7322,
        "lng": -49.8047
      },
      {
        "nome": "Vila Boa",
        "uf": "GO",
        "ibge": 5222203,
        "lat": -15.0387,
        "lng": -47.052
      },
      {
        "nome": "Vila Propício",
        "uf": "GO",
        "ibge": 5222302,
        "lat": -15.4542,
        "lng": -48.8819
      }
    ],
    "capital": {
      "nome": "Goiânia",
      "uf": "GO",
      "ibge": 5208707,
      "lat": -16.6864,
      "lng": -49.2643
    }
  },
  "DF": {
    "nome": "Distrito Federal",
    "ibge": 53,
    "cidades": [],
    "capital": {
      "nome": "Brasília",
      "uf": "DF",
      "ibge": 5300108,
      "lat": -15.7795,
      "lng": -47.9297
    }
  }
}

export function useEstados() {
  const [r] = useState(Object.keys(brasil).map((e: SiglaEstado) => ({
    ...(brasil[e]),
    sigla: e
  })).sort((a, b) => a.nome.localeCompare(b.nome)))
  return r
}

export function useCidades(estado: SiglaEstado) {
  const [r, s] = useState<Cidade[]>([])
  useEffect(() => {
    const e = brasil[estado]
    if (e) s([e.capital].concat(e.cidades.sort((a, b) => a.nome.localeCompare(b.nome))))
    else s([])
  }, [estado])
  return r
}
