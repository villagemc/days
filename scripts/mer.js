import Copy from "./components/Copy.js";
import Holidays from "./components/Holidays.js";
import Period from "./components/Period.js";
import Time from "./components/Time.js";

import {
  button,
  days,
  happy,
  holidays,
  newYear,
  newYearDate,
  page,
  site,
  status,
  today,
  war,
  warDate
} from "./const.js";

// Выдаем ссылку:
site.textContent = site.href = window.location.href;

// Картинки при смене года:
page.style.backgroundImage = `url(./images/${Period()}.gif)`;

// День Рождения:
const filterHolidays = holidays.filter(date => 
  date.day === today.getDate() && date.month === today.getMonth()
)

const happyDay = new Holidays(filterHolidays, happy).getDayText();
happy.textContent = happyDay;

// Время:
const time = new Time(today);

const textDateWar = time.handleDay(warDate);
const textDateYear = time.handleDay(newYearDate);
const countDayYear = time.containsDay(textDateYear);

war.textContent = textDateWar;
newYear.textContent = textDateYear;
days.textContent = countDayYear;

// Копирование текста:
const copy = new Copy(status);
const copyText = copy.text();

button.addEventListener('click', copyText);