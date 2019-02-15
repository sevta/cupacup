import './index.scss';
export function render(anime) {
	console.log('menu');
	new Vue({
		el: '.menu-full',
		data() {
			return {
				menuItem: [ 'menu', 'menu', 'menu', 'menu', 'menu' ]
			};
		},
		mounted() {
			this.animatedMenuItems();
			console.log('menu mounted');
		},
		methods: {
			onCloseClick() {
				console.log('close');
				anime({
					targets: '.menu-full',
					translateY: {
						value: '20%'
					},
					opacity: 0
				});
			},
			animatedMenuItems() {}
		}
	});
}
