<header>
	<div class="drawer">
		<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content flex flex-col">
			<!-- Navbar -->
			<div class="w-full navbar bg-base-300">
				<div class="flex-none lg:hidden">
					<label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="inline-block w-6 h-6 stroke-current"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/></svg
						>
					</label>
				</div>
				<div class="avatar">
					<div class="w-16 rounded">
						<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
					</div>
				</div>
				<div class="flex-1 px-2 mx-2"><a href="/"><span class="text-5xl">👽</span></a></div>
				<div class="flex-none hidden lg:block">
					<ul class="menu menu-horizontal">
						<!-- Navbar menu content here -->
						<li><a href="/">🏠Home</a></li>
						<li><a href="/about">📃About</a></li>
						<li><a href="/sverdle">💩Shirdle</a></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="drawer-side">
			<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay" />
			<ul class="menu p-4 w-80 min-h-full bg-base-200">
				<!-- Sidebar content here -->
				<li><a href="/">🏠Home</a></li>
				<li><a href="/about">📃About</a></li>
				<li><a href="/sverdle">💩Shirdle</a></li>
			</ul>
		</div>
	</div>
</header>
