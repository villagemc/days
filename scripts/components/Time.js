export default class Time {
  constructor(today) {
    this.today = today;
  }

  // Получаем оставшиеся дни:
  handleDay(day) {
    return Math.ceil(Math.abs(this.today - day) / (1000 * 60 * 60 * 24));
  }

  // В зависимости от числа возвращаем склоненную строку:
  containsDay(numDay) {
    const number = numDay % 100;
    const numberten = number % 10;

    if (number === 1) {
      return 'день'
    } else if (number > 1 && number < 5) {
      return 'дня'
    } else if (number > 20) {
      if (numberten === 1) {
        return 'день'
      } else if (numberten > 1 && numberten < 5) {
        return 'дня'
      } else {
        return 'дней'
      }
    } else {
      'дней'
    }
  }
}