import anime from 'animejs';
let page = window.location.href.split('/').pop();

function loadCSS(src) {
	if (Array.isArray(src)) {
		src.forEach((el) => {
			return createCSSLink(el);
		});
	} else {
		createCSSLink(src);
	}

	function createCSSLink(href) {
		let head = document.getElementsByTagName('head')[0];
		let link = document.createElement('link');
		link.rel = 'stylesheet';
		link.type = 'text/css';
		link.href = href;
		link.media = 'all';
		head.appendChild(link);
	}
}

function loadJS(page) {
	import('./main.scss').then(() => {
		switch (page) {
			case 'index.html': {
				import('./pages/Home').then((page) => page.render(anime));
				break;
			}
			case 'about.html': {
				import('./pages/About').then((page) => page.render());
				break;
			}
		}
	});
}

// if use css directly
// loadCSS('https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css');
window.onload = () => loadJS(page);
