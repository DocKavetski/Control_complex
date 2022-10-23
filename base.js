function Patient(
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
  ['Красного флота', 4, 12],
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
 ['Красного флота', 4, 12],
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
  ['Дворцовая', 4, 12],
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
  ['Демонская', 4, 12],
  "F45.0",
  "+375291234567, +475985240592, +475985240509",
  "Передана"
);
 