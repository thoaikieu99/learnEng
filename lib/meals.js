import sql from "better-sqlite3";
const db = sql("words.db");

export async function getWords() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM words WHERE day = 1").all();
}
