import './Index.scss';
export function render(anime) {
	new Vue({
		el: '.navbar',
		mounted() {
			console.log('navbar mounted');
			window.onscroll = function(evt) {
				console.log('on scroll');
			};
		},
		methods: {
			toggleMenu() {
				document.querySelector('.menu-full').classList.remove('hidden');
				anime({
					targets: '.menu-full',
					translateY: [ '-50%', '0%' ],
					opacity: [ 0, 1 ]
				});
				anime({
					targets: '.menu-item',
					translateY: [ 200, 0 ],
					scale: [ 0, 1 ],
					opacity: [ 0, 1 ],
					delay: anime.stagger(100),
					duration: 1400
				});
			}
		}
	});
	console.log('render navbar');
}
