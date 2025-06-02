import db from '$lib/db.js';
import { redirect } from '@sveltejs/kit';

export async function load() {
	const teams = await db.getTeams();
	return { teams };
}

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const player = {
			name: formData.get('name'),
			age: Number(formData.get('age')),
			position: formData.get('position'),
			teamId: formData.get('teamId')
		};

		await db.createPlayer(player);

		throw redirect(303, '/players');
	}
};
