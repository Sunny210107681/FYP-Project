<script setup lang="ts">
import { toast } from 'vue3-toastify';

const route = useRoute();
const chatbotRef = ref<HTMLElement>();
const footerRef = ref<HTMLElement>();

const showBot = ref(false);
const isLoading = ref(false);
const messagesList = ref<HTMLDivElement>();

const messageText = ref('');
const messages = ref<{ by: string; message: string }[]>([
	{ by: 'bot', message: 'Hello, I am here to help you!' },
	{
		by: 'bot',
		message:
			'Please remember that I am just an AI Assistant and you should take my advice with a grain of salt!'
	}
]);

const hoveringOnFooter = ref(false);

const checkIfOverTheFooter = () => {
	const footerRect = footerRef.value!.getBoundingClientRect();
	const chatbotRect = chatbotRef.value!.getBoundingClientRect();

	hoveringOnFooter.value = !(
		chatbotRect.bottom < footerRect.top || chatbotRect.top > footerRect.bottom
	);
};

onMounted(() => {
	document.addEventListener('scroll', checkIfOverTheFooter);
});

onUnmounted(() => {
	document.removeEventListener('scroll', checkIfOverTheFooter);
});

const BOT_NOT_ALLOWED_PAGES: string[] = ['/contact'];

const isAllowed = computed(() => {
	return (
		BOT_NOT_ALLOWED_PAGES.findIndex((page) => {
			return page == route.path;
		}) < 0
	);
});

watch(
	messages,
	() => {
		if (!messagesList.value) return;
		const element =
			messagesList.value.children[messagesList.value.children.length - 1];
		const { height } = element.getBoundingClientRect();

		const scrollTo = messagesList.value?.scrollHeight - height - 10;
		messagesList.value?.scrollTo({ top: scrollTo });
	},
	{ deep: true, flush: 'post' }
);

type SuccessType = { status: true; response: string };
type ErrorType = { status: false; error: string };
type ResponseType = SuccessType | ErrorType;
const sendMessage = async () => {
	if (!messageText.value) {
		toast.error('Please enter a message first');
		return;
	}
	isLoading.value = true;
	messages.value.push({ by: 'client', message: messageText.value });
	try {
		const response = await $fetch<ResponseType>('/api/bot', {
			method: 'POST',
			body: { message: messageText.value }
		});
		if (response.status) {
			messageText.value = '';
			messages.value.push({ by: 'bot', message: response.response });
		} else {
			toast.error(response.error);
		}
	} catch (error) {
		toast.error('Something went wrong while trying to get your response');
		console.error(
			'ERROR_WHILE_TRYING_TO_GENERATE_BOT_RESPONSE:',
			error instanceof Error ? error.message : error
		);
	} finally {
		isLoading.value = false;
	}
};
</script>

<template>
	<Header />
	<slot />
	<footer
		ref="footerRef"
		class="border-t border-white bg-primary py-10"
	>
		<div class="container text-white">
			<div class="flex gap-5 max-sm:flex-col sm:justify-between">
				<div class="font-semibold">
					<h3 class="text-xl">Call Us</h3>
					<h1 class="text-3xl text-secondary">0300 123 1234</h1>
				</div>
				<div
					class="flex items-center gap-5 *:cursor-pointer max-sm:self-center"
				>
					<Icon
						class="text-white"
						size="40"
						name="tabler:brand-facebook"
					/>
					<Icon
						class="text-white"
						size="35"
						name="simple-icons:instagram"
					/>
					<Icon
						class="text-white"
						size="40"
						name="ph:tiktok-logo"
					/>
					<Icon
						class="text-white"
						size="40"
						name="mingcute:youtube-line"
					/>
				</div>
			</div>
			<div class="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
				<div class="space-y-1">
					<h1 class="text-2xl font-semibold">Heading</h1>
					<p class="font-medium">Link</p>
					<p class="font-medium">Link</p>
					<p class="font-medium">Link</p>
					<p class="font-medium">Link</p>
				</div>
				<div class="space-y-1">
					<h1 class="text-2xl font-semibold">Heading</h1>
					<p class="font-medium">Link</p>
					<p class="font-medium">Link</p>
					<p class="font-medium">Link</p>
					<p class="font-medium">Link</p>
				</div>
			</div>
			<p class="mt-10 text-center text-white">
				© 2025 Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
				temporibus voluptatem minima labore architecto? Mollitia.
			</p>
		</div>
	</footer>

	<div
		v-if="isAllowed"
		ref="chatbotRef"
		class="fixed bottom-8 right-8 transition-opacity duration-500"
		:class="hoveringOnFooter && 'pointer-events-none opacity-0'"
	>
		<button
			v-if="!showBot"
			class="grid place-content-center overflow-hidden rounded-full border border-white bg-primary p-3 text-white"
			@click="showBot = true"
		>
			<Icon
				name="tabler:message-chatbot"
				class="cursor-pointer text-white"
				size="40"
			/>
		</button>
		<div
			v-if="showBot"
			class="mx-5 flex h-[450px] w-full max-w-[350px] flex-col overflow-hidden rounded-xl border-2 border-gray-200 bg-white shadow-2xl"
		>
			<div class="flex items-center justify-between bg-primary p-4">
				<div class="flex items-center gap-3">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-message-square h-6 w-6 text-gray-300"
					>
						<path
							d="M14 9V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-4"
						/>
						<path
							d="M22 18a3 3 0 0 0-3-3h-2.6a1 1 0 0 1-.7-.3L15 12v6a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3z"
						/>
					</svg>
					<h2 class="text-lg font-semibold text-gray-100">Chat Bot</h2>
				</div>
				<div>
					<Icon
						class="cursor-pointer text-white transition hover:scale-105"
						name="material-symbols:close"
						size="30"
						@click="showBot = false"
					/>
				</div>
			</div>

			<div
				ref="messagesList"
				class="flex-1 space-y-2 overflow-y-auto p-4 text-sm"
			>
				<Message
					v-for="message in messages"
					:key="message.message"
					:message
				/>
			</div>

			<div class="border-t border-gray-700 bg-primary p-4">
				<form
					class="flex flex-col gap-2"
					@submit.prevent="sendMessage"
				>
					<input
						v-model="messageText"
						type="text"
						placeholder="Type your message..."
						class="flex-1 rounded-md border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
					<button
						class="flex items-center justify-center gap-1 rounded-md bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
						:class="isLoading ? 'cursor-not-allowed' : 'cursor-pointer'"
						type="submit"
						:disabled="isLoading"
					>
						Send
						<Icon
							name="material-symbols:send-rounded"
							class="text-white"
							size="20"
						/>
					</button>
				</form>
			</div>
		</div>
	</div>
</template>
