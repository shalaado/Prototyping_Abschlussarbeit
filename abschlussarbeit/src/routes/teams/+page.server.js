import db from '$lib/db';

export async function load() {
  const teams = await db.getTeams();
  return { teams };
}
