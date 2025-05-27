<script setup lang="ts">
useHead({ title: 'AI Health' });
</script>

<template>
	<div class="bg-[url('/images/health-banner.jpg')]">
		<div class="container min-h-[400px]">
			<div
				class="mx-5 ml-5 min-h-[400px] max-w-[400px] bg-white/80 p-5 sm:ml-[10%]"
			>
				<h1 class="font-Tagesschrift text-4xl font-semibold leading-relaxed">
					This is the future to Mental Health Aid as its got a chatbot available
					24/7 for anyone
				</h1>
			</div>
		</div>
	</div>
	<div class="bg-primary">
		<div class="mx-auto flex w-full max-w-[800px] flex-col gap-5 px-10 py-5">
			<div class="self-start">
				<div class="arrow-right ml-[10%]" />
				<div
					class="inline-block rounded-full bg-secondary p-3 px-5 pr-10 text-primary"
				>
					This is some dummy text
				</div>
			</div>
			<div class="self-end">
				<div class="arrow-left ml-[80%]" />
				<div class="inline-block rounded-full bg-white p-3 px-5 pr-10">
					This is some dummy text
				</div>
			</div>
		</div>
	</div>
	<div class="bg-secondary">
		<div
			class="mx-auto flex w-full max-w-[850px] flex-col items-center gap-10 px-5 py-10 sm:flex-row sm:gap-5"
		>
			<h1 class="grow-3 text-3xl font-medium text-primary">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cum
				suscipit consectetur, beatae saepe iste doloribus impedit
			</h1>
			<NuxtImg
				src="/images/smiling-person.jpg"
				alt="A Smiling Person"
				class="grow-2 rounded"
				width="300"
				height="300"
			/>
		</div>
	</div>
	<div class="container max-w-6xl">
		<div class="grid place-items-center gap-5 py-5 sm:grid-cols-[1fr_2fr]">
			<img
				src="https://picsum.photos/300/300"
				alt=""
			/>
			<div class="space-y-3 py-5">
				<h1 class="text-3xl font-semibold">Information And Support</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, magni
					error in veniam aperiam esse, repudiandae odit inventore aut
					accusantium nemo nam commodi id aspernatur mollitia sed! Quod, dolore
					voluptate.
				</p>
				<button
					class="block rounded border-2 border-primary bg-primary px-5 py-3 font-medium text-white transition duration-500 hover:bg-white hover:text-primary max-sm:mx-auto"
				>
					Find Information and Support
				</button>
			</div>
		</div>
		<div class="grid place-items-center gap-5 py-5 sm:grid-cols-[1fr_2fr]">
			<img
				src="https://picsum.photos/300/300"
				alt=""
			/>
			<div class="space-y-3 py-5">
				<h1 class="text-3xl font-semibold">Information And Support</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, magni
					error in veniam aperiam esse, repudiandae odit inventore aut
					accusantium nemo nam commodi id aspernatur mollitia sed! Quod, dolore
					voluptate.
				</p>
				<button
					class="block rounded border-2 border-primary bg-primary px-5 py-3 font-medium text-white transition duration-500 hover:bg-white hover:text-primary max-sm:mx-auto"
				>
					Find Information and Support
				</button>
			</div>
		</div>
	</div>
</template>

<style>
.arrow-right {
	width: 0;
	height: 0;
	border-right: 20px solid transparent;
	border-bottom: 20px solid hsl(var(--color-secondary));
}
.arrow-left {
	width: 0;
	height: 0;
	border-left: 20px solid transparent;
	border-bottom: 20px solid white;
}
</style>
