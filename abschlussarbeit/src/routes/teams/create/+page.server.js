import db from '$lib/db.js';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const team = {
      name: formData.get('name'),
      stadium: formData.get('stadium'),
      founded: Number(formData.get('founded')),
      coach: formData.get('coach'),
      captain: formData.get('captain'),
      squadSize: Number(formData.get('squadSize')),
      since: Number(formData.get('since')),
      titles: Number(formData.get('titles'))
    };

    await db.createTeam(team);

    return { success: true };
  }
};
