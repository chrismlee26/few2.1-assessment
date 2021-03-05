const { months, mons, days, dys } = require('./utils')

/**
 * class D create a new date
 * @param {Year, Month, Day, Hours, Minutes, Seconds}
 * @param {Year} @returns the full year
 * @param {yr} @returns the last 2 digits of year
 * @param {month} @returns the full month name
 * @param {mon} @returns the first 3 letters of month name
 * @param {day} @returns the day of the week as full word 
 * @param {dy} @returns the first 3 letters of the day word
 * @param {date} @returns the date in ##
 * @param {hours} @returns the hour of the date, padded with 0 if single digit
 * @param {hrs} @returns the hour of the date, unpadded
 * @param {minutes} @returns the minutes of the date, padded with 0 if single digit
 * @param {mins} @returns the minutes of the date, unpadded
 * @param {seconds} @returns the seconds of the date, padded with 0 if single digit
 * @param {secs} @returns the seconds of the date, unpadded
 */


class D {
  constructor(...args) {
    this._date = new Date(...args)
  }

  get year() {
    return this._date.getFullYear()
  }

  get yr() {
    if ((this._date.getFullYear() % 100) < 10) {
      return 0 +[this._date.getFullYear() % 100]
    } else {
      return this._date.getFullYear() % 100
    }
  }

  get month() {
    return months[this._date.getMonth()]
  }

  get mon() {
    return mons[this._date.getMonth()]
  }

  get day() {
    return days[this._date.getDay()]
  }

  get dy() {
    return dys[this._date.getDay()]
  }

  get date() {
    return this._date.getDate()
  }

  get hours() {
    if ([this._date.getHours()] < 10) {
      return 0 + [this._date.getHours()]
    } else {
    return this._date.getHours()
    }
  }

  get hrs() {
    return this._date.getHours()
  }

  get minutes() {
    if ([this._date.getMinutes()] < 10) {
      return 0 + [this._date.getMinutes()]
    } else {
    return this._date.getMinutes()
    }
  }

  get mins() {
    return this._date.getMinutes()
  }

  get seconds() {
    if ([this._date.getSeconds()] < 10) {
      return 0 + [this._date.getSeconds()]
    } else {
    return this._date.getSeconds()
    }
  }

  get secs() {
    return this._date.getSeconds()
  }

  /**
   * format function masks params for easier usage with the getter methods
   * @param {Y} gives the year in full '2021'
   * @param {y} gives the year in short '21'
   * @param {M} gives the month in full 'January'
   * @param {m} gives the month in short 'Feb'
   * @param {D} gives the day in full '09'
   * @param {d} gives the day in short '9'
   * @param {t} gives the date in short '21'
   * @param {H} gives the hour in full '07'
   * @param {h} gives the hour in short '7'
   * @param {I} gives the minute in full '05'
   * @param {i} gives the minute in short '5'
   * @param {S} gives the second in full '01'
   * @param {s} gives the second in short '1'
   */
  format(dateFormat='D, m t, Y') {
    const dateDict = {    
      "Y" : this.year, //Year full ('2021')
      "y" : this.yr, // Year short ('21')
      "M" : this.month, // Month full ('January')
      "m" : this.mon, // Month short ('Jan')
      "D" : this.day, //Day full ('Tuesday')
      "d" : this.dy, //Day short ('Tue')
      "t" : this.date, //Date short
      "H" : this.hours, // Hours full ('06")
      "h" : this.hrs, // Hours short ('6')
      "I" : this.minutes, // Minutes full ('05')
      "i" : this.mins, // Minutes short ('5')
      "S" : this.seconds, // Seconds full ('09')
      "s" : this.secs //  Seconds short ('9')
    }

    let outputString = ''
    for (let i = 0; i < dateFormat.length; i++) { //for loop, i counts dateFormat string
      if (dateDict[dateFormat[i]] === undefined) { //look through dateDict to find out if called by dateFormat
        // add the character from formatString append to output string character [dateFormat[i]]
        outputString += dateFormat[i]
      } else { 
        // add the value from the dict to output string [date dict]
        outputString += dateDict[dateFormat[i]] //append that value at key [i] to output string
      }
    }
    return outputString
  }

  /**
   * when gives a description of when a date will occur
   * works for past or future dates
   * const exDateYear = new D(2025, 1, 1, 1, 1, 1)
   * exDateYear.when()
   */

  when() {
    const when = new D()
    const calcYear = this.year - when.year
    const calcMonth = this._date.getMonth() - when._date.getMonth() + (calcYear * 12)
    const calcDay = this._date.getDay() - when._date.getDay()
    const calcHours = this._date.getHours() - when._date.getHours() + (calcDay * 24)

    if (calcMonth > 11) {
      return `This is ${calcYear} year(s) from now`
    } else if (calcMonth < -11) {
      return `This was ${Math.abs(calcYear)} year(s) ago`
    } else if (calcMonth > 0 ) {
      return `This is ${calcMonth} month(s) from now`
    } else if (calcMonth < 0) {
      return `This was ${Math.abs(calcMonth) } month(s) ago` 
    } else if (calcHours > 23) {
      return `This is ${Math.abs(calcDay)} day(s) from now`
    } else if (calcHours < -23) {
      return `This was ${Math.abs(calcDay)} day(s) ago`
    } else {
      return 'Enter a date: (Year, Month, Day, Hour, Minutes, Seconds)'
    }
  }
}

// Test for Parts 1 - 3
// const a = new D()
// const b = a.format('') //Test here for date lib
// console.log(b)

// Test for Empty Return on D
// const c = a.format()
// console.log(c)

// Test for Part 4: Years, Months, Days
// const f = new D(2021, 1, 8, 0, 0, 0)
// console.log(f.when())


// const exDateYear = new D(2025, 1, 1, 1, 1, 1)
// const exDateMonth = new D(2021, 4, 1, 1, 1, 1)
// const exDateDay = new D(2021, 1, 16, 1, 1, 1)
// console.log(exDateYear.when())
// console.log(exDateMonth.when())
// console.log(exDateDay.when())


// const exDate = new D(2001, 8, 20, 1, 2, 3)
// console.log(exDate.format('Y,y / M,m / D,d / t / H,h / I,i / S,s'))


// const exDateDay = new D(2021, 1, 25, 16, 16, 1)
// console.log(exDateDay)

module.exports = D