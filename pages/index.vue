<script setup lang="ts">
useHead({ title: 'AI Health' });
</script>

<template>
	<div class="bg-[url('/images/health-banner1.jpg')]">
		<div class="container min-h-[400px]">
			<div
				class="mx-5 ml-5 min-h-[400px] max-w-[400px] bg-white/80 p-5 sm:ml-[10%]"
			>
				<h1 class="font-Tagesschrift text-4xl font-semibold leading-relaxed">
					Welcome to the future of mental health support — an AI-powered chatbot, available 24/7 for everyone, anytime, anywhere.
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
					Show resources for stress and concentration.
				</div>
			</div>
			<div class="self-end">
				<div class="arrow-left ml-[80%]" />
				<div class="inline-block rounded-full bg-white p-3 px-5 pr-10">
					Got it! Here are some helpful tools on managing stress and staying focused. 
					Let me know if you'd like quick tips or a deeper dive into any topic.
				</div>
			</div>
		</div>
	</div>
	<div class="bg-secondary">
		<div
			class="mx-auto flex w-full max-w-[850px] flex-col items-center gap-10 px-5 py-10 sm:flex-row sm:gap-5"
		>
			<h1 class="grow-3 text-3xl font-medium text-primary">
				Need someone to talk to? Our intelligent chatbot is here 24/7 to listen, support,
				and guide you through whatever you're going through. 
				Whether you're managing stress, feeling low, or just need a check-in, 
				it's always ready — no appointments, no pressure.
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
				src="/images/health-banner1.jpg"
				alt=""
			/>
			<div class="space-y-3 py-5">
				<h1 class="text-3xl font-semibold">We're Here to Help</h1>
				<p>
					Have questions, need support, or just want to talk? Our team is here for you. 
					Whether you're experiencing challenges or simply want to learn more about our services, 
					feel free to reach out. We're ready to listen — no concern is too small.
				</p>
				<button
					class="block rounded border-2 border-primary bg-primary px-5 py-3 font-medium text-white transition duration-500 hover:bg-white hover:text-primary max-sm:mx-auto"
				>
					<NuxtLink to="/contact">Contact</NuxtLink>
				</button>
			</div>
		</div>
		<div class="grid place-items-center gap-5 py-5 sm:grid-cols-[1fr_2fr]">
			<img
				src="https://picsum.photos/300/300"
				alt=""
			/>
			<div class="space-y-3 py-5">
				<h1 class="text-3xl font-semibold">Quick Answers to Common Questions</h1>
				<p>
					Curious about how our AI chatbot works? Not sure what kind of support we offer? 
					Visit our FAQ page to find answers to common questions about mental health, 
					how to use our platform, and more — all in one convenient place.
				</p>
				<button
					class="block rounded border-2 border-primary bg-primary px-5 py-3 font-medium text-white transition duration-500 hover:bg-white hover:text-primary max-sm:mx-auto"
				>
					<NuxtLink to="/faq">FAQ</NuxtLink>
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
