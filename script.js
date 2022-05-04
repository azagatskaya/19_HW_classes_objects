'use strict';

// Getters and Setters

// class Person {
// 	constructor(name, birthYear) {
// 		this.name = name;
// 		this.birthYear = birthYear;
// 	}
// 	get age() {
// 		return new Date().getFullYear() - this.birthYear;
// 	}
// 	set age(value) {
// 		this.birthYear = new Date().getFullYear() - value;
// 	}
// }
// let me = new Person('Alya', '1984');
// console.log(me.age);
// console.log(typeof me);


// Практическое #1

class Worker {
	constructor(name, surname, rate, days, ) {
		this.name = name;
		this.surname = surname;
		this.rate = rate;
		this.days = days;
	}

	getSalary() {
		return this.rate * this.days;
	}
}

var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// Практическое #4

class Validator {
	isEmail(string) {
		let reg = /@\w+\.\w{2,3}(\.\w{2,3})?/; // /[@\.]/;
		return reg.test(string);
	}
	isDomain(string) {
		let reg = /\w+\.\w{2,3}(\.\w{2,3})?/;
		return reg.test(string);
	}
	isDate(string) {
		let reg = /(^\d{4}(\-|\/|\.|\s)\d{1,2}(\-|\/|\.|\s)\d{1,2}$)|(^\d{1,2}(\.|\-|\/)\d{1,2}(\.|\-|\/)\d{4}$)/;
		return reg.test(string);
	}
	isPhone(string) {
		let reg = /\+?(7|8)(\-|\s)?\(?9\d{2}\)?(\.|\s|\-)?\d{3}(\.|\s|\-)?\d{2}(\.|\s|\-)?\d{2}/;
		return reg.test(string);
	}
}

class ValidatorStatic {
	static isEmail(string) {
		let reg = /@\w+\.\w{2,3}(\.\w{2,3})?/; // /[@\.]/;
		return reg.test(string);
	}
	static isDomain(string) {
		let reg = /\w+\.\w{2,3}(\.\w{2,3})?/;
		return reg.test(string);
	}
	static isDate(string) {
		let reg = /(^\d{4}(\-|\/|\.|\s)\d{1,2}(\-|\/|\.|\s)\d{1,2}$)|(^\d{1,2}(\.|\-|\/)\d{1,2}(\.|\-|\/)\d{4}$)/;
		return reg.test(string);
	}
	static isPhone(string) {
		let reg = /\+?(7|8)(\-|\(|\s)?9\d{2}\)?(\.|\s|\-)?\d{3}(\.|\s|\-)?\d{2}(\.|\s|\-)?\d{2}/;
		return reg.test(string);
	}
}

var validator = new Validator();
console.log(validator.isEmail('alisa@mail.ru'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('21-05-2021'));
console.log(validator.isPhone('8(910)123-45-67')); //тут используем формат своей страны

//а статическая так
console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('12.05.2021'));
console.log(ValidatorStatic.isPhone('8(910)123-45-67')); //тут используем формат своей страны