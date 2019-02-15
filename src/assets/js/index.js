import anime from 'animejs';
import AOS from 'aos';
import 'aos/dist/aos';
let page = window.location.href.split('/').pop();

console.log('AOS here', AOS);

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

// global script
function runGlobalScript() {
	document.querySelector('.menu-full span').addEventListener('click', () => {
		let menuAnimation = anime({
			targets: '.menu-full',
			translateY: '40%',
			opacity: 0
		});

		menuAnimation.finished.then(() => {
			document.querySelector('.menu-full').classList.add('hidden');
		});
	});
}

async function loadJS(src) {
	// load globaly js here
	const navbar = await import('./components/Navbar');
	const menu = await import('./components/Menu');
	await import('./main.scss');
	navbar.render(anime);
	menu.render(anime);

	let page = null;
	switch (src) {
		case 'index.html': {
			page = await import('./pages/Home');
			page.render(anime);
			break;
		}
		case 'profile.html': {
			page = await import('./pages/Profile');
			page.render();
			break;
		}
		case 'about.html': {
			page = await import('./pages/About');
			page.render();
			break;
		}
	}
}

// if use css directly
// loadCSS('https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css');
window.onload = () => {
	runGlobalScript();
	loadJS(page);
};
