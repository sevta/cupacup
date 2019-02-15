import { isObject } from 'util';

const myModule = (function() {
	const version = 0.01;
	let settings = {};

	return {
		get() {
			return {
				version,
				settings
			};
		},

		select(el) {
			document.querySelector(el);
		},

		setSettings(val) {
			return new Promise((resolve, reject) => {
				if (isObject(val)) {
					Object.assign(settings, val);
					resolve(settings);
				}
				reject('Err');
				console.log('value must be an object');
			});
		},

		random(max) {
			return Math.floor(Math.random() * max);
		}
	};
})();

export default myModule;
