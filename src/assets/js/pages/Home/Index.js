import Navbar from '../../components/Navbar';
import './Index.scss';
import PageLoader from '../../components/PageLoader';
console.log('page loader', PageLoader);

export function render(anime) {
	new Vue({
		el: '#home',
		components: {
			'navbar-a': Navbar,
			'page-loader': PageLoader
		},
		data() {
			return {
				toggleMenu: false,
				items: [ 'items', 'items', 'items', 'items', 'items' ]
			};
		},
		mounted() {
			this.animatedItems();
		},
		methods: {
			animatedItems() {
				anime({
					targets: '.item',
					translateY: [ 140, 0 ],
					delay: anime.stagger(50, { from: 'center' }),
					duration: 1300,
					easing: 'easeInOutBack'
				});
			},
			openMenu() {
				this.toggleMenu = !this.toggleMenu;
			}
		}
	});
}
