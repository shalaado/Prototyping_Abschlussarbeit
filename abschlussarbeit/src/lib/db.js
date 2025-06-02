import { MongoClient, ObjectId } from 'mongodb';
import { DB_URI } from '$env/static/private';

// Verbindung zur MongoDB-Datenbank
const client = new MongoClient(DB_URI);
await client.connect();
const db = client.db('abschlussarbeit');

// Alle Teams abrufen
export async function getTeams() {
  const teams = await db.collection('teams').find().toArray();
  return teams.map(team => ({
    ...team,
    _id: team._id.toString()
  }));
}

// Ein einzelnes Team per ID abrufen
export async function getTeamById(id) {
  const team = await db.collection('teams').findOne({ _id: id });
  if (!team) return null;

  return {
    ...team,
    _id: team._id.toString()
  };
}

// Ein neues Team erstellen
export async function createTeam(team) {
  team._id = new ObjectId().toString(); 
  const result = await db.collection('teams').insertOne(team);
  return result.insertedId.toString();
}

// Ein bestehendes Team aktualisieren
export async function updateTeam(id, updatedTeam) {
  await db.collection('teams').updateOne(
    { _id: id },
    { $set: updatedTeam }
  );
}

// Ein Team löschen
export async function deleteTeam(id) {
  await db.collection('teams').deleteOne({ _id: id });
}

// Alle Spieler abrufen
export async function getPlayers() {
  const players = await db.collection('players').find().toArray();
  return players.map(player => ({
    ...player,
    _id: player._id.toString()
  }));
}

// Einzelner Spieler per ID
export async function getPlayerById(id) {
  const player = await db.collection('players').findOne({ _id: id });
  if (!player) return null;

  return {
    ...player,
    _id: player._id.toString()
  };
}

// Ein neues Spielerprofil erstellen
export async function createPlayer(player) {
	player._id = new ObjectId().toString();
	await db.collection('players').insertOne(player);
}

// Spieler aktualisieren
export async function updatePlayer(id, updatedPlayer) {
  updatedPlayer.teamId = String(updatedPlayer.teamId); // sicherstellen, dass es ein String ist
  await db.collection('players').updateOne(
    { _id: id },
    { $set: updatedPlayer }
  );
}

// Spieler löschen
export async function deletePlayer(id) {
  await db.collection('players').deleteOne({ _id: id });
}



// Export
export default {
  getTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam,
  getPlayers,
  getPlayerById,
  createPlayer,
  updatePlayer,
  deletePlayer
};
