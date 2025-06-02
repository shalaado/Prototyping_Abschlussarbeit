import db from '$lib/db.js';
import { error, redirect } from '@sveltejs/kit';

export async function load({ params }) {
  const player = await db.getPlayerById(params.id);
  const teams = await db.getTeams();

  if (!player) {
    throw error(404, 'Spieler nicht gefunden');
  }

  return { player, teams };
}

export const actions = {
  default: async ({ request, params }) => {
    const formData = await request.formData();

    const updatedPlayer = {
      name: formData.get('name'),
      age: Number(formData.get('age')),
      position: formData.get('position'),
      teamId: formData.get('teamId')
    };

    await db.updatePlayer(params.id, updatedPlayer);
    throw redirect(303, '/players');
  }
};
