export default function() {
	return import('./Index.scss').then(() => {
		return Vue.component('button-p', {
			render(h) {
				return <button class="bg-teal text-white rounded py-2 px-4">hellow im button</button>;
			}
		});
	});
}
