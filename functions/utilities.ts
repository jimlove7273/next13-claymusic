type MonthFormatKey = 'short' | 'full';

const monthFormat = [
    {m: 1, short: 'Jan', full: 'January'},
    {m: 2, short: 'Feb', full: 'February'},
    {m: 3, short: 'Mar', full: 'March'},
    {m: 4, short: 'Apr', full: 'April'},
    {m: 5, short: 'May', full: 'May'},
    {m: 6, short: 'Jun', full: 'June'},
    {m: 7, short: 'Jul', full: 'July'},
    {m: 8, short: 'Aug', full: 'August'},
    {m: 9, short: 'Sep', full: 'September'},
    {m: 10, short: 'Oct', full: 'October'},
    {m: 11, short: 'Nov', full: 'November'},
    {m: 12, short: 'Dec', full: 'December'},
];

export function monthNumtoStr(inMonth: number, outFormat: MonthFormatKey) {
    const filteredMonth = monthFormat.find(m => m.m === inMonth);
    return filteredMonth && filteredMonth[outFormat]
}

export function parseDate(concertDate: any) {
    const date = new Date(concertDate);

    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const time = date.toLocaleTimeString();

    //console.log('parsedDate', { month, day, year, time });
    return { month, day, year, time };
  };