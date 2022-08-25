#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const date = new Date()
const monthArray = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
const addBoolean = true

const argv = yargs(hideBin(process.argv))
	.option('year', {
		alias: 'y',
		type: 'boolean',
		description: 'year'
	})
	.option('month', {
		alias: 'm',
		type: 'boolean',
		description: 'month',
	})
	.option('date', {
		alias: 'd',
		type: 'boolean',
		description: 'date',
	})
	.argv

yargs(hideBin(process.argv))
	.command('current', 'current date', () => {
		if (argv.year) {
			console.log(date.getFullYear())
		}
		else if (argv.month) {
			console.log(monthArray[date.getMonth()])
		}
		else if (argv.date) {
			console.log(date.getDate())
		}
		else {
			console.log(date)
		}
	})
	.command('add', 'add date', () => {
		const num = argv._[argv._.length - 1]
		if (argv.year) {
			console.log(new Date(changeDate(num, 'y', addBoolean)))
		}
		else if (argv.month) {
			console.log(new Date(changeDate(num, 'm', addBoolean)))
		}
		else if (argv.date) {
			console.log(new Date(changeDate(num, 'd', addBoolean)))
		}
		else {
			console.log('add change')
		}
	})
	.command('sub', 'sub date', () => {
		const num = argv._[argv._.length - 1]
		if (argv.year) {
			console.log(new Date(changeDate(num, 'y', !addBoolean)))
		}
		else if (argv.month) {
			console.log(new Date(changeDate(num, 'm', !addBoolean)))
		}
		else if (argv.date) {
			console.log(new Date(changeDate(num, 'd', !addBoolean)))
		}
		else {
			console.log('add change')
		}
	})
	.argv

function changeDate(num, str, flag) {
	let dateCopy = date
	switch (str) {
		case 'y':
			return flag ? dateCopy.setFullYear(date.getFullYear() + num) : dateCopy.setFullYear(date.getFullYear() - num)
			break
		case 'm':
			return flag ? dateCopy.setMonth(date.getMonth() + num) : dateCopy.setMonth(date.getMonth() - num)
			break
		case 'd':
			return flag ? dateCopy.setDate(date.getDate() + num) : dateCopy.setDate(date.getDate() - num)
			break
	}
}
