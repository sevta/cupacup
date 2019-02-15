import Navbar from '../../components/Navbar';
import './index.scss';

export async function render() {
	console.log('profile');

	new Vue({
		el: '#profile',
		data() {
			return {
				title: 'profile'
			};
		},
		components: {
			'navbar-a': Navbar
		}
	});
}
