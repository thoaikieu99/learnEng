import sql from "better-sqlite3";
const db = sql("words.db");

export async function getDayNewWords() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT DISTINCT day FROM words").all();
}

export async function getNewWords(day) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare(`SELECT * FROM words WHERE day = ?`).all(day);
}
