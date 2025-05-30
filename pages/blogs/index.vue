<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue';
import Autoplay from 'embla-carousel-autoplay';

import Slide from './_slide.vue';
import BlogCard from './_blog-card.vue';

useHead({ title: 'Blogs | AI Health' });

const [emblaRef, emblaApi] = emblaCarouselVue({ loop: true }, [
	Autoplay({ delay: 5000 })
]);
const scrollNext = () => emblaApi.value?.scrollNext();
const scrollPrev = () => emblaApi.value?.scrollPrev();
</script>

<template>
	<section>
		<div
			ref="emblaRef"
			class="overflow-hidden"
		>
			<div class="flex">
				<Slide image="https://picsum.photos/600/300">
					<template #heading>How AI Is Changing Mental Health Support</template>
					<template #label>Explore the future of digital wellbeing.</template>
					<template #paragraph>
						From instant check-ins to guided advice, AI-powered tools are 
						transforming how we access emotional support and mental health care.
					</template>
				</Slide>
				<Slide image="https://picsum.photos/600/300">
					<template #heading>What Can a Mental Health Chatbot Do?</template>
					<template #label>More than just automated replies.</template>
					<template #paragraph>
						Learn how AI chatbots offer instant support, share helpful resources,
						and guide users through common mental health topics.
					</template>
				</Slide>
			</div>
		</div>
		<div class="flex justify-center gap-3 py-5">
			<button
				class="grid place-content-center rounded-full bg-primary px-7 py-2"
				@click="scrollPrev"
			>
				<Icon
					name="material-symbols:arrow-left-alt-rounded"
					size="30"
					class="text-white"
				/>
			</button>
			<button
				class="grid place-content-center rounded-full bg-primary px-7 py-2"
				@click="scrollNext"
			>
				<Icon
					name="material-symbols:arrow-right-alt-rounded"
					size="30"
					class="text-white"
				/>
			</button>
		</div>
	</section>
	<section class="container py-10">
		<h1 class="text-center text-4xl font-light">
			<span class="italic text-primary">Shared</span>
			Journeys. Smart Tools.
		</h1>
		<p class="my-5 text-center">Knowledge and reflections from everyday users.</p>
		<div
			class="grid items-start gap-5 py-10 max-lg:px-5 sm:grid-cols-2 lg:grid-cols-3"
		>
			<div class="space-y-5">
				<BlogCard label-color="green">
					<template #label>Jack</template>
					<template #heading>Continuous Availability of Automated Mental Health Resources</template>
					<template #paragraph>
						The integration of AI ensures i got round-the-clock access to structured,
						 non-personal mental health support. With standardized resource guides 
						 and self-help techniques available at any hour, i could engage with reliable, 
						 research-informed practices regardless of time constraints.
					</template>
				</BlogCard>
				<BlogCard>
					<template #label>Lauren</template>
					<template #heading>My First Experience Using an AI for Mental Health</template>
					<template #paragraph>
						I wasn't sure what to expect, but chatting with the AI was
						surprisingly helpful. It offered structured guidance, useful tips, and it
						was available when I needed support the most.
					</template>
				</BlogCard>
			</div>
			<div class="space-y-5">
				<BlogCard label-color="purple">
					<template #label>Sophie</template>
					<template #heading>Why 24/7 Support Made a Difference for Me</template>
					<template #paragraph>
						There were moments I needed to talk but didn’t want to reach out to someone directly. 
						Having access to an AI chatbot at any hour gave me a safe space to express myself.
					</template>
				</BlogCard>
				<BlogCard label-color="orange">
					<template #label>James</template>
					<template #heading> Using the Chatbot to Stay on Track</template>
					<template #paragraph>
						Setting daily mental check-ins with the chatbot helped me
						stay focused. It reminded me to pause, reflect, and apply small 
						tools consistently — something I hadn’t done before.
					</template>
				</BlogCard>
			</div>
			<div class="space-y-5">
				<BlogCard label-color="red">
					<template #label>Sarah</template>
					<template #heading>Why Digital Mental Health Support Works for Me</template>
					<template #paragraph>
						I liked that I could use the AI chatbot at any time, without pressure or 
						needing an appointment. It made support feel 
						more accessible and flexible for my routine.
					</template>
				</BlogCard>
				<BlogCard label-color="black">
					<template #label>Anaya</template>
					<template #heading>What It's Like Getting Step-by-Step Support from AI</template>
					<template #paragraph>
					The chatbot didn’t just respond — it guided me. 
					Step-by-step prompts helped me reflect, 
					stay grounded, and apply techniques without 
					needing to figure it all out on my own.
					</template>
				</BlogCard>
			</div>
		</div>
	</section>
</template>
