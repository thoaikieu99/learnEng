const sql = require("better-sqlite3");
const db = sql("words.db");

const dummyMeals = [
  {
    word: "abandon1",
    meaning: "Bo, tu bo1",
    day: 1,
  },
  {
    word: "abandon2",
    meaning: "Bo, tu bo2",
    day: 1,
  },
  {
    word: "abandon3",
    meaning: "Bo, tu bo3",
    day: 1,
  },
  {
    word: "abandon4",
    meaning: "Bo, tu bo4",
    day: 2,
  },
  {
    word: "abandon5",
    meaning: "Bo, tu bo5",
    day: 2,
  },
  {
    word: "abandon6",
    meaning: "Bo, tu bo6",
    day: 2,
  },
  {
    word: "abandon7",
    meaning: "Bo, tu bo7",
    day: 2,
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
