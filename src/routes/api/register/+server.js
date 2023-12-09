import { json, text } from '@sveltejs/kit';
import { ulid } from 'ulid';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { email } = await request.json();
	return json(email);
}
// This handler will respond to PUT, PATCH, DELETE, etc.
/** @type {import('./$types').RequestHandler} */
export async function fallback({ request }) {
	return text(`I caught your ${request.method} request! Err:${ulid()}`);
}