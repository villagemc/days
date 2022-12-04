// Элементы:
export const page = document.querySelector('.page');
export const newYear = document.querySelector('.newYear');
export const war = document.querySelector('.war');
export const days = document.querySelector('.days');
export const site = document.querySelector('.site');
export const happy = document.querySelector('.happy');
export const status = document.querySelector('.status');
export const button = document.querySelector('.button');

// Время:
export const today = new Date();
export const warDate = new Date(2022, 1, 24);
export const newYearDate = new Date(today.getFullYear() + 1, 0, 1);

// Дни Рождения:
export const holidays = [
  { id: '343412962', name: 'Лиза', month: 0, day: 9 },
  { id: '500002699', name: 'Никита', month: 0, day: 10 },
  { id: '218030288', name: 'Айзирек', month: 0, day: 10 },
  { id: '445595194', name: 'Вера', month: 0, day: 18},
  { id: '202173657', name: 'Данил', month: 0, day: 23},
  { id: '440813761', name: 'Катерина', month: 0, day: 28},
  { id: '488259505', name: 'Глеб', month: 2, day: 12},
  { id: '435042002', name: 'Ян', month: 2, day: 13},
  { id: '176690781', name: 'Кирилл', month: 2, day: 22},
  { id: '392109682', name: 'Славик', month: 2, day: 22},
  { id: '240513839', name: 'Ромик', month: 2, day: 28},
  { id: '559905257', name: 'Алиса', month: 3, day: 25},
  { id: '163036218', name: 'Вадик', month: 3, day: 25},
  { id: '261234564', name: 'Люба', month: 4, day: 17},
  { id: '303513551', name: 'Дмитрий', month: 4, day: 28},
  { id: '377866508', name: 'Виталина', month: 5, day: 2},
  { id: '330732359', name: 'Данила', month: 5, day: 13},
  { id: '337608666', name: 'Валерия', month: 5, day: 23},
  { id: '160763010', name: 'ТенВен', month: 5, day: 24},
  { id: '422119880', name: 'Виктория', month: 6, day: 3},
  { id: '180448098', name: 'Пожилая', month: 6, day: 7},
  { id: '291086722', name: 'Егорка', month: 6, day: 21},
  { id: '442414225', name: 'Яна', month: 7, day: 21},
  { id: '644044581', name: 'Заебумба', month: 8, day: 2},
  { id: '65051318', name: 'Сергей', month: 8, day: 24},
  { id: '560574440', name: 'Владик', month: 9, day: 4},
  { id: '228811346', name: 'Уля', month: 9, day: 7},
  { id: '222515278', name: 'Мiша', month: 9, day: 9},
  { id: '605451582', name: 'Ромик', month: 9, day: 11},
  { id: '122108131', name: 'Стасон', month: 9, day: 18},
  { id: '303931067', name: 'Женя', month: 9, day: 25},
  { id: '200347264', name: 'Даша', month: 9, day: 26},
  { id: '121810945', name: 'Катон', month: 10, day: 26},
  { id: '477589360', name: 'Валера', month: 10, day: 28},
  { id: '306774131', name: 'Виктория', month: 11, day: 4}
];