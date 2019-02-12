import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import './Index.scss';

export function render() {
	console.log('About is about');
	new Vue({
		el: '#about',
		components: {
			'navbar-a': Navbar,
			'button-a': Button
		},
		methods: {
			open() {
				alert('open');
			}
		},
		data() {
			return {
				title: 'about'
			};
		}
	});
}
