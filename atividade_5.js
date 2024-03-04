class Calendar {
  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

	/**
	 * Calcula dias entre datas
	 * 
	 * @param date
	 */
  calculateDays(date) {
    const date_1 = new Date(this.year, this.month - 1, this.day);
    const date_2 = new Date(date.year, date.month - 1, date.day);
    const milliseconds = Math.abs(date_2 - date_1);
    return Math.floor(milliseconds / (1000 * 60 * 60 * 24));
  }
}

const calendar = new Calendar(1, 3, 2023);
const date = { day: 1, month: 3, year: 2024 };
const days = calendar.calculateDays(date);

console.log('Diferença de dias:', days);
