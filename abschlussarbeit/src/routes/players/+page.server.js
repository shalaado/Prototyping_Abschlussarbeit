import db from '$lib/db';

export async function load() {
  const players = await db.getPlayers();
  return { players };
}
