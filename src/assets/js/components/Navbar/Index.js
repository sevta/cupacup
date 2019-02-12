export default function() {
	return import('./Index.scss').then(() => {
		return Vue.component('navbar', {
			data() {
				return {
					title: 'navbar'
				};
			},
			props: {
				onBurgerClick: {
					type: Function
				}
			},
			methods: {
				redirect() {
					let url = window.location.href.split('/');
					console.log('url', url);
				}
			},
			render(h) {
				return (
					<div class="navbar w-ful pb-5 py-10 px-3 ">
						<div class="container mx-auto flex items-center justify-between">
							<div class="left">
								<a
									onClick={this.redirect}
									href="http://127.0.0.1:5500/public/index.html"
									class="uppercase cursor-pointer text-xl font-bold no-underline text-black"
								>
									logo
								</a>
							</div>
							<div class="right">
								<div class="inner-right flex items-center">
									<div class="logo font-bold text-xl mr-2 uppercase">chupa chups</div>
									<div
										class="burger cursor-pointer flex flex-col justify-around"
										onClick={this.onBurgerClick}
									>
										<span class="line" />
										<span class="line" />
										<span class="line" />
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			}
		});
	});
}
