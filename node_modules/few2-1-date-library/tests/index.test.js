const D = require('../src/index')
const { months, mons, days, dys } = require('../src/utils')

const today = new Date()
const E = new D()
const exDate = new D(2001, 8, 20, 1, 2, 3)
const exDateYear = new D(2025, 1, 1, 1, 1, 1)
const exDateMonth = new D(2021, 4, 1, 1, 1, 1)
const exDateDay = new D(2021, 1, 25, 16, 16, 1)
const exDateYearPast = new D(2017, 1, 1, 1, 1, 1)
const exDateMonthPast = new D(2021, 0, 1, 1, 1, 1)
const exDateDayPast = new D(2021, 1, 4, 16, 16, 1)

test('E.year', () => {
  expect(E.year).toBe(today.getFullYear())
})

test('E.yr', () => {
  expect(E.yr).toBe(today.getFullYear() % 100)
})

test('E.month', () => {
  expect(E.month).toBe('February')
})

test('E.mon', () => {
  expect(E.mon).toBe('Feb')
})

test('exDate.day', () => {
  expect(exDate.day).toBe('Thursday')
})

test('exDate.dy', () => {
  expect(exDate.dy).toBe('Thu')
})

test('E.date', () => {
  expect(E.date).toBe(today.getDate())
})

test('exDate.hours', () => {
  expect(E.hours).toBe(today.getHours())
})

test('E.hrs', () => {
  expect(E.hrs).toBe(today.getHours())
})

test('E.minutes', () => {
  expect(E.minutes).toBe(today.getMinutes())
  expect(exDateDay.minutes).toBe(16)
})

test('E.mins', () => {
  expect(E.mins).toBe(today.getMinutes())
})

test('E.seconds', () => {
  expect(E.seconds).toBe(today.getSeconds())
})

test('E.secs', () => {
  expect(E.secs).toBe(today.getSeconds())
})

test('E.format', () => {
  expect(exDate.format()).toBe('Thursday, Sep 20, 2001')
})

test('exDate.format', () => {
  expect(exDate.format('Y,y / M,m / D,d / t / H,h / I,i / S,s')).toBe('2001,01 / September,Sep / Thursday,Thu / 20 / 01,1 / 02,2 / 03,3')
})

// test('exDate.when', () => {
//   expect(exDateYear.when()).toBe('This is 4 year(s) from now')
//   expect(exDateMonth.when()).toBe('This is 3 month(s) from now')
//   expect(exDateDay.when()).toBe('This is 4 day(s) from now') 
//   expect(exDateYearPast.when()).toBe('This was 4 year(s) ago')
//   expect(exDateMonthPast.when()).toBe('This was 1 month(s) ago')
//   expect(exDateDayPast.when()).toBe('This was 2 day(s) ago') 
// })