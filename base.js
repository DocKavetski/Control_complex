/* function Patient(
  nCard,
  poly,
  fio,
  sex,
  birth,
  city,
  [adress, home, flat],
  diagnosis,
  phone,
  comment
) {
  this.nCard = nCard;
  this.poly = poly;
  this.fio = fio;
  this.sex = sex;
  this.birth = birth;
  this.city = city;
  this.adress = [adress, home, flat];
  this.diagnosis = diagnosis;
  this.phone = phone;
  this.comment = comment;
}

let patient1 = new Patient(
"92348",
"7",
"Петрова Светлана Ивановна",
"Ж",
"14.10.2010",
"Город",
  ["Красного флота", 4, 12],
"F45.0",
"+475985240592, +475985240509",
"Передана"
);

let patient2 = new Patient(
"92348",
"7",
"Хлыстович Светлана Петровна",
"Ж",
"14.10.2010",
"Город",
  ["Красного флота", 4, 12],
"F45.0",
"+375291234567, +475985240509",
"Передана"
);

let patient3 = new Patient(
"89789",
"7",
"Смит Светлана Сигизмундовна",
"Ж",
"14.10.2010",
"",
  ["Дворцовая", 4, 12],
"F43.22",
"",
""
);

let patient4 = new Patient(
"678",
"2",
"Джонсон Светлана Арнольдовна",
"Ж",
"14.10.2010",
"Село",
  ["","",""],
"F41.0",
"+375291234567, +475985240592, +475985240509",
"Передана"
);

let patient5 = new Patient(
"92348",
"3",
"Уилсон Светлана Ивановна",
"Ж",
"14.10.1976",
"Город",
  ["Демонская", 4, 12],
"F45.0",
"+375291234567, +475985240592, +475985240509",
"Передана"
); */

