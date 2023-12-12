import { json, text } from '@sveltejs/kit';
import { ulid } from 'ulid';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { fuelPrice, vehicleMpg, tripDist } = await request.json();
    const calc = tripDist / vehicleMpg * fuelPrice 
    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    const res = formatter.format(calc)
	return json(res);
}
// This handler will respond to PUT, PATCH, DELETE, etc.
/** @type {import('./$types').RequestHandler} */
export async function fallback({ request }) {
	return text(`I caught your ${request.method} request! Err:${ulid()}`);
}