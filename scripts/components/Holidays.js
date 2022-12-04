export default class Holidays {
  constructor(filterHolidays, happy) {
    this.filterHolidays = filterHolidays;
    this.happy = happy;
  }

  getDayText() {
    if (this.filterHolidays.length > 0) {
      const mapHolidays = this.filterHolidays.map(date => 
        `*id${date.id} (${date.name})`
      )

      this.happy.style.display = 'inline';

      return `С Днём Рождения, ${mapHolidays.join(', ')}`;
    } else {
      this.happy.style.display = 'none';
      
      return '';
    }
  }

}