const sql = require("better-sqlite3");
const db = sql("words.db");

const dummyMeals = [
  {
    word: "abandon",
    meaning: "Bo, tu bo",
    day: 1,
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS words (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       word TEXT NOT NULL UNIQUE,
       meaning TEXT NOT NULL,
       day INTEGER NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO words VALUES (
         null,
         @word,
         @meaning,
         @day
      )
   `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();
