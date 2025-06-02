import db from '$lib/db.js';
import { error, redirect } from '@sveltejs/kit';

export async function load({ params }) {
	const team = await db.getTeamById(params.id);
	if (!team) {
		throw error(404, 'Team nicht gefunden');
	}
	return { team };
}

export const actions = {
	default: async ({ params, request }) => {
		const formData = await request.formData();
		const shouldDelete = formData.get('delete');

		if (shouldDelete === 'true') {
			await db.deleteTeam(params.id);
			throw redirect(303, '/teams');
		}

		return { success: false };
	}
};
