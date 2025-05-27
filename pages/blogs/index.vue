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
					<template #heading>Heading</template>
					<template #label> Lorem ipsum dolor sit amet. </template>
					<template #paragraph>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
						dolor cupiditate quisquam nisi debitis ab, quaerat necessitatibus id
						aperiam optio aspernatur dignissimos modi ad quis aliquam eaque
						perferendis ipsa. Repellat!
					</template>
				</Slide>
				<Slide image="https://picsum.photos/600/300">
					<template #heading>Heading 2</template>
					<template #label> Lorem ipsum dolor sit amet. </template>
					<template #paragraph>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
						dolor cupiditate quisquam nisi debitis ab, quaerat necessitatibus id
						aperiam optio aspernatur dignissimos modi ad quis aliquam eaque
						perferendis ipsa. Repellat!
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
			<span class="italic text-primary">Thousands</span>
			Of Stories
		</h1>
		<p class="my-5 text-center">Real people owning their growth</p>
		<div
			class="grid items-start gap-5 py-10 max-lg:px-5 sm:grid-cols-2 lg:grid-cols-3"
		>
			<div class="space-y-5">
				<BlogCard label-color="green">
					<template #label>Label</template>
					<template #heading>Heading</template>
					<template #paragraph>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
						eos nemo aperiam odio quisquam velit, harum nam dignissimos maiores
						culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Architecto eos nemo aperiam odio quisquam velit, harum nam
						dignissimos maiores culpa. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Architecto eos nemo aperiam odio quisquam velit,
						harum nam dignissimos maiores culpa.
					</template>
				</BlogCard>
				<BlogCard>
					<template #label>Label</template>
					<template #heading>Heading</template>
					<template #paragraph>
						eos nemo aperiam odio quisquam velit, harum nam dignissimos maiores
						culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Architecto eos nemo aperiam odio quisquam velit, harum nam
						dignissimos maiores culpa. Lorem ipsum dolor sit amet consectetur
						adipisicing elit.
					</template>
				</BlogCard>
				<BlogCard>
					<template #label>Label</template>
					<template #heading>Heading</template>
					<template #paragraph>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
						eos nemo aperiam odio quisquam velit, harum nam dignissimos maiores
						culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Architecto eos nemo aperiam odio quisquam velit, harum nam
						adipisicing elit. Architecto eos nemo aperiam odio quisquam velit,
						harum nam dignissimos maiores culpa.
					</template>
				</BlogCard>
			</div>
			<div class="space-y-5">
				<BlogCard>
					<template #label>Label</template>
					<template #heading>Heading</template>
					<template #paragraph>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
						eos nemo aperiam odio quisquam velit, harum nam dignissimos maiores
						culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Architecto eos nemo aperiam odio quisquam velit, harum nam harum nam
						dignissimos maiores culpa.
					</template>
				</BlogCard>
				<BlogCard>
					<template #label>Label</template>
					<template #heading>Heading</template>
					<template #paragraph>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
						eos nemo aperiam odio quisquam velit, harum nam dignissimos maiores
						culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Architecto eos nemo aperiam odio quisquam velit, harum nam
						dignissimos maiores culpa. Lorem ipsum dolor sit amet consectetur
						adipisicing elit.
					</template>
				</BlogCard>
				<BlogCard>
					<template #label>Label</template>
					<template #heading>Heading</template>
					<template #paragraph>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
						eos nemo aperiam odio quisquam velit, harum nam dignissimos maiores
						culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Architecto eos nemo aperiam odio quisquam velit, harum nam
						dignissimos maiores culpa. Lorem ipsum dolor sit amet consectetur
						adipisicing maiores culpa. Lorem ipsum dolor sit amet consectetur
						adipisicing maiores culpa. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Architecto eos nemo aperiam odio quisquam velit,
						harum nam dignissimos maiores culpa.
					</template>
				</BlogCard>
			</div>
			<div class="space-y-5">
				<BlogCard label-color="red">
					<template #label>Label</template>
					<template #heading>Heading</template>
					<template #paragraph>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
						Architecto eos nemo aperiam odio quisquam velit, harum nam
						dignissimos maiores culpa. Lorem ipsum dolor sit amet consectetur
					</template>
				</BlogCard>
				<BlogCard>
					<template #label>Label</template>
					<template #heading>Heading</template>
					<template #paragraph>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
						eos nemo aperiam odio quisquam velit, harum nam dignissimos maiores
						culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Architecto eos nemo aperiam odio quisquam velit, harum nam
						dignissimos maiores culpa. Lorem ipsum dolor sit amet consectetur
						adipisicing elit.
					</template>
				</BlogCard>
				<BlogCard>
					<template #label>Label</template>
					<template #heading>Heading</template>
					<template #paragraph>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
						eos nemo aperiam odio quisquam velit, harum nam dignissimos maiores
						dignissimos maiores culpa. Lorem ipsum dolor sit amet consectetur
						adipisicing maiores culpa. Lorem ipsum dolor sit amet consectetur
						adipisicing maiores culpa. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Architecto eos nemo aperiam odio quisquam velit,
						harum nam dignissimos maiores culpa.
					</template>
				</BlogCard>
			</div>
		</div>
	</section>
</template>