const patiens = [
  {
    nCard: 543875,
    poly: 8,
    data: {
      f: "Степанов",
      i: "Борис",
      o: "Иванович",
    },
    sex: "М",
    birth: {
      d: 17,
      m: 6,
      y: 1996,
    },
    city: "Город",
    adress: {
      street: "Ивановская",
      home: "12",
      flat: "345",
    },

    diagnosis: 48.0,
    phone: ["+375291234567"],

    comment: "передана куда-то",
  },
  {
    nCard: 20569,
    poly: 3,
    data: {
      f: "Петрова",
      i: "Анна",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 8,
      y: 2016,
    },
    city: "Город",
    adress: {
      street: "Ивановская",
      home: 150,
      flat: 371,
    },
    diagnosis: 43.28,
    phone: ["+375291843018	327658"],
    comment: "Передана Сивцову",
  },

  {
    nCard: 9614,
    poly: 6,
    data: {
      f: "Терпилова",
      i: "Антонина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 26,
      m: 4,
      y: 1945,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 56,
      flat: 556,
    },
    diagnosis: 41.1,
    phone: ["+375297970209	398478"],
    comment: "Передана Могилевскому",
  },

  {
    nCard: 16518,
    poly: 2,
    data: {
      f: "Терпилова",
      i: "Ильина",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 26,
      m: 11,
      y: 1959,
    },
    city: "Город",
    adress: {
      street: "Ленина",
      home: 95,
      flat: 88,
    },
    diagnosis: 43.24,
    phone: ["+375291917135	653282"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 908,
    poly: 6,
    data: {
      f: "Терпилова",
      i: "Анджолина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 2,
      y: 1966,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 52,
      flat: 377,
    },
    diagnosis: 43.22,
    phone: ["+375297385947	409654"],
    comment: "МВД",
  },

  {
    nCard: 6875,
    poly: 3,
    data: {
      f: "Петрова",
      i: "Виктория",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 16,
      m: 12,
      y: 1964,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 1,
      flat: 15,
    },
    diagnosis: 41.0,
    phone: ["+375291546374	258166"],
    comment: "Передана Вериго",
  },

  {
    nCard: 6304,
    poly: 10,
    data: {
      f: "Альгердова",
      i: "Виктория",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 8,
      m: 1,
      y: 1969,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 115,
      flat: 311,
    },
    diagnosis: 41.0,
    phone: ["+375299186527	596347"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 11852,
    poly: 3,
    data: {
      f: "Альгердова",
      i: "Антонина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 12,
      y: 1964,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 63,
      flat: 687,
    },
    diagnosis: 41.0,
    phone: ["+375290796317	999183"],
    comment: "Передана Вериго",
  },

  {
    nCard: 7139,
    poly: 5,
    data: {
      f: "Петрова",
      i: "Анджолина",
      o: "Степановна",
    },
    sex: "Ж",
    birth: {
      d: 23,
      m: 9,
      y: 2012,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 93,
      flat: 496,
    },
    diagnosis: 43.23,
    phone: ["+375295958510	152235"],
    comment: "Здорова",
  },

  {
    nCard: 19117,
    poly: 6,
    data: {
      f: "Терпилова",
      i: "Ангелина",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 24,
      m: 2,
      y: 1948,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 19,
      flat: 497,
    },
    diagnosis: 43.23,
    phone: ["+375293417909	812664"],
    comment: "МВД",
  },

  {
    nCard: 14186,
    poly: 8,
    data: {
      f: "Стремнова",
      i: "Ангелина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 19,
      m: 3,
      y: 1998,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 89,
      flat: 236,
    },
    diagnosis: 41.0,
    phone: ["+375298590635	146203"],
    comment: "МВД",
  },

  {
    nCard: 12489,
    poly: 9,
    data: {
      f: "Иванова",
      i: "Анджолина",
      o: "Степановна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 2,
      y: 1986,
    },
    city: "Село",
    adress: {
      street: "Орджоникидзе",
      home: 9,
      flat: 591,
    },
    diagnosis: 43.28,
    phone: ["+375296735421	804445"],
    comment: "МВД",
  },

  {
    nCard: 13593,
    poly: 4,
    data: {
      f: "Анальгинова",
      i: "Анджолина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 5,
      m: 9,
      y: 1997,
    },
    city: "Город",
    adress: {
      street: "Ивановская",
      home: 84,
      flat: 373,
    },
    diagnosis: 43.23,
    phone: ["+375297473510	505247"],
    comment: "",
  },

  {
    nCard: 8601,
    poly: 2,
    data: {
      f: "Альгердова",
      i: "Антонина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 20,
      m: 11,
      y: 2017,
    },
    city: "Село",
    adress: {
      street: "Петропаловская",
      home: 114,
      flat: 501,
    },
    diagnosis: 40.0,
    phone: ["+375297761817	410971"],
    comment: "МВД",
  },

  {
    nCard: 13469,
    poly: 1,
    data: {
      f: "Стремнова",
      i: "Ильина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 8,
      y: 2009,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 106,
      flat: 227,
    },
    diagnosis: 41.2,
    phone: ["+375297745957	364043"],
    comment: "Здорова",
  },

  {
    nCard: 4745,
    poly: 3,
    data: {
      f: "Петрова",
      i: "Антонина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 29,
      m: 2,
      y: 1983,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 53,
      flat: 206,
    },
    diagnosis: 43.27,
    phone: ["+375294411525	268361"],
    comment: "Здорова",
  },

  {
    nCard: 19133,
    poly: 3,
    data: {
      f: "Иванова",
      i: "Елена",
      o: "Степановна",
    },
    sex: "Ж",
    birth: {
      d: 21,
      m: 3,
      y: 1945,
    },
    city: "Город",
    adress: {
      street: "Ивановская",
      home: 149,
      flat: 494,
    },
    diagnosis: 32.3,
    phone: ["+375292657235	975452"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 2514,
    poly: 7,
    data: {
      f: "Петрова",
      i: "Ангелина",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 8,
      m: 4,
      y: 1963,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 42,
      flat: 632,
    },
    diagnosis: 43.26,
    phone: ["+375297581108	245823"],
    comment: "Здорова",
  },

  {
    nCard: 16811,
    poly: 10,
    data: {
      f: "Инлинова",
      i: "Эвелина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 9,
      y: 2021,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 100,
      flat: 198,
    },
    diagnosis: 43.25,
    phone: ["+375292053145	303912"],
    comment: "",
  },

  {
    nCard: 3122,
    poly: 8,
    data: {
      f: "Альгердова",
      i: "Ильина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 12,
      y: 2003,
    },
    city: "Село",
    adress: {
      street: "Орджоникидзе",
      home: 51,
      flat: 102,
    },
    diagnosis: 32.1,
    phone: ["+375299633090	982147"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 8078,
    poly: 5,
    data: {
      f: "Анальгинова",
      i: "Виолетта",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 4,
      m: 8,
      y: 1987,
    },
    city: "Город",
    adress: {
      street: "Сидоровская",
      home: 67,
      flat: 427,
    },
    diagnosis: 43.23,
    phone: ["+375295242655	379166"],
    comment: "Передана Вериго",
  },

  {
    nCard: 10483,
    poly: 1,
    data: {
      f: "Сидорова",
      i: "Анджолина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 24,
      m: 1,
      y: 1995,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 96,
      flat: 736,
    },
    diagnosis: 32.1,
    phone: ["+375293152551	151183"],
    comment: "",
  },

  {
    nCard: 17613,
    poly: 6,
    data: {
      f: "Смит",
      i: "Елена",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 22,
      m: 6,
      y: 2002,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 106,
      flat: 507,
    },
    diagnosis: 43.25,
    phone: ["+375294484527	442742"],
    comment: "МВД",
  },

  {
    nCard: 14740,
    poly: 8,
    data: {
      f: "Терпилова",
      i: "Светлана",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 20,
      m: 6,
      y: 1992,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 123,
      flat: 621,
    },
    diagnosis: 43.27,
    phone: ["+375299584547	901255"],
    comment: "Передана Вериго",
  },

  {
    nCard: 17815,
    poly: 2,
    data: {
      f: "Инлинова",
      i: "Анна",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 7,
      m: 10,
      y: 1961,
    },
    city: "Село",
    adress: {
      street: "Орджоникидзе",
      home: 29,
      flat: 263,
    },
    diagnosis: 41.2,
    phone: ["+375298389595	308342"],
    comment: "МВД",
  },

  {
    nCard: 21472,
    poly: 5,
    data: {
      f: "Терпилова",
      i: "Антонина",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 9,
      m: 3,
      y: 1952,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 137,
      flat: 236,
    },
    diagnosis: 41.2,
    phone: ["+375291487321	816984"],
    comment: "Здорова",
  },

  {
    nCard: 21409,
    poly: 11,
    data: {
      f: "Анальгинова",
      i: "Октябрина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 30,
      m: 10,
      y: 1994,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 46,
      flat: 366,
    },
    diagnosis: 51.0,
    phone: ["+375291877040	972727"],
    comment: "",
  },

  {
    nCard: 3121,
    poly: 1,
    data: {
      f: "Стремнова",
      i: "Ильина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 1,
      y: 2006,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 140,
      flat: 51,
    },
    diagnosis: 41.2,
    phone: ["+375292314939	485024"],
    comment: "",
  },

  {
    nCard: 2091,
    poly: 8,
    data: {
      f: "Терпилова",
      i: "Анна",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 25,
      m: 2,
      y: 1998,
    },
    city: "Город",
    adress: {
      street: "Независимости",
      home: 12,
      flat: 523,
    },
    diagnosis: 41.2,
    phone: ["+375290564702	158655"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 19857,
    poly: 4,
    data: {
      f: "Андерсон",
      i: "Ильина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 9,
      m: 3,
      y: 1964,
    },
    city: "Город",
    adress: {
      street: "Сидоровская",
      home: 51,
      flat: 806,
    },
    diagnosis: 43.27,
    phone: ["+375294214148	175193"],
    comment: "",
  },

  {
    nCard: 5051,
    poly: 8,
    data: {
      f: "Петрова",
      i: "Анджолина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 6,
      m: 3,
      y: 1983,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 112,
      flat: 32,
    },
    diagnosis: 43.23,
    phone: ["+375292063999	890496"],
    comment: "МВД",
  },

  {
    nCard: 11088,
    poly: 10,
    data: {
      f: "Анальгинова",
      i: "Анна",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 15,
      m: 4,
      y: 1967,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 72,
      flat: 244,
    },
    diagnosis: 32.1,
    phone: ["+375299118405	948087"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 21080,
    poly: 9,
    data: {
      f: "Инлинова",
      i: "Виктория",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 1,
      y: 2012,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 36,
      flat: 198,
    },
    diagnosis: 51.0,
    phone: ["+375297635245	844976"],
    comment: "МВД",
  },

  {
    nCard: 2149,
    poly: 5,
    data: {
      f: "Иванова",
      i: "Елена",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 1,
      m: 4,
      y: 2016,
    },
    city: "Село",
    adress: {
      street: "Ивановская",
      home: 79,
      flat: 229,
    },
    diagnosis: 41.0,
    phone: ["+375290625753	691141"],
    comment: "",
  },

  {
    nCard: 7193,
    poly: 6,
    data: {
      f: "Петрова",
      i: "Эвелина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 8,
      m: 6,
      y: 1958,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 105,
      flat: 414,
    },
    diagnosis: 41.1,
    phone: ["+375290326814	132804"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 8617,
    poly: 2,
    data: {
      f: "Анальгинова",
      i: "Ильина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 27,
      m: 2,
      y: 1994,
    },
    city: "Город",
    adress: {
      street: "Петровская",
      home: 10,
      flat: 350,
    },
    diagnosis: 43.21,
    phone: ["+375295154163	656605"],
    comment: "Здорова",
  },

  {
    nCard: 20170,
    poly: 9,
    data: {
      f: "Петрова",
      i: "Виолетта",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 13,
      m: 9,
      y: 1969,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 52,
      flat: 310,
    },
    diagnosis: 41.1,
    phone: ["+375290663221	475078"],
    comment: "МВД",
  },

  {
    nCard: 22928,
    poly: 7,
    data: {
      f: "Петрова",
      i: "Октябрина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 13,
      m: 2,
      y: 1971,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 140,
      flat: 825,
    },
    diagnosis: 32.2,
    phone: ["+375294643234	967153"],
    comment: "",
  },

  {
    nCard: 6504,
    poly: 8,
    data: {
      f: "Андерсон",
      i: "Виктория",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 28,
      m: 12,
      y: 1987,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 80,
      flat: 817,
    },
    diagnosis: 43.27,
    phone: ["+375295737035	514609"],
    comment: "Здорова",
  },

  {
    nCard: 12536,
    poly: 10,
    data: {
      f: "Иванова",
      i: "Анджолина",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 21,
      m: 8,
      y: 1955,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 46,
      flat: 693,
    },
    diagnosis: 41.1,
    phone: ["+375292779394	945527"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 2777,
    poly: 10,
    data: {
      f: "Терпилова",
      i: "Ильина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 6,
      m: 3,
      y: 2017,
    },
    city: "Село",
    adress: {
      street: "Петропаловская",
      home: 41,
      flat: 340,
    },
    diagnosis: 43.26,
    phone: ["+375299252707	292568"],
    comment: "",
  },

  {
    nCard: 20569,
    poly: 3,
    data: {
      f: "Петрова",
      i: "Анна",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 8,
      y: 2016,
    },
    city: "Город",
    adress: {
      street: "Ивановская",
      home: 150,
      flat: 371,
    },
    diagnosis: 43.28,
    phone: ["+375291843018	327658"],
    comment: "",
  },

  {
    nCard: 9614,
    poly: 6,
    data: {
      f: "Терпилова",
      i: "Антонина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 26,
      m: 4,
      y: 1945,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 56,
      flat: 556,
    },
    diagnosis: 41.1,
    phone: ["+375297970209	398478"],
    comment: "",
  },

  {
    nCard: 16518,
    poly: 2,
    data: {
      f: "Терпилова",
      i: "Ильина",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 26,
      m: 11,
      y: 1959,
    },
    city: "Город",
    adress: {
      street: "Ленина",
      home: 95,
      flat: 88,
    },
    diagnosis: 43.24,
    phone: ["+375291917135	653282"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 908,
    poly: 6,
    data: {
      f: "Терпилова",
      i: "Анджолина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 2,
      y: 1966,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 52,
      flat: 377,
    },
    diagnosis: 43.22,
    phone: ["+375297385947	409654"],
    comment: "МВД",
  },

  {
    nCard: 6875,
    poly: 3,
    data: {
      f: "Петрова",
      i: "Виктория",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 16,
      m: 12,
      y: 1964,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 1,
      flat: 15,
    },
    diagnosis: 41.0,
    phone: ["+375291546374	258166"],
    comment: "Передана Вериго",
  },

  {
    nCard: 6304,
    poly: 10,
    data: {
      f: "Альгердова",
      i: "Виктория",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 8,
      m: 1,
      y: 1969,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 115,
      flat: 311,
    },
    diagnosis: 41.0,
    phone: ["+375299186527	596347"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 11852,
    poly: 3,
    data: {
      f: "Альгердова",
      i: "Антонина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 12,
      y: 1964,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 63,
      flat: 687,
    },
    diagnosis: 41.0,
    phone: ["+375290796317	999183"],
    comment: "Передана Вериго",
  },

  {
    nCard: 7139,
    poly: 5,
    data: {
      f: "Петрова",
      i: "Анджолина",
      o: "Степановна",
    },
    sex: "Ж",
    birth: {
      d: 23,
      m: 9,
      y: 2012,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 93,
      flat: 496,
    },
    diagnosis: 43.23,
    phone: ["+375295958510	152235"],
    comment: "Здорова",
  },

  {
    nCard: 19117,
    poly: 6,
    data: {
      f: "Терпилова",
      i: "Ангелина",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 24,
      m: 2,
      y: 1948,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 19,
      flat: 497,
    },
    diagnosis: 43.23,
    phone: ["+375293417909	812664"],
    comment: "МВД",
  },

  {
    nCard: 14186,
    poly: 8,
    data: {
      f: "Стремнова",
      i: "Ангелина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 19,
      m: 3,
      y: 1998,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 89,
      flat: 236,
    },
    diagnosis: 41.0,
    phone: ["+375298590635	146203"],
    comment: "МВД",
  },

  {
    nCard: 12489,
    poly: 9,
    data: {
      f: "Иванова",
      i: "Анджолина",
      o: "Степановна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 2,
      y: 1986,
    },
    city: "Село",
    adress: {
      street: "Орджоникидзе",
      home: 9,
      flat: 591,
    },
    diagnosis: 43.28,
    phone: ["+375296735421	804445"],
    comment: "МВД",
  },

  {
    nCard: 13593,
    poly: 4,
    data: {
      f: "Анальгинова",
      i: "Анджолина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 5,
      m: 9,
      y: 1997,
    },
    city: "Город",
    adress: {
      street: "Ивановская",
      home: 84,
      flat: 373,
    },
    diagnosis: 43.23,
    phone: ["+375297473510	505247"],
    comment: "",
  },

  {
    nCard: 8601,
    poly: 2,
    data: {
      f: "Альгердова",
      i: "Антонина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 20,
      m: 11,
      y: 2017,
    },
    city: "Село",
    adress: {
      street: "Петропаловская",
      home: 114,
      flat: 501,
    },
    diagnosis: 40.0,
    phone: ["+375297761817	410971"],
    comment: "МВД",
  },

  {
    nCard: 13469,
    poly: 1,
    data: {
      f: "Стремнова",
      i: "Ильина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 8,
      y: 2009,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 106,
      flat: 227,
    },
    diagnosis: 41.2,
    phone: ["+375297745957	364043"],
    comment: "Здорова",
  },

  {
    nCard: 4745,
    poly: 3,
    data: {
      f: "Петрова",
      i: "Антонина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 29,
      m: 2,
      y: 1983,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 53,
      flat: 206,
    },
    diagnosis: 43.27,
    phone: ["+375294411525	268361"],
    comment: "Здорова",
  },

  {
    nCard: 19133,
    poly: 3,
    data: {
      f: "Иванова",
      i: "Елена",
      o: "Степановна",
    },
    sex: "Ж",
    birth: {
      d: 21,
      m: 3,
      y: 1945,
    },
    city: "Город",
    adress: {
      street: "Ивановская",
      home: 149,
      flat: 494,
    },
    diagnosis: 32.3,
    phone: ["+375292657235	975452"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 2514,
    poly: 7,
    data: {
      f: "Петрова",
      i: "Ангелина",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 8,
      m: 4,
      y: 1963,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 42,
      flat: 632,
    },
    diagnosis: 43.26,
    phone: ["+375297581108	245823"],
    comment: "Здорова",
  },

  {
    nCard: 16811,
    poly: 10,
    data: {
      f: "Инлинова",
      i: "Эвелина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 9,
      y: 2021,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 100,
      flat: 198,
    },
    diagnosis: 43.25,
    phone: ["+375292053145	303912"],
    comment: "",
  },

  {
    nCard: 3122,
    poly: 8,
    data: {
      f: "Альгердова",
      i: "Ильина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 12,
      y: 2003,
    },
    city: "Село",
    adress: {
      street: "Орджоникидзе",
      home: 51,
      flat: 102,
    },
    diagnosis: 32.1,
    phone: ["+375299633090	982147"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 8078,
    poly: 5,
    data: {
      f: "Анальгинова",
      i: "Виолетта",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 4,
      m: 8,
      y: 1987,
    },
    city: "Город",
    adress: {
      street: "Сидоровская",
      home: 67,
      flat: 427,
    },
    diagnosis: 43.23,
    phone: ["+375295242655	379166"],
    comment: "Передана Вериго",
  },

  {
    nCard: 10483,
    poly: 1,
    data: {
      f: "Сидорова",
      i: "Анджолина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 24,
      m: 1,
      y: 1995,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 96,
      flat: 736,
    },
    diagnosis: 32.1,
    phone: ["+375293152551	151183"],
    comment: "",
  },

  {
    nCard: 17613,
    poly: 6,
    data: {
      f: "Смит",
      i: "Елена",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 22,
      m: 6,
      y: 2002,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 106,
      flat: 507,
    },
    diagnosis: 43.25,
    phone: ["+375294484527	442742"],
    comment: "МВД",
  },

  {
    nCard: 14740,
    poly: 8,
    data: {
      f: "Терпилова",
      i: "Светлана",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 20,
      m: 6,
      y: 1992,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 123,
      flat: 621,
    },
    diagnosis: 43.27,
    phone: ["+375299584547	901255"],
    comment: "Передана Вериго",
  },

  {
    nCard: 17815,
    poly: 2,
    data: {
      f: "Инлинова",
      i: "Анна",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 7,
      m: 10,
      y: 1961,
    },
    city: "Село",
    adress: {
      street: "Орджоникидзе",
      home: 29,
      flat: 263,
    },
    diagnosis: 41.2,
    phone: ["+375298389595	308342"],
    comment: "МВД",
  },

  {
    nCard: 21472,
    poly: 5,
    data: {
      f: "Терпилова",
      i: "Антонина",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 9,
      m: 3,
      y: 1952,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 137,
      flat: 236,
    },
    diagnosis: 41.2,
    phone: ["+375291487321	816984"],
    comment: "Здорова",
  },

  {
    nCard: 21409,
    poly: 11,
    data: {
      f: "Анальгинова",
      i: "Октябрина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 30,
      m: 10,
      y: 1994,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 46,
      flat: 366,
    },
    diagnosis: 51.0,
    phone: ["+375291877040	972727"],
    comment: "",
  },

  {
    nCard: 3121,
    poly: 1,
    data: {
      f: "Стремнова",
      i: "Ильина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 1,
      y: 2006,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 140,
      flat: 51,
    },
    diagnosis: 41.2,
    phone: ["+375292314939	485024"],
    comment: "",
  },

  {
    nCard: 2091,
    poly: 8,
    data: {
      f: "Терпилова",
      i: "Анна",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 25,
      m: 2,
      y: 1998,
    },
    city: "Город",
    adress: {
      street: "Независимости",
      home: 12,
      flat: 523,
    },
    diagnosis: 41.2,
    phone: ["+375290564702	158655"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 19857,
    poly: 4,
    data: {
      f: "Андерсон",
      i: "Ильина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 9,
      m: 3,
      y: 1964,
    },
    city: "Город",
    adress: {
      street: "Сидоровская",
      home: 51,
      flat: 806,
    },
    diagnosis: 43.27,
    phone: ["+375294214148	175193"],
    comment: "",
  },

  {
    nCard: 5051,
    poly: 8,
    data: {
      f: "Петрова",
      i: "Анджолина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 6,
      m: 3,
      y: 1983,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 112,
      flat: 32,
    },
    diagnosis: 43.23,
    phone: ["+375292063999	890496"],
    comment: "МВД",
  },

  {
    nCard: 11088,
    poly: 10,
    data: {
      f: "Анальгинова",
      i: "Анна",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 15,
      m: 4,
      y: 1967,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 72,
      flat: 244,
    },
    diagnosis: 32.1,
    phone: ["+375299118405	948087"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 21080,
    poly: 9,
    data: {
      f: "Инлинова",
      i: "Виктория",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 1,
      y: 2012,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 36,
      flat: 198,
    },
    diagnosis: 51.0,
    phone: ["+375297635245	844976"],
    comment: "МВД",
  },

  {
    nCard: 2149,
    poly: 5,
    data: {
      f: "Иванова",
      i: "Елена",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 1,
      m: 4,
      y: 2016,
    },
    city: "Село",
    adress: {
      street: "Ивановская",
      home: 79,
      flat: 229,
    },
    diagnosis: 41.0,
    phone: ["+375290625753	691141"],
    comment: "",
  },

  {
    nCard: 7193,
    poly: 6,
    data: {
      f: "Петрова",
      i: "Эвелина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 8,
      m: 6,
      y: 1958,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 105,
      flat: 414,
    },
    diagnosis: 41.1,
    phone: ["+375290326814	132804"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 8617,
    poly: 2,
    data: {
      f: "Анальгинова",
      i: "Ильина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 27,
      m: 2,
      y: 1994,
    },
    city: "Город",
    adress: {
      street: "Петровская",
      home: 10,
      flat: 350,
    },
    diagnosis: 43.21,
    phone: ["+375295154163	656605"],
    comment: "Здорова",
  },

  {
    nCard: 20170,
    poly: 9,
    data: {
      f: "Петрова",
      i: "Виолетта",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 13,
      m: 9,
      y: 1969,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 52,
      flat: 310,
    },
    diagnosis: 41.1,
    phone: ["+375290663221	475078"],
    comment: "МВД",
  },

  {
    nCard: 22928,
    poly: 7,
    data: {
      f: "Петрова",
      i: "Октябрина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 13,
      m: 2,
      y: 1971,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 140,
      flat: 825,
    },
    diagnosis: 32.2,
    phone: ["+375294643234	967153"],
    comment: "",
  },

  {
    nCard: 6504,
    poly: 8,
    data: {
      f: "Андерсон",
      i: "Виктория",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 28,
      m: 12,
      y: 1987,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 80,
      flat: 817,
    },
    diagnosis: 43.27,
    phone: ["+375295737035	514609"],
    comment: "Здорова",
  },

  {
    nCard: 12536,
    poly: 10,
    data: {
      f: "Иванова",
      i: "Анджолина",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 21,
      m: 8,
      y: 1955,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 46,
      flat: 693,
    },
    diagnosis: 41.1,
    phone: ["+375292779394	945527"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 2777,
    poly: 10,
    data: {
      f: "Терпилова",
      i: "Ильина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 6,
      m: 3,
      y: 2017,
    },
    city: "Село",
    adress: {
      street: "Петропаловская",
      home: 41,
      flat: 340,
    },
    diagnosis: 43.26,
    phone: ["+375299252707	292568"],
    comment: "",
  },

  {
    nCard: 20569,
    poly: 3,
    data: {
      f: "Петрова",
      i: "Анна",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 8,
      y: 2016,
    },
    city: "Город",
    adress: {
      street: "Ивановская",
      home: 150,
      flat: 371,
    },
    diagnosis: 43.28,
    phone: ["+375291843018	327658"],
    comment: "",
  },

  {
    nCard: 9614,
    poly: 6,
    data: {
      f: "Терпилова",
      i: "Антонина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 26,
      m: 4,
      y: 1945,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 56,
      flat: 556,
    },
    diagnosis: 41.1,
    phone: ["+375297970209	398478"],
    comment: "",
  },

  {
    nCard: 16518,
    poly: 2,
    data: {
      f: "Терпилова",
      i: "Ильина",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 26,
      m: 11,
      y: 1959,
    },
    city: "Город",
    adress: {
      street: "Ленина",
      home: 95,
      flat: 88,
    },
    diagnosis: 43.24,
    phone: ["+375291917135	653282"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 908,
    poly: 6,
    data: {
      f: "Терпилова",
      i: "Анджолина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 2,
      y: 1966,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 52,
      flat: 377,
    },
    diagnosis: 43.22,
    phone: ["+375297385947	409654"],
    comment: "МВД",
  },

  {
    nCard: 6875,
    poly: 3,
    data: {
      f: "Петрова",
      i: "Виктория",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 16,
      m: 12,
      y: 1964,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 1,
      flat: 15,
    },
    diagnosis: 41.0,
    phone: ["+375291546374	258166"],
    comment: "Передана Вериго",
  },

  {
    nCard: 6304,
    poly: 10,
    data: {
      f: "Альгердова",
      i: "Виктория",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 8,
      m: 1,
      y: 1969,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 115,
      flat: 311,
    },
    diagnosis: 41.0,
    phone: ["+375299186527	596347"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 11852,
    poly: 3,
    data: {
      f: "Альгердова",
      i: "Антонина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 12,
      y: 1964,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 63,
      flat: 687,
    },
    diagnosis: 41.0,
    phone: ["+375290796317	999183"],
    comment: "Передана Вериго",
  },

  {
    nCard: 7139,
    poly: 5,
    data: {
      f: "Петрова",
      i: "Анджолина",
      o: "Степановна",
    },
    sex: "Ж",
    birth: {
      d: 23,
      m: 9,
      y: 2012,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 93,
      flat: 496,
    },
    diagnosis: 43.23,
    phone: ["+375295958510	152235"],
    comment: "Здорова",
  },

  {
    nCard: 19117,
    poly: 6,
    data: {
      f: "Терпилова",
      i: "Ангелина",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 24,
      m: 2,
      y: 1948,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 19,
      flat: 497,
    },
    diagnosis: 43.23,
    phone: ["+375293417909	812664"],
    comment: "МВД",
  },

  {
    nCard: 14186,
    poly: 8,
    data: {
      f: "Стремнова",
      i: "Ангелина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 19,
      m: 3,
      y: 1998,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 89,
      flat: 236,
    },
    diagnosis: 41.0,
    phone: ["+375298590635	146203"],
    comment: "МВД",
  },

  {
    nCard: 12489,
    poly: 9,
    data: {
      f: "Иванова",
      i: "Анджолина",
      o: "Степановна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 2,
      y: 1986,
    },
    city: "Село",
    adress: {
      street: "Орджоникидзе",
      home: 9,
      flat: 591,
    },
    diagnosis: 43.28,
    phone: ["+375296735421	804445"],
    comment: "МВД",
  },

  {
    nCard: 13593,
    poly: 4,
    data: {
      f: "Анальгинова",
      i: "Анджолина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 5,
      m: 9,
      y: 1997,
    },
    city: "Город",
    adress: {
      street: "Ивановская",
      home: 84,
      flat: 373,
    },
    diagnosis: 43.23,
    phone: ["+375297473510	505247"],
    comment: "",
  },

  {
    nCard: 8601,
    poly: 2,
    data: {
      f: "Альгердова",
      i: "Антонина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 20,
      m: 11,
      y: 2017,
    },
    city: "Село",
    adress: {
      street: "Петропаловская",
      home: 114,
      flat: 501,
    },
    diagnosis: 40.0,
    phone: ["+375297761817	410971"],
    comment: "МВД",
  },

  {
    nCard: 13469,
    poly: 1,
    data: {
      f: "Стремнова",
      i: "Ильина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 8,
      y: 2009,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 106,
      flat: 227,
    },
    diagnosis: 41.2,
    phone: ["+375297745957	364043"],
    comment: "Здорова",
  },

  {
    nCard: 4745,
    poly: 3,
    data: {
      f: "Петрова",
      i: "Антонина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 29,
      m: 2,
      y: 1983,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 53,
      flat: 206,
    },
    diagnosis: 43.27,
    phone: ["+375294411525	268361"],
    comment: "Здорова",
  },

  {
    nCard: 19133,
    poly: 3,
    data: {
      f: "Иванова",
      i: "Елена",
      o: "Степановна",
    },
    sex: "Ж",
    birth: {
      d: 21,
      m: 3,
      y: 1945,
    },
    city: "Город",
    adress: {
      street: "Ивановская",
      home: 149,
      flat: 494,
    },
    diagnosis: 32.3,
    phone: ["+375292657235	975452"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 2514,
    poly: 7,
    data: {
      f: "Петрова",
      i: "Ангелина",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 8,
      m: 4,
      y: 1963,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 42,
      flat: 632,
    },
    diagnosis: 43.26,
    phone: ["+375297581108	245823"],
    comment: "Здорова",
  },

  {
    nCard: 16811,
    poly: 10,
    data: {
      f: "Инлинова",
      i: "Эвелина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 9,
      y: 2021,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 100,
      flat: 198,
    },
    diagnosis: 43.25,
    phone: ["+375292053145	303912"],
    comment: "",
  },

  {
    nCard: 3122,
    poly: 8,
    data: {
      f: "Альгердова",
      i: "Ильина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 12,
      y: 2003,
    },
    city: "Село",
    adress: {
      street: "Орджоникидзе",
      home: 51,
      flat: 102,
    },
    diagnosis: 32.1,
    phone: ["+375299633090	982147"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 8078,
    poly: 5,
    data: {
      f: "Анальгинова",
      i: "Виолетта",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 4,
      m: 8,
      y: 1987,
    },
    city: "Город",
    adress: {
      street: "Сидоровская",
      home: 67,
      flat: 427,
    },
    diagnosis: 43.23,
    phone: ["+375295242655	379166"],
    comment: "Передана Вериго",
  },

  {
    nCard: 10483,
    poly: 1,
    data: {
      f: "Сидорова",
      i: "Анджолина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 24,
      m: 1,
      y: 1995,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 96,
      flat: 736,
    },
    diagnosis: 32.1,
    phone: ["+375293152551	151183"],
    comment: "",
  },

  {
    nCard: 17613,
    poly: 6,
    data: {
      f: "Смит",
      i: "Елена",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 22,
      m: 6,
      y: 2002,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 106,
      flat: 507,
    },
    diagnosis: 43.25,
    phone: ["+375294484527	442742"],
    comment: "МВД",
  },

  {
    nCard: 14740,
    poly: 8,
    data: {
      f: "Терпилова",
      i: "Светлана",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 20,
      m: 6,
      y: 1992,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 123,
      flat: 621,
    },
    diagnosis: 43.27,
    phone: ["+375299584547	901255"],
    comment: "Передана Вериго",
  },

  {
    nCard: 17815,
    poly: 2,
    data: {
      f: "Инлинова",
      i: "Анна",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 7,
      m: 10,
      y: 1961,
    },
    city: "Село",
    adress: {
      street: "Орджоникидзе",
      home: 29,
      flat: 263,
    },
    diagnosis: 41.2,
    phone: ["+375298389595	308342"],
    comment: "МВД",
  },

  {
    nCard: 21472,
    poly: 5,
    data: {
      f: "Терпилова",
      i: "Антонина",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 9,
      m: 3,
      y: 1952,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 137,
      flat: 236,
    },
    diagnosis: 41.2,
    phone: ["+375291487321	816984"],
    comment: "Здорова",
  },

  {
    nCard: 21409,
    poly: 11,
    data: {
      f: "Анальгинова",
      i: "Октябрина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 30,
      m: 10,
      y: 1994,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 46,
      flat: 366,
    },
    diagnosis: 51.0,
    phone: ["+375291877040	972727"],
    comment: "",
  },

  {
    nCard: 3121,
    poly: 1,
    data: {
      f: "Стремнова",
      i: "Ильина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 1,
      y: 2006,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 140,
      flat: 51,
    },
    diagnosis: 41.2,
    phone: ["+375292314939	485024"],
    comment: "",
  },

  {
    nCard: 2091,
    poly: 8,
    data: {
      f: "Терпилова",
      i: "Анна",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 25,
      m: 2,
      y: 1998,
    },
    city: "Город",
    adress: {
      street: "Независимости",
      home: 12,
      flat: 523,
    },
    diagnosis: 41.2,
    phone: ["+375290564702	158655"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 19857,
    poly: 4,
    data: {
      f: "Андерсон",
      i: "Ильина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 9,
      m: 3,
      y: 1964,
    },
    city: "Город",
    adress: {
      street: "Сидоровская",
      home: 51,
      flat: 806,
    },
    diagnosis: 43.27,
    phone: ["+375294214148	175193"],
    comment: "",
  },

  {
    nCard: 5051,
    poly: 8,
    data: {
      f: "Петрова",
      i: "Анджолина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 6,
      m: 3,
      y: 1983,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 112,
      flat: 32,
    },
    diagnosis: 43.23,
    phone: ["+375292063999	890496"],
    comment: "МВД",
  },

  {
    nCard: 11088,
    poly: 10,
    data: {
      f: "Анальгинова",
      i: "Анна",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 15,
      m: 4,
      y: 1967,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 72,
      flat: 244,
    },
    diagnosis: 32.1,
    phone: ["+375299118405	948087"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 21080,
    poly: 9,
    data: {
      f: "Инлинова",
      i: "Виктория",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 1,
      y: 2012,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 36,
      flat: 198,
    },
    diagnosis: 51.0,
    phone: ["+375297635245	844976"],
    comment: "МВД",
  },

  {
    nCard: 2149,
    poly: 5,
    data: {
      f: "Иванова",
      i: "Елена",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 1,
      m: 4,
      y: 2016,
    },
    city: "Село",
    adress: {
      street: "Ивановская",
      home: 79,
      flat: 229,
    },
    diagnosis: 41.0,
    phone: ["+375290625753	691141"],
    comment: "",
  },

  {
    nCard: 7193,
    poly: 6,
    data: {
      f: "Петрова",
      i: "Эвелина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 8,
      m: 6,
      y: 1958,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 105,
      flat: 414,
    },
    diagnosis: 41.1,
    phone: ["+375290326814	132804"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 8617,
    poly: 2,
    data: {
      f: "Анальгинова",
      i: "Ильина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 27,
      m: 2,
      y: 1994,
    },
    city: "Город",
    adress: {
      street: "Петровская",
      home: 10,
      flat: 350,
    },
    diagnosis: 43.21,
    phone: ["+375295154163	656605"],
    comment: "Здорова",
  },

  {
    nCard: 20170,
    poly: 9,
    data: {
      f: "Петрова",
      i: "Виолетта",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 13,
      m: 9,
      y: 1969,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 52,
      flat: 310,
    },
    diagnosis: 41.1,
    phone: ["+375290663221	475078"],
    comment: "МВД",
  },

  {
    nCard: 22928,
    poly: 7,
    data: {
      f: "Петрова",
      i: "Октябрина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 13,
      m: 2,
      y: 1971,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 140,
      flat: 825,
    },
    diagnosis: 32.2,
    phone: ["+375294643234	967153"],
    comment: "",
  },

  {
    nCard: 6504,
    poly: 8,
    data: {
      f: "Андерсон",
      i: "Виктория",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 28,
      m: 12,
      y: 1987,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 80,
      flat: 817,
    },
    diagnosis: 43.27,
    phone: ["+375295737035	514609"],
    comment: "Здорова",
  },

  {
    nCard: 12536,
    poly: 10,
    data: {
      f: "Иванова",
      i: "Анджолина",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 21,
      m: 8,
      y: 1955,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 46,
      flat: 693,
    },
    diagnosis: 41.1,
    phone: ["+375292779394	945527"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 2777,
    poly: 10,
    data: {
      f: "Терпилова",
      i: "Ильина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 6,
      m: 3,
      y: 2017,
    },
    city: "Село",
    adress: {
      street: "Петропаловская",
      home: 41,
      flat: 340,
    },
    diagnosis: 43.26,
    phone: ["+375299252707	292568"],
    comment: "",
  },

  {
    nCard: 20569,
    poly: 3,
    data: {
      f: "Петрова",
      i: "Анна",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 8,
      y: 2016,
    },
    city: "Город",
    adress: {
      street: "Ивановская",
      home: 150,
      flat: 371,
    },
    diagnosis: 43.28,
    phone: ["+375291843018	327658"],
    comment: "",
  },

  {
    nCard: 9614,
    poly: 6,
    data: {
      f: "Терпилова",
      i: "Антонина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 26,
      m: 4,
      y: 1945,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 56,
      flat: 556,
    },
    diagnosis: 41.1,
    phone: ["+375297970209	398478"],
    comment: "",
  },

  {
    nCard: 16518,
    poly: 2,
    data: {
      f: "Терпилова",
      i: "Ильина",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 26,
      m: 11,
      y: 1959,
    },
    city: "Город",
    adress: {
      street: "Ленина",
      home: 95,
      flat: 88,
    },
    diagnosis: 43.24,
    phone: ["+375291917135	653282"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 908,
    poly: 6,
    data: {
      f: "Терпилова",
      i: "Анджолина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 2,
      y: 1966,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 52,
      flat: 377,
    },
    diagnosis: 43.22,
    phone: ["+375297385947	409654"],
    comment: "МВД",
  },

  {
    nCard: 6875,
    poly: 3,
    data: {
      f: "Петрова",
      i: "Виктория",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 16,
      m: 12,
      y: 1964,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 1,
      flat: 15,
    },
    diagnosis: 41.0,
    phone: ["+375291546374	258166"],
    comment: "Передана Вериго",
  },

  {
    nCard: 6304,
    poly: 10,
    data: {
      f: "Альгердова",
      i: "Виктория",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 8,
      m: 1,
      y: 1969,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 115,
      flat: 311,
    },
    diagnosis: 41.0,
    phone: ["+375299186527	596347"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 11852,
    poly: 3,
    data: {
      f: "Альгердова",
      i: "Антонина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 12,
      y: 1964,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 63,
      flat: 687,
    },
    diagnosis: 41.0,
    phone: ["+375290796317	999183"],
    comment: "Передана Вериго",
  },

  {
    nCard: 7139,
    poly: 5,
    data: {
      f: "Петрова",
      i: "Анджолина",
      o: "Степановна",
    },
    sex: "Ж",
    birth: {
      d: 23,
      m: 9,
      y: 2012,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 93,
      flat: 496,
    },
    diagnosis: 43.23,
    phone: ["+375295958510	152235"],
    comment: "Здорова",
  },

  {
    nCard: 19117,
    poly: 6,
    data: {
      f: "Терпилова",
      i: "Ангелина",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 24,
      m: 2,
      y: 1948,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 19,
      flat: 497,
    },
    diagnosis: 43.23,
    phone: ["+375293417909	812664"],
    comment: "МВД",
  },

  {
    nCard: 14186,
    poly: 8,
    data: {
      f: "Стремнова",
      i: "Ангелина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 19,
      m: 3,
      y: 1998,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 89,
      flat: 236,
    },
    diagnosis: 41.0,
    phone: ["+375298590635	146203"],
    comment: "МВД",
  },

  {
    nCard: 12489,
    poly: 9,
    data: {
      f: "Иванова",
      i: "Анджолина",
      o: "Степановна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 2,
      y: 1986,
    },
    city: "Село",
    adress: {
      street: "Орджоникидзе",
      home: 9,
      flat: 591,
    },
    diagnosis: 43.28,
    phone: ["+375296735421	804445"],
    comment: "МВД",
  },

  {
    nCard: 13593,
    poly: 4,
    data: {
      f: "Анальгинова",
      i: "Анджолина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 5,
      m: 9,
      y: 1997,
    },
    city: "Город",
    adress: {
      street: "Ивановская",
      home: 84,
      flat: 373,
    },
    diagnosis: 43.23,
    phone: ["+375297473510	505247"],
    comment: "",
  },

  {
    nCard: 8601,
    poly: 2,
    data: {
      f: "Альгердова",
      i: "Антонина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 20,
      m: 11,
      y: 2017,
    },
    city: "Село",
    adress: {
      street: "Петропаловская",
      home: 114,
      flat: 501,
    },
    diagnosis: 40.0,
    phone: ["+375297761817	410971"],
    comment: "МВД",
  },

  {
    nCard: 13469,
    poly: 1,
    data: {
      f: "Стремнова",
      i: "Ильина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 8,
      y: 2009,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 106,
      flat: 227,
    },
    diagnosis: 41.2,
    phone: ["+375297745957	364043"],
    comment: "Здорова",
  },

  {
    nCard: 4745,
    poly: 3,
    data: {
      f: "Петрова",
      i: "Антонина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 29,
      m: 2,
      y: 1983,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 53,
      flat: 206,
    },
    diagnosis: 43.27,
    phone: ["+375294411525	268361"],
    comment: "Здорова",
  },

  {
    nCard: 19133,
    poly: 3,
    data: {
      f: "Иванова",
      i: "Елена",
      o: "Степановна",
    },
    sex: "Ж",
    birth: {
      d: 21,
      m: 3,
      y: 1945,
    },
    city: "Город",
    adress: {
      street: "Ивановская",
      home: 149,
      flat: 494,
    },
    diagnosis: 32.3,
    phone: ["+375292657235	975452"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 2514,
    poly: 7,
    data: {
      f: "Петрова",
      i: "Ангелина",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 8,
      m: 4,
      y: 1963,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 42,
      flat: 632,
    },
    diagnosis: 43.26,
    phone: ["+375297581108	245823"],
    comment: "Здорова",
  },

  {
    nCard: 16811,
    poly: 10,
    data: {
      f: "Инлинова",
      i: "Эвелина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 9,
      y: 2021,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 100,
      flat: 198,
    },
    diagnosis: 43.25,
    phone: ["+375292053145	303912"],
    comment: "",
  },

  {
    nCard: 3122,
    poly: 8,
    data: {
      f: "Альгердова",
      i: "Ильина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 12,
      y: 2003,
    },
    city: "Село",
    adress: {
      street: "Орджоникидзе",
      home: 51,
      flat: 102,
    },
    diagnosis: 32.1,
    phone: ["+375299633090	982147"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 8078,
    poly: 5,
    data: {
      f: "Анальгинова",
      i: "Виолетта",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 4,
      m: 8,
      y: 1987,
    },
    city: "Город",
    adress: {
      street: "Сидоровская",
      home: 67,
      flat: 427,
    },
    diagnosis: 43.23,
    phone: ["+375295242655	379166"],
    comment: "Передана Вериго",
  },

  {
    nCard: 10483,
    poly: 1,
    data: {
      f: "Сидорова",
      i: "Анджолина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 24,
      m: 1,
      y: 1995,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 96,
      flat: 736,
    },
    diagnosis: 32.1,
    phone: ["+375293152551	151183"],
    comment: "",
  },

  {
    nCard: 17613,
    poly: 6,
    data: {
      f: "Смит",
      i: "Елена",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 22,
      m: 6,
      y: 2002,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 106,
      flat: 507,
    },
    diagnosis: 43.25,
    phone: ["+375294484527	442742"],
    comment: "МВД",
  },

  {
    nCard: 14740,
    poly: 8,
    data: {
      f: "Терпилова",
      i: "Светлана",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 20,
      m: 6,
      y: 1992,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 123,
      flat: 621,
    },
    diagnosis: 43.27,
    phone: ["+375299584547	901255"],
    comment: "Передана Вериго",
  },

  {
    nCard: 17815,
    poly: 2,
    data: {
      f: "Инлинова",
      i: "Анна",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 7,
      m: 10,
      y: 1961,
    },
    city: "Село",
    adress: {
      street: "Орджоникидзе",
      home: 29,
      flat: 263,
    },
    diagnosis: 41.2,
    phone: ["+375298389595	308342"],
    comment: "МВД",
  },

  {
    nCard: 21472,
    poly: 5,
    data: {
      f: "Терпилова",
      i: "Антонина",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 9,
      m: 3,
      y: 1952,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 137,
      flat: 236,
    },
    diagnosis: 41.2,
    phone: ["+375291487321	816984"],
    comment: "Здорова",
  },

  {
    nCard: 21409,
    poly: 11,
    data: {
      f: "Анальгинова",
      i: "Октябрина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 30,
      m: 10,
      y: 1994,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 46,
      flat: 366,
    },
    diagnosis: 51.0,
    phone: ["+375291877040	972727"],
    comment: "",
  },

  {
    nCard: 3121,
    poly: 1,
    data: {
      f: "Стремнова",
      i: "Ильина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 1,
      y: 2006,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 140,
      flat: 51,
    },
    diagnosis: 41.2,
    phone: ["+375292314939	485024"],
    comment: "",
  },

  {
    nCard: 2091,
    poly: 8,
    data: {
      f: "Терпилова",
      i: "Анна",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 25,
      m: 2,
      y: 1998,
    },
    city: "Город",
    adress: {
      street: "Независимости",
      home: 12,
      flat: 523,
    },
    diagnosis: 41.2,
    phone: ["+375290564702	158655"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 19857,
    poly: 4,
    data: {
      f: "Андерсон",
      i: "Ильина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 9,
      m: 3,
      y: 1964,
    },
    city: "Город",
    adress: {
      street: "Сидоровская",
      home: 51,
      flat: 806,
    },
    diagnosis: 43.27,
    phone: ["+375294214148	175193"],
    comment: "",
  },

  {
    nCard: 5051,
    poly: 8,
    data: {
      f: "Петрова",
      i: "Анджолина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 6,
      m: 3,
      y: 1983,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 112,
      flat: 32,
    },
    diagnosis: 43.23,
    phone: ["+375292063999	890496"],
    comment: "МВД",
  },

  {
    nCard: 11088,
    poly: 10,
    data: {
      f: "Анальгинова",
      i: "Анна",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 15,
      m: 4,
      y: 1967,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 72,
      flat: 244,
    },
    diagnosis: 32.1,
    phone: ["+375299118405	948087"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 21080,
    poly: 9,
    data: {
      f: "Инлинова",
      i: "Виктория",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 1,
      y: 2012,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 36,
      flat: 198,
    },
    diagnosis: 51.0,
    phone: ["+375297635245	844976"],
    comment: "МВД",
  },

  {
    nCard: 2149,
    poly: 5,
    data: {
      f: "Иванова",
      i: "Елена",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 1,
      m: 4,
      y: 2016,
    },
    city: "Село",
    adress: {
      street: "Ивановская",
      home: 79,
      flat: 229,
    },
    diagnosis: 41.0,
    phone: ["+375290625753	691141"],
    comment: "",
  },

  {
    nCard: 7193,
    poly: 6,
    data: {
      f: "Петрова",
      i: "Эвелина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 8,
      m: 6,
      y: 1958,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 105,
      flat: 414,
    },
    diagnosis: 41.1,
    phone: ["+375290326814	132804"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 8617,
    poly: 2,
    data: {
      f: "Анальгинова",
      i: "Ильина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 27,
      m: 2,
      y: 1994,
    },
    city: "Город",
    adress: {
      street: "Петровская",
      home: 10,
      flat: 350,
    },
    diagnosis: 43.21,
    phone: ["+375295154163	656605"],
    comment: "Здорова",
  },

  {
    nCard: 20170,
    poly: 9,
    data: {
      f: "Петрова",
      i: "Виолетта",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 13,
      m: 9,
      y: 1969,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 52,
      flat: 310,
    },
    diagnosis: 41.1,
    phone: ["+375290663221	475078"],
    comment: "МВД",
  },

  {
    nCard: 22928,
    poly: 7,
    data: {
      f: "Петрова",
      i: "Октябрина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 13,
      m: 2,
      y: 1971,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 140,
      flat: 825,
    },
    diagnosis: 32.2,
    phone: ["+375294643234	967153"],
    comment: "Передана Сивцову",
  },

  {
    nCard: 6504,
    poly: 8,
    data: {
      f: "Андерсон",
      i: "Виктория",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 28,
      m: 12,
      y: 1987,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 80,
      flat: 817,
    },
    diagnosis: 43.27,
    phone: ["+375295737035	514609"],
    comment: "Здорова",
  },

  {
    nCard: 12536,
    poly: 10,
    data: {
      f: "Иванова",
      i: "Анджолина",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 21,
      m: 8,
      y: 1955,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 46,
      flat: 693,
    },
    diagnosis: 41.1,
    phone: ["+375292779394	945527"],
    comment: "",
  },

  {
    nCard: 2777,
    poly: 10,
    data: {
      f: "Терпилова",
      i: "Ильина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 6,
      m: 3,
      y: 2017,
    },
    city: "Село",
    adress: {
      street: "Петропаловская",
      home: 41,
      flat: 340,
    },
    diagnosis: 43.26,
    phone: ["+375299252707	292568"],
    comment: "Передана Сивцову",
  },

  {
    nCard: 20569,
    poly: 3,
    data: {
      f: "Петрова",
      i: "Анна",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 8,
      y: 2016,
    },
    city: "Город",
    adress: {
      street: "Ивановская",
      home: 150,
      flat: 371,
    },
    diagnosis: 43.28,
    phone: ["+375291843018	327658"],
    comment: "Передана Сивцову",
  },

  {
    nCard: 9614,
    poly: 6,
    data: {
      f: "Терпилова",
      i: "Антонина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 26,
      m: 4,
      y: 1945,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 56,
      flat: 556,
    },
    diagnosis: 41.1,
    phone: ["+375297970209	398478"],
    comment: "Передана Могилевскому",
  },

  {
    nCard: 16518,
    poly: 2,
    data: {
      f: "Терпилова",
      i: "Ильина",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 26,
      m: 11,
      y: 1959,
    },
    city: "Город",
    adress: {
      street: "Ленина",
      home: 95,
      flat: 88,
    },
    diagnosis: 43.24,
    phone: ["+375291917135	653282"],
    comment: "",
  },

  {
    nCard: 908,
    poly: 6,
    data: {
      f: "Терпилова",
      i: "Анджолина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 2,
      y: 1966,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 52,
      flat: 377,
    },
    diagnosis: 43.22,
    phone: ["+375297385947	409654"],
    comment: "МВД",
  },

  {
    nCard: 6875,
    poly: 3,
    data: {
      f: "Петрова",
      i: "Виктория",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 16,
      m: 12,
      y: 1964,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 1,
      flat: 15,
    },
    diagnosis: 41.0,
    phone: ["+375291546374	258166"],
    comment: "Передана Вериго",
  },

  {
    nCard: 6304,
    poly: 10,
    data: {
      f: "Альгердова",
      i: "Виктория",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 8,
      m: 1,
      y: 1969,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 115,
      flat: 311,
    },
    diagnosis: 41.0,
    phone: ["+375299186527	596347"],
    comment: "",
  },

  {
    nCard: 11852,
    poly: 3,
    data: {
      f: "Альгердова",
      i: "Антонина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 12,
      y: 1964,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 63,
      flat: 687,
    },
    diagnosis: 41.0,
    phone: ["+375290796317	999183"],
    comment: "Передана Вериго",
  },

  {
    nCard: 7139,
    poly: 5,
    data: {
      f: "Петрова",
      i: "Анджолина",
      o: "Степановна",
    },
    sex: "Ж",
    birth: {
      d: 23,
      m: 9,
      y: 2012,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 93,
      flat: 496,
    },
    diagnosis: 43.23,
    phone: ["+375295958510	152235"],
    comment: "Здорова",
  },

  {
    nCard: 19117,
    poly: 6,
    data: {
      f: "Терпилова",
      i: "Ангелина",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 24,
      m: 2,
      y: 1948,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 19,
      flat: 497,
    },
    diagnosis: 43.23,
    phone: ["+375293417909	812664"],
    comment: "МВД",
  },

  {
    nCard: 14186,
    poly: 8,
    data: {
      f: "Стремнова",
      i: "Ангелина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 19,
      m: 3,
      y: 1998,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 89,
      flat: 236,
    },
    diagnosis: 41.0,
    phone: ["+375298590635	146203"],
    comment: "МВД",
  },

  {
    nCard: 12489,
    poly: 9,
    data: {
      f: "Иванова",
      i: "Анджолина",
      o: "Степановна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 2,
      y: 1986,
    },
    city: "Село",
    adress: {
      street: "Орджоникидзе",
      home: 9,
      flat: 591,
    },
    diagnosis: 43.28,
    phone: ["+375296735421	804445"],
    comment: "МВД",
  },

  {
    nCard: 13593,
    poly: 4,
    data: {
      f: "Анальгинова",
      i: "Анджолина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 5,
      m: 9,
      y: 1997,
    },
    city: "Город",
    adress: {
      street: "Ивановская",
      home: 84,
      flat: 373,
    },
    diagnosis: 43.23,
    phone: ["+375297473510	505247"],
    comment: "Передана Могилевскому",
  },

  {
    nCard: 8601,
    poly: 2,
    data: {
      f: "Альгердова",
      i: "Антонина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 20,
      m: 11,
      y: 2017,
    },
    city: "Село",
    adress: {
      street: "Петропаловская",
      home: 114,
      flat: 501,
    },
    diagnosis: 40.0,
    phone: ["+375297761817	410971"],
    comment: "МВД",
  },

  {
    nCard: 13469,
    poly: 1,
    data: {
      f: "Стремнова",
      i: "Ильина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 8,
      y: 2009,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 106,
      flat: 227,
    },
    diagnosis: 41.2,
    phone: ["+375297745957	364043"],
    comment: "Здорова",
  },

  {
    nCard: 4745,
    poly: 3,
    data: {
      f: "Петрова",
      i: "Антонина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 29,
      m: 2,
      y: 1983,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 53,
      flat: 206,
    },
    diagnosis: 43.27,
    phone: ["+375294411525	268361"],
    comment: "Здорова",
  },

  {
    nCard: 19133,
    poly: 3,
    data: {
      f: "Иванова",
      i: "Елена",
      o: "Степановна",
    },
    sex: "Ж",
    birth: {
      d: 21,
      m: 3,
      y: 1945,
    },
    city: "Город",
    adress: {
      street: "Ивановская",
      home: 149,
      flat: 494,
    },
    diagnosis: 32.3,
    phone: ["+375292657235	975452"],
    comment: "",
  },

  {
    nCard: 2514,
    poly: 7,
    data: {
      f: "Петрова",
      i: "Ангелина",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 8,
      m: 4,
      y: 1963,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 42,
      flat: 632,
    },
    diagnosis: 43.26,
    phone: ["+375297581108	245823"],
    comment: "Здорова",
  },

  {
    nCard: 16811,
    poly: 10,
    data: {
      f: "Инлинова",
      i: "Эвелина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 9,
      y: 2021,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 100,
      flat: 198,
    },
    diagnosis: 43.25,
    phone: ["+375292053145	303912"],
    comment: "Передана Сивцову",
  },

  {
    nCard: 3122,
    poly: 8,
    data: {
      f: "Альгердова",
      i: "Ильина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 12,
      y: 2003,
    },
    city: "Село",
    adress: {
      street: "Орджоникидзе",
      home: 51,
      flat: 102,
    },
    diagnosis: 32.1,
    phone: ["+375299633090	982147"],
    comment: "",
  },

  {
    nCard: 8078,
    poly: 5,
    data: {
      f: "Анальгинова",
      i: "Виолетта",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 4,
      m: 8,
      y: 1987,
    },
    city: "Город",
    adress: {
      street: "Сидоровская",
      home: 67,
      flat: 427,
    },
    diagnosis: 43.23,
    phone: ["+375295242655	379166"],
    comment: "Передана Вериго",
  },

  {
    nCard: 10483,
    poly: 1,
    data: {
      f: "Сидорова",
      i: "Анджолина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 24,
      m: 1,
      y: 1995,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 96,
      flat: 736,
    },
    diagnosis: 32.1,
    phone: ["+375293152551	151183"],
    comment: "Передана Могилевскому",
  },

  {
    nCard: 17613,
    poly: 6,
    data: {
      f: "Смит",
      i: "Елена",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 22,
      m: 6,
      y: 2002,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 106,
      flat: 507,
    },
    diagnosis: 43.25,
    phone: ["+375294484527	442742"],
    comment: "МВД",
  },

  {
    nCard: 14740,
    poly: 8,
    data: {
      f: "Терпилова",
      i: "Светлана",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 20,
      m: 6,
      y: 1992,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 123,
      flat: 621,
    },
    diagnosis: 43.27,
    phone: ["+375299584547	901255"],
    comment: "Передана Вериго",
  },

  {
    nCard: 17815,
    poly: 2,
    data: {
      f: "Инлинова",
      i: "Анна",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 7,
      m: 10,
      y: 1961,
    },
    city: "Село",
    adress: {
      street: "Орджоникидзе",
      home: 29,
      flat: 263,
    },
    diagnosis: 41.2,
    phone: ["+375298389595	308342"],
    comment: "МВД",
  },

  {
    nCard: 21472,
    poly: 5,
    data: {
      f: "Терпилова",
      i: "Антонина",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 9,
      m: 3,
      y: 1952,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 137,
      flat: 236,
    },
    diagnosis: 41.2,
    phone: ["+375291487321	816984"],
    comment: "Здорова",
  },

  {
    nCard: 21409,
    poly: 11,
    data: {
      f: "Анальгинова",
      i: "Октябрина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 30,
      m: 10,
      y: 1994,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 46,
      flat: 366,
    },
    diagnosis: 51.0,
    phone: ["+375291877040	972727"],
    comment: "Передана Сивцову",
  },

  {
    nCard: 3121,
    poly: 1,
    data: {
      f: "Стремнова",
      i: "Ильина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 1,
      y: 2006,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 140,
      flat: 51,
    },
    diagnosis: 41.2,
    phone: ["+375292314939	485024"],
    comment: "Передана Сивцову",
  },

  {
    nCard: 2091,
    poly: 8,
    data: {
      f: "Терпилова",
      i: "Анна",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 25,
      m: 2,
      y: 1998,
    },
    city: "Город",
    adress: {
      street: "Независимости",
      home: 12,
      flat: 523,
    },
    diagnosis: 41.2,
    phone: ["+375290564702	158655"],
    comment: "",
  },

  {
    nCard: 19857,
    poly: 4,
    data: {
      f: "Андерсон",
      i: "Ильина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 9,
      m: 3,
      y: 1964,
    },
    city: "Город",
    adress: {
      street: "Сидоровская",
      home: 51,
      flat: 806,
    },
    diagnosis: 43.27,
    phone: ["+375294214148	175193"],
    comment: "Передана Могилевскому",
  },

  {
    nCard: 5051,
    poly: 8,
    data: {
      f: "Петрова",
      i: "Анджолина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 6,
      m: 3,
      y: 1983,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 112,
      flat: 32,
    },
    diagnosis: 43.23,
    phone: ["+375292063999	890496"],
    comment: "МВД",
  },

  {
    nCard: 11088,
    poly: 10,
    data: {
      f: "Анальгинова",
      i: "Анна",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 15,
      m: 4,
      y: 1967,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 72,
      flat: 244,
    },
    diagnosis: 32.1,
    phone: ["+375299118405	948087"],
    comment: "",
  },

  {
    nCard: 21080,
    poly: 9,
    data: {
      f: "Инлинова",
      i: "Виктория",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 1,
      y: 2012,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 36,
      flat: 198,
    },
    diagnosis: 51.0,
    phone: ["+375297635245	844976"],
    comment: "МВД",
  },

  {
    nCard: 2149,
    poly: 5,
    data: {
      f: "Иванова",
      i: "Елена",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 1,
      m: 4,
      y: 2016,
    },
    city: "Село",
    adress: {
      street: "Ивановская",
      home: 79,
      flat: 229,
    },
    diagnosis: 41.0,
    phone: ["+375290625753	691141"],
    comment: "Передана Сивцову",
  },

  {
    nCard: 7193,
    poly: 6,
    data: {
      f: "Петрова",
      i: "Эвелина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 8,
      m: 6,
      y: 1958,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 105,
      flat: 414,
    },
    diagnosis: 41.1,
    phone: ["+375290326814	132804"],
    comment: "",
  },

  {
    nCard: 8617,
    poly: 2,
    data: {
      f: "Анальгинова",
      i: "Ильина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 27,
      m: 2,
      y: 1994,
    },
    city: "Город",
    adress: {
      street: "Петровская",
      home: 10,
      flat: 350,
    },
    diagnosis: 43.21,
    phone: ["+375295154163	656605"],
    comment: "Здорова",
  },

  {
    nCard: 20170,
    poly: 9,
    data: {
      f: "Петрова",
      i: "Виолетта",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 13,
      m: 9,
      y: 1969,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 52,
      flat: 310,
    },
    diagnosis: 41.1,
    phone: ["+375290663221	475078"],
    comment: "МВД",
  },

  {
    nCard: 22928,
    poly: 7,
    data: {
      f: "Петрова",
      i: "Октябрина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 13,
      m: 2,
      y: 1971,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 140,
      flat: 825,
    },
    diagnosis: 32.2,
    phone: ["+375294643234	967153"],
    comment: "Передана Сивцову",
  },

  {
    nCard: 6504,
    poly: 8,
    data: {
      f: "Андерсон",
      i: "Виктория",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 28,
      m: 12,
      y: 1987,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 80,
      flat: 817,
    },
    diagnosis: 43.27,
    phone: ["+375295737035	514609"],
    comment: "Здорова",
  },

  {
    nCard: 12536,
    poly: 10,
    data: {
      f: "Иванова",
      i: "Анджолина",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 21,
      m: 8,
      y: 1955,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 46,
      flat: 693,
    },
    diagnosis: 41.1,
    phone: ["+375292779394	945527"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 2777,
    poly: 10,
    data: {
      f: "Терпилова",
      i: "Ильина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 6,
      m: 3,
      y: 2017,
    },
    city: "Село",
    adress: {
      street: "Петропаловская",
      home: 41,
      flat: 340,
    },
    diagnosis: 43.26,
    phone: ["+375299252707	292568"],
    comment: "",
  },

  {
    nCard: 20569,
    poly: 3,
    data: {
      f: "Петрова",
      i: "Анна",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 8,
      y: 2016,
    },
    city: "Город",
    adress: {
      street: "Ивановская",
      home: 150,
      flat: 371,
    },
    diagnosis: 43.28,
    phone: ["+375291843018	327658"],
    comment: "",
  },

  {
    nCard: 9614,
    poly: 6,
    data: {
      f: "Терпилова",
      i: "Антонина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 26,
      m: 4,
      y: 1945,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 56,
      flat: 556,
    },
    diagnosis: 41.1,
    phone: ["+375297970209	398478"],
    comment: "Передана Могилевскому",
  },

  {
    nCard: 16518,
    poly: 2,
    data: {
      f: "Терпилова",
      i: "Ильина",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 26,
      m: 11,
      y: 1959,
    },
    city: "Город",
    adress: {
      street: "Ленина",
      home: 95,
      flat: 88,
    },
    diagnosis: 43.24,
    phone: ["+375291917135	653282"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 908,
    poly: 6,
    data: {
      f: "Терпилова",
      i: "Анджолина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 2,
      y: 1966,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 52,
      flat: 377,
    },
    diagnosis: 43.22,
    phone: ["+375297385947	409654"],
    comment: "МВД",
  },

  {
    nCard: 6875,
    poly: 3,
    data: {
      f: "Петрова",
      i: "Виктория",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 16,
      m: 12,
      y: 1964,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 1,
      flat: 15,
    },
    diagnosis: 41.0,
    phone: ["+375291546374	258166"],
    comment: "Передана Вериго",
  },

  {
    nCard: 6304,
    poly: 10,
    data: {
      f: "Альгердова",
      i: "Виктория",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 8,
      m: 1,
      y: 1969,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 115,
      flat: 311,
    },
    diagnosis: 41.0,
    phone: ["+375299186527	596347"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 11852,
    poly: 3,
    data: {
      f: "Альгердова",
      i: "Антонина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 12,
      y: 1964,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 63,
      flat: 687,
    },
    diagnosis: 41.0,
    phone: ["+375290796317	999183"],
    comment: "Передана Вериго",
  },

  {
    nCard: 7139,
    poly: 5,
    data: {
      f: "Петрова",
      i: "Анджолина",
      o: "Степановна",
    },
    sex: "Ж",
    birth: {
      d: 23,
      m: 9,
      y: 2012,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 93,
      flat: 496,
    },
    diagnosis: 43.23,
    phone: ["+375295958510	152235"],
    comment: "Здорова",
  },

  {
    nCard: 19117,
    poly: 6,
    data: {
      f: "Терпилова",
      i: "Ангелина",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 24,
      m: 2,
      y: 1948,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 19,
      flat: 497,
    },
    diagnosis: 43.23,
    phone: ["+375293417909	812664"],
    comment: "МВД",
  },

  {
    nCard: 14186,
    poly: 8,
    data: {
      f: "Стремнова",
      i: "Ангелина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 19,
      m: 3,
      y: 1998,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 89,
      flat: 236,
    },
    diagnosis: 41.0,
    phone: ["+375298590635	146203"],
    comment: "МВД",
  },

  {
    nCard: 12489,
    poly: 9,
    data: {
      f: "Иванова",
      i: "Анджолина",
      o: "Степановна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 2,
      y: 1986,
    },
    city: "Село",
    adress: {
      street: "Орджоникидзе",
      home: 9,
      flat: 591,
    },
    diagnosis: 43.28,
    phone: ["+375296735421	804445"],
    comment: "МВД",
  },

  {
    nCard: 13593,
    poly: 4,
    data: {
      f: "Анальгинова",
      i: "Анджолина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 5,
      m: 9,
      y: 1997,
    },
    city: "Город",
    adress: {
      street: "Ивановская",
      home: 84,
      flat: 373,
    },
    diagnosis: 43.23,
    phone: ["+375297473510	505247"],
    comment: "Передана Могилевскому",
  },

  {
    nCard: 8601,
    poly: 2,
    data: {
      f: "Альгердова",
      i: "Антонина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 20,
      m: 11,
      y: 2017,
    },
    city: "Село",
    adress: {
      street: "Петропаловская",
      home: 114,
      flat: 501,
    },
    diagnosis: 40.0,
    phone: ["+375297761817	410971"],
    comment: "МВД",
  },

  {
    nCard: 13469,
    poly: 1,
    data: {
      f: "Стремнова",
      i: "Ильина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 8,
      y: 2009,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 106,
      flat: 227,
    },
    diagnosis: 41.2,
    phone: ["+375297745957	364043"],
    comment: "Здорова",
  },

  {
    nCard: 4745,
    poly: 3,
    data: {
      f: "Петрова",
      i: "Антонина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 29,
      m: 2,
      y: 1983,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 53,
      flat: 206,
    },
    diagnosis: 43.27,
    phone: ["+375294411525	268361"],
    comment: "Здорова",
  },

  {
    nCard: 19133,
    poly: 3,
    data: {
      f: "Иванова",
      i: "Елена",
      o: "Степановна",
    },
    sex: "Ж",
    birth: {
      d: 21,
      m: 3,
      y: 1945,
    },
    city: "Город",
    adress: {
      street: "Ивановская",
      home: 149,
      flat: 494,
    },
    diagnosis: 32.3,
    phone: ["+375292657235	975452"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 2514,
    poly: 7,
    data: {
      f: "Петрова",
      i: "Ангелина",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 8,
      m: 4,
      y: 1963,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 42,
      flat: 632,
    },
    diagnosis: 43.26,
    phone: ["+375297581108	245823"],
    comment: "Здорова",
  },

  {
    nCard: 16811,
    poly: 10,
    data: {
      f: "Инлинова",
      i: "Эвелина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 9,
      y: 2021,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 100,
      flat: 198,
    },
    diagnosis: 43.25,
    phone: ["+375292053145	303912"],
    comment: "",
  },

  {
    nCard: 3122,
    poly: 8,
    data: {
      f: "Альгердова",
      i: "Ильина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 12,
      y: 2003,
    },
    city: "Село",
    adress: {
      street: "Орджоникидзе",
      home: 51,
      flat: 102,
    },
    diagnosis: 32.1,
    phone: ["+375299633090	982147"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 8078,
    poly: 5,
    data: {
      f: "Анальгинова",
      i: "Виолетта",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 4,
      m: 8,
      y: 1987,
    },
    city: "Город",
    adress: {
      street: "Сидоровская",
      home: 67,
      flat: 427,
    },
    diagnosis: 43.23,
    phone: ["+375295242655	379166"],
    comment: "Передана Вериго",
  },

  {
    nCard: 10483,
    poly: 1,
    data: {
      f: "Сидорова",
      i: "Анджолина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 24,
      m: 1,
      y: 1995,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 96,
      flat: 736,
    },
    diagnosis: 32.1,
    phone: ["+375293152551	151183"],
    comment: "Передана Могилевскому",
  },

  {
    nCard: 17613,
    poly: 6,
    data: {
      f: "Смит",
      i: "Елена",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 22,
      m: 6,
      y: 2002,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 106,
      flat: 507,
    },
    diagnosis: 43.25,
    phone: ["+375294484527	442742"],
    comment: "МВД",
  },

  {
    nCard: 14740,
    poly: 8,
    data: {
      f: "Терпилова",
      i: "Светлана",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 20,
      m: 6,
      y: 1992,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 123,
      flat: 621,
    },
    diagnosis: 43.27,
    phone: ["+375299584547	901255"],
    comment: "Передана Вериго",
  },

  {
    nCard: 17815,
    poly: 2,
    data: {
      f: "Инлинова",
      i: "Анна",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 7,
      m: 10,
      y: 1961,
    },
    city: "Село",
    adress: {
      street: "Орджоникидзе",
      home: 29,
      flat: 263,
    },
    diagnosis: 41.2,
    phone: ["+375298389595	308342"],
    comment: "МВД",
  },

  {
    nCard: 21472,
    poly: 5,
    data: {
      f: "Терпилова",
      i: "Антонина",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 9,
      m: 3,
      y: 1952,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 137,
      flat: 236,
    },
    diagnosis: 41.2,
    phone: ["+375291487321	816984"],
    comment: "Здорова",
  },

  {
    nCard: 21409,
    poly: 11,
    data: {
      f: "Анальгинова",
      i: "Октябрина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 30,
      m: 10,
      y: 1994,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 46,
      flat: 366,
    },
    diagnosis: 51.0,
    phone: ["+375291877040	972727"],
    comment: "",
  },

  {
    nCard: 3121,
    poly: 1,
    data: {
      f: "Стремнова",
      i: "Ильина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 1,
      y: 2006,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 140,
      flat: 51,
    },
    diagnosis: 41.2,
    phone: ["+375292314939	485024"],
    comment: "",
  },

  {
    nCard: 2091,
    poly: 8,
    data: {
      f: "Терпилова",
      i: "Анна",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 25,
      m: 2,
      y: 1998,
    },
    city: "Город",
    adress: {
      street: "Независимости",
      home: 12,
      flat: 523,
    },
    diagnosis: 41.2,
    phone: ["+375290564702	158655"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 19857,
    poly: 4,
    data: {
      f: "Андерсон",
      i: "Ильина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 9,
      m: 3,
      y: 1964,
    },
    city: "Город",
    adress: {
      street: "Сидоровская",
      home: 51,
      flat: 806,
    },
    diagnosis: 43.27,
    phone: ["+375294214148	175193"],
    comment: "Передана Могилевскому",
  },

  {
    nCard: 5051,
    poly: 8,
    data: {
      f: "Петрова",
      i: "Анджолина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 6,
      m: 3,
      y: 1983,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 112,
      flat: 32,
    },
    diagnosis: 43.23,
    phone: ["+375292063999	890496"],
    comment: "МВД",
  },

  {
    nCard: 11088,
    poly: 10,
    data: {
      f: "Анальгинова",
      i: "Анна",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 15,
      m: 4,
      y: 1967,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 72,
      flat: 244,
    },
    diagnosis: 32.1,
    phone: ["+375299118405	948087"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 21080,
    poly: 9,
    data: {
      f: "Инлинова",
      i: "Виктория",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 1,
      y: 2012,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 36,
      flat: 198,
    },
    diagnosis: 51.0,
    phone: ["+375297635245	844976"],
    comment: "МВД",
  },

  {
    nCard: 2149,
    poly: 5,
    data: {
      f: "Иванова",
      i: "Елена",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 1,
      m: 4,
      y: 2016,
    },
    city: "Село",
    adress: {
      street: "Ивановская",
      home: 79,
      flat: 229,
    },
    diagnosis: 41.0,
    phone: ["+375290625753	691141"],
    comment: "",
  },

  {
    nCard: 7193,
    poly: 6,
    data: {
      f: "Петрова",
      i: "Эвелина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 8,
      m: 6,
      y: 1958,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 105,
      flat: 414,
    },
    diagnosis: 41.1,
    phone: ["+375290326814	132804"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 8617,
    poly: 2,
    data: {
      f: "Анальгинова",
      i: "Ильина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 27,
      m: 2,
      y: 1994,
    },
    city: "Город",
    adress: {
      street: "Петровская",
      home: 10,
      flat: 350,
    },
    diagnosis: 43.21,
    phone: ["+375295154163	656605"],
    comment: "Здорова",
  },

  {
    nCard: 20170,
    poly: 9,
    data: {
      f: "Петрова",
      i: "Виолетта",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 13,
      m: 9,
      y: 1969,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 52,
      flat: 310,
    },
    diagnosis: 41.1,
    phone: ["+375290663221	475078"],
    comment: "МВД",
  },

  {
    nCard: 22928,
    poly: 7,
    data: {
      f: "Петрова",
      i: "Октябрина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 13,
      m: 2,
      y: 1971,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 140,
      flat: 825,
    },
    diagnosis: 32.2,
    phone: ["+375294643234	967153"],
    comment: "",
  },

  {
    nCard: 6504,
    poly: 8,
    data: {
      f: "Андерсон",
      i: "Виктория",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 28,
      m: 12,
      y: 1987,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 80,
      flat: 817,
    },
    diagnosis: 43.27,
    phone: ["+375295737035	514609"],
    comment: "Здорова",
  },

  {
    nCard: 12536,
    poly: 10,
    data: {
      f: "Иванова",
      i: "Анджолина",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 21,
      m: 8,
      y: 1955,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 46,
      flat: 693,
    },
    diagnosis: 41.1,
    phone: ["+375292779394	945527"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 2777,
    poly: 10,
    data: {
      f: "Терпилова",
      i: "Ильина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 6,
      m: 3,
      y: 2017,
    },
    city: "Село",
    adress: {
      street: "Петропаловская",
      home: 41,
      flat: 340,
    },
    diagnosis: 43.26,
    phone: ["+375299252707	292568"],
    comment: "",
  },

  {
    nCard: 20569,
    poly: 3,
    data: {
      f: "Петрова",
      i: "Анна",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 8,
      y: 2016,
    },
    city: "Город",
    adress: {
      street: "Ивановская",
      home: 150,
      flat: 371,
    },
    diagnosis: 43.28,
    phone: ["+375291843018	327658"],
    comment: "",
  },

  {
    nCard: 9614,
    poly: 6,
    data: {
      f: "Терпилова",
      i: "Антонина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 26,
      m: 4,
      y: 1945,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 56,
      flat: 556,
    },
    diagnosis: 41.1,
    phone: ["+375297970209	398478"],
    comment: "Передана Могилевскому",
  },

  {
    nCard: 16518,
    poly: 2,
    data: {
      f: "Терпилова",
      i: "Ильина",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 26,
      m: 11,
      y: 1959,
    },
    city: "Город",
    adress: {
      street: "Ленина",
      home: 95,
      flat: 88,
    },
    diagnosis: 43.24,
    phone: ["+375291917135	653282"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 908,
    poly: 6,
    data: {
      f: "Терпилова",
      i: "Анджолина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 2,
      y: 1966,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 52,
      flat: 377,
    },
    diagnosis: 43.22,
    phone: ["+375297385947	409654"],
    comment: "МВД",
  },

  {
    nCard: 6875,
    poly: 3,
    data: {
      f: "Петрова",
      i: "Виктория",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 16,
      m: 12,
      y: 1964,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 1,
      flat: 15,
    },
    diagnosis: 41.0,
    phone: ["+375291546374	258166"],
    comment: "Передана Вериго",
  },

  {
    nCard: 6304,
    poly: 10,
    data: {
      f: "Альгердова",
      i: "Виктория",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 8,
      m: 1,
      y: 1969,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 115,
      flat: 311,
    },
    diagnosis: 41.0,
    phone: ["+375299186527	596347"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 11852,
    poly: 3,
    data: {
      f: "Альгердова",
      i: "Антонина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 12,
      y: 1964,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 63,
      flat: 687,
    },
    diagnosis: 41.0,
    phone: ["+375290796317	999183"],
    comment: "Передана Вериго",
  },

  {
    nCard: 7139,
    poly: 5,
    data: {
      f: "Петрова",
      i: "Анджолина",
      o: "Степановна",
    },
    sex: "Ж",
    birth: {
      d: 23,
      m: 9,
      y: 2012,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 93,
      flat: 496,
    },
    diagnosis: 43.23,
    phone: ["+375295958510	152235"],
    comment: "Здорова",
  },

  {
    nCard: 19117,
    poly: 6,
    data: {
      f: "Терпилова",
      i: "Ангелина",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 24,
      m: 2,
      y: 1948,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 19,
      flat: 497,
    },
    diagnosis: 43.23,
    phone: ["+375293417909	812664"],
    comment: "МВД",
  },

  {
    nCard: 14186,
    poly: 8,
    data: {
      f: "Стремнова",
      i: "Ангелина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 19,
      m: 3,
      y: 1998,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 89,
      flat: 236,
    },
    diagnosis: 41.0,
    phone: ["+375298590635	146203"],
    comment: "МВД",
  },

  {
    nCard: 12489,
    poly: 9,
    data: {
      f: "Иванова",
      i: "Анджолина",
      o: "Степановна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 2,
      y: 1986,
    },
    city: "Село",
    adress: {
      street: "Орджоникидзе",
      home: 9,
      flat: 591,
    },
    diagnosis: 43.28,
    phone: ["+375296735421	804445"],
    comment: "МВД",
  },

  {
    nCard: 13593,
    poly: 4,
    data: {
      f: "Анальгинова",
      i: "Анджолина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 5,
      m: 9,
      y: 1997,
    },
    city: "Город",
    adress: {
      street: "Ивановская",
      home: 84,
      flat: 373,
    },
    diagnosis: 43.23,
    phone: ["+375297473510	505247"],
    comment: "Передана Могилевскому",
  },

  {
    nCard: 8601,
    poly: 2,
    data: {
      f: "Альгердова",
      i: "Антонина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 20,
      m: 11,
      y: 2017,
    },
    city: "Село",
    adress: {
      street: "Петропаловская",
      home: 114,
      flat: 501,
    },
    diagnosis: 40.0,
    phone: ["+375297761817	410971"],
    comment: "МВД",
  },

  {
    nCard: 13469,
    poly: 1,
    data: {
      f: "Стремнова",
      i: "Ильина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 8,
      y: 2009,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 106,
      flat: 227,
    },
    diagnosis: 41.2,
    phone: ["+375297745957	364043"],
    comment: "Здорова",
  },

  {
    nCard: 4745,
    poly: 3,
    data: {
      f: "Петрова",
      i: "Антонина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 29,
      m: 2,
      y: 1983,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 53,
      flat: 206,
    },
    diagnosis: 43.27,
    phone: ["+375294411525	268361"],
    comment: "Здорова",
  },

  {
    nCard: 19133,
    poly: 3,
    data: {
      f: "Иванова",
      i: "Елена",
      o: "Степановна",
    },
    sex: "Ж",
    birth: {
      d: 21,
      m: 3,
      y: 1945,
    },
    city: "Город",
    adress: {
      street: "Ивановская",
      home: 149,
      flat: 494,
    },
    diagnosis: 32.3,
    phone: ["+375292657235	975452"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 2514,
    poly: 7,
    data: {
      f: "Петрова",
      i: "Ангелина",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 8,
      m: 4,
      y: 1963,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 42,
      flat: 632,
    },
    diagnosis: 43.26,
    phone: ["+375297581108	245823"],
    comment: "Здорова",
  },

  {
    nCard: 16811,
    poly: 10,
    data: {
      f: "Инлинова",
      i: "Эвелина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 9,
      y: 2021,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 100,
      flat: 198,
    },
    diagnosis: 43.25,
    phone: ["+375292053145	303912"],
    comment: "",
  },

  {
    nCard: 3122,
    poly: 8,
    data: {
      f: "Альгердова",
      i: "Ильина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 12,
      y: 2003,
    },
    city: "Село",
    adress: {
      street: "Орджоникидзе",
      home: 51,
      flat: 102,
    },
    diagnosis: 32.1,
    phone: ["+375299633090	982147"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 8078,
    poly: 5,
    data: {
      f: "Анальгинова",
      i: "Виолетта",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 4,
      m: 8,
      y: 1987,
    },
    city: "Город",
    adress: {
      street: "Сидоровская",
      home: 67,
      flat: 427,
    },
    diagnosis: 43.23,
    phone: ["+375295242655	379166"],
    comment: "Передана Вериго",
  },

  {
    nCard: 10483,
    poly: 1,
    data: {
      f: "Сидорова",
      i: "Анджолина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 24,
      m: 1,
      y: 1995,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 96,
      flat: 736,
    },
    diagnosis: 32.1,
    phone: ["+375293152551	151183"],
    comment: "Передана Могилевскому",
  },

  {
    nCard: 17613,
    poly: 6,
    data: {
      f: "Смит",
      i: "Елена",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 22,
      m: 6,
      y: 2002,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 106,
      flat: 507,
    },
    diagnosis: 43.25,
    phone: ["+375294484527	442742"],
    comment: "МВД",
  },

  {
    nCard: 14740,
    poly: 8,
    data: {
      f: "Терпилова",
      i: "Светлана",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 20,
      m: 6,
      y: 1992,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 123,
      flat: 621,
    },
    diagnosis: 43.27,
    phone: ["+375299584547	901255"],
    comment: "Передана Вериго",
  },

  {
    nCard: 17815,
    poly: 2,
    data: {
      f: "Инлинова",
      i: "Анна",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 7,
      m: 10,
      y: 1961,
    },
    city: "Село",
    adress: {
      street: "Орджоникидзе",
      home: 29,
      flat: 263,
    },
    diagnosis: 41.2,
    phone: ["+375298389595	308342"],
    comment: "МВД",
  },

  {
    nCard: 21472,
    poly: 5,
    data: {
      f: "Терпилова",
      i: "Антонина",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 9,
      m: 3,
      y: 1952,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 137,
      flat: 236,
    },
    diagnosis: 41.2,
    phone: ["+375291487321	816984"],
    comment: "Здорова",
  },

  {
    nCard: 21409,
    poly: 11,
    data: {
      f: "Анальгинова",
      i: "Октябрина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 30,
      m: 10,
      y: 1994,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 46,
      flat: 366,
    },
    diagnosis: 51.0,
    phone: ["+375291877040	972727"],
    comment: "",
  },

  {
    nCard: 3121,
    poly: 1,
    data: {
      f: "Стремнова",
      i: "Ильина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 1,
      y: 2006,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 140,
      flat: 51,
    },
    diagnosis: 41.2,
    phone: ["+375292314939	485024"],
    comment: "Передана Сивцову",
  },

  {
    nCard: 2091,
    poly: 8,
    data: {
      f: "Терпилова",
      i: "Анна",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 25,
      m: 2,
      y: 1998,
    },
    city: "Город",
    adress: {
      street: "Независимости",
      home: 12,
      flat: 523,
    },
    diagnosis: 41.2,
    phone: ["+375290564702	158655"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 19857,
    poly: 4,
    data: {
      f: "Андерсон",
      i: "Ильина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 9,
      m: 3,
      y: 1964,
    },
    city: "Город",
    adress: {
      street: "Сидоровская",
      home: 51,
      flat: 806,
    },
    diagnosis: 43.27,
    phone: ["+375294214148	175193"],
    comment: "Передана Могилевскому",
  },

  {
    nCard: 5051,
    poly: 8,
    data: {
      f: "Петрова",
      i: "Анджолина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 6,
      m: 3,
      y: 1983,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 112,
      flat: 32,
    },
    diagnosis: 43.23,
    phone: ["+375292063999	890496"],
    comment: "МВД",
  },

  {
    nCard: 11088,
    poly: 10,
    data: {
      f: "Анальгинова",
      i: "Анна",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 15,
      m: 4,
      y: 1967,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 72,
      flat: 244,
    },
    diagnosis: 32.1,
    phone: ["+375299118405	948087"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 21080,
    poly: 9,
    data: {
      f: "Инлинова",
      i: "Виктория",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 1,
      y: 2012,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 36,
      flat: 198,
    },
    diagnosis: 51.0,
    phone: ["+375297635245	844976"],
    comment: "МВД",
  },

  {
    nCard: 2149,
    poly: 5,
    data: {
      f: "Иванова",
      i: "Елена",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 1,
      m: 4,
      y: 2016,
    },
    city: "Село",
    adress: {
      street: "Ивановская",
      home: 79,
      flat: 229,
    },
    diagnosis: 41.0,
    phone: ["+375290625753	691141"],
    comment: "Передана Сивцову",
  },

  {
    nCard: 7193,
    poly: 6,
    data: {
      f: "Петрова",
      i: "Эвелина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 8,
      m: 6,
      y: 1958,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 105,
      flat: 414,
    },
    diagnosis: 41.1,
    phone: ["+375290326814	132804"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 8617,
    poly: 2,
    data: {
      f: "Анальгинова",
      i: "Ильина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 27,
      m: 2,
      y: 1994,
    },
    city: "Город",
    adress: {
      street: "Петровская",
      home: 10,
      flat: 350,
    },
    diagnosis: 43.21,
    phone: ["+375295154163	656605"],
    comment: "Здорова",
  },

  {
    nCard: 20170,
    poly: 9,
    data: {
      f: "Петрова",
      i: "Виолетта",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 13,
      m: 9,
      y: 1969,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 52,
      flat: 310,
    },
    diagnosis: 41.1,
    phone: ["+375290663221	475078"],
    comment: "МВД",
  },

  {
    nCard: 22928,
    poly: 7,
    data: {
      f: "Петрова",
      i: "Октябрина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 13,
      m: 2,
      y: 1971,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 140,
      flat: 825,
    },
    diagnosis: 32.2,
    phone: ["+375294643234	967153"],
    comment: "Передана Сивцову",
  },

  {
    nCard: 6504,
    poly: 8,
    data: {
      f: "Андерсон",
      i: "Виктория",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 28,
      m: 12,
      y: 1987,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 80,
      flat: 817,
    },
    diagnosis: 43.27,
    phone: ["+375295737035	514609"],
    comment: "Здорова",
  },

  {
    nCard: 12536,
    poly: 10,
    data: {
      f: "Иванова",
      i: "Анджолина",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 21,
      m: 8,
      y: 1955,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 46,
      flat: 693,
    },
    diagnosis: 41.1,
    phone: ["+375292779394	945527"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 2777,
    poly: 10,
    data: {
      f: "Терпилова",
      i: "Ильина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 6,
      m: 3,
      y: 2017,
    },
    city: "Село",
    adress: {
      street: "Петропаловская",
      home: 41,
      flat: 340,
    },
    diagnosis: 43.26,
    phone: ["+375299252707	292568"],
    comment: "Передана Сивцову",
  },

  {
    nCard: 20569,
    poly: 3,
    data: {
      f: "Петрова",
      i: "Анна",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 8,
      y: 2016,
    },
    city: "Город",
    adress: {
      street: "Ивановская",
      home: 150,
      flat: 371,
    },
    diagnosis: 43.28,
    phone: ["+375291843018	327658"],
    comment: "Передана Сивцову",
  },

  {
    nCard: 9614,
    poly: 6,
    data: {
      f: "Терпилова",
      i: "Антонина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 26,
      m: 4,
      y: 1945,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 56,
      flat: 556,
    },
    diagnosis: 41.1,
    phone: ["+375297970209	398478"],
    comment: "Передана Могилевскому",
  },

  {
    nCard: 16518,
    poly: 2,
    data: {
      f: "Терпилова",
      i: "Ильина",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 26,
      m: 11,
      y: 1959,
    },
    city: "Город",
    adress: {
      street: "Ленина",
      home: 95,
      flat: 88,
    },
    diagnosis: 43.24,
    phone: ["+375291917135	653282"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 908,
    poly: 6,
    data: {
      f: "Терпилова",
      i: "Анджолина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 2,
      y: 1966,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 52,
      flat: 377,
    },
    diagnosis: 43.22,
    phone: ["+375297385947	409654"],
    comment: "МВД",
  },

  {
    nCard: 6875,
    poly: 3,
    data: {
      f: "Петрова",
      i: "Виктория",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 16,
      m: 12,
      y: 1964,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 1,
      flat: 15,
    },
    diagnosis: 41.0,
    phone: ["+375291546374	258166"],
    comment: "Передана Вериго",
  },

  {
    nCard: 6304,
    poly: 10,
    data: {
      f: "Альгердова",
      i: "Виктория",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 8,
      m: 1,
      y: 1969,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 115,
      flat: 311,
    },
    diagnosis: 41.0,
    phone: ["+375299186527	596347"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 11852,
    poly: 3,
    data: {
      f: "Альгердова",
      i: "Антонина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 12,
      y: 1964,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 63,
      flat: 687,
    },
    diagnosis: 41.0,
    phone: ["+375290796317	999183"],
    comment: "Передана Вериго",
  },

  {
    nCard: 7139,
    poly: 5,
    data: {
      f: "Петрова",
      i: "Анджолина",
      o: "Степановна",
    },
    sex: "Ж",
    birth: {
      d: 23,
      m: 9,
      y: 2012,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 93,
      flat: 496,
    },
    diagnosis: 43.23,
    phone: ["+375295958510	152235"],
    comment: "Здорова",
  },

  {
    nCard: 19117,
    poly: 6,
    data: {
      f: "Терпилова",
      i: "Ангелина",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 24,
      m: 2,
      y: 1948,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 19,
      flat: 497,
    },
    diagnosis: 43.23,
    phone: ["+375293417909	812664"],
    comment: "МВД",
  },

  {
    nCard: 14186,
    poly: 8,
    data: {
      f: "Стремнова",
      i: "Ангелина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 19,
      m: 3,
      y: 1998,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 89,
      flat: 236,
    },
    diagnosis: 41.0,
    phone: ["+375298590635	146203"],
    comment: "МВД",
  },

  {
    nCard: 12489,
    poly: 9,
    data: {
      f: "Иванова",
      i: "Анджолина",
      o: "Степановна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 2,
      y: 1986,
    },
    city: "Село",
    adress: {
      street: "Орджоникидзе",
      home: 9,
      flat: 591,
    },
    diagnosis: 43.28,
    phone: ["+375296735421	804445"],
    comment: "МВД",
  },

  {
    nCard: 13593,
    poly: 4,
    data: {
      f: "Анальгинова",
      i: "Анджолина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 5,
      m: 9,
      y: 1997,
    },
    city: "Город",
    adress: {
      street: "Ивановская",
      home: 84,
      flat: 373,
    },
    diagnosis: 43.23,
    phone: ["+375297473510	505247"],
    comment: "Передана Могилевскому",
  },

  {
    nCard: 8601,
    poly: 2,
    data: {
      f: "Альгердова",
      i: "Антонина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 20,
      m: 11,
      y: 2017,
    },
    city: "Село",
    adress: {
      street: "Петропаловская",
      home: 114,
      flat: 501,
    },
    diagnosis: 40.0,
    phone: ["+375297761817	410971"],
    comment: "МВД",
  },

  {
    nCard: 13469,
    poly: 1,
    data: {
      f: "Стремнова",
      i: "Ильина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 8,
      y: 2009,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 106,
      flat: 227,
    },
    diagnosis: 41.2,
    phone: ["+375297745957	364043"],
    comment: "Здорова",
  },

  {
    nCard: 4745,
    poly: 3,
    data: {
      f: "Петрова",
      i: "Антонина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 29,
      m: 2,
      y: 1983,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 53,
      flat: 206,
    },
    diagnosis: 43.27,
    phone: ["+375294411525	268361"],
    comment: "Здорова",
  },

  {
    nCard: 19133,
    poly: 3,
    data: {
      f: "Иванова",
      i: "Елена",
      o: "Степановна",
    },
    sex: "Ж",
    birth: {
      d: 21,
      m: 3,
      y: 1945,
    },
    city: "Город",
    adress: {
      street: "Ивановская",
      home: 149,
      flat: 494,
    },
    diagnosis: 32.3,
    phone: ["+375292657235	975452"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 2514,
    poly: 7,
    data: {
      f: "Петрова",
      i: "Ангелина",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 8,
      m: 4,
      y: 1963,
    },
    city: "Село",
    adress: {
      street: "Сидоровская",
      home: 42,
      flat: 632,
    },
    diagnosis: 43.26,
    phone: ["+375297581108	245823"],
    comment: "Здорова",
  },

  {
    nCard: 16811,
    poly: 10,
    data: {
      f: "Инлинова",
      i: "Эвелина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 9,
      y: 2021,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 100,
      flat: 198,
    },
    diagnosis: 43.25,
    phone: ["+375292053145	303912"],
    comment: "Передана Сивцову",
  },

  {
    nCard: 3122,
    poly: 8,
    data: {
      f: "Альгердова",
      i: "Ильина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 12,
      y: 2003,
    },
    city: "Село",
    adress: {
      street: "Орджоникидзе",
      home: 51,
      flat: 102,
    },
    diagnosis: 32.1,
    phone: ["+375299633090	982147"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 8078,
    poly: 5,
    data: {
      f: "Анальгинова",
      i: "Виолетта",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 4,
      m: 8,
      y: 1987,
    },
    city: "Город",
    adress: {
      street: "Сидоровская",
      home: 67,
      flat: 427,
    },
    diagnosis: 43.23,
    phone: ["+375295242655	379166"],
    comment: "Передана Вериго",
  },

  {
    nCard: 10483,
    poly: 1,
    data: {
      f: "Сидорова",
      i: "Анджолина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 24,
      m: 1,
      y: 1995,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 96,
      flat: 736,
    },
    diagnosis: 32.1,
    phone: ["+375293152551	151183"],
    comment: "Передана Могилевскому",
  },

  {
    nCard: 17613,
    poly: 6,
    data: {
      f: "Смит",
      i: "Елена",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 22,
      m: 6,
      y: 2002,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 106,
      flat: 507,
    },
    diagnosis: 43.25,
    phone: ["+375294484527	442742"],
    comment: "МВД",
  },

  {
    nCard: 14740,
    poly: 8,
    data: {
      f: "Терпилова",
      i: "Светлана",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 20,
      m: 6,
      y: 1992,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 123,
      flat: 621,
    },
    diagnosis: 43.27,
    phone: ["+375299584547	901255"],
    comment: "Передана Вериго",
  },

  {
    nCard: 17815,
    poly: 2,
    data: {
      f: "Инлинова",
      i: "Анна",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 7,
      m: 10,
      y: 1961,
    },
    city: "Село",
    adress: {
      street: "Орджоникидзе",
      home: 29,
      flat: 263,
    },
    diagnosis: 41.2,
    phone: ["+375298389595	308342"],
    comment: "МВД",
  },

  {
    nCard: 21472,
    poly: 5,
    data: {
      f: "Терпилова",
      i: "Антонина",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 9,
      m: 3,
      y: 1952,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 137,
      flat: 236,
    },
    diagnosis: 41.2,
    phone: ["+375291487321	816984"],
    comment: "Здорова",
  },

  {
    nCard: 21409,
    poly: 11,
    data: {
      f: "Анальгинова",
      i: "Октябрина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 30,
      m: 10,
      y: 1994,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 46,
      flat: 366,
    },
    diagnosis: 51.0,
    phone: ["+375291877040	972727"],
    comment: "Передана Сивцову",
  },

  {
    nCard: 3121,
    poly: 1,
    data: {
      f: "Стремнова",
      i: "Ильина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 17,
      m: 1,
      y: 2006,
    },
    city: "Город",
    adress: {
      street: "Петропаловская",
      home: 140,
      flat: 51,
    },
    diagnosis: 41.2,
    phone: ["+375292314939	485024"],
    comment: "Передана Сивцову",
  },

  {
    nCard: 2091,
    poly: 8,
    data: {
      f: "Терпилова",
      i: "Анна",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 25,
      m: 2,
      y: 1998,
    },
    city: "Город",
    adress: {
      street: "Независимости",
      home: 12,
      flat: 523,
    },
    diagnosis: 41.2,
    phone: ["+375290564702	158655"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 19857,
    poly: 4,
    data: {
      f: "Андерсон",
      i: "Ильина",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 9,
      m: 3,
      y: 1964,
    },
    city: "Город",
    adress: {
      street: "Сидоровская",
      home: 51,
      flat: 806,
    },
    diagnosis: 43.27,
    phone: ["+375294214148	175193"],
    comment: "Передана Могилевскому",
  },

  {
    nCard: 5051,
    poly: 8,
    data: {
      f: "Петрова",
      i: "Анджолина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 6,
      m: 3,
      y: 1983,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 112,
      flat: 32,
    },
    diagnosis: 43.23,
    phone: ["+375292063999	890496"],
    comment: "МВД",
  },

  {
    nCard: 11088,
    poly: 10,
    data: {
      f: "Анальгинова",
      i: "Анна",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 15,
      m: 4,
      y: 1967,
    },
    city: "Село",
    adress: {
      street: "Независимости",
      home: 72,
      flat: 244,
    },
    diagnosis: 32.1,
    phone: ["+375299118405	948087"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 21080,
    poly: 9,
    data: {
      f: "Инлинова",
      i: "Виктория",
      o: "Сигизмундовна",
    },
    sex: "Ж",
    birth: {
      d: 10,
      m: 1,
      y: 2012,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 36,
      flat: 198,
    },
    diagnosis: 51.0,
    phone: ["+375297635245	844976"],
    comment: "МВД",
  },

  {
    nCard: 2149,
    poly: 5,
    data: {
      f: "Иванова",
      i: "Елена",
      o: "Зигмундовна",
    },
    sex: "Ж",
    birth: {
      d: 1,
      m: 4,
      y: 2016,
    },
    city: "Село",
    adress: {
      street: "Ивановская",
      home: 79,
      flat: 229,
    },
    diagnosis: 41.0,
    phone: ["+375290625753	691141"],
    comment: "Передана Сивцову",
  },

  {
    nCard: 7193,
    poly: 6,
    data: {
      f: "Петрова",
      i: "Эвелина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 8,
      m: 6,
      y: 1958,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 105,
      flat: 414,
    },
    diagnosis: 41.1,
    phone: ["+375290326814	132804"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 8617,
    poly: 2,
    data: {
      f: "Анальгинова",
      i: "Ильина",
      o: "Антоновна",
    },
    sex: "Ж",
    birth: {
      d: 27,
      m: 2,
      y: 1994,
    },
    city: "Город",
    adress: {
      street: "Петровская",
      home: 10,
      flat: 350,
    },
    diagnosis: 43.21,
    phone: ["+375295154163	656605"],
    comment: "Здорова",
  },

  {
    nCard: 20170,
    poly: 9,
    data: {
      f: "Петрова",
      i: "Виолетта",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 13,
      m: 9,
      y: 1969,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 52,
      flat: 310,
    },
    diagnosis: 41.1,
    phone: ["+375290663221	475078"],
    comment: "МВД",
  },

  {
    nCard: 22928,
    poly: 7,
    data: {
      f: "Петрова",
      i: "Октябрина",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 13,
      m: 2,
      y: 1971,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 140,
      flat: 825,
    },
    diagnosis: 32.2,
    phone: ["+375294643234	967153"],
    comment: "Передана Сивцову",
  },

  {
    nCard: 6504,
    poly: 8,
    data: {
      f: "Андерсон",
      i: "Виктория",
      o: "Ивановна",
    },
    sex: "Ж",
    birth: {
      d: 28,
      m: 12,
      y: 1987,
    },
    city: "Город",
    adress: {
      street: "Орджоникидзе",
      home: 80,
      flat: 817,
    },
    diagnosis: 43.27,
    phone: ["+375295737035	514609"],
    comment: "Здорова",
  },

  {
    nCard: 12536,
    poly: 10,
    data: {
      f: "Иванова",
      i: "Анджолина",
      o: "Глафировна",
    },
    sex: "Ж",
    birth: {
      d: 21,
      m: 8,
      y: 1955,
    },
    city: "Село",
    adress: {
      street: "Петровская",
      home: 46,
      flat: 693,
    },
    diagnosis: 41.1,
    phone: ["+375292779394	945527"],
    comment: "Передана Вишневской",
  },

  {
    nCard: 2777,
    poly: 10,
    data: {
      f: "Терпилова",
      i: "Ильина",
      o: "Викторовна",
    },
    sex: "Ж",
    birth: {
      d: 6,
      m: 3,
      y: 2017,
    },
    city: "Село",
    adress: {
      street: "Петропаловская",
      home: 41,
      flat: 340,
    },
    diagnosis: 43.26,
    phone: ["+375299252707	292568"],
    comment: "Передана Сивцову",
  },
];
