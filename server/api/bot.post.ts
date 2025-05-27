import OpenAI from 'openai';
const client = new OpenAI({ apiKey: process.env.NUXT_OPENAI_API_KEY });

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	if (!body?.message) {
		setResponseStatus(event, 400);
		return { status: false, error: 'Message does not exist!' };
	}
	const response = await client.responses.create({
		input: body.message,
		model: 'gpt-3.5-turbo',
		instructions:
			'This is a Mental Health chat bot and refuse to answer if the question is not related to mental health!'
	});

	return { status: true, response: response.output_text };
});
