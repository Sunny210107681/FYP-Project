<template>
	<nav>
		<div
			class="container flex flex-col items-center justify-between gap-5 py-5 sm:flex-row"
		>
			<NuxtLink
				to="/"
				class="cursor-pointer"
			>
				<h3 class="text-3xl font-semibold text-primary">AI Health</h3>
			</NuxtLink>
			<div class="space-x-4">
				<button
					class="cursor-pointer rounded-lg border-2 border-primary bg-red-200 p-3 px-5 font-medium text-primary"
				>
					Get help now
				</button>
				<button
					class="cursor-pointer rounded-lg border-2 border-primary bg-green-200 p-3 px-5 font-medium text-primary"
				>
					Make a donation
				</button>
			</div>
		</div>
		<div class="bg-primary">
			<ul
				class="container flex h-20 items-center justify-center gap-5 font-semibold text-white *:cursor-pointer"
			>
				<li>
					<NuxtLink to="/faq">FAQ</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/contact">Contact</NuxtLink>
				</li>
				<li><NuxtLink to="/blogs">Blogs</NuxtLink></li>
			</ul>
		</div>
	</nav>
</template>
