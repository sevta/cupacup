export default function() {
	Vue.component('page-loader', {
		render(h) {
			return (
				<div class="page-loader fixed z-50 pin-y pin-x bg-teal flex items-center justify-center">
					<h1>Loading...</h1>
				</div>
			);
		}
	});
}
