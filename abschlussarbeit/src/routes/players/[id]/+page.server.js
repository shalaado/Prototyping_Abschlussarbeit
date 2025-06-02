import db from '$lib/db';
import { redirect } from '@sveltejs/kit';

/** Lädt Spieler und alle Teams */
export async function load({ params }) {
  const player = await db.getPlayerById(params.id);
  const teams = await db.getTeams();

  if (!player) {
    throw redirect(302, '/players');
  }

  return { player, teams };
}

/** Löscht den Spieler */
export const actions = {
  default: async ({ request, params }) => {
    const formData = await request.formData();
    const isDelete = formData.get('delete');

    if (isDelete) {
      await db.deletePlayer(params.id);
      throw redirect(302, '/players');
    }

    return {};
  }
};
