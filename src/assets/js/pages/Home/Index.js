import Navbar from '../../components/Navbar';
import './Index.scss';
import PageLoader from '../../components/PageLoader';

export function render(anime) {
	new Vue({
		el: '#home',
		components: {
			'navbar-a': Navbar,
			'page-loader': PageLoader
		},
		data() {
			return {
				items: [ 'items', 'items', 'items', 'items' ],
				navbarHeight: 92,
				navbarType: 'primary'
			};
		},
		mounted() {
			this.animatedItems();
			this.onScroll();
		},
		methods: {
			animatedItems() {
				anime({
					targets: '.item',
					translateY: [ 100, 0 ],
					delay: anime.stagger(60, { from: 'center' }),
					duration: 1200,
					easing: 'easeInOutBack'
				});
			},
			onScroll() {
				window.onscroll = (e) => {
					let position = window.scrollY;
					if (position > this.navbarHeight) {
						console.log('okay give new navbar');
					} else {
						console.log('remove this');
					}
				};
			}
		}
	});
}
