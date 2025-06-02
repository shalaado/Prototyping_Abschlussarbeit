import db from '$lib/db.js';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
  const team = await db.getTeamById(params.id);
  if (!team) {
    return {
      status: 404,
      error: new Error('Team nicht gefunden')
    };
  }

  return { team };
}

export const actions = {
  default: async ({ request, params }) => {
    const formData = await request.formData();

    const updatedTeam = {
      name: formData.get('name'),
      stadium: formData.get('stadium'),
      founded: Number(formData.get('founded')),
      coach: formData.get('coach'),
      captain: formData.get('captain'),
      squadSize: Number(formData.get('squadSize')),
      since: Number(formData.get('since')),
      titles: Number(formData.get('titles'))
    };

    await db.updateTeam(params.id, updatedTeam);

    throw redirect(303, `/teams/${params.id}`);
  }
};
