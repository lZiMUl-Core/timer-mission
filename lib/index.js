'use strict';

const {
	EventEmitter
} = require('events');

class TimerMission extends EventEmitter {
	static core = null;
	static recycle = false;
	static maximum = 10;

	constructor(configs, callback) {
		super(...arguments);
		this.configs = configs.map((value, index) => Object.assign(value, {
			done: false
		}));
		TimerMission.core = setInterval(() => {
			this.configs.forEach(({
				event,
				timer
			}, index, arr) => {
			if(timer.replaceAll(' ', '') === this.times().join(':'))
				arr[index].done = true;
				const toNumber = timer.replaceAll(' ', '').split(':').map(value => Number(value));
				if(this.judge(toNumber))
				super.emit(event, {
					list: this.configs,
					timer: this.times(),
					addEventConfiger: config => {
						this.configs.push(Object.assign(config, {
							done: false
						}));
					},
					addEventListener: this.addEventListener,
					recycle (status) {
						if(Object.prototype.toString.call(status) === '[object Boolean]')
						TimerMission.recycle = status;
					},
					maximum (numerical) {
						if(Object.prototype.toString.call(numerical) === '[object Number]')
						TimerMission.maximum = numerical;
					},
					close: TimerMission.close
				});
			});
			TimerMission.recycleBin.apply(this, [TimerMission.recycle, TimerMission.maximum]);
			callback? callback(this.times()): null;
		}, 1000);
	}
	
	addEventListener(event, callback) {
		super.addListener(event, callback);
	}
	
	judge(time) {
		return Array.from(new Set(this.times().map((value, index) => value === time[index]))).indexOf(false) === -1;
	}
	
	times() {
		const Times = new Date;
		return [
			Times.getHours(),
			Times.getMinutes(),
			Times.getSeconds()
		];
	}
	
	recycle (status) {
		if(Object.prototype.toString.call(status) === '[object Boolean]')
		TimerMission.recycle = status;
	}
	
	maximum (numerical) {
		if(Object.prototype.toString.call(numerical) === '[object Number]')
		TimerMission.maximum = numerical;
	}

	static recycleBin(recycle, maximum) {
		if(recycle && this.configs.length >= maximum)
		this.configs.forEach((value, index, arr) => {
			if(value.done)
			arr.splice(index, 1);
		});
	}
	
	close() {
		clearInterval(TimerMission.core);
	}
};

module.exports = TimerMission;